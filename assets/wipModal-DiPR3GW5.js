(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="174",Wi={ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hh=0,oc=1,Gh=2,Gl=1,Vl=2,Pn=3,Nn=0,Gt=1,It=2,$n=0,Xi=1,ac=2,cc=3,lc=4,Vh=5,mi=100,Wh=101,Xh=102,jh=103,Yh=104,qh=200,Kh=201,Zh=202,$h=203,Lo=204,Do=205,Qh=206,Jh=207,ed=208,td=209,nd=210,id=211,sd=212,rd=213,od=214,Uo=0,No=1,Fo=2,Ki=3,Oo=4,Bo=5,ko=6,zo=7,Wl=0,ad=1,cd=2,Qn=0,ld=1,hd=2,dd=3,ud=4,fd=5,pd=6,md=7,hc="attached",gd="detached",Xl=300,Zi=301,$i=302,Ho=303,Go=304,Fr=306,Ot=1e3,Kn=1001,Ar=1002,Vt=1003,jl=1004,Ms=1005,Zt=1006,xr=1007,Ln=1008,Fn=1009,Yl=1010,ql=1011,Ps=1012,Ra=1013,xi=1014,fn=1015,Us=1016,Ca=1017,Pa=1018,Qi=1020,Kl=35902,Zl=1021,$l=1022,sn=1023,Ql=1024,Jl=1025,ji=1026,Ji=1027,Ia=1028,La=1029,eh=1030,Da=1031,Ua=1033,vr=33776,yr=33777,Mr=33778,Sr=33779,Vo=35840,Wo=35841,Xo=35842,jo=35843,Yo=36196,qo=37492,Ko=37496,Zo=37808,$o=37809,Qo=37810,Jo=37811,ea=37812,ta=37813,na=37814,ia=37815,sa=37816,ra=37817,oa=37818,aa=37819,ca=37820,la=37821,Er=36492,ha=36494,da=36495,th=36283,ua=36284,fa=36285,pa=36286,_d=2200,xd=2201,vd=2202,Is=2300,Ls=2301,Gr=2302,zi=2400,Hi=2401,Rr=2402,Na=2500,yd=2501,Md=0,nh=1,ma=2,Sd=3200,Ed=3201,ih=0,bd=1,qn="",yt="srgb",Bt="srgb-linear",Cr="linear",at="srgb",Ei=7680,dc=519,Td=512,wd=513,Ad=514,sh=515,Rd=516,Cd=517,Pd=518,Id=519,ga=35044,uc="300 es",Dn=2e3,Pr=2001;class ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fc=1234567;const ws=Math.PI/180,es=180/Math.PI;function mn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function We(r,e,t){return Math.max(e,Math.min(t,r))}function Fa(r,e){return(r%e+e)%e}function Ld(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Dd(r,e,t){return r!==e?(t-r)/(e-r):0}function As(r,e,t){return(1-t)*r+t*e}function Ud(r,e,t,n){return As(r,e,1-Math.exp(-t*n))}function Nd(r,e=1){return e-Math.abs(Fa(r,e*2)-e)}function Fd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Od(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Bd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function kd(r,e){return r+Math.random()*(e-r)}function zd(r){return r*(.5-Math.random())}function Hd(r){r!==void 0&&(fc=r);let e=fc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(r){return r*ws}function Vd(r){return r*es}function Wd(r){return(r&r-1)===0&&r!==0}function Xd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function jd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yd(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),u=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*d,c*u,a*l);break;case"YZY":r.set(c*u,a*h,c*d,a*l);break;case"ZXZ":r.set(c*d,c*u,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Oa={DEG2RAD:ws,RAD2DEG:es,generateUUID:mn,clamp:We,euclideanModulo:Fa,mapLinear:Ld,inverseLerp:Dd,lerp:As,damp:Ud,pingpong:Nd,smoothstep:Fd,smootherstep:Od,randInt:Bd,randFloat:kd,randFloatSpread:zd,seededRandom:Hd,degToRad:Gd,radToDeg:Vd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:jd,setQuaternionFromProperEuler:Yd,normalize:rt,denormalize:dn};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,i,s,o,a,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],S=i[4],x=i[7],R=i[2],A=i[5],C=i[8];return s[0]=o*_+a*v+c*R,s[3]=o*m+a*S+c*A,s[6]=o*p+a*x+c*C,s[1]=l*_+h*v+d*R,s[4]=l*m+h*S+d*A,s[7]=l*p+h*x+d*C,s[2]=u*_+f*v+g*R,s[5]=u*m+f*S+g*A,s[8]=u*p+f*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*s,f=l*s-o*c,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new ze;function rh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qd(){const r=Ds("canvas");return r.style.display="block",r}const pc={};function ui(r){r in pc||(pc[r]=!0,console.warn(r))}function Kd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Zd(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $d(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qd(){const r={enabled:!0,workingColorSpace:Bt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?Cr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Bt]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),r}const qe=Qd();function Un(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let bi;class Jd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=Ds("canvas")),bi.width=e.width,bi.height=e.height;const n=bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Un(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eu=0;class Ba{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wr(i[o].image)):s.push(Wr(i[o]))}else s=Wr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tu=0;class Rt extends ei{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Kn,i=Kn,s=Zt,o=Ln,a=sn,c=Fn,l=Rt.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=mn(),this.name="",this.source=new Ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ot:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ot:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Xl;Rt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,x=(f+1)/2,R=(p+1)/2,A=(h+u)/4,C=(d+_)/4,L=(g+m)/4;return S>x&&S>R?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=C/n):x>R?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=L/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=C/s,i=L/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ba(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends nu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oh extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iu extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ot{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=1-a;const p=c*u+l*f+h*g+d*_,v=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),A=Math.atan2(R,p*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const x=a*v;if(c=c*m+u*x,l=l*m+f*x,h=h*m+g*x,d=d*m+_*x,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=i+c*d+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new T,_c=new ot;class $t{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),zs.subVectors(this.max,hs),Ti.subVectors(e.a,hs),wi.subVectors(e.b,hs),Ai.subVectors(e.c,hs),Bn.subVectors(wi,Ti),kn.subVectors(Ai,wi),ii.subVectors(Ti,Ai);let t=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ii.z,ii.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ii.z,0,-ii.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ii.y,ii.x,0];return!jr(t,Ti,wi,Ai,zs)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,Ti,wi,Ai,zs))?!1:(Hs.crossVectors(Bn,kn),t=[Hs.x,Hs.y,Hs.z],jr(t,Ti,wi,Ai,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new T,new T,new T,new T,new T,new T,new T,new T],cn=new T,ks=new $t,Ti=new T,wi=new T,Ai=new T,Bn=new T,kn=new T,ii=new T,hs=new T,zs=new T,Hs=new T,si=new T;function jr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){si.fromArray(r,s);const a=i.x*Math.abs(si.x)+i.y*Math.abs(si.y)+i.z*Math.abs(si.z),c=e.dot(si),l=t.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const su=new $t,ds=new T,Yr=new T;class Mn{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):su.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(Yr)),this.expandByPoint(ds.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new T,qr=new T,Gs=new T,zn=new T,Kr=new T,Vs=new T,Zr=new T;class rs{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qr.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(qr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),a=zn.dot(this.direction),c=-zn.dot(Gs),l=zn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(qr).addScaledVector(Gs,u),f}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,i,s){Kr.subVectors(t,e),Vs.subVectors(n,e),Zr.crossVectors(Kr,Vs);let o=this.direction.dot(Zr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);const c=a*this.direction.dot(Vs.crossVectors(zn,Vs));if(c<0)return null;const l=a*this.direction.dot(Kr.cross(zn));if(l<0||c+l>o)return null;const h=-a*zn.dot(Zr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,i,s,o,a,c,l,h,d,u,f,g,_,m){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,d,u,f,g,_,m)}set(e,t,n,i,s,o,a,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ru,e,ou)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Hn.crossVectors(n,Yt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Hn.crossVectors(n,Yt)),Hn.normalize(),Ws.crossVectors(Yt,Hn),i[0]=Hn.x,i[4]=Ws.x,i[8]=Yt.x,i[1]=Hn.y,i[5]=Ws.y,i[9]=Yt.y,i[2]=Hn.z,i[6]=Ws.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],S=n[7],x=n[11],R=n[15],A=i[0],C=i[4],L=i[8],M=i[12],y=i[1],I=i[5],O=i[9],B=i[13],k=i[2],j=i[6],V=i[10],Y=i[14],F=i[3],Q=i[7],te=i[11],re=i[15];return s[0]=o*A+a*y+c*k+l*F,s[4]=o*C+a*I+c*j+l*Q,s[8]=o*L+a*O+c*V+l*te,s[12]=o*M+a*B+c*Y+l*re,s[1]=h*A+d*y+u*k+f*F,s[5]=h*C+d*I+u*j+f*Q,s[9]=h*L+d*O+u*V+f*te,s[13]=h*M+d*B+u*Y+f*re,s[2]=g*A+_*y+m*k+p*F,s[6]=g*C+_*I+m*j+p*Q,s[10]=g*L+_*O+m*V+p*te,s[14]=g*M+_*B+m*Y+p*re,s[3]=v*A+S*y+x*k+R*F,s[7]=v*C+S*I+x*j+R*Q,s[11]=v*L+S*O+x*V+R*te,s[15]=v*M+S*B+x*Y+R*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*f-n*c*f)+_*(+t*c*f-t*l*u+s*o*u-i*o*f+i*l*h-s*c*h)+m*(+t*l*d-t*a*f-s*o*d+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-t*c*d+t*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=d*m*l-_*u*l+_*c*f-a*m*f-d*c*p+a*u*p,S=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,x=h*_*l-g*d*l+g*a*f-o*_*f-h*a*p+o*d*p,R=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,A=t*v+n*S+i*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(_*u*s-d*m*s-_*i*f+n*m*f+d*i*p-n*u*p)*C,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*C,e[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*f-n*c*f)*C,e[4]=S*C,e[5]=(h*m*s-g*u*s+g*i*f-t*m*f-h*i*p+t*u*p)*C,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*C,e[7]=(o*u*s-h*c*s+h*i*l-t*u*l-o*i*f+t*c*f)*C,e[8]=x*C,e[9]=(g*d*s-h*_*s-g*n*f+t*_*f+h*n*p-t*d*p)*C,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*C,e[11]=(h*a*s-o*d*s-h*n*l+t*d*l+o*n*f-t*a*f)*C,e[12]=R*C,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*m+t*d*m)*C,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*u+t*a*u)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,u=s*l,f=s*h,g=s*d,_=o*h,m=o*d,p=a*d,v=c*l,S=c*h,x=c*d,R=n.x,A=n.y,C=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+x)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(u+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+S)*C,i[9]=(m-v)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ri.set(i[0],i[1],i[2]).length();const o=Ri.set(i[4],i[5],i[6]).length(),a=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const l=1/s,h=1/o,d=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Dn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(a===Dn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Pr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Dn){const c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(o-s),u=(t+e)*l,f=(n+i)*h;let g,_;if(a===Dn)g=(o+s)*d,_=-2*d;else if(a===Pr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new T,ln=new Oe,ru=new T(0,0,0),ou=new T(1,1,1),Hn=new T,Ws=new T,Yt=new T,xc=new Oe,vc=new ot;class rn{constructor(e=0,t=0,n=0,i=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let au=0;const yc=new T,Ci=new ot,wn=new Oe,Xs=new T,us=new T,cu=new T,lu=new ot,Mc=new T(1,0,0),Sc=new T(0,1,0),Ec=new T(0,0,1),bc={type:"added"},hu={type:"removed"},Pi={type:"childadded",child:null},$r={type:"childremoved",child:null};class lt extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new T,t=new rn,n=new ot,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new ze}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(Sc,e)}rotateZ(e){return this.rotateOnAxis(Ec,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(Sc,e)}translateZ(e){return this.translateOnAxis(Ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(us,Xs,this.up):wn.lookAt(Xs,us,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(wn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,cu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DEFAULT_UP=new T(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new T,An=new T,Qr=new T,Rn=new T,Ii=new T,Li=new T,Tc=new T,Jr=new T,eo=new T,to=new T,no=new Je,io=new Je,so=new Je;class un{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hn.subVectors(i,t),An.subVectors(n,t),Qr.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(An),c=hn.dot(Qr),l=An.dot(An),h=An.dot(Qr),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(e,t),io.fromBufferAttribute(e,n),so.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(no,s.x),o.addScaledVector(io,s.y),o.addScaledVector(so,s.z),o}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),An.subVectors(e,t),hn.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),hn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ii.subVectors(i,n),Li.subVectors(s,n),Jr.subVectors(e,n);const c=Ii.dot(Jr),l=Li.dot(Jr);if(c<=0&&l<=0)return t.copy(n);eo.subVectors(e,i);const h=Ii.dot(eo),d=Li.dot(eo);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ii,o);to.subVectors(e,s);const f=Ii.dot(to),g=Li.dot(to);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Li,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Tc.subVectors(s,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Tc,a);const p=1/(m+_+u);return o=_*p,a=u*p,t.copy(n).addScaledVector(Ii,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},js={h:0,s:0,l:0};function ro(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Fa(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ro(o,s,e+1/3),this.g=ro(o,s,e),this.b=ro(o,s,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=ah[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return qe.fromWorkingColorSpace(Ut.copy(this),e),Math.round(We(Ut.r*255,0,255))*65536+Math.round(We(Ut.g*255,0,255))*256+Math.round(We(Ut.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,s=Ut.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=yt){qe.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(js);const n=As(Gn.h,js.h,t),i=As(Gn.s,js.s,t),s=As(Gn.l,js.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ne;Ne.NAMES=ah;let du=0;class yn extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Xi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Do,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lo&&(n.blendSrc=this.blendSrc),this.blendDst!==Do&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class At extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new T,Ys=new we;let uu=0;class ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ga,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ga&&(e.usage=this.usage),e}}class ch extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lh extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fu=0;const en=new Oe,oo=new lt,Di=new T,qt=new $t,fs=new $t,wt=new T;class _t extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rh(e)?lh:ch)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(qt.min,fs.min),qt.expandByPoint(wt),wt.addVectors(qt.max,fs.max),qt.expandByPoint(wt)):(qt.expandByPoint(fs.min),qt.expandByPoint(fs.max))}qt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)wt.fromBufferAttribute(a,l),c&&(Di.fromBufferAttribute(e,l),wt.add(Di)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new T,c[L]=new T;const l=new T,h=new T,d=new T,u=new we,f=new we,g=new we,_=new T,m=new T;function p(L,M,y){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),u.fromBufferAttribute(s,L),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[L].add(_),a[M].add(_),a[y].add(_),c[L].add(m),c[M].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,M=v.length;L<M;++L){const y=v[L],I=y.start,O=y.count;for(let B=I,k=I+O;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new T,x=new T,R=new T,A=new T;function C(L){R.fromBufferAttribute(i,L),A.copy(R);const M=a[L];S.copy(M),S.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(A,M);const I=x.dot(c[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,I)}for(let L=0,M=v.length;L<M;++L){const y=v[L],I=y.start,O=y.count;for(let B=I,k=I+O;B<k;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new T,s=new T,o=new T,a=new T,c=new T,l=new T,h=new T,d=new T;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new ft(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new Oe,ri=new rs,qs=new Mn,Ac=new T,Ks=new T,Zs=new T,$s=new T,ao=new T,Qs=new T,Rc=new T,Js=new T;class $ extends lt{constructor(e=new _t,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Qs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(ao.fromBufferAttribute(d,e),o?Qs.addScaledVector(ao,h):Qs.addScaledVector(ao.sub(t),h))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),ri.copy(e.ray).recast(e.near),!(qs.containsPoint(ri.origin)===!1&&(ri.intersectSphere(qs,Ac)===null||ri.origin.distanceToSquared(Ac)>(e.far-e.near)**2))&&(wc.copy(s).invert(),ri.copy(e.ray).applyMatrix4(wc),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,R=S;x<R;x+=3){const A=a.getX(x),C=a.getX(x+1),L=a.getX(x+2);i=er(this,p,e,n,l,h,d,A,C,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=er(this,o,e,n,l,h,d,v,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,R=S;x<R;x+=3){const A=x,C=x+1,L=x+2;i=er(this,p,e,n,l,h,d,A,C,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,S=m+1,x=m+2;i=er(this,o,e,n,l,h,d,v,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function pu(r,e,t,n,i,s,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Nn,a),c===null)return null;Js.copy(a),Js.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Js);return l<t.near||l>t.far?null:{distance:l,point:Js.clone(),object:r}}function er(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Ks),r.getVertexPosition(c,Zs),r.getVertexPosition(l,$s);const h=pu(r,e,t,n,Ks,Zs,$s,Rc);if(h){const d=new T;un.getBarycoord(Rc,Ks,Zs,$s,d),i&&(h.uv=un.getInterpolatedAttribute(i,a,c,l,d,new we)),s&&(h.uv1=un.getInterpolatedAttribute(s,a,c,l,d,new we)),o&&(h.normal=un.getInterpolatedAttribute(o,a,c,l,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new T,materialIndex:0};un.getNormal(Ks,Zs,$s,u.normal),h.face=u,h.barycoord=d}return h}class gt extends _t{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function g(_,m,p,v,S,x,R,A,C,L,M){const y=x/C,I=R/L,O=x/2,B=R/2,k=A/2,j=C+1,V=L+1;let Y=0,F=0;const Q=new T;for(let te=0;te<V;te++){const re=te*I-B;for(let Se=0;Se<j;Se++){const Ie=Se*y-O;Q[_]=Ie*v,Q[m]=re*S,Q[p]=k,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(Se/C),d.push(1-te/L),Y+=1}}for(let te=0;te<L;te++)for(let re=0;re<C;re++){const Se=u+re+j*te,Ie=u+re+j*(te+1),W=u+(re+1)+j*(te+1),ne=u+(re+1)+j*te;c.push(Se,Ie,ne),c.push(Ie,W,ne),F+=6}a.addGroup(f,F,M),f+=F,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(r){const e={};for(let t=0;t<r.length;t++){const n=ts(r[t]);for(const i in n)e[i]=n[i]}return e}function mu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function hh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const gu={clone:ts,merge:Ht};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dh extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new T,Cc=new we,Pc=new we;class Ft extends dh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,Cc,Pc),t.subVectors(Pc,Cc)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Ni=1;class vu extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ft(Ui,Ni,e,t);i.layers=this.layers,this.add(i);const s=new Ft(Ui,Ni,e,t);s.layers=this.layers,this.add(s);const o=new Ft(Ui,Ni,e,t);o.layers=this.layers,this.add(o);const a=new Ft(Ui,Ni,e,t);a.layers=this.layers,this.add(a);const c=new Ft(Ui,Ni,e,t);c.layers=this.layers,this.add(c);const l=new Ft(Ui,Ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uh extends Rt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yu extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new uh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gt(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:$n});s.uniforms.tEquirect.value=t;const o=new $(i,s),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Zt),new vu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class vn extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mu={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mu)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class za extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Su{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ga,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new T;class Ha{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ha(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ic=new T,Lc=new Je,Dc=new Je,Eu=new T,Uc=new Oe,tr=new T,lo=new Mn,Nc=new Oe,ho=new rs;class bu extends ${constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hc,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tr),this.boundingBox.expandByPoint(tr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tr),this.boundingSphere.expandByPoint(tr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(i),e.ray.intersectsSphere(lo)!==!1&&(Nc.copy(i).invert(),ho.copy(e.ray).applyMatrix4(Nc),!(this.boundingBox!==null&&ho.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ho)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Lc.fromBufferAttribute(i.attributes.skinIndex,e),Dc.fromBufferAttribute(i.attributes.skinWeight,e),Ic.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Dc.getComponent(s);if(o!==0){const a=Lc.getComponent(s);Uc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Eu.copy(Ic).applyMatrix4(Uc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fh extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ph extends Rt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Vt,h=Vt,d,u){super(null,o,a,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fc=new Oe,Tu=new Oe;class Ga{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Tu;Fc.multiplyMatrices(a,t[s]),Fc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ga(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ph(t,e,e,sn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new fh),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class _a extends ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fi=new Oe,Oc=new Oe,nr=[],Bc=new $t,wu=new Oe,ps=new $,ms=new Mn;class Au extends ${constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _a(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Bc.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Bc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),ms.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),e.ray.intersectsSphere(ms)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fi),Oc.multiplyMatrices(n,Fi),ps.matrixWorld=Oc,ps.raycast(e,nr);for(let o=0,a=nr.length;o<a;o++){const c=nr[o];c.instanceId=s,c.object=this,t.push(c)}nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ph(new Float32Array(i*this.count),i,this.count,Ia,fn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const uo=new T,Ru=new T,Cu=new ze;class Yn{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=uo.subVectors(n,t).cross(Ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cu.getNormalMatrix(e),i=this.coplanarPoint(uo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Mn,ir=new T;class Va{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,s=new Yn,o=new Yn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],S=i[14],x=i[15];if(n[0].setComponents(c-s,u-l,m-f,x-p).normalize(),n[1].setComponents(c+s,u+l,m+f,x+p).normalize(),n[2].setComponents(c+o,u+h,m+g,x+v).normalize(),n[3].setComponents(c-o,u-h,m-g,x-v).normalize(),n[4].setComponents(c-a,u-d,m-_,x-S).normalize(),t===Dn)n[5].setComponents(c+a,u+d,m+_,x+S).normalize();else if(t===Pr)n[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ir.x=i.normal.x>0?e.max.x:e.min.x,ir.y=i.normal.y>0?e.max.y:e.min.y,ir.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ns extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ir=new T,Lr=new T,kc=new Oe,gs=new rs,sr=new Mn,fo=new T,zc=new T;class nn extends lt{constructor(e=new _t,t=new Ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ir.fromBufferAttribute(t,i-1),Lr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ir.distanceTo(Lr);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(i),sr.radius+=s,e.ray.intersectsSphere(sr)===!1)return;kc.copy(i).invert(),gs.copy(e.ray).applyMatrix4(kc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),S=rr(this,e,gs,c,p,v,_);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=rr(this,e,gs,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=rr(this,e,gs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=rr(this,e,gs,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rr(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Ir.fromBufferAttribute(a,i),Lr.fromBufferAttribute(a,s),t.distanceSqToSegment(Ir,Lr,fo,zc)>n)return;fo.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(fo);if(!(l<e.near||l>e.far))return{distance:l,point:zc.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Hc=new T,Gc=new T;class mh extends nn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Hc.fromBufferAttribute(t,i),Gc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hc.distanceTo(Gc);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pu extends nn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dr extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vc=new Oe,xa=new rs,or=new Mn,ar=new T;class va extends lt{constructor(e=new _t,t=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=s,e.ray.intersectsSphere(or)===!1)return;Vc.copy(i).invert(),xa.copy(e.ray).applyMatrix4(Vc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,_=f;g<_;g++){const m=l.getX(g);ar.fromBufferAttribute(d,m),Wc(ar,m,c,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)ar.fromBufferAttribute(d,g),Wc(ar,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wc(r,e,t,n,i,s,o){const a=xa.distanceSqToPoint(r);if(a<t){const c=new T;xa.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class gh extends Rt{constructor(e,t,n,i,s,o,a,c,l,h=ji){if(h!==ji&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=xi),n===void 0&&h===Ji&&(n=Qi),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wa extends _t{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new T,h=new we;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pt extends _t{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function v(){const x=new T,R=new T;let A=0;const C=(t-e)/n;for(let L=0;L<=s;L++){const M=[],y=L/s,I=y*(t-e)+e;for(let O=0;O<=i;O++){const B=O/i,k=B*c+a,j=Math.sin(k),V=Math.cos(k);R.x=I*j,R.y=-y*n+m,R.z=I*V,d.push(R.x,R.y,R.z),x.set(j,C,V).normalize(),u.push(x.x,x.y,x.z),f.push(B,1-y),M.push(g++)}_.push(M)}for(let L=0;L<i;L++)for(let M=0;M<s;M++){const y=_[M][L],I=_[M+1][L],O=_[M+1][L+1],B=_[M][L+1];(e>0||M!==0)&&(h.push(y,I,B),A+=3),(t>0||M!==s-1)&&(h.push(I,O,B),A+=3)}l.addGroup(p,A,0),p+=A}function S(x){const R=g,A=new we,C=new T;let L=0;const M=x===!0?e:t,y=x===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;const I=g;for(let O=0;O<=i;O++){const k=O/i*c+a,j=Math.cos(k),V=Math.sin(k);C.x=M*V,C.y=m*y,C.z=M*j,d.push(C.x,C.y,C.z),u.push(0,y,0),A.x=j*.5+.5,A.y=V*.5*y+.5,f.push(A.x,A.y),g++}for(let O=0;O<i;O++){const B=R+O,k=I+O;x===!0?h.push(k,k+1,B):h.push(k+1,k,B),L+=3}l.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xa extends _t{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const S=new T,x=new T,R=new T;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],x),f(t[A+2],R),c(S,x,R,v)}function c(v,S,x,R){const A=R+1,C=[];for(let L=0;L<=A;L++){C[L]=[];const M=v.clone().lerp(x,L/A),y=S.clone().lerp(x,L/A),I=A-L;for(let O=0;O<=I;O++)O===0&&L===A?C[L][O]=M:C[L][O]=M.clone().lerp(y,O/I)}for(let L=0;L<A;L++)for(let M=0;M<2*(A-L)-1;M++){const y=Math.floor(M/2);M%2===0?(u(C[L][y+1]),u(C[L+1][y]),u(C[L][y])):(u(C[L][y+1]),u(C[L+1][y+1]),u(C[L+1][y]))}}function l(v){const S=new T;for(let x=0;x<s.length;x+=3)S.x=s[x+0],S.y=s[x+1],S.z=s[x+2],S.normalize().multiplyScalar(v),s[x+0]=S.x,s[x+1]=S.y,s[x+2]=S.z}function h(){const v=new T;for(let S=0;S<s.length;S+=3){v.x=s[S+0],v.y=s[S+1],v.z=s[S+2];const x=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;o.push(x,1-R)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const S=o[v+0],x=o[v+2],R=o[v+4],A=Math.max(S,x,R),C=Math.min(S,x,R);A>.9&&C<.1&&(S<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function f(v,S){const x=v*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function g(){const v=new T,S=new T,x=new T,R=new T,A=new we,C=new we,L=new we;for(let M=0,y=0;M<s.length;M+=9,y+=6){v.set(s[M+0],s[M+1],s[M+2]),S.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),A.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),R.copy(v).add(S).add(x).divideScalar(3);const I=m(R);_(A,y+0,v,I),_(C,y+2,S,I),_(L,y+4,x,I)}}function _(v,S,x,R){R<0&&v.x===1&&(o[S]=v.x-1),x.x===0&&x.z===0&&(o[S]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.vertices,e.indices,e.radius,e.details)}}class Gi extends Xa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gi(e.radius,e.detail)}}class yi extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*u-o;for(let S=0;S<l;S++){const x=S*d-s;g.push(x,-v,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const S=v+l*p,x=v+l*(p+1),R=v+1+l*(p+1),A=v+1+l*p;f.push(S,x,A),f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rs extends _t{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let d=e;const u=(t-e)/i,f=new T,g=new we;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,S=v,x=v+n+1,R=v+n+2,A=v+1;a.push(S,x,A),a.push(x,R,A)}}this.setIndex(a),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ja extends _t{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new T,u=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],S=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const A=R/t;d.x=-e*Math.cos(i+A*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(i+A*s)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+x,1-S),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const S=h[p][v+1],x=h[p][v],R=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&f.push(S,x,A),(p!==n-1||c<Math.PI)&&f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gi extends _t{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new T,d=new T,u=new T;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class On extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gn extends On{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Iu extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lu extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function cr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Du(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Uu(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Xc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function _h(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Fs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nu extends Fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zi,endingEnd:zi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hi:s=e,a=2*t-n;break;case Rr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hi:o=e,c=2*n-t;break;case Rr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let R=0;R!==a;++R)s[R]=p*o[h+R]+v*o[l+R]+S*o[c+R]+x*o[d+R];return s}}class xh extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[l+u]*d+o[c+u]*h;return s}}class Fu extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cr(t,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cr(e.times,Array),values:cr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case Gr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return Gr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Du(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gr,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Ls;class os extends Sn{constructor(e,t,n){super(e,t,n)}}os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Is;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class vh extends Sn{}vh.prototype.ValueTypeName="color";class ns extends Sn{}ns.prototype.ValueTypeName="number";class Ou extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)ot.slerpFlat(s,0,o,l-a,o,l,c);return s}}class is extends Sn{InterpolantFactoryMethodLinear(e){return new Ou(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends Sn{constructor(e,t,n){super(e,t,n)}}as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Is;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Sn{}ss.prototype.ValueTypeName="vector";class ya{constructor(e="",t=-1,n=[],i=Na){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ku(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Sn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Uu(c);c=Xc(c,1,h),l=Xc(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ns(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const m=[],p=[];_h(f,m,p,g),m.length!==0&&_.push(new d(u,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==u[g].morphTargets.length;++v){const S=u[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new ns(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[d].name+"]";n(ss,f+".position",u,"pos",i),n(is,f+".quaternion",u,"rot",i),n(ss,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bu(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return vh;case"quaternion":return is;case"bool":case"boolean":return os;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ku(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bu(r.type);if(r.times===void 0){const t=[],n=[];_h(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Zn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class zu{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Hu=new zu;class Mi{constructor(e){this.manager=e!==void 0?e:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class Gu extends Error{constructor(e,t){super(e),this.response=t}}class Ur extends Mi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Zn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:i});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Cn[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){d.read().then(({done:S,value:x})=>{if(S)p.close();else{_+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,C=h.length;A<C;A++){const L=h[A];L.onProgress&&L.onProgress(R)}p.enqueue(x),v()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Gu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Zn.add(e,l);const h=Cn[e];delete Cn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Cn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Cn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vu extends Mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ds("img");function c(){h(),Zn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class yh extends Mi{constructor(e){super(e)}load(e,t,n,i){const s=new Rt,o=new Vu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Or extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const po=new Oe,jc=new T,Yc=new T;class Ya{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(jc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wu extends Ya{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xu extends Or{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Wu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const qc=new Oe,_s=new T,mo=new T;class ju extends Ya{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),n.position.copy(_s),mo.copy(n.position),mo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(mo),n.updateMatrixWorld(),i.makeTranslation(-_s.x,-_s.y,-_s.z),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc)}}class Mh extends Or{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qa extends dh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yu extends Ya{constructor(){super(new qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nr extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sh extends Or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qu extends Mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zn.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Zn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Zn.add(e,c),s.manager.itemStart(e)}}class Ku extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Zu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kc(){return performance.now()}class $u{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){ot.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;ot.multiplyQuaternionsFlat(e,o,e,t,e,n),ot.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Ka="\\[\\]\\.:\\/",Qu=new RegExp("["+Ka+"]","g"),Za="[^"+Ka+"]",Ju="[^"+Ka.replace("\\.","")+"]",ef=/((?:WC+[\/:])*)/.source.replace("WC",Za),tf=/(WCOD+)?/.source.replace("WCOD",Ju),nf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Za),sf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Za),rf=new RegExp("^"+ef+tf+nf+sf+"$"),of=["material","materials","bones","map"];class af{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qu,"")}static parseTrackName(e){const t=rf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);of.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=af;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class cf{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:zi,endingEnd:zi};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=xd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case yd:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Na:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===vd;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===_d){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Hi,i.endingEnd=Hi):(e?i.endingStart=this.zeroSlopeAtStart?Hi:zi:i.endingStart=Rr,t?i.endingEnd=this.zeroSlopeAtEnd?Hi:zi:i.endingEnd=Rr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const lf=new Float32Array(1);class hf extends ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new $u(nt.create(n,f,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new xh(new Float32Array(2),new Float32Array(2),1,lf),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?ya.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Na),c!==void 0){const d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new cf(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ya.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Zc=new Oe;class Br{constructor(e,t,n=0,i=1/0){this.ray=new rs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(e,t=!0,n=[]){return Ma(e,this,n,t),n.sort($c),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ma(e[i],this,n,t);return n.sort($c),n}}function $c(r,e){return r.distance-e.distance}function Ma(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Ma(s[o],e,t,!0)}}class Qc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Jc=new T;let lr,go;class df extends lt{constructor(e=new T(0,0,1),t=new T(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",lr===void 0&&(lr=new _t,lr.setAttribute("position",new it([0,0,0,0,1,0],3)),go=new Pt(0,.5,1,5,1),go.translate(0,-.5,0)),this.position.copy(t),this.line=new nn(lr,new Ns({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $(go,new At({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Jc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Jc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Eh extends ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function el(r,e,t,n){const i=uf(n);switch(t){case Zl:return r*e;case Ql:return r*e;case Jl:return r*e*2;case Ia:return r*e/i.components*i.byteLength;case La:return r*e/i.components*i.byteLength;case eh:return r*e*2/i.components*i.byteLength;case Da:return r*e*2/i.components*i.byteLength;case $l:return r*e*3/i.components*i.byteLength;case sn:return r*e*4/i.components*i.byteLength;case Ua:return r*e*4/i.components*i.byteLength;case vr:case yr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mr:case Sr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wo:case jo:return Math.max(r,16)*Math.max(e,8)/4;case Vo:case Xo:return Math.max(r,8)*Math.max(e,8)/2;case Yo:case qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ra:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case oa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case aa:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ca:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case la:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Er:case ha:case da:return Math.ceil(r/4)*Math.ceil(e/4)*16;case th:case ua:return Math.ceil(r/4)*Math.ceil(e/4)*8;case fa:case pa:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uf(r){switch(r){case Fn:case Yl:return{byteLength:1,components:1};case Ps:case ql:case Us:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case xi:case Ra:case fn:return{byteLength:4,components:1};case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ff(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(r.bindBuffer(l,a),d.length===0)r.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,up=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ep=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Um=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:_f,alphatest_fragment:xf,alphatest_pars_fragment:vf,aomap_fragment:yf,aomap_pars_fragment:Mf,batching_pars_vertex:Sf,batching_vertex:Ef,begin_vertex:bf,beginnormal_vertex:Tf,bsdfs:wf,iridescence_fragment:Af,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Lf,color_fragment:Df,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:Ff,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:kf,displacementmap_pars_vertex:zf,displacementmap_vertex:Hf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Vf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:jf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:qf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:op,envmap_vertex:Zf,fog_vertex:$f,fog_pars_vertex:Qf,fog_fragment:Jf,fog_pars_fragment:ep,gradientmap_pars_fragment:tp,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:sp,lights_pars_begin:rp,lights_toon_fragment:ap,lights_toon_pars_fragment:cp,lights_phong_fragment:lp,lights_phong_pars_fragment:hp,lights_physical_fragment:dp,lights_physical_pars_fragment:up,lights_fragment_begin:fp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:vp,map_fragment:yp,map_pars_fragment:Mp,map_particle_fragment:Sp,map_particle_pars_fragment:Ep,metalnessmap_fragment:bp,metalnessmap_pars_fragment:Tp,morphinstance_vertex:wp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Pp,normal_fragment_begin:Ip,normal_fragment_maps:Lp,normal_pars_fragment:Dp,normal_pars_vertex:Up,normal_vertex:Np,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:zp,opaque_fragment:Hp,packing:Gp,premultiplied_alpha_fragment:Vp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:jp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Zp,shadowmap_vertex:$p,shadowmask_pars_fragment:Qp,skinbase_vertex:Jp,skinning_pars_vertex:em,skinning_vertex:tm,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:om,transmission_fragment:am,transmission_pars_fragment:cm,uv_pars_fragment:lm,uv_pars_vertex:hm,uv_vertex:dm,worldpos_vertex:um,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:_m,cube_frag:xm,depth_vert:vm,depth_frag:ym,distanceRGBA_vert:Mm,distanceRGBA_frag:Sm,equirect_vert:Em,equirect_frag:bm,linedashed_vert:Tm,linedashed_frag:wm,meshbasic_vert:Am,meshbasic_frag:Rm,meshlambert_vert:Cm,meshlambert_frag:Pm,meshmatcap_vert:Im,meshmatcap_frag:Lm,meshnormal_vert:Dm,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:Fm,meshphysical_vert:Om,meshphysical_frag:Bm,meshtoon_vert:km,meshtoon_frag:zm,points_vert:Hm,points_frag:Gm,shadow_vert:Vm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:jm},le={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},xn={basic:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ht([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ht([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ht([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ht([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ht([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ht([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ht([le.common,le.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ht([le.lights,le.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};xn.physical={uniforms:Ht([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const hr={r:0,b:0,g:0},ai=new rn,Ym=new Oe;function qm(r,e,t,n,i,s,o){const a=new Ne(0);let c=s===!0?0:1,l,h,d=null,u=0,f=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1;const R=g(S);R===null?p(a,c):R&&R.isColor&&(p(R,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Fr)?(h===void 0&&(h=new $(new gt(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ts(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ai.copy(x.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(ai)),h.material.toneMapped=qe.getTransfer(R.colorSpace)!==at,(d!==R||u!==R.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,f=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new $(new yi(2,2),new Jn({name:"BackgroundMaterial",uniforms:ts(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=qe.getTransfer(R.colorSpace)!==at,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,d=R,u=R.version,f=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,x){S.getRGB(hr,hh(r)),n.buffers.color.setClear(hr.r,hr.g,hr.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:m,dispose:v}}function Km(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(y,I,O,B,k){let j=!1;const V=d(B,O,I);s!==V&&(s=V,l(s.object)),j=f(y,B,O,k),j&&g(y,B,O,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(y,I,O,B),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return r.createVertexArray()}function l(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function d(y,I,O){const B=O.wireframe===!0;let k=n[y.id];k===void 0&&(k={},n[y.id]=k);let j=k[I.id];j===void 0&&(j={},k[I.id]=j);let V=j[B];return V===void 0&&(V=u(c()),j[B]=V),V}function u(y){const I=[],O=[],B=[];for(let k=0;k<t;k++)I[k]=0,O[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function f(y,I,O,B){const k=s.attributes,j=I.attributes;let V=0;const Y=O.getAttributes();for(const F in Y)if(Y[F].location>=0){const te=k[F];let re=j[F];if(re===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function g(y,I,O,B){const k={},j=I.attributes;let V=0;const Y=O.getAttributes();for(const F in Y)if(Y[F].location>=0){let te=j[F];te===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(te=y.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),k[F]=re,V++}s.attributes=k,s.attributesNum=V,s.index=B}function _(){const y=s.newAttributes;for(let I=0,O=y.length;I<O;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const O=s.newAttributes,B=s.enabledAttributes,k=s.attributeDivisors;O[y]=1,B[y]===0&&(r.enableVertexAttribArray(y),B[y]=1),k[y]!==I&&(r.vertexAttribDivisor(y,I),k[y]=I)}function v(){const y=s.newAttributes,I=s.enabledAttributes;for(let O=0,B=I.length;O<B;O++)I[O]!==y[O]&&(r.disableVertexAttribArray(O),I[O]=0)}function S(y,I,O,B,k,j,V){V===!0?r.vertexAttribIPointer(y,I,O,k,j):r.vertexAttribPointer(y,I,O,B,k,j)}function x(y,I,O,B){_();const k=B.attributes,j=O.getAttributes(),V=I.defaultAttributeValues;for(const Y in j){const F=j[Y];if(F.location>=0){let Q=k[Y];if(Q===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const te=Q.normalized,re=Q.itemSize,Se=e.get(Q);if(Se===void 0)continue;const Ie=Se.buffer,W=Se.type,ne=Se.bytesPerElement,pe=W===r.INT||W===r.UNSIGNED_INT||Q.gpuType===Ra;if(Q.isInterleavedBufferAttribute){const ae=Q.data,_e=ae.stride,He=Q.offset;if(ae.isInstancedInterleavedBuffer){for(let Ae=0;Ae<F.locationSize;Ae++)p(F.location+Ae,ae.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ae=0;Ae<F.locationSize;Ae++)m(F.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let Ae=0;Ae<F.locationSize;Ae++)S(F.location+Ae,re/F.locationSize,W,te,_e*ne,(He+re/F.locationSize*Ae)*ne,pe)}else{if(Q.isInstancedBufferAttribute){for(let ae=0;ae<F.locationSize;ae++)p(F.location+ae,Q.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ae=0;ae<F.locationSize;ae++)m(F.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let ae=0;ae<F.locationSize;ae++)S(F.location+ae,re/F.locationSize,W,te,re*ne,re/F.locationSize*ae*ne,pe)}}else if(V!==void 0){const te=V[Y];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(F.location,te);break;case 3:r.vertexAttrib3fv(F.location,te);break;case 4:r.vertexAttrib4fv(F.location,te);break;default:r.vertexAttrib1fv(F.location,te)}}}}v()}function R(){L();for(const y in n){const I=n[y];for(const O in I){const B=I[O];for(const k in B)h(B[k].object),delete B[k];delete I[O]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const I=n[y.id];for(const O in I){const B=I[O];for(const k in B)h(B[k].object),delete B[k];delete I[O]}delete n[y.id]}function C(y){for(const I in n){const O=n[I];if(O[y.id]===void 0)continue;const B=O[y.id];for(const k in B)h(B[k].object),delete B[k];delete O[y.id]}}function L(){M(),o=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Zm(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(r.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $m(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==sn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Fn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fn&&!L)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function Qm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Yn,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const v=s?0:n,S=v*4;let x=p.clippingState||null;c.value=x,x=h(g,u,S,f);for(let R=0;R!==S;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Jm(r){let e=new WeakMap;function t(o,a){return a===Ho?o.mapping=Zi:a===Go&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ho||a===Go)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yu(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Vi=4,tl=[.125,.215,.35,.446,.526,.582],_i=20,_o=new qa,nl=new Ne;let xo=null,vo=0,yo=0,Mo=!1;const fi=(1+Math.sqrt(5))/2,Oi=1/fi,il=[new T(-fi,Oi,0),new T(fi,Oi,0),new T(-Oi,0,fi),new T(Oi,0,fi),new T(0,fi,-Oi),new T(0,fi,Oi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],eg=new T;class Sa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=eg}=s;xo=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xo,vo,yo),this._renderer.xr.enabled=Mo,e.scissorTest=!1,dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xo=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Us,format:sn,colorSpace:Bt,depthBuffer:!1},i=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tg(s)),this._blurMaterial=ng(s,e,t)}return i}_compileMaterial(e){const t=new $(this._lodPlanes[0],e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,n,i,s){const c=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(nl),d.toneMapping=Qn,d.autoClear=!1;const g=new At({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),_=new $(new gt,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(nl),m=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[v],s.y,s.z)):S===1?(c.up.set(0,0,l[v]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[v],s.z)):(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[v]));const x=this._cubeSize;dr(i,S*x,v>2?x:0,x,x),d.setRenderTarget(i),m&&d.render(_,c),d.render(e,c)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zi||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new $(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;dr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=il[(i-s-1)%il.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*_i-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):_i;m>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let v=0;for(let C=0;C<_i;++C){const L=C/_,M=Math.exp(-L*L/2);p.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const x=this._sizeLods[i],R=3*x*(i>S-Vi?i-S+Vi:0),A=4*(this._cubeSize-x);dr(t,R,A,3*x,2*x),c.setRenderTarget(t),c.render(d,_o)}}function tg(r){const e=[],t=[],n=[];let i=r;const s=r-Vi+1+tl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Vi?c=tl[o-r+Vi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,L=A>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(M,_*g*A),S.set(u,m*g*A);const y=[A,A,A,A,A,A];x.set(y,p*g*A)}const R=new _t;R.setAttribute("position",new ft(v,_)),R.setAttribute("uv",new ft(S,m)),R.setAttribute("faceIndex",new ft(x,p)),e.push(R),i>Vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sl(r,e,t){const n=new vi(r,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ng(r,e,t){const n=new Float32Array(_i),i=new T(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function rl(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ol(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ig(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ho||c===Go,h=c===Zi||c===$i;if(l||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Sa(r)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Sa(r)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ui("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rg(r,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],r.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let S=0,x=v.length;S<x;S+=3){const R=v[S+0],A=v[S+1],C=v[S+2];u.push(R,A,A,C,C,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const R=S+0,A=S+1,C=S+2;u.push(R,A,A,C,C,R)}}else return;const m=new(rh(u)?lh:ch)(u,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function og(r,e,t){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,f){r.drawElements(n,f,s,u*o),t.update(f,n,1)}function l(u,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,u*o,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ag(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cg(r,e,t){const n=new WeakMap,i=new Je;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*R*4*d),C=new oh(A,x,R,d);C.type=fn,C.needsUpdate=!0;const L=S*4;for(let y=0;y<d;y++){const I=m[y],O=p[y],B=v[y],k=x*R*4*y;for(let j=0;j<I.count;j++){const V=j*L;f===!0&&(i.fromBufferAttribute(I,j),A[k+V+0]=i.x,A[k+V+1]=i.y,A[k+V+2]=i.z,A[k+V+3]=0),g===!0&&(i.fromBufferAttribute(O,j),A[k+V+4]=i.x,A[k+V+5]=i.y,A[k+V+6]=i.z,A[k+V+7]=0),_===!0&&(i.fromBufferAttribute(B,j),A[k+V+8]=i.x,A[k+V+9]=i.y,A[k+V+10]=i.z,A[k+V+11]=B.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new we(x,R)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function lg(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Th=new Rt,al=new gh(1,1),wh=new oh,Ah=new iu,Rh=new uh,cl=[],ll=[],hl=new Float32Array(16),dl=new Float32Array(9),ul=new Float32Array(4);function cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=cl[i];if(s===void 0&&(s=new Float32Array(i),cl[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function kr(r,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function hg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function fg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function pg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;ul.set(n),r.uniformMatrix2fv(this.addr,!1,ul),Tt(t,n)}}function mg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;dl.set(n),r.uniformMatrix3fv(this.addr,!1,dl),Tt(t,n)}}function gg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;hl.set(n),r.uniformMatrix4fv(this.addr,!1,hl),Tt(t,n)}}function _g(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2iv(this.addr,e),Tt(t,e)}}function vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3iv(this.addr,e),Tt(t,e)}}function yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4iv(this.addr,e),Tt(t,e)}}function Mg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2uiv(this.addr,e),Tt(t,e)}}function Eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3uiv(this.addr,e),Tt(t,e)}}function bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4uiv(this.addr,e),Tt(t,e)}}function Tg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(al.compareFunction=sh,s=al):s=Th,t.setTexture2D(e||s,i)}function wg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ah,i)}function Ag(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rh,i)}function Rg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wh,i)}function Cg(r){switch(r){case 5126:return hg;case 35664:return dg;case 35665:return ug;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return Mg;case 36294:return Sg;case 36295:return Eg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(r,e){r.uniform1fv(this.addr,e)}function Ig(r,e){const t=cs(e,this.size,2);r.uniform2fv(this.addr,t)}function Lg(r,e){const t=cs(e,this.size,3);r.uniform3fv(this.addr,t)}function Dg(r,e){const t=cs(e,this.size,4);r.uniform4fv(this.addr,t)}function Ug(r,e){const t=cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ng(r,e){const t=cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fg(r,e){const t=cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Og(r,e){r.uniform1iv(this.addr,e)}function Bg(r,e){r.uniform2iv(this.addr,e)}function kg(r,e){r.uniform3iv(this.addr,e)}function zg(r,e){r.uniform4iv(this.addr,e)}function Hg(r,e){r.uniform1uiv(this.addr,e)}function Gg(r,e){r.uniform2uiv(this.addr,e)}function Vg(r,e){r.uniform3uiv(this.addr,e)}function Wg(r,e){r.uniform4uiv(this.addr,e)}function Xg(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Th,s[o])}function jg(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ah,s[o])}function Yg(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Rh,s[o])}function qg(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||wh,s[o])}function Kg(r){switch(r){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}class Zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cg(t.type)}}class $g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}}class Qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function fl(r,e){r.seq.push(e),r.map[e.id]=e}function Jg(r,e,t){const n=r.name,i=n.length;for(So.lastIndex=0;;){const s=So.exec(n),o=So.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){fl(t,l===void 0?new Zg(a,r,e):new $g(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Qg(a),fl(t,d)),t=d}}}class br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Jg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function pl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const e_=37297;let t_=0;function n_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ml=new ze;function i_(r){qe._getMatrix(ml,qe.workingColorSpace,r);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(r)){case Cr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function gl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+n_(r.getShaderSource(e),o)}else return i}function s_(r,e){const t=i_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r_(r,e){let t;switch(e){case ld:t="Linear";break;case hd:t="Reinhard";break;case dd:t="Cineon";break;case ud:t="ACESFilmic";break;case pd:t="AgX";break;case md:t="Neutral";break;case fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ur=new T;function o_(){qe.getLuminanceCoefficients(ur);const r=ur.x.toFixed(4),e=ur.y.toFixed(4),t=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function c_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ss(r){return r!==""}function _l(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(r){return r.replace(h_,u_)}const d_=new Map;function u_(r,e){let t=Ve[e];if(t===void 0){const n=d_.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ea(t)}const f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(r){return r.replace(f_,p_)}function p_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function g_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zi:case $i:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function __(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function x_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wl:e="ENVMAP_BLENDING_MULTIPLY";break;case ad:e="ENVMAP_BLENDING_MIX";break;case cd:e="ENVMAP_BLENDING_ADD";break}return e}function v_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function y_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=m_(t),l=g_(t),h=__(t),d=x_(t),u=v_(t),f=a_(t),g=c_(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Qn?r_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,s_("linearToOutputTexel",t.outputColorSpace),o_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),o=Ea(o),o=_l(o,t),o=xl(o,t),a=Ea(a),a=_l(a,t),a=xl(a,t),o=vl(o),a=vl(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+m+o,x=v+p+a,R=pl(i,i.VERTEX_SHADER,S),A=pl(i,i.FRAGMENT_SHADER,x);i.attachShader(_,R),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(I){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(R).trim(),k=i.getShaderInfoLog(A).trim();let j=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,A);else{const Y=gl(i,R,"vertex"),F=gl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+Y+`
`+F)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||k==="")&&(V=!1);V&&(I.diagnostics={runnable:j,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(R),i.deleteShader(A),L=new br(i,_),M=l_(i,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,e_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let M_=0;class S_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new E_(e),t.set(e,n)),n}}class E_{constructor(e){this.id=M_++,this.code=e,this.usedTimes=0}}function b_(r,e,t,n,i,s,o){const a=new ka,c=new S_,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,I,O,B){const k=O.fog,j=B.geometry,V=M.isMeshStandardMaterial?O.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),F=Y&&Y.mapping===Fr?Y.image.height:null,Q=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const te=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,re=te!==void 0?te.length:0;let Se=0;j.morphAttributes.position!==void 0&&(Se=1),j.morphAttributes.normal!==void 0&&(Se=2),j.morphAttributes.color!==void 0&&(Se=3);let Ie,W,ne,pe;if(Q){const st=xn[Q];Ie=st.vertexShader,W=st.fragmentShader}else Ie=M.vertexShader,W=M.fragmentShader,c.update(M),ne=c.getVertexShaderID(M),pe=c.getFragmentShaderID(M);const ae=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),He=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,J=!!M.map,ce=!!M.matcap,oe=!!Y,P=!!M.aoMap,je=!!M.lightMap,Pe=!!M.bumpMap,Xe=!!M.normalMap,be=!!M.displacementMap,ht=!!M.emissiveMap,Te=!!M.metalnessMap,w=!!M.roughnessMap,E=M.anisotropy>0,z=M.clearcoat>0,K=M.dispersion>0,ee=M.iridescence>0,q=M.sheen>0,Ee=M.transmission>0,ue=E&&!!M.anisotropyMap,xe=z&&!!M.clearcoatMap,Ze=z&&!!M.clearcoatNormalMap,se=z&&!!M.clearcoatRoughnessMap,ve=ee&&!!M.iridescenceMap,Le=ee&&!!M.iridescenceThicknessMap,De=q&&!!M.sheenColorMap,ye=q&&!!M.sheenRoughnessMap,Ke=!!M.specularMap,Ge=!!M.specularColorMap,ut=!!M.specularIntensityMap,D=Ee&&!!M.transmissionMap,he=Ee&&!!M.thicknessMap,X=!!M.gradientMap,Z=!!M.alphaMap,me=M.alphaTest>0,fe=!!M.alphaHash,ke=!!M.extensions;let xt=Qn;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(xt=r.toneMapping);const Lt={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:Ie,fragmentShader:W,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Bt,alphaToCoverage:!!M.alphaToCoverage,map:J,matcap:ce,envMap:oe,envMapMode:oe&&Y.mapping,envMapCubeUVHeight:F,aoMap:P,lightMap:je,bumpMap:Pe,normalMap:Xe,displacementMap:u&&be,emissiveMap:ht,normalMapObjectSpace:Xe&&M.normalMapType===bd,normalMapTangentSpace:Xe&&M.normalMapType===ih,metalnessMap:Te,roughnessMap:w,anisotropy:E,anisotropyMap:ue,clearcoat:z,clearcoatMap:xe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:se,dispersion:K,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:Le,sheen:q,sheenColorMap:De,sheenRoughnessMap:ye,specularMap:Ke,specularColorMap:Ge,specularIntensityMap:ut,transmission:Ee,transmissionMap:D,thicknessMap:he,gradientMap:X,opaque:M.transparent===!1&&M.blending===Xi&&M.alphaToCoverage===!1,alphaMap:Z,alphaTest:me,alphaHash:fe,combine:M.combine,mapUv:J&&_(M.map.channel),aoMapUv:P&&_(M.aoMap.channel),lightMapUv:je&&_(M.lightMap.channel),bumpMapUv:Pe&&_(M.bumpMap.channel),normalMapUv:Xe&&_(M.normalMap.channel),displacementMapUv:be&&_(M.displacementMap.channel),emissiveMapUv:ht&&_(M.emissiveMap.channel),metalnessMapUv:Te&&_(M.metalnessMap.channel),roughnessMapUv:w&&_(M.roughnessMap.channel),anisotropyMapUv:ue&&_(M.anisotropyMap.channel),clearcoatMapUv:xe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(M.sheenRoughnessMap.channel),specularMapUv:Ke&&_(M.specularMap.channel),specularColorMapUv:Ge&&_(M.specularColorMap.channel),specularIntensityMapUv:ut&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:he&&_(M.thicknessMap.channel),alphaMapUv:Z&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Xe||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(J||Z),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:xt,decodeVideoTexture:J&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===at,decodeVideoTextureEmissive:ht&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===It,flipSided:M.side===Gt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)y.push(I),y.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(v(y,M),S(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function v(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function S(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const y=g[M.type];let I;if(y){const O=xn[y];I=gu.clone(O.uniforms)}else I=M.uniforms;return I}function R(M,y){let I;for(let O=0,B=h.length;O<B;O++){const k=h[O];if(k.cacheKey===y){I=k,++I.usedTimes;break}}return I===void 0&&(I=new y_(r,y,M,s),h.push(I)),I}function A(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:L}}function T_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function w_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ml(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,f,g,_,m){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},r[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||w_),n.length>1&&n.sort(u||Ml),i.length>1&&i.sort(u||Ml)}function h(){for(let d=e,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function A_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Sl,r.set(n,[o])):i>=s.length?(o=new Sl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function R_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Ne};break;case"SpotLight":t={position:new T,direction:new T,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function C_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let P_=0;function I_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function L_(r){const e=new R_,t=C_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const i=new T,s=new Oe,o=new Oe;function a(l){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,S=0,x=0,R=0,A=0,C=0;l.sort(I_);for(let M=0,y=l.length;M<y;M++){const I=l[M],O=I.color,B=I.intensity,k=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*B,d+=O.g*B,u+=O.b*B;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],B);C++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,F=t.get(I);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=V,f++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(O).multiplyScalar(B),V.distance=k,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[_]=V;const Y=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,Y.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,I.castShadow){const F=t.get(I);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=j,x++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(O).multiplyScalar(B),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const Y=I.shadow,F=t.get(I);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,F.shadowCameraNear=Y.camera.near,F.shadowCameraFar=Y.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=V,g++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(B),V.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==S||L.numSpotShadows!==x||L.numSpotMaps!==R||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=S,L.numSpotShadows=x,L.numSpotMaps=R,L.numLightProbes=C,n.version=P_++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function El(r){const e=new L_(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function D_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new El(r),e.set(i,[a])):s>=o.length?(a=new El(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function F_(r,e,t){let n=new Va;const i=new we,s=new we,o=new Je,a=new Iu({depthPacking:Ed}),c=new Lu,l={},h=t.maxTextureSize,d={[Nn]:Gt,[Gt]:Nn,[It]:It},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:U_,fragmentShader:N_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let p=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),y=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),O=r.state;O.setBlending($n),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==Pn&&this.type===Pn,k=p===Pn&&this.type!==Pn;for(let j=0,V=A.length;j<V;j++){const Y=A[j],F=Y.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const Q=F.getFrameExtents();if(i.multiply(Q),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,F.mapSize.y=s.y)),F.map===null||B===!0||k===!0){const re=this.type!==Pn?{minFilter:Vt,magFilter:Vt}:{};F.map!==null&&F.map.dispose(),F.map=new vi(i.x,i.y,re),F.map.texture.name=Y.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const te=F.getViewportCount();for(let re=0;re<te;re++){const Se=F.getViewport(re);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),O.viewport(o),F.updateMatrices(Y,re),n=F.getFrustum(),x(C,L,F.camera,Y,this.type)}F.isPointLightShadow!==!0&&this.type===Pn&&v(F,L),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,y,I)};function v(A,C){const L=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vi(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,L,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,L,f,_,null)}function S(A,C,L,M){let y=null;const I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)y=I;else if(y=L.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=y.uuid,B=C.uuid;let k=l[O];k===void 0&&(k={},l[O]=k);let j=k[B];j===void 0&&(j=y.clone(),k[B]=j,C.addEventListener("dispose",R)),y=j}if(y.visible=C.visible,y.wireframe=C.wireframe,M===Pn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=r.properties.get(y);O.light=L}return y}function x(A,C,L,M,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=e.update(A),k=A.material;if(Array.isArray(k)){const j=B.groups;for(let V=0,Y=j.length;V<Y;V++){const F=j[V],Q=k[F.materialIndex];if(Q&&Q.visible){const te=S(A,Q,M,y);A.onBeforeShadow(r,A,C,L,B,te,F),r.renderBufferDirect(L,null,B,te,A,F),A.onAfterShadow(r,A,C,L,B,te,F)}}}else if(k.visible){const j=S(A,k,M,y);A.onBeforeShadow(r,A,C,L,B,j,null),r.renderBufferDirect(L,null,B,j,A,null),A.onAfterShadow(r,A,C,L,B,j,null)}}const O=A.children;for(let B=0,k=O.length;B<k;B++)x(O[B],C,L,M,y)}function R(A){A.target.removeEventListener("dispose",R);for(const L in l){const M=l[L],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const O_={[Uo]:No,[Fo]:ko,[Oo]:zo,[Ki]:Bo,[No]:Uo,[ko]:Fo,[zo]:Oo,[Bo]:Ki};function B_(r,e){function t(){let D=!1;const he=new Je;let X=null;const Z=new Je(0,0,0,0);return{setMask:function(me){X!==me&&!D&&(r.colorMask(me,me,me,me),X=me)},setLocked:function(me){D=me},setClear:function(me,fe,ke,xt,Lt){Lt===!0&&(me*=xt,fe*=xt,ke*=xt),he.set(me,fe,ke,xt),Z.equals(he)===!1&&(r.clearColor(me,fe,ke,xt),Z.copy(he))},reset:function(){D=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,X=null,Z=null,me=null;return{setReversed:function(fe){if(he!==fe){const ke=e.get("EXT_clip_control");he?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const xt=me;me=null,this.setClear(xt)}he=fe},getReversed:function(){return he},setTest:function(fe){fe?ae(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(fe){X!==fe&&!D&&(r.depthMask(fe),X=fe)},setFunc:function(fe){if(he&&(fe=O_[fe]),Z!==fe){switch(fe){case Uo:r.depthFunc(r.NEVER);break;case No:r.depthFunc(r.ALWAYS);break;case Fo:r.depthFunc(r.LESS);break;case Ki:r.depthFunc(r.LEQUAL);break;case Oo:r.depthFunc(r.EQUAL);break;case Bo:r.depthFunc(r.GEQUAL);break;case ko:r.depthFunc(r.GREATER);break;case zo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=fe}},setLocked:function(fe){D=fe},setClear:function(fe){me!==fe&&(he&&(fe=1-fe),r.clearDepth(fe),me=fe)},reset:function(){D=!1,X=null,Z=null,me=null,he=!1}}}function i(){let D=!1,he=null,X=null,Z=null,me=null,fe=null,ke=null,xt=null,Lt=null;return{setTest:function(st){D||(st?ae(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(st){he!==st&&!D&&(r.stencilMask(st),he=st)},setFunc:function(st,on,En){(X!==st||Z!==on||me!==En)&&(r.stencilFunc(st,on,En),X=st,Z=on,me=En)},setOp:function(st,on,En){(fe!==st||ke!==on||xt!==En)&&(r.stencilOp(st,on,En),fe=st,ke=on,xt=En)},setLocked:function(st){D=st},setClear:function(st){Lt!==st&&(r.clearStencil(st),Lt=st)},reset:function(){D=!1,he=null,X=null,Z=null,me=null,fe=null,ke=null,xt=null,Lt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,S=null,x=null,R=null,A=null,C=new Ne(0,0,0),L=0,M=!1,y=null,I=null,O=null,B=null,k=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(F)[1]),V=Y>=1):F.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),V=Y>=2);let Q=null,te={};const re=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),Ie=new Je().fromArray(re),W=new Je().fromArray(Se);function ne(D,he,X,Z){const me=new Uint8Array(4),fe=r.createTexture();r.bindTexture(D,fe),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<X;ke++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(he+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return fe}const pe={};pe[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(r.DEPTH_TEST),o.setFunc(Ki),Pe(!1),Xe(oc),ae(r.CULL_FACE),P($n);function ae(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function _e(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function He(D,he){return d[D]!==he?(r.bindFramebuffer(D,he),d[D]=he,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=he),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=he),!0):!1}function Ae(D,he){let X=f,Z=!1;if(D){X=u.get(he),X===void 0&&(X=[],u.set(he,X));const me=D.textures;if(X.length!==me.length||X[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,ke=me.length;fe<ke;fe++)X[fe]=r.COLOR_ATTACHMENT0+fe;X.length=me.length,Z=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Z=!0);Z&&r.drawBuffers(X)}function J(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const ce={[mi]:r.FUNC_ADD,[Wh]:r.FUNC_SUBTRACT,[Xh]:r.FUNC_REVERSE_SUBTRACT};ce[jh]=r.MIN,ce[Yh]=r.MAX;const oe={[qh]:r.ZERO,[Kh]:r.ONE,[Zh]:r.SRC_COLOR,[Lo]:r.SRC_ALPHA,[nd]:r.SRC_ALPHA_SATURATE,[ed]:r.DST_COLOR,[Qh]:r.DST_ALPHA,[$h]:r.ONE_MINUS_SRC_COLOR,[Do]:r.ONE_MINUS_SRC_ALPHA,[td]:r.ONE_MINUS_DST_COLOR,[Jh]:r.ONE_MINUS_DST_ALPHA,[id]:r.CONSTANT_COLOR,[sd]:r.ONE_MINUS_CONSTANT_COLOR,[rd]:r.CONSTANT_ALPHA,[od]:r.ONE_MINUS_CONSTANT_ALPHA};function P(D,he,X,Z,me,fe,ke,xt,Lt,st){if(D===$n){_===!0&&(_e(r.BLEND),_=!1);return}if(_===!1&&(ae(r.BLEND),_=!0),D!==Vh){if(D!==m||st!==M){if((p!==mi||x!==mi)&&(r.blendEquation(r.FUNC_ADD),p=mi,x=mi),st)switch(D){case Xi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ac:r.blendFunc(r.ONE,r.ONE);break;case cc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ac:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case cc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,S=null,R=null,A=null,C.set(0,0,0),L=0,m=D,M=st}return}me=me||he,fe=fe||X,ke=ke||Z,(he!==p||me!==x)&&(r.blendEquationSeparate(ce[he],ce[me]),p=he,x=me),(X!==v||Z!==S||fe!==R||ke!==A)&&(r.blendFuncSeparate(oe[X],oe[Z],oe[fe],oe[ke]),v=X,S=Z,R=fe,A=ke),(xt.equals(C)===!1||Lt!==L)&&(r.blendColor(xt.r,xt.g,xt.b,Lt),C.copy(xt),L=Lt),m=D,M=!1}function je(D,he){D.side===It?_e(r.CULL_FACE):ae(r.CULL_FACE);let X=D.side===Gt;he&&(X=!X),Pe(X),D.blending===Xi&&D.transparent===!1?P($n):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ht(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(D){y!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),y=D)}function Xe(D){D!==Hh?(ae(r.CULL_FACE),D!==I&&(D===oc?r.cullFace(r.BACK):D===Gh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),I=D}function be(D){D!==O&&(V&&r.lineWidth(D),O=D)}function ht(D,he,X){D?(ae(r.POLYGON_OFFSET_FILL),(B!==he||k!==X)&&(r.polygonOffset(he,X),B=he,k=X)):_e(r.POLYGON_OFFSET_FILL)}function Te(D){D?ae(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function w(D){D===void 0&&(D=r.TEXTURE0+j-1),Q!==D&&(r.activeTexture(D),Q=D)}function E(D,he,X){X===void 0&&(Q===null?X=r.TEXTURE0+j-1:X=Q);let Z=te[X];Z===void 0&&(Z={type:void 0,texture:void 0},te[X]=Z),(Z.type!==D||Z.texture!==he)&&(Q!==X&&(r.activeTexture(X),Q=X),r.bindTexture(D,he||pe[D]),Z.type=D,Z.texture=he)}function z(){const D=te[Q];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{r.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{r.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{r.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{r.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{r.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Ie.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ie.copy(D))}function ye(D){W.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function Ke(D,he){let X=l.get(he);X===void 0&&(X=new WeakMap,l.set(he,X));let Z=X.get(D);Z===void 0&&(Z=r.getUniformBlockIndex(he,D.name),X.set(D,Z))}function Ge(D,he){const Z=l.get(he).get(D);c.get(he)!==Z&&(r.uniformBlockBinding(he,Z,D.__bindingPointIndex),c.set(he,Z))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Q=null,te={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,S=null,x=null,R=null,A=null,C=new Ne(0,0,0),L=0,M=!1,y=null,I=null,O=null,B=null,k=null,Ie.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:_e,bindFramebuffer:He,drawBuffers:Ae,useProgram:J,setBlending:P,setMaterial:je,setFlipSided:Pe,setCullFace:Xe,setLineWidth:be,setPolygonOffset:ht,setScissorTest:Te,activeTexture:w,bindTexture:E,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Le,updateUBOMapping:Ke,uniformBlockBinding:Ge,texStorage2D:Ze,texStorage3D:se,texSubImage2D:q,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:xe,scissor:De,viewport:ye,reset:ut}}function k_(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return f?new OffscreenCanvas(w,E):Ds("canvas")}function _(w,E,z){let K=1;const ee=Te(w);if((ee.width>z||ee.height>z)&&(K=z/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(K*ee.width),Ee=Math.floor(K*ee.height);d===void 0&&(d=g(q,Ee));const ue=E?g(q,Ee):d;return ue.width=q,ue.height=Ee,ue.getContext("2d").drawImage(w,0,0,q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Ee+")."),ue}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(w,E,z,K,ee=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=E;if(E===r.RED&&(z===r.FLOAT&&(q=r.R32F),z===r.HALF_FLOAT&&(q=r.R16F),z===r.UNSIGNED_BYTE&&(q=r.R8)),E===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.R8UI),z===r.UNSIGNED_SHORT&&(q=r.R16UI),z===r.UNSIGNED_INT&&(q=r.R32UI),z===r.BYTE&&(q=r.R8I),z===r.SHORT&&(q=r.R16I),z===r.INT&&(q=r.R32I)),E===r.RG&&(z===r.FLOAT&&(q=r.RG32F),z===r.HALF_FLOAT&&(q=r.RG16F),z===r.UNSIGNED_BYTE&&(q=r.RG8)),E===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RG8UI),z===r.UNSIGNED_SHORT&&(q=r.RG16UI),z===r.UNSIGNED_INT&&(q=r.RG32UI),z===r.BYTE&&(q=r.RG8I),z===r.SHORT&&(q=r.RG16I),z===r.INT&&(q=r.RG32I)),E===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RGB8UI),z===r.UNSIGNED_SHORT&&(q=r.RGB16UI),z===r.UNSIGNED_INT&&(q=r.RGB32UI),z===r.BYTE&&(q=r.RGB8I),z===r.SHORT&&(q=r.RGB16I),z===r.INT&&(q=r.RGB32I)),E===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),z===r.UNSIGNED_INT&&(q=r.RGBA32UI),z===r.BYTE&&(q=r.RGBA8I),z===r.SHORT&&(q=r.RGBA16I),z===r.INT&&(q=r.RGBA32I)),E===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),E===r.RGBA){const Ee=ee?Cr:qe.getTransfer(K);z===r.FLOAT&&(q=r.RGBA32F),z===r.HALF_FLOAT&&(q=r.RGBA16F),z===r.UNSIGNED_BYTE&&(q=Ee===at?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(w,E){let z;return w?E===null||E===xi||E===Qi?z=r.DEPTH24_STENCIL8:E===fn?z=r.DEPTH32F_STENCIL8:E===Ps&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xi||E===Qi?z=r.DEPTH_COMPONENT24:E===fn?z=r.DEPTH_COMPONENT32F:E===Ps&&(z=r.DEPTH_COMPONENT16),z}function R(w,E){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Vt&&w.minFilter!==Zt?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function A(w){const E=w.target;E.removeEventListener("dispose",A),L(E),E.isVideoTexture&&h.delete(E)}function C(w){const E=w.target;E.removeEventListener("dispose",C),y(E)}function L(w){const E=n.get(w);if(E.__webglInit===void 0)return;const z=w.source,K=u.get(z);if(K){const ee=K[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(w),Object.keys(K).length===0&&u.delete(z)}n.remove(w)}function M(w){const E=n.get(w);r.deleteTexture(E.__webglTexture);const z=w.source,K=u.get(z);delete K[E.__cacheKey],o.memory.textures--}function y(w){const E=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let ee=0;ee<E.__webglFramebuffer[K].length;ee++)r.deleteFramebuffer(E.__webglFramebuffer[K][ee]);else r.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)r.deleteFramebuffer(E.__webglFramebuffer[K]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=w.textures;for(let K=0,ee=z.length;K<ee;K++){const q=n.get(z[K]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(w)}let I=0;function O(){I=0}function B(){const w=I;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),I+=1,w}function k(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function j(w,E){const z=n.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(z,w,E);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+E)}function V(w,E){const z=n.get(w);if(w.version>0&&z.__version!==w.version){W(z,w,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+E)}function Y(w,E){const z=n.get(w);if(w.version>0&&z.__version!==w.version){W(z,w,E);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+E)}function F(w,E){const z=n.get(w);if(w.version>0&&z.__version!==w.version){ne(z,w,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+E)}const Q={[Ot]:r.REPEAT,[Kn]:r.CLAMP_TO_EDGE,[Ar]:r.MIRRORED_REPEAT},te={[Vt]:r.NEAREST,[jl]:r.NEAREST_MIPMAP_NEAREST,[Ms]:r.NEAREST_MIPMAP_LINEAR,[Zt]:r.LINEAR,[xr]:r.LINEAR_MIPMAP_NEAREST,[Ln]:r.LINEAR_MIPMAP_LINEAR},re={[Td]:r.NEVER,[Id]:r.ALWAYS,[wd]:r.LESS,[sh]:r.LEQUAL,[Ad]:r.EQUAL,[Pd]:r.GEQUAL,[Rd]:r.GREATER,[Cd]:r.NOTEQUAL};function Se(w,E){if(E.type===fn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zt||E.magFilter===xr||E.magFilter===Ms||E.magFilter===Ln||E.minFilter===Zt||E.minFilter===xr||E.minFilter===Ms||E.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Q[E.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,te[E.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,te[E.minFilter]),E.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vt||E.minFilter!==Ms&&E.minFilter!==Ln||E.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(w,E){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",A));const K=E.source;let ee=u.get(K);ee===void 0&&(ee={},u.set(K,ee));const q=k(E);if(q!==w.__cacheKey){ee[q]===void 0&&(ee[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[q].usedTimes++;const Ee=ee[w.__cacheKey];Ee!==void 0&&(ee[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(E)),w.__cacheKey=q,w.__webglTexture=ee[q].texture}return z}function W(w,E,z){let K=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=r.TEXTURE_3D);const ee=Ie(w,E),q=E.source;t.bindTexture(K,w.__webglTexture,r.TEXTURE0+z);const Ee=n.get(q);if(q.version!==Ee.__version||ee===!0){t.activeTexture(r.TEXTURE0+z);const ue=qe.getPrimaries(qe.workingColorSpace),xe=E.colorSpace===qn?null:qe.getPrimaries(E.colorSpace),Ze=E.colorSpace===qn||ue===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let se=_(E.image,!1,i.maxTextureSize);se=ht(E,se);const ve=s.convert(E.format,E.colorSpace),Le=s.convert(E.type);let De=S(E.internalFormat,ve,Le,E.colorSpace,E.isVideoTexture);Se(K,E);let ye;const Ke=E.mipmaps,Ge=E.isVideoTexture!==!0,ut=Ee.__version===void 0||ee===!0,D=q.dataReady,he=R(E,se);if(E.isDepthTexture)De=x(E.format===Ji,E.type),ut&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,De,se.width,se.height,0,ve,Le,null));else if(E.isDataTexture)if(Ke.length>0){Ge&&ut&&t.texStorage2D(r.TEXTURE_2D,he,De,Ke[0].width,Ke[0].height);for(let X=0,Z=Ke.length;X<Z;X++)ye=Ke[X],Ge?D&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,ye.width,ye.height,ve,Le,ye.data):t.texImage2D(r.TEXTURE_2D,X,De,ye.width,ye.height,0,ve,Le,ye.data);E.generateMipmaps=!1}else Ge?(ut&&t.texStorage2D(r.TEXTURE_2D,he,De,se.width,se.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,ve,Le,se.data)):t.texImage2D(r.TEXTURE_2D,0,De,se.width,se.height,0,ve,Le,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ge&&ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,De,Ke[0].width,Ke[0].height,se.depth);for(let X=0,Z=Ke.length;X<Z;X++)if(ye=Ke[X],E.format!==sn)if(ve!==null)if(Ge){if(D)if(E.layerUpdates.size>0){const me=el(ye.width,ye.height,E.format,E.type);for(const fe of E.layerUpdates){const ke=ye.data.subarray(fe*me/ye.data.BYTES_PER_ELEMENT,(fe+1)*me/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,fe,ye.width,ye.height,1,ve,ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,se.depth,ve,ye.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,De,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,se.depth,ve,Le,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,De,ye.width,ye.height,se.depth,0,ve,Le,ye.data)}else{Ge&&ut&&t.texStorage2D(r.TEXTURE_2D,he,De,Ke[0].width,Ke[0].height);for(let X=0,Z=Ke.length;X<Z;X++)ye=Ke[X],E.format!==sn?ve!==null?Ge?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,X,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,ye.width,ye.height,ve,Le,ye.data):t.texImage2D(r.TEXTURE_2D,X,De,ye.width,ye.height,0,ve,Le,ye.data)}else if(E.isDataArrayTexture)if(Ge){if(ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,De,se.width,se.height,se.depth),D)if(E.layerUpdates.size>0){const X=el(se.width,se.height,E.format,E.type);for(const Z of E.layerUpdates){const me=se.data.subarray(Z*X/se.data.BYTES_PER_ELEMENT,(Z+1)*X/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,ve,Le,me)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,Le,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,ve,Le,se.data);else if(E.isData3DTexture)Ge?(ut&&t.texStorage3D(r.TEXTURE_3D,he,De,se.width,se.height,se.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,Le,se.data)):t.texImage3D(r.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,ve,Le,se.data);else if(E.isFramebufferTexture){if(ut)if(Ge)t.texStorage2D(r.TEXTURE_2D,he,De,se.width,se.height);else{let X=se.width,Z=se.height;for(let me=0;me<he;me++)t.texImage2D(r.TEXTURE_2D,me,De,X,Z,0,ve,Le,null),X>>=1,Z>>=1}}else if(Ke.length>0){if(Ge&&ut){const X=Te(Ke[0]);t.texStorage2D(r.TEXTURE_2D,he,De,X.width,X.height)}for(let X=0,Z=Ke.length;X<Z;X++)ye=Ke[X],Ge?D&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,ve,Le,ye):t.texImage2D(r.TEXTURE_2D,X,De,ve,Le,ye);E.generateMipmaps=!1}else if(Ge){if(ut){const X=Te(se);t.texStorage2D(r.TEXTURE_2D,he,De,X.width,X.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Le,se)}else t.texImage2D(r.TEXTURE_2D,0,De,ve,Le,se);m(E)&&p(K),Ee.__version=q.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function ne(w,E,z){if(E.image.length!==6)return;const K=Ie(w,E),ee=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+z);const q=n.get(ee);if(ee.version!==q.__version||K===!0){t.activeTexture(r.TEXTURE0+z);const Ee=qe.getPrimaries(qe.workingColorSpace),ue=E.colorSpace===qn?null:qe.getPrimaries(E.colorSpace),xe=E.colorSpace===qn||Ee===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ze=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!Ze&&!se?ve[Z]=_(E.image[Z],!0,i.maxCubemapSize):ve[Z]=se?E.image[Z].image:E.image[Z],ve[Z]=ht(E,ve[Z]);const Le=ve[0],De=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),Ke=S(E.internalFormat,De,ye,E.colorSpace),Ge=E.isVideoTexture!==!0,ut=q.__version===void 0||K===!0,D=ee.dataReady;let he=R(E,Le);Se(r.TEXTURE_CUBE_MAP,E);let X;if(Ze){Ge&&ut&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Ke,Le.width,Le.height);for(let Z=0;Z<6;Z++){X=ve[Z].mipmaps;for(let me=0;me<X.length;me++){const fe=X[me];E.format!==sn?De!==null?Ge?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,fe.width,fe.height,De,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ke,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,fe.width,fe.height,De,ye,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ke,fe.width,fe.height,0,De,ye,fe.data)}}}else{if(X=E.mipmaps,Ge&&ut){X.length>0&&he++;const Z=Te(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){Ge?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,De,ye,ve[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,ve[Z].width,ve[Z].height,0,De,ye,ve[Z].data);for(let me=0;me<X.length;me++){const ke=X[me].image[Z].image;Ge?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,ke.width,ke.height,De,ye,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ke,ke.width,ke.height,0,De,ye,ke.data)}}else{Ge?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,ye,ve[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,De,ye,ve[Z]);for(let me=0;me<X.length;me++){const fe=X[me];Ge?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,De,ye,fe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ke,De,ye,fe.image[Z])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),q.__version=ee.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function pe(w,E,z,K,ee,q){const Ee=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),xe=S(z.internalFormat,Ee,ue,z.colorSpace),Ze=n.get(E),se=n.get(z);if(se.__renderTarget=E,!Ze.__hasExternalTextures){const ve=Math.max(1,E.width>>q),Le=Math.max(1,E.height>>q);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,xe,ve,Le,E.depth,0,Ee,ue,null):t.texImage2D(ee,q,xe,ve,Le,0,Ee,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),Xe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,ee,se.__webglTexture,0,Pe(E)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,ee,se.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(w,E,z){if(r.bindRenderbuffer(r.RENDERBUFFER,w),E.depthBuffer){const K=E.depthTexture,ee=K&&K.isDepthTexture?K.type:null,q=x(E.stencilBuffer,ee),Ee=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=Pe(E);Xe(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,q,E.width,E.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,q,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,w)}else{const K=E.textures;for(let ee=0;ee<K.length;ee++){const q=K[ee],Ee=s.convert(q.format,q.colorSpace),ue=s.convert(q.type),xe=S(q.internalFormat,Ee,ue,q.colorSpace),Ze=Pe(E);z&&Xe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,xe,E.width,E.height):Xe(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,xe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const ee=K.__webglTexture,q=Pe(E);if(E.depthTexture.format===ji)Xe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Ji)Xe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function He(w){const E=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=K}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");_e(E.__webglFramebuffer,w)}else if(z){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=r.createRenderbuffer(),ae(E.__webglDepthbuffer[K],w,!1);else{const ee=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,q)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ae(E.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,ee)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(w,E,z){const K=n.get(w);E!==void 0&&pe(K.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&He(w)}function J(w){const E=w.texture,z=n.get(w),K=n.get(E);w.addEventListener("dispose",C);const ee=w.textures,q=w.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=E.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let xe=0;xe<E.mipmaps.length;xe++)z.__webglFramebuffer[ue][xe]=r.createFramebuffer()}else z.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)z.__webglFramebuffer[ue]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let ue=0,xe=ee.length;ue<xe;ue++){const Ze=n.get(ee[ue]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),o.memory.textures++)}if(w.samples>0&&Xe(w)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const xe=ee[ue];z.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);const Ze=s.convert(xe.format,xe.colorSpace),se=s.convert(xe.type),ve=S(xe.internalFormat,Ze,se,xe.colorSpace,w.isXRRenderTarget===!0),Le=Pe(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,ve,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Se(r.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)pe(z.__webglFramebuffer[ue][xe],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else pe(z.__webglFramebuffer[ue],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(E)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ue=0,xe=ee.length;ue<xe;ue++){const Ze=ee[ue],se=n.get(Ze);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Se(r.TEXTURE_2D,Ze),pe(z.__webglFramebuffer,w,Ze,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),m(Ze)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),Se(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)pe(z.__webglFramebuffer[xe],w,E,r.COLOR_ATTACHMENT0,ue,xe);else pe(z.__webglFramebuffer,w,E,r.COLOR_ATTACHMENT0,ue,0);m(E)&&p(ue),t.unbindTexture()}w.depthBuffer&&He(w)}function ce(w){const E=w.textures;for(let z=0,K=E.length;z<K;z++){const ee=E[z];if(m(ee)){const q=v(w),Ee=n.get(ee).__webglTexture;t.bindTexture(q,Ee),p(q),t.unbindTexture()}}}const oe=[],P=[];function je(w){if(w.samples>0){if(Xe(w)===!1){const E=w.textures,z=w.width,K=w.height;let ee=r.COLOR_BUFFER_BIT;const q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(w),ue=E.length>1;if(ue)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);const Ze=n.get(E[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ze,0)}r.blitFramebuffer(0,0,z,K,0,0,z,K,ee,r.NEAREST),c===!0&&(oe.length=0,P.length=0,oe.push(r.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(oe.push(q),P.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);const Ze=n.get(E[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,Ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const E=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Pe(w){return Math.min(i.maxSamples,w.samples)}function Xe(w){const E=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(w){const E=o.render.frame;h.get(w)!==E&&(h.set(w,E),w.update())}function ht(w,E){const z=w.colorSpace,K=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Bt&&z!==qn&&(qe.getTransfer(z)===at?(K!==sn||ee!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function Te(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=F,this.rebindTextures=Ae,this.setupRenderTarget=J,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Xe}function z_(r,e){function t(n,i=qn){let s;const o=qe.getTransfer(i);if(n===Fn)return r.UNSIGNED_BYTE;if(n===Ca)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return r.BYTE;if(n===ql)return r.SHORT;if(n===Ps)return r.UNSIGNED_SHORT;if(n===Ra)return r.INT;if(n===xi)return r.UNSIGNED_INT;if(n===fn)return r.FLOAT;if(n===Us)return r.HALF_FLOAT;if(n===Zl)return r.ALPHA;if(n===$l)return r.RGB;if(n===sn)return r.RGBA;if(n===Ql)return r.LUMINANCE;if(n===Jl)return r.LUMINANCE_ALPHA;if(n===ji)return r.DEPTH_COMPONENT;if(n===Ji)return r.DEPTH_STENCIL;if(n===Ia)return r.RED;if(n===La)return r.RED_INTEGER;if(n===eh)return r.RG;if(n===Da)return r.RG_INTEGER;if(n===Ua)return r.RGBA_INTEGER;if(n===vr||n===yr||n===Mr||n===Sr)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Wo||n===Xo||n===jo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===qo||n===Ko)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yo||n===qo)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ko)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zo||n===$o||n===Qo||n===Jo||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Zo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===aa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===la)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===ha||n===da)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Er)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===th||n===ua||n===fa||n===pa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Er)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const H_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:H_,fragmentShader:G_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W_ extends ei{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=new V_,m=t.getContextAttributes();let p=null,v=null;const S=[],x=[],R=new we;let A=null;const C=new Ft;C.viewport=new Je;const L=new Ft;L.viewport=new Je;const M=[C,L],y=new Ku;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=S[W];return ne===void 0&&(ne=new co,S[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=S[W];return ne===void 0&&(ne=new co,S[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=S[W];return ne===void 0&&(ne=new co,S[W]=ne),ne.getHandSpace()};function B(W){const ne=x.indexOf(W.inputSource);if(ne===-1)return;const pe=S[ne];pe!==void 0&&(pe.update(W.inputSource,W.frame,l||o),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",j);for(let W=0;W<S.length;W++){const ne=x[W];ne!==null&&(x[W]=null,S[W].disconnect(ne))}I=null,O=null,_.reset(),e.setRenderTarget(p),f=null,u=null,d=null,i=null,v=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",k),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ae=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?Ji:ji,ae=m.stencil?Qi:xi);const He={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(He),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new vi(u.textureWidth,u.textureHeight,{format:sn,type:Fn,depthTexture:new gh(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new vi(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ie.setContext(i),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(W){for(let ne=0;ne<W.removed.length;ne++){const pe=W.removed[ne],ae=x.indexOf(pe);ae>=0&&(x[ae]=null,S[ae].disconnect(pe))}for(let ne=0;ne<W.added.length;ne++){const pe=W.added[ne];let ae=x.indexOf(pe);if(ae===-1){for(let He=0;He<S.length;He++)if(He>=x.length){x.push(pe),ae=He;break}else if(x[He]===null){x[He]=pe,ae=He;break}if(ae===-1)break}const _e=S[ae];_e&&_e.connect(pe)}}const V=new T,Y=new T;function F(W,ne,pe){V.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(pe.matrixWorld);const ae=V.distanceTo(Y),_e=ne.projectionMatrix.elements,He=pe.projectionMatrix.elements,Ae=_e[14]/(_e[10]-1),J=_e[14]/(_e[10]+1),ce=(_e[9]+1)/_e[5],oe=(_e[9]-1)/_e[5],P=(_e[8]-1)/_e[0],je=(He[8]+1)/He[0],Pe=Ae*P,Xe=Ae*je,be=ae/(-P+je),ht=be*-P;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ht),W.translateZ(be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_e[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Te=Ae+be,w=J+be,E=Pe-ht,z=Xe+(ae-ht),K=ce*J/w*Te,ee=oe*J/w*Te;W.projectionMatrix.makePerspective(E,z,K,ee,Te,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Q(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let ne=W.near,pe=W.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),y.near=L.near=C.near=ne,y.far=L.far=C.far=pe,(I!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,O=y.far),C.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,y.layers.mask=C.layers.mask|L.layers.mask;const ae=W.parent,_e=y.cameras;Q(y,ae);for(let He=0;He<_e.length;He++)Q(_e[He],ae);_e.length===2?F(y,C,L):y.projectionMatrix.copy(C.projectionMatrix),te(W,y,ae)};function te(W,ne,pe){pe===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=es*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let re=null;function Se(W,ne){if(h=ne.getViewerPose(l||o),g=ne,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ae=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Ae=0;Ae<pe.length;Ae++){const J=pe[Ae];let ce=null;if(f!==null)ce=f.getViewport(J);else{const P=d.getViewSubImage(u,J);ce=P.viewport,Ae===0&&(e.setRenderTargetTextures(v,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(v))}let oe=M[Ae];oe===void 0&&(oe=new Ft,oe.layers.enable(Ae),oe.viewport=new Je,M[Ae]=oe),oe.matrix.fromArray(J.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(J.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ce.x,ce.y,ce.width,ce.height),Ae===0&&(y.matrix.copy(oe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(oe)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const Ae=d.getDepthInformation(pe[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,i.renderState)}}for(let pe=0;pe<S.length;pe++){const ae=x[pe],_e=S[pe];ae!==null&&_e!==void 0&&_e.update(ae,ne,l||o)}re&&re(W,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ie=new bh;Ie.setAnimationLoop(Se),this.setAnimationLoop=function(W){re=W},this.dispose=function(){}}}const ci=new rn,X_=new Oe;function j_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,ci.copy(x),ci.x*=-1,ci.y*=-1,ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(X_.makeRotationFromEuler(ci)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Y_(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){const x=S.program;n.uniformBlockBinding(v,x)}function l(v,S){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(u(v),s[v.id]=A)}function h(v){const S=d();v.__bindingPointIndex=S;const x=r.createBuffer(),R=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const S=i[v.id],x=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,C=x.length;A<C;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,y=L.length;M<y;M++){const I=L[M];if(f(I,A,M,R)===!0){const O=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let j=0;j<B.length;j++){const V=B[j],Y=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,O+k,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,x,R){const A=v.value,C=S+"_"+x;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const L=R[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(v){const S=v.uniforms;let x=0;const R=16;for(let C=0,L=S.length;C<L;C++){const M=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,I=M.length;y<I;y++){const O=M[y],B=Array.isArray(O.value)?O.value:[O.value];for(let k=0,j=B.length;k<j;k++){const V=B[k],Y=_(V),F=x%R,Q=F%Y.boundary,te=F+Q;x+=Q,te!==0&&R-te<Y.storage&&(x+=R-te),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=Y.storage}}}const A=x%R;return A>0&&(x+=R-A),v.__size=x,v.__cache={},this}function _(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Ch{constructor(e={}){const{canvas:t=qd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let R=!1,A=0,C=0,L=null,M=-1,y=null;const I=new Je,O=new Je;let B=null;const k=new Ne(0);let j=0,V=t.width,Y=t.height,F=1,Q=null,te=null;const re=new Je(0,0,V,Y),Se=new Je(0,0,V,Y);let Ie=!1;const W=new Va;let ne=!1,pe=!1;this.transmissionResolutionScale=1;const ae=new Oe,_e=new Oe,He=new T,Ae=new Je,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function oe(){return L===null?F:1}let P=n;function je(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),P===null){const U="webgl2";if(P=je(U,b),P===null)throw je(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Pe,Xe,be,ht,Te,w,E,z,K,ee,q,Ee,ue,xe,Ze,se,ve,Le,De,ye,Ke,Ge,ut,D;function he(){Pe=new sg(P),Pe.init(),Ge=new z_(P,Pe),Xe=new $m(P,Pe,e,Ge),be=new B_(P,Pe),Xe.reverseDepthBuffer&&u&&be.buffers.depth.setReversed(!0),ht=new ag(P),Te=new T_,w=new k_(P,Pe,be,Te,Xe,Ge,ht),E=new Jm(x),z=new ig(x),K=new ff(P),ut=new Km(P,K),ee=new rg(P,K,ht,ut),q=new lg(P,ee,K,ht),De=new cg(P,Xe,w),se=new Qm(Te),Ee=new b_(x,E,z,Pe,Xe,ut,se),ue=new j_(x,Te),xe=new A_,Ze=new D_(Pe),Le=new qm(x,E,z,be,q,f,c),ve=new F_(x,q,Xe),D=new Y_(P,ht,Xe,be),ye=new Zm(P,Pe,ht),Ke=new og(P,Pe,ht),ht.programs=Ee.programs,x.capabilities=Xe,x.extensions=Pe,x.properties=Te,x.renderLists=xe,x.shadowMap=ve,x.state=be,x.info=ht}he();const X=new W_(x,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(V,Y,!1))},this.getSize=function(b){return b.set(V,Y)},this.setSize=function(b,U,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,Y=U,t.width=Math.floor(b*F),t.height=Math.floor(U*F),H===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(V*F,Y*F).floor()},this.setDrawingBufferSize=function(b,U,H){V=b,Y=U,F=H,t.width=Math.floor(b*H),t.height=Math.floor(U*H),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,U,H,G){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,U,H,G),be.viewport(I.copy(re).multiplyScalar(F).round())},this.getScissor=function(b){return b.copy(Se)},this.setScissor=function(b,U,H,G){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,U,H,G),be.scissor(O.copy(Se).multiplyScalar(F).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(b){be.setScissorTest(Ie=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,H=!0){let G=0;if(b){let N=!1;if(L!==null){const ie=L.texture.format;N=ie===Ua||ie===Da||ie===La}if(N){const ie=L.texture.type,de=ie===Fn||ie===xi||ie===Ps||ie===Qi||ie===Ca||ie===Pa,ge=Le.getClearColor(),Me=Le.getClearAlpha(),Ue=ge.r,Fe=ge.g,Re=ge.b;de?(g[0]=Ue,g[1]=Fe,g[2]=Re,g[3]=Me,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ue,_[1]=Fe,_[2]=Re,_[3]=Me,P.clearBufferiv(P.COLOR,0,_))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT),H&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Le.dispose(),xe.dispose(),Ze.dispose(),Te.dispose(),E.dispose(),z.dispose(),q.dispose(),ut.dispose(),D.dispose(),Ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ja),X.removeEventListener("sessionend",ec),ti.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=ht.autoReset,U=ve.enabled,H=ve.autoUpdate,G=ve.needsUpdate,N=ve.type;he(),ht.autoReset=b,ve.enabled=U,ve.autoUpdate=H,ve.needsUpdate=G,ve.type=N}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ke(b){const U=b.target;U.removeEventListener("dispose",ke),xt(U)}function xt(b){Lt(b),Te.remove(b)}function Lt(b){const U=Te.get(b).programs;U!==void 0&&(U.forEach(function(H){Ee.releaseProgram(H)}),b.isShaderMaterial&&Ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,H,G,N,ie){U===null&&(U=J);const de=N.isMesh&&N.matrixWorld.determinant()<0,ge=Nh(b,U,H,G,N);be.setMaterial(G,de);let Me=H.index,Ue=1;if(G.wireframe===!0){if(Me=ee.getWireframeAttribute(H),Me===void 0)return;Ue=2}const Fe=H.drawRange,Re=H.attributes.position;let $e=Fe.start*Ue,et=(Fe.start+Fe.count)*Ue;ie!==null&&($e=Math.max($e,ie.start*Ue),et=Math.min(et,(ie.start+ie.count)*Ue)),Me!==null?($e=Math.max($e,0),et=Math.min(et,Me.count)):Re!=null&&($e=Math.max($e,0),et=Math.min(et,Re.count));const Mt=et-$e;if(Mt<0||Mt===1/0)return;ut.setup(N,G,ge,H,Me);let vt,Qe=ye;if(Me!==null&&(vt=K.get(Me),Qe=Ke,Qe.setIndex(vt)),N.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*oe()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(N.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),be.setLineWidth(Ce*oe()),N.isLineSegments?Qe.setMode(P.LINES):N.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else N.isPoints?Qe.setMode(P.POINTS):N.isSprite&&Qe.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ui("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ce=N._multiDrawStarts,Ct=N._multiDrawCounts,tt=N._multiDrawCount,an=Me?K.get(Me).bytesPerElement:1,Si=Te.get(G).currentProgram.getUniforms();for(let jt=0;jt<tt;jt++)Si.setValue(P,"_gl_DrawID",jt),Qe.render(Ce[jt]/an,Ct[jt])}else if(N.isInstancedMesh)Qe.renderInstances($e,Mt,N.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ct=Math.min(H.instanceCount,Ce);Qe.renderInstances($e,Mt,Ct)}else Qe.render($e,Mt)};function st(b,U,H){b.transparent===!0&&b.side===It&&b.forceSinglePass===!1?(b.side=Gt,b.needsUpdate=!0,Bs(b,U,H),b.side=Nn,b.needsUpdate=!0,Bs(b,U,H),b.side=It):Bs(b,U,H)}this.compile=function(b,U,H=null){H===null&&(H=b),p=Ze.get(H),p.init(U),S.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==H&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ie=N.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const ge=ie[de];st(ge,H,N),G.add(ge)}else st(ie,H,N),G.add(ie)}),p=S.pop(),G},this.compileAsync=function(b,U,H=null){const G=this.compile(b,U,H);return new Promise(N=>{function ie(){if(G.forEach(function(de){Te.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){N(b);return}setTimeout(ie,10)}Pe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let on=null;function En(b){on&&on(b)}function Ja(){ti.stop()}function ec(){ti.start()}const ti=new bh;ti.setAnimationLoop(En),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){on=b,X.setAnimationLoop(b),b===null?ti.stop():ti.start()},X.addEventListener("sessionstart",Ja),X.addEventListener("sessionend",ec),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,L),p=Ze.get(b,S.length),p.init(U),S.push(p),_e.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(_e),pe=this.localClippingEnabled,ne=se.init(this.clippingPlanes,pe),m=xe.get(b,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&zr(ie,U,-1/0,x.sortObjects)}zr(b,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,te),ce=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ce&&Le.addToRenderList(m,b),this.info.render.frame++,ne===!0&&se.beginShadows();const H=p.state.shadowsArray;ve.render(H,b,U),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ie=U.cameras;if(N.length>0)for(let de=0,ge=ie.length;de<ge;de++){const Me=ie[de];nc(G,N,b,Me)}ce&&Le.render(b);for(let de=0,ge=ie.length;de<ge;de++){const Me=ie[de];tc(m,b,Me,Me.viewport)}}else N.length>0&&nc(G,N,b,U),ce&&Le.render(b),tc(m,b,U);L!==null&&C===0&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(x,b,U),ut.resetDefaultState(),M=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],ne===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function zr(b,U,H,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){G&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);const de=q.update(b),ge=b.material;ge.visible&&m.push(b,de,ge,H,Ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){const de=q.update(b),ge=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ae.copy(de.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(_e)),Array.isArray(ge)){const Me=de.groups;for(let Ue=0,Fe=Me.length;Ue<Fe;Ue++){const Re=Me[Ue],$e=ge[Re.materialIndex];$e&&$e.visible&&m.push(b,de,$e,H,Ae.z,Re)}}else ge.visible&&m.push(b,de,ge,H,Ae.z,null)}}const ie=b.children;for(let de=0,ge=ie.length;de<ge;de++)zr(ie[de],U,H,G)}function tc(b,U,H,G){const N=b.opaque,ie=b.transmissive,de=b.transparent;p.setupLightsView(H),ne===!0&&se.setGlobalState(x.clippingPlanes,H),G&&be.viewport(I.copy(G)),N.length>0&&Os(N,U,H),ie.length>0&&Os(ie,U,H),de.length>0&&Os(de,U,H),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function nc(b,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new vi(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?Us:Fn,minFilter:Ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ie=p.state.transmissionRenderTarget[G.id],de=G.viewport||I;ie.setSize(de.z*x.transmissionResolutionScale,de.w*x.transmissionResolutionScale);const ge=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(k),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),ce&&Le.render(H);const Me=x.toneMapping;x.toneMapping=Qn;const Ue=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ne===!0&&se.setGlobalState(x.clippingPlanes,G),Os(b,H,G),w.updateMultisampleRenderTarget(ie),w.updateRenderTargetMipmap(ie),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Re=0,$e=U.length;Re<$e;Re++){const et=U[Re],Mt=et.object,vt=et.geometry,Qe=et.material,Ce=et.group;if(Qe.side===It&&Mt.layers.test(G.layers)){const Ct=Qe.side;Qe.side=Gt,Qe.needsUpdate=!0,ic(Mt,H,G,vt,Qe,Ce),Qe.side=Ct,Qe.needsUpdate=!0,Fe=!0}}Fe===!0&&(w.updateMultisampleRenderTarget(ie),w.updateRenderTargetMipmap(ie))}x.setRenderTarget(ge),x.setClearColor(k,j),Ue!==void 0&&(G.viewport=Ue),x.toneMapping=Me}function Os(b,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ie=b.length;N<ie;N++){const de=b[N],ge=de.object,Me=de.geometry,Ue=G===null?de.material:G,Fe=de.group;ge.layers.test(H.layers)&&ic(ge,U,H,Me,Ue,Fe)}}function ic(b,U,H,G,N,ie){b.onBeforeRender(x,U,H,G,N,ie),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,H,G,b,ie),N.transparent===!0&&N.side===It&&N.forceSinglePass===!1?(N.side=Gt,N.needsUpdate=!0,x.renderBufferDirect(H,U,G,N,b,ie),N.side=Nn,N.needsUpdate=!0,x.renderBufferDirect(H,U,G,N,b,ie),N.side=It):x.renderBufferDirect(H,U,G,N,b,ie),b.onAfterRender(x,U,H,G,N,ie)}function Bs(b,U,H){U.isScene!==!0&&(U=J);const G=Te.get(b),N=p.state.lights,ie=p.state.shadowsArray,de=N.state.version,ge=Ee.getParameters(b,N.state,ie,U,H),Me=Ee.getProgramCacheKey(ge);let Ue=G.programs;G.environment=b.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(b.isMeshStandardMaterial?z:E).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",ke),Ue=new Map,G.programs=Ue);let Fe=Ue.get(Me);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===de)return rc(b,ge),Fe}else ge.uniforms=Ee.getUniforms(b),b.onBeforeCompile(ge,x),Fe=Ee.acquireProgram(ge,Me),Ue.set(Me,Fe),G.uniforms=ge.uniforms;const Re=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=se.uniform),rc(b,ge),G.needsLights=Oh(b),G.lightsStateVersion=de,G.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Fe,G.uniformsList=null,Fe}function sc(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=br.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function rc(b,U){const H=Te.get(b);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Nh(b,U,H,G,N){U.isScene!==!0&&(U=J),w.resetTextureUnits();const ie=U.fog,de=G.isMeshStandardMaterial?U.environment:null,ge=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Bt,Me=(G.isMeshStandardMaterial?z:E).get(G.envMap||de),Ue=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!H.morphAttributes.position,$e=!!H.morphAttributes.normal,et=!!H.morphAttributes.color;let Mt=Qn;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=vt!==void 0?vt.length:0,Ce=Te.get(G),Ct=p.state.lights;if(ne===!0&&(pe===!0||b!==y)){const kt=b===y&&G.id===M;se.setState(G,b,kt)}let tt=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ct.state.version||Ce.outputColorSpace!==ge||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==Me||G.fog===!0&&Ce.fog!==ie||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==Fe||Ce.morphTargets!==Re||Ce.morphNormals!==$e||Ce.morphColors!==et||Ce.toneMapping!==Mt||Ce.morphTargetsCount!==Qe)&&(tt=!0):(tt=!0,Ce.__version=G.version);let an=Ce.currentProgram;tt===!0&&(an=Bs(G,U,N));let Si=!1,jt=!1,ls=!1;const pt=an.getUniforms(),Qt=Ce.uniforms;if(be.useProgram(an.program)&&(Si=!0,jt=!0,ls=!0),G.id!==M&&(M=G.id,jt=!0),Si||y!==b){be.buffers.depth.getReversed()?(ae.copy(b.projectionMatrix),Zd(ae),$d(ae),pt.setValue(P,"projectionMatrix",ae)):pt.setValue(P,"projectionMatrix",b.projectionMatrix),pt.setValue(P,"viewMatrix",b.matrixWorldInverse);const Wt=pt.map.cameraPosition;Wt!==void 0&&Wt.setValue(P,He.setFromMatrixPosition(b.matrixWorld)),Xe.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,jt=!0,ls=!0)}if(N.isSkinnedMesh){pt.setOptional(P,N,"bindMatrix"),pt.setOptional(P,N,"bindMatrixInverse");const kt=N.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),pt.setValue(P,"boneTexture",kt.boneTexture,w))}N.isBatchedMesh&&(pt.setOptional(P,N,"batchingTexture"),pt.setValue(P,"batchingTexture",N._matricesTexture,w),pt.setOptional(P,N,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",N._indirectTexture,w),pt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",N._colorsTexture,w));const Jt=H.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&De.update(N,H,an),(jt||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,pt.setValue(P,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Qt.envMap.value=Me,Qt.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Qt.envMapIntensity.value=U.environmentIntensity),jt&&(pt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&Fh(Qt,ls),ie&&G.fog===!0&&ue.refreshFogUniforms(Qt,ie),ue.refreshMaterialUniforms(Qt,G,F,Y,p.state.transmissionRenderTarget[b.id]),br.upload(P,sc(Ce),Qt,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(br.upload(P,sc(Ce),Qt,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(P,"center",N.center),pt.setValue(P,"modelViewMatrix",N.modelViewMatrix),pt.setValue(P,"normalMatrix",N.normalMatrix),pt.setValue(P,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const kt=G.uniformsGroups;for(let Wt=0,Hr=kt.length;Wt<Hr;Wt++){const ni=kt[Wt];D.update(ni,an),D.bind(ni,an)}}return an}function Fh(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Oh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,U,H){Te.get(b.texture).__webglTexture=U,Te.get(b.depthTexture).__webglTexture=H;const G=Te.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const H=Te.get(b);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const Bh=P.createFramebuffer();this.setRenderTarget=function(b,U=0,H=0){L=b,A=U,C=H;let G=!0,N=null,ie=!1,de=!1;if(b){const Me=Te.get(b);if(Me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Me.__hasExternalTextures)w.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Re=b.depthTexture;if(Me.__boundDepthTexture!==Re){if(Re!==null&&Te.has(Re)&&(b.width!==Re.image.width||b.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(de=!0);const Fe=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?N=Fe[U][H]:N=Fe[U],ie=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?N=Te.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[H]:N=Fe,I.copy(b.viewport),O.copy(b.scissor),B=b.scissorTest}else I.copy(re).multiplyScalar(F).floor(),O.copy(Se).multiplyScalar(F).floor(),B=Ie;if(H!==0&&(N=Bh),be.bindFramebuffer(P.FRAMEBUFFER,N)&&G&&be.drawBuffers(b,N),be.viewport(I),be.scissor(O),be.setScissorTest(B),ie){const Me=Te.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,H)}else if(de){const Me=Te.get(b.texture),Ue=U;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.__webglTexture,H,Ue)}else if(b!==null&&H!==0){const Me=Te.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Me.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(b,U,H,G,N,ie,de){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){be.bindFramebuffer(P.FRAMEBUFFER,ge);try{const Me=b.texture,Ue=Me.format,Fe=Me.type;if(!Xe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&H>=0&&H<=b.height-N&&P.readPixels(U,H,G,N,Ge.convert(Ue),Ge.convert(Fe),ie)}finally{const Me=L!==null?Te.get(L).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(b,U,H,G,N,ie,de){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){const Me=b.texture,Ue=Me.format,Fe=Me.type;if(!Xe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-G&&H>=0&&H<=b.height-N){be.bindFramebuffer(P.FRAMEBUFFER,ge);const Re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),P.readPixels(U,H,G,N,Ge.convert(Ue),Ge.convert(Fe),0);const $e=L!==null?Te.get(L).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,$e);const et=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Kd(P,et,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Re),P.deleteSync(et),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,H=0){b.isTexture!==!0&&(ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-H),N=Math.floor(b.image.width*G),ie=Math.floor(b.image.height*G),de=U!==null?U.x:0,ge=U!==null?U.y:0;w.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,de,ge,N,ie),be.unbindTexture()};const kh=P.createFramebuffer(),zh=P.createFramebuffer();this.copyTextureToTexture=function(b,U,H=null,G=null,N=0,ie=null){b.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],U=arguments[2],ie=arguments[3]||0,H=null),ie===null&&(N!==0?(ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=N,N=0):ie=0);let de,ge,Me,Ue,Fe,Re,$e,et,Mt;const vt=b.isCompressedTexture?b.mipmaps[ie]:b.image;if(H!==null)de=H.max.x-H.min.x,ge=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,Ue=H.min.x,Fe=H.min.y,Re=H.isBox3?H.min.z:0;else{const Jt=Math.pow(2,-N);de=Math.floor(vt.width*Jt),ge=Math.floor(vt.height*Jt),b.isDataArrayTexture?Me=vt.depth:b.isData3DTexture?Me=Math.floor(vt.depth*Jt):Me=1,Ue=0,Fe=0,Re=0}G!==null?($e=G.x,et=G.y,Mt=G.z):($e=0,et=0,Mt=0);const Qe=Ge.convert(U.format),Ce=Ge.convert(U.type);let Ct;U.isData3DTexture?(w.setTexture3D(U,0),Ct=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Ct=P.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Ct=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const tt=P.getParameter(P.UNPACK_ROW_LENGTH),an=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Si=P.getParameter(P.UNPACK_SKIP_PIXELS),jt=P.getParameter(P.UNPACK_SKIP_ROWS),ls=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,vt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ue),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re);const pt=b.isDataArrayTexture||b.isData3DTexture,Qt=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const Jt=Te.get(b),kt=Te.get(U),Wt=Te.get(Jt.__renderTarget),Hr=Te.get(kt.__renderTarget);be.bindFramebuffer(P.READ_FRAMEBUFFER,Wt.__webglFramebuffer),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let ni=0;ni<Me;ni++)pt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.get(b).__webglTexture,N,Re+ni),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.get(U).__webglTexture,ie,Mt+ni)),P.blitFramebuffer(Ue,Fe,de,ge,$e,et,de,ge,P.DEPTH_BUFFER_BIT,P.NEAREST);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||Te.has(b)){const Jt=Te.get(b),kt=Te.get(U);be.bindFramebuffer(P.READ_FRAMEBUFFER,kh),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,zh);for(let Wt=0;Wt<Me;Wt++)pt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Jt.__webglTexture,N,Re+Wt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Jt.__webglTexture,N),Qt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,ie,Mt+Wt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kt.__webglTexture,ie),N!==0?P.blitFramebuffer(Ue,Fe,de,ge,$e,et,de,ge,P.COLOR_BUFFER_BIT,P.NEAREST):Qt?P.copyTexSubImage3D(Ct,ie,$e,et,Mt+Wt,Ue,Fe,de,ge):P.copyTexSubImage2D(Ct,ie,$e,et,Ue,Fe,de,ge);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Qt?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Ct,ie,$e,et,Mt,de,ge,Me,Qe,Ce,vt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ct,ie,$e,et,Mt,de,ge,Me,Qe,vt.data):P.texSubImage3D(Ct,ie,$e,et,Mt,de,ge,Me,Qe,Ce,vt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ie,$e,et,de,ge,Qe,Ce,vt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ie,$e,et,vt.width,vt.height,Qe,vt.data):P.texSubImage2D(P.TEXTURE_2D,ie,$e,et,de,ge,Qe,Ce,vt);P.pixelStorei(P.UNPACK_ROW_LENGTH,tt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,an),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Si),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ls),ie===0&&U.generateMipmaps&&P.generateMipmap(Ct),be.unbindTexture()},this.copyTextureToTexture3D=function(b,U,H=null,G=null,N=0){return b.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,H,G,N)},this.initRenderTarget=function(b){Te.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,be.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}function bl(r,e){if(e===Md)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ma||e===nh){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ma)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class q_ extends Mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new J_(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new l0(t)}),this.register(function(t){return new h0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new c0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new u0(t)}),this.register(function(t){return new f0(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Cs.extractUrlBase(e);o=Cs.resolveURL(l,this.path)}else o=Cs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ur(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ph){try{o[Ye.KHR_BINARY_GLTF]=new p0(e)}catch(d){i&&i(d);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new A0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case Ye.KHR_MATERIALS_UNLIT:o[d]=new $_;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[d]=new m0(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[d]=new g0;break;case Ye.KHR_MESH_QUANTIZATION:o[d]=new _0;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function K_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Z_{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ne(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Bt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Nr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Mh(h),l.distance=d;break;case"spot":l=new Xu(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),In(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class $_{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return At}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Bt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,yt))}return Promise.all(i)}}class Q_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class J_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(a,a)}return Promise.all(s)}}class e0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class t0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class n0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Bt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class i0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class s0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],Bt),Promise.all(s)}}class r0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class o0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],Bt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(s)}}class a0{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class c0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class l0{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class h0{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class d0{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class u0{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class f0{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==tn.TRIANGLES&&l.mode!==tn.TRIANGLE_STRIP&&l.mode!==tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const g of d){const _=new Oe,m=new T,p=new ot,v=new T(1,1,1),S=new Au(g.geometry,g.material,u);for(let x=0;x<u;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),S.setMatrixAt(x,_.compose(m,p,v));for(const x in c)if(x==="_COLOR_0"){const R=c[x];S.instanceColor=new _a(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);lt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ph="glTF",xs=12,Tl={JSON:1313821514,BIN:5130562};class p0{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ph)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-xs,s=new DataView(e,xs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Tl.JSON){const l=new Uint8Array(e,xs+o,a);this.content=n.decode(l)}else if(c===Tl.BIN){const l=xs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class m0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const d=ba[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=ba[h]||h.toLowerCase();if(o[h]!==void 0){const u=n.accessors[e.attributes[h]],f=qi[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}d(f)},a,l,Bt,u)})})}}class g0{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _0{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Ih extends Fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,_=g-l,m=-2*f+3*u,p=f-u,v=1-m,S=p-u+d;for(let x=0;x!==a;x++){const R=o[_+x+a],A=o[_+x+c]*h,C=o[g+x+a],L=o[g+x]*h;s[x]=v*R+S*A+m*C+p*L}return s}}const x0=new ot;class v0 extends Ih{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return x0.fromArray(s).normalize().toArray(s),s}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wl={9728:Vt,9729:Zt,9984:jl,9985:xr,9986:Ms,9987:Ln},Al={33071:Kn,33648:Ar,10497:Ot},Eo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ba={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},y0={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Is},bo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function M0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new On({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),r.DefaultMaterial}function li(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function In(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function S0(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;o.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;a.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function E0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function b0(r){let e;const t=r.extensions&&r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+To(t.attributes):e=r.indices+":"+To(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+To(r.targets[n]);return e}function To(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ta(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function T0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const w0=new Oe;class A0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new K_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new yh(this.options.manager):this.textureLoader=new qu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ur(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return li(s,a,i),In(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Cs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Eo[i.type],a=qi[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new ft(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Eo[i.type],l=qi[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(u/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(v);S||(_=new l(a,p*f,i.count*f/h),S=new Su(_,f/h),t.cache.add(v,S)),m=new Ha(S,c,u%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,u,i.count*c),m=new ft(_,c,g);if(i.sparse!==void 0){const p=Eo.SCALAR,v=qi[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,R=new v(o[1],S,i.sparse.count*p),A=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,L=R.length;C<L;C++){const M=R[C];if(m.setX(M,A[C*c]),c>=2&&m.setY(M,A[C*c+1]),c>=3&&m.setZ(M,A[C*c+2]),c>=4&&m.setW(M,A[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return h.magFilter=wl[u.magFilter]||Zt,h.minFilter=wl[u.minFilter]||Ln,h.wrapS=Al[u.wrapS]||Ot,h.wrapT=Al[u.wrapT]||Ot,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==Zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Rt(_);m.needsUpdate=!0,u(m)}),t.load(Cs.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),In(d,o),d.userData.mimeType=o.mimeType||T0(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Dr,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ns,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return On}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const d=i[Ye.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Bt),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,yt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=It);const h=s.alphaMode||bo.OPAQUE;if(h===bo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===bo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==At&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new we(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==At&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==At){const d=s.emissiveFactor;a.emissive=new Ne().setRGB(d[0],d[1],d[2],Bt)}return s.emissiveTexture!==void 0&&o!==At&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,yt)),Promise.all(l).then(function(){const d=new o(a);return s.name&&(d.name=s.name),In(d,s),t.associations.set(d,{materials:e}),s.extensions&&li(i,d,s),d})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Rl(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=b0(l),d=i[h];if(d)o.push(d.promise);else{let u;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=Rl(new _t,l,t),i[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?M0(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const v=l[f];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new bu(_,v):new $(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?p.geometry=bl(p.geometry,nh):m.mode===tn.TRIANGLE_FAN&&(p.geometry=bl(p.geometry,ma));else if(m.mode===tn.LINES)p=new mh(_,v);else if(m.mode===tn.LINE_STRIP)p=new nn(_,v);else if(m.mode===tn.LINE_LOOP)p=new Pu(_,v);else if(m.mode===tn.POINTS)p=new va(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&E0(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),In(p,s),m.extensions&&li(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&li(i,d[0],s),d[0];const u=new vn;s.extensions&&li(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(Oa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const d=o[l];if(d){a.push(d);const u=new Oe;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ga(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let v=0,S=u.length;v<S;v++){const x=u[v],R=f[v],A=g[v],C=_[v],L=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,R,A,C,L);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}return new ya(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,w0)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new fh:l.length>1?h=new vn:l.length===1?h=l[0]:h=new lt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=o),In(h,s),s.extensions&&li(n,h,s),s.matrix!==void 0){const d=new Oe;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new vn;n.name&&(s.name=i.createUniqueName(n.name)),In(s,n),n.extensions&&li(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++)s.add(c[h]);const l=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof yn||u instanceof Rt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Wn[s.path]===Wn.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(Wn[s.path]){case Wn.weights:l=ns;break;case Wn.rotation:l=is;break;case Wn.position:case Wn.scale:l=ss;break;default:switch(n.itemSize){case 1:l=ns;break;case 2:case 3:default:l=ss;break}break}const h=i.interpolation!==void 0?y0[i.interpolation]:Ls,d=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){const g=new l(c[u]+"."+Wn[s.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ta(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof is?v0:Ih;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function R0(r,e,t){const n=e.attributes,i=new $t;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),a.normalized){const h=Ta(qi[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new T,c=new T;for(let l=0,h=s.length;l<h;l++){const d=s[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=Ta(qi[u.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Rl(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=ba[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return qe.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),In(r,e),R0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?S0(r,e.targets,t):r})}const wo=new WeakMap;class C0 extends Mi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Ur(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,yt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Bt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(wo.has(e)){const c=wo.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[s]={resolve:l,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),wo.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new _t;e.index&&t.setIndex(new ft(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,c=new ft(o,a);s==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==yt)return;const n=new Ne;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),qe.toWorkingColorSpace(n,yt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ur(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=P0.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function P0(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(d){h({draco:d})},DracoDecoderModule(r)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const d=h.draco,u=new d.Decoder;try{const f=t(d,u,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{d.destroy(u)}});break}};function t(o,a,c,l){const h=l.attributeIDs,d=l.attributeTypes;let u,f;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)u=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,u);else if(g===o.POINT_CLOUD)u=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[d[m]];let v,S;if(l.useUniqueIDs)S=h[m],v=a.GetAttributeByUniqueId(u,S);else{if(S=a.GetAttributeId(u,o[h[m]]),S===-1)continue;v=a.GetAttribute(u,S)}const x=i(o,a,u,m,p,v);m==="color"&&(x.vertexColorSpace=l.vertexColorSpace),_.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,u)),o.destroy(u),_}function n(o,a,c){const h=c.num_faces()*3,d=h*4,u=o._malloc(d);a.GetTrianglesUInt32Array(c,d,u);const f=new Uint32Array(o.HEAPF32.buffer,u,h).slice();return o._free(u),{array:f,itemSize:1}}function i(o,a,c,l,h,d){const u=d.num_components(),g=c.num_points()*u,_=g*h.BYTES_PER_ELEMENT,m=s(o,h),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,d,m,_,p);const v=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:v,itemSize:u}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const Kt={MODELS:{CHAINSAW:"/assets/models/chainsaw-v1.glb",MAN:"/assets/models/man1.glb",PINE_TREE:"/assets/models/pine_tree.glb",TREE_BRANCH:"/assets/models/tree_branch.glb"},TEXTURES:{BARK_WILLOW:"/assets/textures/bark_willow_02_diff_4k.jpg",ENDCAP:"/assets/textures/endcap.jpg",MUD:"/assets/textures/brown_mud_02_diff_4k.jpg",LEAVES:"/assets/textures/brown_mud_leaves_01_diff_4k.jpg",SAWBUCK:"/assets/textures/support_sawbuck.jpg"}};class pn{static textures=new Map;static models=new Map;static async loadAll(e=[]){const t=new yh,n=new q_,i=new C0;i.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),n.setDRACOLoader(i);const s=[Kt.TEXTURES.BARK_WILLOW,Kt.TEXTURES.ENDCAP,Kt.TEXTURES.MUD,Kt.TEXTURES.LEAVES,Kt.TEXTURES.SAWBUCK],o=[Kt.MODELS.CHAINSAW,Kt.MODELS.MAN,Kt.MODELS.PINE_TREE,Kt.MODELS.TREE_BRANCH];for(const c of e)o.includes(c)||o.push(c);const a=[];for(const c of s)a.push(new Promise(l=>{t.load(c,h=>{h.colorSpace=yt,this.textures.set(c,h),l()},void 0,h=>{console.warn(`Failed to load texture ${c}`,h),l()})}));for(const c of o)a.push(new Promise(l=>{n.load(c,h=>{this.models.set(c,{scene:h.scene,animations:h.animations}),l()},void 0,h=>{console.warn(`Failed to load model ${c}`,h),l()})}));await Promise.all(a),console.log("AssetManager: All assets loaded.")}static getTexture(e){return this.textures.get(e)}static getModel(e){return this.models.get(e)}}const I0=250;class L0{state={activeMode:"SIMULATOR",activeTool:"chainsaw",showPerfWarnings:!1,throttleOn:!1,chainsawStuck:!1,lastResetTime:0,selectedPPEId:"hardhat",equippedPPE:{},featureFlags:{showTexture:!0,showNodes:!1,showEdges:!1,showTension:!1,globalTension:!1,showEndcapPlanes:!1,showGuidebarBox:!1,showKerfBox:!1,omitKerfBark:!1,showBindingIndicators:!1,resolveCollisions:!0,enableEndcapFriction:!0,debugFrictionForces:!1,depthTest:!0},simulation:{gravity:9.8,bindingThreshold:I0,currentPressure:0}};listeners=[];getState(){return this.state}update(e){let t=!1;for(const n in e)if(this.state[n]!==e[n]){t=!0;break}t&&(this.state={...this.state,...e},this.notify())}updateFeature(e,t){this.state.featureFlags[e]!==t&&(this.state.featureFlags[e]=t,this.notify())}updateSimulation(e,t){this.state.simulation[e]!==t&&(this.state.simulation[e]=t,this.notify())}subscribe(e){return this.listeners.push(e),e(this.state),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(){for(const e of this.listeners)e(this.state)}}const Be=new L0;class D0 extends za{constructor(){super();const e=new gt;e.deleteAttribute("uv");const t=new On({side:Gt}),n=new On,i=new Mh(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new $(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new $(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new $(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new $(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new $(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new $(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new $(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const u=new $(e,Bi(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const f=new $(e,Bi(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new $(e,Bi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new $(e,Bi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new $(e,Bi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new $(e,Bi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Bi(r){const e=new At;return e.color.setScalar(r),e}const Lh="logsim3d_preferred_stores",wa=[{id:"amazon",name:"Amazon",domain:"amazon.com"},{id:"walmart",name:"Walmart",domain:"walmart.com"},{id:"stihl",name:"Stihl",domain:"stihlusa.com"},{id:"husqvarna",name:"Husqvarna",domain:"husqvarna.com"},{id:"homedepot",name:"Home Depot",domain:"homedepot.com"},{id:"acmetools",name:"Acme Tools",domain:"acmetools.com"}];function Ao(){const r=localStorage.getItem(Lh);if(r)try{return JSON.parse(r)}catch(t){console.warn("Failed to parse store prefs, using defaults",t)}const e={};return wa.forEach(t=>e[t.id]=!0),{defaults:e,customs:[]}}function U0(r){localStorage.setItem(Lh,JSON.stringify(r))}const Es=[{id:"hardhat",name:"Hard Hat / Helmet",description:"Protects against falling debris, overhead hazards (widowmakers), and impact.",functions:"Absorbs shock from falling objects, provides penetration resistance, and offers lateral protection.",priceRange:"$35.00 - $95.00",buyUrl:"https://example.com/buy-hardhat",models:[{modelPath:"/assets/models/forestry_hardhat.glb",manScale:[.12,.12,.12],showcaseScale:[1,1,1],manPosition:[0,1.7,.05],manRotation:[0,0,0]}]},{id:"eyeprotection",name:"Eye Protection",description:"Mesh visor or safety glasses designed to shield eyes from wood chips and dust.",functions:"Prevents high-velocity sawdust, wood chips, and small branches from causing ocular injuries.",priceRange:"$15.00 - $40.00",buyUrl:"https://example.com/buy-eye-protection",models:[{modelPath:"/assets/models/safety_goggles.glb",manScale:[.75,.75,.75],showcaseScale:[7,7,7],manPosition:[0,1.66,.105],manRotation:[0,0,0]}]},{id:"earprotection",name:"Ear Protection",description:"High-decibel earmuffs or earplugs designed to prevent noise-induced hearing loss.",functions:"Reduces chainsaw noise exposure (typically 110+ dB) down to safe operational decibel levels.",priceRange:"$25.00 - $65.00",buyUrl:"https://example.com/buy-ear-protection"},{id:"gloves",name:"Heavy-Duty Gloves",description:"Protective leather or synthetic gloves for grip, abrasion protection, and vibration damping.",functions:"Improves chainsaw grip, reduces hand fatigue from vibration, and protects skin from splinters.",priceRange:"$20.00 - $50.00",buyUrl:"https://example.com/buy-gloves",models:[{modelPath:"/assets/models/right_glove.glb",manScale:[1.06,1.06,1.06],showcaseScale:[7,7,7],manPosition:[-.429,.845,.114],manRotation:[0,0,0]},{modelPath:"/assets/models/left_glove.glb",manScale:[1.06,1.06,1.06],showcaseScale:[0,0,0],manPosition:[.429,.849,.112],manRotation:[0,0,0]}]},{id:"chaps",name:"Kevlar Chainsaw Chaps",description:"Safety chaps filled with layers of Kevlar or polyester fibers that clog and stop a moving chain.",functions:"Instantly jams the chainsaw drive sprocket upon contact, preventing severe leg lacerations.",priceRange:"$75.00 - $180.00",buyUrl:"https://example.com/buy-chaps",models:[{modelPath:"/assets/models/chaps.glb",manScale:[1.06,1.06,1.06],showcaseScale:[2,2,2],manPosition:[0,0,.009],manRotation:[0,0,0]}]},{id:"boots",name:"Steel-Toed Boots",description:"Rugged leather logging boots with steel/composite toes and deep lugs for traction.",functions:"Protects toes from crush hazards (heavy logs) and provides stability/grip on uneven, slippery terrain.",priceRange:"$120.00 - $300.00",buyUrl:"https://example.com/buy-boots",models:[{modelPath:"/assets/models/right_boot.glb",manScale:[1.41,1.41,1.41],showcaseScale:[7,7,7],manPosition:[-.467,0,-.107],manRotation:[.001,-.474,-.009]},{modelPath:"/assets/models/left_boot.glb",manScale:[1.41,1.41,1.41],showcaseScale:[7,7,7],manPosition:[-.295,-.072,.189],manRotation:[.042,.335,.107]}]}];class N0{renderer=null;scene=null;camera=null;currentMesh=null;animationId=0;isRunning=!1;constructor(){const e=document.getElementById("ppe-preview-canvas");if(!e)return;const t=e.clientWidth||300,n=e.clientHeight||160;this.scene=new za,this.camera=new Ft(45,t/n,.1,100),this.camera.position.set(0,0,3),this.renderer=new Ch({canvas:e,alpha:!0,antialias:!0}),this.renderer.setSize(t,n,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new Sa(this.renderer);i.compileEquirectangularShader(),this.scene.environment=i.fromScene(new D0).texture;const s=new Sh(16777215,.8);this.scene.add(s);const o=new Nr(16777215,1.2);o.position.set(5,5,5),this.scene.add(o);const a=new Nr(440020,.6);a.position.set(-5,3,2),this.scene.add(a),new ResizeObserver(()=>{if(!e||!this.renderer||!this.camera)return;const l=e.clientWidth,h=e.clientHeight;this.camera.aspect=l/h,this.camera.updateProjectionMatrix(),this.renderer.setSize(l,h,!1)}).observe(e)}setItem(e){if(!this.scene||(this.currentMesh&&(this.scene.remove(this.currentMesh),this.currentMesh=null),!e||e.length===0))return;const t=new vn;if(e.forEach(n=>{const i=pn.getModel(n.modelPath);if(i){const s=i.scene.clone();s.traverse(o=>{if(o.isMesh){const a=o;if(a.material){const c=Array.isArray(a.material)?a.material:[a.material];for(const l of c)l instanceof gn&&l.transmission>0&&(l.transmission=0,l.transparent=!0,l.opacity=.4,l.roughness=Math.min(l.roughness,.2),l.needsUpdate=!0)}}}),n.showcaseScale&&s.scale.set(n.showcaseScale[0],n.showcaseScale[1],n.showcaseScale[2]),t.add(s)}}),t.children.length>0){const n=new $t().setFromObject(t),i=new T;n.getCenter(i),t.children.forEach(s=>{s.position.sub(i)}),this.currentMesh=t,this.scene.add(this.currentMesh)}}start(){this.isRunning||(this.isRunning=!0,this.animate())}stop(){this.isRunning=!1,this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=0)}animate(){this.isRunning&&(this.animationId=requestAnimationFrame(()=>this.animate()),this.currentMesh&&(this.currentMesh.rotation.y+=.01),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera))}}function Rx(){const r=document.getElementById("throttle-fill"),e=document.getElementById("throttle-toggle");e&&e.addEventListener("click",J=>{J.preventDefault(),document.activeElement instanceof HTMLElement&&document.activeElement.blur(),window.dispatchEvent(new KeyboardEvent("keydown",{key:"t"}))});const t=document.getElementById("debug-panel"),n=document.getElementById("modal-help"),i=document.getElementById("btn-help"),s=document.getElementById("modal-stuck"),o=document.getElementById("btn-dismiss-stuck"),a=document.getElementById("mode-ppe"),c=document.getElementById("mode-ohlec"),l=document.getElementById("mode-simulator"),h=document.getElementById("mode-assessment"),d=document.getElementById("btn-next-ohlec"),u=document.getElementById("btn-back-ppe"),f=document.getElementById("btn-start-simulator"),g=document.getElementById("ppe-panel"),_=document.getElementById("ohlec-panel"),m=document.getElementById("assessment-panel"),p=document.getElementById("mode-backdrop"),v=document.querySelectorAll(".simulator-control"),S=J=>{Be.update({activeMode:J})};a?.addEventListener("change",()=>S("PPE")),c?.addEventListener("change",()=>{window.location.href="/ohlec.html"}),l?.addEventListener("change",()=>S("SIMULATOR")),h?.addEventListener("change",()=>S("ASSESSMENT")),d?.addEventListener("click",()=>{window.location.href="/ohlec.html"}),u?.addEventListener("click",()=>S("PPE")),f?.addEventListener("click",()=>S("SIMULATOR"));const x=document.querySelectorAll(".exam-option-card"),R=document.getElementById("btn-submit-exam"),A=document.getElementById("btn-reset-exam"),C=document.getElementById("exam-feedback");x.forEach(J=>{J.addEventListener("click",()=>{x.forEach(oe=>oe.classList.remove("selected")),J.classList.add("selected");const ce=J.querySelector('input[type="radio"]');ce&&(ce.checked=!0)})}),R?.addEventListener("click",()=>{const J=document.querySelector('input[name="examQuestion1"]:checked');if(!J||!C)return;C.classList.remove("hidden","correct-bg","incorrect-bg"),x.forEach(oe=>oe.classList.remove("correct","incorrect"));const ce=J.closest(".exam-option-card");if(J.value==="B")ce&&ce.classList.add("correct"),C.classList.add("correct-bg"),C.innerHTML="<b>✓ Correct!</b> Chainsaw chaps contain cut-resistant fibers (like Kevlar/Aramid) designed to pull into the saw sprocket and stop the chain instantly upon contact.";else{ce&&ce.classList.add("incorrect");const oe=document.querySelector('input[value="B"]')?.closest(".exam-option-card");oe&&oe.classList.add("correct"),C.classList.add("incorrect-bg"),C.innerHTML="<b>✗ Incorrect.</b> Option B is correct. The primary purpose of chainsaw chaps is to supply high-friction cut-resistant fibers that tangle and stop the saw chain immediately."}}),A?.addEventListener("click",()=>{document.querySelectorAll('input[name="examQuestion1"]').forEach(ce=>ce.checked=!1),x.forEach(ce=>ce.classList.remove("selected","correct","incorrect")),C&&(C.classList.add("hidden"),C.classList.remove("correct-bg","incorrect-bg"),C.innerHTML="")});const L=document.getElementById("ppe-list");L&&(L.innerHTML="",Es.forEach(J=>{const ce=document.createElement("div");ce.className="ppe-item-btn",ce.id=`ppe-item-${J.id}`;const oe=document.createElement("input");oe.type="checkbox",oe.id=`ppe-cb-${J.id}`,oe.addEventListener("click",je=>{je.stopPropagation()}),oe.addEventListener("change",()=>{const je={...Be.getState().equippedPPE};je[J.id]=oe.checked,Be.update({equippedPPE:je})});const P=document.createElement("span");P.className="ppe-item-label",P.textContent=J.name,ce.appendChild(oe),ce.appendChild(P),ce.addEventListener("click",()=>{Be.update({selectedPPEId:J.id})}),L.appendChild(ce)}));const M=document.getElementById("ppe-detail-panel");let y=null;function I(J){if(!M)return;const ce=Es.find(Xe=>Xe.id===J.selectedPPEId);if(!ce||J.activeMode!=="PPE"){M.classList.add("hidden"),y&&y.stop();return}M.classList.remove("hidden");const oe=document.getElementById("ppe-detail-title"),P=document.getElementById("ppe-detail-desc"),je=document.getElementById("ppe-detail-funcs"),Pe=document.getElementById("ppe-detail-price");document.getElementById("ppe-detail-buy"),oe&&(oe.textContent=ce.name),P&&(P.textContent=ce.description),je&&(je.textContent=ce.functions),Pe&&(Pe.textContent=ce.priceRange),y||(y=new N0),y.setItem(ce.models),y.start()}const O=document.querySelectorAll(".tool-group .glass-btn");window.addEventListener("keydown",J=>{if(J.target instanceof HTMLInputElement){const ce=J.target.type.toLowerCase();if(["text","number","password","search","email","tel","url"].includes(ce))return}J.target instanceof HTMLTextAreaElement||(J.key.toLowerCase()==="f"?t?.classList.toggle("hidden"):J.key.toLowerCase()==="h"?n?.classList.toggle("hidden"):J.key==="1"?Be.update({activeTool:"wedge"}):J.key==="2"?Be.update({activeTool:"hand"}):J.key==="Escape"&&Be.update({activeTool:null}))}),i?.addEventListener("click",()=>{n?.classList.toggle("hidden")}),n?.addEventListener("click",J=>{J.target===n&&n.classList.add("hidden")}),o?.addEventListener("click",()=>{s?.classList.add("hidden")}),O.forEach(J=>{J.addEventListener("click",ce=>{const oe=ce.currentTarget.getAttribute("data-tool");Be.update({activeTool:oe})})}),document.querySelectorAll('input[type="checkbox"][id^="dbg-"]').forEach(J=>{const ce=J;ce.addEventListener("change",()=>{const oe=ce.id.replace("dbg-","");oe==="showPerfWarnings"?Be.update({showPerfWarnings:ce.checked}):Be.updateFeature(oe,ce.checked)})});const k=document.getElementById("dbg-gravity");k&&(k.value=Be.getState().simulation.gravity.toString()),k?.addEventListener("input",()=>{Be.updateSimulation("gravity",parseFloat(k.value))});const j=document.getElementById("dbg-binding");j&&(j.value=Be.getState().simulation.bindingThreshold.toString()),j?.addEventListener("input",()=>{Be.updateSimulation("bindingThreshold",parseFloat(j.value))});const V=document.getElementById("dbg-pressure-display"),Y=document.getElementById("tension-global"),F=document.getElementById("tension-log");Y?.addEventListener("change",()=>{Y.checked&&Be.updateFeature("globalTension",!0)}),F?.addEventListener("change",()=>{F.checked&&Be.updateFeature("globalTension",!1)}),Be.subscribe(J=>{const ce=document.getElementById("tension-mode-container");ce&&(ce.style.display=J.featureFlags.showTension?"flex":"none"),Y&&(Y.checked=J.featureFlags.globalTension),F&&(F.checked=!J.featureFlags.globalTension),k&&(k.value=J.simulation.gravity.toString()),j&&(j.value=J.simulation.bindingThreshold.toString()),V&&(V.textContent=`Current Pressure: ${J.simulation.currentPressure.toFixed(2)}`),a&&(a.checked=J.activeMode==="PPE"),c&&(c.checked=J.activeMode==="OHLEC"),l&&(l.checked=J.activeMode==="SIMULATOR"),h&&(h.checked=J.activeMode==="ASSESSMENT"),J.activeMode==="PPE"?(g?.classList.remove("hidden"),_?.classList.add("hidden"),m?.classList.add("hidden"),p?.classList.add("hidden"),v.forEach(P=>P.classList.add("hidden")),Es.forEach(P=>{const je=document.getElementById(`ppe-item-${P.id}`);je&&(J.selectedPPEId===P.id?je.classList.add("selected"):je.classList.remove("selected"));const Pe=document.getElementById(`ppe-cb-${P.id}`);Pe&&(Pe.checked=!!J.equippedPPE[P.id])}),I(J)):J.activeMode==="OHLEC"?(g?.classList.add("hidden"),M&&M.classList.add("hidden"),y&&y.stop(),_?.classList.remove("hidden"),m?.classList.add("hidden"),p?.classList.remove("hidden"),v.forEach(P=>P.classList.add("hidden"))):J.activeMode==="ASSESSMENT"?(g?.classList.add("hidden"),M&&M.classList.add("hidden"),y&&y.stop(),_?.classList.add("hidden"),m?.classList.remove("hidden"),p?.classList.remove("hidden"),v.forEach(P=>P.classList.add("hidden"))):(g?.classList.add("hidden"),M&&M.classList.add("hidden"),y&&y.stop(),_?.classList.add("hidden"),m?.classList.add("hidden"),p?.classList.add("hidden"),v.forEach(P=>{P.id!=="debug-panel"&&P.classList.remove("hidden")})),O.forEach(P=>{P.getAttribute("data-tool")===J.activeTool?P.classList.add("active"):P.classList.remove("active")}),r&&(J.throttleOn?(r.style.width="100%",r.style.backgroundColor="var(--status-green)",e&&(e.checked=!0)):(r.style.width="0%",r.style.backgroundColor="",e&&(e.checked=!1)));const oe=document.getElementById("kerf-fill");if(oe){const P=J.simulation.currentPressure,je=J.simulation.bindingThreshold,Pe=Math.max(0,Math.min(100,100*(1-P/je)));oe.style.width=`${Pe}%`,P<=50?oe.style.backgroundColor="var(--status-green)":P<200?oe.style.backgroundColor="var(--status-yellow)":oe.style.backgroundColor="var(--status-red)"}});let Q=!1;Be.subscribe(J=>{J.chainsawStuck&&!Q?s?.classList.remove("hidden"):!J.chainsawStuck&&Q&&s?.classList.add("hidden"),Q=J.chainsawStuck});const te=document.getElementById("modal-purchasing-prefs"),re=document.getElementById("btn-purchasing-prefs"),Se=document.getElementById("btn-save-prefs"),Ie=document.getElementById("btn-cancel-prefs"),W=document.getElementById("default-stores-list"),ne=document.getElementById("custom-stores-list"),pe=document.getElementById("btn-add-custom-store"),ae=document.getElementById("input-custom-store");let _e=null;function He(){!W||!ne||!_e||(W.innerHTML="",ne.innerHTML="",wa.forEach(J=>{const ce=document.createElement("label");ce.style.display="flex",ce.style.alignItems="center",ce.style.gap="0.5rem",ce.style.cursor="pointer";const oe=document.createElement("input");oe.type="checkbox",oe.checked=!!_e.defaults[J.id],oe.addEventListener("change",()=>{_e.defaults[J.id]=oe.checked}),ce.appendChild(oe),ce.appendChild(document.createTextNode(J.name)),W.appendChild(ce)}),_e.customs.forEach((J,ce)=>{const oe=document.createElement("div");oe.style.display="flex",oe.style.justifyContent="space-between",oe.style.alignItems="center";const P=document.createElement("span");P.textContent=J;const je=document.createElement("button");je.textContent="🗑️",je.className="glass-btn",je.style.padding="2px 6px",je.style.fontSize="0.8rem",je.title="Remove store",je.addEventListener("click",()=>{_e.customs.splice(ce,1),He()}),oe.appendChild(P),oe.appendChild(je),ne.appendChild(oe)}))}re?.addEventListener("click",()=>{_e=Ao(),He(),te?.classList.remove("hidden")}),pe?.addEventListener("click",()=>{if(ae&&ae.value.trim()!==""){let J=ae.value.trim().toLowerCase();J=J.replace(/^https?:\/\//,"").split("/")[0],_e&&!_e.customs.includes(J)&&(_e.customs.push(J),ae.value="",He())}}),Ie?.addEventListener("click",()=>{te?.classList.add("hidden")}),Se?.addEventListener("click",()=>{_e&&U0(_e),te?.classList.add("hidden")}),document.getElementById("ppe-detail-buy")?.addEventListener("click",J=>{J.preventDefault();const ce=Ao(),oe=[];if(wa.forEach(Pe=>{ce.defaults[Pe.id]&&oe.push(Pe.domain)}),oe.push(...ce.customs),oe.length===0){_e=Ao(),He(),te?.classList.remove("hidden");return}const P=Be.getState(),je=Es.find(Pe=>Pe.id===P.selectedPPEId);if(je){let Pe=`purchase ${je.name}`;if(oe.length>0){const be=oe.map(ht=>`site:${ht}`).join(" OR ");Pe+=` (${be})`}const Xe=`https://www.google.com/search?q=${encodeURIComponent(Pe)}`;window.open(Xe,"_blank","noopener,noreferrer")}})}const Cl={type:"change"},Qa={type:"start"},Dh={type:"end"},fr=new rs,Pl=new Yn,F0=Math.cos(70*Oa.DEG2RAD),Et=new T,Xt=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ro=1e-6;class O0 extends Eh{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new ot,this._lastTargetPosition=new T,this._quat=new ot().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qc,this._sphericalDelta=new Qc,this._scale=1,this._panOffset=new T,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new T,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k0.bind(this),this._onPointerDown=B0.bind(this),this._onPointerUp=z0.bind(this),this._onContextMenu=Y0.bind(this),this._onMouseWheel=V0.bind(this),this._onKeyDown=W0.bind(this),this._onTouchStart=X0.bind(this),this._onTouchMove=j0.bind(this),this._onMouseDown=H0.bind(this),this._onMouseMove=G0.bind(this),this._interceptControlDown=q0.bind(this),this._interceptControlUp=K0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cl),this.update(),this.state=ct.NONE}update(e=null){const t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),i<-Math.PI?i+=Xt:i>Math.PI&&(i-=Xt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Et.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fr.origin.copy(this.object.position),fr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fr.direction))<F0?this.object.lookAt(this.target):(Pl.setFromNormalAndCoplanarPoint(this.object.up,this.target),fr.intersectPlane(Pl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ro||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ro||this._lastTargetPosition.distanceToSquared(this.target)>Ro?(this.dispatchEvent(Cl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Et.copy(i).sub(this.target);let s=Et.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function B0(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function k0(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function z0(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dh),this.state=ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function H0(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ct.DOLLY;break;case Wi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ct.ROTATE}break;case Wi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Qa)}function G0(r){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function V0(r){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(r.preventDefault(),this.dispatchEvent(Qa),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Dh))}function W0(r){this.enabled!==!1&&this._handleKeyDown(r)}function X0(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ct.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ct.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Qa)}function j0(r){switch(this._trackPointer(r),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ct.NONE}}function Y0(r){this.enabled!==!1&&r.preventDefault()}function q0(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function K0(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Z0{scene;camera;renderer;controls;dirLight;constructor(e){const t=document.getElementById(e);if(!t)throw new Error(`Canvas with id ${e} not found.`);this.renderer=new Ch({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vl,this.scene=new za,this.scene.background=new Ne("#87CEEB"),this.camera=new Ft(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,2,4),this.controls=new O0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.target.set(0,.5,0),this.setupLighting(),window.addEventListener("resize",this.onWindowResize.bind(this))}setupLighting(){const e=new Sh(16777215,.6);this.scene.add(e),this.dirLight=new Nr(16777215,1.2),this.dirLight.position.set(10,20,10),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.1,this.dirLight.shadow.camera.far=50,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}update(){this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}}const $0=100,Q0=200;class J0{constructor(e){this.scene=e}groundMesh=null;hazardMeshes=[];clear(){if(this.groundMesh){if(this.scene.remove(this.groundMesh),this.groundMesh.geometry&&this.groundMesh.geometry.dispose(),this.groundMesh.material){const e=Array.isArray(this.groundMesh.material)?this.groundMesh.material:[this.groundMesh.material];for(const t of e)t.dispose()}this.groundMesh=null}for(const e of this.hazardMeshes)this.scene.remove(e);this.hazardMeshes=[]}generate(e){const t=e.logs;this.clear();const n=$0,i=Q0,s=new yi(n,n,i,i);s.rotateX(-Math.PI/2);let o=0;for(const p of t){const v=p.position[1]-p.diameter/2;v<o&&(o=v)}const a=Math.min(0,o-1),c=s.attributes.position.array,l=new Float32Array((i+1)*(i+1)),h=new Float32Array((i+1)*(i+1)),d=n/i;let u=0;for(let p=0;p<=i;p++){const v=-50+p*d,S=Math.sin(v*.1)*3+Math.sin(v*.03)*5;for(let x=0;x<=i;x++){const R=-50+x*d;let A=a;for(const I of t){if(!I.supports)continue;const O=I.position[0],B=I.position[2],k=I.diameter/2,j=I.rotation[1]*Math.PI/180,V=Math.cos(-j),Y=Math.sin(-j);for(const F of I.supports){if(F.type!=="mound")continue;const Q=R-O,te=v-B,re=Q*V-te*Y,Se=Q*Y+te*V,Ie=re-F.x,W=Se-F.z,ne=Math.exp(-(Ie*Ie)/(F.dx/2*(F.dx/2))),pe=F.y,ae=.15,_e=F.dz/2;let He=a;const Ae=Math.abs(W);if(Ae<k)He=pe+ae*(Ae/k)*(Ae/k);else{const ce=pe+ae,oe=Math.exp(-((Ae-k)*(Ae-k))/(_e*_e));He=a+(ce-a)*oe}const J=a+(He-a)*ne;J>A&&(A=J)}}l[u]=A,c[u*3+1]=A;const C=Math.abs(R-S),L=2,M=4;let y=0;C<L?y=1:C<L+M&&(y=1-(C-L)/M,y=y*y*(3-2*y)),h[u]=y,u++}}s.computeVertexNormals(),s.setAttribute("pathIntensity",new ft(h,1));const f=pn.getTexture("/assets/textures/brown_mud_leaves_01_diff_4k.jpg"),g=pn.getTexture("/assets/textures/brown_mud_02_diff_4k.jpg");f&&(f.wrapS=Ot,f.wrapT=Ot,f.repeat.set(20,20)),g&&(g.wrapS=Ot,g.wrapT=Ot,g.repeat.set(20,20));const _=new On({map:f||null,color:f?16777215:5592405,roughness:.9});g&&(_.customProgramCacheKey=()=>"terrain_path",_.onBeforeCompile=p=>{p.uniforms.pathMap={value:g},p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
          attribute float pathIntensity;
          varying float vPathIntensity;`),p.vertexShader=p.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
          vPathIntensity = pathIntensity;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
          uniform sampler2D pathMap;
          varying float vPathIntensity;
          
          // Simple 2D pseudo-random noise for breaking up textures
          float random(vec2 st) {
              return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
          }
          
          float noise(vec2 st) {
              vec2 i = floor(st);
              vec2 f = fract(st);
              float a = random(i);
              float b = random(i + vec2(1.0, 0.0));
              float c = random(i + vec2(0.0, 1.0));
              float d = random(i + vec2(1.0, 1.0));
              vec2 u = f * f * (3.0 - 2.0 * f);
              return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
          }`),p.fragmentShader=p.fragmentShader.replace("#include <map_fragment>",`
          #ifdef USE_MAP
            // Calculate a macro UV (independent of the 20x repeat)
            vec2 macroUv = vMapUv / 20.0; 
            
            // Break up the grid by sampling at two different scales/rotations
            // Second UV: rotated 45 degrees and scaled
            float sin45 = 0.7071;
            mat2 rot = mat2(sin45, -sin45, sin45, sin45);
            vec2 uv2 = rot * vMapUv * 0.6;
            
            vec4 baseColor1 = texture2D(map, vMapUv);
            vec4 baseColor2 = texture2D(map, uv2);
            
            // Blend using a macro noise map
            float n1 = noise(macroUv * 15.0); // Large noise pattern
            vec4 sampledDiffuseColor = mix(baseColor1, baseColor2, n1);
            
            // Do the same for the path texture
            vec4 pathColor1 = texture2D(pathMap, vMapUv);
            vec4 pathColor2 = texture2D(pathMap, uv2);
            vec4 pathColor = mix(pathColor1, pathColor2, n1);
            
            // Add a green tint to the non-trail area to look like vegetation
            vec4 vegetationTint = vec4(0.6, 1.0, 0.5, 1.0);
            vec4 tintedBaseColor = sampledDiffuseColor * vegetationTint;
            
            // Add noise to the path edge blending to make it natural
            float edgeNoise = noise(macroUv * 50.0) * 0.5 - 0.25;
            float noisyIntensity = clamp(vPathIntensity + edgeNoise, 0.0, 1.0);
            
            // Smooth the noisy intensity slightly
            noisyIntensity = smoothstep(0.1, 0.9, noisyIntensity);
            
            sampledDiffuseColor = mix(tintedBaseColor, pathColor, noisyIntensity);
            diffuseColor *= sampledDiffuseColor;
          #endif
          `)});const m=new $(s,_);if(m.receiveShadow=!0,this.scene.add(m),this.groundMesh=m,e.ohlec?.hazards)for(const p of e.ohlec.hazards){let v;if(p.model){const S=p.model.toUpperCase();v=Kt.MODELS[S]}if(v){const S=pn.getModel(v);if(S){const x=S.scene.clone();x.position.set(p.position[0],p.position[1],p.position[2]),p.rotation&&x.rotation.set(p.rotation[0]*Math.PI/180,p.rotation[1]*Math.PI/180,p.rotation[2]*Math.PI/180),x.traverse(R=>{R.userData.hazardDef=p,R.userData.hazardRoot=x}),this.scene.add(x),this.hazardMeshes.push(x)}else console.warn(`[Environment] Hazard model not found for URL: ${v}`)}}return{heightmap:l,size:n,segments:i}}getGroundMesh(){return this.groundMesh}getHazardMeshes(){return this.hazardMeshes}}const pr=1e-4,Il=.95;class ex{entities=new Map;scene;defaultLogMaterials=null;globalSprings=null;activeSprings=null;globalSpringsMesh=null;constructor(e){this.scene=e}add(e){if(this.entities.has(e.id)){console.warn(`Entity with ID ${e.id} already exists.`);return}if(e.mesh instanceof $){const t=new Dr({color:16711680,size:.03,depthTest:!1,transparent:!0}),n=new va(e.mesh.geometry,t);n.visible=!1,e.mesh.add(n),e.points=n;const i=new At({color:65280,wireframe:!0,depthTest:!1,transparent:!0}),s=new $(e.mesh.geometry,i);s.visible=!1,e.mesh.add(s),e.wireframe=s}this.entities.set(e.id,e),this.scene.add(e.mesh)}remove(e){const t=this.entities.get(e);if(t){if(this.scene.remove(t.mesh),t.mesh instanceof $&&(t.mesh.geometry&&t.mesh.geometry.dispose(),t.mesh.material)){const n=Array.isArray(t.mesh.material)?t.mesh.material:[t.mesh.material];for(const i of n)i.dispose()}if(t.wireframe&&(this.scene.remove(t.wireframe),t.wireframe.geometry&&t.wireframe.geometry.dispose(),t.wireframe.material)){const n=Array.isArray(t.wireframe.material)?t.wireframe.material:[t.wireframe.material];for(const i of n)i.dispose()}if(t.points&&(this.scene.remove(t.points),t.points.geometry&&t.points.geometry.dispose(),t.points.material)){const n=Array.isArray(t.points.material)?t.points.material:[t.points.material];for(const i of n)i.dispose()}this.entities.delete(e)}}clearLogs(){for(const[e,t]of this.entities.entries())t.type==="log"&&this.remove(e)}get(e){return this.entities.get(e)}getAll(){return Array.from(this.entities.values())}getDefaultLogMaterials(){if(this.defaultLogMaterials)return this.defaultLogMaterials;const e=pn.getTexture("/assets/textures/bark_willow_02_diff_4k.jpg");e&&(e.wrapS=Ot,e.wrapT=Ot,e.repeat.set(1,4));const t=pn.getTexture("/assets/textures/endcap.jpg"),n=new On({map:e||null,color:e?16777215:9132587,roughness:.8,side:It}),i=new On({map:t||null,color:t?16777215:13808780,roughness:.9,side:It});return this.defaultLogMaterials=[n,i,i],this.defaultLogMaterials}syncTopology(e,t=[],n,i){if(n&&(this.globalSprings=n,!this.globalSpringsMesh)){const s=new Ns({color:65280,depthTest:!1,transparent:!0,opacity:.5}),o=new _t;this.globalSpringsMesh=new mh(o,s),this.scene.add(this.globalSpringsMesh)}for(let s=0;s<e.length;s++){const o=`log-${s}`;if(this.entities.has(o)){const a=this.entities.get(o);a&&(a.segments=e[s])}else{const a=new $(new _t,this.getDefaultLogMaterials());a.castShadow=!0,a.receiveShadow=!0,this.add({id:o,type:"log",mesh:a,segments:e[s]})}this.rebuildMesh(o,[e[s]],t,s,i)}for(const s of this.getAll())s.type==="log"&&parseInt(s.id.split("-")[1])>=e.length&&this.remove(s.id)}rebuildMesh(e,t,n=[],i=0,s){const o=this.entities.get(e);if(!o||!(o.mesh instanceof $))return;const a=new _t,c=[],l=[],h=[],d=[],u=[],f=[],g=[];let _=0;const m=(M,y,I)=>(s&&M*3+2<s.length?c.push(s[M*3],s[M*3+1],s[M*3+2]):c.push(0,0,0),l.push(y,I),g[M]||(g[M]=[]),g[M].push(_),_++,_-1);t.forEach(M=>{const y=M.length;if(y<2)return;const I=M[0].shellIndices.length,O=[];for(let Y=0;Y<y;Y++){O[Y]=[];const F=M[Y],Q=F.originalV;for(let te=0;te<=I;te++){const re=te/I,Se=F.shellIndices[te%I];O[Y].push(m(Se,re,Q))}}for(let Y=0;Y<y-1;Y++)for(let F=0;F<I;F++){const Q=O[Y][F],te=O[Y+1][F],re=O[Y+1][F+1],Se=O[Y][F+1];h.push(Q,te,re),h.push(Q,re,Se)}const B=(Y,F,Q=!1)=>{const te=[],re=m(Y.pithIdx,.5,.5),Se=[];for(let Ie=0;Ie<I;Ie++){const W=Ie/I*Math.PI*2,ne=.5+Math.sin(W)*.5,pe=.5+Math.cos(W)*.5;Se.push(m(Y.shellIndices[Ie],ne,pe))}for(let Ie=0;Ie<I;Ie++){const W=re,ne=Se[Ie],pe=Se[(Ie+1)%I];F?te.push(W,pe,ne):te.push(W,ne,pe)}return Q||(F?d.push(...te):u.push(...te)),te},k=M[y-1],j=n.findIndex(Y=>Y.leftRing.pithIdx===k.pithIdx),V=n[j];if(B(M[0],!0,!1),!V)B(k,!1,!1);else{const Y=B(V.leftRing,!1,!0),F=[];for(let re=0;re<=I;re++){const Se=re/I,Ie=V.rightRing.shellIndices[re%I];F.push(m(Ie,Se,V.rightRing.originalV))}const Q=[],te=[];for(let re=0;re<I;re++){const Se=O[y-1][re],Ie=F[re],W=F[re+1],ne=O[y-1][re+1];Q.push([Se,Ie,W,Se,W,ne]),te.push([Y[re*3],Y[re*3+1],Y[re*3+2]])}f.push({springIndices:V.springIndices,longitudinalSpringIndices:V.longitudinalSpringIndices,bridgeIndices:Q,endcapIndices:te,globalKerfIndex:j})}}),a.setAttribute("position",new ft(new Float32Array(c),3)),a.setAttribute("uv",new ft(new Float32Array(l),2));let p=h.length+d.length+u.length;for(const M of f){for(const y of M.bridgeIndices)p+=y.length;for(const y of M.endcapIndices)p+=y.length}const v=new Uint32Array(p);a.setIndex(new ft(v,1)),o.vertexMap=g;const S=new Set;if(n&&n.length>0)for(const M of n)M.leftRing&&(S.add(M.leftRing.pithIdx),M.leftRing.shellIndices.forEach(y=>S.add(y))),M.rightRing&&(S.add(M.rightRing.pithIdx),M.rightRing.shellIndices.forEach(y=>S.add(y)));if(o.endcapNodeIndices=S,f.length>0){o.dynamicIndices={buffer:v,staticIndices:{bark:h,top:d,bottom:u},kerfs:f};let M=0;v.set(h,M),M+=h.length;for(const B of f)for(const k of B.bridgeIndices)v.set(k,M),M+=k.length;const y=M;v.set(d,M),M+=d.length;const I=M;v.set(u,M),M+=u.length;const O=M;a.setDrawRange(0,O),a.addGroup(0,y,0),a.addGroup(y,I-y,1),a.addGroup(I,O-I,2)}else{o.dynamicIndices=void 0;const M=[...h,...d,...u];a.setIndex(M),a.addGroup(0,h.length,0),a.addGroup(h.length,d.length,1),a.addGroup(h.length+d.length,u.length,2)}let x=o.mesh.material;Array.isArray(x)&&x.length>=3?x.forEach(M=>M.side=It):x=this.getDefaultLogMaterials(),o.mesh.geometry&&o.mesh.geometry.dispose(),o.mesh.geometry=a,o.mesh.material=x;let R=!1,A=!1;o.wireframe&&(R=o.wireframe.visible,this.scene.remove(o.wireframe),o.wireframe.geometry.dispose(),o.wireframe.material.dispose()),o.points&&(A=o.points.visible,this.scene.remove(o.points),o.points.geometry.dispose(),o.points.material.dispose());const C=new At({color:16755200,wireframe:!0}),L=new Dr({color:16711680,size:.1});o.wireframe=new $(a,C),o.points=new va(a,L),o.wireframe.visible=R,o.points.visible=A,this.scene.add(o.wireframe),this.scene.add(o.points),console.log(`[EntityManager] Mesh rebuilt: ${a.attributes.position.count} vertices.`)}syncPositions(e,t,n,i,s=!1){const o=this.entities.get(e);if(!o||!o.vertexMap||!(o.mesh instanceof $))return;const a=o.mesh.geometry;if(o.dynamicIndices&&i){const u=o.dynamicIndices;let f=0;u.buffer.set(u.staticIndices.bark,f),f+=u.staticIndices.bark.length;for(const v of u.kerfs){const S=i[v.globalKerfIndex];if(S)if(v.longitudinalSpringIndices&&v.longitudinalSpringIndices.length===v.bridgeIndices.length)for(let x=0;x<v.bridgeIndices.length;x++){const R=v.longitudinalSpringIndices[x];!S[R]&&v.bridgeIndices[x]&&(u.buffer.set(v.bridgeIndices[x],f),f+=v.bridgeIndices[x].length)}else for(let x=0;x<v.springIndices.length;x++)!S[x]&&v.bridgeIndices[x]&&(u.buffer.set(v.bridgeIndices[x],f),f+=v.bridgeIndices[x].length)}const g=f;u.buffer.set(u.staticIndices.top,f),f+=u.staticIndices.top.length;const _=f;u.buffer.set(u.staticIndices.bottom,f),f+=u.staticIndices.bottom.length;for(const v of u.kerfs){const S=i[v.globalKerfIndex];if(S)if(v.longitudinalSpringIndices&&v.longitudinalSpringIndices.length===v.endcapIndices.length)for(let x=0;x<v.endcapIndices.length;x++){const R=v.longitudinalSpringIndices[x];S[R]&&v.endcapIndices[x]&&(u.buffer.set(v.endcapIndices[x],f),f+=v.endcapIndices[x].length)}else for(let x=0;x<v.springIndices.length;x++)S[x]&&v.endcapIndices[x]&&(u.buffer.set(v.endcapIndices[x],f),f+=v.endcapIndices[x].length)}const m=f,p=`${g}_${_}_${m}`;a.userData.lastIndexHash!==p&&(a.userData.lastIndexHash=p,a.setDrawRange(0,m),a.clearGroups(),a.addGroup(0,g,0),a.addGroup(g,_-g,1),a.addGroup(_,m-_,2),a.index.needsUpdate=!0)}const c=a.attributes.position;let l=a.attributes.color;n&&!l&&(l=new ft(new Float32Array(c.count*3),3),a.setAttribute("color",l));let h=pr,d=pr;if(n){const u=[],f=[];for(let g=0;g<n.length;g++){if(!s&&!o.vertexMap[g]||o.endcapNodeIndices&&o.endcapNodeIndices.has(g))continue;const _=n[g];_>0?u.push(_):_<0&&f.push(-_)}if(u.length>0){u.sort((_,m)=>_-m);const g=Math.min(Math.floor(u.length*Il),u.length-1);h=Math.max(u[g],pr)}if(f.length>0){f.sort((_,m)=>_-m);const g=Math.min(Math.floor(f.length*Il),f.length-1);d=Math.max(f[g],pr)}}for(let u=0;u<t.length/3;u++){const f=t[u*3],g=t[u*3+1],_=t[u*3+2];let m=1,p=1,v=1;if(n){const x=n[u];if(x<0){const R=Math.min(-x/d,1);p=1-R,v=1-R}else if(x>0){const R=Math.min(x/h,1);m=1-R,p=1-R}}const S=o.vertexMap[u];if(S)for(const x of S)c.setXYZ(x,f,g,_),l&&l.setXYZ(x,m,p,v)}if(c.needsUpdate=!0,l&&(l.needsUpdate=!0),a.computeVertexNormals(),a.computeBoundingSphere(),a.computeBoundingBox(),e==="log-0"&&this.globalSprings&&this.globalSpringsMesh){const u=this.globalSpringsMesh.geometry;if(!u.attributes.position||u.attributes.position.array.length!==t.length)u.setAttribute("position",new ft(t,3)),this.activeSprings=new Uint32Array(this.globalSprings.buffer).slice(),u.setIndex(new ft(this.activeSprings,1));else{const f=u.attributes.position;f.array.set(t),f.needsUpdate=!0}if(this.activeSprings&&i){let f=!1;for(const g of this.getAll())if(g.type==="log"&&g.dynamicIndices)for(const _ of g.dynamicIndices.kerfs){const m=i[_.globalKerfIndex];if(m)for(let p=0;p<_.springIndices.length;p++){const v=_.springIndices[p];m[p]&&(this.activeSprings[v*2]!==0||this.activeSprings[v*2+1]!==0)&&(this.activeSprings[v*2]=0,this.activeSprings[v*2+1]=0,f=!0)}}f&&(u.index.needsUpdate=!0)}}}}const tx=200;class Ll{constructor(e,t,n,i){this.onSync=e,this.onTopology=t,this.environment=n,this.onLoadStart=i,this.worker=new Worker(new URL("/assets/physics.worker-CzUZKELz.js",import.meta.url),{type:"module"}),this.worker.onmessage=s=>{const o=s.data;if(o.type==="SYNC"){if(o.bindingPressure!==void 0){Be.updateSimulation("currentPressure",o.bindingPressure);const a=Be.getState(),c=performance.now();o.bindingPressure>a.simulation.bindingThreshold&&!a.chainsawStuck&&c-a.lastResetTime>tx&&Be.update({chainsawStuck:!0})}this.lastPositions=o.positions,this.onSync(o.positions,o.strains,o.brokenKerfSprings)}else if(o.type==="TOPOLOGY")this.onTopology(o.segments,o.kerfs,o.springs,this.lastPositions);else if(o.type==="RESIZE_BUFFERS"){const a=s.data;console.log(`[ScenarioManager] RESIZE_BUFFERS received: ${a.nodeCount} nodes. Visual rebuild will happen in Phase 5C.`)}}}worker;currentScenario=null;lastPositions=void 0;async loadScenario(e){this.currentScenario=e;try{const n=await(await fetch(`${e}?t=${Date.now()}`)).json();this.loadScenarioObj(n)}catch(t){console.error("Failed to load scenario:",t)}}loadScenarioObj(e){if(!e.logs||e.logs.length===0){console.warn("Scenario contains no logs");return}this.onLoadStart&&this.onLoadStart(e);const t=this.environment.generate(e),n={type:"INIT",logs:e.logs,terrain:t};this.worker.postMessage(n),this.setGravity(Be.getState().simulation.gravity);const i=document.getElementById("scenario-name");i&&(i.textContent=`Scenario: ${e.name||"Custom"}`)}setTelemetry(e){this.worker.postMessage({type:"SET_TELEMETRY",showPerfWarnings:e})}setGravity(e){this.worker.postMessage({type:"SET_GRAVITY",gravity:e})}setShowTension(e){this.worker.postMessage({type:"SET_SHOW_TENSION",showTension:e})}sendCutEvent(e,t){this.worker.postMessage({type:"INITIATE_CUT",planePoint:[e.x,e.y,e.z],planeNormal:[t.x,t.y,t.z]})}setHandForce(e,t,n,i){this.worker.postMessage({type:"SET_HAND_FORCE",active:e,point:t?[t.x,t.y,t.z]:void 0,direction:n?[n.x,n.y,n.z]:void 0,magnitude:i})}sendCutProgress(e,t,n){this.worker.postMessage({type:"CUT_PROGRESS",boxPosition:[e.x,e.y,e.z],boxQuaternion:[t.x,t.y,t.z,t.w],boxScale:[n.x,n.y,n.z]})}sendGuidebarState(e,t,n,i){this.worker.postMessage({type:"SET_GUIDEBAR",active:e,boxPosition:t?[t.x,t.y,t.z]:void 0,boxQuaternion:n?[n.x,n.y,n.z,n.w]:void 0,boxScale:i?[i.x,i.y,i.z]:void 0})}terminate(){this.worker.terminate()}}const Xn=new T(.2,.8,6.5),nx=new T(.75,0,-5),ix=new rn(.1,0,0),sx=0;class rx{constructor(e,t,n){this.entities=e,this.onInitiateCut=t,this.onCutProgress=n,this.initChainsaw()}chainsawMesh=null;mixer=null;throttleOn=!1;isCutting=!1;guidebarBox=null;kerfBoxMesh=null;cutStartPos=null;cutStartQuat=null;showKerfBoxDebug=!1;getGuidebarTransform(){if(!this.guidebarBox||this.chainsawMesh?.visible===!1)return null;const e=new T,t=new ot,n=new T;this.guidebarBox.getWorldPosition(e),this.guidebarBox.getWorldQuaternion(t);const i=this.guidebarBox.getWorldScale(new T);return n.copy(Xn).multiply(i),{pos:e,quat:t,scale:n}}initChainsaw(){const e=pn.getModel("/assets/models/chainsaw-v1.glb");if(!e){console.warn("Chainsaw model not found.");return}this.chainsawMesh=e.scene,this.chainsawMesh.scale.set(.2,.2,.2),this.chainsawMesh.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),this.resetPosition();const t=new gt(Xn.x,Xn.y,Xn.z),n=new At({color:16753920,wireframe:!0,depthTest:!1});this.guidebarBox=new $(t,n),this.guidebarBox.position.copy(nx),this.guidebarBox.setRotationFromEuler(ix),this.guidebarBox.visible=!1,this.chainsawMesh.add(this.guidebarBox),this.entities.add({id:"tool-chainsaw",type:"tool",mesh:this.chainsawMesh});const i=new gt(1,1,1),s=new At({color:16711935,wireframe:!0,depthTest:!1});this.kerfBoxMesh=new $(i,s),this.kerfBoxMesh.visible=!1,this.entities.add({id:"tool-kerfbox",type:"tool",mesh:this.kerfBoxMesh}),e.animations&&e.animations.length>0&&(this.mixer=new hf(this.chainsawMesh),this.mixer.clipAction(e.animations[0]).play())}tick(e){if(this.throttleOn&&this.mixer&&this.mixer.update(e),this.kerfBoxMesh&&(this.kerfBoxMesh.visible=this.showKerfBoxDebug),this.chainsawMesh&&this.guidebarBox){if(this.kerfBoxMesh&&!this.isCutting){this.kerfBoxMesh.position.copy(this.guidebarBox.getWorldPosition(new T)),this.kerfBoxMesh.quaternion.copy(this.guidebarBox.getWorldQuaternion(new ot));const n=this.guidebarBox.getWorldScale(new T);this.kerfBoxMesh.scale.copy(Xn.clone().multiply(n))}const t=this.getClosestLogInfo();if(t){const n=new T;this.guidebarBox.getWorldPosition(n);const i=new $t().setFromObject(this.guidebarBox),o=t.boundingBox.clone().expandByScalar(sx).intersectsBox(i);if(o&&!this.isCutting&&this.throttleOn){const a=new ot;this.guidebarBox.getWorldQuaternion(a);const c=new T(1,0,0).applyQuaternion(a).normalize();let l=new T(1,0,0);if(t.entity&&t.entity.segments&&t.entity.segments.length>=2&&t.entity.vertexMap){const d=t.entity.segments[0],u=t.entity.segments[t.entity.segments.length-1],f=t.entity.mesh.geometry.getAttribute("position"),g=t.entity.vertexMap[d.pithIdx]?.[0],_=t.entity.vertexMap[u.pithIdx]?.[0];if(g!==void 0&&_!==void 0){const m=new T().fromBufferAttribute(f,g),p=new T().fromBufferAttribute(f,_);l.subVectors(p,m).normalize()}}let h=c.angleTo(l)*Oa.RAD2DEG;h>90&&(h=180-h),h<=35?(console.log(`[ToolSystem] Valid cross-cut initiated at angle ${h.toFixed(1)}°`),this.onInitiateCut&&this.onInitiateCut(n.clone(),c),this.isCutting=!0):(console.warn(`[ToolSystem] INVALID CUT REJECTED: Angle ${h.toFixed(1)}° exceeds 35° cross-cut limit (Rip cuts not supported).`),this.isCutting=!0),this.guidebarBox&&(this.cutStartPos||(this.cutStartPos=new T),this.cutStartQuat||(this.cutStartQuat=new ot),this.guidebarBox.getWorldPosition(this.cutStartPos),this.guidebarBox.getWorldQuaternion(this.cutStartQuat))}else if(o&&this.isCutting&&this.throttleOn){if(this.cutStartPos&&this.cutStartQuat&&this.kerfBoxMesh){const a=new T;this.guidebarBox.getWorldPosition(a);const c=new T().subVectors(a,this.cutStartPos),l=this.cutStartQuat.clone().invert(),h=c.clone().applyQuaternion(l),d=this.guidebarBox.getWorldScale(new T),u=Xn.clone().multiply(d),f=new T(u.x,u.y+Math.abs(h.y),u.z),_=new T(h.x,h.y/2,h.z).clone().applyQuaternion(this.cutStartQuat).add(this.cutStartPos);this.kerfBoxMesh.position.copy(_),this.kerfBoxMesh.scale.copy(f),this.kerfBoxMesh.quaternion.copy(this.guidebarBox.getWorldQuaternion(new ot)),this.onCutProgress&&this.onCutProgress(_,this.cutStartQuat,f)}}else if(!o&&this.isCutting){if(this.cutStartPos&&this.cutStartQuat&&this.kerfBoxMesh){const a=new T;this.guidebarBox.getWorldPosition(a);const c=new T().subVectors(a,this.cutStartPos),l=this.cutStartQuat.clone().invert(),h=c.clone().applyQuaternion(l),d=this.guidebarBox.getWorldScale(new T),u=Xn.clone().multiply(d),f=new T(u.x,u.y+Math.abs(h.y),u.z),_=new T(h.x,h.y/2,h.z).clone().applyQuaternion(this.cutStartQuat).add(this.cutStartPos);this.onCutProgress&&this.onCutProgress(_,this.cutStartQuat,f)}this.isCutting=!1}}}}setThrottle(e){if(this.throttleOn=e,Be.update({throttleOn:e}),e){if(this.chainsawMesh&&this.guidebarBox&&this.kerfBoxMesh){this.chainsawMesh.updateMatrixWorld(!0),this.kerfBoxMesh.position.copy(this.guidebarBox.getWorldPosition(new T)),this.kerfBoxMesh.quaternion.copy(this.guidebarBox.getWorldQuaternion(new ot));const t=this.guidebarBox.getWorldScale(new T),n=Xn.clone().multiply(t);this.kerfBoxMesh.scale.copy(n),this.kerfBoxMesh.visible=this.showKerfBoxDebug,this.cutStartPos=this.kerfBoxMesh.position.clone(),this.cutStartQuat=this.kerfBoxMesh.quaternion.clone(),console.log(`[ToolSystem] setThrottle(true) - KERF BOX CAPTURED:
           Pos: (${this.kerfBoxMesh.position.x.toFixed(3)}, ${this.kerfBoxMesh.position.y.toFixed(3)}, ${this.kerfBoxMesh.position.z.toFixed(3)})
           Scale: (${this.kerfBoxMesh.scale.x.toFixed(3)}, ${this.kerfBoxMesh.scale.y.toFixed(3)}, ${this.kerfBoxMesh.scale.z.toFixed(3)})
           Visible: ${this.kerfBoxMesh.visible} (debug flag: ${this.showKerfBoxDebug})
         `)}}else this.isCutting=!1,this.cutStartPos=null,this.cutStartQuat=null}resetPosition(){this.chainsawMesh&&(this.chainsawMesh.position.set(0,5,2),this.chainsawMesh.rotation.set(0,0,0),this.chainsawMesh.updateMatrixWorld(!0))}resetToScenario(e){if(this.setThrottle(!1),this.isCutting=!1,this.cutStartPos=null,this.cutStartQuat=null,this.chainsawMesh){if(e&&e.position?this.chainsawMesh.position.set(e.position.x,e.position.y,e.position.z):this.chainsawMesh.position.set(0,5,2),e&&e.rotation){const t=(e.rotation.x||0)*Math.PI/180,n=(e.rotation.y||0)*Math.PI/180,i=(e.rotation.z||0)*Math.PI/180;this.chainsawMesh.rotation.set(t,n,i)}else this.chainsawMesh.rotation.set(0,0,0);this.chainsawMesh.updateMatrixWorld(!0)}}quickFlip(){this.chainsawMesh&&(this.chainsawMesh.rotateY(Math.PI),this.chainsawMesh.updateMatrixWorld(!0))}getClosestLogInfo(){if(!this.chainsawMesh||!this.guidebarBox)return null;let e=1/0,t=null;const n=new T;this.guidebarBox.getWorldPosition(n);const i=new $t().setFromObject(this.guidebarBox);for(const s of this.entities.getAll())if(s.type==="log"&&s.mesh instanceof $){const o=s.mesh.geometry;if(o.computeBoundingBox(),!o.boundingBox)continue;const a=new T;o.boundingBox.getCenter(a);const c=new $t().setFromObject(s.mesh),l=c.intersectsBox(i),h=c.distanceToPoint(n),d=l?h*.001+a.distanceTo(n)*1e-4:h+1e3+a.distanceTo(n)*1e-4;d<e&&(e=d,t={center:a,max:c.max,min:c.min,boundingBox:c,entity:s})}return t}snapTop(){if(this.chainsawMesh){const e=this.getClosestLogInfo();e&&(this.chainsawMesh.position.set(e.center.x,e.max.y+.6,e.center.z),this.chainsawMesh.rotation.z=0,this.chainsawMesh.rotation.x=0,this.chainsawMesh.updateMatrixWorld(!0))}}snapBottom(){if(this.chainsawMesh){const e=this.getClosestLogInfo();e&&(this.chainsawMesh.position.set(e.center.x,e.min.y-.6,e.center.z),this.chainsawMesh.rotation.z=0,this.chainsawMesh.rotation.x=0,this.chainsawMesh.updateMatrixWorld(!0))}}snapToCut(e){if(!this.chainsawMesh)return;const t=this.entities.getAll().find(h=>h.mesh===e.object);if(!t||t.type!=="log")return;const n=t.mesh.geometry;if(n.computeBoundingBox(),!n.boundingBox)return;const i=new T;n.boundingBox.getCenter(i);const o=e.point.y>i.y?n.boundingBox.max.y+.1:n.boundingBox.min.y-.1,a=new T(e.point.x,o,e.point.z);let c=new T(1,0,0);if(t.segments&&t.segments.length>=2&&t.vertexMap){const h=t.segments[0],d=t.segments[t.segments.length-1],u=n.getAttribute("position"),f=t.vertexMap[h.pithIdx]?.[0],g=t.vertexMap[d.pithIdx]?.[0];if(f!==void 0&&g!==void 0){const _=new T().fromBufferAttribute(u,f),m=new T().fromBufferAttribute(u,g);c.subVectors(m,_).normalize()}}const l=c.clone().setY(0).normalize();if(l.lengthSq()<.001&&l.set(1,0,0),this.chainsawMesh.rotation.set(0,0,0),this.chainsawMesh.quaternion.setFromUnitVectors(new T(1,0,0),l),this.chainsawMesh.position.set(0,0,0),this.chainsawMesh.updateMatrixWorld(!0),this.guidebarBox){const h=new T;this.guidebarBox.getWorldPosition(h),this.chainsawMesh.position.copy(a).sub(h)}else this.chainsawMesh.position.copy(a);this.chainsawMesh.updateMatrixWorld(!0)}}const hi=new Br,Nt=new T,jn=new T,mt=new ot,Dl={X:new T(1,0,0),Y:new T(0,1,0),Z:new T(0,0,1)},Co={type:"change"},Ul={type:"mouseDown",mode:null},Nl={type:"mouseUp",mode:null},Fl={type:"objectChange"};class Uh extends Eh{constructor(e,t=null){super(void 0,t);const n=new dx(this);this._root=n;const i=new ux;this._gizmo=i,n.add(i);const s=new fx;this._plane=s,n.add(s);const o=this;function a(S,x){let R=x;Object.defineProperty(o,S,{get:function(){return R!==void 0?R:x},set:function(A){R!==A&&(R=A,s[S]=A,i[S]=A,o.dispatchEvent({type:S+"-changed",value:A}),o.dispatchEvent(Co))}}),o[S]=x,s[S]=x,i[S]=x}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new T,l=new T,h=new ot,d=new ot,u=new T,f=new ot,g=new T,_=new T,m=new T,p=0,v=new T;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",h),a("worldQuaternionStart",d),a("cameraPosition",u),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",_),a("rotationAxis",m),a("rotationAngle",p),a("eye",v),this._offset=new T,this._startNorm=new T,this._endNorm=new T,this._cameraScale=new T,this._parentPosition=new T,this._parentQuaternion=new ot,this._parentQuaternionInv=new ot,this._parentScale=new T,this._worldScaleStart=new T,this._worldQuaternionInv=new ot,this._worldScale=new T,this._positionStart=new T,this._quaternionStart=new ot,this._scaleStart=new T,this._getPointer=ox.bind(this),this._onPointerDown=cx.bind(this),this._onPointerHover=ax.bind(this),this._onPointerMove=lx.bind(this),this._onPointerUp=hx.bind(this),t!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&hi.setFromCamera(e,this.camera);const t=Po(this._gizmo.picker[this.mode],hi);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&hi.setFromCamera(e,this.camera);const t=Po(this._plane,hi,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Ul.mode=this.mode,this.dispatchEvent(Ul)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&hi.setFromCamera(e,this.camera);const o=Po(this._plane,hi,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(mt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(Nt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Nt.setFromMatrixPosition(i.parent.matrixWorld)))),i.position.x=Math.max(this.minX,Math.min(this.maxX,i.position.x)),i.position.y=Math.max(this.minY,Math.min(this.maxY,i.position.y)),i.position.z=Math.max(this.minZ,Math.min(this.maxZ,i.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),jn.set(a,a,a)}else Nt.copy(this.pointStart),jn.copy(this.pointEnd),Nt.applyQuaternion(this._worldQuaternionInv),jn.applyQuaternion(this._worldQuaternionInv),jn.divide(Nt),t.search("X")===-1&&(jn.x=1),t.search("Y")===-1&&(jn.y=1),t.search("Z")===-1&&(jn.z=1);i.scale.copy(this._scaleStart).multiply(jn),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Nt.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Nt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Dl[t]),Nt.copy(Dl[t]),s==="local"&&Nt.applyQuaternion(this.worldQuaternion),Nt.cross(this.eye),Nt.length()===0?c=!0:this.rotationAngle=this._offset.dot(Nt.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(mt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(mt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Co),this.dispatchEvent(Fl)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Nl.mode=this.mode,this.dispatchEvent(Nl)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Co),this.dispatchEvent(Fl),this.pointStart.copy(this.pointEnd))}getRaycaster(){return hi}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function ox(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function ax(r){if(this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function cx(r){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function lx(r){this.enabled&&this.pointerMove(this._getPointer(r))}function hx(r){this.enabled&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function Po(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const mr=new rn,dt=new T(0,1,0),Ol=new T(0,0,0),Bl=new Oe,gr=new ot,Tr=new ot,_n=new T,kl=new Oe,bs=new T(1,0,0),pi=new T(0,1,0),Ts=new T(0,0,1),_r=new T,vs=new T,ys=new T;class dx extends lt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class ux extends lt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new At({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Ns({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const d=e.clone();d.opacity=.25;const u=e.clone();u.color.setHex(16776960),u.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const _=new Pt(0,.04,.1,12);_.translate(0,.05,0);const m=new gt(.08,.08,.08);m.translate(0,.04,0);const p=new _t;p.setAttribute("position",new it([0,0,0,1,0,0],3));const v=new Pt(.0075,.0075,.5,3);v.translate(0,.25,0);function S(j,V){const Y=new gi(j,.0075,3,64,V*Math.PI*2);return Y.rotateY(Math.PI/2),Y.rotateX(Math.PI/2),Y}function x(){const j=new _t;return j.setAttribute("position",new it([0,0,0,1,1,1],3)),j}const R={X:[[new $(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new $(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new $(v,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new $(_,o),[0,.5,0]],[new $(_,o),[0,-.5,0],[Math.PI,0,0]],[new $(v,o)]],Z:[[new $(_,a),[0,0,.5],[Math.PI/2,0,0]],[new $(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new $(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new $(new Gi(.1,0),d.clone()),[0,0,0]]],XY:[[new $(new gt(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new $(new gt(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new $(new gt(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new $(new Pt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new $(new Pt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new $(new Pt(.2,0,.6,4),n),[0,.3,0]],[new $(new Pt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new $(new Pt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new $(new Pt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new $(new Gi(.2,0),n)]],XY:[[new $(new gt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new $(new gt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new $(new gt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},C={START:[[new $(new Gi(.01,2),i),null,null,null,"helper"]],END:[[new $(new Gi(.01,2),i),null,null,null,"helper"]],DELTA:[[new nn(x(),i),null,null,null,"helper"]],X:[[new nn(p,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new nn(p,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new nn(p,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new $(S(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new $(S(.5,.5),s)]],Y:[[new $(S(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new $(S(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new $(S(.75,1),u),null,[0,Math.PI/2,0]]]},M={AXIS:[[new nn(p,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},y={XYZE:[[new $(new ja(.25,10,8),n)]],X:[[new $(new gi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new $(new gi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new $(new gi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new $(new gi(.75,.1,2,24),n)]]},I={X:[[new $(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new $(v,s),[0,0,0],[0,0,-Math.PI/2]],[new $(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new $(m,o),[0,.5,0]],[new $(v,o)],[new $(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new $(m,a),[0,0,.5],[Math.PI/2,0,0]],[new $(v,a),[0,0,0],[Math.PI/2,0,0]],[new $(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new $(new gt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new $(new gt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new $(new gt(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new $(new gt(.1,.1,.1),d.clone())]]},O={X:[[new $(new Pt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new $(new Pt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new $(new Pt(.2,0,.6,4),n),[0,.3,0]],[new $(new Pt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new $(new Pt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new $(new Pt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new $(new gt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new $(new gt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new $(new gt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new $(new gt(.2,.2,.2),n),[0,0,0]]]},B={X:[[new nn(p,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new nn(p,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new nn(p,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function k(j){const V=new lt;for(const Y in j)for(let F=j[Y].length;F--;){const Q=j[Y][F][0].clone(),te=j[Y][F][1],re=j[Y][F][2],Se=j[Y][F][3],Ie=j[Y][F][4];Q.name=Y,Q.tag=Ie,te&&Q.position.set(te[0],te[1],te[2]),re&&Q.rotation.set(re[0],re[1],re[2]),Se&&Q.scale.set(Se[0],Se[1],Se[2]),Q.updateMatrix();const W=Q.geometry.clone();W.applyMatrix4(Q.matrix),Q.geometry=W,Q.renderOrder=1/0,Q.position.set(0,0,0),Q.rotation.set(0,0,0),Q.scale.set(1,1,1),V.add(Q)}return V}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=k(R)),this.add(this.gizmo.rotate=k(L)),this.add(this.gizmo.scale=k(I)),this.add(this.picker.translate=k(A)),this.add(this.picker.rotate=k(y)),this.add(this.picker.scale=k(O)),this.add(this.helper.translate=k(C)),this.add(this.helper.rotate=k(M)),this.add(this.helper.scale=k(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Tr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const o=i[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(mt.setFromEuler(mr.set(0,0,0)),o.quaternion.copy(n).multiply(mt),Math.abs(dt.copy(bs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(mt.setFromEuler(mr.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(mt),Math.abs(dt.copy(pi).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(mt.setFromEuler(mr.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(mt),Math.abs(dt.copy(Ts).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(mt.setFromEuler(mr.set(0,Math.PI/2,0)),dt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Bl.lookAt(Ol,dt,pi)),o.quaternion.multiply(mt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Nt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Nt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Nt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(dt.copy(bs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(dt.copy(pi).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(dt.copy(Ts).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(dt.copy(Ts).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(dt.copy(bs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(dt.copy(pi).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(gr.copy(n),dt.copy(this.eye).applyQuaternion(mt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Bl.lookAt(this.eye,Ol,pi)),o.name==="X"&&(mt.setFromAxisAngle(bs,Math.atan2(-dt.y,dt.z)),mt.multiplyQuaternions(gr,mt),o.quaternion.copy(mt)),o.name==="Y"&&(mt.setFromAxisAngle(pi,Math.atan2(dt.x,dt.z)),mt.multiplyQuaternions(gr,mt),o.quaternion.copy(mt)),o.name==="Z"&&(mt.setFromAxisAngle(Ts,Math.atan2(dt.y,dt.x)),mt.multiplyQuaternions(gr,mt),o.quaternion.copy(mt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class fx extends ${constructor(){super(new yi(1e5,1e5,2,2),new At({visible:!1,wireframe:!0,side:It,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),_r.copy(bs).applyQuaternion(t==="local"?this.worldQuaternion:Tr),vs.copy(pi).applyQuaternion(t==="local"?this.worldQuaternion:Tr),ys.copy(Ts).applyQuaternion(t==="local"?this.worldQuaternion:Tr),dt.copy(vs),this.mode){case"translate":case"scale":switch(this.axis){case"X":dt.copy(this.eye).cross(_r),_n.copy(_r).cross(dt);break;case"Y":dt.copy(this.eye).cross(vs),_n.copy(vs).cross(dt);break;case"Z":dt.copy(this.eye).cross(ys),_n.copy(ys).cross(dt);break;case"XY":_n.copy(ys);break;case"YZ":_n.copy(_r);break;case"XZ":dt.copy(ys),_n.copy(vs);break;case"XYZ":case"E":_n.set(0,0,0);break}break;case"rotate":default:_n.set(0,0,0)}_n.length()===0?this.quaternion.copy(this.cameraQuaternion):(kl.lookAt(Nt.set(0,0,0),_n,dt),this.quaternion.setFromRotationMatrix(kl)),super.updateMatrixWorld(e)}}const px=150;class mx{constructor(e,t,n,i,s,o){this.scene=e,this.camera=t,this.renderer=n,this.toolSystem=i,this.entities=s,this.scenario=o,this.arrowHelper=new df(new T(0,-1,0),new T(0,0,0),1.5,16777215,.3,.2),this.arrowHelper.visible=!1,this.scene.add(this.arrowHelper),this.transformControl=new Uh(this.camera,this.renderer.renderer.domElement),this.transformControl.setSpace("local"),this.scene.add(this.transformControl.getHelper()),this.transformControl.addEventListener("dragging-changed",c=>{this.renderer.controls.enabled=!c.value,c.value||this.updateTooltip(!1)}),this.transformControl.addEventListener("change",()=>{this.transformControl.dragging&&this.updateTooltip(!0)}),this.tooltipEl=document.createElement("div"),this.tooltipEl.style.position="absolute",this.tooltipEl.style.padding="4px 8px",this.tooltipEl.style.background="rgba(0, 0, 0, 0.7)",this.tooltipEl.style.color="#fff",this.tooltipEl.style.borderRadius="4px",this.tooltipEl.style.fontFamily="monospace",this.tooltipEl.style.pointerEvents="none",this.tooltipEl.style.display="none",this.tooltipEl.style.zIndex="1000",document.body.appendChild(this.tooltipEl),this.boundOnKeyDown=this.onKeyDown.bind(this),this.boundOnPointerDown=this.onPointerDown.bind(this),this.boundOnPointerMove=this.onPointerMove.bind(this),this.boundOnPointerUp=this.onPointerUp.bind(this),window.addEventListener("keydown",this.boundOnKeyDown);const a=this.renderer.renderer.domElement;a.addEventListener("pointerdown",this.boundOnPointerDown),a.addEventListener("pointermove",this.boundOnPointerMove),window.addEventListener("pointerup",this.boundOnPointerUp)}transformControl;tooltipEl;raycaster=new Br;pointer=new we;handForceActive=!1;arrowHelper;boundOnKeyDown;boundOnPointerDown;boundOnPointerMove;boundOnPointerUp;dispose(){window.removeEventListener("keydown",this.boundOnKeyDown);const e=this.renderer.renderer.domElement;e.removeEventListener("pointerdown",this.boundOnPointerDown),e.removeEventListener("pointermove",this.boundOnPointerMove),window.removeEventListener("pointerup",this.boundOnPointerUp),this.transformControl.detach(),this.scene.remove(this.transformControl.getHelper()),this.transformControl.dispose(),this.scene.remove(this.arrowHelper),this.tooltipEl.parentNode&&this.tooltipEl.parentNode.removeChild(this.tooltipEl)}reset(){this.handForceActive=!1,this.arrowHelper.visible=!1,this.scenario.setHandForce(!1),this.renderer.controls.enabled=!0,this.renderer.renderer.domElement.style.cursor="default",this.tooltipEl.style.display="none",this.toolSystem.chainsawMesh&&this.transformControl.detach()}getRaycastIntersection(e){const n=this.renderer.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const i=this.entities.getAll().filter(o=>o.type==="log"&&o.mesh).map(o=>o.mesh),s=this.raycaster.intersectObjects(i,!1);return s.length>0?s[0]:null}onPointerDown(e){const t=Be.getState().activeTool;if(t!=="hand"&&t!=="chainsaw"||e.button!==0)return;if(console.log("[Input] onPointerDown",{axis:this.transformControl.axis,dragging:this.transformControl.dragging}),this.transformControl.axis!==null||this.transformControl.dragging){console.log("[Input] Ignored click because Gizmo is being interacted with.");return}const i=this.renderer.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-i.left)/i.width*2-1,this.pointer.y=-((e.clientY-i.top)/i.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const s=this.entities.getAll().filter(l=>l.type==="log"&&l.mesh).map(l=>l.mesh),o=[...s];this.toolSystem.chainsawMesh&&o.push(this.toolSystem.chainsawMesh);const c=this.raycaster.intersectObjects(o,!0).filter(l=>{let h=l.object;for(;h;){if(!h.visible)return!1;h=h.parent}return!0});if(c.length>0){const l=c[0];let h=!1,d=!1,u=l.object;for(;u;){if(u===this.toolSystem.chainsawMesh){h=!0;break}if(s.includes(u)){d=!0;break}u=u.parent}if(h){if(console.log("[Input] Chainsaw intersects:",c.filter(f=>{let g=f.object;for(;g;){if(g===this.toolSystem.chainsawMesh)return!0;g=g.parent}return!1}).map(f=>f.object.name||f.object.type)),Be.getState().chainsawStuck){console.log("[Input] Chainsaw is stuck, ignoring click.");return}console.log("[Input] User clicked the chainsaw, attaching gizmo."),this.transformControl.attach(this.toolSystem.chainsawMesh);return}else if(d){if(console.log("[Input] User clicked a log."),this.transformControl.detach(),this.tooltipEl.style.display="none",t==="hand")this.renderer.controls.enabled=!1,this.handForceActive=!0,this.renderer.renderer.domElement.style.cursor="grabbing",this.applyHandForce(e);else if(t==="chainsaw"){if(Be.getState().chainsawStuck){console.log("[Input] Chainsaw is stuck, ignoring snap.");return}console.log("[Input] Snapping to cut."),this.toolSystem.setThrottle(!1),this.toolSystem.snapToCut(l)}return}}console.log("[Input] User clicked away, detaching gizmo."),this.transformControl.detach(),this.tooltipEl.style.display="none"}onPointerMove(e){this.handForceActive&&this.applyHandForce(e)}applyHandForce(e){const t=this.getRaycastIntersection(e);if(t){const n=new T().subVectors(t.point,this.camera.position).normalize();this.arrowHelper.position.copy(t.point),this.arrowHelper.setDirection(n),this.arrowHelper.visible=!0,this.scenario.setHandForce(!0,t.point,n,px)}else this.arrowHelper.visible=!1,this.scenario.setHandForce(!1)}onPointerUp(e){this.handForceActive&&(this.handForceActive=!1,this.renderer.controls.enabled=!0,this.renderer.renderer.domElement.style.cursor="grab",this.arrowHelper.visible=!1,this.scenario.setHandForce(!1))}updateTooltip(e){if(!e||!this.toolSystem.chainsawMesh){this.tooltipEl.style.display="none";return}this.tooltipEl.style.display="block";const t=this.toolSystem.chainsawMesh.position.clone();t.project(this.camera);const n=(t.x*.5+.5)*window.innerWidth,i=(t.y*-.5+.5)*window.innerHeight;if(this.tooltipEl.style.left=`${n+20}px`,this.tooltipEl.style.top=`${i-20}px`,this.transformControl.mode==="translate"){const{x:s,y:o,z:a}=this.toolSystem.chainsawMesh.position;this.tooltipEl.innerText=`Pos: [${s.toFixed(2)}, ${o.toFixed(2)}, ${a.toFixed(2)}]`}else{const{x:s,y:o,z:a}=this.toolSystem.chainsawMesh.rotation,c=(s*180/Math.PI).toFixed(0),l=(o*180/Math.PI).toFixed(0),h=(a*180/Math.PI).toFixed(0);this.tooltipEl.innerText=`Rot: [${c}°, ${l}°, ${h}°]`}}onKeyDown(e){if(e.target instanceof HTMLInputElement){const o=e.target.type.toLowerCase();if(["text","number","password","search","email","tel","url"].includes(o))return}if(e.target instanceof HTMLTextAreaElement)return;const t=this.toolSystem.chainsawMesh;if(!t)return;const n=Be.getState().chainsawStuck,i=.1,s=Math.PI/16;switch(e.key.toLowerCase()){case"w":n||t.translateY(i);break;case"s":n||t.translateY(-i);break;case"a":n||t.translateX(-i);break;case"d":n||t.translateX(i);break;case"q":n||t.rotateY(s);break;case"e":n||t.rotateY(-s);break;case"z":n||t.rotateX(s);break;case"c":n||t.rotateX(-s);break;case"t":n||this.toolSystem.setThrottle(!this.toolSystem.throttleOn);break;case"r":n&&(Be.update({chainsawStuck:!1,lastResetTime:performance.now()}),Be.updateSimulation("currentPressure",0)),this.toolSystem.resetPosition(),this.transformControl.detach();const o=this.toolSystem.getGuidebarTransform();o&&this.scenario.sendGuidebarState(!0,o.pos,o.quat,o.scale);break;case"m":this.transformControl.setMode(this.transformControl.mode==="translate"?"rotate":"translate");break;case"escape":this.transformControl.detach(),this.tooltipEl.style.display="none";break;case"arrowright":case"arrowleft":this.toolSystem.quickFlip();break;case"arrowup":this.toolSystem.snapTop();break;case"arrowdown":this.toolSystem.snapBottom();break}}forceDetachGizmo(){this.transformControl.detach(),this.tooltipEl.style.display="none"}}class gx{scene;camera;renderer;orbitControls;transformControl;raycaster;pointer;targetGroup=null;uiOverlay;constructor(e,t,n,i){this.scene=e,this.camera=t,this.renderer=n,this.orbitControls=i,this.raycaster=new Br,this.pointer=new we,this.transformControl=new Uh(this.camera,this.renderer.domElement),this.transformControl instanceof lt?this.scene.add(this.transformControl):this.transformControl.getHelper&&this.scene.add(this.transformControl.getHelper()),this.transformControl.addEventListener("dragging-changed",s=>{this.orbitControls.enabled=!s.value}),this.uiOverlay=document.createElement("div"),this.uiOverlay.style.position="fixed",this.uiOverlay.style.top="10px",this.uiOverlay.style.right="10px",this.uiOverlay.style.padding="15px",this.uiOverlay.style.backgroundColor="rgba(0, 0, 0, 0.7)",this.uiOverlay.style.color="#fff",this.uiOverlay.style.fontFamily="monospace",this.uiOverlay.style.fontSize="12px",this.uiOverlay.style.pointerEvents="none",this.uiOverlay.style.zIndex="9999",this.uiOverlay.style.borderRadius="5px",this.uiOverlay.style.whiteSpace="pre",this.uiOverlay.innerText=`DevEditor (editMode=true)
Click an item to edit.
Shortcuts: [T]ranslate, [R]otate, [S]cale, [Esc]ape`,document.body.appendChild(this.uiOverlay),this.transformControl.addEventListener("change",()=>{this.updateUI()}),this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown.bind(this)),window.addEventListener("keydown",this.onKeyDown.bind(this))}setTargetGroup(e){this.targetGroup=e,this.transformControl.detach(),this.updateUI()}onPointerDown(e){if(!this.targetGroup||!this.targetGroup.visible||e.button!==0)return;const t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObjects(this.targetGroup.children,!0);if(n.length>0){let i=n[0].object;for(;i&&i!==this.targetGroup;){if(i.name.startsWith("equipped-")||i.userData.editable){this.transformControl.attach(i),this.updateUI();return}i=i.parent}}}onKeyDown(e){if(!(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement))switch(e.key.toLowerCase()){case"t":this.transformControl.setMode("translate");break;case"r":this.transformControl.setMode("rotate");break;case"s":this.transformControl.setMode("scale");break;case"escape":this.transformControl.detach(),this.updateUI();break}}updateUI(){const e=this.transformControl.object;if(!e){this.uiOverlay.innerText=`DevEditor (editMode=true)
Click an item to edit.
Shortcuts: [T]ranslate, [R]otate, [S]cale, [Esc]ape`;return}const t=e.position,n=e.rotation,i=e.scale;this.uiOverlay.innerText=`[ DevEditor ]
Object: ${e.name}
Mode: ${this.transformControl.getMode()}

manPosition: [${t.x.toFixed(3)}, ${t.y.toFixed(3)}, ${t.z.toFixed(3)}],
manRotation: [${n.x.toFixed(3)}, ${n.y.toFixed(3)}, ${n.z.toFixed(3)}],
manScale: [${i.x.toFixed(3)}, ${i.y.toFixed(3)}, ${i.z.toFixed(3)}]
`}dispose(){this.transformControl.detach(),this.transformControl.dispose(),this.uiOverlay.parentElement&&this.uiOverlay.parentElement.removeChild(this.uiOverlay),this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown.bind(this)),window.removeEventListener("keydown",this.onKeyDown.bind(this))}}function Cx(){console.log("[OHLEC HUD] Initializing..."),wr(1);const r=document.getElementById("dbg-showTension"),e=document.getElementById("tension-global"),t=document.getElementById("tension-log");r?.addEventListener("change",()=>{Be.updateFeature("showTension",r.checked)}),e?.addEventListener("change",()=>{e.checked&&Be.updateFeature("globalTension",!0)}),t?.addEventListener("change",()=>{t.checked&&Be.updateFeature("globalTension",!1)}),Be.subscribe(n=>{r&&(r.checked=!!n.featureFlags.showTension);const i=document.getElementById("tension-mode-container");i&&(i.style.display=n.featureFlags.showTension?"flex":"none"),e&&(e.checked=n.featureFlags.globalTension),t&&(t.checked=!n.featureFlags.globalTension)})}function wr(r){for(let i=0;i<5;i++){const s=document.getElementById(`step-${i}`);s&&(s.style.opacity="0.5",s.style.background="transparent",s.style.borderLeft="3px solid transparent")}const e=document.getElementById(`step-${r-1}`);e&&(e.style.opacity="1",e.style.background="rgba(0,255,255,0.1)",e.style.borderLeft="3px solid var(--accent-cyan)");const t=document.getElementById("ohlec-action-title"),n=document.getElementById("ohlec-action-desc");if(!(!t||!n))switch(r){case 1:t.innerText="Step 1: Define Objective",n.innerText="Identify the safest drop zone for the log segment. Click the ground to place your target zone.";break;case 2:t.innerText="Step 2: Hazards Scan",n.innerText="Orbit the camera and click to identify all critical hazards (widowmakers, spring poles, etc).";break;case 3:t.innerText="Step 3: Leans & Binds",n.innerText="Toggle Stress Vision to see internal forces, then classify the bind type.";break;case 4:t.innerText="Step 4: Escape Route",n.innerText="Draw your intended escape path in the safe 45-degree quadrant.";break;case 5:t.innerText="Step 5: Cut Plan",n.innerText="Place your virtual cut planes to safely relieve binds without pinching the bar.";break}}function _x(r,e,t){const n=document.getElementById("ohlec-action-title"),i=document.getElementById("ohlec-action-desc");n&&(e>1?n.innerText=`Step 1: Define Objective (${r}/${e})`:n.innerText="Step 1: Define Objective"),i&&(i.innerText=`${t} Click the ground to mark the zone.`)}function di(r,e){let t=document.getElementById("ohlec-toast");t||(t=document.createElement("div"),t.id="ohlec-toast",t.style.position="fixed",t.style.top="2rem",t.style.left="50%",t.style.transform="translateX(-50%)",t.style.padding="0.75rem 1.5rem",t.style.borderRadius="8px",t.style.fontSize="1rem",t.style.fontWeight="600",t.style.zIndex="9999",t.style.pointerEvents="none",t.style.backdropFilter="blur(10px)",t.style.transition="opacity 0.3s ease, transform 0.3s ease",document.body.appendChild(t)),t.style.background=e?"rgba(0, 255, 136, 0.2)":"rgba(255, 68, 68, 0.2)",t.style.border=e?"1px solid var(--accent-cyan, #00ff88)":"1px solid #ff4444",t.style.color=e?"#00ff88":"#ff6666",t.innerText=r,t.style.opacity="1",t.style.transform="translateX(-50%) translateY(0)",t._timeout&&clearTimeout(t._timeout),t._timeout=setTimeout(()=>{t&&(t.style.opacity="0",t.style.transform="translateX(-50%) translateY(-10px)")},2500)}const xx=1.5,Io=65535,zl=65416,vx=16729156,Hl=.05,yx=.6,Mx=.45,Sx=.4,Ex=40,bx=.08,Tx=16711680,wx=6684672;class Ax{constructor(e,t){this.renderer=e,this.environment=t,this.boundPointerMove=this.onPointerMove.bind(this),this.boundPointerDown=this.onPointerDown.bind(this)}currentStep=1;objectives=[];currentObjectiveIndex=0;totalCriticalHazards=0;identifiedHazardIds=new Set;activeShakes=[];raycaster=new Br;mouse=new we;previewReticle=null;placedMarkers=[];domElement=null;boundPointerMove;boundPointerDown;active=!1;init(e){this.dispose(),this.active=!0,this.currentStep=1,this.currentObjectiveIndex=0,this.placedMarkers=[],this.identifiedHazardIds.clear(),this.activeShakes=[],e.ohlec?.objective?Array.isArray(e.ohlec.objective)?this.objectives=e.ohlec.objective:this.objectives=[e.ohlec.objective]:this.objectives=[],e.ohlec?.hazards?this.totalCriticalHazards=e.ohlec.hazards.filter(t=>t.critical).length:this.totalCriticalHazards=0,this.createPreviewReticle(),this.domElement=this.renderer.renderer.domElement,this.domElement.addEventListener("pointermove",this.boundPointerMove),this.domElement.addEventListener("pointerdown",this.boundPointerDown),wr(1),this.syncHUDWithCurrentObjective(),console.log(`[OhlecManager] Initialized with ${this.objectives.length} objective(s) and ${this.totalCriticalHazards} critical hazard(s).`)}createPreviewReticle(){const e=new Rs(.2,xx,32);e.rotateX(-Math.PI/2);const t=new At({color:Io,side:It,transparent:!0,opacity:Mx,depthTest:!0});this.previewReticle=new $(e,t),this.previewReticle.visible=!1,this.renderer.scene.add(this.previewReticle)}syncHUDWithCurrentObjective(){if(this.currentStep===1&&this.objectives.length>0&&this.currentObjectiveIndex<this.objectives.length){const e=this.objectives[this.currentObjectiveIndex];if(_x(this.currentObjectiveIndex+1,this.objectives.length,e.description),this.previewReticle&&e.target_zone.radius){const t=e.target_zone.radius;this.previewReticle.geometry.dispose(),this.previewReticle.geometry=new Rs(.2,t,32),this.previewReticle.geometry.rotateX(-Math.PI/2)}}}onPointerMove(e){if(!this.active||this.currentStep!==1||!this.previewReticle)return;const t=this.environment.getGroundMesh();if(!t)return;const n=this.renderer.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-n.left)/n.width*2-1,this.mouse.y=-((e.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.renderer.camera);const i=this.raycaster.intersectObject(t);if(i.length>0){const s=i[0].point;if(this.previewReticle.position.set(s.x,s.y+Hl,s.z),this.previewReticle.visible=!0,this.currentObjectiveIndex<this.objectives.length){const o=this.objectives[this.currentObjectiveIndex].target_zone,a=s.x-o.x,c=s.z-o.z,l=Math.sqrt(a*a+c*c),h=this.previewReticle.material;l<=o.radius?h.color.setHex(zl):h.color.setHex(Io)}}else this.previewReticle.visible=!1}onPointerDown(e){!this.active||e.button!==0||(this.currentStep===1?this.handleStep1PointerDown(e):this.currentStep===2&&this.handleStep2PointerDown(e))}handleStep1PointerDown(e){const t=this.environment.getGroundMesh();if(!t)return;const n=this.renderer.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-n.left)/n.width*2-1,this.mouse.y=-((e.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.renderer.camera);const i=this.raycaster.intersectObject(t);if(i.length===0)return;const s=i[0].point;this.validateObjectiveClick(s.x,s.y,s.z)}handleStep2PointerDown(e){const t=this.environment.getHazardMeshes();if(t.length===0)return;const n=this.renderer.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-n.left)/n.width*2-1,this.mouse.y=-((e.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.renderer.camera);const i=this.raycaster.intersectObjects(t,!0);if(i.length===0)return;const s=i[0].object,o=s.userData.hazardDef,a=s.userData.hazardRoot||s;if(o)if(o.critical===!0){if(this.identifiedHazardIds.has(o.id)){di("Critical hazard already identified!",!0);return}this.identifiedHazardIds.add(o.id),this.triggerShake(a),this.highlightMeshRed(a),di(`Critical Hazard Identified: ${(o.type||"Hazard").toUpperCase()}!`,!0),this.identifiedHazardIds.size>=this.totalCriticalHazards&&(di("Step 2 Complete! All critical hazards identified.",!0),this.currentStep=3,wr(3))}else di("Non-critical item. Focus on identifying critical hazards!",!1)}triggerShake(e){const t=this.activeShakes.find(n=>n.object===e);if(t){t.elapsed=0;return}this.activeShakes.push({object:e,initialPosition:e.position.clone(),elapsed:0,duration:Sx})}highlightMeshRed(e){e.traverse(t=>{if(t instanceof $){const n=i=>{const s=i.clone();return"color"in s&&s.color.setHex(Tx),"emissive"in s&&s.emissive.setHex(wx),s};Array.isArray(t.material)?t.material=t.material.map(n):t.material&&(t.material=n(t.material))}})}update(e){if(!(!this.active||this.activeShakes.length===0))for(let t=this.activeShakes.length-1;t>=0;t--){const n=this.activeShakes[t];n.elapsed+=e;const i=n.elapsed/n.duration;if(i>=1)n.object.position.copy(n.initialPosition),this.activeShakes.splice(t,1);else{const s=1-i,o=Math.sin(n.elapsed*Ex)*bx*s;n.object.position.x=n.initialPosition.x+o,n.object.position.z=n.initialPosition.z+o*.5}}}validateObjectiveClick(e,t,n){if(this.currentObjectiveIndex>=this.objectives.length)return;const s=this.objectives[this.currentObjectiveIndex].target_zone,o=e-s.x,a=n-s.z;if(Math.sqrt(o*o+a*a)<=s.radius)this.placeTargetMarker(e,t,n,s.radius),di(`Objective ${this.currentObjectiveIndex+1}/${this.objectives.length} set!`,!0),this.currentObjectiveIndex++,this.currentObjectiveIndex<this.objectives.length?this.syncHUDWithCurrentObjective():(di("Step 1 Complete! All drop zones defined.",!0),this.currentStep=2,wr(2),this.previewReticle&&(this.previewReticle.visible=!1));else if(di("Clicked outside designated drop zone. Re-assess and try again!",!1),this.previewReticle){const l=this.previewReticle.material;l.color.setHex(vx),setTimeout(()=>{l&&l.color.setHex(Io)},600)}}placeTargetMarker(e,t,n,i){const s=new vn;s.position.set(e,t+Hl,n);const o=new Wa(i,32);o.rotateX(-Math.PI/2);const a=new At({color:zl,transparent:!0,opacity:yx,side:It}),c=new $(o,a);s.add(c);const l=new Rs(i*.92,i,32);l.rotateX(-Math.PI/2);const h=new At({color:16777215,side:It}),d=new $(l,h);s.add(d),this.renderer.scene.add(s),this.placedMarkers.push(s)}dispose(){this.active=!1,this.domElement&&(this.domElement.removeEventListener("pointermove",this.boundPointerMove),this.domElement.removeEventListener("pointerdown",this.boundPointerDown),this.domElement=null),this.previewReticle&&(this.renderer.scene.remove(this.previewReticle),this.previewReticle.geometry&&this.previewReticle.geometry.dispose(),this.previewReticle.material&&this.previewReticle.material.dispose(),this.previewReticle=null);for(const e of this.placedMarkers)this.renderer.scene.remove(e),e.traverse(t=>{t instanceof $&&(t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose())});this.placedMarkers=[];for(const e of this.activeShakes)e.object.position.copy(e.initialPosition);this.activeShakes=[]}}class Px{renderer;environment;entities;scenario;tools;input;devEditor;ohlecManager;isRunning=!1;ppeGroup=new vn;clock=new Zu;constructor(e){this.renderer=new Z0(e),this.environment=new J0(this.renderer.scene),this.entities=new ex(this.renderer.scene),this.ppeGroup.position.set(0,1e3,0);const t=pn.getModel(Kt.MODELS.MAN);t&&(t.scene.scale.set(1.06,1.06,1.06),this.ppeGroup.add(t.scene)),this.renderer.scene.add(this.ppeGroup),this.setupPPETerrain(),new URLSearchParams(window.location.search).get("editMode")==="true"&&(this.devEditor=new gx(this.renderer.scene,this.renderer.camera,this.renderer.renderer,this.renderer.controls));let n=null;Be.subscribe(i=>{Es.forEach(s=>{if(!s.models||s.models.length===0)return;const o=!!i.equippedPPE[s.id];s.models.forEach((a,c)=>{const l=`equipped-${s.id}-${c}`;let h=this.ppeGroup.getObjectByName(l);if(o){if(!h){const d=pn.getModel(a.modelPath);d&&(h=d.scene.clone(),h.name=l,a.manPosition&&h.position.set(a.manPosition[0],a.manPosition[1],a.manPosition[2]),a.manRotation&&h.rotation.set(a.manRotation[0],a.manRotation[1],a.manRotation[2]),a.manScale&&h.scale.set(a.manScale[0],a.manScale[1],a.manScale[2]),this.ppeGroup.add(h))}h&&(h.visible=!0)}else h&&(h.visible=!1)})}),this.scenario&&(this.scenario.setTelemetry(i.showPerfWarnings),this.scenario.setGravity(i.simulation.gravity),this.scenario.setShowTension(i.featureFlags.showTension)),this.applyDebugStyles(i),i.activeMode!==n&&(n=i.activeMode,i.activeMode==="PPE"?(this.stopSimulator(),this.devEditor&&this.devEditor.setTargetGroup(this.ppeGroup),this.ppeGroup.visible=!0,this.renderer.camera.position.set(0,1002,4),this.renderer.controls.target.set(0,1001,0),this.renderer.controls.update(),this.renderer.dirLight.position.set(10,1020,10),this.renderer.dirLight.target.position.set(0,1e3,0),this.renderer.dirLight.target.updateMatrixWorld(),this.renderer.scene.updateMatrixWorld(!0)):i.activeMode==="OHLEC"||i.activeMode==="ASSESSMENT"?(this.stopSimulator(),this.devEditor&&this.devEditor.setTargetGroup(null),this.ppeGroup.visible=!1,this.renderer.camera.position.set(0,2,4),this.renderer.controls.target.set(0,.5,0),this.renderer.controls.update(),this.renderer.dirLight.position.set(10,20,10),this.renderer.dirLight.target.position.set(0,0,0),this.renderer.dirLight.target.updateMatrixWorld(),this.renderer.scene.updateMatrixWorld(!0)):(this.devEditor&&this.devEditor.setTargetGroup(null),this.ppeGroup.visible=!1,this.renderer.camera.position.y>500&&(this.renderer.camera.position.set(0,2,4),this.renderer.controls.target.set(0,.5,0),this.renderer.controls.update()),this.renderer.dirLight.position.set(10,20,10),this.renderer.dirLight.target.position.set(0,0,0),this.renderer.dirLight.target.updateMatrixWorld(),this.renderer.scene.updateMatrixWorld(!0),this.startSimulator())),i.activeTool==="hand"?this.renderer.renderer.domElement.style.cursor="grab":this.renderer.renderer.domElement.style.cursor="default",i.chainsawStuck&&this.tools&&this.input&&(this.tools.throttleOn&&this.tools.setThrottle(!1),this.input.forceDetachGizmo())})}setupPPETerrain(){const n=new yi(100,100,200,200);n.rotateX(-Math.PI/2);const i=new Float32Array(40401),s=100/200;let o=0;for(let d=0;d<=200;d++){const u=-50+d*s,f=Math.sin(u*.1)*3+Math.sin(u*.03)*5;for(let g=0;g<=200;g++){const _=-50+g*s,m=Math.abs(_-f),p=2,v=4;let S=0;m<p?S=1:m<p+v&&(S=1-(m-p)/v,S=S*S*(3-2*S)),i[o]=S,o++}}n.computeVertexNormals(),n.setAttribute("pathIntensity",new ft(i,1));const a=pn.getTexture(Kt.TEXTURES.LEAVES),c=pn.getTexture(Kt.TEXTURES.MUD);a&&(a.wrapS=Ot,a.wrapT=Ot,a.repeat.set(20,20)),c&&(c.wrapS=Ot,c.wrapT=Ot,c.repeat.set(20,20));const l=new On({map:a||null,color:a?16777215:5592405,roughness:.9});c&&(l.customProgramCacheKey=()=>"terrain_path_ppe",l.onBeforeCompile=d=>{d.uniforms.pathMap={value:c},d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
          attribute float pathIntensity;
          varying float vPathIntensity;`),d.vertexShader=d.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
          vPathIntensity = pathIntensity;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
          uniform sampler2D pathMap;
          varying float vPathIntensity;
          
          float random(vec2 st) {
              return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
          }
          
          float noise(vec2 st) {
              vec2 i = floor(st);
              vec2 f = fract(st);
              float a = random(i);
              float b = random(i + vec2(1.0, 0.0));
              float c = random(i + vec2(0.0, 1.0));
              float d = random(i + vec2(1.0, 1.0));
              vec2 u = f * f * (3.0 - 2.0 * f);
              return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
          }`),d.fragmentShader=d.fragmentShader.replace("#include <map_fragment>",`
          #ifdef USE_MAP
            vec2 macroUv = vMapUv / 20.0; 
            
            float sin45 = 0.7071;
            mat2 rot = mat2(sin45, -sin45, sin45, sin45);
            vec2 uv2 = rot * vMapUv * 0.6;
            
            vec4 baseColor1 = texture2D(map, vMapUv);
            vec4 baseColor2 = texture2D(map, uv2);
            
            float n1 = noise(macroUv * 15.0); 
            vec4 sampledDiffuseColor = mix(baseColor1, baseColor2, n1);
            
            vec4 pathColor1 = texture2D(pathMap, vMapUv);
            vec4 pathColor2 = texture2D(pathMap, uv2);
            vec4 pathColor = mix(pathColor1, pathColor2, n1);
            
            vec4 vegetationTint = vec4(0.6, 1.0, 0.5, 1.0);
            vec4 tintedBaseColor = sampledDiffuseColor * vegetationTint;
            
            float edgeNoise = noise(macroUv * 50.0) * 0.5 - 0.25;
            float noisyIntensity = clamp(vPathIntensity + edgeNoise, 0.0, 1.0);
            
            noisyIntensity = smoothstep(0.1, 0.9, noisyIntensity);
            
            sampledDiffuseColor = mix(tintedBaseColor, pathColor, noisyIntensity);
            diffuseColor *= sampledDiffuseColor;
          #endif
          `)});const h=new $(n,l);h.receiveShadow=!0,this.ppeGroup.add(h)}applyDebugStyles(e){this.tools&&(this.tools.guidebarBox&&(this.tools.guidebarBox.visible=!!e.featureFlags.showGuidebarBox),this.tools.showKerfBoxDebug=!!e.featureFlags.showKerfBox);const t=!e.featureFlags.showEdges&&!e.featureFlags.showNodes,n=!!e.featureFlags.showTension;for(const i of this.entities.getAll())if(i.type==="log"&&i.mesh instanceof $){const s=Array.isArray(i.mesh.material)?i.mesh.material:[i.mesh.material];for(const o of s){o.userData.originalMap===void 0&&(o.userData.originalMap=o.map);const a=n?null:o.userData.originalMap;let c=!1;o.visible!==t&&(o.visible=t,c=!0),o.map!==a&&(o.map=a,c=!0),o.vertexColors!==n&&(o.vertexColors=n,n&&o.color.setHex(16777215),c=!0),c&&(o.needsUpdate=!0)}if(i.points){const o=i.points.material,a=!!e.featureFlags.showNodes,c=!!e.featureFlags.depthTest;i.points.visible!==a&&(i.points.visible=a),o.depthTest!==c&&(o.depthTest=c,o.needsUpdate=!0)}if(i.wireframe){i.wireframe.visible=!1;const o=i.wireframe.material,a=!!e.featureFlags.depthTest;o.depthTest!==a&&(o.depthTest=a,o.needsUpdate=!0)}}if(this.entities.globalSpringsMesh){const i=this.entities.globalSpringsMesh,s=i.material,o=!!e.featureFlags.showEdges,a=!!e.featureFlags.depthTest;i.visible!==o&&(i.visible=o),s.depthTest!==a&&(s.depthTest=a,s.needsUpdate=!0)}}init(){}startSimulator(){if(this.scenario)return;console.log("[App] Starting Simulator..."),this.scenario=new Ll((t,n,i)=>{for(const s of this.entities.getAll())s.type==="log"&&this.entities.syncPositions(s.id,t,n,i,Be.getState().featureFlags.globalTension)},(t,n,i,s)=>{this.entities.syncTopology(t,n,i,s),this.applyDebugStyles(Be.getState())},this.environment,t=>{this.resetSceneAndUI(t)}),this.tools=new rx(this.entities,(t,n)=>{this.scenario?.sendCutEvent(t,n)},(t,n,i)=>{this.scenario?.sendCutProgress(t,n,i)}),this.input=new mx(this.renderer.scene,this.renderer.camera,this.renderer,this.tools,this.entities,this.scenario);const e=Be.getState();this.scenario.setTelemetry(e.showPerfWarnings),this.scenario.setGravity(e.simulation.gravity),this.scenario.setShowTension(e.featureFlags.showTension),this.applyDebugStyles(e),this.scenario.loadScenario("/assets/scenarios/top_bind.json")}startOhlecMode(){if(this.scenario)return;console.log("[App] Starting OHLEC Mode..."),this.ohlecManager=new Ax(this.renderer,this.environment),this.scenario=new Ll((t,n,i)=>{for(const s of this.entities.getAll())s.type==="log"&&this.entities.syncPositions(s.id,t,n,i,Be.getState().featureFlags.globalTension)},(t,n,i,s)=>{this.entities.syncTopology(t,n,i,s),this.applyDebugStyles(Be.getState())},this.environment,t=>{this.resetSceneAndUI(t)}),this.tools=void 0,this.input=void 0;const e=Be.getState();this.scenario.setTelemetry(e.showPerfWarnings),this.scenario.setGravity(e.simulation.gravity),this.scenario.setShowTension(e.featureFlags.showTension),this.applyDebugStyles(e),this.scenario.loadScenario("/assets/scenarios/ohlec_general.json")}stopSimulator(){if(this.scenario){console.log("[App] Stopping Simulator..."),this.ohlecManager&&(this.ohlecManager.dispose(),this.ohlecManager=void 0),this.scenario.terminate(),this.scenario=void 0,this.entities.clearLogs(),this.environment.clear();for(const e of this.entities.getAll())e.type==="tool"&&this.entities.remove(e.id);this.tools=void 0,this.input&&(this.input.dispose(),this.input=void 0)}}loadScenario(e){this.scenario&&this.scenario.loadScenario(e)}loadScenarioObj(e){this.scenario&&this.scenario.loadScenarioObj(e)}resetSceneAndUI(e){console.log("[App] Resetting scene and UI for new scenario..."),this.environment.clear(),this.entities.clearLogs(),this.tools&&this.tools.resetToScenario(e.chainsaw),this.input&&this.input.reset(),this.ohlecManager&&this.ohlecManager.init(e),Be.update({activeTool:"chainsaw",throttleOn:!1});const t=document.getElementById("kerf-fill");t&&(t.style.width="0%");const n=document.getElementById("modal-stuck");n&&n.classList.add("hidden")}run(){this.isRunning||(this.isRunning=!0,this.loop())}stop(){this.isRunning=!1,this.stopSimulator()}loop(){if(!this.isRunning)return;requestAnimationFrame(this.loop.bind(this));const e=this.clock.getDelta();if(this.tools){this.tools.tick(e);const t=this.tools.getGuidebarTransform();t&&Be.getState().activeTool==="chainsaw"?this.scenario?.sendGuidebarState(!0,t.pos,t.quat,t.scale):this.scenario?.sendGuidebarState(!1)}this.ohlecManager&&this.ohlecManager.update(e),this.renderer.update(),this.renderer.render()}}function Ix(){if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||document.getElementById("modal-wip"))return;document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-wip" class="modal-backdrop">
      <div class="glass-panel modal-content" style="max-width: 450px; text-align: center;">
        <h2 style="color: #ffaa00; margin-bottom: 1rem;">Work In Progress - Alpha</h2>
        <p style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem; color: #e0e0e0;">
          Welcome! You are viewing an early alpha version of LogSim3D. 
          Please note that this is a work in progress and is not complete. 
          We are constantly improving the simulation, so expect some bugs and incomplete features.
        </p>
        <button id="btn-dismiss-wip" class="glass-btn active" style="width: 100%; padding: 0.75rem;">Dismiss & Continue</button>
      </div>
    </div>
  `);const e=document.getElementById("btn-dismiss-wip"),t=document.getElementById("modal-wip");e&&t&&e.addEventListener("click",()=>{t.remove()})}export{pn as A,Es as P,Be as U,Px as a,Cx as b,Rx as i,Ix as s};
//# sourceMappingURL=wipModal-DiPR3GW5.js.map
