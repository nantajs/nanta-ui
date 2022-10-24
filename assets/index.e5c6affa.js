import{k as De,w as Be,S as Le}from"./nanta.6a629224.js";import{d as Ue,J as H,w as ee,e as J,r as je,o as P,a as te,F as Ie,O as Me,A as ze,a1 as He,L as Je}from"./index.83750ce5.js";const qe={1:"male",2:"female"},Ve=[{field:"name",label:"Name",component:"Input",colProps:{span:8}},{field:"gender",label:"Gender",component:"Select",componentProps:{options:[{label:"male",value:1},{label:"female",value:2}]},colProps:{span:8}}],We=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Email",dataIndex:"email",key:"email",helpMessage:"use email address."},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags"},{title:"Gender",key:"gender",dataIndex:"gender",format:qe}],$e=[{key:"1",name:"John Brown",age:32,email:"john.brown@gmail.com",address:"New York No. 1 Lake Park",tags:["nice","developer"],gender:1},{key:"2",name:"Jim Green",email:"jim.green@gmail.com",age:42,address:"London No. 1 Lake Park",tags:["loser"],gender:1},{key:"3",name:"Joe Black",age:32,email:"joe.black@gmail.com",address:"Sidney No. 1 Lake Park",tags:["cool","teacher"],gender:2},{key:"4",name:"Aborn Jiang",age:32,email:"aborn.jiang@gmail.com",address:"Shanghai China",tags:["coder","engineer"]},{key:"5",name:"Jack Gre",age:32,email:"jack.gre@gmail.com",address:"Hangzhou China",tags:["coder","engineer"]},{key:"6",name:"Kitty Hello",age:32,email:"he@gmail.com",address:"Berlin No. 991 Geek Park",tags:["coder","engineer"],gender:3},{key:"7",name:"Mike",age:32,email:"mike@gmail.com",address:"Paris No. 1 Lake Park",tags:["coder","engineer"]},{key:"8",name:"Cook",age:67,email:"cook@gmail.com",address:"Taipei No. 101 Tower",tags:["coder","engineer"]},{key:"9",name:"Jack Ma",age:42,email:"jack.ma@gmail.com",address:"Paris No. 1 Lake Park",tags:["coder","engineer"]},{key:"10",name:"Xu",age:10,email:"xu@gmail.com",address:"Nanjing No. 1 Golden Park",tags:["coder","engineer"]},{key:"11",name:"Google",age:33,email:"google@gmail.com",address:"Osaka No. 1 Lake Park",tags:["coder","engineer"]},{key:"12",name:"Orode100",age:100,email:"100@gmail.com",address:"London No. 1 Center Park",tags:["coder","engineer"]}];function me(e,t){return function(){return e.apply(t,arguments)}}const{toString:pe}=Object.prototype,{getPrototypeOf:X}=Object,v=(e=>t=>{const n=pe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>v(t)===e),I=e=>t=>typeof t===e,{isArray:D}=Array,W=I("undefined");function Ke(e){return e!==null&&!W(e)&&e.constructor!==null&&!W(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ye=R("ArrayBuffer");function Ge(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ye(e.buffer),t}const Xe=I("string"),N=I("function"),Ee=I("number"),we=e=>e!==null&&typeof e=="object",ve=e=>e===!0||e===!1,U=e=>{if(v(e)!=="object")return!1;const t=X(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Qe=R("Date"),Ye=R("File"),Ze=R("Blob"),et=R("FileList"),tt=e=>we(e)&&N(e.pipe),nt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||pe.call(e)===t||N(e.toString)&&e.toString()===t)},rt=R("URLSearchParams"),st=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),D(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let u;for(r=0;r<s;r++)u=i[r],t.call(null,e[u],u,e)}}function $(){const e={},t=(n,r)=>{U(e[r])&&U(n)?e[r]=$(e[r],n):U(n)?e[r]=$({},n):D(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&M(arguments[n],t);return e}const ot=(e,t,n,{allOwnKeys:r}={})=>(M(t,(o,i)=>{n&&N(o)?e[i]=me(o,n):e[i]=o},{allOwnKeys:r}),e),it=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),at=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ct=(e,t,n,r)=>{let o,i,s;const u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!u[s]&&(t[s]=e[s],u[s]=!0);e=n!==!1&&X(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ut=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},lt=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Ee(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ft=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&X(Uint8Array)),dt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},ht=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},mt=R("HTMLFormElement"),pt=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ne=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),yt=R("RegExp"),ge=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},Et=e=>{ge(e,(t,n)=>{const r=e[n];if(!!N(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},wt=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return D(e)?r(e):r(String(e).split(t)),n},gt=()=>{},bt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),a={isArray:D,isArrayBuffer:ye,isBuffer:Ke,isFormData:nt,isArrayBufferView:Ge,isString:Xe,isNumber:Ee,isBoolean:ve,isObject:we,isPlainObject:U,isUndefined:W,isDate:Qe,isFile:Ye,isBlob:Ze,isRegExp:yt,isFunction:N,isStream:tt,isURLSearchParams:rt,isTypedArray:ft,isFileList:et,forEach:M,merge:$,extend:ot,trim:st,stripBOM:it,inherits:at,toFlatObject:ct,kindOf:v,kindOfTest:R,endsWith:ut,toArray:lt,forEachEntry:dt,matchAll:ht,isHTMLForm:mt,hasOwnProperty:ne,hasOwnProp:ne,reduceDescriptors:ge,freezeMethods:Et,toObjectSet:wt,toCamelCase:pt,noop:gt,toFiniteNumber:bt};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const be=m.prototype,Se={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Se[e]={value:e}});Object.defineProperties(m,Se);Object.defineProperty(be,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,i)=>{const s=Object.create(be);return a.toFlatObject(e,s,function(l){return l!==Error.prototype},u=>u!=="isAxiosError"),m.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var St=typeof self=="object"?self.FormData:window.FormData;function K(e){return a.isPlainObject(e)||a.isArray(e)}function Re(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function re(e,t,n){return e?e.concat(t).map(function(o,i){return o=Re(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Rt(e){return a.isArray(e)&&!e.some(K)}const Ot=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function xt(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(St||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,x){return!a.isUndefined(x[y])});const r=n.metaTokens,o=n.visitor||f,i=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&xt(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!l&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?l&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function f(d,y,x){let b=d;if(d&&!x&&typeof d=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Rt(d)||a.isFileList(d)||a.endsWith(y,"[]")&&(b=a.toArray(d)))return y=Re(y),b.forEach(function(L,_e){!(a.isUndefined(L)||L===null)&&t.append(s===!0?re([y],_e,i):s===null?y:y+"[]",c(L))}),!1}return K(d)?!0:(t.append(re(x,y,i),c(d)),!1)}const p=[],E=Object.assign(Ot,{defaultVisitor:f,convertValue:c,isVisitable:K});function h(d,y){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(d),a.forEach(d,function(b,k){(!(a.isUndefined(b)||b===null)&&o.call(t,b,a.isString(k)?k.trim():k,y,E))===!0&&h(b,y?y.concat(k):[k])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return h(e),t}function se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Q(e,t){this._pairs=[],e&&z(e,this,t)}const Oe=Q.prototype;Oe.append=function(t,n){this._pairs.push([t,n])};Oe.toString=function(t){const n=t?function(r){return t.call(this,r,se)}:se;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function At(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xe(e,t,n){if(!t)return e;const r=n&&n.encode||At,o=n&&n.serialize;let i;if(o?i=o(t,n):i=a.isURLSearchParams(t)?t.toString():new Q(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class oe{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ae={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kt=typeof URLSearchParams<"u"?URLSearchParams:Q,Nt=FormData,Tt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),S={isBrowser:!0,classes:{URLSearchParams:kt,FormData:Nt,Blob},isStandardBrowserEnv:Tt,protocols:["http","https","file","blob","url","data"]};function Pt(e,t){return z(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Ct(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ft(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function ke(e){function t(n,r,o,i){let s=n[i++];const u=Number.isFinite(+s),l=i>=n.length;return s=!s&&a.isArray(o)?o.length:s,l?(a.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!u):((!o[s]||!a.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&a.isArray(o[s])&&(o[s]=Ft(o[s])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Ct(r),o,n,0)}),n}return null}function _t(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Dt=S.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,s,u){const l=[];l.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&l.push("expires="+new Date(o).toGMTString()),a.isString(i)&&l.push("path="+i),a.isString(s)&&l.push("domain="+s),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Bt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Lt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ne(e,t){return e&&!Bt(t)?Lt(e,t):t}const Ut=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const u=a.isString(s)?o(s):s;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function B(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function jt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const It=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&It[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ie=Symbol("internals"),Te=Symbol("defaults");function F(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function ae(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Ht(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Jt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}function C(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}function g(e,t){e&&this.set(e),this[Te]=t||null}Object.assign(g.prototype,{set:function(e,t,n){const r=this;function o(i,s,u){const l=F(s);if(!l)throw new Error("header name must be a non-empty string");const c=C(r,l);c&&u!==!0&&(r[c]===!1||u===!1)||(r[c||s]=j(i))}return a.isPlainObject(e)?a.forEach(e,(i,s)=>{o(i,s,t)}):o(t,e,n),this},get:function(e,t){if(e=F(e),!e)return;const n=C(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return zt(r);if(a.isFunction(t))return t.call(this,r,n);if(a.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=F(e),e){const n=C(this,e);return!!(n&&(!t||ae(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function o(i){if(i=F(i),i){const s=C(n,i);s&&(!t||ae(n,n[s],s,t))&&(delete n[s],r=!0)}}return a.isArray(e)?e.forEach(o):o(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return a.forEach(this,(r,o)=>{const i=C(n,o);if(i){t[i]=j(r),delete t[o];return}const s=e?Ht(o):String(o).trim();s!==o&&delete t[o],t[s]=j(r),n[s]=!0}),this},toJSON:function(e){const t=Object.create(null);return a.forEach(Object.assign({},this[Te]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&a.isArray(n)?n.join(", "):n)}),t}});Object.assign(g,{from:function(e){return a.isString(e)?new this(Mt(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[ie]=this[ie]={accessors:{}}).accessors,r=this.prototype;function o(i){const s=F(i);n[s]||(Jt(r,i),n[s]=!0)}return a.isArray(e)?e.forEach(o):o(e),this}});g.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(g.prototype);a.freezeMethods(g);function qt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),f=r[i];s||(s=c),n[o]=l,r[o]=c;let p=i,E=0;for(;p!==o;)E+=n[p++],p=p%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const h=f&&c-f;return h?Math.round(E*1e3/h):void 0}}function ce(e,t){let n=0;const r=qt(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,u=i-n,l=r(u),c=i<=s;n=i;const f={loaded:i,total:s,progress:s?i/s:void 0,bytes:u,rate:l||void 0,estimated:l&&s&&c?(s-i)/l:void 0};f[t?"download":"upload"]=!0,e(f)}}function ue(e){return new Promise(function(n,r){let o=e.data;const i=g.from(e.headers).normalize(),s=e.responseType;let u;function l(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(o)&&S.isStandardBrowserEnv&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(h+":"+d))}const f=Ne(e.baseURL,e.url);c.open(e.method.toUpperCase(),xe(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const h=g.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};_t(function(b){n(b),l()},function(b){r(b),l()},y),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){!c||(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||Ae;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,y.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const h=(e.withCredentials||Ut(f))&&e.xsrfCookieName&&Dt.read(e.xsrfCookieName);h&&i.set(e.xsrfHeaderName,h)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(d,y){c.setRequestHeader(y,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&s!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ce(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ce(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=h=>{!c||(r(!h||h.type?new B(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const E=jt(f);if(E&&S.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})}const le={http:ue,xhr:ue},fe={getAdapter:e=>{if(a.isString(e)){const t=le[e];if(!e)throw Error(a.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!a.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:le},Vt={"Content-Type":"application/x-www-form-urlencoded"};function Wt(){let e;return typeof XMLHttpRequest<"u"?e=fe.getAdapter("xhr"):typeof process<"u"&&a.kindOf(process)==="process"&&(e=fe.getAdapter("http")),e}function $t(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const T={transitional:Ae,adapter:Wt(),transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Pt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return z(u?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),$t(t)):t}],transformResponse:[function(t){const n=this.transitional||T.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(s)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){T.headers[t]={}});a.forEach(["post","put","patch"],function(t){T.headers[t]=a.merge(Vt)});function q(e,t){const n=this||T,r=t||n,o=g.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Pe(e){return!!(e&&e.__CANCEL__)}function V(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B}function de(e){return V(e),e.headers=g.from(e.headers),e.data=q.call(e,e.transformRequest),(e.adapter||T.adapter)(e).then(function(r){return V(e),r.data=q.call(e,e.transformResponse,r),r.headers=g.from(r.headers),r},function(r){return Pe(r)||(V(e),r&&r.response&&(r.response.data=q.call(e,e.transformResponse,r.response),r.response.headers=g.from(r.response.headers))),Promise.reject(r)})}function _(e,t){t=t||{};const n={};function r(c,f){return a.isPlainObject(c)&&a.isPlainObject(f)?a.merge(c,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function o(c){if(a.isUndefined(t[c])){if(!a.isUndefined(e[c]))return r(void 0,e[c])}else return r(e[c],t[c])}function i(c){if(!a.isUndefined(t[c]))return r(void 0,t[c])}function s(c){if(a.isUndefined(t[c])){if(!a.isUndefined(e[c]))return r(void 0,e[c])}else return r(void 0,t[c])}function u(c){if(c in t)return r(e[c],t[c]);if(c in e)return r(void 0,e[c])}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const p=l[f]||o,E=p(f);a.isUndefined(E)&&p!==u||(n[f]=E)}),n}const Ce="1.1.3",Y={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Y[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const he={};Y.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Ce+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,u)=>{if(t===!1)throw new m(o(s," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!he[s]&&(he[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,u):!0}};function Kt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const u=e[i],l=u===void 0||s(u,i,e);if(l!==!0)throw new m("option "+i+" must be "+l,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const G={assertOptions:Kt,validators:Y},O=G.validators;class A{constructor(t){this.defaults=t,this.interceptors={request:new oe,response:new oe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_(this.defaults,n);const{transitional:r,paramsSerializer:o}=n;r!==void 0&&G.assertOptions(r,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1),o!==void 0&&G.assertOptions(o,{encode:O.function,serialize:O.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const i=n.headers&&a.merge(n.headers.common,n.headers[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],function(d){delete n.headers[d]}),n.headers=new g(n.headers,i);const s=[];let u=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(u=u&&d.synchronous,s.unshift(d.fulfilled,d.rejected))});const l=[];this.interceptors.response.forEach(function(d){l.push(d.fulfilled,d.rejected)});let c,f=0,p;if(!u){const h=[de.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,l),p=h.length,c=Promise.resolve(n);f<p;)c=c.then(h[f++],h[f++]);return c}p=s.length;let E=n;for(f=0;f<p;){const h=s[f++],d=s[f++];try{E=h(E)}catch(y){d.call(this,y);break}}try{c=de.call(this,E)}catch(h){return Promise.reject(h)}for(f=0,p=l.length;f<p;)c=c.then(l[f++],l[f++]);return c}getUri(t){t=_(this.defaults,t);const n=Ne(t.baseURL,t.url);return xe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){A.prototype[t]=function(n,r){return this.request(_(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,u){return this.request(_(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}A.prototype[t]=n(),A.prototype[t+"Form"]=n(!0)});class Z{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(u=>{r.subscribe(u),i=u}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,u){r.reason||(r.reason=new B(i,s,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Z(function(o){t=o}),cancel:t}}}function Gt(e){return function(n){return e.apply(null,n)}}function Xt(e){return a.isObject(e)&&e.isAxiosError===!0}function Fe(e){const t=new A(e),n=me(A.prototype.request,t);return a.extend(n,A.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Fe(_(e,o))},n}const w=Fe(T);w.Axios=A;w.CanceledError=B;w.CancelToken=Z;w.isCancel=Pe;w.VERSION=Ce;w.toFormData=z;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Gt;w.isAxiosError=Xt;w.formToJSON=e=>ke(a.isHTMLForm(e)?new FormData(e):e);function vt(e,t){const n=t&&"get";return r=>new Promise((o,i)=>{w({method:n,url:e,params:{page:r.page?r.page-1:0,size:r.pageSize,space:"bixintech"}}).then(function(s){o(s.data)}).catch(function(s){console.log(s),i(s)})})}const Qt={key:1},en=Ue({__name:"index",setup(e){const t="https://mock.data/api/mock/meta";function n(l){const c=p=>!(!(l.gender&&(l.gender===1||l.gender===2))&&p.label==="\u5220\u9664"),f=[{icon:"clarity:note-edit-line",label:"\u7F16\u8F91",onClick:s.bind(null,l)},{icon:"ant-design:delete-outlined",color:"error",label:"\u5220\u9664",onClick:u.bind(null,l)}];return f.forEach(p=>{p.ifShow=c}),f}function r(l){const c=l.map(f=>({key:f.articleid,name:f.title,age:f.id,email:f.space,address:f.desc.substring(0,10),tags:[f.tags],gender:1}));return console.log(c),c}const o={pageField:"page",sizeField:"pageSize",listField:"content",totalField:"totalElements"},[i]=De({columns:We,dataSource:$e,api:vt(t),afterFetch:r,fetchSetting:o,actionColumn:{title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0},useSearchForm:!0,searchFormConfig:{labelWidth:120,schemas:Ve,autoSubmitOnEnter:!0,submitButtonOptions:{text:"search"}}});function s(l){console.log("edit clicked!"),console.log(l)}function u(l){console.log("delete action clicked!"),console.log(l)}return(l,c)=>{const f=je("a-tag");return P(),H(J(Be),{onRegister:J(i)},{bodyCell:ee(({column:p,record:E})=>[p.key==="action"?(P(),H(J(Le),{key:0,actions:n(E)},null,8,["actions"])):p.key==="tags"?(P(),te("span",Qt,[(P(!0),te(Ie,null,Me(E.tags,h=>(P(),H(f,{key:h,color:h==="loser"?"volcano":h.length>5?"geekblue":"green"},{default:ee(()=>[ze(He(h.toUpperCase()),1)]),_:2},1032,["color"]))),128))])):Je("",!0)]),_:1},8,["onRegister"])}}});export{en as default};
