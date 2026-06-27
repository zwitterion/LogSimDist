import { MassSpringLog } from './MassSpringLog';

// PHYSICS_SUB_STEPS: Number of physics iterations per frame.
// Increase -> Simulation is stiffer, less jiggly, and more stable, but uses more CPU.
// Decrease -> Simulation is more "jelly-like", prone to explosions, but uses less CPU.
const PHYSICS_SUB_STEPS = 4;

let simulators: MassSpringLog[] = [];

let scenarioName = '';
let guidebarOBB: any = null;
let cachedTerrainData: any = null;

// Mock kerf width state
let kerfWidthPercentage: number[] = [];
let smoothedClampingPressure: number[] = [];

let activeToolForce: { logIdx: number, particles: number[], direction: { x: number, y: number, z: number }, magnitude: number } | null = null;
let activeWedges: Array<{ id: string, logIdx: number, cutIdx: number, depth: number, localBarkNodeL: number, localBarkNodeR: number, pithNodeL: number, pithNodeR: number }> = [];
let activeCutsArray: Array<number[]> = [];

function buildGlobalSpatialHash(sims: MassSpringLog[], cellSize: number): Map<number, number[]> {
  const globalSpatialHash = new Map<number, number[]>();
  for (let sIdx = 0; sIdx < sims.length; sIdx++) {
    const sim = sims[sIdx];
    if (!sim.positions) continue;
    for (let i = 0; i < sim.numParticles; i++) {
      if (sim.isStatic[i] === 1) continue; // Skip pinned support particles
      const idx = i * 3;
      const x = sim.positions[idx];
      const y = sim.positions[idx + 1];
      const z = sim.positions[idx + 2];
      
      const cx = Math.floor(x / cellSize);
      const cy = Math.floor(y / cellSize);
      const cz = Math.floor(z / cellSize);
      
      const key = ((cx) * 73856093) ^ ((cy) * 19349663) ^ ((cz) * 83492791);
      let cell = globalSpatialHash.get(key);
      if (!cell) {
        cell = [];
        globalSpatialHash.set(key, cell);
      }
      // Encode simulator index and particle index into a single number
      const encoded = (sIdx << 16) | i;
      cell.push(encoded);
    }
  }
  return globalSpatialHash;
}

function testSegmentOBB(
  p0: { x: number; y: number; z: number },
  p1: { x: number; y: number; z: number },
  obb: any
): boolean {
  if (!obb) return false;

  const C = obb.center;
  const u = obb.axes; // array of 3 vectors
  const halfSize = obb.cutHalfSizes || obb.halfSizes;

  // Transform p0 and p1 into OBB local space
  const dx0 = p0.x - C.x;
  const dy0 = p0.y - C.y;
  const dz0 = p0.z - C.z;

  const localP0 = {
    x: dx0 * u[0].x + dy0 * u[0].y + dz0 * u[0].z,
    y: dx0 * u[1].x + dy0 * u[1].y + dz0 * u[1].z,
    z: dx0 * u[2].x + dy0 * u[2].y + dz0 * u[2].z
  };

  const dx1 = p1.x - C.x;
  const dy1 = p1.y - C.y;
  const dz1 = p1.z - C.z;

  const localP1 = {
    x: dx1 * u[0].x + dy1 * u[0].y + dz1 * u[0].z,
    y: dx1 * u[1].x + dy1 * u[1].y + dz1 * u[1].z,
    z: dx1 * u[2].x + dy1 * u[2].y + dz1 * u[2].z
  };

  // Segment midpoint and half-direction
  const m = { x: (localP0.x + localP1.x) * 0.5, y: (localP0.y + localP1.y) * 0.5, z: (localP0.z + localP1.z) * 0.5 };
  const d = { x: localP1.x - localP0.x, y: localP1.y - localP0.y, z: localP1.z - localP0.z };
  const hd = { x: Math.abs(d.x * 0.5), y: Math.abs(d.y * 0.5), z: Math.abs(d.z * 0.5) };

  // Test against AABB faces
  if (Math.abs(m.x) > halfSize.x + hd.x) return false;
  if (Math.abs(m.y) > halfSize.y + hd.y) return false;
  if (Math.abs(m.z) > halfSize.z + hd.z) return false;

  // Test against cross products of segment direction and AABB axes
  const adx = Math.abs(d.x);
  const ady = Math.abs(d.y);
  const adz = Math.abs(d.z);
  const EPS = 1e-6; // Prevents floating-point precision edge cases
  if (Math.abs(m.y * d.z - m.z * d.y) > halfSize.y * adz + halfSize.z * ady + EPS) return false;
  if (Math.abs(m.z * d.x - m.x * d.z) > halfSize.x * adz + halfSize.z * adx + EPS) return false;
  if (Math.abs(m.x * d.y - m.y * d.x) > halfSize.x * ady + halfSize.y * adx + EPS) return false;

  return true;
}

function testPointOBB(p: { x: number; y: number; z: number }, obb: any): boolean {
  if (!obb) return false;

  const C = obb.center;
  const u = obb.axes;
  const halfSize = obb.kerfDetectHalfSizes || obb.cutHalfSizes || obb.halfSizes;

  const dx = p.x - C.x;
  const dy = p.y - C.y;
  const dz = p.z - C.z;

  const rx = Math.abs(dx * u[0].x + dy * u[0].y + dz * u[0].z);
  const ry = Math.abs(dx * u[1].x + dy * u[1].y + dz * u[1].z);
  const rz = Math.abs(dx * u[2].x + dy * u[2].y + dz * u[2].z);

  return rx <= halfSize.x && ry <= halfSize.y && rz <= halfSize.z;
}

self.onmessage = (event: MessageEvent) => {
  const { type, data, buffer } = event.data;

  switch (type) {
    case 'INIT':
      scenarioName = data.scenarioName;
      simulators = [];
      const logs = data.logs || (data.log ? [data.log] : []);
      logs.forEach((logConfig: any) => {
        const sim = new MassSpringLog();
        const supports = logConfig.supports || [];
        const logPos = logConfig.position || [0, 1, 0];
        const logRot = logConfig.rotation || [0, 0, 0];
        sim.initialize(
          logConfig.length,
          logConfig.diameter / 2, // Radius = diameter / 2
          logConfig.density,
          supports,
          logPos,
          logRot
        );
        if (cachedTerrainData) {
          sim.setTerrain(cachedTerrainData);
        }
        simulators.push(sim);
      });
      activeWedges = [];
      activeCutsArray = simulators.map(() => []);
      smoothedClampingPressure = simulators.map(() => 0);
      kerfWidthPercentage = simulators.map(() => 100);
      (self as any).cutAfterRingIndex = undefined;
      break;

    case 'SET_TERRAIN':
      cachedTerrainData = data;
      for (const sim of simulators) {
        sim.setTerrain(data);
      }
      break;

    case 'UPDATE_SAW_TRANSFORM':
      guidebarOBB = data.guidebarOBB;
      break;

    case 'SET_TOOL_FORCE': {
      if (data.active) {
        const { logIdx, position, direction, radius, magnitude } = data;
        const simIdx = logIdx !== undefined ? logIdx : 0;
        const sim = simulators[simIdx];
        if (sim) {
          const affectedParticles = [];
          const r2 = radius * radius;
          for (let i = 0; i < sim.numParticles; i++) {
            const px = sim.positions[i * 3];
            const py = sim.positions[i * 3 + 1];
            const pz = sim.positions[i * 3 + 2];
            const dx = px - position.x;
            const dy = py - position.y;
            const dz = pz - position.z;
            if (dx * dx + dy * dy + dz * dz <= r2) {
              affectedParticles.push(i);
            }
          }
          activeToolForce = { logIdx: simIdx, particles: affectedParticles, direction, magnitude };
        }
      } else {
        activeToolForce = null;
      }
      break;
    }

    case 'POUND_WEDGE': {
      const { logIdx, cutIdx, isTop, depthIncrement, maxDepth } = data;
      const simIdx = logIdx !== undefined ? logIdx : 0;
      const sim = simulators[simIdx];
      if (sim) {
        // Find existing wedge for this specific log
        let wedge = activeWedges.find(w => w.logIdx === simIdx && w.cutIdx === cutIdx && w.id === (isTop ? 'top' : 'bottom'));

        if (!wedge) {
          // Create new wedge locked to current particles
          const ringL = (cutIdx + 1) * sim.particlesPerRing;
          const ringR = (cutIdx + 2) * sim.particlesPerRing;

          let bestBarkL = ringL + 9;
          let bestY = isTop ? -Infinity : Infinity;

          for (let i = 0; i < 16; i++) {
            const node = ringL + 9 + i;
            const py = sim.positions[node * 3 + 1];
            if (isTop ? py > bestY : py < bestY) {
              bestY = py;
              bestBarkL = node;
            }
          }

          const bestBarkR = ringR + 9 + (bestBarkL - (ringL + 9));

          wedge = {
            id: isTop ? 'top' : 'bottom',
            logIdx: simIdx,
            cutIdx,
            depth: 0,
            localBarkNodeL: bestBarkL,
            localBarkNodeR: bestBarkR,
            pithNodeL: ringL,
            pithNodeR: ringR
          };
          activeWedges.push(wedge);
        }

        wedge.depth = Math.min(wedge.depth + depthIncrement, maxDepth);
      }
      break;
    }

    case 'REMOVE_WEDGE': {
      const simIdx = data.logIdx !== undefined ? data.logIdx : 0;
      activeWedges = activeWedges.filter(w => !(w.logIdx === simIdx && w.cutIdx === data.cutIdx && w.id === data.id));
      break;
    }

    case 'INSERT_ENDCAPS': {
      const { guidebarCenter, normal, kerfWidth, kerfPadding } = data;
      console.log("physics.worker.ts: INSERT_ENDCAPS message received!", { guidebarCenter, normal, kerfWidth, kerfPadding });
      try {
        const C = guidebarCenter;
        const N = { x: normal.x, y: normal.y, z: normal.z };
        if (N.x < 0) {
          N.x = -N.x;
          N.y = -N.y;
          N.z = -N.z;
        }
        let bestSimIdx = -1;
        let bestR = -1;
        let bestT = 0.5;
        for (let sIdx = 0; sIdx < simulators.length; sIdx++) {
          const sim = simulators[sIdx];
          for (let r = 0; r < sim.numRings - 1; r++) {
            const p1x = sim.positions[(r * sim.particlesPerRing) * 3];
            const p1y = sim.positions[(r * sim.particlesPerRing) * 3 + 1];
            const p1z = sim.positions[(r * sim.particlesPerRing) * 3 + 2];
            const p2x = sim.positions[((r + 1) * sim.particlesPerRing) * 3];
            const p2y = sim.positions[((r + 1) * sim.particlesPerRing) * 3 + 1];
            const p2z = sim.positions[((r + 1) * sim.particlesPerRing) * 3 + 2];

            const d1 = N.x * (p1x - C.x) + N.y * (p1y - C.y) + N.z * (p1z - C.z);
            const d2 = N.x * (p2x - C.x) + N.y * (p2y - C.y) + N.z * (p2z - C.z);

            if (d1 * d2 <= 0 && Math.abs(d1 - d2) > 0.0001) {
              bestT = Math.abs(d1) / (Math.abs(d1) + Math.abs(d2));
              bestR = r;
              bestSimIdx = sIdx;
              break;
            }
          }
          if (bestSimIdx !== -1) break;
        }

        if (bestSimIdx === -1) {
          console.warn("physics.worker.ts: Could not find a valid ring to cut");
          break;
        }

        const sim = simulators[bestSimIdx];
        sim.kerfCollisionMargin = kerfWidth * 0.85;
        const cutAfterRingIndex = sim.insertEndcaps(bestR, bestT, N, kerfWidth, kerfPadding !== undefined ? kerfPadding : 0.001);
        console.log(`physics.worker.ts: insertEndcaps completed for log ${bestSimIdx}, cutAfterRingIndex =`, cutAfterRingIndex);
        
        const activeCuts = activeCutsArray[bestSimIdx];
        for (let i = 0; i < activeCuts.length; i++) {
          if (activeCuts[i] >= cutAfterRingIndex) {
            activeCuts[i] += 2;
          }
        }
        activeCuts.push(cutAfterRingIndex);
        activeCuts.sort((a, b) => a - b);
        (self as any).cutAfterRingIndex = cutAfterRingIndex;
      } catch (err) {
        console.error("physics.worker.ts: Error in insertEndcaps:", err);
      }
      break;
    }

    case 'STEP': {
      try {
        const deltaTime = data.deltaTime;
        const throttleActive = data.throttleActive;

        if (data.guidebarOBB !== undefined) {
          guidebarOBB = data.guidebarOBB;
        }
        if (data.gravity !== undefined) {
          for (const sim of simulators) {
            sim.gravityY = -data.gravity;
          }
        }

        // Auto-insert endcaps on touch if touching an uncut section of any log
        if (throttleActive && guidebarOBB) {
          for (let sIdx = 0; sIdx < simulators.length; sIdx++) {
            const sim = simulators[sIdx];
            const activeCuts = activeCutsArray[sIdx];

            let touchedNew = false;
            for (const spring of sim.springs) {
              if (spring.L0 < 0) continue;
              const p0 = { x: sim.positions[spring.i1 * 3], y: sim.positions[spring.i1 * 3 + 1], z: sim.positions[spring.i1 * 3 + 2] };
              const p1 = { x: sim.positions[spring.i2 * 3], y: sim.positions[spring.i2 * 3 + 1], z: sim.positions[spring.i2 * 3 + 2] };
              if (testSegmentOBB(p0, p1, guidebarOBB)) {
                let isCrossKerf = false;
                for (const cutIdx of activeCuts) {
                  const P_insert = (cutIdx + 1) * sim.particlesPerRing;
                  if ((spring.i1 < P_insert && spring.i2 >= P_insert + 50) ||
                    (spring.i2 < P_insert && spring.i1 >= P_insert + 50)) {
                    isCrossKerf = true;
                    break;
                  }
                }

                if (!isCrossKerf) {
                  const ring1 = Math.floor(spring.i1 / sim.particlesPerRing);
                  const ring2 = Math.floor(spring.i2 / sim.particlesPerRing);
                  if (Math.abs(ring1 - ring2) === 1 && spring.k === 1.0) { // k=1.0 is grain
                    let nearKerf = false;
                    for (const cutIdx of activeCuts) {
                      if (ring1 >= cutIdx - 1 && ring1 <= cutIdx + 4) nearKerf = true;
                      if (ring2 >= cutIdx - 1 && ring2 <= cutIdx + 4) nearKerf = true;
                    }
                    if (!nearKerf) {
                      touchedNew = true;
                      break;
                    }
                  }
                }
              }
            }

            if (touchedNew) {
              console.log(`physics.worker.ts: Auto-inserting endcaps for log ${sIdx}.`);
              const C = guidebarOBB.center;
              const N = { x: guidebarOBB.axes[0].x, y: guidebarOBB.axes[0].y, z: guidebarOBB.axes[0].z };
              if (N.x < 0) {
                N.x = -N.x; N.y = -N.y; N.z = -N.z;
              }
              let bestR = -1;
              let bestT = 0.5;
              for (let r = 0; r < sim.numRings - 1; r++) {
                const p1x = sim.positions[(r * sim.particlesPerRing) * 3];
                const p1y = sim.positions[(r * sim.particlesPerRing) * 3 + 1];
                const p1z = sim.positions[(r * sim.particlesPerRing) * 3 + 2];
                const p2x = sim.positions[((r + 1) * sim.particlesPerRing) * 3];
                const p2y = sim.positions[((r + 1) * sim.particlesPerRing) * 3 + 1];
                const p2z = sim.positions[((r + 1) * sim.particlesPerRing) * 3 + 2];

                const d1 = N.x * (p1x - C.x) + N.y * (p1y - C.y) + N.z * (p1z - C.z);
                const d2 = N.x * (p2x - C.x) + N.y * (p2y - C.y) + N.z * (p2z - C.z);

                if (d1 * d2 <= 0 && Math.abs(d1 - d2) > 0.0001) {
                  bestT = Math.abs(d1) / (Math.abs(d1) + Math.abs(d2));
                  bestR = r;
                  break;
                }
              }
              if (bestR !== -1) {
                const kerfWidth = data.kerfWidth !== undefined ? data.kerfWidth : 0.06;
                const kerfPadding = data.kerfPadding !== undefined ? data.kerfPadding : 0.001;
                sim.kerfCollisionMargin = kerfWidth * 0.85;
                const cutAfterRingIndex = sim.insertEndcaps(bestR, bestT, N, kerfWidth, kerfPadding);

                for (let i = 0; i < activeCuts.length; i++) {
                  if (activeCuts[i] >= cutAfterRingIndex) activeCuts[i] += 2;
                }
                activeCuts.push(cutAfterRingIndex);
                activeCuts.sort((a, b) => a - b);
                (self as any).cutAfterRingIndex = cutAfterRingIndex;
              }
            }
          }
        }

        // Calculate intersecting elements for debugging overlays per log AND break springs
        const intersectingSpringsArray: number[][] = simulators.map(() => []);
        const intersectingEndcapNodesArray: number[][] = simulators.map(() => []);

        if (guidebarOBB) {
          for (let sIdx = 0; sIdx < simulators.length; sIdx++) {
            const sim = simulators[sIdx];
            const activeCuts = activeCutsArray[sIdx];
            const springsIntersect = intersectingSpringsArray[sIdx];

            for (let s = 0; s < sim.springs.length; s++) {
              const spring = sim.springs[s];
              if (spring.L0 < 0) continue;

              const p0 = { x: sim.positions[spring.i1 * 3], y: sim.positions[spring.i1 * 3 + 1], z: sim.positions[spring.i1 * 3 + 2] };
              const p1 = { x: sim.positions[spring.i2 * 3], y: sim.positions[spring.i2 * 3 + 1], z: sim.positions[spring.i2 * 3 + 2] };

              if (testSegmentOBB(p0, p1, guidebarOBB)) {
                let isCrossKerf = false;
                for (const cutIdx of activeCuts) {
                  const P_insert = (cutIdx + 1) * sim.particlesPerRing;
                  const splitIdx = P_insert + 25;
                  if ((spring.i1 < splitIdx && spring.i2 >= splitIdx) ||
                    (spring.i2 < splitIdx && spring.i1 >= splitIdx)) {
                    isCrossKerf = true;
                    break;
                  }
                }

                if (activeCuts.length === 0 || isCrossKerf) {
                  springsIntersect.push(spring.i1, spring.i2);
                  if (throttleActive && isCrossKerf) sim.breakSpring(spring);
                }
              }
            }
          }
        }

        // Apply external tool forces
        let activeToolPosition = null;
        for (const sim of simulators) {
          if (sim.externalForces) {
            sim.externalForces.fill(0);
          }
        }

        if (activeToolForce && activeToolForce.particles.length > 0) {
          const sim = simulators[activeToolForce.logIdx];
          if (sim) {
            let sumX = 0, sumY = 0, sumZ = 0;
            const perParticleMagnitude = activeToolForce.magnitude / activeToolForce.particles.length;
            const fx = activeToolForce.direction.x * perParticleMagnitude;
            const fy = activeToolForce.direction.y * perParticleMagnitude;
            const fz = activeToolForce.direction.z * perParticleMagnitude;

            for (const pIdx of activeToolForce.particles) {
              sim.externalForces[pIdx * 3] = fx;
              sim.externalForces[pIdx * 3 + 1] = fy;
              sim.externalForces[pIdx * 3 + 2] = fz;

              sumX += sim.positions[pIdx * 3];
              sumY += sim.positions[pIdx * 3 + 1];
              sumZ += sim.positions[pIdx * 3 + 2];
            }

            activeToolPosition = {
              x: sumX / activeToolForce.particles.length,
              y: sumY / activeToolForce.particles.length,
              z: sumZ / activeToolForce.particles.length
            };
          }
        }

        const subDt = deltaTime / PHYSICS_SUB_STEPS;
        const totalPressureArray = simulators.map(() => 0);
        const frictionDebugDataArray = data.debugFrictionForces ? simulators.map(() => ({ nodes: [] as number[], vectors: [] as { x: number, y: number, z: number }[] })) : undefined;

        const tStart = performance.now();
        let tIntegrate = 0;
        let tHash = 0;
        let tCollide = 0;
        let tSprings = 0;

        for (let s = 0; s < PHYSICS_SUB_STEPS; s++) {
          // 1. Integrate and fracture all logs
          const tIntegrateStart = performance.now();
          for (const sim of simulators) {
            sim.integrateAndFracture(subDt);
          }
          tIntegrate += performance.now() - tIntegrateStart;

          // 2. Build global spatial hash
          const tHashStart = performance.now();
          const globalCellSize = Math.max(...simulators.map(sim => sim.cellSize));
          const globalSpatialHash = buildGlobalSpatialHash(simulators, globalCellSize);
          tHash += performance.now() - tHashStart;

          // 3. Resolve collisions across all logs
          const tCollideStart = performance.now();
          if (data.resolveCollisions !== false) {
            for (let sIdx = 0; sIdx < simulators.length; sIdx++) {
              totalPressureArray[sIdx] += simulators[sIdx].resolveCollisionsGlobal(
                sIdx,
                simulators,
                globalSpatialHash,
                globalCellSize,
                guidebarOBB,
                data.enableEndcapFriction,
                data.debugFrictionForces,
                frictionDebugDataArray ? frictionDebugDataArray[sIdx] : undefined,
                activeWedges
              );
            }
          }
          tCollide += performance.now() - tCollideStart;

          // 4. Solve springs
          const tSpringsStart = performance.now();
          for (let sIdx = 0; sIdx < simulators.length; sIdx++) {
            simulators[sIdx].solveSprings(sIdx, simulators);
          }
          tSprings += performance.now() - tSpringsStart;
        }

        const tDuration = performance.now() - tStart;
        if (data.showPerfWarnings && tDuration > 16.6) {
          console.warn(`[Physics Worker] Step took ${tDuration.toFixed(1)}ms (Target: < 16.6ms) - Running in SLOW MOTION (Integrate: ${tIntegrate.toFixed(1)}ms, Hash: ${tHash.toFixed(1)}ms, Collide: ${tCollide.toFixed(1)}ms, Springs: ${tSprings.toFixed(1)}ms)`);
        }

        // Apply low pass filter to smooth out clamping pressure per log
        for (let sIdx = 0; sIdx < simulators.length; sIdx++) {
          smoothedClampingPressure[sIdx] = smoothedClampingPressure[sIdx] * 0.9 + totalPressureArray[sIdx] * 0.1;
        }

        // Check spring stretch logs for debug output
        (self as any).stepCount = ((self as any).stepCount || 0) + 1;
        if ((self as any).stepCount % 60 === 0 && simulators.length > 0) {
          let maxStretch = 0;
          let brokenCount = 0;
          let totalSprings = 0;
          for (const sim of simulators) {
            totalSprings += sim.springs.length;
            for (const s of sim.springs) {
              if (s.L0 < 0) {
                brokenCount++;
                continue;
              }
              const idx1 = s.i1 * 3;
              const idx2 = s.i2 * 3;
              const dx = sim.positions[idx1] - sim.positions[idx2];
              const dy = sim.positions[idx1 + 1] - sim.positions[idx2 + 1];
              const dz = sim.positions[idx1 + 2] - sim.positions[idx2 + 2];
              const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
              const stretch = dist / s.L0;
              if (stretch > maxStretch) maxStretch = stretch;
            }
          }
          console.log(`[Physics Debug] step: ${(self as any).stepCount}, maxStretch: ${maxStretch.toFixed(4)}, broken: ${brokenCount}/${totalSprings}`);
        }

        // Calculate kerf width pinch values and active bark segments per log
        const maxPressure = 0.7;
        for (let sIdx = 0; sIdx < simulators.length; sIdx++) {
          const activeCuts = activeCutsArray[sIdx];
          const springsIntersect = intersectingSpringsArray[sIdx];
          const nodesIntersect = intersectingEndcapNodesArray[sIdx];
          
          if (guidebarOBB && activeCuts.length > 0 && (springsIntersect.length > 0 || nodesIntersect.length > 0)) {
            const pressurePercent = (smoothedClampingPressure[sIdx] / maxPressure) * 100;
            if (scenarioName === 'Top Bind') {
              kerfWidthPercentage[sIdx] = Math.max(85, Math.min(100, 100 - pressurePercent));
            } else {
              kerfWidthPercentage[sIdx] = Math.max(0, Math.min(100, 100 - pressurePercent));
            }
          } else {
            kerfWidthPercentage[sIdx] = Math.min(100, kerfWidthPercentage[sIdx] + 30 * deltaTime);
            smoothedClampingPressure[sIdx] = 0;
          }
        }

        const minKerfWidthPercentage = simulators.length > 0 ? Math.min(...kerfWidthPercentage) : 100;

        // Calculate intersecting endcap nodes for visual overlays (AFTER simulator update to get latest positions)
        if (guidebarOBB) {
          for (let sIdx = 0; sIdx < simulators.length; sIdx++) {
            const sim = simulators[sIdx];
            const activeCuts = activeCutsArray[sIdx];
            const endcapsIntersect = intersectingEndcapNodesArray[sIdx];
            
            for (const cutIdx of activeCuts) {
              const pPerRing = sim.particlesPerRing;
              for (let i = 0; i < pPerRing; i++) {
                const nC1 = (cutIdx + 1) * pPerRing + i;
                const nC2 = (cutIdx + 2) * pPerRing + i;

                const p1 = { x: sim.positions[nC1 * 3], y: sim.positions[nC1 * 3 + 1], z: sim.positions[nC1 * 3 + 2] };
                const p2 = { x: sim.positions[nC2 * 3], y: sim.positions[nC2 * 3 + 1], z: sim.positions[nC2 * 3 + 2] };

                if (testPointOBB(p1, guidebarOBB)) {
                  endcapsIntersect.push(nC1);
                }
                if (testPointOBB(p2, guidebarOBB)) {
                  endcapsIntersect.push(nC2);
                }
              }
            }
          }
        }

        // Aggregate total particle count
        let totalParticlesCount = 0;
        for (const sim of simulators) {
          totalParticlesCount += sim.numParticles;
        }

        // Allocate single contiguous Float32Array for positions
        let responseBuffer: ArrayBuffer;
        const requiredFloats = totalParticlesCount * 3;
        if (buffer && buffer.byteLength >= requiredFloats * 4) {
          responseBuffer = buffer;
        } else {
          responseBuffer = new Float32Array(requiredFloats).buffer;
        }

        const floatView = new Float32Array(responseBuffer);
        let writeOffset = 0;
        for (const sim of simulators) {
          floatView.set(sim.positions, writeOffset);
          writeOffset += sim.numParticles * 3;
        }

        // Dynamic Wedge Removal: check if wedge is loose
        if (activeWedges.length > 0) {
          activeWedges = activeWedges.filter(wedge => {
            const sim = simulators[wedge.logIdx];
            if (!sim) return false;

            const bxL = sim.positions[wedge.localBarkNodeL * 3];
            const byL = sim.positions[wedge.localBarkNodeL * 3 + 1];
            const bzL = sim.positions[wedge.localBarkNodeL * 3 + 2];

            const bxR = sim.positions[wedge.localBarkNodeR * 3];
            const byR = sim.positions[wedge.localBarkNodeR * 3 + 1];
            const bzR = sim.positions[wedge.localBarkNodeR * 3 + 2];

            const dist = Math.sqrt((bxR - bxL) ** 2 + (byR - byL) ** 2 + (bzR - bzL) ** 2);
            if (dist > 0.12) {
              console.log(`physics.worker.ts: Wedge ${wedge.id} at log ${wedge.logIdx} kerf ${wedge.cutIdx} fell out! (Gap: ${dist.toFixed(3)}m)`);
              return false;
            }
            return true;
          });
        }

        // Calculate independent logs piece IDs globally and strains per particle
        let independentLogPieceOffset = 0;
        const globalVertexStrains = new Float32Array(totalParticlesCount);
        const globalParticleLogIds = new Uint16Array(totalParticlesCount);
        let globalPartOffset = 0;

        const logsData = simulators.map((sim, sIdx) => {
          const activeCuts = activeCutsArray[sIdx];
          
          // 1. Bark segments
          const activeBarkSegments: boolean[] = [];
          for (const cutIdx of activeCuts) {
            const pPerRing = sim.particlesPerRing;
            for (let p = 0; p < 16; p++) {
              const nodeLeft = (cutIdx + 1) * pPerRing + 9 + p;
              const nodeRight = (cutIdx + 2) * pPerRing + 9 + p;
              const spring = sim.springs.find(s =>
                (s.i1 === nodeLeft && s.i2 === nodeRight) ||
                (s.i1 === nodeRight && s.i2 === nodeLeft)
              );
              if (spring && spring.L0 < 0) {
                activeBarkSegments.push(false);
              } else {
                activeBarkSegments.push(true);
              }
            }
          }

          // 2. Vertex strains local
          const localStrains = new Float32Array(sim.numParticles);
          const localSpringCounts = new Uint8Array(sim.numParticles);
          for (const spring of sim.springs) {
            if (spring.L0 < 0 || spring.L0 < 0.05) continue;
            const idx1 = spring.i1 * 3;
            const idx2 = spring.i2 * 3;
            const dx = sim.positions[idx1] - sim.positions[idx2];
            const dy = sim.positions[idx1 + 1] - sim.positions[idx2 + 1];
            const dz = sim.positions[idx1 + 2] - sim.positions[idx2 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            const strain = (dist - spring.L0) / spring.L0;

            localStrains[spring.i1] += strain;
            localSpringCounts[spring.i1]++;
            localStrains[spring.i2] += strain;
            localSpringCounts[spring.i2]++;
          }
          for (let i = 0; i < sim.numParticles; i++) {
            if (localSpringCounts[i] > 0) {
              localStrains[i] /= localSpringCounts[i];
            }
          }
          globalVertexStrains.set(localStrains, globalPartOffset);

          // 3. Local independent logs
          let localIndependentLogsCount = 1;
          if (sim.segmentIds && sim.springs) {
            let maxSegId = 0;
            for (let i = 0; i < sim.segmentIds.length; i++) {
              if (sim.segmentIds[i] > maxSegId) {
                maxSegId = sim.segmentIds[i];
              }
            }

            const parent = new Uint16Array(maxSegId + 1);
            for (let i = 0; i <= maxSegId; i++) parent[i] = i;

            const findRoot = (i: number): number => {
              if (parent[i] === i) return i;
              parent[i] = findRoot(parent[i]);
              return parent[i];
            };

            const union = (i: number, j: number) => {
              const rootI = findRoot(i);
              const rootJ = findRoot(j);
              if (rootI !== rootJ) {
                parent[rootI] = rootJ;
              }
            };

            for (const spring of sim.springs) {
              if (spring.L0 < 0) continue;
              const s1 = sim.segmentIds[spring.i1];
              const s2 = sim.segmentIds[spring.i2];
              if (s1 !== s2) {
                union(s1, s2);
              }
            }

            const rootToIndex = new Map<number, number>();
            localIndependentLogsCount = 0;
            const segmentToLogMap = new Uint16Array(maxSegId + 1);
            for (let i = 0; i <= maxSegId; i++) {
              const root = findRoot(i);
              if (!rootToIndex.has(root)) {
                rootToIndex.set(root, localIndependentLogsCount++);
              }
              segmentToLogMap[i] = rootToIndex.get(root)!;
            }

            for (let i = 0; i < sim.numParticles; i++) {
              globalParticleLogIds[globalPartOffset + i] = segmentToLogMap[sim.segmentIds[i]] + independentLogPieceOffset;
            }
          } else {
            for (let i = 0; i < sim.numParticles; i++) {
              globalParticleLogIds[globalPartOffset + i] = independentLogPieceOffset;
            }
          }
          independentLogPieceOffset += localIndependentLogsCount;
          globalPartOffset += sim.numParticles;

          return {
            numParticles: sim.numParticles,
            numRings: sim.numRings,
            particlesPerRing: sim.particlesPerRing,
            activeBarkSegments,
            intersectingSprings: intersectingSpringsArray[sIdx],
            intersectingEndcapNodes: intersectingEndcapNodesArray[sIdx],
            activeCuts
          };
        });

        // 4. Calculate dynamicKerfCenterX
        let dynamicKerfCenterX: number | null = null;
        if (guidebarOBB) {
          let closestCutDist = Infinity;
          for (let sIdx = 0; sIdx < simulators.length; sIdx++) {
            const sim = simulators[sIdx];
            const activeCuts = activeCutsArray[sIdx];
            for (const cutIdx of activeCuts) {
              const leftRing = (cutIdx + 1) * sim.particlesPerRing;
              const rightRing = (cutIdx + 2) * sim.particlesPerRing;
              let sumX = 0, sumY = 0, sumZ = 0;
              for (let i = 0; i < sim.particlesPerRing; i++) {
                sumX += sim.positions[(leftRing + i) * 3];
                sumX += sim.positions[(rightRing + i) * 3];
                sumY += sim.positions[(leftRing + i) * 3 + 1];
                sumY += sim.positions[(rightRing + i) * 3 + 1];
                sumZ += sim.positions[(leftRing + i) * 3 + 2];
                sumZ += sim.positions[(rightRing + i) * 3 + 2];
              }
              const kerfCenterX = sumX / (sim.particlesPerRing * 2);
              const kerfCenterY = sumY / (sim.particlesPerRing * 2);
              const kerfCenterZ = sumZ / (sim.particlesPerRing * 2);
              
              const dx = guidebarOBB.center.x - kerfCenterX;
              const dy = guidebarOBB.center.y - kerfCenterY;
              const dz = guidebarOBB.center.z - kerfCenterZ;
              const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
              if (dist < closestCutDist && dist < 0.3) {
                closestCutDist = dist;
                dynamicKerfCenterX = kerfCenterX;
              }
            }
          }
        }

        // Calculate wedge world visual data
        const wedgesData = activeWedges.map(w => {
          const sim = simulators[w.logIdx];
          const pxL = sim.positions[w.localBarkNodeL * 3];
          const pyL = sim.positions[w.localBarkNodeL * 3 + 1];
          const pzL = sim.positions[w.localBarkNodeL * 3 + 2];
          const pxR = sim.positions[w.localBarkNodeR * 3];
          const pyR = sim.positions[w.localBarkNodeR * 3 + 1];
          const pzR = sim.positions[w.localBarkNodeR * 3 + 2];

          const barkX = (pxL + pxR) / 2;
          const barkY = (pyL + pyR) / 2;
          const barkZ = (pzL + pzR) / 2;

          const pX_L = sim.positions[w.pithNodeL * 3];
          const pY_L = sim.positions[w.pithNodeL * 3 + 1];
          const pZ_L = sim.positions[w.pithNodeL * 3 + 2];
          const pX_R = sim.positions[w.pithNodeR * 3];
          const pY_R = sim.positions[w.pithNodeR * 3 + 1];
          const pZ_R = sim.positions[w.pithNodeR * 3 + 2];

          const pithX = (pX_L + pX_R) / 2;
          const pithY = (pY_L + pY_R) / 2;
          const pithZ = (pZ_L + pZ_R) / 2;

          const nx = barkX - pithX;
          const ny = barkY - pithY;
          const nz = barkZ - pithZ;
          const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;

          return {
            id: w.id,
            logIdx: w.logIdx,
            cutIdx: w.cutIdx,
            depth: w.depth,
            isTop: w.id === 'top',
            position: {
              x: barkX - (nx / len) * w.depth,
              y: barkY - (ny / len) * w.depth,
              z: barkZ - (nz / len) * w.depth
            },
            normal: {
              x: nx / len,
              y: ny / len,
              z: nz / len
            }
          };
        });

        const frictionDebugDataAgg = frictionDebugDataArray ? {
          nodes: ([] as number[]).concat(...frictionDebugDataArray.map((fd, sIdx) => {
            let offset = 0;
            for (let s = 0; s < sIdx; s++) offset += simulators[s].numParticles;
            return fd.nodes.map(n => n + offset);
          })),
          vectors: ([] as { x: number, y: number, z: number }[]).concat(...frictionDebugDataArray.map(fd => fd.vectors))
        } : undefined;

        self.postMessage({
          type: 'STEP_COMPLETE',
          data: {
            elapsedTime: simulators[0] ? simulators[0].elapsedTime : 0,
            kerfWidthPercentage: Math.round(minKerfWidthPercentage),
            numParticles: totalParticlesCount,
            cutAfterRingIndex: (self as any).cutAfterRingIndex !== undefined ? (self as any).cutAfterRingIndex : null,
            activeWedges: wedgesData,
            independentLogsCount: independentLogPieceOffset,
            particleLogIds: globalParticleLogIds,
            vertexStrains: globalVertexStrains,
            activeToolPosition,
            dynamicKerfCenterX,
            frictionDebugData: frictionDebugDataAgg,
            logsData
          },
          buffer: responseBuffer
        }, [
          responseBuffer, 
          globalVertexStrains.buffer, 
          globalParticleLogIds.buffer
        ]);
        (self as any).cutAfterRingIndex = null;
      } catch (err) {
        console.error("physics.worker.ts: Error in STEP handler:", err);
      }
      break;
    }
  }
};
