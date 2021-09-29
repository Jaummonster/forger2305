(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},"0366":function(e,t,n){var r=n("59ed");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},"0481":function(e,t,n){"use strict";var r=n("23e7"),i=n("a2bf"),s=n("7b0b"),o=n("50c4"),a=n("a691"),c=n("65f0");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=s(this),n=o(t.length),r=c(t,0);return r.length=i(r,t,t,n,0,void 0===e?1:a(e)),r}})},"04d1":function(e,t,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},"0538":function(e,t,n){"use strict";var r=n("59ed"),i=n("861d"),s=[].slice,o={},a=function(e,t,n){if(!(t in o)){for(var r=[],i=0;i<t;i++)r[i]="a["+i+"]";o[t]=Function("C,a","return new C("+r.join(",")+")")}return o[t](e,n)};e.exports=Function.bind||function(e){var t=r(this),n=s.call(arguments,1),o=function(){var r=n.concat(s.call(arguments));return this instanceof o?a(t,r.length,r):t.apply(e,r)};return i(t.prototype)&&(o.prototype=t.prototype),o}},"057f":function(e,t,n){var r=n("fc6a"),i=n("241c").f,s={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return i(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==s.call(e)?a(e):i(r(e))}},"06c5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var r=n("6b75");function i(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(e,t):void 0}}},"06cf":function(e,t,n){var r=n("83ab"),i=n("d1e7"),s=n("5c6c"),o=n("fc6a"),a=n("a04b"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=o(e),t=a(t),u)try{return l(e,t)}catch(n){}if(c(e,t))return s(!i.f.call(e,t),e[t])}},"0789":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return d}));n("99af");var r=n("d9f7");function i(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return(e=Array()).concat.apply(e,[t].concat(r))}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render:function(t,n){var s="transition".concat(n.props.group?"-group":""),o={props:{name:e,mode:n.props.mode},on:{beforeEnter:function(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=i(o.on.leave,(function(e){var t=e.offsetTop,n=e.offsetLeft,r=e.offsetWidth,i=e.offsetHeight;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=n+"px",e.style.width=r+"px",e.style.height=i+"px"})),o.on.afterLeave=i(o.on.afterLeave,(function(e){if(e&&e._transitionInitialStyles){var t=e._transitionInitialStyles,n=t.position,r=t.top,i=t.left,s=t.width,o=t.height;delete e._transitionInitialStyles,e.style.position=n||"",e.style.top=r||"",e.style.left=i||"",e.style.width=s||"",e.style.height=o||""}}))),n.props.hideOnLeave&&(o.on.leave=i(o.on.leave,(function(e){e._initialDisplay=e.style.display,e.style.display="none"})),o.on.afterLeave=i(o.on.afterLeave,(function(e){e&&(e.style.display=e._initialDisplay||"")}))),t(s,Object(r["a"])(n.data,o),n.children)}}}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:e,functional:!0,props:{mode:{type:String,default:n}},render:function(n,i){return n("transition",Object(r["a"])(i.data,{props:{name:e},on:t}),i.children)}}}var a=n("ade3"),c=n("80d2"),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?"width":"height",r="offset".concat(Object(c["u"])(n));return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle=Object(a["a"])({transition:e.style.transition,overflow:e.style.overflow},n,e.style[n])},enter:function(t){var i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";var s="".concat(t[r],"px");t.style[n]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((function(){t.style[n]=s}))},afterEnter:s,enterCancelled:s,leave:function(e){e._initialStyle=Object(a["a"])({transition:"",overflow:e.style.overflow},n,e.style[n]),e.style.overflow="hidden",e.style[n]="".concat(e[r],"px"),e.offsetHeight,requestAnimationFrame((function(){return e.style[n]="0"}))},afterLeave:i,leaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(e){var t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}},l=(s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition"),s("fade-transition")),h=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),d=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",u()));o("expand-x-transition",u("",!0))},"07ac":function(e,t,n){var r=n("23e7"),i=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return i(e)}})},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Au})),n.d(t,"b",(function(){return kc})),n.d(t,"c",(function(){return hc})),n.d(t,"d",(function(){return ec})),n.d(t,"e",(function(){return su})),n.d(t,"f",(function(){return Sc})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return xc})),n.d(t,"i",(function(){return ou})),n.d(t,"j",(function(){return au})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return Ru})),n.d(t,"m",(function(){return Ba})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return z})),n.d(t,"p",(function(){return Qa})),n.d(t,"q",(function(){return b})),n.d(t,"r",(function(){return K})),n.d(t,"s",(function(){return m})),n.d(t,"t",(function(){return Ha})),n.d(t,"u",(function(){return Hu})),n.d(t,"v",(function(){return tl})),n.d(t,"w",(function(){return el})),n.d(t,"x",(function(){return yc})),n.d(t,"y",(function(){return rc})),n.d(t,"z",(function(){return ic})),n.d(t,"A",(function(){return Za})),n.d(t,"B",(function(){return zu})),n.d(t,"C",(function(){return Xu})),n.d(t,"D",(function(){return _c})),n.d(t,"E",(function(){return sc})),n.d(t,"F",(function(){return mc})),n.d(t,"G",(function(){return gc})),n.d(t,"H",(function(){return wc})),n.d(t,"I",(function(){return Su})),n.d(t,"J",(function(){return Eu})),n.d(t,"K",(function(){return fc})),n.d(t,"L",(function(){return Gu})),n.d(t,"M",(function(){return Pu})),n.d(t,"N",(function(){return Mu})),n.d(t,"O",(function(){return Fu})),n.d(t,"P",(function(){return Vu})),n.d(t,"Q",(function(){return $u})),n.d(t,"R",(function(){return Uu})),n.d(t,"S",(function(){return nl})),n.d(t,"T",(function(){return yu})),n.d(t,"U",(function(){return bu})),n.d(t,"V",(function(){return Ic})),n.d(t,"W",(function(){return Tc})),n.d(t,"X",(function(){return Ku})),n.d(t,"Y",(function(){return Wu})),n.d(t,"Z",(function(){return gu})),n.d(t,"ab",(function(){return du})),n.d(t,"bb",(function(){return ac})),n.d(t,"cb",(function(){return oc})),n.d(t,"db",(function(){return Yu})),n.d(t,"eb",(function(){return Zu})),n.d(t,"fb",(function(){return Bu})),n.d(t,"gb",(function(){return d})),n.d(t,"hb",(function(){return uu})),n.d(t,"ib",(function(){return Iu})),n.d(t,"jb",(function(){return _u})),n.d(t,"kb",(function(){return qu})),n.d(t,"lb",(function(){return bc})),n.d(t,"mb",(function(){return pu}));var r=n("5606"),i=n("ffa6"),s=n("4fc1"),o=n("1fd5"),a=n("8f6b");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="9.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new s["b"]("@firebase/firestore");function h(){return l.logLevel}function d(e){l.setLogLevel(e)}function f(e,...t){if(l.logLevel<=s["a"].DEBUG){const n=t.map(g);l.debug(`Firestore (${u}): ${e}`,...n)}}function p(e,...t){if(l.logLevel<=s["a"].ERROR){const n=t.map(g);l.error(`Firestore (${u}): ${e}`,...n)}}function m(e,...t){if(l.logLevel<=s["a"].WARN){const n=t.map(g);l.warn(`Firestore (${u}): ${e}`,...n)}}function g(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+e;throw p(t),new Error(t)}function y(e,t){e||v()}function b(e,t){e||v()}function w(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+e}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class k{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class O{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(f("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(y("string"==typeof t.accessToken),new E(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return y(null===e||"string"==typeof e),new c(e)}}class x{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class C{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new x(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A.T=-1;class L{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function R(e,t){return e<t?-1:e>t?1:0}function D(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function P(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return j.fromMillis(Date.now())}static fromDate(e){return j.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new j(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new j(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function V(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function $(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends U{construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new I(_.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends U{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new I(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new I(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new I(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new I(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.fields=e,e.sort(z.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return D(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new W(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new W(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}W.EMPTY_BYTE_STRING=new W("");const G=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Q(e){if(y(!!e),"string"==typeof e){let t=0;const n=G.exec(e);if(y(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:J(e.seconds),nanos:J(e.nanos)}}function J(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Y(e){return"string"==typeof e?W.fromBase64String(e):W.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Z(e){const t=e.mapValue.fields.__previous_value__;return X(t)?Z(t):t}function ee(e){const t=Q(e.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return null==e}function ne(e){return 0===e&&1/e==-1/0}function re(e){return"number"==typeof e&&Number.isInteger(e)&&!ne(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(B.fromString(e))}static fromName(e){return new ie(B.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new B(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?X(e)?4:10:v()}function oe(e,t){const n=se(e);if(n!==se(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ee(e).isEqual(ee(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Q(e.timestampValue),r=Q(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Y(e.bytesValue).isEqual(Y(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return J(e.geoPointValue.latitude)===J(t.geoPointValue.latitude)&&J(e.geoPointValue.longitude)===J(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return J(e.integerValue)===J(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=J(e.doubleValue),r=J(t.doubleValue);return n===r?ne(n)===ne(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return D(e.arrayValue.values||[],t.arrayValue.values||[],oe);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(F(n)!==F(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!oe(n[i],r[i])))return!1;return!0}(e,t);default:return v()}}function ae(e,t){return void 0!==(e.values||[]).find(e=>oe(e,t))}function ce(e,t){const n=se(e),r=se(t);if(n!==r)return R(n,r);switch(n){case 0:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=J(e.integerValue||e.doubleValue),r=J(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ue(e.timestampValue,t.timestampValue);case 4:return ue(ee(e),ee(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Y(e),r=Y(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=R(n[i],r[i]);if(0!==e)return e}return R(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=R(J(e.latitude),J(t.latitude));return 0!==n?n:R(J(e.longitude),J(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ce(n[i],r[i]);if(e)return e}return R(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=R(r[o],s[o]);if(0!==e)return e;const t=ce(n[r[o]],i[s[o]]);if(0!==t)return t}return R(r.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function ue(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);const n=Q(e),r=Q(t),i=R(n.seconds,r.seconds);return 0!==i?i:R(n.nanos,r.nanos)}function le(e){return he(e)}function he(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Q(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Y(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ie.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=he(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${he(e.fields[i])}`;return n+"}"}(e.mapValue):v();var t,n}function de(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function fe(e){return!!e&&"integerValue"in e}function pe(e){return!!e&&"arrayValue"in e}function me(e){return!!e&&"nullValue"in e}function ge(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ve(e){return!!e&&"mapValue"in e}function ye(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return V(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=ye(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ye(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.value=e}static empty(){return new be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ve(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ye(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ye(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ve(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return oe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ve(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){V(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new be(ye(this.value))}}function we(e){const t=[];return V(e.fields,(e,n)=>{const r=new z([e]);if(ve(n)){const e=we(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new H(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _e{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new _e(e,0,M.min(),be.empty(),0)}static newFoundDocument(e,t,n){return new _e(e,1,t,n,0)}static newNoDocument(e,t){return new _e(e,2,t,be.empty(),0)}static newUnknownDocument(e,t){return new _e(e,3,t,be.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof _e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new _e(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function Te(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Ie(e,t,n,r,i,s,o)}function Ee(e){const t=w(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Ce(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),te(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Ve(t.startAt)),t.endAt&&(e+="|ub:",e+=Ve(t.endAt)),t.A=e}return t.A}function Se(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${le(t.value)}`;var t}).join(", ")}]`),te(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Ve(e.startAt)),e.endAt&&(t+=", endAt: "+Ve(e.endAt)),`Target(${t})`}function ke(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Ue(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!oe(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qe(e.startAt,t.startAt)&&qe(e.endAt,t.endAt)}function Oe(e){return ie.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class xe extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new Ae(e,t,n):"array-contains"===t?new De(e,n):"in"===t?new Pe(e,n):"not-in"===t?new je(e,n):"array-contains-any"===t?new Me(e,n):new xe(e,t,n)}static R(e,t,n){return"in"===t?new Ne(e,n):new Le(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(ce(t,this.value)):null!==t&&se(this.value)===se(t)&&this.P(ce(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Ce(e){return e.field.canonicalString()+e.op.toString()+le(e.value)}class Ae extends xe{constructor(e,t,n){super(e,t,n),this.key=ie.fromName(n.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.P(t)}}class Ne extends xe{constructor(e,t){super(e,"in",t),this.keys=Re("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Le extends xe{constructor(e,t){super(e,"not-in",t),this.keys=Re("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Re(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ie.fromName(e.referenceValue))}class De extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pe(t)&&ae(t.arrayValue,this.value)}}class Pe extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ae(this.value.arrayValue,t)}}class je extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ae(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ae(this.value.arrayValue,t)}}class Me extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pe(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ae(this.value.arrayValue,e))}}class Fe{constructor(e,t){this.position=e,this.before=t}}function Ve(e){return`${e.before?"b":"a"}:${e.position.map(e=>le(e)).join(",")}`}class $e{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ue(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Be(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ie.comparator(ie.fromName(o.referenceValue),n.key):ce(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function qe(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!oe(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function He(e,t,n,r,i,s,o,a){return new ze(e,t,n,r,i,s,o,a)}function Ke(e){return new ze(e)}function We(e){return!te(e.limit)&&"F"===e.limitType}function Ge(e){return!te(e.limit)&&"L"===e.limitType}function Qe(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Je(e){for(const t of e.filters)if(t.v())return t.field;return null}function Ye(e){return null!==e.collectionGroup}function Xe(e){const t=w(e);if(null===t.V){t.V=[];const e=Je(t),n=Qe(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new $e(e)),t.V.push(new $e(z.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new $e(z.keyField(),e))}}}return t.V}function Ze(e){const t=w(e);if(!t.S)if("F"===t.limitType)t.S=Te(t.path,t.collectionGroup,Xe(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Xe(t)){const t="desc"===i.dir?"asc":"desc";e.push(new $e(i.field,t))}const n=t.endAt?new Fe(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Fe(t.startAt.position,!t.startAt.before):null;t.S=Te(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.S}function et(e,t,n){return new ze(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tt(e,t){return ke(Ze(e),Ze(t))&&e.limitType===t.limitType}function nt(e){return`${Ee(Ze(e))}|lt:${e.limitType}`}function rt(e){return`Query(target=${Se(Ze(e))}; limitType=${e.limitType})`}function it(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ie.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Be(e.startAt,Xe(e),t))&&(!e.endAt||!Be(e.endAt,Xe(e),t))}(e,t)}function st(e){return(t,n)=>{let r=!1;for(const i of Xe(e)){const e=ot(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ot(e,t,n){const r=e.field.isKeyField()?ie.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ce(r,i):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ne(t)?"-0":t}}function ct(e){return{integerValue:""+e}}function ut(e,t){return re(t)?ct(t):at(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this._=void 0}}function ht(e,t,n){return e instanceof pt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof mt?gt(e,t):e instanceof vt?yt(e,t):function(e,t){const n=ft(e,t),r=wt(n)+wt(e.C);return fe(n)&&fe(e.C)?ct(r):at(e.N,r)}(e,t)}function dt(e,t,n){return e instanceof mt?gt(e,t):e instanceof vt?yt(e,t):n}function ft(e,t){return e instanceof bt?fe(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class pt extends lt{}class mt extends lt{constructor(e){super(),this.elements=e}}function gt(e,t){const n=_t(t);for(const r of e.elements)n.some(e=>oe(e,r))||n.push(r);return{arrayValue:{values:n}}}class vt extends lt{constructor(e){super(),this.elements=e}}function yt(e,t){let n=_t(t);for(const r of e.elements)n=n.filter(e=>!oe(e,r));return{arrayValue:{values:n}}}class bt extends lt{constructor(e,t){super(),this.N=e,this.C=t}}function wt(e){return J(e.integerValue||e.doubleValue)}function _t(e){return pe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.field=e,this.transform=t}}function Tt(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof mt&&t instanceof mt||e instanceof vt&&t instanceof vt?D(e.elements,t.elements,oe):e instanceof bt&&t instanceof bt?oe(e.C,t.C):e instanceof pt&&t instanceof pt}(e.transform,t.transform)}class Et{constructor(e,t){this.version=e,this.transformResults=t}}class St{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ot{}function xt(e,t,n){e instanceof Rt?function(e,t,n){const r=e.value.clone(),i=jt(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Dt?function(e,t,n){if(!kt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=jt(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Pt(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ct(e,t,n){e instanceof Rt?function(e,t,n){if(!kt(e.precondition,t))return;const r=e.value.clone(),i=Mt(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Lt(t),r).setHasLocalMutations()}(e,t,n):e instanceof Dt?function(e,t,n){if(!kt(e.precondition,t))return;const r=Mt(e.fieldTransforms,n,t),i=t.data;i.setAll(Pt(e)),i.setAll(r),t.convertToFoundDocument(Lt(t),i).setHasLocalMutations()}(e,t,n):function(e,t){kt(e.precondition,t)&&t.convertToNoDocument(M.min())}(e,t)}function At(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=ft(r.transform,e||null);null!=i&&(null==n&&(n=be.empty()),n.set(r.field,i))}return n||null}function Nt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&D(e,t,(e,t)=>Tt(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Lt(e){return e.isFoundDocument()?e.version:M.min()}class Rt extends Ot{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Dt extends Ot{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Pt(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function jt(e,t,n){const r=new Map;y(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,dt(o,a,n[i]))}return r}function Mt(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,ht(e,s,t))}return r}class Ft extends Ot{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Vt extends Ot{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut,Bt;function qt(e){switch(e){case _.OK:return v();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0;default:return v()}}function zt(e){if(void 0===e)return p("GRPC error has no .code"),_.UNKNOWN;switch(e){case Ut.OK:return _.OK;case Ut.CANCELLED:return _.CANCELLED;case Ut.UNKNOWN:return _.UNKNOWN;case Ut.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ut.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ut.INTERNAL:return _.INTERNAL;case Ut.UNAVAILABLE:return _.UNAVAILABLE;case Ut.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ut.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ut.NOT_FOUND:return _.NOT_FOUND;case Ut.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ut.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ut.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ut.ABORTED:return _.ABORTED;case Ut.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ut.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ut.DATA_LOSS:return _.DATA_LOSS;default:return v()}}(Bt=Ut||(Ut={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(e,t){this.comparator=e,this.root=t||Wt.EMPTY}insert(e,t){return new Ht(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kt(this.root,e,this.comparator,!0)}}class Kt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Wt.RED,this.left=null!=r?r:Wt.EMPTY,this.right=null!=i?i:Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Wt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Wt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1,Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Wt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(e){this.comparator=e,this.data=new Ht(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qt(this.data.getIterator())}getIteratorFrom(e){return new Qt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Gt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Gt(this.comparator);return t.data=e,t}}class Qt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Ht(ie.comparator);function Yt(){return Jt}const Xt=new Ht(ie.comparator);function Zt(){return Xt}const en=new Ht(ie.comparator);function tn(){return en}const nn=new Gt(ie.comparator);function rn(...e){let t=nn;for(const n of e)t=t.add(n);return t}const sn=new Gt(R);function on(){return sn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,cn.createSynthesizedTargetChangeForCurrentChange(e,t)),new an(M.min(),n,on(),Yt(),rn())}}class cn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new cn(W.EMPTY_BYTE_STRING,t,rn(),rn(),rn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,n,r){this.k=e,this.removedTargetIds=t,this.key=n,this.$=r}}class ln{constructor(e,t){this.targetId=e,this.O=t}}class hn{constructor(e,t,n=W.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class dn{constructor(){this.F=0,this.M=mn(),this.L=W.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=rn(),t=rn(),n=rn();return this.M.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new cn(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=mn()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class fn{constructor(e){this.tt=e,this.et=new Map,this.nt=Yt(),this.st=pn(),this.it=new Gt(R)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ct(e){this.forEachTarget(e,t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((e,n)=>{this.ht(n)&&t(n)})}ft(e){const t=e.targetId,n=e.O.count,r=this.dt(t);if(r){const e=r.target;if(Oe(e))if(0===n){const n=new ie(e.path);this.at(t,n,_e.newNoDocument(n,M.min()))}else y(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&Oe(i.target)){const t=new ie(i.target.path);null!==this.nt.get(t)||this.gt(r,t)||this.at(r,t,_e.newNoDocument(t,e))}n.K&&(t.set(r,n.W()),n.G())}});let n=rn();this.st.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.dt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))});const r=new an(e,t,this.it,this.nt,n);return this.nt=Yt(),this.st=pn(),this.it=new Gt(R),r}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}at(e,t,n){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,t)?r.H(t,1):r.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new dn,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new Gt(R),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||f("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new dn),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function pn(){return new Ht(ie.comparator)}function mn(){return new Ht(ie.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),vn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class yn{constructor(e,t){this.databaseId=e,this.D=t}}function bn(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wn(e,t){return e.D?t.toBase64():t.toUint8Array()}function _n(e,t){return bn(e,t.toTimestamp())}function In(e){return y(!!e),M.fromTimestamp(function(e){const t=Q(e);return new j(t.seconds,t.nanos)}(e))}function Tn(e,t){return function(e){return new B(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function En(e){const t=B.fromString(e);return y(Xn(t)),t}function Sn(e,t){return Tn(e.databaseId,t.path)}function kn(e,t){const n=En(t);if(n.get(1)!==e.databaseId.projectId)throw new I(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new I(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ie(An(n))}function On(e,t){return Tn(e.databaseId,t)}function xn(e){const t=En(e);return 4===t.length?B.emptyPath():An(t)}function Cn(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function An(e){return y(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Nn(e,t,n){return{name:Sn(e,t),fields:n.value.mapValue.fields}}function Ln(e,t,n){const r=kn(e,t.name),i=In(t.updateTime),s=new be({mapValue:{fields:t.fields}}),o=_e.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Rn(e,t){return"found"in t?function(e,t){y(!!t.found),t.found.name,t.found.updateTime;const n=kn(e,t.found.name),r=In(t.found.updateTime),i=new be({mapValue:{fields:t.found.fields}});return _e.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){y(!!t.missing),y(!!t.readTime);const n=kn(e,t.missing),r=In(t.readTime);return _e.newNoDocument(n,r)}(e,t):v()}function Dn(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.D?(y(void 0===t||"string"==typeof t),W.fromBase64String(t||"")):(y(void 0===t||t instanceof Uint8Array),W.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?_.UNKNOWN:zt(e.code);return new I(t,e.message||"")}(o);n=new hn(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=kn(e,r.document.name),s=In(r.document.updateTime),o=new be({mapValue:{fields:r.document.fields}}),a=_e.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new un(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=kn(e,r.document),s=r.readTime?In(r.readTime):M.min(),o=_e.newNoDocument(i,s),a=r.removedTargetIds||[];n=new un([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=kn(e,r.document),s=r.removedTargetIds||[];n=new un([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new $t(r),s=e.targetId;n=new ln(s,i)}}return n}function Pn(e,t){let n;if(t instanceof Rt)n={update:Nn(e,t.key,t.value)};else if(t instanceof Ft)n={delete:Sn(e,t.key)};else if(t instanceof Dt)n={update:Nn(e,t.key,t.data),updateMask:Yn(t.fieldMask)};else{if(!(t instanceof Vt))return v();n={verify:Sn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof pt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof mt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof vt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof bt)return{fieldPath:t.field.canonicalString(),increment:n.C};throw v()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:_n(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v()}(e,t.precondition)),n}function jn(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?St.updateTime(In(e.updateTime)):void 0!==e.exists?St.exists(e.exists):St.none()}(t.currentDocument):St.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)y("REQUEST_TIME"===t.setToServerValue),n=new pt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new mt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new vt(e)}else"increment"in t?n=new bt(e,t.increment):v();const r=z.fromServerFormat(t.fieldPath);return new It(r,n)}(e,t)):[];if(t.update){t.update.name;const i=kn(e,t.update.name),s=new be({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new H(t.map(e=>z.fromServerFormat(e)))}(t.updateMask);return new Dt(i,s,e,n,r)}return new Rt(i,s,n,r)}if(t.delete){const r=kn(e,t.delete);return new Ft(r,n)}if(t.verify){const r=kn(e,t.verify);return new Vt(r,n)}return v()}function Mn(e,t){return e&&e.length>0?(y(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?In(e.updateTime):In(t);return n.isEqual(M.min())&&(n=In(t)),new Et(n,e.transformResults||[])}(e,t))):[]}function Fn(e,t){return{documents:[On(e,t.path)]}}function Vn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=On(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=On(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(ge(e.value))return{unaryFilter:{field:Wn(e.field),op:"IS_NAN"}};if(me(e.value))return{unaryFilter:{field:Wn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ge(e.value))return{unaryFilter:{field:Wn(e.field),op:"IS_NOT_NAN"}};if(me(e.value))return{unaryFilter:{field:Wn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(e.field),op:Kn(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Wn(e.field),direction:Hn(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.D||te(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=qn(t.startAt)),t.endAt&&(n.structuredQuery.endAt=qn(t.endAt)),n}function $n(e){let t=xn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Bn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new $e(Gn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,te(t)?null:t}(n.limit));let c=null;n.startAt&&(c=zn(n.startAt));let u=null;return n.endAt&&(u=zn(n.endAt)),He(t,i,o,s,a,"F",c,u)}function Un(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Bn(e){return e?void 0!==e.unaryFilter?[Jn(e)]:void 0!==e.fieldFilter?[Qn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>Bn(e)).reduce((e,t)=>e.concat(t)):v():[]}function qn(e){return{before:e.before,values:e.position}}function zn(e){const t=!!e.before,n=e.values||[];return new Fe(n,t)}function Hn(e){return gn[e]}function Kn(e){return vn[e]}function Wn(e){return{fieldPath:e.canonicalString()}}function Gn(e){return z.fromServerFormat(e.fieldPath)}function Qn(e){return xe.create(Gn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}function Jn(e){switch(e.unaryFilter.op){case"IS_NAN":Gn(e.unaryFilter.field);return xe.create(r["_removeServiceInstance"],"==",{doubleValue:NaN});case"IS_NULL":Gn(e.unaryFilter.field);return xe.create(r["_registerComponent"],"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":Gn(e.unaryFilter.field);return xe.create(r["registerVersion"],"!=",{doubleValue:NaN});case"IS_NOT_NULL":Gn(e.unaryFilter.field);return xe.create(r["SDK_VERSION"],"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return v()}}function Yn(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Xn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=tr(t)),t=er(e.get(n),t);return tr(t)}function er(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function tr(e){return e+""}function nr(e){const t=e.length;if(y(t>=2),2===t)return y(""===e.charAt(0)&&""===e.charAt(1)),B.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&v(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:v()}s=t+2}return new B(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class ir{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}ir.store="owner",ir.key="owner";class sr{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}sr.store="mutationQueues",sr.keyPath="userId";class or{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}or.store="mutations",or.keyPath="batchId",or.userMutationsIndex="userMutationsIndex",or.userMutationsKeyPath=["userId","batchId"];class ar{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,Zn(t)]}static key(e,t,n){return[e,Zn(t),n]}}ar.store="documentMutations",ar.PLACEHOLDER=new ar;class cr{constructor(e,t){this.path=e,this.readTime=t}}class ur{constructor(e,t){this.path=e,this.version=t}}class lr{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}lr.store="remoteDocuments",lr.readTimeIndex="readTimeIndex",lr.readTimeIndexPath="readTime",lr.collectionReadTimeIndex="collectionReadTimeIndex",lr.collectionReadTimeIndexPath=["parentPath","readTime"];class hr{constructor(e){this.byteSize=e}}hr.store="remoteDocumentGlobal",hr.key="remoteDocumentGlobalKey";class dr{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}dr.store="targets",dr.keyPath="targetId",dr.queryTargetsIndexName="queryTargetsIndex",dr.queryTargetsKeyPath=["canonicalId","targetId"];class fr{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}fr.store="targetDocuments",fr.keyPath=["targetId","path"],fr.documentTargetsIndex="documentTargetsIndex",fr.documentTargetsKeyPath=["path","targetId"];class pr{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}pr.key="targetGlobalKey",pr.store="targetGlobal";class mr{constructor(e,t){this.collectionId=e,this.parent=t}}mr.store="collectionParents",mr.keyPath=["collectionId","parent"];class gr{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}gr.store="clientMetadata",gr.keyPath="clientId";class vr{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}vr.store="bundles",vr.keyPath="bundleId";class yr{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}yr.store="namedQueries",yr.keyPath="name";const br=[sr.store,or.store,ar.store,lr.store,dr.store,ir.store,pr.store,fr.store,gr.store,hr.store,mr.store,vr.store,yr.store],wr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _r{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ir((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ir?t:Ir.resolve(t)}catch(e){return Ir.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ir.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ir.reject(t)}static resolve(e){return new Ir((t,n)=>{t(e)})}static reject(e){return new Ir((t,n)=>{n(e)})}static waitFor(e){return new Ir((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Ir.resolve(!1);for(const n of e)t=t.next(e=>e?Ir.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.Tt=new T,this.transaction.oncomplete=()=>{this.Tt.resolve()},this.transaction.onabort=()=>{t.error?this.Tt.reject(new kr(e,t.error)):this.Tt.resolve()},this.transaction.onerror=t=>{const n=Nr(t.target.error);this.Tt.reject(new kr(e,n))}}static open(e,t,n,r){try{return new Tr(t,e.transaction(r,n))}catch(e){throw new kr(t,e)}}get It(){return this.Tt.promise}abort(e){e&&this.Tt.reject(e),this.aborted||(f("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new xr(t)}}class Er{constructor(e,t,n){this.name=e,this.version=t,this.At=n,12.2===Er.Rt(Object(o["l"])())&&p("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return f("SimpleDb","Removing database:",e),Cr(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!Object(o["r"])())return!1;if(Er.Pt())return!0;const e=Object(o["l"])(),t=Er.Rt(e),n=0<t&&t<10,r=Er.vt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static Pt(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===t?void 0:t.Vt)}static St(e,t){return e.store(t)}static Rt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(e){return this.db||(f("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new kr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new I(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new I(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new kr(e,r))},r.onupgradeneeded=e=>{f("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.At.Ct(t,r.transaction,e.oldVersion,this.version).next(()=>{f("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=e=>this.Nt(e)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Dt(e);const t=Tr.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).catch(e=>(t.abort(e),Ir.reject(e))).toPromise();return s.catch(()=>{}),await t.It,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(f("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Sr{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return Cr(this.kt.delete())}}class kr extends I{constructor(e,t){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Or(e){return"IndexedDbTransactionError"===e.name}class xr{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(f("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(f("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Cr(n)}add(e){return f("SimpleDb","ADD",this.store.name,e,e),Cr(this.store.add(e))}get(e){return Cr(this.store.get(e)).next(t=>(void 0===t&&(t=null),f("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return f("SimpleDb","DELETE",this.store.name,e),Cr(this.store.delete(e))}count(){return f("SimpleDb","COUNT",this.store.name),Cr(this.store.count())}Lt(e,t){const n=this.cursor(this.options(e,t)),r=[];return this.Bt(n,(e,t)=>{r.push(t)}).next(()=>r)}Ut(e,t){f("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.qt=!1;const r=this.cursor(n);return this.Bt(r,(e,t,n)=>n.delete())}Kt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Bt(r,t)}jt(e){const t=this.cursor({});return new Ir((n,r)=>{t.onerror=e=>{const t=Nr(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}Bt(e,t){const n=[];return new Ir((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Sr(i),o=t(i.primaryKey,i.value,s);if(o instanceof Ir){const e=o.catch(e=>(s.done(),Ir.reject(e)));n.push(e)}s.isDone?r():null===s.Ft?i.continue():i.continue(s.Ft)}}).next(()=>Ir.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.qt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Cr(e){return new Ir((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Nr(e.target.error);n(t)}})}let Ar=!1;function Nr(e){const t=Er.Rt(Object(o["l"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ar||(Ar=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends _r{constructor(e,t){super(),this.Qt=e,this.currentSequenceNumber=t}}function Rr(e,t){const n=w(e);return Er.St(n.Qt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&xt(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Ct(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Ct(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(M.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),rn())}isEqual(e){return this.batchId===e.batchId&&D(this.mutations,e.mutations,(e,t)=>Nt(e,t))&&D(this.baseMutations,e.baseMutations,(e,t)=>Nt(e,t))}}class Pr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){y(e.mutations.length===n.length);let r=tn();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Pr(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,n,r,i=M.min(),s=M.min(),o=W.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.Wt=e}}function Fr(e,t){if(t.document)return Ln(e.Wt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=ie.fromSegments(t.noDocument.path),n=qr(t.noDocument.readTime),r=_e.newNoDocument(e,n);return t.hasCommittedMutations?r.setHasCommittedMutations():r}if(t.unknownDocument){const e=ie.fromSegments(t.unknownDocument.path),n=qr(t.unknownDocument.version);return _e.newUnknownDocument(e,n)}return v()}function Vr(e,t,n){const r=$r(n),i=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n=function(e,t){return{name:Sn(e,t.key),fields:t.data.value.mapValue.fields,updateTime:bn(e,t.version.toTimestamp())}}(e.Wt,t),s=t.hasCommittedMutations;return new lr(null,null,n,s,r,i)}if(t.isNoDocument()){const e=t.key.path.toArray(),n=Br(t.version),s=t.hasCommittedMutations;return new lr(null,new cr(e,n),null,s,r,i)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=Br(t.version);return new lr(new ur(e,n),null,null,!0,r,i)}return v()}function $r(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Ur(e){const t=new j(e[0],e[1]);return M.fromTimestamp(t)}function Br(e){const t=e.toTimestamp();return new rr(t.seconds,t.nanoseconds)}function qr(e){const t=new j(e.seconds,e.nanoseconds);return M.fromTimestamp(t)}function zr(e,t){const n=(t.baseMutations||[]).map(t=>jn(e.Wt,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>jn(e.Wt,t)),i=j.fromMillis(t.localWriteTimeMs);return new Dr(t.batchId,i,n,r)}function Hr(e){const t=qr(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?qr(e.lastLimboFreeSnapshotVersion):M.min();let r;var i;return void 0!==e.query.documents?(y(1===(i=e.query).documents.length),r=Ze(Ke(xn(i.documents[0])))):r=function(e){return Ze($n(e))}(e.query),new jr(r,e.targetId,0,e.lastListenSequenceNumber,t,n,W.fromBase64String(e.resumeToken))}function Kr(e,t){const n=Br(t.snapshotVersion),r=Br(t.lastLimboFreeSnapshotVersion);let i;i=Oe(t.target)?Fn(e.Wt,t.target):Vn(e.Wt,t.target);const s=t.resumeToken.toBase64();return new dr(t.targetId,Ee(t.target),n,s,t.sequenceNumber,r,i)}function Wr(e){const t=$n({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?et(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{getBundleMetadata(e,t){return Qr(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:qr(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Qr(e).put({bundleId:(n=t).id,createTime:Br(In(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Jr(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Wr(t.bundledQuery),readTime:qr(t.readTime)};var t})}saveNamedQuery(e,t){return Jr(e).put(function(e){return{name:e.name,readTime:Br(In(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Qr(e){return Rr(e,vr.store)}function Jr(e){return Rr(e,yr.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.Gt=new Xr}addToCollectionParentIndex(e,t){return this.Gt.add(t),Ir.resolve()}getCollectionParents(e,t){return Ir.resolve(this.Gt.getEntries(t))}}class Xr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Gt(B.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Gt(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.zt=new Xr}addToCollectionParentIndex(e,t){if(!this.zt.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.zt.add(t)});const i={collectionId:n,parent:Zn(r)};return ei(e).put(i)}return Ir.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[P(t),""],!1,!0);return ei(e).Lt(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(nr(r.parent))}return n})}}function ei(e){return Rr(e,mr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ni{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ni(e,ni.DEFAULT_COLLECTION_PERCENTILE,ni.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e,t,n){const r=e.store(or.store),i=e.store(ar.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Kt({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{y(1===a)}));const u=[];for(const l of n.mutations){const e=ar.key(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Ir.waitFor(s).next(()=>u)}function ii(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw v();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni.DEFAULT_COLLECTION_PERCENTILE=10,ni.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ni.DEFAULT=new ni(41943040,ni.DEFAULT_COLLECTION_PERCENTILE,ni.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ni.DISABLED=new ni(-1,0,0);class si{constructor(e,t,n,r){this.userId=e,this.N=t,this.Ht=n,this.referenceDelegate=r,this.Jt={}}static Yt(e,t,n,r){y(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new si(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ai(e).Kt({index:or.userMutationsIndex,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=ci(e),s=ai(e);return s.add({}).next(o=>{y("number"==typeof o);const a=new Dr(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>Pn(e.Wt,t)),i=n.mutations.map(t=>Pn(e.Wt,t));return new or(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.N,this.userId,a),u=[];let l=new Gt((e,t)=>R(e.canonicalString(),t.canonicalString()));for(const e of r){const t=ar.key(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,ar.PLACEHOLDER))}return l.forEach(t=>{u.push(this.Ht.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Jt[o]=a.keys()}),Ir.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return ai(e).get(t).next(e=>e?(y(e.userId===this.userId),zr(this.N,e)):null)}Xt(e,t){return this.Jt[t]?Ir.resolve(this.Jt[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Jt[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ai(e).Kt({index:or.userMutationsIndex,range:r},(e,t,r)=>{t.userId===this.userId&&(y(t.batchId>=n),i=zr(this.N,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ai(e).Kt({index:or.userMutationsIndex,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ai(e).Lt(or.userMutationsIndex,t).next(e=>e.map(e=>zr(this.N,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ar.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return ci(e).Kt({range:r},(n,r,s)=>{const[o,a,c]=n,u=nr(a);if(o===this.userId&&t.path.isEqual(u))return ai(e).get(c).next(e=>{if(!e)throw v();y(e.userId===this.userId),i.push(zr(this.N,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Gt(R);const r=[];return t.forEach(t=>{const i=ar.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=ci(e).Kt({range:s},(e,r,i)=>{const[s,o,a]=e,c=nr(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),Ir.waitFor(r).next(()=>this.Zt(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=ar.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Gt(R);return ci(e).Kt({range:s},(e,t,i)=>{const[s,a,c]=e,u=nr(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.Zt(e,o))}Zt(e,t){const n=[],r=[];return t.forEach(t=>{r.push(ai(e).get(t).next(e=>{if(null===e)throw v();y(e.userId===this.userId),n.push(zr(this.N,e))}))}),Ir.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return ri(e.Qt,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.te(t.batchId)}),Ir.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Ir.resolve();const n=IDBKeyRange.lowerBound(ar.prefixForUser(this.userId)),r=[];return ci(e).Kt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=nr(e[1]);r.push(t)}else n.done()}).next(()=>{y(0===r.length)})})}containsKey(e,t){return oi(e,this.userId,t)}ee(e){return ui(e).get(this.userId).next(e=>e||new sr(this.userId,-1,""))}}function oi(e,t,n){const r=ar.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ci(e).Kt({range:s,qt:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function ai(e){return Rr(e,or.store)}function ci(e){return Rr(e,ar.store)}function ui(e){return Rr(e,sr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new li(0)}static ie(){return new li(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.referenceDelegate=e,this.N=t}allocateTargetId(e){return this.re(e).next(t=>{const n=new li(t.highestTargetId);return t.highestTargetId=n.next(),this.oe(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(e=>M.fromTimestamp(new j(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.re(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.oe(e,r)))}addTargetData(e,t){return this.ae(e,t).next(()=>this.re(e).next(n=>(n.targetCount+=1,this.ce(t,n),this.oe(e,n))))}updateTargetData(e,t){return this.ae(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>di(e).delete(t.targetId)).next(()=>this.re(e)).next(t=>(y(t.targetCount>0),t.targetCount-=1,this.oe(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return di(e).Kt((s,o)=>{const a=Hr(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>Ir.waitFor(i)).next(()=>r)}forEachTarget(e,t){return di(e).Kt((e,n)=>{const r=Hr(n);t(r)})}re(e){return fi(e).get(pr.key).next(e=>(y(null!==e),e))}oe(e,t){return fi(e).put(pr.key,t)}ae(e,t){return di(e).put(Kr(this.N,t))}ce(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.re(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Ee(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return di(e).Kt({range:r,index:dr.queryTargetsIndexName},(e,n,r)=>{const s=Hr(n);ke(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=pi(e);return t.forEach(t=>{const s=Zn(t.path);r.push(i.put(new fr(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))}),Ir.waitFor(r)}removeMatchingKeys(e,t,n){const r=pi(e);return Ir.forEach(t,t=>{const i=Zn(t.path);return Ir.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=pi(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=pi(e);let i=rn();return r.Kt({range:n,qt:!0},(e,t,n)=>{const r=nr(e[1]),s=new ie(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=Zn(t.path),r=IDBKeyRange.bound([n],[P(n)],!1,!0);let i=0;return pi(e).Kt({index:fr.documentTargetsIndex,qt:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Et(e,t){return di(e).get(t).next(e=>e?Hr(e):null)}}function di(e){return Rr(e,dr.store)}function fi(e){return Rr(e,pr.store)}function pi(e){return Rr(e,fr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(e){if(e.code!==_.FAILED_PRECONDITION||e.message!==wr)throw e;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi([e,t],[n,r]){const i=R(e,n);return 0===i?R(t,r):i}class vi{constructor(e){this.ue=e,this.buffer=new Gt(gi),this.he=0}le(){return++this.he}fe(e){const t=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();gi(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yi{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.de=!1,this.we=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(e){const t=this.de?3e5:6e4;f("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Or(e)?f("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await mi(e)}await this._e(e)})}}class bi{constructor(e,t){this.me=e,this.params=t}calculateTargetCount(e,t){return this.me.ge(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ir.resolve(A.T);const n=new vi(t);return this.me.forEachTarget(e,e=>n.fe(e.sequenceNumber)).next(()=>this.me.ye(e,e=>n.fe(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.me.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.me.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector","Garbage collection skipped; disabled"),Ir.resolve(ti)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ti):this.pe(e,t))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(f("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),h()<=s["a"].DEBUG&&f("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ir.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new bi(e,t)}(this,t)}ge(e){const t=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Ee(e){let t=0;return this.ye(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ye(e,t){return this.Te(e,(e,n)=>t(n))}addReference(e,t,n){return _i(e,n)}removeReference(e,t,n){return _i(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return _i(e,t)}Ie(e,t){return function(e,t){let n=!1;return ui(e).jt(r=>oi(e,r,t).next(e=>(e&&(n=!0),Ir.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Te(e,(s,o)=>{if(o<=t){const t=this.Ie(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s),pi(e).delete([0,Zn(s.path)])))});r.push(t)}}).next(()=>Ir.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return _i(e,t)}Te(e,t){const n=pi(e);let r,i=A.T;return n.Kt({index:fr.documentTargetsIndex},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==A.T&&t(new ie(nr(r)),i),i=o,r=s):i=A.T}).next(()=>{i!==A.T&&t(new ie(nr(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function _i(e,t){return pi(e).put(function(e,t){return new fr(0,Zn(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){V(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return $(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.changes=new Ii(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:M.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:_e.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ir.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.N=e,this.Ht=t}addEntry(e,t,n){return Oi(e).put(xi(t),n)}removeEntry(e,t){const n=Oi(e),r=xi(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Ae(e,n)))}getEntry(e,t){return Oi(e).get(xi(t)).next(e=>this.Re(t,e))}be(e,t){return Oi(e).get(xi(t)).next(e=>({document:this.Re(t,e),size:ii(e)}))}getEntries(e,t){let n=Yt();return this.Pe(e,t,(e,t)=>{const r=this.Re(e,t);n=n.insert(e,r)}).next(()=>n)}ve(e,t){let n=Yt(),r=new Ht(ie.comparator);return this.Pe(e,t,(e,t)=>{const i=this.Re(e,t);n=n.insert(e,i),r=r.insert(e,ii(t))}).next(()=>({documents:n,Ve:r}))}Pe(e,t,n){if(t.isEmpty())return Ir.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return Oi(e).Kt({range:r},(e,t,r)=>{const o=ie.fromSegments(e);for(;s&&ie.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Mt(s.path.toArray()):r.done()}).next(()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(e,t,n){let r=Yt();const i=t.path.length+1,s={};if(n.isEqual(M.min())){const e=t.path.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),r=$r(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=lr.collectionReadTimeIndex}return Oi(e).Kt(s,(e,n,s)=>{if(e.length!==i)return;const o=Fr(this.N,n);t.path.isPrefixOf(o.key.path)?it(t,o)&&(r=r.insert(o.key,o)):s.done()}).next(()=>r)}newChangeBuffer(e){return new Si(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return ki(e).get(hr.key).next(e=>(y(!!e),e))}Ae(e,t){return ki(e).put(hr.key,t)}Re(e,t){if(t){const e=Fr(this.N,t);if(!e.isNoDocument()||!e.version.isEqual(M.min()))return e}return _e.newInvalidDocument(e)}}class Si extends Ti{constructor(e,t){super(),this.Se=e,this.trackRemovals=t,this.De=new Ii(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new Gt((e,t)=>R(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.De.get(i);if(s.document.isValidDocument()){const a=Vr(this.Se.N,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=ii(a);n+=c-o,t.push(this.Se.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=Vr(this.Se.N,_e.newNoDocument(i,M.min()),this.getReadTime(i));t.push(this.Se.addEntry(e,i,n))}else t.push(this.Se.removeEntry(e,i))}),r.forEach(n=>{t.push(this.Se.Ht.addToCollectionParentIndex(e,n))}),t.push(this.Se.updateMetadata(e,n)),Ir.waitFor(t)}getFromCache(e,t){return this.Se.be(e,t).next(e=>(this.De.set(t,e.size),e.document))}getAllFromCache(e,t){return this.Se.ve(e,t).next(({documents:e,Ve:t})=>(t.forEach((e,t)=>{this.De.set(e,t)}),e))}}function ki(e){return Rr(e,hr.store)}function Oi(e){return Rr(e,lr.store)}function xi(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.N=e}Ct(e,t,n,r){y(n<r&&n>=0&&r<=11);const i=new Tr("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore(ir.store)}(e),function(e){e.createObjectStore(sr.store,{keyPath:sr.keyPath}),e.createObjectStore(or.store,{keyPath:or.keyPath,autoIncrement:!0}).createIndex(or.userMutationsIndex,or.userMutationsKeyPath,{unique:!0}),e.createObjectStore(ar.store)}(e),Ai(e),function(e){e.createObjectStore(lr.store)}(e));let s=Ir.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(fr.store),e.deleteObjectStore(dr.store),e.deleteObjectStore(pr.store)}(e),Ai(e)),s=s.next(()=>function(e){const t=e.store(pr.store),n=new pr(0,0,M.min().toTimestamp(),0);return t.put(pr.key,n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store(or.store).Lt().next(n=>{e.deleteObjectStore(or.store),e.createObjectStore(or.store,{keyPath:or.keyPath,autoIncrement:!0}).createIndex(or.userMutationsIndex,or.userMutationsKeyPath,{unique:!0});const r=t.store(or.store),i=n.map(e=>r.put(e));return Ir.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore(gr.store,{keyPath:gr.keyPath})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Ce(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore(hr.store)}(e),this.Ne(i)))),n<7&&r>=7&&(s=s.next(()=>this.xe(i))),n<8&&r>=8&&(s=s.next(()=>this.ke(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(lr.store);t.createIndex(lr.readTimeIndex,lr.readTimeIndexPath,{unique:!1}),t.createIndex(lr.collectionReadTimeIndex,lr.collectionReadTimeIndexPath,{unique:!1})}(t)})),n<10&&r>=10&&(s=s.next(()=>this.$e(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore(vr.store,{keyPath:vr.keyPath})}(e),function(e){e.createObjectStore(yr.store,{keyPath:yr.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)})),s}Ne(e){let t=0;return e.store(lr.store).Kt((e,n)=>{t+=ii(n)}).next(()=>{const n=new hr(t);return e.store(hr.store).put(hr.key,n)})}Ce(e){const t=e.store(sr.store),n=e.store(or.store);return t.Lt().next(t=>Ir.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Lt(or.userMutationsIndex,r).next(n=>Ir.forEach(n,n=>{y(n.userId===t.userId);const r=zr(this.N,n);return ri(e,t.userId,r).next(()=>{})}))}))}xe(e){const t=e.store(fr.store),n=e.store(lr.store);return e.store(pr.store).get(pr.key).next(e=>{const r=[];return n.Kt((n,i)=>{const s=new B(n),o=function(e){return[0,Zn(e)]}(s);r.push(t.get(o).next(n=>n?Ir.resolve():(n=>t.put(new fr(0,Zn(n),e.highestListenSequenceNumber)))(s)))}).next(()=>Ir.waitFor(r))})}ke(e,t){e.createObjectStore(mr.store,{keyPath:mr.keyPath});const n=t.store(mr.store),r=new Xr,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Zn(r)})}};return t.store(lr.store).Kt({qt:!0},(e,t)=>{const n=new B(e);return i(n.popLast())}).next(()=>t.store(ar.store).Kt({qt:!0},([e,t,n],r)=>{const s=nr(t);return i(s.popLast())}))}$e(e){const t=e.store(dr.store);return t.Kt((e,n)=>{const r=Hr(n),i=Kr(this.N,r);return t.put(i)})}}function Ai(e){e.createObjectStore(fr.store,{keyPath:fr.keyPath}).createIndex(fr.documentTargetsIndex,fr.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(dr.store,{keyPath:dr.keyPath}).createIndex(dr.queryTargetsIndexName,dr.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(pr.store)}const Ni="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Li{constructor(e,t,n,r,i,s,o,a,c,u){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Oe=i,this.window=s,this.document=o,this.Fe=c,this.Me=u,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=e=>Promise.resolve(),!Li.bt())throw new I(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new wi(this,r),this.We=t+"main",this.N=new Mr(a),this.Ge=new Er(this.We,11,new Ci(this.N)),this.ze=new hi(this.referenceDelegate,this.N),this.Ht=new Zr,this.He=function(e,t){return new Ei(e,t)}(this.N,this.Ht),this.Je=new Gr,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===u&&p("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(_.FAILED_PRECONDITION,Ni);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new A(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Di(e).put(new gr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(e=>{e||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(t=>this.isPrimary&&!t?this.on(e).next(()=>!1):!!t&&this.an(e).next(()=>!0))).catch(e=>{if(Or(e))return f("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return f("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return Ri(e).get(ir.key).next(e=>Ir.resolve(this.cn(e)))}un(e){return Di(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Rr(e,gr.store);return t.Lt().next(e=>{const n=this.fn(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return Ir.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ye)for(const t of e)this.Ye.removeItem(this.dn(t.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?Ir.resolve(!0):Ri(e).get(ir.key).next(t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)){if(this.cn(t)&&this.networkEnabled)return!0;if(!this.cn(t)){if(!t.allowTabSynchronization)throw new I(_.FAILED_PRECONDITION,Ni);return!1}}return!(!this.networkEnabled||!this.inForeground)||Di(e).Lt().next(e=>void 0===this.fn(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&f("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[ir.store,gr.store],e=>{const t=new Lr(e,A.T);return this.on(t).next(()=>this.un(t))}),this.Ge.close(),this.yn()}fn(e,t){return e.filter(e=>this.ln(e.updateTimeMs,t)&&!this.wn(e.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>Di(e).Lt().next(e=>this.fn(e,18e5).map(e=>e.clientId)))}get started(){return this.Be}getMutationQueue(e){return si.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,t,n){f("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite";let i;return this.Ge.runTransaction(e,r,br,r=>(i=new Lr(r,this.Le?this.Le.next():A.T),"readwrite-primary"===t?this.sn(i).next(e=>!!e||this.rn(i)).next(t=>{if(!t)throw p(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new I(_.FAILED_PRECONDITION,wr);return n(i)}).next(e=>this.an(i).next(()=>e)):this.En(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}En(e){return Ri(e).get(ir.key).next(e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)&&!this.cn(e)&&!(this.Me||this.allowTabSynchronization&&e.allowTabSynchronization))throw new I(_.FAILED_PRECONDITION,Ni)})}an(e){const t=new ir(this.clientId,this.allowTabSynchronization,Date.now());return Ri(e).put(ir.key,t)}static bt(){return Er.bt()}on(e){const t=Ri(e);return t.get(ir.key).next(e=>this.cn(e)?(f("IndexedDbPersistence","Releasing primary lease."),t.delete(ir.key)):Ir.resolve())}ln(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(p(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ue=()=>{this._n(),Object(o["v"])()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var t;try{const n=null!==(null===(t=this.Ye)||void 0===t?void 0:t.getItem(this.dn(e)));return f("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return p("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){p("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(e){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ri(e){return Rr(e,ir.store)}function Di(e){return Rr(e,gr.store)}function Pi(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ji{constructor(e,t){this.progress=e,this.Tn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Rn(e,t,n))}Rn(e,t,n){return this.He.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}bn(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}Pn(e,t){return this.He.getEntries(e,t).next(t=>this.vn(e,t).next(()=>t))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.bn(t,e))}getDocumentsMatchingQuery(e,t,n){return function(e){return ie.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Vn(e,t.path):Ye(t)?this.Sn(e,t,n):this.Dn(e,t,n)}Vn(e,t){return this.An(e,new ie(t)).next(e=>{let t=Zt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Sn(e,t,n){const r=t.collectionGroup;let i=Zt();return this.Ht.getCollectionParents(e,r).next(s=>Ir.forEach(s,s=>{const o=function(e,t){return new ze(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Dn(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}Dn(e,t,n){let r,i;return this.He.getDocumentsMatchingQuery(e,t,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(i=t,this.Cn(e,i,r).next(e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=_e.newInvalidDocument(n),r=r.insert(n,i)),Ct(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((e,n)=>{it(t,n)||(r=r.remove(e))}),r))}Cn(e,t,n){let r=rn();for(const s of t)for(const e of s.mutations)e instanceof Dt&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(e,r).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=r}static kn(e,t){let n=rn(),r=rn();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Fi(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(M.min())?this.Fn(e,t):this.On.Pn(e,r).next(i=>{const o=this.Mn(t,i);return(We(t)||Ge(t))&&this.Ln(t.limitType,o,r,n)?this.Fn(e,t):(h()<=s["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),rt(t)),this.On.getDocumentsMatchingQuery(e,t,n).next(e=>(o.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Mn(e,t){let n=new Gt(st(e));return t.forEach((t,r)=>{it(e,r)&&(n=n.add(r))}),n}Ln(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return h()<=s["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",rt(t)),this.On.getDocumentsMatchingQuery(e,t,M.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,n,r){this.persistence=e,this.Bn=t,this.N=r,this.Un=new Ht(R),this.qn=new Ii(e=>Ee(e),ke),this.Kn=M.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Mi(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}function Ui(e,t,n,r){return new $i(e,t,n,r)}async function Bi(e,t){const n=w(e);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",e=>{let s;return n.In.getAllMutationBatches(e).next(o=>(s=o,r=n.persistence.getMutationQueue(t),i=new Mi(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e))).next(t=>{const n=[],r=[];let o=rn();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.Pn(e,o).next(e=>({Wn:e,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function qi(e,t){const n=w(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ir.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);y(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))})}),o.next(()=>e.In.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.In.performConsistencyCheck(e)).next(()=>n.Qn.Pn(e,r))})}function zi(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ze.getLastRemoteSnapshotVersion(e))}function Hi(e,t){const n=w(e),r=t.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];t.targetChanges.forEach((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(e,t.removedDocuments,s).next(()=>n.ze.addMatchingKeys(e,t.addedDocuments,s)));const c=t.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,u),function(e,t,n){return y(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,t)&&o.push(n.ze.updateTargetData(e,u))}});let a=Yt();if(t.documentUpdates.forEach((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Ki(e,s,t.documentUpdates,r,void 0).next(e=>{a=e})),!r.isEqual(M.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next(t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Ir.waitFor(o).next(()=>s.apply(e)).next(()=>n.Qn.vn(e,a)).next(()=>a)}).then(e=>(n.Un=i,e))}function Ki(e,t,n,r,i){let s=rn();return n.forEach(e=>s=s.add(e)),t.getEntries(e,s).next(e=>{let s=Yt();return n.forEach((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(M.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Wi(e,t){const n=w(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t)))}function Gi(e,t){const n=w(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.ze.getTargetData(e,t).next(i=>i?(r=i,Ir.resolve(r)):n.ze.allocateTargetId(e).next(i=>(r=new jr(t,i,0,e.currentSequenceNumber),n.ze.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Un.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e})}async function Qi(e,t,n){const r=w(e),i=r.Un.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Or(e))throw e;f("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Un=r.Un.remove(t),r.qn.delete(i.target)}function Ji(e,t,n){const r=w(e);let i=M.min(),s=rn();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=w(e),i=r.qn.get(n);return void 0!==i?Ir.resolve(r.Un.get(i)):r.ze.getTargetData(t,n)}(r,e,Ze(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Bn.getDocumentsMatchingQuery(e,t,n?i:M.min(),n?s:rn())).next(e=>({documents:e,Gn:s})))}function Yi(e,t){const n=w(e),r=w(n.ze),i=n.Un.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.Et(e,t).next(e=>e?e.target:null))}function Xi(e){const t=w(e);return t.persistence.runTransaction("Get new document changes","readonly",e=>function(e,t,n){const r=w(e);let i=Yt(),s=$r(n);const o=Oi(t),a=IDBKeyRange.lowerBound(s,!0);return o.Kt({index:lr.readTimeIndex,range:a},(e,t)=>{const n=Fr(r.N,t);i=i.insert(n.key,n),s=t.readTime}).next(()=>({Tn:i,readTime:Ur(s)}))}(t.jn,e,t.Kn)).then(({Tn:e,readTime:n})=>(t.Kn=n,e))}async function Zi(e){const t=w(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",e=>function(e){const t=Oi(e);let n=M.min();return t.Kt({index:lr.readTimeIndex,reverse:!0},(e,t,r)=>{t.readTime&&(n=Ur(t.readTime)),r.done()}).next(()=>n)}(e)).then(e=>{t.Kn=e})}async function es(e,t,n,r){const i=w(e);let s=rn(),o=Yt(),a=tn();for(const l of n){const e=t.zn(l.metadata.name);l.document&&(s=s.add(e)),o=o.insert(e,t.Hn(l)),a=a.insert(e,t.Jn(l.metadata.readTime))}const c=i.jn.newChangeBuffer({trackRemovals:!0}),u=await Gi(i,function(e){return Ze(Ke(B.fromString("__bundle__/docs/"+e)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>Ki(e,c,o,M.min(),a).next(t=>(c.apply(e),t)).next(t=>i.ze.removeMatchingKeysForTargetId(e,u.targetId).next(()=>i.ze.addMatchingKeys(e,s,u.targetId)).next(()=>i.Qn.vn(e,t)).next(()=>t)))}async function ts(e,t,n=rn()){const r=await Gi(e,Ze(Wr(t.bundledQuery))),i=w(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=In(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Je.saveNamedQuery(e,t);const o=r.withResumeToken(W.EMPTY_BYTE_STRING,s);return i.Un=i.Un.insert(o.targetId,o),i.ze.updateTargetData(e,o).next(()=>i.ze.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.ze.addMatchingKeys(e,n,r.targetId)).next(()=>i.Je.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return Ir.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:In(n.createTime)}),Ir.resolve()}getNamedQuery(e,t){return Ir.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:Wr(e.bundledQuery),readTime:In(e.readTime)}}(t)),Ir.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.Zn=new Gt(is.ts),this.es=new Gt(is.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new is(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.rs(new is(e,t))}os(e,t){e.forEach(e=>this.removeReference(e,t))}cs(e){const t=new ie(new B([])),n=new is(t,e),r=new is(t,e+1),i=[];return this.es.forEachInRange([n,r],e=>{this.rs(e),i.push(e.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new ie(new B([])),n=new is(t,e),r=new is(t,e+1);let i=rn();return this.es.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new is(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class is{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return ie.comparator(e.key,t.key)||R(e.ls,t.ls)}static ns(e,t){return R(e.ls,t.ls)||ie.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new Gt(is.ts)}checkEmpty(e){return Ir.resolve(0===this.In.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Dr(i,t,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new is(o.key,i)),this.Ht.addToCollectionParentIndex(e,o.key.path.popLast());return Ir.resolve(s)}lookupMutationBatch(e,t){return Ir.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this._s(n),i=r<0?0:r;return Ir.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Ir.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return Ir.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new is(t,0),r=new is(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],e=>{const t=this.ws(e.ls);i.push(t)}),Ir.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Gt(R);return t.forEach(e=>{const t=new is(e,0),r=new is(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],e=>{n=n.add(e.ls)})}),Ir.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ie.isDocumentKey(i)||(i=i.child(""));const s=new is(new ie(i),0);let o=new Gt(R);return this.ds.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)},s),Ir.resolve(this.gs(o))}gs(e){const t=[];return e.forEach(e=>{const n=this.ws(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){y(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return Ir.forEach(t.mutations,r=>{const i=new is(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=n})}te(e){}containsKey(e,t){const n=new is(t,0),r=this.ds.firstAfterOrEqual(n);return Ir.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,Ir.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Ht(ie.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ir.resolve(n?n.document.clone():_e.newInvalidDocument(t))}getEntries(e,t){let n=Yt();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():_e.newInvalidDocument(e))}),Ir.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Yt();const i=new ie(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||it(t,i)&&(r=r.insert(i.key,i.clone()))}return Ir.resolve(r)}Es(e,t){return Ir.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new as(this)}getSize(e){return Ir.resolve(this.size)}}class as extends Ti{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?t.push(this.Se.addEntry(e,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),Ir.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.persistence=e,this.Ts=new Ii(e=>Ee(e),ke),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Is=0,this.As=new rs,this.targetCount=0,this.Rs=li.se()}forEachTarget(e,t){return this.Ts.forEach((e,n)=>t(n)),Ir.resolve()}getLastRemoteSnapshotVersion(e){return Ir.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ir.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Ir.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),Ir.resolve()}ae(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new li(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,Ir.resolve()}updateTargetData(e,t){return this.ae(t),Ir.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,Ir.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Ir.waitFor(i).next(()=>r)}getTargetCount(e){return Ir.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return Ir.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),Ir.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Ir.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),Ir.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return Ir.resolve(n)}containsKey(e,t){return Ir.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.bs={},this.Le=new A(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new cs(this),this.Ht=new Yr,this.He=function(e,t){return new os(e,t)}(this.Ht,e=>this.referenceDelegate.Ps(e)),this.N=new Mr(t),this.Je=new ns(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new ss(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){f("MemoryPersistence","Starting transaction:",e);const r=new ls(this.Le.next());return this.referenceDelegate.vs(),n(r).next(e=>this.referenceDelegate.Vs(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ss(e,t){return Ir.or(Object.values(this.bs).map(n=>()=>n.containsKey(e,t)))}}class ls extends _r{constructor(e){super(),this.currentSequenceNumber=e}}class hs{constructor(e){this.persistence=e,this.Ds=new rs,this.Cs=null}static Ns(e){return new hs(e)}get xs(){if(this.Cs)return this.Cs;throw v()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),Ir.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),Ir.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),Ir.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(e=>this.xs.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ir.forEach(this.xs,n=>{const r=ie.fromPath(n);return this.ks(e,r).next(e=>{e||t.removeEntry(r)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}Ps(e){return 0}ks(e,t){return Ir.or([()=>Ir.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e,t){return`firestore_clients_${e}_${t}`}function fs(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function ps(e,t){return`firestore_targets_${e}_${t}`}class ms{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static $s(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new I(r.error.code,r.error.message))),s?new ms(e,t,r.state,i):(p("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class gs{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new I(n.error.code,n.error.message))),i?new gs(e,n.state,r):(p("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vs{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=on();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=re(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new vs(e,i):(p("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ys{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new ys(t.clientId,t.onlineState):(p("SharedClientState","Failed to parse online state: "+e),null)}}class bs{constructor(){this.activeTargetIds=on()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ws{constructor(e,t,n,r,i){this.window=e,this.Oe=t,this.persistenceKey=n,this.Ls=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Ht(R),this.started=!1,this.Ks=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.js=ds(this.persistenceKey,this.Ls),this.Qs=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new bs),this.Ws=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Hs=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.Js=function(e){return"firestore_bundle_loaded_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const n of e){if(n===this.Ls)continue;const e=this.getItem(ds(this.persistenceKey,n));if(e){const t=vs.$s(n,e);t&&(this.qs=this.qs.insert(t.clientId,t))}}this.Ys();const t=this.storage.getItem(this.Hs);if(t){const e=this.Xs(t);e&&this.Zs(e)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let t=!1;return this.qs.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,t,n){this.ei(e,t,n),this.ni(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(ps(this.persistenceKey,e));if(n){const r=gs.$s(e,n);r&&(t=r.state)}}return this.si.Fs(e),this.Ys(),t}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ps(this.persistenceKey,e))}updateQueryState(e,t,n){this.ii(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.ni(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return f("SharedClientState","READ",e,t),t}setItem(e,t){f("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){f("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const t=e;if(t.storageArea===this.storage){if(f("SharedClientState","EVENT",t.key,t.newValue),t.key===this.js)return void p("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Ws.test(t.key)){if(null==t.newValue){const e=this.ai(t.key);return this.ci(e,null)}{const e=this.ui(t.key,t.newValue);if(e)return this.ci(e.clientId,e)}}else if(this.Gs.test(t.key)){if(null!==t.newValue){const e=this.hi(t.key,t.newValue);if(e)return this.li(e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.fi(t.key,t.newValue);if(e)return this.di(e)}}else if(t.key===this.Hs){if(null!==t.newValue){const e=this.Xs(t.newValue);if(e)return this.Zs(e)}}else if(t.key===this.Qs){const e=function(e){let t=A.T;if(null!=e)try{const n=JSON.parse(e);y("number"==typeof n),t=n}catch(e){p("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==A.T&&this.sequenceNumberHandler(e)}else if(t.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(t)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,t,n){const r=new ms(this.currentUser,e,t,n),i=fs(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Os())}ni(e){const t=fs(this.persistenceKey,this.currentUser,e);this.removeItem(t)}ri(e){const t={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(t))}ii(e,t,n){const r=ps(this.persistenceKey,e),i=new gs(e,t,n);this.setItem(r,i.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const t=this.Ws.exec(e);return t?t[1]:null}ui(e,t){const n=this.ai(e);return vs.$s(n,t)}hi(e,t){const n=this.Gs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return ms.$s(new c(i),r,t)}fi(e,t){const n=this.zs.exec(e),r=Number(n[1]);return gs.$s(r,t)}Xs(e){return ys.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);f("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,t){const n=t?this.qs.insert(e,t):this.qs.remove(e),r=this.ti(this.qs),i=this.ti(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.gi(s,o).then(()=>{this.qs=n})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let t=on();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class _s{constructor(){this.yi=new bs,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new bs,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,r){const i=this.Bi(e,t);f("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(e,i,s,n).then(e=>(f("RestConnection","Received: ",e),e),t=>{throw m("RestConnection",e+" failed with error: ",t,"url: ",i,"request:",n),t})}Ki(e,t,n,r){return this.Li(e,t,n,r)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+u,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=Es[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+e+'" timed out'),s(new I(_.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(t)>=0?t:_.UNKNOWN}(e.status);s(new I(t,e.message))}else s(new I(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new I(_.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{f("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);o.send(t,"POST",c,n,15)})}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.Ui(s.initMessageHeaders,t),Object(o["s"])()||Object(o["u"])()||Object(o["o"])()||Object(o["q"])()||Object(o["w"])()||Object(o["n"])()||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,s);const u=r.createWebChannel(c,s);let l=!1,h=!1;const d=new Ss({vi:e=>{h?f("Connection","Not sending because WebChannel is closed:",e):(l||(f("Connection","Opening WebChannel transport."),u.open(),l=!0),f("Connection","WebChannel sending:",e),u.send(e))},Vi:()=>u.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(u,a["f"].EventType.OPEN,()=>{h||f("Connection","WebChannel transport opened.")}),p(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,f("Connection","WebChannel transport closed"),d.$i())}),p(u,a["f"].EventType.ERROR,e=>{h||(h=!0,m("Connection","WebChannel transport errored:",e),d.$i(new I(_.UNAVAILABLE,"The operation could not be completed")))}),p(u,a["f"].EventType.MESSAGE,e=>{var t;if(!h){const n=e.data[0];y(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){f("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Ut[e];if(void 0!==t)return zt(t)}(e),n=i.message;void 0===t&&(t=_.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.$i(new I(t,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),p(i,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(){return"undefined"!=typeof window?window:null}function xs(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e){return new yn(e,!0)}class As{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,t-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,n,r,i,s){this.Oe=e,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new As(e,t)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this._r(),this.rr.cancel(),this.sr++,3!==e?this.rr.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):t&&t.code===_.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),t=this.sr;this.credentialsProvider.getToken().then(e=>{this.sr===t&&this.yr(e)},t=>{e(()=>{const e=new I(_.UNKNOWN,"Fetching auth token failed: "+t.message);return this.pr(e)})})}yr(e){const t=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si(()=>{t(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(e=>{t(()=>this.pr(e))}),this.stream.onMessage(e=>{t(()=>this.onMessage(e))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return f("PersistentStream","close with error: "+e),this.stream=null,this.close(3,e)}gr(e){return t=>{this.Oe.enqueueAndForget(()=>this.sr===e?t():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ls extends Ns{constructor(e,t,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,i),this.N=r}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const t=Dn(this.N,e),n=function(e){if(!("targetChange"in e))return M.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?M.min():t.readTime?In(t.readTime):M.min()}(e);return this.listener.Tr(t,n)}Ir(e){const t={};t.database=Cn(this.N),t.addTarget=function(e,t){let n;const r=t.target;return n=Oe(r)?{documents:Fn(e,r)}:{query:Vn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=wn(e,t.resumeToken):t.snapshotVersion.compareTo(M.min())>0&&(n.readTime=bn(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=Un(this.N,e);n&&(t.labels=n),this.wr(t)}Ar(e){const t={};t.database=Cn(this.N),t.removeTarget=e,this.wr(t)}}class Rs extends Ns{constructor(e,t,n,r,i){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const t=Mn(e.writeResults,e.commitTime),n=In(e.commitTime);return this.listener.vr(n,t)}return y(!e.writeResults||0===e.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Cn(this.N),this.wr(e)}Pr(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Pn(this.N,e))};this.wr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends class{}{constructor(e,t,n){super(),this.credentials=e,this.nr=t,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new I(_.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(e,t,n,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new I(_.UNKNOWN,e.toString())})}Ki(e,t,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(e,t,n,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new I(_.UNKNOWN,e.toString())})}terminate(){this.Dr=!0}}class Ps{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+e.toString()),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,"Online"===e&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(p(t),this.$r=!1):f("OnlineStateTracker",t)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei(e=>{n.enqueueAndForget(async()=>{Hs(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=w(e);t.Kr.add(4),await Fs(t),t.Wr.set("Unknown"),t.Kr.delete(4),await Ms(t)}(this))})}),this.Wr=new Ps(n,r)}}async function Ms(e){if(Hs(e))for(const t of e.jr)await t(!0)}async function Fs(e){for(const t of e.jr)await t(!1)}function Vs(e,t){const n=w(e);n.qr.has(t.targetId)||(n.qr.set(t.targetId,t),zs(n)?qs(n):co(n).cr()&&Us(n,t))}function $s(e,t){const n=w(e),r=co(n);n.qr.delete(t),r.cr()&&Bs(n,t),0===n.qr.size&&(r.cr()?r.lr():Hs(n)&&n.Wr.set("Unknown"))}function Us(e,t){e.Gr.Y(t.targetId),co(e).Ir(t)}function Bs(e,t){e.Gr.Y(t),co(e).Ar(t)}function qs(e){e.Gr=new fn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.qr.get(t)||null}),co(e).start(),e.Wr.Or()}function zs(e){return Hs(e)&&!co(e).ar()&&e.qr.size>0}function Hs(e){return 0===w(e).Kr.size}function Ks(e){e.Gr=void 0}async function Ws(e){e.qr.forEach((t,n)=>{Us(e,t)})}async function Gs(e,t){Ks(e),zs(e)?(e.Wr.Lr(t),qs(e)):e.Wr.set("Unknown")}async function Qs(e,t,n){if(e.Wr.set("Online"),t instanceof hn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qr.delete(r),e.Gr.removeTarget(r))}(e,t)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Js(e,n)}else if(t instanceof un?e.Gr.rt(t):t instanceof ln?e.Gr.ft(t):e.Gr.ct(t),!n.isEqual(M.min()))try{const t=await zi(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Gr._t(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.qr.get(r);i&&e.qr.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.qr.get(t);if(!n)return;e.qr.set(t,n.withResumeToken(W.EMPTY_BYTE_STRING,n.snapshotVersion)),Bs(e,t);const r=new jr(n.target,t,1,n.sequenceNumber);Us(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){f("RemoteStore","Failed to raise snapshot:",t),await Js(e,t)}}async function Js(e,t,n){if(!Or(t))throw t;e.Kr.add(1),await Fs(e),e.Wr.set("Offline"),n||(n=()=>zi(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),e.Kr.delete(1),await Ms(e)})}function Ys(e,t){return t().catch(n=>Js(e,n,t))}async function Xs(e){const t=w(e),n=uo(t);let r=t.Ur.length>0?t.Ur[t.Ur.length-1].batchId:-1;for(;Zs(t);)try{const e=await Wi(t.localStore,r);if(null===e){0===t.Ur.length&&n.lr();break}r=e.batchId,eo(t,e)}catch(e){await Js(t,e)}to(t)&&no(t)}function Zs(e){return Hs(e)&&e.Ur.length<10}function eo(e,t){e.Ur.push(t);const n=uo(e);n.cr()&&n.br&&n.Pr(t.mutations)}function to(e){return Hs(e)&&!uo(e).ar()&&e.Ur.length>0}function no(e){uo(e).start()}async function ro(e){uo(e).Sr()}async function io(e){const t=uo(e);for(const n of e.Ur)t.Pr(n.mutations)}async function so(e,t,n){const r=e.Ur.shift(),i=Pr.from(r,t,n);await Ys(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Xs(e)}async function oo(e,t){t&&uo(e).br&&await async function(e,t){if(n=t.code,qt(n)&&n!==_.ABORTED){const n=e.Ur.shift();uo(e).hr(),await Ys(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Xs(e)}var n}(e,t),to(e)&&no(e)}async function ao(e,t){const n=w(e);t?(n.Kr.delete(2),await Ms(n)):t||(n.Kr.add(2),await Fs(n),n.Wr.set("Unknown"))}function co(e){return e.zr||(e.zr=function(e,t,n){const r=w(e);return r.Cr(),new Ls(t,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Si:Ws.bind(null,e),Ci:Gs.bind(null,e),Tr:Qs.bind(null,e)}),e.jr.push(async t=>{t?(e.zr.hr(),zs(e)?qs(e):e.Wr.set("Unknown")):(await e.zr.stop(),Ks(e))})),e.zr}function uo(e){return e.Hr||(e.Hr=function(e,t,n){const r=w(e);return r.Cr(),new Rs(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:ro.bind(null,e),Ci:oo.bind(null,e),Vr:io.bind(null,e),vr:so.bind(null,e)}),e.jr.push(async t=>{t?(e.Hr.hr(),await Xs(e)):(await e.Hr.stop(),e.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${e.Ur.length} pending writes`),e.Ur=[]))})),e.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class lo{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new lo(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ho(e,t){if(p("AsyncQueue",`${t}: ${e}`),Or(e))return new I(_.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ie.comparator(t.key,n.key):(e,t)=>ie.comparator(e.key,t.key),this.keyedMap=Zt(),this.sortedSet=new Ht(this.comparator)}static emptySet(e){return new fo(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fo))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new fo;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.Jr=new Ht(ie.comparator)}track(e){const t=e.doc.key,n=this.Jr.get(t);n?0!==e.type&&3===n.type?this.Jr=this.Jr.insert(t,e):3===e.type&&1!==n.type?this.Jr=this.Jr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jr=this.Jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jr=this.Jr.remove(t):1===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):v():this.Jr=this.Jr.insert(t,e)}Yr(){const e=[];return this.Jr.inorderTraversal((t,n)=>{e.push(n)}),e}}class mo{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new mo(e,t,fo.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.Xr=void 0,this.listeners=[]}}class vo{constructor(){this.queries=new Ii(e=>nt(e),tt),this.onlineState="Unknown",this.Zr=new Set}}async function yo(e,t){const n=w(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new go),i)try{s.Xr=await n.onListen(r)}catch(e){const n=ho(e,`Initialization of query '${rt(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.eo(n.onlineState),s.Xr&&t.no(s.Xr)&&Io(n)}async function bo(e,t){const n=w(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function wo(e,t){const n=w(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.no(i)&&(r=!0);t.Xr=i}}r&&Io(n)}function _o(e,t,n){const r=w(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Io(e){e.Zr.forEach(e=>{e.next()})}class To{constructor(e,t,n){this.query=e,this.so=t,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new mo(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.io?this.oo(e)&&(this.so.next(e),t=!0):this.ao(e,this.onlineState)&&(this.co(e),t=!0),this.ro=e,t}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let t=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),t=!0),t}ao(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.uo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}oo(e){if(e.docChanges.length>0)return!0;const t=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}co(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.payload=e,this.byteLength=t}ho(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.N=e}zn(e){return kn(this.N,e)}Hn(e){return e.metadata.exists?Ln(this.N,e.document,!1):_e.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return In(e)}}class ko{constructor(e,t,n){this.lo=e,this.localStore=t,this.N=n,this.queries=[],this.documents=[],this.progress=Oo(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}wo(e){const t=new Map,n=new So(this.N);for(const r of e)if(r.metadata.queries){const e=n.zn(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||rn()).add(e);t.set(n,r)}}return t}async complete(){const e=await es(this.localStore,new So(this.N),this.documents,this.lo.id),t=this.wo(this.documents);for(const n of this.queries)await ts(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new ji(Object.assign({},this.progress),e)}}function Oo(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.key=e}}class Co{constructor(e){this.key=e}}class Ao{constructor(e,t){this.query=e,this._o=t,this.mo=null,this.current=!1,this.yo=rn(),this.mutatedKeys=rn(),this.po=st(e),this.Eo=new fo(this.po)}get To(){return this._o}Io(e,t){const n=t?t.Ao:new po,r=t?t.Eo:this.Eo;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=We(this.query)&&r.size===this.query.limit?r.last():null,c=Ge(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=it(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),We(this.query)||Ge(this.query))for(;s.size>this.query.limit;){const e=We(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const i=e.Ao.Yr();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.po(e.doc,t.doc)),this.bo(n);const s=t?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new mo(this.query,e.Eo,r,i,e.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new po,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(e=>this._o=this._o.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this._o=this._o.delete(e)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=rn(),this.Eo.forEach(e=>{this.Vo(e.key)&&(this.yo=this.yo.add(e.key))});const t=[];return e.forEach(e=>{this.yo.has(e)||t.push(new Co(e))}),this.yo.forEach(n=>{e.has(n)||t.push(new xo(n))}),t}So(e){this._o=e.Gn,this.yo=rn();const t=this.Io(e.documents);return this.applyChanges(t,!0)}Do(){return mo.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class No{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Lo{constructor(e){this.key=e,this.Co=!1}}class Ro{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new Ii(e=>nt(e),tt),this.ko=new Map,this.$o=new Set,this.Oo=new Ht(ie.comparator),this.Fo=new Map,this.Mo=new rs,this.Lo={},this.Bo=new Map,this.Uo=li.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Do(e,t){const n=ua(e);let r,i;const s=n.xo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const e=await Gi(n.localStore,Ze(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Po(n,t,r,"current"===s),n.isPrimaryClient&&Vs(n.remoteStore,e)}return i}async function Po(e,t,n,r){e.Ko=(t,n,r)=>async function(e,t,n,r){let i=t.view.Io(n);i.Ln&&(i=await Ji(e.localStore,t.query,!1).then(({documents:e})=>t.view.Io(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Go(e,t.targetId,o.vo),o.snapshot}(e,t,n,r);const i=await Ji(e.localStore,t,!0),s=new Ao(t,i.Gn),o=s.Io(i.documents),a=cn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Go(e,n,c.vo);const u=new No(t,n,s);return e.xo.set(t,u),e.ko.has(n)?e.ko.get(n).push(t):e.ko.set(n,[t]),c.snapshot}async function jo(e,t){const n=w(e),r=n.xo.get(t),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(e=>!tt(e,t))),void n.xo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$s(n.remoteStore,r.targetId),Ko(n,r.targetId)}).catch(mi)):(Ko(n,r.targetId),await Qi(n.localStore,r.targetId,!0))}async function Mo(e,t,n){const r=la(e);try{const e=await function(e,t){const n=w(e),r=j.now(),i=t.reduce((e,t)=>e.add(t.key),rn());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.Qn.Pn(e,i).next(i=>{s=i;const o=[];for(const e of t){const t=At(e,s.get(e.key));null!=t&&o.push(new Dt(e.key,t,we(t.value.mapValue),St.exists(!0)))}return n.In.addMutationBatch(e,r,o,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Lo[e.currentUser.toKey()];r||(r=new Ht(R)),r=r.insert(t,n),e.Lo[e.currentUser.toKey()]=r}(r,e.batchId,n),await Yo(r,e.changes),await Xs(r.remoteStore)}catch(e){const t=ho(e,"Failed to persist write");n.reject(t)}}async function Fo(e,t){const n=w(e);try{const e=await Hi(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Fo.get(t);r&&(y(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Co=!0:e.modifiedDocuments.size>0?y(r.Co):e.removedDocuments.size>0&&(y(r.Co),r.Co=!1))}),await Yo(n,e,t)}catch(e){await mi(e)}}function Vo(e,t,n){const r=w(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.xo.forEach((n,r)=>{const i=r.view.eo(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=w(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.eo(t)&&(r=!0)}),r&&Io(n)}(r.eventManager,t),e.length&&r.No.Tr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function $o(e,t,n){const r=w(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fo.get(t),s=i&&i.key;if(s){let e=new Ht(ie.comparator);e=e.insert(s,_e.newNoDocument(s,M.min()));const n=rn().add(s),i=new an(M.min(),new Map,new Gt(R),e,n);await Fo(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(t),Jo(r)}else await Qi(r.localStore,t,!1).then(()=>Ko(r,t,n)).catch(mi)}async function Uo(e,t){const n=w(e),r=t.batch.batchId;try{const e=await qi(n.localStore,t);Ho(n,r,null),zo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,e)}catch(e){await mi(e)}}async function Bo(e,t,n){const r=w(e);try{const e=await function(e,t){const n=w(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.In.lookupMutationBatch(e,t).next(t=>(y(null!==t),r=t.keys(),n.In.removeMutationBatch(e,t))).next(()=>n.In.performConsistencyCheck(e)).next(()=>n.Qn.Pn(e,r))})}(r.localStore,t);Ho(r,t,n),zo(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Yo(r,e)}catch(n){await mi(n)}}async function qo(e,t){const n=w(e);Hs(n.remoteStore)||f("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=w(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.In.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Bo.get(e)||[];r.push(t),n.Bo.set(e,r)}catch(e){const n=ho(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function zo(e,t){(e.Bo.get(t)||[]).forEach(e=>{e.resolve()}),e.Bo.delete(t)}function Ho(e,t,n){const r=w(e);let i=r.Lo[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Lo[r.currentUser.toKey()]=i}}function Ko(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ko.get(t))e.xo.delete(r),n&&e.No.jo(r,n);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach(t=>{e.Mo.containsKey(t)||Wo(e,t)})}function Wo(e,t){e.$o.delete(t.path.canonicalString());const n=e.Oo.get(t);null!==n&&($s(e.remoteStore,n),e.Oo=e.Oo.remove(t),e.Fo.delete(n),Jo(e))}function Go(e,t,n){for(const r of n)r instanceof xo?(e.Mo.addReference(r.key,t),Qo(e,r)):r instanceof Co?(f("SyncEngine","Document no longer in limbo: "+r.key),e.Mo.removeReference(r.key,t),e.Mo.containsKey(r.key)||Wo(e,r.key)):v()}function Qo(e,t){const n=t.key,r=n.path.canonicalString();e.Oo.get(n)||e.$o.has(r)||(f("SyncEngine","New document in limbo: "+n),e.$o.add(r),Jo(e))}function Jo(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){const t=e.$o.values().next().value;e.$o.delete(t);const n=new ie(B.fromString(t)),r=e.Uo.next();e.Fo.set(r,new Lo(n)),e.Oo=e.Oo.insert(n,r),Vs(e.remoteStore,new jr(Ze(Ke(n.path)),r,2,A.T))}}async function Yo(e,t,n){const r=w(e),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((e,a)=>{o.push(r.Ko(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Fi.kn(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.No.Tr(i),await async function(e,t){const n=w(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ir.forEach(t,t=>Ir.forEach(t.Nn,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Ir.forEach(t.xn,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Or(e))throw e;f("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,s))}async function Xo(e,t){const n=w(e);if(!n.currentUser.isEqual(t)){f("SyncEngine","User change. New user:",t.toKey());const e=await Bi(n.localStore,t);n.currentUser=t,function(e,t){e.Bo.forEach(e=>{e.forEach(e=>{e.reject(new I(_.CANCELLED,t))})}),e.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Yo(n,e.Wn)}}function Zo(e,t){const n=w(e),r=n.Fo.get(t);if(r&&r.Co)return rn().add(r.key);{let e=rn();const r=n.ko.get(t);if(!r)return e;for(const t of r){const r=n.xo.get(t);e=e.unionWith(r.view.To)}return e}}async function ea(e,t){const n=w(e),r=await Ji(n.localStore,t.query,!0),i=t.view.So(r);return n.isPrimaryClient&&Go(n,t.targetId,i.vo),i}async function ta(e){const t=w(e);return Xi(t.localStore).then(e=>Yo(t,e))}async function na(e,t,n,r){const i=w(e),s=await function(e,t){const n=w(e),r=w(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Xt(e,t).next(t=>t?n.Qn.Pn(e,t):Ir.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await Xs(i.remoteStore):"acknowledged"===n||"rejected"===n?(Ho(i,t,r||null),zo(i,t),function(e,t){w(w(e).In).te(t)}(i.localStore,t)):v(),await Yo(i,s)):f("SyncEngine","Cannot apply mutation batch with id: "+t)}async function ra(e,t){const n=w(e);if(ua(n),la(n),!0===t&&!0!==n.qo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await ia(n,e.toArray());n.qo=!0,await ao(n.remoteStore,!0);for(const r of t)Vs(n.remoteStore,r)}else if(!1===t&&!1!==n.qo){const e=[];let t=Promise.resolve();n.ko.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(Ko(n,i),Qi(n.localStore,i,!0))),$s(n.remoteStore,i)}),await t,await ia(n,e),function(e){const t=w(e);t.Fo.forEach((e,n)=>{$s(t.remoteStore,n)}),t.Mo.us(),t.Fo=new Map,t.Oo=new Ht(ie.comparator)}(n),n.qo=!1,await ao(n.remoteStore,!1)}}async function ia(e,t,n){const r=w(e),i=[],s=[];for(const o of t){let e;const t=r.ko.get(o);if(t&&0!==t.length){e=await Gi(r.localStore,Ze(t[0]));for(const e of t){const t=r.xo.get(e),n=await ea(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Yi(r.localStore,o);e=await Gi(r.localStore,t),await Po(r,sa(t),o,!1)}i.push(e)}return r.No.Tr(s),i}function sa(e){return He(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function oa(e){const t=w(e);return w(w(t.localStore).persistence).pn()}async function aa(e,t,n,r){const i=w(e);if(i.qo)f("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(t))switch(n){case"current":case"not-current":{const e=await Xi(i.localStore),r=an.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Yo(i,e,r);break}case"rejected":await Qi(i.localStore,t,!0),Ko(i,t,r);break;default:v()}}async function ca(e,t,n){const r=ua(e);if(r.qo){for(const e of t){if(r.ko.has(e)){f("SyncEngine","Adding an already active target "+e);continue}const t=await Yi(r.localStore,e),n=await Gi(r.localStore,t);await Po(r,sa(t),n.targetId,!1),Vs(r.remoteStore,n)}for(const e of n)r.ko.has(e)&&await Qi(r.localStore,e,!1).then(()=>{$s(r.remoteStore,e),Ko(r,e)}).catch(mi)}}function ua(e){const t=w(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zo.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$o.bind(null,t),t.No.Tr=wo.bind(null,t.eventManager),t.No.jo=_o.bind(null,t.eventManager),t}function la(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uo.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bo.bind(null,t),t}function ha(e,t,n){const r=w(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=w(e),r=In(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Je.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r));n._updateProgress(Oo(r));const i=new ko(r,e.localStore,t.N);let s=await t.Qo();for(;s;){const e=await i.fo(s);e&&n._updateProgress(e),s=await t.Qo()}const o=await i.complete();await Yo(e,o.Tn,void 0),await function(e,t){const n=w(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Je.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress)}catch(e){m("SyncEngine","Loading bundle failed with "+e),n._failWith(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class da{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Cs(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return Ui(this.persistence,new Vi,e.initialUser,this.N)}Go(e){return new us(hs.Ns,this.N)}Wo(e){return new _s}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fa extends da{constructor(e,t,n){super(),this.Jo=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await Zi(this.localStore),await this.Jo.initialize(this,e),await la(this.Jo.syncEngine),await Xs(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(e){return Ui(this.persistence,new Vi,e.initialUser,this.N)}zo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new yi(t,e.asyncQueue)}Go(e){const t=Pi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ni.withCacheSize(this.cacheSizeBytes):ni.DEFAULT;return new Li(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Os(),xs(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new _s}}class pa extends fa{constructor(e,t){super(e,t,!1),this.Jo=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Jo.syncEngine;this.sharedClientState instanceof ws&&(this.sharedClientState.syncEngine={_i:na.bind(null,t),mi:aa.bind(null,t),gi:ca.bind(null,t),pn:oa.bind(null,t),wi:ta.bind(null,t)},await this.sharedClientState.start()),await this.persistence.nn(async e=>{await ra(this.Jo.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}Wo(e){const t=Os();if(!ws.bt(t))throw new I(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Pi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ws(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ma{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Vo(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xo.bind(null,this.syncEngine),await ao(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vo}createDatastore(e){const t=Cs(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ks(r));var r;return function(e,t,n){return new Ds(e,t,n)}(e.credentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Vo(this.syncEngine,e,0),s=Ts.bt()?new Ts:new Is,new js(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Ro(e,t,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=w(e);f("RemoteStore","RemoteStore shutting down."),t.Kr.add(5),await Fs(t),t.Qr.shutdown(),t.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t){this.Zo=e,this.N=t,this.metadata=new T,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(e=>{e&&e.ho()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.payload)))},e=>this.metadata.reject(e))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(null===e)return null;const t=this.ta.decode(e),n=Number(t);isNaN(n)&&this.sa(`length string (${t}) is not valid number`);const r=await this.ia(n);return new Eo(JSON.parse(r),e.length+n)}ra(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async na(){for(;this.ra()<0;)if(await this.oa())break;if(0===this.buffer.length)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const t=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}sa(e){throw this.Zo.cancel(),new Error("Invalid bundle format: "+e)}async oa(){const e=await this.Zo.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new I(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=w(e),r=Cn(n.N)+"/documents",i={documents:t.map(e=>Sn(n.N,e))},s=await n.Ki("BatchGetDocuments",r,i),o=new Map;s.forEach(e=>{const t=Rn(n.N,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());y(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ft(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=ie.fromPath(t);this.mutations.push(new Vt(n,this.precondition(n)))}),await async function(e,t){const n=w(e),r=Cn(n.N)+"/documents",i={writes:t.map(e=>Pn(n.N,e))};await n.Li("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw v();t=M.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new I(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?St.updateTime(t):St.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(M.min()))throw new I(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return St.updateTime(t)}return St.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.aa=5,this.rr=new As(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const e=new ba(this.datastore),t=this.ua(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.ha(e)}))}).catch(e=>{this.ha(e)})})}ua(e){try{const t=this.updateFunction(e);return!te(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(e)}la(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!qt(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=L.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async e=>{f("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=ho(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ia(e,t){e.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Bi(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Ta(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ea(e);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>async function(e,t){const n=w(e);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=Hs(n);n.Kr.add(3),await Fs(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Kr.delete(3),await Ms(n)}(t.remoteStore,e)),e.onlineComponents=t}async function Ea(e){return e.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Ia(e,new da)),e.offlineComponents}async function Sa(e){return e.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Ta(e,new ma)),e.onlineComponents}function ka(e){return Ea(e).then(e=>e.persistence)}function Oa(e){return Ea(e).then(e=>e.localStore)}function xa(e){return Sa(e).then(e=>e.remoteStore)}function Ca(e){return Sa(e).then(e=>e.syncEngine)}async function Aa(e){const t=await Sa(e),n=t.eventManager;return n.onListen=Do.bind(null,t.syncEngine),n.onUnlisten=jo.bind(null,t.syncEngine),n}function Na(e){return e.asyncQueue.enqueue(async()=>{const t=await ka(e),n=await xa(e);return t.setNetworkEnabled(!0),function(e){const t=w(e);return t.Kr.delete(0),Ms(t)}(n)})}function La(e){return e.asyncQueue.enqueue(async()=>{const t=await ka(e),n=await xa(e);return t.setNetworkEnabled(!1),async function(e){const t=w(e);t.Kr.add(0),await Fs(t),t.Wr.set("Offline")}(n)})}function Ra(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=w(e);return n.persistence.runTransaction("read document","readonly",e=>n.Qn.An(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new I(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=ho(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Oa(e),t,n)),n.promise}function Da(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new va({next:s=>{t.enqueueAndForget(()=>bo(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new I(_.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new I(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new To(Ke(n.path),s,{includeMetadataChanges:!0,uo:!0});return yo(e,o)}(await Aa(e),e.asyncQueue,t,n,r)),r.promise}function Pa(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await Ji(e,t,!0),i=new Ao(t,r.Gn),s=i.Io(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=ho(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Oa(e),t,n)),n.promise}function ja(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new va({next:n=>{t.enqueueAndForget(()=>bo(e,o)),n.fromCache&&"server"===r.source?i.reject(new I(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new To(n,s,{includeMetadataChanges:!0,uo:!0});return yo(e,o)}(await Aa(e),e.asyncQueue,t,n,r)),r.promise}function Ma(e,t){const n=new va(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){w(e).Zr.add(t),t.next()}(await Aa(e),n)),()=>{n.Xo(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){w(e).Zr.delete(t)}(await Aa(e),n))}}function Fa(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>{const r=await function(e){return Sa(e).then(e=>e.datastore)}(e);new wa(e.asyncQueue,r,t,n).run()}),n.promise}function Va(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new ya(e,t)}(function(e,t){if(e instanceof Uint8Array)return ga(e,t);if(e instanceof ArrayBuffer)return ga(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Cs(t));e.asyncQueue.enqueueAndForget(async()=>{ha(await Ca(e),i,r)})}function $a(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=w(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Je.getNamedQuery(e,t))}(await Oa(e),t))}class Ua{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ba{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(e,t,n){if(!n)throw new I(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ha(e,t,n,r){if(!0===t&&!0===r)throw new I(_.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ka(e){if(!ie.isDocumentKey(e))throw new I(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Wa(e){if(ie.isDocumentKey(e))throw new I(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ga(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":v()}function Qa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ga(e);throw new I(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Ja(e,t){if(t<=0)throw new I(_.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new I(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new I(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ha("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ya({}),this._settingsFrozen=!1,e instanceof Ba?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new I(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(e.options.projectId)}(e))}get app(){if(!this._app)throw new I(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new I(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ya(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new S;switch(e.type){case"gapi":e.client;return y(!("object"!=typeof r["_removeServiceInstance"]||null===r["_removeServiceInstance"]||!r["_removeServiceInstance"].auth||!r["_removeServiceInstance"].auth.getAuthHeaderValueForFirstParty)),new C(r["_removeServiceInstance"],e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new I(_.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=qa.get(e);t&&(f("ComponentProvider","Removing Datastore"),qa.delete(e),t.terminate())}(this),Promise.resolve()}}function Za(e,t,n,r={}){var i;const s=(e=Qa(e,Xa))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=c.MOCK_USER;else{t=Object(o["f"])(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new I(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(s)}e._credentials=new k(new E(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ec(this.firestore,e,this._key)}}class tc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new tc(this.firestore,e,this._query)}}class nc extends tc{constructor(e,t,n){super(e,t,Ke(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ec(this.firestore,null,new ie(e))}withConverter(e){return new nc(this.firestore,e,this._path)}}function rc(e,t,...n){if(e=Object(o["k"])(e),za("collection","path",t),e instanceof Xa){const r=B.fromString(t,...n);return Wa(r),new nc(e,null,r)}{if(!(e instanceof ec||e instanceof nc))throw new I(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return Wa(r),new nc(e.firestore,null,r)}}function ic(e,t){if(e=Qa(e,Xa),za("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new I(_.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new tc(e,null,function(e){return new ze(B.emptyPath(),e)}(t))}function sc(e,t,...n){if(e=Object(o["k"])(e),1===arguments.length&&(t=L.I()),za("doc","path",t),e instanceof Xa){const r=B.fromString(t,...n);return Ka(r),new ec(e,null,new ie(r))}{if(!(e instanceof ec||e instanceof nc))throw new I(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return Ka(r),new ec(e.firestore,e instanceof nc?e.converter:null,new ie(r))}}function oc(e,t){return e=Object(o["k"])(e),t=Object(o["k"])(t),(e instanceof ec||e instanceof nc)&&(t instanceof ec||t instanceof nc)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function ac(e,t){return e=Object(o["k"])(e),t=Object(o["k"])(t),e instanceof tc&&t instanceof tc&&e.firestore===t.firestore&&tt(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class cc{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new As(this,"async_queue_retry"),this.Ea=()=>{const e=xs();e&&f("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};const e=xs();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const t=xs();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});const t=new T;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!Or(e))throw e;f("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const t=this.fa.then(()=>(this.ga=!0,e().catch(e=>{throw this.ma=e,this.ga=!1,p("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.ga=!1,e))));return this.fa=t,t}enqueueAfterDelay(e,t,n){this.Ta(),this.pa.indexOf(e)>-1&&(t=0);const r=lo.createAndSchedule(this,e,t,n,e=>this.Ra(e));return this._a.push(r),r}Ta(){this.ma&&v()}verifyOperationInProgress(){}async ba(){let e;do{e=this.fa,await e}while(e!==this.fa)}Pa(e){for(const t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this._a)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const t=this._a.indexOf(e);this._a.splice(t,1)}}function uc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class lc{constructor(){this._progressObserver={},this._taskCompletionResolver=new T,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=-1;class dc extends Xa{constructor(e,t){super(e,t),this.type="firestore",this._queue=new cc,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||pc(this),this._firestoreClient.terminate()}}function fc(e){return e._firestoreClient||pc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function pc(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Ua(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new _a(e._credentials,e._queue,r)}function mc(e,t){Ec(e=Qa(e,dc));const n=fc(e),r=e._freezeSettings(),i=new ma;return vc(n,i,new fa(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function gc(e){Ec(e=Qa(e,dc));const t=fc(e),n=e._freezeSettings(),r=new ma;return vc(t,r,new pa(r,n.cacheSizeBytes))}function vc(e,t,n){const r=new T;return e.asyncQueue.enqueue(async()=>{try{await Ia(e,n),await Ta(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===_.FAILED_PRECONDITION||e.code===_.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}}).then(()=>r.promise)}function yc(e){if(e._initialized&&!e._terminated)throw new I(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new T;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Er.bt())return Promise.resolve();const t=e+"main";await Er.delete(t)}(Pi(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function bc(e){return function(e){const t=new T;return e.asyncQueue.enqueueAndForget(async()=>qo(await Ca(e),t)),t.promise}(fc(e=Qa(e,dc)))}function wc(e){return Na(fc(e=Qa(e,dc)))}function _c(e){return La(fc(e=Qa(e,dc)))}function Ic(e,t){const n=fc(e=Qa(e,dc)),r=new lc;return Va(n,e._databaseId,t,r),r}function Tc(e,t){return $a(fc(e=Qa(e,dc)),t).then(t=>t?new tc(e,null,t.query):null)}function Ec(e){if(e._initialized||e._terminated)throw new I(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new I(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kc(W.fromBase64String(e))}catch(e){throw new I(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new kc(W.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=/^__.*__$/;class Ac{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Dt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Rt(e,this.data,t,this.fieldTransforms)}}class Nc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Dt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Lc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Rc{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new Rc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.ka(e),r}$a(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Zc(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(0===e.length)throw this.Fa("Document fields must not be empty");if(Lc(this.Da)&&Cc.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class Dc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||Cs(e)}Ba(e,t,n,r=!1){return new Rc({Da:e,methodName:t,La:n,path:z.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Pc(e){const t=e._freezeSettings(),n=Cs(e._databaseId);return new Dc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jc(e,t,n,r,i,s={}){const o=e.Ba(s.merge||s.mergeFields?2:0,t,n,i);Qc("Data must be an object, but it was:",o,r);const a=Wc(r,o);let c,u;if(s.merge)c=new H(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Jc(t,r,n);if(!o.contains(i))throw new I(_.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);eu(e,i)||e.push(i)}c=new H(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new Ac(new be(a),c,u)}class Mc extends Oc{_toFieldTransform(e){if(2!==e.Da)throw 1===e.Da?e.Fa(this._methodName+"() can only appear at the top level of your update data"):e.Fa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mc}}function Fc(e,t,n){return new Rc({Da:3,La:t.settings.La,methodName:e._methodName,xa:n},t.databaseId,t.N,t.ignoreUndefinedProperties)}class Vc extends Oc{_toFieldTransform(e){return new It(e.path,new pt)}isEqual(e){return e instanceof Vc}}class $c extends Oc{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=Fc(this,e,!0),n=this.Ua.map(e=>Kc(e,t)),r=new mt(n);return new It(e.path,r)}isEqual(e){return this===e}}class Uc extends Oc{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=Fc(this,e,!0),n=this.Ua.map(e=>Kc(e,t)),r=new vt(n);return new It(e.path,r)}isEqual(e){return this===e}}class Bc extends Oc{constructor(e,t){super(e),this.qa=t}_toFieldTransform(e){const t=new bt(e.N,ut(e.N,this.qa));return new It(e.path,t)}isEqual(e){return this===e}}function qc(e,t,n,r){const i=e.Ba(1,t,n);Qc("Data must be an object, but it was:",i,r);const s=[],a=be.empty();V(r,(e,r)=>{const c=Xc(t,e,n);r=Object(o["k"])(r);const u=i.$a(c);if(r instanceof Mc)s.push(c);else{const e=Kc(r,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new H(s);return new Nc(a,c,i.fieldTransforms)}function zc(e,t,n,r,i,s){const a=e.Ba(1,t,n),c=[Jc(t,r,n)],u=[i];if(s.length%2!=0)throw new I(_.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Jc(t,s[o])),u.push(s[o+1]);const l=[],h=be.empty();for(let f=c.length-1;f>=0;--f)if(!eu(l,c[f])){const e=c[f];let t=u[f];t=Object(o["k"])(t);const n=a.$a(e);if(t instanceof Mc)l.push(e);else{const r=Kc(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new H(l);return new Nc(h,d,a.fieldTransforms)}function Hc(e,t,n,r=!1){return Kc(n,e.Ba(r?4:3,t))}function Kc(e,t){if(Gc(e=Object(o["k"])(e)))return Qc("Unsupported field value:",t,e),Wc(e,t);if(e instanceof Oc)return function(e,t){if(!Lc(t.Da))throw t.Fa(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.Fa(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xa&&4!==t.Da)throw t.Fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Kc(i,t.Oa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["k"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ut(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=j.fromDate(e);return{timestampValue:bn(t.N,n)}}if(e instanceof j){const n=new j(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:bn(t.N,n)}}if(e instanceof xc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof kc)return{bytesValue:wn(t.N,e._byteString)};if(e instanceof ec){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Tn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fa("Unsupported field value: "+Ga(e))}(e,t)}function Wc(e,t){const n={};return $(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):V(e,(e,r)=>{const i=Kc(r,t.Na(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Gc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof j||e instanceof xc||e instanceof kc||e instanceof ec||e instanceof Oc)}function Qc(e,t,n){if(!Gc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Ga(n);throw"an object"===r?t.Fa(e+" a custom object"):t.Fa(e+" "+r)}}function Jc(e,t,n){if((t=Object(o["k"])(t))instanceof Sc)return t._internalPath;if("string"==typeof t)return Xc(e,t);throw Zc("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Yc=new RegExp("[~\\*/\\[\\]]");function Xc(e,t,n){if(t.search(Yc)>=0)throw Zc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Sc(...t.split("."))._internalPath}catch(r){throw Zc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Zc(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new I(_.INVALID_ARGUMENT,a+e+c)}function eu(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ec(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new nu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ru("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class nu extends tu{data(){return super.data()}}function ru(e,t){return"string"==typeof t?Xc(e,t):t instanceof Sc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class su extends tu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ru("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ou extends su{data(e={}){return super.data(e)}}class au{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new iu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ou(this._firestore,this._userDataWriter,n.key,n,new iu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new I(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new ou(e._firestore,e._userDataWriter,n.doc.key,n.doc,new iu(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new ou(e._firestore,e._userDataWriter,t.doc.key,t.doc,new iu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:cu(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function cu(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}function uu(e,t){return e instanceof su&&t instanceof su?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof au&&t instanceof au&&e._firestore===t._firestore&&ac(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(e){if(Ge(e)&&0===e.explicitOrderBy.length)throw new I(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hu{}function du(e,...t){for(const n of t)e=n._apply(e);return e}class fu extends hu{constructor(e,t,n){super(),this.Ka=e,this.ja=t,this.Qa=n,this.type="where"}_apply(e){const t=Pc(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new I(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){xu(o,s);const t=[];for(const n of o)t.push(Ou(r,e,n));a={arrayValue:{values:t}}}else a=Ou(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||xu(o,s),a=Hc(n,t,o,"in"===s||"not-in"===s);const c=xe.create(i,s,a);return function(e,t){if(t.v()){const n=Je(e);if(null!==n&&!n.isEqual(t.field))throw new I(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Qe(e);null!==r&&Cu(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new I(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new I(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new tc(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new ze(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function pu(e,t,n){const r=t,i=ru("where",e);return new fu(i,r,n)}class mu extends hu{constructor(e,t){super(),this.Ka=e,this.Wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new I(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new I(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new $e(t,n);return function(e,t){if(null===Qe(e)){const n=Je(e);null!==n&&Cu(e,n,t.field)}}(e,r),r}(e._query,this.Ka,this.Wa);return new tc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new ze(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function gu(e,t="asc"){const n=t,r=ru("orderBy",e);return new mu(r,n)}class vu extends hu{constructor(e,t,n){super(),this.type=e,this.Ga=t,this.za=n}_apply(e){return new tc(e.firestore,e.converter,et(e._query,this.Ga,this.za))}}function yu(e){return Ja("limit",e),new vu("limit",e,"F")}function bu(e){return Ja("limitToLast",e),new vu("limitToLast",e,"L")}class wu extends hu{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=ku(e,this.type,this.Ha,this.Ja);return new tc(e.firestore,e.converter,function(e,t){return new ze(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function _u(...e){return new wu("startAt",e,!0)}function Iu(...e){return new wu("startAfter",e,!1)}class Tu extends hu{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=ku(e,this.type,this.Ha,this.Ja);return new tc(e.firestore,e.converter,function(e,t){return new ze(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Eu(...e){return new Tu("endBefore",e,!0)}function Su(...e){return new Tu("endAt",e,!1)}function ku(e,t,n,r){if(n[0]=Object(o["k"])(n[0]),n[0]instanceof tu)return function(e,t,n,r,i){if(!r)throw new I(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Xe(e))if(o.field.isKeyField())s.push(de(t,r.key));else{const e=r.data.field(o.field);if(X(e))throw new I(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new I(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Fe(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Pc(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new I(_.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new I(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Ye(e)&&-1!==s.indexOf("/"))throw new I(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(B.fromString(s));if(!ie.isDocumentKey(n))throw new I(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ie(n);a.push(de(t,i))}else{const e=Hc(n,r,s);a.push(e)}}return new Fe(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Ou(e,t,n){if("string"==typeof(n=Object(o["k"])(n))){if(""===n)throw new I(_.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ye(t)&&-1!==n.indexOf("/"))throw new I(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(B.fromString(n));if(!ie.isDocumentKey(r))throw new I(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return de(e,new ie(r))}if(n instanceof ec)return de(e,n._key);throw new I(_.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ga(n)}.`)}function xu(e,t){if(!Array.isArray(e)||0===e.length)throw new I(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new I(_.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Cu(e,t,n){if(!n.isEqual(t))throw new I(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{convertValue(e,t="none"){switch(se(e)){case 0:return null;case 1:return e.booleanValue;case 2:return J(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Y(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return V(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new xc(J(e.latitude),J(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":Z(e);return null==r["_registerComponent"]?null:this.convertValue(r["_registerComponent"],t);case"estimate":return this.convertTimestamp(ee(e));default:return null}}convertTimestamp(e){const t=Q(e);return new j(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=B.fromString(e);y(Xn(n));const r=new Ba(n.get(1),n.get(3)),i=new ie(n.popFirst(5));return r.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Lu extends Au{constructor(e){super(),this.firestore=e}convertBytes(e){return new kc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ec(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Pc(e)}set(e,t,n){this._verifyNotCommitted();const r=Du(e,this._firestore),i=Nu(r.converter,t,n),s=jc(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,St.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Du(e,this._firestore);let s;return s="string"==typeof(t=Object(o["k"])(t))||t instanceof Sc?zc(this._dataReader,"WriteBatch.update",i._key,t,n,r):qc(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,St.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Du(e,this._firestore);return this._mutations=this._mutations.concat(new Ft(t._key,St.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new I(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Du(e,t){if((e=Object(o["k"])(e)).firestore!==t)throw new I(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(e){e=Qa(e,ec);const t=Qa(e.firestore,dc);return Da(fc(t),e._key).then(n=>Qu(t,e,n))}class ju extends Au{constructor(e){super(),this.firestore=e}convertBytes(e){return new kc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ec(this.firestore,null,t)}}function Mu(e){e=Qa(e,ec);const t=Qa(e.firestore,dc),n=fc(t),r=new ju(t);return Ra(n,e._key).then(n=>new su(t,r,e._key,n,new iu(null!==n&&n.hasLocalMutations,!0),e.converter))}function Fu(e){e=Qa(e,ec);const t=Qa(e.firestore,dc);return Da(fc(t),e._key,{source:"server"}).then(n=>Qu(t,e,n))}function Vu(e){e=Qa(e,tc);const t=Qa(e.firestore,dc),n=fc(t),r=new ju(t);return lu(e._query),ja(n,e._query).then(n=>new au(t,r,e,n))}function $u(e){e=Qa(e,tc);const t=Qa(e.firestore,dc),n=fc(t),r=new ju(t);return Pa(n,e._query).then(n=>new au(t,r,e,n))}function Uu(e){e=Qa(e,tc);const t=Qa(e.firestore,dc),n=fc(t),r=new ju(t);return ja(n,e._query,{source:"server"}).then(n=>new au(t,r,e,n))}function Bu(e,t,n){e=Qa(e,ec);const r=Qa(e.firestore,dc),i=Nu(e.converter,t,n);return Gu(r,[jc(Pc(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,St.none())])}function qu(e,t,n,...r){e=Qa(e,ec);const i=Qa(e.firestore,dc),s=Pc(i);let a;return a="string"==typeof(t=Object(o["k"])(t))||t instanceof Sc?zc(s,"updateDoc",e._key,t,n,r):qc(s,"updateDoc",e._key,t),Gu(i,[a.toMutation(e._key,St.exists(!0))])}function zu(e){return Gu(Qa(e.firestore,dc),[new Ft(e._key,St.none())])}function Hu(e,t){const n=Qa(e.firestore,dc),r=sc(e),i=Nu(e.converter,t);return Gu(n,[jc(Pc(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,St.exists(!1))]).then(()=>r)}function Ku(e,...t){var n,r,i;e=Object(o["k"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||uc(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(uc(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof ec)l=Qa(e.firestore,dc),h=Ke(e._key.path),u={next:n=>{t[a]&&t[a](Qu(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Qa(e,tc);l=Qa(n.firestore,dc),h=n._query;const r=new ju(l);u={next:e=>{t[a]&&t[a](new au(l,r,n,e))},error:t[a+1],complete:t[a+2]},lu(e._query)}return function(e,t,n,r){const i=new va(r),s=new To(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>yo(await Aa(e),s)),()=>{i.Xo(),e.asyncQueue.enqueueAndForget(async()=>bo(await Aa(e),s))}}(fc(l),h,c,u)}function Wu(e,t){return Ma(fc(e=Qa(e,dc)),uc(t)?t:{next:t})}function Gu(e,t){return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>Mo(await Ca(e),t,n)),n.promise}(fc(e),t)}function Qu(e,t,n){const r=n.docs.get(t._key),i=new ju(e);return new su(e,i,t._key,r,new iu(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Pc(e)}get(e){const t=Du(e,this._firestore),n=new Lu(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return v();const r=e[0];if(r.isFoundDocument())return new tu(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new tu(this._firestore,n,t._key,null,t.converter);throw v()})}set(e,t,n){const r=Du(e,this._firestore),i=Nu(r.converter,t,n),s=jc(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Du(e,this._firestore);let s;return s="string"==typeof(t=Object(o["k"])(t))||t instanceof Sc?zc(this._dataReader,"Transaction.update",i._key,t,n,r):qc(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Du(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Du(e,this._firestore),n=new ju(this._firestore);return super.get(e).then(e=>new su(this._firestore,n,t._key,e._document,new iu(!1,!1),t.converter))}}function Yu(e,t){return Fa(fc(e),n=>t(new Ju(e,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(){return new Mc("deleteField")}function Zu(){return new Vc("serverTimestamp")}function el(...e){return new $c("arrayUnion",e)}function tl(...e){return new Uc("arrayRemove",e)}function nl(e){return new Bc("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rl;!function(e){u=e}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new dc(n,new O(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r},"PUBLIC")),Object(r["registerVersion"])("@firebase/firestore","3.1.0",rl)}).call(this,n("4362"))},"0b42":function(e,t,n){var r=n("e8b5"),i=n("68ee"),s=n("861d"),o=n("b622"),a=o("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===Array||r(t.prototype))?t=void 0:s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}},"0cb2":function(e,t,n){var r=n("7b0b"),i=Math.floor,s="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,c,u,l){var h=n+e.length,d=c.length,f=a;return void 0!==u&&(u=r(u),f=o),s.call(l,f,(function(r,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(h);case"<":o=u[s.slice(1,-1)];break;default:var a=+s;if(0===a)return r;if(a>d){var l=i(a/10);return 0===l?r:l<=d?void 0===c[l-1]?s.charAt(1):c[l-1]+s.charAt(1):r}o=c[a-1]}return void 0===o?"":o}))}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),s=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t){e.exports=function(e){try{return String(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1148:function(e,t,n){"use strict";var r=n("a691"),i=n("577e"),s=n("1d80");e.exports=function(e){var t=i(s(this)),n="",o=r(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),s=n("825a"),o=n("1d80"),a=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("577e"),h=n("dc4a"),d=n("14c3"),f=n("9263"),p=n("9f7f"),m=n("d039"),g=p.UNSUPPORTED_Y,v=[].push,y=Math.min,b=4294967295,w=!m((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=l(o(this)),s=void 0===n?b:n>>>0;if(0===s)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,s);var a,c,u,h=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=new RegExp(e.source,d+"g");while(a=f.call(m,r)){if(c=m.lastIndex,c>p&&(h.push(r.slice(p,a.index)),a.length>1&&a.index<r.length&&v.apply(h,a.slice(1)),u=a[0].length,p=c,h.length>=s))break;m.lastIndex===a.index&&m.lastIndex++}return p===r.length?!u&&m.test("")||h.push(""):h.push(r.slice(p)),h.length>s?h.slice(0,s):h}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=o(this),s=void 0==t?void 0:h(t,e);return s?s.call(t,i,n):r.call(l(i),t,n)},function(e,i){var o=s(this),h=l(e),f=n(r,o,h,i,r!==t);if(f.done)return f.value;var p=a(o,RegExp),m=o.unicode,v=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"g":"y"),w=new p(g?"^(?:"+o.source+")":o,v),_=void 0===i?b:i>>>0;if(0===_)return[];if(0===h.length)return null===d(w,h)?[h]:[];var I=0,T=0,E=[];while(T<h.length){w.lastIndex=g?0:T;var S,k=d(w,g?h.slice(T):h);if(null===k||(S=y(u(w.lastIndex+(g?T:0)),h.length))===I)T=c(h,T,m);else{if(E.push(h.slice(I,T)),E.length===_)return E;for(var O=1;O<=k.length-1;O++)if(E.push(k[O]),E.length===_)return E;T=I=S}}return E.push(h.slice(I)),E}]}),!w,g)},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"132d":function(e,t,n){"use strict";var r,i=n("5530"),s=(n("c96a"),n("caad"),n("2532"),n("a9e3"),n("498a"),n("7db0"),n("fb6a"),n("4804"),n("7e2b")),o=n("a9ad"),a=n("af2b"),c=n("7560"),u=n("80d2"),l=n("2b0e"),h=n("58df");function d(e){return["fas","far","fal","fab","fad","fak"].some((function(t){return e.includes(t)}))}function f(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(r||(r={}));var p=Object(h["a"])(s["a"],o["a"],a["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),Object(u["t"])(this,e)},getSize:function(){var e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=Object(u["q"])(e).find((function(t){return e[t]}));return t&&r[t]||Object(u["f"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(i["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var e=this.getSize(),t=Object(i["a"])(Object(i["a"])({},this.getDefaultData()),{},{style:e?{fontSize:e,height:e,width:e}:void 0});return this.applyColors(t),t},applyColors:function(e){e.class=Object(i["a"])(Object(i["a"])({},e.class),this.themeClasses),this.setTextColor(this.color,e)},renderFontIcon:function(e,t){var n=[],r=this.getDefaultData(),i="material-icons",s=e.indexOf("-"),o=s<=-1;o?n.push(e):(i=e.slice(0,s),d(i)&&(i="")),r.class[i]=!0,r.class[e]=!o;var a=this.getSize();return a&&(r.style={fontSize:a}),this.applyColors(r),t(this.hasClickListener?"button":this.tag,r,n)},renderSvgIcon:function(e,t){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",n,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent:function(e,t){var n={class:{"v-icon__component":!0}},r=this.getSize();r&&(n.style={fontSize:r,height:r,width:r}),this.applyColors(n);var i=e.component;return n.props=e.props,n.nativeOn=n.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(i,n)])}},render:function(e){var t=this.getIcon();return"string"===typeof t?f(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});t["a"]=l["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(e,t){var n=t.data,r=t.children,i="";return n.domProps&&(i=n.domProps.textContent||n.domProps.innerHTML||i,delete n.domProps.textContent,delete n.domProps.innerHTML),e(p,n,i?[i]:r)}})},"14c3":function(e,t,n){var r=n("825a"),i=n("1626"),s=n("c6b6"),o=n("9263");e.exports=function(e,t){var n=e.exec;if(i(n)){var a=n.call(e,t);return null!==a&&r(a),a}if("RegExp"===s(e))return o.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==o)try{a(e,"forEach",o)}catch(t){e.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},"15fd":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("a4d3"),n("b64b");function r(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function i(e,t){if(null==e)return{};var n,i,s=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}},1626:function(e,t){e.exports=function(e){return"function"===typeof e}},"166a":function(e,t,n){},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");e.exports=s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},1862:function(e,t,n){"use strict";var r=n("614a"),i=n("0829"),s=n("1fd5"),o=n("ffa6");const a="@firebase/firestore-compat",c="0.1.3";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(i["b"].fromBase64String(e))}static fromUint8Array(e){return l(),new d(i["b"].fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(e,t){return Object(i["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(i["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(i["x"])(e._delegate)}}class g{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof i["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(i["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(i["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new N(this,Object(i["y"])(this._delegate,e))}catch(t){throw T(t,"collection()","Firestore.collection()")}}doc(e){try{return new I(this,Object(i["E"])(this._delegate,e))}catch(t){throw T(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new x(this,Object(i["z"])(this._delegate,e))}catch(t){throw T(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(i["db"])(this._delegate,t=>e(new b(this,t)))}batch(){return Object(i["K"])(this._delegate),new w(new i["l"](this._delegate,e=>Object(i["L"])(this._delegate,e)))}loadBundle(e){return Object(i["V"])(this._delegate,e)}namedQuery(e){return Object(i["W"])(this._delegate,e).then(e=>e?new x(this,e):null)}}class v extends i["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new i["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return I.forKey(t,this.firestore,null)}}function y(e){Object(i["gb"])(e)}class b{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new v(e)}get(e){const t=L(e);return this._delegate.get(t).then(e=>new k(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=L(e);return n?(u("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=L(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=L(e);return this._delegate.delete(t),this}}class w{constructor(e){this._delegate=e}set(e,t,n){const r=L(e);return n?(u("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=L(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=L(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new i["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new O(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new _(e,new v(e),t),r.set(t,i)),i}}_.INSTANCES=new WeakMap;class I{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}static forPath(e,t,n){if(e.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new I(t,new i["d"](t._delegate,n,new i["n"](e)))}static forKey(e,t,n){return new I(t,new i["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new N(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new N(this.firestore,Object(i["y"])(this._delegate,e))}catch(t){throw T(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(s["k"])(e),e instanceof i["d"]&&Object(i["cb"])(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?Object(i["fb"])(this._delegate,e,t):Object(i["fb"])(this._delegate,e)}catch(n){throw T(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(i["kb"])(this._delegate,e):Object(i["kb"])(this._delegate,e,t,...n)}catch(r){throw T(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...e){const t=E(e),n=S(e,e=>new k(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),t.then(e=>new k(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new I(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function T(e,t,n){return e.message=e.message.replace(t,n),e}function E(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function S(e,t){var n,r;let i;return i=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class k{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new I(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class O extends k{data(e){const t=this._delegate.data(e);return Object(i["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class x{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}where(e,t,n){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(e,t,n)))}catch(r){throw T(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(e,t)))}catch(n){throw T(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(e)))}catch(t){throw T(t,"limit()","Query.limit()")}}limitToLast(e){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(e)))}catch(t){throw T(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...e)))}catch(t){throw T(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...e)))}catch(t){throw T(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...e)))}catch(t){throw T(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...e)))}catch(t){throw T(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(i["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),t.then(e=>new A(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=E(e),n=S(e,e=>new A(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(i["X"])(this._delegate,t,n)}withConverter(e){return new x(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class C{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new O(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class A{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new x(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new O(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new C(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new O(this._firestore,n))})}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class N extends x{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new I(this.firestore,e):null}doc(e){try{return new I(this.firestore,void 0===e?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,e))}catch(t){throw T(t,"doc()","CollectionReference.doc()")}}add(e){return Object(i["u"])(this._delegate,e).then(e=>new I(this.firestore,e))}isEqual(e){return Object(i["cb"])(this._delegate,e._delegate)}withConverter(e){return new N(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function L(e){return Object(i["p"])(e,i["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(...e){this._delegate=new i["f"](...e)}static documentId(){return new R(i["o"].keyField().canonicalString())}isEqual(e){return e=Object(s["k"])(e),e instanceof i["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(i["eb"])();return e._methodName="FieldValue.serverTimestamp",new D(e)}static delete(){const e=Object(i["C"])();return e._methodName="FieldValue.delete",new D(e)}static arrayUnion(...e){const t=Object(i["w"])(...e);return t._methodName="FieldValue.arrayUnion",new D(t)}static arrayRemove(...e){const t=Object(i["v"])(...e);return t._methodName="FieldValue.arrayRemove",new D(t)}static increment(e){const t=Object(i["S"])(e);return t._methodName="FieldValue.increment",new D(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={Firestore:g,GeoPoint:i["h"],Timestamp:i["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:I,DocumentSnapshot:k,Query:x,QueryDocumentSnapshot:O,QuerySnapshot:A,CollectionReference:N,FieldPath:R,FieldValue:D,setLogLevel:y,CACHE_SIZE_UNLIMITED:i["c"]};function j(e,t){e.INTERNAL.registerComponent(new o["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)},"PUBLIC").setServiceProps(Object.assign({},P)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){j(e,(e,t)=>new g(e,t,new m)),e.registerVersion(a,c)}M(r["a"])},"18a5":function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),s=n("af03");r({target:"String",proto:!0,forced:s("anchor")},{anchor:function(e){return i(this,"a","name",e)}})},"19aa":function(e,t){e.exports=function(e,t,n){if(e instanceof t)return e;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1b2c":function(e,t,n){},"1baa":function(e,t,n){"use strict";var r=n("5530"),i=(n("899c"),n("a9e3"),n("4de4"),n("caad"),n("2532"),n("a434"),n("159b"),n("fb6a"),n("7db0"),n("c740"),n("166a"),n("a452")),s=n("7560"),o=n("58df"),a=n("d9bd"),c=Object(o["a"])(i["a"],s["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(r["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var e=this;return this.items.filter((function(t,n){return e.toggleMethod(e.getValue(t,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var e=this;if(!this.multiple)return function(t){return e.internalValue===t};var t=this.internalValue;return Array.isArray(t)?function(e){return t.includes(e)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(a["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(e,t){return null==e.value||""===e.value?t:e.value},onClick:function(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register:function(e){var t=this,n=this.items.push(e)-1;e.$on("change",(function(){return t.onClick(e)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,n)},unregister:function(e){if(!this._isDestroyed){var t=this.items.indexOf(e),n=this.getValue(e,t);this.items.splice(t,1);var r=this.selectedValues.indexOf(n);if(!(r<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(e){return e!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(e,t){var n=this.getValue(e,t);e.isActive=this.toggleMethod(n)},updateItemsState:function(){var e=this;this.$nextTick((function(){if(e.mandatory&&!e.selectedItems.length)return e.updateMandatory();e.items.forEach(e.updateItem)}))},updateInternalValue:function(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory:function(e){if(this.items.length){var t=this.items.slice();e&&t.reverse();var n=t.find((function(e){return!e.disabled}));if(n){var r=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,r))}}},updateMultiple:function(e){var t=Array.isArray(this.internalValue)?this.internalValue:[],n=t.slice(),r=n.findIndex((function(t){return t===e}));this.mandatory&&r>-1&&n.length-1<1||null!=this.max&&r<0&&n.length+1>this.max||(r>-1?n.splice(r,1):n.push(e),this.internalValue=n)},updateSingle:function(e){var t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render:function(e){return e(this.tag,this.genData(),this.$slots.default)}}),u=(c.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),n("a9ad"));t["a"]=Object(o["a"])(c,u["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},c.options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(r["a"])(Object(r["a"])({},c.options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}})},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1c87":function(e,t,n){"use strict";var r=n("ade3"),i=n("5530"),s=(n("9911"),n("498a"),n("99af"),n("ac1f"),n("5319"),n("2b0e")),o=n("5607"),a=n("80d2");t["a"]=s["a"].extend({name:"routable",directives:{Ripple:o["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple:function(){var e;return null!=(e=this.ripple)?e:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},methods:{click:function(e){this.$emit("click",e)},generateRouteLink:function(){var e,t,n=this.exact,s=(e={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(r["a"])(e,this.to?"nativeOn":"on",Object(i["a"])(Object(i["a"])({},this.$listeners),{},{click:this.click})),Object(r["a"])(e,"ref","link"),e);if("undefined"===typeof this.exact&&(n="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var o=this.activeClass,a=this.exactActiveClass||o;this.proxyClass&&(o="".concat(o," ").concat(this.proxyClass).trim(),a="".concat(a," ").concat(this.proxyClass).trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:n,exactPath:this.exactPath,activeClass:o,exactActiveClass:a,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:t,data:s}},onRouteChange:function(){var e=this;if(this.to&&this.$refs.link&&this.$route){var t="".concat(this.activeClass," ").concat(this.proxyClass||"").trim(),n="_vnode.data.class.".concat(t);this.$nextTick((function(){Object(a["k"])(e.$refs.link,n)&&e.toggle()}))}},toggle:function(){}}})},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return Fe})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ft})),n.d(t,"e",(function(){return mt})),n.d(t,"f",(function(){return pt})),n.d(t,"g",(function(){return Ze})),n.d(t,"h",(function(){return dt})),n.d(t,"i",(function(){return Ar})),n.d(t,"j",(function(){return zi})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return Ir})),n.d(t,"m",(function(){return vt})),n.d(t,"n",(function(){return yt})),n.d(t,"o",(function(){return I})),n.d(t,"p",(function(){return Ne})),n.d(t,"q",(function(){return v})),n.d(t,"r",(function(){return Rn})),n.d(t,"s",(function(){return k})),n.d(t,"t",(function(){return ri})),n.d(t,"u",(function(){return fe})),n.d(t,"w",(function(){return Ut})),n.d(t,"x",(function(){return xn})),n.d(t,"y",(function(){return Ui})),n.d(t,"z",(function(){return An})),n.d(t,"A",(function(){return Bt})),n.d(t,"B",(function(){return $t})),n.d(t,"C",(function(){return Re})),n.d(t,"E",(function(){return zt})),n.d(t,"F",(function(){return d})),n.d(t,"G",(function(){return Jt})),n.d(t,"H",(function(){return dn})),n.d(t,"I",(function(){return mn})),n.d(t,"J",(function(){return ni})),n.d(t,"K",(function(){return de})),n.d(t,"L",(function(){return tr})),n.d(t,"M",(function(){return Wt})),n.d(t,"N",(function(){return Lt})),n.d(t,"O",(function(){return kr})),n.d(t,"P",(function(){return $r})),n.d(t,"Q",(function(){return ei})),n.d(t,"R",(function(){return _n})),n.d(t,"S",(function(){return Rt})),n.d(t,"T",(function(){return Or})),n.d(t,"U",(function(){return Vr})),n.d(t,"V",(function(){return Xr})),n.d(t,"W",(function(){return Yt})),n.d(t,"X",(function(){return Vt})),n.d(t,"Y",(function(){return Kt})),n.d(t,"Z",(function(){return It})),n.d(t,"ab",(function(){return Nt})),n.d(t,"bb",(function(){return Pt})),n.d(t,"cb",(function(){return Ht})),n.d(t,"db",(function(){return Gt})),n.d(t,"eb",(function(){return Sr})),n.d(t,"fb",(function(){return Fr})),n.d(t,"gb",(function(){return Jr})),n.d(t,"hb",(function(){return kt})),n.d(t,"ib",(function(){return tn})),n.d(t,"jb",(function(){return nn})),n.d(t,"kb",(function(){return Cr})),n.d(t,"lb",(function(){return en})),n.d(t,"mb",(function(){return Xt})),n.d(t,"nb",(function(){return qt})),n.d(t,"v",(function(){return _s})),n.d(t,"D",(function(){return bs}));var r=n("1fd5"),i=n("5606");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n("4fc1"),a=n("ffa6");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function g(e,...t){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw _(e,...t)}function y(e,...t){return _(e,...t)}function b(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function w(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&v(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function I(e,t,...n){if(!e)throw _(t,...n)}function T(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function E(e,t){e||T(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function k(e){E(e instanceof Function,"Expected a class definition");let t=S.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,S.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(k);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===A()||"https:"===A()}function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||Object(r["n"])()||"connection"in navigator))||navigator.onLine}function L(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["s"])()||Object(r["u"])()}get(){return N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},M=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,i,s={}){return $(e,s,()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["x"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=new(P.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),P.fetch()(B(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function $(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},j),t);try{const t=new q(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw z(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw z(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);v(e,a)}}catch(s){if(s instanceof r["c"])throw s;v(e,"network-request-failed")}}async function U(e,t,n,r,i={}){const s=await V(e,t,n,r,i);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{serverResponse:s}),s}function B(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"timeout")),M.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=y(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return V(e,"POST","/v1/accounts:update",t)}async function W(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=Object(r["k"])(e),i=await n.getIdToken(t),s=Y(i);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:G(J(s.auth_time)),issuedAtTime:G(J(s.iat)),expirationTime:G(J(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function J(e){return 1e3*Number(e)}function Y(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",s),null}}function X(e){const t=Y(e);return I(t,"internal-error"),I("undefined"!==typeof t.exp,"internal-error"),I("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&ee(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Z(e,W(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?oe(s.providerUserInfo):[],a=se(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ne(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ie(e){const t=Object(r["k"])(e);await re(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function se(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function oe(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t){const n=await $(e,{},()=>{const n=Object(r["x"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=B(e,i,"/v1/token","key="+s);return P.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I("undefined"!==typeof e.idToken,"internal-error"),I("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ae(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ce;return n&&(I("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){I("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new ne(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Z(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return ie(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await re(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,H(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:T}=t;I(y&&T,e,"internal-error");const E=ce.fromJSON(this.name,T);I("string"===typeof y,e,"internal-error"),ue(l,e.name),ue(h,e.name),I("boolean"===typeof b,e,"internal-error"),I("boolean"===typeof w,e,"internal-error"),ue(d,e.name),ue(f,e.name),ue(p,e.name),ue(m,e.name),ue(g,e.name),ue(v,e.name);const S=new le({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ce;r.updateFromServerResponse(t);const i=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await re(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(k(de),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||k(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=le._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(Ie(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=Object(r["l"])()){return/firefox\//i.test(e)}function ve(e=Object(r["l"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=Object(r["l"])()){return/crios\//i.test(e)}function be(e=Object(r["l"])()){return/iemobile/i.test(e)}function we(e=Object(r["l"])()){return/android/i.test(e)}function _e(e=Object(r["l"])()){return/blackberry/i.test(e)}function Ie(e=Object(r["l"])()){return/webos/i.test(e)}function Te(e=Object(r["l"])()){return/iphone|ipad|ipod/i.test(e)}function Ee(e=Object(r["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Se(e=Object(r["l"])()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return Object(r["q"])()&&10===document.documentMode}function Oe(e=Object(r["l"])()){return Te(e)||we(e)||Ie(e)||_e(e)||/windows phone/i.test(e)||be(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=me(Object(r["l"])());break;case"Worker":n=`${me(Object(r["l"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=k(t)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await pe.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await re(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["k"])(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(k(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&k(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[k(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ne(e){return Object(r["k"])(e)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["g"])(e=>this.observer=e)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Re(e,t,n){const r=Ne(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=De(t),{host:o,port:a}=Pe(t),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Me(i)}function De(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Pe(e){const t=De(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:je(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:je(t)}}}function je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Me(e){function t(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"===typeof window||"undefined"===typeof document||e||("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return T("not implemented")}_getIdTokenResponse(e){return T("not implemented")}_linkToIdToken(e,t){return T("not implemented")}_getReauthenticationResolver(e){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return V(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function $e(e,t){return V(e,"POST","/v1/accounts:update",t)}async function Ue(e,t){return V(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function qe(e,t){return V(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function ze(e,t){return qe(e,t)}async function He(e,t){return qe(e,t)}async function Ke(e,t){return qe(e,t)}async function We(e,t){return qe(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function Qe(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Fe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Je(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Je(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Be(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ge(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return $e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="http://localhost";class Ze extends Fe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ze(n,r);return Object.assign(o,i),o}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ye(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["x"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function tt(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function nt(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),rt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Fe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new st({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=Object(r["y"])(Object(r["j"])(e))["link"],n=t?Object(r["y"])(Object(r["j"])(t))["deep_link_id"]:null,i=Object(r["y"])(Object(r["j"])(e))["deep_link_id"],s=i?Object(r["y"])(Object(r["j"])(i))["link"]:null;return s||i||n||t||e}class ct{constructor(e){var t,n,i,s,o,a;const c=Object(r["y"])(Object(r["j"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(i=c["mode"])&&void 0!==i?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return I(n,"argument-error"),Je._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dt extends ht{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),Ze._fromParams(t)}credential(e){return this._credential(e)}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),Ze._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return dt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new dt(o)._credential({idToken:t,accessToken:n,rawNonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(r){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt="http://localhost";class vt extends Fe{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ye(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new vt(n,i):null}static _create(e,t){return new vt(e,t)}buildRequest(){return{requestUri:gt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return yt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bt(e,t){return U(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.TWITTER_SIGN_IN_METHOD="twitter.com",yt.PROVIDER_ID="twitter.com";class wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await le._fromIdTokenResponse(e,n,r),s=_t(n),o=new wt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=_t(n);return new wt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function _t(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e){var t;const n=Ne(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new wt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await bt(n,{returnSecureToken:!0}),i=await wt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Tt.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Tt(e,t,n,r)}}function Et(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e,t){const n=Object(r["k"])(e);await xt(!0,n,t);const{providerUserInfo:i}=await K(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=St(i||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ot(e,t,n=!1){const r=await Z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wt._forOperation(e,"link",r)}async function xt(e,t,n){await re(t);const r=St(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";I(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Z(e,Et(r,i,t,e),n);I(s.idToken,r,"internal-error");const o=Y(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(e.uid===a,r,"user-mismatch"),wt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(e,t,n=!1){const r="signIn",i=await Et(e,r,t),s=await wt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Nt(e,t){return At(Ne(e),t)}async function Lt(e,t){const n=Object(r["k"])(e);return await xt(!1,n,t.providerId),Ot(n,t)}async function Rt(e,t){return Ct(Object(r["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t){return U(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t){const n=Ne(e),r=await Dt(n,{token:t,returnSecureToken:!0}),i=await wt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Mt._fromServerResponse(e,t):v(e,"internal-error")}}class Mt extends jt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Mt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iosBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t,n){const i=Object(r["k"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&Ft(i,s,n),await He(i,s)}async function $t(e,t,n){await Ve(Object(r["k"])(e),{oobCode:t,newPassword:n})}async function Ut(e,t){await Ue(Object(r["k"])(e),{oobCode:t})}async function Bt(e,t){const n=Object(r["k"])(e),i=await Ve(n,{oobCode:t}),s=i.requestType;switch(I(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(i.mfaInfo,n,"internal-error");default:I(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=jt._fromServerResponse(Ne(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function qt(e,t){const{data:n}=await Bt(Object(r["k"])(e),t);return n.email}async function zt(e,t,n){const r=Ne(e),i=await bt(r,{returnSecureToken:!0,email:t,password:n}),s=await wt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ht(e,t,n){return Nt(Object(r["k"])(e),ut.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,t,n){const i=Object(r["k"])(e),s={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,i,"argument-error"),n&&Ft(i,s,n),await Ke(i,s)}function Wt(e,t){const n=ct.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Gt(e,t,n){const i=Object(r["k"])(e),s=ut.credentialWithLink(t,n||x());return I(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Nt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t){return V(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){const n=C()?x():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await Qt(Object(r["k"])(e),i);return s||[]}async function Yt(e,t){const n=Object(r["k"])(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&Ft(n.auth,s,t);const{email:o}=await ze(n.auth,s);o!==e.email&&await e.reload()}async function Xt(e,t,n){const i=Object(r["k"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&Ft(i.auth,o,n);const{email:a}=await We(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["k"])(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await Z(i,Zt(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function tn(e,t){return rn(Object(r["k"])(e),t,null)}function nn(e,t){return rn(Object(r["k"])(e),null,t)}async function rn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await Z(e,$e(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Y(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new on(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new cn(s,i);case"github.com":return new un(s,i);case"google.com":return new ln(s,i);case"twitter.com":return new hn(s,i,e.screenName||null);case"custom":case"anonymous":return new on(s,null);default:return new on(s,r,i)}}class on{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class an extends on{constructor(e,t,n,r){super(e,t,n),this.username=r}}class cn extends on{constructor(e,t){super(e,"facebook.com",t)}}class un extends an{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class ln extends on{constructor(e,t){super(e,"google.com",t)}}class hn extends an{constructor(e,t,n){super(e,"twitter.com",t,n)}}function dn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:sn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new fn("enroll",e)}static _fromMfaPendingCredential(e){return new fn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return fn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return fn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ne(e),r=(t.serverResponse.mfaInfo||[]).map(e=>jt._fromServerResponse(n,e));I(t.serverResponse.mfaPendingCredential,n,"internal-error");const i=fn._fromMfaPendingCredential(t.serverResponse.mfaPendingCredential);return new pn(i,r,async e=>{const r=await e._process(n,i);delete t.serverResponse.mfaInfo,delete t.serverResponse.mfaPendingCredential;const s=Object.assign(Object.assign({},t.serverResponse),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await wt._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),wt._forOperation(t.user,t.operationType,s);default:v(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function mn(e,t){var n;const i=Object(r["k"])(e),s=t;return I(t.operationType,i,"argument-error"),I(null===(n=s.serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),pn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function vn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function yn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class bn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>jt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new bn(e)}async getSession(){return fn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await Z(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await Z(this.user,yn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const wn=new WeakMap;function _n(e){const t=Object(r["k"])(e);return wn.has(t)||wn.set(t,bn._fromUser(t)),wn.get(t)}const In="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(In,"1"),this.storage.removeItem(In),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){const e=Object(r["l"])();return ve(e)||Te(e)}const Sn=1e3,kn=10;class On extends Tn{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=En()&&xe(),this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ke()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Sn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}On.type="LOCAL";const xn=On;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Tn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cn.type="SESSION";const An=Cn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ln(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Nn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.receivers=[];class Dn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Rn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function jn(e){Pn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return"undefined"!==typeof Pn()["WorkerGlobalScope"]&&"function"===typeof Pn()["importScripts"]}async function Fn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Vn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function $n(){return Mn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="firebaseLocalStorageDb",Bn=1,qn="firebaseLocalStorage",zn="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Kn(e,t){return e.transaction([qn],t?"readwrite":"readonly").objectStore(qn)}function Wn(){const e=indexedDB.deleteDatabase(Un);return new Hn(e).toPromise()}function Gn(){const e=indexedDB.open(Un,Bn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(qn,{keyPath:zn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(qn)?t(n):(n.close(),await Wn(),t(await Gn()))})})}async function Qn(e,t,n){const r=Kn(e,!0).put({[zn]:t,value:n});return new Hn(r).toPromise()}async function Jn(e,t){const n=Kn(e,!1).get(t),r=await new Hn(n).toPromise();return void 0===r?null:r.value}function Yn(e,t){const n=Kn(e,!0).delete(t);return new Hn(n).toPromise()}const Xn=800,Zn=3;class er{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Gn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Zn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ln._getInstance($n()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Fn(),!this.activeServiceWorker)return;this.sender=new Dn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Vn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gn();return await Qn(e,In,"1"),await Yn(e,In),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Jn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Kn(e,!1).getAll();return new Hn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}er.type="LOCAL";const tr=er;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function rr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function or(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",sr().appendChild(r)})}function ar(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=500,ur=6e4,lr=1e12;class hr{constructor(e){this.auth=e,this.counter=lr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new dr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||lr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||lr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||lr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class dr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=fr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},ur)},cr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function fr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=ar("rcb"),mr=new R(3e4,6e4),gr="https://www.google.com/recaptcha/api.js?";class vr{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Pn().grecaptcha}load(e,t=""){return I(yr(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Pn().grecaptcha):new Promise((n,i)=>{const s=Pn().setTimeout(()=>{i(y(e,"network-request-failed"))},mr.get());Pn()[pr]=()=>{Pn().clearTimeout(s),delete Pn()[pr];const r=Pn().grecaptcha;if(!r)return void i(y(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${gr}?${Object(r["x"])({onload:pr,render:"explicit",hl:t})}`;or(o).catch(()=>{clearTimeout(s),i(y(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Pn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function yr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class br{async load(e){return new hr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="recaptcha",_r={theme:"light",type:"image"};class Ir{constructor(e,t=Object.assign({},_r),n){this.parameters=t,this.type=wr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new br:new vr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=Pn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(C()&&!Mn(),this.auth,"internal-error"),await Tr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ir(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Tr(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=st._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Sr(e,t,n){const i=Ne(e),s=await xr(i,t,Object(r["k"])(n));return new Er(s,e=>Nt(i,e))}async function kr(e,t,n){const i=Object(r["k"])(e);await xt(!1,i,"phone");const s=await xr(i.auth,t,Object(r["k"])(n));return new Er(s,e=>Lt(i,e))}async function Or(e,t,n){const i=Object(r["k"])(e),s=await xr(i.auth,t,Object(r["k"])(n));return new Er(s,e=>Rt(i,e))}async function xr(e,t,n){var r;const i=await n.verify();try{let s;if(I("string"===typeof i,e,"argument-error"),I(n.type===wr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){I("enroll"===t.type,e,"internal-error");const n=await gn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;I(n,e,"missing-multi-factor-info");const o=await nr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Cr(e,t){await Ot(Object(r["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.providerId=Ar.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,t){return xr(this.auth,e,Object(r["k"])(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ar.credentialFromTaggedObject(t)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nr(e,t){return t?k(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ar.PROVIDER_ID="phone",Ar.PHONE_SIGN_IN_METHOD="phone";class Lr extends Fe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ye(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rr(e){return At(e.auth,new Lr(e),e.bypassAuthState)}function Dr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Ct(n,new Lr(e),e.bypassAuthState)}async function Pr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Ot(n,new Lr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rr;case"linkViaPopup":case"linkViaRedirect":return Pr;case"reauthViaPopup":case"reauthViaRedirect":return Dr;default:v(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new R(2e3,1e4);async function Fr(e,t,n){const r=Ne(e);w(e,t,lt);const i=Nr(r,n),s=new Ur(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Vr(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Nr(i.auth,n),o=new Ur(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function $r(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Nr(i.auth,n),o=new Ur(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class Ur extends jr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=Rn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Mr.get())};e()}}Ur.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Br="pendingRedirect",qr=new Map;class zr extends jr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=qr.get(this.auth._key());if(!e){try{const t=await Hr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}qr.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hr(e,t){const n=Qr(t),r="true"===await Gr(e)._get(n);return await Gr(e)._remove(n),r}async function Kr(e,t){return Gr(e)._set(Qr(t),"true")}function Wr(){qr.clear()}function Gr(e){return k(e._redirectPersistence)}function Qr(e){return fe(Br,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e,t,n){return Yr(e,t,n)}async function Yr(e,t,n){const r=Ne(e);w(e,t,lt);const i=Nr(r,n);return await Kr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function Xr(e,t,n){return Zr(e,t,n)}async function Zr(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Nr(i.auth,n);await Kr(s,i.auth);const o=await ii(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function ei(e,t,n){return ti(e,t,n)}async function ti(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Nr(i.auth,n);await xt(!1,i,t.providerId),await Kr(s,i.auth);const o=await ii(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function ni(e,t){return await Ne(e)._initializationPromise,ri(e,t,!1)}async function ri(e,t,n=!1){const r=Ne(e),i=Nr(r,t),s=new zr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ii(e){const t=Rn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=6e5;class oi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ui(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ci(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=si&&this.cachedEventUids.clear(),this.cachedEventUids.has(ai(e))}saveEventToCache(e){this.cachedEventUids.add(ai(e)),this.lastProcessedEventTime=Date.now()}}function ai(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function ci({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ui(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ci(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,di=/^https?/;async function fi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await li(e);for(const r of t)try{if(pi(r))return}catch(n){}v(e,"unauthorized-domain")}function pi(e){const t=x(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!di.test(n))return!1;if(hi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new R(3e4,6e4);function gi(){const e=Pn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function vi(e){return new Promise((t,n)=>{var r,i,s;function o(){gi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gi(),n(y(e,"network-request-failed"))},timeout:mi.get()})}if(null===(i=null===(r=Pn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Pn().gapi)||void 0===s?void 0:s.load)){const t=ar("iframefcb");return Pn()[t]=()=>{gapi.load?o():n(y(e,"network-request-failed"))},or("https://apis.google.com/js/api.js?onload="+t)}o()}}).catch(e=>{throw yi=null,e})}let yi=null;function bi(e){return yi=yi||vi(e),yi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new R(5e3,15e3),_i="__/auth/iframe",Ii="emulator/auth/iframe",Ti={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Ei=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Si(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,Ii):`https://${e.config.authDomain}/${_i}`,s={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},o=Ei.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["x"])(s).slice(1)}`}async function ki(e){const t=await bi(e),n=Pn().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:Si(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ti,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=y(e,"network-request-failed"),s=Pn().setTimeout(()=>{r(i)},wi.get());function o(){Pn().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xi=500,Ci=600,Ai="_blank",Ni="http://localhost";class Li{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ri(e,t,n,i=xi,s=Ci){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Oi),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["l"])().toLowerCase();n&&(c=ye(l)?Ai:n),ge(l)&&(t=t||Ni,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Se(l)&&"_self"!==c)return Di(t||"",c),new Li(null);const d=window.open(t||"",c,h);I(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Li(d)}function Di(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="__/auth/handler",ji="emulator/auth/handler";function Mi(e,t,n,s,o,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["SDK_VERSION"],eventId:o};if(t instanceof lt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["p"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Fi(e)}?${Object(r["x"])(u).slice(1)}`}function Fi({config:e}){return e.emulator?D(e,ji):`https://${e.authDomain}/${Pi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="webStorageSupport";class $i{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=An,this._completeRedirectFn=ri}async _openPopup(e,t,n,r){var i;E(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Mi(e,t,n,x(),r);return Ri(e,s,Rn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),jn(Mi(e,t,n,x(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await ki(e),n=new oi(e);return t.register("authEvent",t=>{I(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Vi,{type:Vi},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Vi];void 0!==i&&t(!!i),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||ve()||Te()}}const Ui=$i;class Bi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return T("unexpected MultiFactorSessionType")}}}class qi extends Bi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new qi(e)}_finalizeEnroll(e,t,n){return vn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return rr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class zi{constructor(){}static assertion(e){return qi._fromCredential(e)}}zi.FACTOR_ID="phone";var Hi="@firebase/auth",Ki="0.18.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qi(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(t=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),I(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},o=new Ae(t,r);return O(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=Ne(e.getProvider("auth").getImmediate());return(e=>new Wi(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Hi,Ki,Gi(e))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ji(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qi("Browser");const Yi=2e3;async function Xi(e,t,n){var r;const{BuildInfo:i}=Ji();E(t.sessionId,"AuthEvent did not contain a session ID");const s=await rs(t.sessionId),o={};return Te()?o["ibi"]=i.packageName:we()?o["apn"]=i.packageName:v(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,Mi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function Zi(e){const{BuildInfo:t}=Ji(),n={};Te()?n.iosBundleId=t.packageName:we()?n.androidPackageName=t.packageName:v(e,"operation-not-supported-in-this-environment"),await li(e,n)}function es(e){const{cordova:t}=Ji();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Ee()?"_blank":"_system","location=yes"),n(i)})})}async function ts(e,t,n){const{cordova:r}=Ji();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(y(e,"redirect-cancelled-by-user"))},Yi))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),we()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function ns(e){var t,n,r,i,s,o,a,c,u,l;const h=Ji();I("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function rs(e){const t=is(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function is(e){if(E(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=20;class os extends oi{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function as(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:hs(),postBody:null,tenantId:e.tenantId,error:y(e,"no-auth-event")}}function cs(e,t){return ds()._set(fs(e),t)}async function us(e){const t=await ds()._get(fs(e));return t&&await ds()._remove(fs(e)),t}function ls(e,t){var n,r;const i=ms(t);if(i.includes("/__/auth/callback")){const t=gs(i),s=t["firebaseError"]?ps(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?y(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function hs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ss;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ds(){return k(xn)}function fs(e){return fe("authEvent",e.config.apiKey,e.name)}function ps(e){try{return JSON.parse(e)}catch(t){return null}}function ms(e){const t=gs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=gs(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=gs(i)["link"];return s||i||r||n||e}function gs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r["y"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=500;class ys{constructor(){this._redirectPersistence=An,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ri}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new os(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){v(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){ns(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Wr(),await this._originValidation(e);const s=as(e,n,r);await cs(e,s);const o=await Xi(e,s,t),a=await es(o);return ts(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zi(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Ji(),s=setTimeout(async()=>{await us(e),t.onEvent(ws())},vs),o=async n=>{clearTimeout(s);const r=await us(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=ls(r,n["url"])),t.onEvent(i||ws())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=i.packageName.toLowerCase()+"://";Ji().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const bs=ys;function ws(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(e,t){Ne(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return C})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return N})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return P})),n.d(t,"k",(function(){return $})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return g})),n.d(t,"n",(function(){return v})),n.d(t,"o",(function(){return b})),n.d(t,"p",(function(){return A})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return T})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return m})),n.d(t,"u",(function(){return y})),n.d(t,"v",(function(){return I})),n.d(t,"w",(function(){return _})),n.d(t,"x",(function(){return R})),n.d(t,"y",(function(){return D}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function w(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=E,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?O(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new S(r,o,n);return a}}function O(e,t){return e.replace(x,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(L(n)&&L(s)){if(!N(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function D(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function P(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=F(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},"20f6":function(e,t,n){},2266:function(e,t,n){var r=n("825a"),i=n("e95a"),s=n("50c4"),o=n("0366"),a=n("9a1f"),c=n("35a1"),u=n("2a62"),l=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var h,d,f,p,m,g,v,y=n&&n.that,b=!(!n||!n.AS_ENTRIES),w=!(!n||!n.IS_ITERATOR),_=!(!n||!n.INTERRUPTED),I=o(t,y,1+b+_),T=function(e){return h&&u(h,"normal",e),new l(!0,e)},E=function(e){return b?(r(e),_?I(e[0],e[1],T):I(e[0],e[1])):_?I(e,T):I(e)};if(w)h=e;else{if(d=c(e),!d)throw TypeError(String(e)+" is not iterable");if(i(d)){for(f=0,p=s(e.length);p>f;f++)if(m=E(e[f]),m&&m instanceof l)return m;return new l(!1)}h=a(e,d)}g=h.next;while(!(v=g.call(h)).done){try{m=E(v.value)}catch(S){u(h,"throw",S)}if("object"==typeof m&&m&&m instanceof l)return m}return new l(!1)}},"23cb":function(e,t,n){var r=n("a691"),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},"24b2":function(e,t,n){"use strict";n("a9e3");var r=n("80d2"),i=n("2b0e");t["a"]=i["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var e={},t=Object(r["f"])(this.height),n=Object(r["f"])(this.minHeight),i=Object(r["f"])(this.minWidth),s=Object(r["f"])(this.maxHeight),o=Object(r["f"])(this.maxWidth),a=Object(r["f"])(this.width);return t&&(e.height=t),n&&(e.minHeight=n),i&&(e.minWidth=i),s&&(e.maxHeight=s),o&&(e.maxWidth=o),a&&(e.width=a),e}}})},2532:function(e,t,n){"use strict";var r=n("23e7"),i=n("5a34"),s=n("1d80"),o=n("577e"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~o(s(this)).indexOf(o(i(e)),arguments.length>1?arguments[1]:void 0)}})},"256a":function(e,t,n){"use strict";n("5994")},"25a8":function(e,t,n){},"25f0":function(e,t,n){"use strict";var r=n("5e77").PROPER,i=n("6eeb"),s=n("825a"),o=n("577e"),a=n("d039"),c=n("ad6d"),u="toString",l=RegExp.prototype,h=l[u],d=a((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),f=r&&h.name!=u;(d||f)&&i(RegExp.prototype,u,(function(){var e=s(this),t=o(e.source),n=e.flags,r=o(void 0===n&&e instanceof RegExp&&!("flags"in l)?c.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2877:function(e,t,n){"use strict";function r(e,t,n,r,i,s,o,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("6b75");function i(e){if(Array.isArray(e))return Object(r["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=n("06c5");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return i(e)||s(e)||Object(o["a"])(e)||a()}},"297c":function(e,t,n){"use strict";n("a9e3");var r=n("2b0e"),i=n("5530"),s=n("ade3"),o=(n("c7cd"),n("6ece"),n("0789")),a=n("90a2"),c=n("a9ad"),u=n("fe6c"),l=n("a452"),h=n("7560"),d=n("80d2"),f=n("58df"),p=Object(f["a"])(c["a"],Object(u["b"])(["absolute","fixed","top","bottom"]),l["a"],h["a"]),m=p.extend({name:"v-progress-linear",directives:{intersect:a["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(s["a"])(e,this.isReversed?"right":"left",Object(d["f"])(this.normalizedValue,"%")),Object(s["a"])(e,"width",Object(d["f"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return Object(i["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["b"]:o["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(d["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(d["l"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),n=t.width;this.internalValue=e.offsetX/n*100}},onObserve:function(e,t,n){this.isVisible=n},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=m;t["a"]=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2a62":function(e,t,n){var r=n("825a"),i=n("dc4a");e.exports=function(e,t,n){var s,o;r(e);try{if(s=i(e,"return"),!s){if("throw"===t)throw n;return n}s=s.call(e)}catch(a){o=!0,s=a}if("throw"===t)throw n;if(o)throw s;return r(s),n}},"2b0e":function(e,t,n){"use strict";(function(e){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(e){return void 0===e||null===e}function i(e){return void 0!==e&&null!==e}function s(e){return!0===e}function o(e){return!1===e}function a(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function c(e){return null!==e&&"object"===typeof e}var u=Object.prototype.toString;function l(e){return"[object Object]"===u.call(e)}function h(e){return"[object RegExp]"===u.call(e)}function d(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function f(e){return i(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function m(e){var t=parseFloat(e);return isNaN(t)?e:t}function g(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}g("slot,component",!0);var v=g("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(e,t){return b.call(e,t)}function _(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var I=/-(\w)/g,T=_((function(e){return e.replace(I,(function(e,t){return t?t.toUpperCase():""}))})),E=_((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),S=/\B([A-Z])/g,k=_((function(e){return e.replace(S,"-$1").toLowerCase()}));function O(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function x(e,t){return e.bind(t)}var C=Function.prototype.bind?x:O;function A(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function N(e,t){for(var n in t)e[n]=t[n];return e}function L(e){for(var t={},n=0;n<e.length;n++)e[n]&&N(t,e[n]);return t}function R(e,t,n){}var D=function(e,t,n){return!1},P=function(e){return e};function j(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),s=Array.isArray(t);if(i&&s)return e.length===t.length&&e.every((function(e,n){return j(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return j(e[n],t[n])}))}catch(u){return!1}}function M(e,t){for(var n=0;n<e.length;n++)if(j(e[n],t))return n;return-1}function F(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var V="data-server-rendered",$=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:R,parsePlatformTagName:P,mustUseProp:D,async:!0,_lifecycleHooks:U},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function H(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^"+q.source+".$_\\d]");function W(e){if(!K.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var G,Q="__proto__"in{},J="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),ee=Z&&/msie|trident/.test(Z),te=Z&&Z.indexOf("msie 9.0")>0,ne=Z&&Z.indexOf("edge/")>0,re=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),ie=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),se={}.watch,oe=!1;if(J)try{var ae={};Object.defineProperty(ae,"passive",{get:function(){oe=!0}}),window.addEventListener("test-passive",null,ae)}catch(Eo){}var ce=function(){return void 0===G&&(G=!J&&!Y&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),G},ue=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function le(e){return"function"===typeof e&&/native code/.test(e.toString())}var he,de="undefined"!==typeof Symbol&&le(Symbol)&&"undefined"!==typeof Reflect&&le(Reflect.ownKeys);he="undefined"!==typeof Set&&le(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var fe=R,pe=0,me=function(){this.id=pe++,this.subs=[]};me.prototype.addSub=function(e){this.subs.push(e)},me.prototype.removeSub=function(e){y(this.subs,e)},me.prototype.depend=function(){me.target&&me.target.addDep(this)},me.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},me.target=null;var ge=[];function ve(e){ge.push(e),me.target=e}function ye(){ge.pop(),me.target=ge[ge.length-1]}var be=function(e,t,n,r,i,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},we={child:{configurable:!0}};we.child.get=function(){return this.componentInstance},Object.defineProperties(be.prototype,we);var _e=function(e){void 0===e&&(e="");var t=new be;return t.text=e,t.isComment=!0,t};function Ie(e){return new be(void 0,void 0,void 0,String(e))}function Te(e){var t=new be(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Ee=Array.prototype,Se=Object.create(Ee),ke=["push","pop","shift","unshift","splice","sort","reverse"];ke.forEach((function(e){var t=Ee[e];H(Se,e,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var Oe=Object.getOwnPropertyNames(Se),xe=!0;function Ce(e){xe=e}var Ae=function(e){this.value=e,this.dep=new me,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(Q?Ne(e,Se):Le(e,Se,Oe),this.observeArray(e)):this.walk(e)};function Ne(e,t){e.__proto__=t}function Le(e,t,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];H(e,s,t[s])}}function Re(e,t){var n;if(c(e)&&!(e instanceof be))return w(e,"__ob__")&&e.__ob__ instanceof Ae?n=e.__ob__:xe&&!ce()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Ae(e)),t&&n&&n.vmCount++,n}function De(e,t,n,r,i){var s=new me,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Re(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return me.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(t)&&Me(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||a&&!c||(c?c.call(e,t):n=t,u=!i&&Re(t),s.notify())}})}}function Pe(e,t,n){if(Array.isArray(e)&&d(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(De(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function je(e,t){if(Array.isArray(e)&&d(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||w(e,t)&&(delete e[t],n&&n.dep.notify())}}function Me(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Me(t)}Ae.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)De(e,t[n])},Ae.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Re(e[t])};var Fe=B.optionMergeStrategies;function Ve(e,t){if(!t)return e;for(var n,r,i,s=de?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(r=e[n],i=t[n],w(e,n)?r!==i&&l(r)&&l(i)&&Ve(r,i):Pe(e,n,i));return e}function $e(e,t,n){return n?function(){var r="function"===typeof t?t.call(n,n):t,i="function"===typeof e?e.call(n,n):e;return r?Ve(r,i):i}:t?e?function(){return Ve("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Ue(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?Be(n):n}function Be(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function qe(e,t,n,r){var i=Object.create(e||null);return t?N(i,t):i}Fe.data=function(e,t,n){return n?$e(e,t,n):t&&"function"!==typeof t?e:$e(e,t)},U.forEach((function(e){Fe[e]=Ue})),$.forEach((function(e){Fe[e+"s"]=qe})),Fe.watch=function(e,t,n,r){if(e===se&&(e=void 0),t===se&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var s in N(i,e),t){var o=i[s],a=t[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},Fe.props=Fe.methods=Fe.inject=Fe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return N(i,e),t&&N(i,t),i},Fe.provide=$e;var ze=function(e,t){return void 0===t?e:t};function He(e,t){var n=e.props;if(n){var r,i,s,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(s=T(i),o[s]={type:null})}else if(l(n))for(var a in n)i=n[a],s=T(a),o[s]=l(i)?i:{type:i};else 0;e.props=o}}function Ke(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var s in n){var o=n[s];r[s]=l(o)?N({from:s},o):{from:o}}else 0}}function We(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"===typeof r&&(t[n]={bind:r,update:r})}}function Ge(e,t,n){if("function"===typeof t&&(t=t.options),He(t,n),Ke(t,n),We(t),!t._base&&(t.extends&&(e=Ge(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ge(e,t.mixins[r],n);var s,o={};for(s in e)a(s);for(s in t)w(e,s)||a(s);function a(r){var i=Fe[r]||ze;o[r]=i(e[r],t[r],n,r)}return o}function Qe(e,t,n,r){if("string"===typeof n){var i=e[t];if(w(i,n))return i[n];var s=T(n);if(w(i,s))return i[s];var o=E(s);if(w(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Je(e,t,n,r){var i=t[e],s=!w(n,e),o=n[e],a=tt(Boolean,i.type);if(a>-1)if(s&&!w(i,"default"))o=!1;else if(""===o||o===k(e)){var c=tt(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Ye(r,i,e);var u=xe;Ce(!0),Re(o),Ce(u)}return o}function Ye(e,t,n){if(w(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof r&&"Function"!==Ze(t.type)?r.call(e):r}}var Xe=/^\s*function (\w+)/;function Ze(e){var t=e&&e.toString().match(Xe);return t?t[1]:""}function et(e,t){return Ze(e)===Ze(t)}function tt(e,t){if(!Array.isArray(t))return et(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(et(t[n],e))return n;return-1}function nt(e,t,n){ve();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,e,t,n);if(o)return}catch(Eo){it(Eo,r,"errorCaptured hook")}}}it(e,t,n)}finally{ye()}}function rt(e,t,n,r,i){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(e){return nt(e,r,i+" (Promise/async)")})),s._handled=!0)}catch(Eo){nt(Eo,r,i)}return s}function it(e,t,n){if(B.errorHandler)try{return B.errorHandler.call(null,e,t,n)}catch(Eo){Eo!==e&&st(Eo,null,"config.errorHandler")}st(e,t,n)}function st(e,t,n){if(!J&&!Y||"undefined"===typeof console)throw e;console.error(e)}var ot,at=!1,ct=[],ut=!1;function lt(){ut=!1;var e=ct.slice(0);ct.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&le(Promise)){var ht=Promise.resolve();ot=function(){ht.then(lt),re&&setTimeout(R)},at=!0}else if(ee||"undefined"===typeof MutationObserver||!le(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ot="undefined"!==typeof setImmediate&&le(setImmediate)?function(){setImmediate(lt)}:function(){setTimeout(lt,0)};else{var dt=1,ft=new MutationObserver(lt),pt=document.createTextNode(String(dt));ft.observe(pt,{characterData:!0}),ot=function(){dt=(dt+1)%2,pt.data=String(dt)},at=!0}function mt(e,t){var n;if(ct.push((function(){if(e)try{e.call(t)}catch(Eo){nt(Eo,t,"nextTick")}else n&&n(t)})),ut||(ut=!0,ot()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var gt=new he;function vt(e){yt(e,gt),gt.clear()}function yt(e,t){var n,r,i=Array.isArray(e);if(!(!i&&!c(e)||Object.isFrozen(e)||e instanceof be)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(i){n=e.length;while(n--)yt(e[n],t)}else{r=Object.keys(e),n=r.length;while(n--)yt(e[r[n]],t)}}}var bt=_((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function wt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return rt(r,null,arguments,t,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)rt(i[s],null,e,t,"v-on handler")}return n.fns=e,n}function _t(e,t,n,i,o,a){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=bt(c),r(u)||(r(l)?(r(u.fns)&&(u=e[c]=wt(u,a)),s(h.once)&&(u=e[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)r(e[c])&&(h=bt(c),i(h.name,t[c],h.capture))}function It(e,t,n){var o;e instanceof be&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),y(o.fns,c)}r(a)?o=wt([c]):i(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=wt([a,c]),o.merged=!0,e[t]=o}function Tt(e,t,n){var s=t.options.props;if(!r(s)){var o={},a=e.attrs,c=e.props;if(i(a)||i(c))for(var u in s){var l=k(u);Et(o,c,u,l,!0)||Et(o,a,u,l,!1)}return o}}function Et(e,t,n,r,s){if(i(t)){if(w(t,n))return e[n]=t[n],s||delete t[n],!0;if(w(t,r))return e[n]=t[r],s||delete t[r],!0}return!1}function St(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function kt(e){return a(e)?[Ie(e)]:Array.isArray(e)?xt(e):void 0}function Ot(e){return i(e)&&i(e.text)&&o(e.isComment)}function xt(e,t){var n,o,c,u,l=[];for(n=0;n<e.length;n++)o=e[n],r(o)||"boolean"===typeof o||(c=l.length-1,u=l[c],Array.isArray(o)?o.length>0&&(o=xt(o,(t||"")+"_"+n),Ot(o[0])&&Ot(u)&&(l[c]=Ie(u.text+o[0].text),o.shift()),l.push.apply(l,o)):a(o)?Ot(u)?l[c]=Ie(u.text+o):""!==o&&l.push(Ie(o)):Ot(o)&&Ot(u)?l[c]=Ie(u.text+o.text):(s(e._isVList)&&i(o.tag)&&r(o.key)&&i(t)&&(o.key="__vlist"+t+"_"+n+"__"),l.push(o)));return l}function Ct(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function At(e){var t=Nt(e.$options.inject,e);t&&(Ce(!1),Object.keys(t).forEach((function(n){De(e,n,t[n])})),Ce(!0))}function Nt(e,t){if(e){for(var n=Object.create(null),r=de?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=e[s].from,a=t;while(a){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in e[s]){var c=e[s].default;n[s]="function"===typeof c?c.call(t):c}else 0}}return n}}function Lt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var s=e[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Rt)&&delete n[u];return n}function Rt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Dt(e){return e.isComment&&e.asyncFactory}function Pt(e,t,r){var i,s=Object.keys(t).length>0,o=e?!!e.$stable:!s,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&r&&r!==n&&a===r.$key&&!s&&!r.$hasNormal)return r;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=jt(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=Mt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),H(i,"$stable",o),H(i,"$key",a),H(i,"$hasNormal",s),i}function jt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:kt(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!Dt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function Mt(e,t){return function(){return e[t]}}function Ft(e,t){var n,r,s,o,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),r=0,s=e.length;r<s;r++)n[r]=t(e[r],r);else if("number"===typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(de&&e[Symbol.iterator]){n=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)n.push(t(l.value,n.length)),l=u.next()}else for(o=Object.keys(e),n=new Array(o.length),r=0,s=o.length;r<s;r++)a=o[r],n[r]=t(e[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Vt(e,t,n,r){var i,s=this.$scopedSlots[e];s?(n=n||{},r&&(n=N(N({},r),n)),i=s(n)||("function"===typeof t?t():t)):i=this.$slots[e]||("function"===typeof t?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function $t(e){return Qe(this.$options,"filters",e,!0)||P}function Ut(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Bt(e,t,n,r,i){var s=B.keyCodes[t]||n;return i&&r&&!B.keyCodes[t]?Ut(i,r):s?Ut(s,e):r?k(r)!==t:void 0===e}function qt(e,t,n,r,i){if(n)if(c(n)){var s;Array.isArray(n)&&(n=L(n));var o=function(o){if("class"===o||"style"===o||v(o))s=e;else{var a=e.attrs&&e.attrs.type;s=r||B.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=T(o),u=k(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],i)){var l=e.on||(e.on={});l["update:"+o]=function(e){n[o]=e}}};for(var a in n)o(a)}else;return e}function zt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Kt(r,"__static__"+e,!1)),r}function Ht(e,t,n){return Kt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Kt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&Wt(e[r],t+"_"+r,n);else Wt(e,t,n)}function Wt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Gt(e,t){if(t)if(l(t)){var n=e.on=e.on?N({},e.on):{};for(var r in t){var i=n[r],s=t[r];n[r]=i?[].concat(i,s):s}}else;return e}function Qt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var s=e[i];Array.isArray(s)?Qt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function Jt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Yt(e,t){return"string"===typeof e?t+e:e}function Xt(e){e._o=Ht,e._n=m,e._s=p,e._l=Ft,e._t=Vt,e._q=j,e._i=M,e._m=zt,e._f=$t,e._k=Bt,e._b=qt,e._v=Ie,e._e=_e,e._u=Qt,e._g=Gt,e._d=Jt,e._p=Yt}function Zt(e,t,r,i,o){var a,c=this,u=o.options;w(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=s(u._compiled),h=!l;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||n,this.injections=Nt(u.inject,i),this.slots=function(){return c.$slots||Pt(e.scopedSlots,c.$slots=Lt(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Pt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var s=fn(a,e,t,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(e,t,n,r){return fn(a,e,t,n,r,h)}}function en(e,t,r,s,o){var a=e.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Je(l,u,t||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Zt(r,c,o,s,e),d=a.render.call(null,h._c,h);if(d instanceof be)return tn(d,r,h.parent,a,h);if(Array.isArray(d)){for(var f=kt(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=tn(f[m],r,h.parent,a,h);return p}}function tn(e,t,n,r,i){var s=Te(e);return s.fnContext=n,s.fnOptions=r,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function nn(e,t){for(var n in t)e[T(n)]=t[n]}Xt(Zt.prototype);var rn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;rn.prepatch(n,n)}else{var r=e.componentInstance=an(e,Nn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;jn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,$n(n,"mounted")),e.data.keepAlive&&(t._isMounted?Zn(n):Fn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Vn(t,!0):t.$destroy())}},sn=Object.keys(rn);function on(e,t,n,o,a){if(!r(e)){var u=n.$options._base;if(c(e)&&(e=u.extend(e)),"function"===typeof e){var l;if(r(e.cid)&&(l=e,e=Tn(l,u),void 0===e))return In(l,t,n,o,a);t=t||{},Ir(e),i(t.model)&&ln(e.options,t);var h=Tt(t,e,a);if(s(e.options.functional))return en(e,h,t,n,o);var d=t.on;if(t.on=t.nativeOn,s(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}cn(t);var p=e.options.name||a,m=new be("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:d,tag:a,children:o},l);return m}}}function an(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cn(e){for(var t=e.hook||(e.hook={}),n=0;n<sn.length;n++){var r=sn[n],i=t[r],s=rn[r];i===s||i&&i._merged||(t[r]=i?un(s,i):s)}}function un(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function ln(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var s=t.on||(t.on={}),o=s[r],a=t.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[r]=[a].concat(o)):s[r]=a}var hn=1,dn=2;function fn(e,t,n,r,i,o){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),s(o)&&(i=dn),pn(e,t,n,r,i)}function pn(e,t,n,r,s){if(i(n)&&i(n.__ob__))return _e();if(i(n)&&i(n.is)&&(t=n.is),!t)return _e();var o,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===dn?r=kt(r):s===hn&&(r=St(r)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||B.getTagNamespace(t),o=B.isReservedTag(t)?new be(B.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!i(c=Qe(e.$options,"components",t))?new be(t,n,r,void 0,void 0,e):on(c,n,e,r,t)):o=on(t,n,e,r);return Array.isArray(o)?o:i(o)?(i(a)&&mn(o,a),i(n)&&gn(n),o):_e()}function mn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),i(e.children))for(var o=0,a=e.children.length;o<a;o++){var c=e.children[o];i(c.tag)&&(r(c.ns)||s(n)&&"svg"!==c.tag)&&mn(c,t,n)}}function gn(e){c(e.style)&&vt(e.style),c(e.class)&&vt(e.class)}function vn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,r=e.$vnode=t._parentVnode,i=r&&r.context;e.$slots=Lt(t._renderChildren,i),e.$scopedSlots=n,e._c=function(t,n,r,i){return fn(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return fn(e,t,n,r,i,!0)};var s=r&&r.data;De(e,"$attrs",s&&s.attrs||n,null,!0),De(e,"$listeners",t._parentListeners||n,null,!0)}var yn,bn=null;function wn(e){Xt(e.prototype),e.prototype.$nextTick=function(e){return mt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=Pt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{bn=t,e=r.call(t._renderProxy,t.$createElement)}catch(Eo){nt(Eo,t,"render"),e=t._vnode}finally{bn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof be||(e=_e()),e.parent=i,e}}function _n(e,t){return(e.__esModule||de&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function In(e,t,n,r,i){var s=_e();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:r,tag:i},s}function Tn(e,t){if(s(e.error)&&i(e.errorComp))return e.errorComp;if(i(e.resolved))return e.resolved;var n=bn;if(n&&i(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),s(e.loading)&&i(e.loadingComp))return e.loadingComp;if(n&&!i(e.owners)){var o=e.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(o,n)}));var h=function(e){for(var t=0,n=o.length;t<n;t++)o[t].$forceUpdate();e&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){e.resolved=_n(n,t),a?o.length=0:h(!0)})),p=F((function(t){i(e.errorComp)&&(e.error=!0,h(!0))})),m=e(d,p);return c(m)&&(f(m)?r(e.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),i(m.error)&&(e.errorComp=_n(m.error,t)),i(m.loading)&&(e.loadingComp=_n(m.loading,t),0===m.delay?e.loading=!0:u=setTimeout((function(){u=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,h(!1))}),m.delay||200)),i(m.timeout)&&(l=setTimeout((function(){l=null,r(e.resolved)&&p(null)}),m.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function En(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(i(n)&&(i(n.componentOptions)||Dt(n)))return n}}function Sn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Cn(e,t)}function kn(e,t){yn.$on(e,t)}function On(e,t){yn.$off(e,t)}function xn(e,t){var n=yn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Cn(e,t,n){yn=e,_t(t,n||{},kn,On,xn,e),yn=void 0}function An(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,s=e.length;i<s;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var s,o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;var a=o.length;while(a--)if(s=o[a],s===t||s.fn===t){o.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?A(n):n;for(var r=A(arguments,1),i='event handler for "'+e+'"',s=0,o=n.length;s<o;s++)rt(n[s],t,r,t,i)}return t}}var Nn=null;function Ln(e){var t=Nn;return Nn=e,function(){Nn=t}}function Rn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Dn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,s=Ln(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){$n(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),$n(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Pn(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=_e),$n(e,"beforeMount"),r=function(){e._update(e._render(),n)},new rr(e,r,R,{before:function(){e._isMounted&&!e._isDestroyed&&$n(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,$n(e,"mounted")),e}function jn(e,t,r,i,s){var o=i.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=s,e.$attrs=i.data.attrs||n,e.$listeners=r||n,t&&e.$options.props){Ce(!1);for(var l=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=e.$options.props;l[f]=Je(f,p,t,e)}Ce(!0),e.$options.propsData=t}r=r||n;var m=e.$options._parentListeners;e.$options._parentListeners=r,Cn(e,r,m),u&&(e.$slots=Lt(s,i.context),e.$forceUpdate())}function Mn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Fn(e,t){if(t){if(e._directInactive=!1,Mn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Fn(e.$children[n]);$n(e,"activated")}}function Vn(e,t){if((!t||(e._directInactive=!0,!Mn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Vn(e.$children[n]);$n(e,"deactivated")}}function $n(e,t){ve();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,s=n.length;i<s;i++)rt(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),ye()}var Un=[],Bn=[],qn={},zn=!1,Hn=!1,Kn=0;function Wn(){Kn=Un.length=Bn.length=0,qn={},zn=Hn=!1}var Gn=0,Qn=Date.now;if(J&&!ee){var Jn=window.performance;Jn&&"function"===typeof Jn.now&&Qn()>document.createEvent("Event").timeStamp&&(Qn=function(){return Jn.now()})}function Yn(){var e,t;for(Gn=Qn(),Hn=!0,Un.sort((function(e,t){return e.id-t.id})),Kn=0;Kn<Un.length;Kn++)e=Un[Kn],e.before&&e.before(),t=e.id,qn[t]=null,e.run();var n=Bn.slice(),r=Un.slice();Wn(),er(n),Xn(r),ue&&B.devtools&&ue.emit("flush")}function Xn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&$n(r,"updated")}}function Zn(e){e._inactive=!1,Bn.push(e)}function er(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Fn(e[t],!0)}function tr(e){var t=e.id;if(null==qn[t]){if(qn[t]=!0,Hn){var n=Un.length-1;while(n>Kn&&Un[n].id>e.id)n--;Un.splice(n+1,0,e)}else Un.push(e);zn||(zn=!0,mt(Yn))}}var nr=0,rr=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new he,this.newDepIds=new he,this.expression="","function"===typeof t?this.getter=t:(this.getter=W(t),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var e;ve(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Eo){if(!this.user)throw Eo;nt(Eo,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&vt(e),ye(),this.cleanupDeps()}return e},rr.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},rr.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():tr(this)},rr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';rt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:R,set:R};function sr(e,t,n){ir.get=function(){return this[t][n]},ir.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ir)}function or(e){e._watchers=[];var t=e.$options;t.props&&ar(e,t.props),t.methods&&mr(e,t.methods),t.data?cr(e):Re(e._data={},!0),t.computed&&hr(e,t.computed),t.watch&&t.watch!==se&&gr(e,t.watch)}function ar(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],s=!e.$parent;s||Ce(!1);var o=function(s){i.push(s);var o=Je(s,t,n,e);De(r,s,o),s in e||sr(e,"_props",s)};for(var a in t)o(a);Ce(!0)}function cr(e){var t=e.$options.data;t=e._data="function"===typeof t?ur(t,e):t||{},l(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var s=n[i];0,r&&w(r,s)||z(s)||sr(e,"_data",s)}Re(t,!0)}function ur(e,t){ve();try{return e.call(t,t)}catch(Eo){return nt(Eo,t,"data()"),{}}finally{ye()}}var lr={lazy:!0};function hr(e,t){var n=e._computedWatchers=Object.create(null),r=ce();for(var i in t){var s=t[i],o="function"===typeof s?s:s.get;0,r||(n[i]=new rr(e,o||R,R,lr)),i in e||dr(e,i,s)}}function dr(e,t,n){var r=!ce();"function"===typeof n?(ir.get=r?fr(t):pr(n),ir.set=R):(ir.get=n.get?r&&!1!==n.cache?fr(t):pr(n.get):R,ir.set=n.set||R),Object.defineProperty(e,t,ir)}function fr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),me.target&&t.depend(),t.value}}function pr(e){return function(){return e.call(this,this)}}function mr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?R:C(t[n],e)}function gr(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)vr(e,n,r[i]);else vr(e,n,r)}}function vr(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function yr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Pe,e.prototype.$delete=je,e.prototype.$watch=function(e,t,n){var r=this;if(l(t))return vr(r,e,t,n);n=n||{},n.user=!0;var i=new rr(r,e,t,n);if(n.immediate){var s='callback for immediate watcher "'+i.expression+'"';ve(),rt(t,r,[i.value],r,s),ye()}return function(){i.teardown()}}}var br=0;function wr(e){e.prototype._init=function(e){var t=this;t._uid=br++,t._isVue=!0,e&&e._isComponent?_r(t,e):t.$options=Ge(Ir(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Rn(t),Sn(t),vn(t),$n(t,"beforeCreate"),At(t),or(t),Ct(t),$n(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function _r(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ir(e){var t=e.options;if(e.super){var n=Ir(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Tr(e);i&&N(e.extendOptions,i),t=e.options=Ge(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Tr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Er(e){this._init(e)}function Sr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function kr(e){e.mixin=function(e){return this.options=Ge(this.options,e),this}}function Or(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var s=e.name||n.options.name;var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ge(n.options,e),o["super"]=n,o.options.props&&xr(o),o.options.computed&&Cr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,$.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=N({},o.options),i[r]=o,o}}function xr(e){var t=e.options.props;for(var n in t)sr(e.prototype,"_props",n)}function Cr(e){var t=e.options.computed;for(var n in t)dr(e.prototype,n,t[n])}function Ar(e){$.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Nr(e){return e&&(e.Ctor.options.name||e.tag)}function Lr(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!h(e)&&e.test(t)}function Rr(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&Dr(n,s,r,i)}}}function Dr(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,y(n,t)}wr(Er),yr(Er),An(Er),Dn(Er),wn(Er);var Pr=[String,RegExp,Array],jr={name:"keep-alive",abstract:!0,props:{include:Pr,exclude:Pr,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;t[i]={name:Nr(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&Dr(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Dr(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Rr(e,(function(e){return Lr(t,e)}))})),this.$watch("exclude",(function(t){Rr(e,(function(e){return!Lr(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=En(e),n=t&&t.componentOptions;if(n){var r=Nr(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!Lr(s,r))||o&&r&&Lr(o,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},Mr={KeepAlive:jr};function Fr(e){var t={get:function(){return B}};Object.defineProperty(e,"config",t),e.util={warn:fe,extend:N,mergeOptions:Ge,defineReactive:De},e.set=Pe,e.delete=je,e.nextTick=mt,e.observable=function(e){return Re(e),e},e.options=Object.create(null),$.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,N(e.options.components,Mr),Sr(e),kr(e),Or(e),Ar(e)}Fr(Er),Object.defineProperty(Er.prototype,"$isServer",{get:ce}),Object.defineProperty(Er.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Er,"FunctionalRenderContext",{value:Zt}),Er.version="2.6.14";var Vr=g("style,class"),$r=g("input,textarea,option,select,progress"),Ur=function(e,t,n){return"value"===n&&$r(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Br=g("contenteditable,draggable,spellcheck"),qr=g("events,caret,typing,plaintext-only"),zr=function(e,t){return Qr(t)||"false"===t?"false":"contenteditable"===e&&qr(t)?t:"true"},Hr=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Kr="http://www.w3.org/1999/xlink",Wr=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Gr=function(e){return Wr(e)?e.slice(6,e.length):""},Qr=function(e){return null==e||!1===e};function Jr(e){var t=e.data,n=e,r=e;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Yr(r.data,t));while(i(n=n.parent))n&&n.data&&(t=Yr(t,n.data));return Xr(t.staticClass,t.class)}function Yr(e,t){return{staticClass:Zr(e.staticClass,t.staticClass),class:i(e.class)?[e.class,t.class]:t.class}}function Xr(e,t){return i(e)||i(t)?Zr(e,ei(t)):""}function Zr(e,t){return e?t?e+" "+t:e:t||""}function ei(e){return Array.isArray(e)?ti(e):c(e)?ni(e):"string"===typeof e?e:""}function ti(e){for(var t,n="",r=0,s=e.length;r<s;r++)i(t=ei(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ni(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),si=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),oi=function(e){return ii(e)||si(e)};function ai(e){return si(e)?"svg":"math"===e?"math":void 0}var ci=Object.create(null);function ui(e){if(!J)return!0;if(oi(e))return!1;if(e=e.toLowerCase(),null!=ci[e])return ci[e];var t=document.createElement(e);return e.indexOf("-")>-1?ci[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ci[e]=/HTMLUnknownElement/.test(t.toString())}var li=g("text,number,password,search,email,tel,url");function hi(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function di(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(e,t){return document.createElementNS(ri[e],t)}function pi(e){return document.createTextNode(e)}function mi(e){return document.createComment(e)}function gi(e,t,n){e.insertBefore(t,n)}function vi(e,t){e.removeChild(t)}function yi(e,t){e.appendChild(t)}function bi(e){return e.parentNode}function wi(e){return e.nextSibling}function _i(e){return e.tagName}function Ii(e,t){e.textContent=t}function Ti(e,t){e.setAttribute(t,"")}var Ei=Object.freeze({createElement:di,createElementNS:fi,createTextNode:pi,createComment:mi,insertBefore:gi,removeChild:vi,appendChild:yi,parentNode:bi,nextSibling:wi,tagName:_i,setTextContent:Ii,setStyleScope:Ti}),Si={create:function(e,t){ki(t)},update:function(e,t){e.data.ref!==t.data.ref&&(ki(e,!0),ki(t))},destroy:function(e){ki(e,!0)}};function ki(e,t){var n=e.data.ref;if(i(n)){var r=e.context,s=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?y(o[n],s):o[n]===s&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var Oi=new be("",{},[]),xi=["create","activate","update","remove","destroy"];function Ci(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&i(e.data)===i(t.data)&&Ai(e,t)||s(e.isAsyncPlaceholder)&&r(t.asyncFactory.error))}function Ai(e,t){if("input"!==e.tag)return!0;var n,r=i(n=e.data)&&i(n=n.attrs)&&n.type,s=i(n=t.data)&&i(n=n.attrs)&&n.type;return r===s||li(r)&&li(s)}function Ni(e,t,n){var r,s,o={};for(r=t;r<=n;++r)s=e[r].key,i(s)&&(o[s]=r);return o}function Li(e){var t,n,o={},c=e.modules,u=e.nodeOps;for(t=0;t<xi.length;++t)for(o[xi[t]]=[],n=0;n<c.length;++n)i(c[n][xi[t]])&&o[xi[t]].push(c[n][xi[t]]);function l(e){return new be(u.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&d(e)}return n.listeners=t,n}function d(e){var t=u.parentNode(e);i(t)&&u.removeChild(t,e)}function f(e,t,n,r,o,a,c){if(i(e.elm)&&i(a)&&(e=a[c]=Te(e)),e.isRootInsert=!o,!p(e,t,n,r)){var l=e.data,h=e.children,d=e.tag;i(d)?(e.elm=e.ns?u.createElementNS(e.ns,d):u.createElement(d,e),I(e),b(e,h,t),i(l)&&_(e,t),y(n,e.elm,r)):s(e.isComment)?(e.elm=u.createComment(e.text),y(n,e.elm,r)):(e.elm=u.createTextNode(e.text),y(n,e.elm,r))}}function p(e,t,n,r){var o=e.data;if(i(o)){var a=i(e.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(e,!1),i(e.componentInstance))return m(e,t),y(n,e.elm,r),s(a)&&v(e,t,n,r),!0}}function m(e,t){i(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,w(e)?(_(e,t),I(e)):(ki(e),t.push(e))}function v(e,t,n,r){var s,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,i(s=a.data)&&i(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](Oi,a);t.push(a);break}y(n,e.elm,r)}function y(e,t,n){i(e)&&(i(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function b(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r)}else a(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function w(e){while(e.componentInstance)e=e.componentInstance._vnode;return i(e.tag)}function _(e,n){for(var r=0;r<o.create.length;++r)o.create[r](Oi,e);t=e.data.hook,i(t)&&(i(t.create)&&t.create(Oi,e),i(t.insert)&&n.push(e))}function I(e){var t;if(i(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)i(t=n.context)&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}i(t=Nn)&&t!==e.context&&t!==e.fnContext&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function T(e,t,n,r,i,s){for(;r<=i;++r)f(n[r],s,e,t,!1,n,r)}function E(e){var t,n,r=e.data;if(i(r))for(i(t=r.hook)&&i(t=t.destroy)&&t(e),t=0;t<o.destroy.length;++t)o.destroy[t](e);if(i(t=e.children))for(n=0;n<e.children.length;++n)E(e.children[n])}function S(e,t,n){for(;t<=n;++t){var r=e[t];i(r)&&(i(r.tag)?(k(r),E(r)):d(r.elm))}}function k(e,t){if(i(t)||i(e.data)){var n,r=o.remove.length+1;for(i(t)?t.listeners+=r:t=h(e.elm,r),i(n=e.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,t),n=0;n<o.remove.length;++n)o.remove[n](e,t);i(n=e.data.hook)&&i(n=n.remove)?n(e,t):t()}else d(e.elm)}function O(e,t,n,s,o){var a,c,l,h,d=0,p=0,m=t.length-1,g=t[0],v=t[m],y=n.length-1,b=n[0],w=n[y],_=!o;while(d<=m&&p<=y)r(g)?g=t[++d]:r(v)?v=t[--m]:Ci(g,b)?(C(g,b,s,n,p),g=t[++d],b=n[++p]):Ci(v,w)?(C(v,w,s,n,y),v=t[--m],w=n[--y]):Ci(g,w)?(C(g,w,s,n,y),_&&u.insertBefore(e,g.elm,u.nextSibling(v.elm)),g=t[++d],w=n[--y]):Ci(v,b)?(C(v,b,s,n,p),_&&u.insertBefore(e,v.elm,g.elm),v=t[--m],b=n[++p]):(r(a)&&(a=Ni(t,d,m)),c=i(b.key)?a[b.key]:x(b,t,d,m),r(c)?f(b,s,e,g.elm,!1,n,p):(l=t[c],Ci(l,b)?(C(l,b,s,n,p),t[c]=void 0,_&&u.insertBefore(e,l.elm,g.elm)):f(b,s,e,g.elm,!1,n,p)),b=n[++p]);d>m?(h=r(n[y+1])?null:n[y+1].elm,T(e,h,n,p,y,s)):p>y&&S(t,d,m)}function x(e,t,n,r){for(var s=n;s<r;s++){var o=t[s];if(i(o)&&Ci(e,o))return s}}function C(e,t,n,a,c,l){if(e!==t){i(t.elm)&&i(a)&&(t=a[c]=Te(t));var h=t.elm=e.elm;if(s(e.isAsyncPlaceholder))i(t.asyncFactory.resolved)?L(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(s(t.isStatic)&&s(e.isStatic)&&t.key===e.key&&(s(t.isCloned)||s(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(i(f)&&w(t)){for(d=0;d<o.update.length;++d)o.update[d](e,t);i(d=f.hook)&&i(d=d.update)&&d(e,t)}r(t.text)?i(p)&&i(m)?p!==m&&O(h,p,m,n,l):i(m)?(i(e.text)&&u.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):i(p)?S(p,0,p.length-1):i(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(e,t)}}}function A(e,t,n){if(s(n)&&i(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var N=g("attrs,class,staticClass,staticStyle,key");function L(e,t,n,r){var o,a=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,s(t.isComment)&&i(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(o=c.hook)&&i(o=o.init)&&o(t,!0),i(o=t.componentInstance)))return m(t,n),!0;if(i(a)){if(i(u))if(e.hasChildNodes())if(i(o=c)&&i(o=o.domProps)&&i(o=o.innerHTML)){if(o!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!L(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(t,u,n);if(i(c)){var f=!1;for(var p in c)if(!N(p)){f=!0,_(t,n);break}!f&&c["class"]&&vt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!r(t)){var c=!1,h=[];if(r(e))c=!0,f(t,h);else{var d=i(e.nodeType);if(!d&&Ci(e,t))C(e,t,h,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(V)&&(e.removeAttribute(V),n=!0),s(n)&&L(e,t,h))return A(t,h,!0),e;e=l(e)}var p=e.elm,m=u.parentNode(p);if(f(t,h,p._leaveCb?null:m,u.nextSibling(p)),i(t.parent)){var g=t.parent,v=w(t);while(g){for(var y=0;y<o.destroy.length;++y)o.destroy[y](g);if(g.elm=t.elm,v){for(var b=0;b<o.create.length;++b)o.create[b](Oi,g);var _=g.data.hook.insert;if(_.merged)for(var I=1;I<_.fns.length;I++)_.fns[I]()}else ki(g);g=g.parent}}i(m)?S([e],0,0):i(e.tag)&&E(e)}}return A(t,h,c),t.elm}i(e)&&E(e)}}var Ri={create:Di,update:Di,destroy:function(e){Di(e,Oi)}};function Di(e,t){(e.data.directives||t.data.directives)&&Pi(e,t)}function Pi(e,t){var n,r,i,s=e===Oi,o=t===Oi,a=Mi(e.data.directives,e.context),c=Mi(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Vi(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Vi(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Vi(u[n],"inserted",t,e)};s?It(t,"insert",h):h()}if(l.length&&It(t,"postpatch",(function(){for(var n=0;n<l.length;n++)Vi(l[n],"componentUpdated",t,e)})),!s)for(n in a)c[n]||Vi(a[n],"unbind",e,e,o)}var ji=Object.create(null);function Mi(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)r=e[n],r.modifiers||(r.modifiers=ji),i[Fi(r)]=r,r.def=Qe(t.$options,"directives",r.name,!0);return i}function Fi(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Vi(e,t,n,r,i){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,r,i)}catch(Eo){nt(Eo,n.context,"directive "+e.name+" "+t+" hook")}}var $i=[Si,Ri];function Ui(e,t){var n=t.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(e.data.attrs)||!r(t.data.attrs))){var s,o,a,c=t.elm,u=e.data.attrs||{},l=t.data.attrs||{};for(s in i(l.__ob__)&&(l=t.data.attrs=N({},l)),l)o=l[s],a=u[s],a!==o&&Bi(c,s,o,t.data.pre);for(s in(ee||ne)&&l.value!==u.value&&Bi(c,"value",l.value),u)r(l[s])&&(Wr(s)?c.removeAttributeNS(Kr,Gr(s)):Br(s)||c.removeAttribute(s))}}function Bi(e,t,n,r){r||e.tagName.indexOf("-")>-1?qi(e,t,n):Hr(t)?Qr(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Br(t)?e.setAttribute(t,zr(t,n)):Wr(t)?Qr(n)?e.removeAttributeNS(Kr,Gr(t)):e.setAttributeNS(Kr,t,n):qi(e,t,n)}function qi(e,t,n){if(Qr(n))e.removeAttribute(t);else{if(ee&&!te&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var zi={create:Ui,update:Ui};function Hi(e,t){var n=t.elm,s=t.data,o=e.data;if(!(r(s.staticClass)&&r(s.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Jr(t),c=n._transitionClasses;i(c)&&(a=Zr(a,ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Ki,Wi={create:Hi,update:Hi},Gi="__r",Qi="__c";function Ji(e){if(i(e[Gi])){var t=ee?"change":"input";e[t]=[].concat(e[Gi],e[t]||[]),delete e[Gi]}i(e[Qi])&&(e.change=[].concat(e[Qi],e.change||[]),delete e[Qi])}function Yi(e,t,n){var r=Ki;return function i(){var s=t.apply(null,arguments);null!==s&&es(e,i,n,r)}}var Xi=at&&!(ie&&Number(ie[1])<=53);function Zi(e,t,n,r){if(Xi){var i=Gn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}Ki.addEventListener(e,t,oe?{capture:n,passive:r}:n)}function es(e,t,n,r){(r||Ki).removeEventListener(e,t._wrapper||t,n)}function ts(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},i=e.data.on||{};Ki=t.elm,Ji(n),_t(n,i,Zi,es,Yi,t.context),Ki=void 0}}var ns,rs={create:ts,update:ts};function is(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,s,o=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in i(c.__ob__)&&(c=t.data.domProps=N({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=r(s)?"":String(s);ss(o,u)&&(o.value=u)}else if("innerHTML"===n&&si(o.tagName)&&r(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var l=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(Eo){}}}}function ss(e,t){return!e.composing&&("OPTION"===e.tagName||os(e,t)||as(e,t))}function os(e,t){var n=!0;try{n=document.activeElement!==e}catch(Eo){}return n&&e.value!==t}function as(e,t){var n=e.value,r=e._vModifiers;if(i(r)){if(r.number)return m(n)!==m(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var cs={create:is,update:is},us=_((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function ls(e){var t=hs(e.style);return e.staticStyle?N(e.staticStyle,t):t}function hs(e){return Array.isArray(e)?L(e):"string"===typeof e?us(e):e}function ds(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=ls(i.data))&&N(r,n)}(n=ls(e.data))&&N(r,n);var s=e;while(s=s.parent)s.data&&(n=ls(s.data))&&N(r,n);return r}var fs,ps=/^--/,ms=/\s*!important$/,gs=function(e,t,n){if(ps.test(t))e.style.setProperty(t,n);else if(ms.test(n))e.style.setProperty(k(t),n.replace(ms,""),"important");else{var r=ys(t);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)e.style[r]=n[i];else e.style[r]=n}},vs=["Webkit","Moz","ms"],ys=_((function(e){if(fs=fs||document.createElement("div").style,e=T(e),"filter"!==e&&e in fs)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<vs.length;n++){var r=vs[n]+t;if(r in fs)return r}}));function bs(e,t){var n=t.data,s=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(s.staticStyle)&&r(s.style))){var o,a,c=t.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=hs(t.data.style)||{};t.data.normalizedStyle=i(d.__ob__)?N({},d):d;var f=ds(t,!0);for(a in h)r(f[a])&&gs(c,a,"");for(a in f)o=f[a],o!==h[a]&&gs(c,a,null==o?"":o)}}var ws={create:bs,update:bs},_s=/\s+/;function Is(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(_s).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Ts(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(_s).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Es(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&N(t,Ss(e.name||"v")),N(t,e),t}return"string"===typeof e?Ss(e):void 0}}var Ss=_((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),ks=J&&!te,Os="transition",xs="animation",Cs="transition",As="transitionend",Ns="animation",Ls="animationend";ks&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Cs="WebkitTransition",As="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ns="WebkitAnimation",Ls="webkitAnimationEnd"));var Rs=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ds(e){Rs((function(){Rs(e)}))}function Ps(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Is(e,t))}function js(e,t){e._transitionClasses&&y(e._transitionClasses,t),Ts(e,t)}function Ms(e,t,n){var r=Vs(e,t),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===Os?As:Ls,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),e.addEventListener(a,l)}var Fs=/\b(transform|all)(,|$)/;function Vs(e,t){var n,r=window.getComputedStyle(e),i=(r[Cs+"Delay"]||"").split(", "),s=(r[Cs+"Duration"]||"").split(", "),o=$s(i,s),a=(r[Ns+"Delay"]||"").split(", "),c=(r[Ns+"Duration"]||"").split(", "),u=$s(a,c),l=0,h=0;t===Os?o>0&&(n=Os,l=o,h=s.length):t===xs?u>0&&(n=xs,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?Os:xs:null,h=n?n===Os?s.length:c.length:0);var d=n===Os&&Fs.test(r[Cs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function $s(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return Us(t)+Us(e[n])})))}function Us(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Bs(e,t){var n=e.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Es(e.data.transition);if(!r(s)&&!i(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,p=s.appearActiveClass,g=s.beforeEnter,v=s.enter,y=s.afterEnter,b=s.enterCancelled,w=s.beforeAppear,_=s.appear,I=s.afterAppear,T=s.appearCancelled,E=s.duration,S=Nn,k=Nn.$vnode;while(k&&k.parent)S=k.context,k=k.parent;var O=!S._isMounted||!e.isRootInsert;if(!O||_||""===_){var x=O&&d?d:u,C=O&&p?p:h,A=O&&f?f:l,N=O&&w||g,L=O&&"function"===typeof _?_:v,R=O&&I||y,D=O&&T||b,P=m(c(E)?E.enter:E);0;var j=!1!==o&&!te,M=Hs(L),V=n._enterCb=F((function(){j&&(js(n,A),js(n,C)),V.cancelled?(j&&js(n,x),D&&D(n)):R&&R(n),n._enterCb=null}));e.data.show||It(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),L&&L(n,V)})),N&&N(n),j&&(Ps(n,x),Ps(n,C),Ds((function(){js(n,x),V.cancelled||(Ps(n,A),M||(zs(P)?setTimeout(V,P):Ms(n,a,V)))}))),e.data.show&&(t&&t(),L&&L(n,V)),j||M||V()}}}function qs(e,t){var n=e.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Es(e.data.transition);if(r(s)||1!==n.nodeType)return t();if(!i(n._leaveCb)){var o=s.css,a=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,g=s.leaveCancelled,v=s.delayLeave,y=s.duration,b=!1!==o&&!te,w=Hs(f),_=m(c(y)?y.leave:y);0;var I=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&(js(n,l),js(n,h)),I.cancelled?(b&&js(n,u),g&&g(n)):(t(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),b&&(Ps(n,u),Ps(n,h),Ds((function(){js(n,u),I.cancelled||(Ps(n,l),w||(zs(_)?setTimeout(I,_):Ms(n,a,I)))}))),f&&f(n,I),b||w||I())}}function zs(e){return"number"===typeof e&&!isNaN(e)}function Hs(e){if(r(e))return!1;var t=e.fns;return i(t)?Hs(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Ks(e,t){!0!==t.data.show&&Bs(t)}var Ws=J?{create:Ks,activate:Ks,remove:function(e,t){!0!==e.data.show?qs(e,t):t()}}:{},Gs=[zi,Wi,rs,cs,ws,Ws],Qs=Gs.concat($i),Js=Li({nodeOps:Ei,modules:Qs});te&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&io(e,"input")}));var Ys={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?It(n,"postpatch",(function(){Ys.componentUpdated(e,t,n)})):Xs(e,t,n.context),e._vOptions=[].map.call(e.options,to)):("textarea"===n.tag||li(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",no),e.addEventListener("compositionend",ro),e.addEventListener("change",ro),te&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Xs(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,to);if(i.some((function(e,t){return!j(e,r[t])}))){var s=e.multiple?t.value.some((function(e){return eo(e,i)})):t.value!==t.oldValue&&eo(t.value,i);s&&io(e,"change")}}}};function Xs(e,t,n){Zs(e,t,n),(ee||ne)&&setTimeout((function(){Zs(e,t,n)}),0)}function Zs(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],i)s=M(r,to(o))>-1,o.selected!==s&&(o.selected=s);else if(j(to(o),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function eo(e,t){return t.every((function(t){return!j(t,e)}))}function to(e){return"_value"in e?e._value:e.value}function no(e){e.target.composing=!0}function ro(e){e.target.composing&&(e.target.composing=!1,io(e.target,"input"))}function io(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function so(e){return!e.componentInstance||e.data&&e.data.transition?e:so(e.componentInstance._vnode)}var oo={bind:function(e,t,n){var r=t.value;n=so(n);var i=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Bs(n,(function(){e.style.display=s}))):e.style.display=r?s:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?Bs(n,(function(){e.style.display=e.__vOriginalDisplay})):qs(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},ao={model:Ys,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?uo(En(t.children)):e}function lo(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var s in i)t[T(s)]=i[s];return t}function ho(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function fo(e){while(e=e.parent)if(e.data.transition)return!0}function po(e,t){return t.key===e.key&&t.tag===e.tag}var mo=function(e){return e.tag||Dt(e)},go=function(e){return"show"===e.name},vo={name:"transition",props:co,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var r=this.mode;0;var i=n[0];if(fo(this.$vnode))return i;var s=uo(i);if(!s)return i;if(this._leaving)return ho(e,i);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=lo(this),u=this._vnode,l=uo(u);if(s.data.directives&&s.data.directives.some(go)&&(s.data.show=!0),l&&l.data&&!po(s,l)&&!Dt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=N({},c);if("out-in"===r)return this._leaving=!0,It(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),ho(e,i);if("in-out"===r){if(Dt(s))return u;var d,f=function(){d()};It(c,"afterEnter",f),It(c,"enterCancelled",f),It(h,"delayLeave",(function(e){d=e}))}}return i}}},yo=N({tag:String,moveClass:String},co);delete yo.mode;var bo={props:yo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Ln(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=lo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(wo),e.forEach(_o),e.forEach(Io),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Ps(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(As,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(As,e),n._moveCb=null,js(n,t))})}})))},methods:{hasMove:function(e,t){if(!ks)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Ts(n,e)})),Is(n,t),n.style.display="none",this.$el.appendChild(n);var r=Vs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function wo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function _o(e){e.data.newPos=e.elm.getBoundingClientRect()}function Io(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}var To={Transition:vo,TransitionGroup:bo};Er.config.mustUseProp=Ur,Er.config.isReservedTag=oi,Er.config.isReservedAttr=Vr,Er.config.getTagNamespace=ai,Er.config.isUnknownElement=ui,N(Er.options.directives,ao),N(Er.options.components,To),Er.prototype.__patch__=J?Js:R,Er.prototype.$mount=function(e,t){return e=e&&J?hi(e):void 0,Pn(this,e,t)},J&&setTimeout((function(){B.devtools&&ue&&ue.emit("init",Er)}),0),t["a"]=Er}).call(this,n("c8ba"))},"2b19":function(e,t,n){var r=n("23e7"),i=n("129f");r({target:"Object",stat:!0},{is:i})},"2ca0":function(e,t,n){"use strict";var r=n("23e7"),i=n("06cf").f,s=n("50c4"),o=n("577e"),a=n("5a34"),c=n("1d80"),u=n("ab13"),l=n("c430"),h="".startsWith,d=Math.min,f=u("startsWith"),p=!l&&!f&&!!function(){var e=i(String.prototype,"startsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!p&&!f},{startsWith:function(e){var t=o(c(this));a(e);var n=s(d(arguments.length>1?arguments[1]:void 0,t.length)),r=o(e);return h?h.call(t,r,n):t.slice(n,n+r.length)===r}})},"2cf4":function(e,t,n){var r,i,s,o,a=n("da84"),c=n("1626"),u=n("d039"),l=n("0366"),h=n("1be4"),d=n("cc12"),f=n("1cdc"),p=n("605d"),m=a.setImmediate,g=a.clearImmediate,v=a.process,y=a.MessageChannel,b=a.Dispatch,w=0,_={},I="onreadystatechange";try{r=a.location}catch(O){}var T=function(e){if(_.hasOwnProperty(e)){var t=_[e];delete _[e],t()}},E=function(e){return function(){T(e)}},S=function(e){T(e.data)},k=function(e){a.postMessage(String(e),r.protocol+"//"+r.host)};m&&g||(m=function(e){var t=[],n=arguments.length,r=1;while(n>r)t.push(arguments[r++]);return _[++w]=function(){(c(e)?e:Function(e)).apply(void 0,t)},i(w),w},g=function(e){delete _[e]},p?i=function(e){v.nextTick(E(e))}:b&&b.now?i=function(e){b.now(E(e))}:y&&!f?(s=new y,o=s.port2,s.port1.onmessage=S,i=l(o.postMessage,o,1)):a.addEventListener&&c(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!u(k)?(i=k,a.addEventListener("message",S,!1)):i=I in d("script")?function(e){h.appendChild(d("script"))[I]=function(){h.removeChild(this),T(e)}}:function(e){setTimeout(E(e),0)}),e.exports={set:m,clear:g}},"2d00":function(e,t,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=r[1]))),e.exports=i&&+i},3206:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n("ade3"),i=(n("99af"),n("2b0e")),s=n("d9bd");function o(e,t){return function(){return Object(s["c"])("The ".concat(e," component must be used inside a ").concat(t))}}function a(e,t,n){var s=t&&n?{register:o(t,n),unregister:o(t,n)}:null;return i["a"].extend({name:"registrable-inject",inject:Object(r["a"])({},e,{default:s})})}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i["a"].extend({name:"registrable-provide",provide:function(){return Object(r["a"])({},e,t?this:{register:this.register,unregister:this.unregister})}})}},3410:function(e,t,n){var r=n("23e7"),i=n("d039"),s=n("7b0b"),o=n("e163"),a=n("e177"),c=i((function(){o(1)}));r({target:"Object",stat:!0,forced:c,sham:!a},{getPrototypeOf:function(e){return o(s(e))}})},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("825a"),o=n("df75");e.exports=r?Object.defineProperties:function(e,t){s(e);var n,r=o(t),a=r.length,c=0;while(a>c)i.f(e,n=r[c++],t[n]);return e}},3835:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(s.push(r.value),t&&s.length===t)break}catch(c){a=!0,i=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(a)throw i}}return s}}var s=n("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){return r(e)||i(e,t)||Object(s["a"])(e,t)||o()}},"38cf":function(e,t,n){var r=n("23e7"),i=n("1148");r({target:"String",proto:!0},{repeat:i})},"3ad0":function(e,t,n){},"3bbe":function(e,t,n){var r=n("1626");e.exports=function(e){if("object"===typeof e||r(e))return e;throw TypeError("Can't set "+String(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3ea3":function(e,t,n){var r=n("23e7"),i=n("f748"),s=Math.abs,o=Math.pow;r({target:"Math",stat:!0},{cbrt:function(e){return i(e=+e)*o(s(e),1/3)}})},"3f8c":function(e,t){e.exports={}},"408a":function(e,t){var n=1..valueOf;e.exports=function(e){return n.call(e)}},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("d039"),i=n("c6b6"),s="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?s.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),s=n("b622"),o=s("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},"466d":function(e,t,n){"use strict";var r=n("d784"),i=n("825a"),s=n("50c4"),o=n("577e"),a=n("1d80"),c=n("dc4a"),u=n("8aa5"),l=n("14c3");r("match",(function(e,t,n){return[function(t){var n=a(this),r=void 0==t?void 0:c(t,e);return r?r.call(t,n):new RegExp(t)[e](o(n))},function(e){var r=i(this),a=o(e),c=n(t,r,a);if(c.done)return c.value;if(!r.global)return l(r,a);var h=r.unicode;r.lastIndex=0;var d,f=[],p=0;while(null!==(d=l(r,a))){var m=o(d[0]);f[p]=m,""===m&&(r.lastIndex=u(a,s(r.lastIndex),h)),p++}return 0===p?null:f}]}))},4804:function(e,t,n){},4840:function(e,t,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||void 0==(n=r(s)[o])?t:i(n)}},"485a":function(e,t,n){var r=n("1626"),i=n("861d");e.exports=function(e,t){var n,s;if("string"===t&&r(n=e.toString)&&!i(s=n.call(e)))return s;if(r(n=e.valueOf)&&!i(s=n.call(e)))return s;if("string"!==t&&r(n=e.toString)&&!i(s=n.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"498a":function(e,t,n){"use strict";var r=n("23e7"),i=n("58a8").trim,s=n("c8d2");r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return i(this)}})},"4ae1":function(e,t,n){var r=n("23e7"),i=n("d066"),s=n("5087"),o=n("825a"),a=n("861d"),c=n("7c73"),u=n("0538"),l=n("d039"),h=i("Reflect","construct"),d=l((function(){function e(){}return!(h((function(){}),[],e)instanceof e)})),f=!l((function(){h((function(){}))})),p=d||f;r({target:"Reflect",stat:!0,forced:p,sham:p},{construct:function(e,t){s(e),o(t);var n=arguments.length<3?e:s(arguments[2]);if(f&&!d)return h(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(u.apply(e,r))}var i=n.prototype,l=c(a(i)?i:Object.prototype),p=Function.apply.call(e,l,t);return a(p)?p:l}})},"4b85":function(e,t,n){},"4bd4":function(e,t,n){"use strict";var r=n("5530"),i=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("159b"),n("7db0"),n("58df")),s=n("7e2b"),o=n("3206");t["a"]=Object(i["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,n=function(e){return e.$watch("hasError",(function(n){t.$set(t.errorBag,e._uid,n)}),{immediate:!0})},r={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=e.$watch("shouldValidate",(function(i){i&&(t.errorBag.hasOwnProperty(e._uid)||(r.valid=n(e)))})):r.valid=n(e),r},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var n=this.watchers.find((function(e){return e._uid===t._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"4d64":function(e,t,n){var r=n("fc6a"),i=n("50c4"),s=n("23cb"),o=function(e){return function(t,n,o){var a,c=r(t),u=i(c.length),l=s(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var r=n("0366"),i=n("7b0b"),s=n("9bdd"),o=n("e95a"),a=n("68ee"),c=n("50c4"),u=n("8418"),l=n("9a1f"),h=n("35a1");e.exports=function(e){var t=i(e),n=a(this),d=arguments.length,f=d>1?arguments[1]:void 0,p=void 0!==f;p&&(f=r(f,d>2?arguments[2]:void 0,2));var m,g,v,y,b,w,_=h(t),I=0;if(!_||this==Array&&o(_))for(m=c(t.length),g=n?new this(m):Array(m);m>I;I++)w=p?f(t[I],I):t[I],u(g,I,w);else for(y=l(t,_),b=y.next,g=n?new this:[];!(v=b.call(y)).done;I++)w=p?s(y,f,[v.value,I],!0):v.value,u(g,I,w);return g.length=I,g}},"4e82":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ade3"),i=n("3206");function s(e,t,n){return Object(i["a"])(e,t,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[e])return this[e].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(r["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[e]&&this[e].register(this)},beforeDestroy:function(){this[e]&&this[e].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}s("itemGroup")},"4e827":function(e,t,n){"use strict";var r=n("23e7"),i=n("59ed"),s=n("7b0b"),o=n("50c4"),a=n("577e"),c=n("d039"),u=n("addb"),l=n("a640"),h=n("04d1"),d=n("d998"),f=n("2d00"),p=n("512c"),m=[],g=m.sort,v=c((function(){m.sort(void 0)})),y=c((function(){m.sort(null)})),b=l("sort"),w=!c((function(){if(f)return f<70;if(!(h&&h>3)){if(d)return!0;if(p)return p<603;var e,t,n,r,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)m.push({k:t+r,v:n})}for(m.sort((function(e,t){return t.v-e.v})),r=0;r<m.length;r++)t=m[r].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),_=v||!y||!b||!w,I=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:a(t)>a(n)?1:-1}};r({target:"Array",proto:!0,forced:_},{sort:function(e){void 0!==e&&i(e);var t=s(this);if(w)return void 0===e?g.call(t):g.call(t,e);var n,r,a=[],c=o(t.length);for(r=0;r<c;r++)r in t&&a.push(t[r]);a=u(a,I(e)),n=a.length,r=0;while(r<n)t[r]=a[r++];while(r<c)delete t[r++];return t}})},"4f60":function(e,t,n){"use strict";var r=n("614a");n.d(t,"a",(function(){return r["a"]}));var i="firebase",s="9.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,s,"app-compat")},"4fc1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},"4ff9":function(e,t,n){},5087:function(e,t,n){var r=n("68ee"),i=n("0d51");e.exports=function(e){if(r(e))return e;throw TypeError(i(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("a691"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"512c":function(e,t,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},5135:function(e,t,n){var r=n("7b0b"),i={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return i.call(r(e),t)}},5319:function(e,t,n){"use strict";var r=n("d784"),i=n("d039"),s=n("825a"),o=n("1626"),a=n("a691"),c=n("50c4"),u=n("577e"),l=n("1d80"),h=n("8aa5"),d=n("dc4a"),f=n("0cb2"),p=n("14c3"),m=n("b622"),g=m("replace"),v=Math.max,y=Math.min,b=function(e){return void 0===e?e:String(e)},w=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),I=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,n){var r=_?"$":"$0";return[function(e,n){var r=l(this),i=void 0==e?void 0:d(e,g);return i?i.call(e,r,n):t.call(u(r),e,n)},function(e,i){var l=s(this),d=u(e);if("string"===typeof i&&-1===i.indexOf(r)&&-1===i.indexOf("$<")){var m=n(t,l,d,i);if(m.done)return m.value}var g=o(i);g||(i=u(i));var w=l.global;if(w){var _=l.unicode;l.lastIndex=0}var I=[];while(1){var T=p(l,d);if(null===T)break;if(I.push(T),!w)break;var E=u(T[0]);""===E&&(l.lastIndex=h(d,c(l.lastIndex),_))}for(var S="",k=0,O=0;O<I.length;O++){T=I[O];for(var x=u(T[0]),C=v(y(a(T.index),d.length),0),A=[],N=1;N<T.length;N++)A.push(b(T[N]));var L=T.groups;if(g){var R=[x].concat(A,C,d);void 0!==L&&R.push(L);var D=u(i.apply(void 0,R))}else D=f(x,d,C,A,L,i);C>=k&&(S+=d.slice(k,C)+D,k=C+x.length)}return S+d.slice(k)}]}),!I||!w||_)},"53ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");var r=n("ade3");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5606:function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return Q})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return j})),n.d(t,"_addComponent",(function(){return $})),n.d(t,"_addOrOverwriteComponent",(function(){return U})),n.d(t,"_apps",(function(){return F})),n.d(t,"_clearComponents",(function(){return H})),n.d(t,"_components",(function(){return V})),n.d(t,"_getProvider",(function(){return q})),n.d(t,"_registerComponent",(function(){return B})),n.d(t,"_removeServiceInstance",(function(){return z})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return Y})),n.d(t,"getApps",(function(){return X})),n.d(t,"initializeApp",(function(){return J})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var r=n("ffa6"),i=n("4fc1"),s=n("1fd5");n.d(t,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.1",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",I="@firebase/installations",T="@firebase/installations-compat",E="@firebase/messaging",S="@firebase/messaging-compat",k="@firebase/performance",O="@firebase/performance-compat",x="@firebase/remote-config",C="@firebase/remote-config-compat",A="@firebase/storage",N="@firebase/storage-compat",L="@firebase/firestore",R="@firebase/firestore-compat",D="firebase",P="9.1.0",j="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[I]:"fire-iid",[T]:"fire-iid-compat",[E]:"fire-fcm",[S]:"fire-fcm-compat",[k]:"fire-perf",[O]:"fire-perf-compat",[x]:"fire-rc",[C]:"fire-rc-compat",[A]:"fire-gcs",[N]:"fire-gcs-compat",[L]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},F=new Map,V=new Map;function $(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function U(e,t){e.container.addOrOverwriteComponent(t)}function B(e){const t=e.name;if(V.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;V.set(t,e);for(const n of F.values())$(n,e);return!0}function q(e,t){return e.container.getProvider(t)}function z(e,t,n=j){q(e,t).clearInstance(n)}function H(){V.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},W=new s["b"]("app","Firebase",K);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=P;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:j,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw W.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["h"])(e,o.options)&&Object(s["h"])(n,o.config))return o;throw W.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of V.values())a.addComponent(r);const c=new G(e,n,a);return F.set(i,c),c}function Y(e=j){const t=F.get(e);if(!t)throw W.create("no-app",{appName:e});return t}function X(){return Array.from(F.values())}async function Z(e){const t=e.name;F.has(t)&&(F.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var i;let s=null!==(i=M[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw W.create("invalid-log-argument");Object(i["d"])(e,t)}function ne(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){B(new r["a"]("platform-logger",e=>new o(e),"PRIVATE")),ee(c,u,e),ee("fire-js","")}re()},5607:function(e,t,n){"use strict";n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("b0c0"),n("99af"),n("a9e3"),n("7435");var r=n("80d2"),i=Symbol("rippleStop"),s=80;function o(e,t){e.style.transform=t,e.style.webkitTransform=t}function a(e,t){e.style.opacity=t.toString()}function c(e){return"TouchEvent"===e.constructor.name}function u(e){return"KeyboardEvent"===e.constructor.name}var l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=0,i=0;if(!u(e)){var s=t.getBoundingClientRect(),o=c(e)?e.touches[e.touches.length-1]:e;r=o.clientX-s.left,i=o.clientY-s.top}var a=0,l=.3;t._ripple&&t._ripple.circle?(l=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt(Math.pow(r-a,2)+Math.pow(i-a,2))/4):a=Math.sqrt(Math.pow(t.clientWidth,2)+Math.pow(t.clientHeight,2))/2;var h="".concat((t.clientWidth-2*a)/2,"px"),d="".concat((t.clientHeight-2*a)/2,"px"),f=n.center?h:"".concat(r-a,"px"),p=n.center?d:"".concat(i-a,"px");return{radius:a,scale:l,x:f,y:p,centerX:h,centerY:d}},h={show:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t._ripple&&t._ripple.enabled){var r=document.createElement("span"),i=document.createElement("span");r.appendChild(i),r.className="v-ripple__container",n.class&&(r.className+=" ".concat(n.class));var s=l(e,t,n),c=s.radius,u=s.scale,h=s.x,d=s.y,f=s.centerX,p=s.centerY,m="".concat(2*c,"px");i.className="v-ripple__animation",i.style.width=m,i.style.height=m,t.appendChild(r);var g=window.getComputedStyle(t);g&&"static"===g.position&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),o(i,"translate(".concat(h,", ").concat(d,") scale3d(").concat(u,",").concat(u,",").concat(u,")")),a(i,0),i.dataset.activated=String(performance.now()),setTimeout((function(){i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),o(i,"translate(".concat(f,", ").concat(p,") scale3d(1,1,1)")),a(i,.25)}),0)}},hide:function(e){if(e&&e._ripple&&e._ripple.enabled){var t=e.getElementsByClassName("v-ripple__animation");if(0!==t.length){var n=t[t.length-1];if(!n.dataset.isHiding){n.dataset.isHiding="true";var r=performance.now()-Number(n.dataset.activated),i=Math.max(250-r,0);setTimeout((function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),a(n,0),setTimeout((function(){var t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)}),300)}),i)}}}}};function d(e){return"undefined"===typeof e||!!e}function f(e){var t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e[i]){if(e[i]=!0,c(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||u(e),n._ripple.class&&(t.class=n._ripple.class),c(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=function(){h.show(e,n,t)},n._ripple.showTimer=window.setTimeout((function(){n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),s)}else h.show(e,n,t)}}function p(e){var t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((function(){p(e)})));window.setTimeout((function(){t._ripple&&(t._ripple.touched=!1)})),h.hide(t)}}function m(e){var t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}var g=!1;function v(e){g||e.keyCode!==r["p"].enter&&e.keyCode!==r["p"].space||(g=!0,f(e))}function y(e){g=!1,p(e)}function b(e){!0===g&&(g=!1,p(e))}function w(e,t,n){var r=d(t.value);r||h.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=r;var i=t.value||{};i.center&&(e._ripple.centered=!0),i.class&&(e._ripple.class=t.value.class),i.circle&&(e._ripple.circle=i.circle),r&&!n?(e.addEventListener("touchstart",f,{passive:!0}),e.addEventListener("touchend",p,{passive:!0}),e.addEventListener("touchmove",m,{passive:!0}),e.addEventListener("touchcancel",p),e.addEventListener("mousedown",f),e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),e.addEventListener("keydown",v),e.addEventListener("keyup",y),e.addEventListener("blur",b),e.addEventListener("dragstart",p,{passive:!0})):!r&&n&&_(e)}function _(e){e.removeEventListener("mousedown",f),e.removeEventListener("touchstart",f),e.removeEventListener("touchend",p),e.removeEventListener("touchmove",m),e.removeEventListener("touchcancel",p),e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p),e.removeEventListener("keydown",v),e.removeEventListener("keyup",y),e.removeEventListener("dragstart",p),e.removeEventListener("blur",b)}function I(e,t,n){w(e,t,!1)}function T(e){delete e._ripple,_(e)}function E(e,t){if(t.value!==t.oldValue){var n=d(t.oldValue);w(e,t,n)}}var S={bind:I,unbind:T,update:E};t["a"]=S},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.18.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("241c"),s=n("7418"),o=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(o(e)),n=s.f;return n?t.concat(n(e)):t}},"577e":function(e,t,n){var r=n("f5df");e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),i=n("577e"),s=n("5899"),o="["+s+"]",a=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(e){return function(t){var n=i(r(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"58df":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("2b0e");function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r["a"].extend({mixins:t})}},5994:function(e,t,n){"use strict";(function(e){var t=n("614a"),r=n("1f5a"),i=n("ffa6"),s=n("1fd5"),o="@firebase/auth-compat",a="0.1.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(e=Object(s["l"])()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["u"])()||Object(s["t"])()}function f(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["l"])()){return/Edge\/\d+/.test(e)}function m(e=Object(s["l"])()){return f()||p(e)}function g(){try{const e=self.localStorage,t=r["r"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!m()||Object(s["r"])()}catch(e){return v()&&Object(s["r"])()}return!1}function v(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function y(){return(l()||Object(s["n"])()||h())&&!d()&&g()&&!v()}function b(){return h()&&"undefined"!==typeof document}async function w(){return!!b()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={LOCAL:"local",NONE:"none",SESSION:"session"},I=r["o"],T="persistence";function E(e,t){I(Object.values(_).includes(t),e,"invalid-persistence-type"),Object(s["u"])()?I(t!==_.SESSION,e,"unsupported-persistence-type"):Object(s["t"])()?I(t===_.NONE,e,"unsupported-persistence-type"):v()?I(t===_.NONE||t===_.LOCAL&&Object(s["r"])(),e,"unsupported-persistence-type"):I(t===_.NONE||g(),e,"unsupported-persistence-type")}async function S(e){await e._initializationPromise;const t=O(),n=r["u"](T,e.config.apiKey,e.name);(null===t||void 0===t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function k(e,t){const n=O();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const i=r["u"](T,e,t),s=n.sessionStorage.getItem(i);switch(s){case _.NONE:return[r["K"]];case _.LOCAL:return[r["L"],r["z"]];case _.SESSION:return[r["z"]];default:return[]}}function O(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=r["o"];class C{constructor(){this.browserResolver=r["s"](r["y"]),this.cordovaResolver=r["s"](r["D"]),this.underlyingResolver=null,this._redirectPersistence=r["z"],this._completeRedirectFn=r["t"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return x(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){return e.unwrap()}function N(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return D(e)}function R(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new M(e,r["I"](e,t))}else if(i){const e=D(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function D(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["n"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?r["m"]._create(n,a):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new r["h"](n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s["c"]?i.credentialFromError(e):i.credentialFromResult(e)}async function P(e,t){let n;try{n=await t}catch(a){throw a instanceof s["c"]&&R(e,a),a}const{operationType:i,user:o}=n;return{operationType:i,credential:L(n),additionalUserInfo:r["H"](n),user:F.getOrCreate(o)}}async function j(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>P(e,n.confirm(t))}}class M{constructor(e,t){this.resolver=t,this.auth=N(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return P(A(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this._delegate=e,this.multiFactor=r["R"](e)}static getOrCreate(e){return F.USER_MAP.has(e)||F.USER_MAP.set(e,new F(e)),F.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return P(this.auth,r["N"](this._delegate,e))}async linkWithPhoneNumber(e,t){return j(this.auth,r["O"](this._delegate,e,t))}async linkWithPopup(e){return P(this.auth,r["P"](this._delegate,e,C))}async linkWithRedirect(e){return await S(r["p"](this.auth)),r["Q"](this._delegate,e,C)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return P(this.auth,r["S"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return j(this.auth,r["T"](this._delegate,e,t))}reauthenticateWithPopup(e){return P(this.auth,r["U"](this._delegate,e,C))}async reauthenticateWithRedirect(e){return await S(r["p"](this.auth)),r["V"](this._delegate,e,C)}sendEmailVerification(e){return r["W"](this._delegate,e)}async unlink(e){return await r["hb"](this._delegate,e),this}updateEmail(e){return r["ib"](this._delegate,e)}updatePassword(e){return r["jb"](this._delegate,e)}updatePhoneNumber(e){return r["kb"](this._delegate,e)}updateProfile(e){return r["lb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["mb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}F.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V=r["o"];class ${constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;V(n,"invalid-api-key",{appName:e.name});let i=[r["K"]];if("undefined"!==typeof window){i=k(n,e.name);for(const e of[r["L"],r["x"],r["z"]])i.includes(e)||i.push(e)}V(n,"invalid-api-key",{appName:e.name});const s="undefined"!==typeof window?C:void 0;this._delegate=t.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(r["F"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?F.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["C"](this._delegate,e,t)}applyActionCode(e){return r["w"](this._delegate,e)}checkActionCode(e){return r["A"](this._delegate,e)}confirmPasswordReset(e,t){return r["B"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return P(this._delegate,r["E"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["G"](this._delegate,e)}isSignInWithEmailLink(e){return r["M"](this._delegate,e)}async getRedirectResult(){V(y(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["J"](this._delegate,C);return e?P(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["v"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=U(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=U(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return r["Y"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["X"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(E(this._delegate,e),e){case _.SESSION:t=r["z"];break;case _.LOCAL:const e=await r["s"](r["L"])._isAvailable();t=e?r["L"]:r["x"];break;case _.NONE:t=r["K"];break;default:return r["q"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return P(this._delegate,r["Z"](this._delegate))}signInWithCredential(e){return P(this._delegate,r["ab"](this._delegate,e))}signInWithCustomToken(e){return P(this._delegate,r["bb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return P(this._delegate,r["cb"](this._delegate,e,t))}signInWithEmailLink(e,t){return P(this._delegate,r["db"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return j(this._delegate,r["eb"](this._delegate,e,t))}async signInWithPopup(e){return V(y(),this._delegate,"operation-not-supported-in-this-environment"),P(this._delegate,r["fb"](this._delegate,e,C))}async signInWithRedirect(e){return V(y(),this._delegate,"operation-not-supported-in-this-environment"),await S(this._delegate),r["gb"](this._delegate,e,C)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["nb"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function U(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&F.getOrCreate(e));return{next:s,error:t,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$.Persistence=_;class B{constructor(){this.providerId="phone",this._delegate=new r["i"](A(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}B.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,B.PROVIDER_ID=r["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q=r["o"];class z{constructor(e,n,i=t["a"].app()){var s;q(null===(s=i.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="auth-compat";function K(e){e.INTERNAL.registerComponent(new i["a"](H,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new $(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],PhoneAuthProvider:B,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:z,TwitterAuthProvider:r["n"],Auth:$,AuthCredential:r["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}K(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var r=n("1626"),i=n("0d51");e.exports=function(e){if(r(e))return e;throw TypeError(i(e)+" is not a function")}},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("5135"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("d039"),s=n("df75"),o=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;e.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=l({},e)[n]||s(l({},t)).join("")!=i}))?function(e,t){var n=c(e),i=arguments.length,l=1,h=o.f,d=a.f;while(i>l){var f,p=u(arguments[l++]),m=h?s(p).concat(h(p)):s(p),g=m.length,v=0;while(g>v)f=m[v++],r&&!d.call(p,f)||(n[f]=p[f])}return n}:l},"614a":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("1fd5"),i=n("ffa6"),s=n("5606"),o=n("4fc1");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(r["e"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["e"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["i"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(r["i"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["g"],ErrorFactory:r["b"],deepExtend:r["i"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){Object(s["registerVersion"])(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},"61d2":function(e,t,n){},6544:function(e,t){e.exports=function(e,t){var n="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var r in"function"===typeof e.exports&&(n.components=e.exports.options.components),n.components=n.components||{},t)n.components[r]=n.components[r]||t[r]}},6547:function(e,t,n){var r=n("a691"),i=n("577e"),s=n("1d80"),o=function(e){return function(t,n){var o,a,c=i(s(t)),u=r(n),l=c.length;return u<0||u>=l?e?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?e?c.charAt(u):o:e?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("d039"),i=n("1626"),s=n("f5df"),o=n("d066"),a=n("8925"),c=[],u=o("Reflect","construct"),l=/^\s*(?:class|function)\b/,h=l.exec,d=!l.exec((function(){})),f=function(e){if(!i(e))return!1;try{return u(Object,c,e),!0}catch(t){return!1}},p=function(e){if(!i(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!h.call(l,a(e))};e.exports=!u||r((function(){var e;return f(f.call)||!f(Object)||!f((function(){e=!0}))||e}))?p:f},"69f3":function(e,t,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("c6cd"),d=n("f772"),f=n("d012"),p="Object already initialized",m=a.WeakMap,g=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var y=h.state||(h.state=new m),b=y.get,w=y.has,_=y.set;r=function(e,t){if(w.call(y,e))throw new TypeError(p);return t.facade=e,_.call(y,e,t),t},i=function(e){return b.call(y,e)||{}},s=function(e){return w.call(y,e)}}else{var I=d("state");f[I]=!0,r=function(e,t){if(l(e,I))throw new TypeError(p);return t.facade=e,u(e,I,t),t},i=function(e){return l(e,I)?e[I]:{}},s=function(e){return l(e,I)}}e.exports={set:r,get:i,has:s,enforce:g,getterFor:v}},"6b75":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"6ece":function(e,t,n){},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("5135"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=d(n),u.source||(u.source=f.join("string"==typeof g?g:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},"6f53":function(e,t,n){var r=n("83ab"),i=n("df75"),s=n("fc6a"),o=n("d1e7").f,a=function(e){return function(t){var n,a=s(t),c=i(a),u=c.length,l=0,h=[];while(u>l)n=c[l++],r&&!o.call(a,n)||h.push(e?[n,a[n]]:a[n]);return h}};e.exports={entries:a(!0),values:a(!1)}},7037:function(e,t,n){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports["default"]=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports["default"]=e.exports,e.exports.__esModule=!0),r(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),e.exports=r,e.exports["default"]=e.exports,e.exports.__esModule=!0},7156:function(e,t,n){var r=n("1626"),i=n("861d"),s=n("d2bb");e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7435:function(e,t,n){},"746f":function(e,t,n){var r=n("428f"),i=n("5135"),s=n("e538"),o=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||o(t,e,{value:s.f(e)})}},7496:function(e,t,n){"use strict";var r=n("5530"),i=(n("df86"),n("7560")),s=n("58df");t["a"]=Object(s["a"])(i["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(e){var t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:Object(r["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},7560:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n("5530"),i=n("2b0e"),s=i["a"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function o(e){var t=Object(r["a"])(Object(r["a"])({},e.props),e.injections),n=s.options.computed.isDark.call(t);return s.options.computed.themeClasses.call({isDark:n})}t["a"]=s},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7bc6":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));n("5530"),n("3835"),n("ac1f"),n("466d"),n("a15b"),n("d81d"),n("1276"),n("b0c0"),n("5319"),n("498a"),n("d3b7"),n("25f0"),n("38cf"),n("99af"),n("fb6a"),n("2ca0"),n("07ac");var r=n("d9bd");n("80d2"),n("8da5");function i(e){return!!e&&!!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(e){var t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError("Colors can only be numbers or strings, recieved ".concat(null==e?e:e.constructor.name," instead"));var n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map((function(e){return e+e})).join("")),6!==n.length&&Object(r["c"])("'".concat(e,"' is not a valid rgb color")),t=parseInt(n,16)}return t<0?(Object(r["c"])("Colors cannot be negative: '".concat(e,"'")),t=0):(t>16777215||isNaN(t))&&(Object(r["c"])("'".concat(e,"' is not a valid rgb color")),t=16777215),t}function o(e){var t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function a(e){return o(s(e))}},"7c73":function(e,t,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=o.length;while(e--)delete w[f][o[e]];return w()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=w(),void 0===t?n:s(n,t)}},"7db0":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").find,s=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s(o)},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("5e77"),o=n("1626"),a=n("9ed3"),c=n("e163"),u=n("d2bb"),l=n("d44e"),h=n("9112"),d=n("6eeb"),f=n("b622"),p=n("3f8c"),m=n("ae93"),g=s.PROPER,v=s.CONFIGURABLE,y=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,w=f("iterator"),_="keys",I="values",T="entries",E=function(){return this};e.exports=function(e,t,n,s,f,m,S){a(n,t,s);var k,O,x,C=function(e){if(e===f&&D)return D;if(!b&&e in L)return L[e];switch(e){case _:return function(){return new n(this,e)};case I:return function(){return new n(this,e)};case T:return function(){return new n(this,e)}}return function(){return new n(this)}},A=t+" Iterator",N=!1,L=e.prototype,R=L[w]||L["@@iterator"]||f&&L[f],D=!b&&R||C(f),P="Array"==t&&L.entries||R;if(P&&(k=c(P.call(new e)),k!==Object.prototype&&k.next&&(i||c(k)===y||(u?u(k,y):o(k[w])||d(k,w,E)),l(k,A,!0,!0),i&&(p[A]=E))),g&&f==I&&R&&R.name!==I&&(!i&&v?h(L,"name",I):(N=!0,D=function(){return R.call(this)})),f)if(O={values:C(I),keys:m?D:C(_),entries:C(T)},S)for(x in O)(b||N||!(x in L))&&d(L,x,O[x]);else r({target:t,proto:!0,forced:b||N},O);return i&&!S||L[w]===D||d(L,w,D,{name:f}),p[t]=D,O}},"7e2b":function(e,t,n){"use strict";var r=n("2b0e");function i(e){return function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(t,r)||this.$delete(this.$data[e],r);for(var i in t)this.$set(this.$data[e],i,t[i])}}t["a"]=r["a"].extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},"80d2":function(e,t,n){"use strict";n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"h",(function(){return h})),n.d(t,"k",(function(){return d})),n.d(t,"n",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"f",(function(){return m})),n.d(t,"o",(function(){return g})),n.d(t,"p",(function(){return y})),n.d(t,"t",(function(){return b})),n.d(t,"q",(function(){return w})),n.d(t,"c",(function(){return I})),n.d(t,"u",(function(){return T})),n.d(t,"v",(function(){return E})),n.d(t,"m",(function(){return S})),n.d(t,"l",(function(){return k})),n.d(t,"e",(function(){return O})),n.d(t,"s",(function(){return x})),n.d(t,"d",(function(){return C})),n.d(t,"r",(function(){return A}));n("3835");var r=n("53ca"),i=(n("5530"),n("ac1f"),n("5319"),n("498a"),n("99af"),n("b64b"),n("1276"),n("a630"),n("3ca3"),n("a9e3"),n("dca8"),n("2ca0"),n("fb6a"),n("4e827"),n("d81d"),n("d3b7"),n("25f0"),n("4de4"),n("b0c0"),n("38cf"),n("b680"),n("cb29"),n("2b0e"));function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return i["a"].extend({name:n||e.replace(/__/g,"-"),functional:!0,render:function(n,r){var i=r.data,s=r.children;return i.staticClass="".concat(e," ").concat(i.staticClass||"").trim(),n(t,i,s)}})}function o(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=function i(s){n(s),e.removeEventListener(t,i,r)};e.addEventListener(t,i,r)}var a=!1;try{if("undefined"!==typeof window){var c=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("testListener",c,c),window.removeEventListener("testListener",c,c)}}catch(N){console.warn(N)}function u(e,t,n,r){e.addEventListener(t,n,!!a&&r)}function l(e,t,n){var r=t.length-1;if(r<0)return void 0===e?n:e;for(var i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function h(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;var n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((function(n){return h(e[n],t[n])}))}function d(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),l(e,t.split("."),n)):n}function f(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;var t=+window.getComputedStyle(e).getPropertyValue("z-index");return t||f(e.parentNode)}function p(e,t){for(var n={},r=0;r<t.length;r++){var i=t[r];"undefined"!==typeof e[i]&&(n[i]=e[i])}return n}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):"".concat(Number(e)).concat(t)}function g(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function v(e){return null!==e&&"object"===Object(r["a"])(e)}var y=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function b(e,t){var n=e.$vuetify.icons.component;if(t.startsWith("$")){var r="$vuetify.icons.values.".concat(t.split("$").pop().split(".").pop()),i=d(e,r,t);if("string"!==typeof i)return i;t=i}return null==n?t:{component:n,props:{icon:t}}}function w(e){return Object.keys(e)}var _=/-(\w)/g,I=function(e){return e.replace(_,(function(e,t){return t?t.toUpperCase():""}))};function T(e){return e.charAt(0).toUpperCase()+e.slice(1)}function E(e){return null!=e?Array.isArray(e)?e:[e]:[]}function S(e,t,n){return e.$slots[t]&&e.$scopedSlots[t]&&e.$scopedSlots[t].name?n?"v-slot":"scoped":e.$slots[t]?"normal":e.$scopedSlots[t]?"scoped":void 0}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e.$scopedSlots[t]?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots[t]||n&&!r?void 0:e.$slots[t]}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=0;while(r<e.length)n.push(e.substr(r,t)),r+=t;return n}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in t){var r=e[n],i=t[n];v(r)&&v(i)?e[n]=A(r,i):e[n]=i}return e}},"81d5":function(e,t,n){"use strict";var r=n("7b0b"),i=n("23cb"),s=n("50c4");e.exports=function(e){var t=r(this),n=s(t.length),o=arguments.length,a=i(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,u=void 0===c?n:i(c,n);while(u>a)t[a++]=e;return t}},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(r(e))return e;throw TypeError(String(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?i.f(e,o,s(0,n)):e[o]=n}},"857a":function(e,t,n){var r=n("1d80"),i=n("577e"),s=/"/g;e.exports=function(e,t,n,o){var a=i(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+i(o).replace(s,"&quot;")+'"'),c+">"+a+"</"+t+">"}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"===typeof e?null!==e:r(e)}},8654:function(e,t,n){"use strict";var r=n("15fd"),i=n("2909"),s=n("5530"),o=(n("a9e3"),n("0481"),n("d3b7"),n("25f0"),n("caad"),n("2b19"),n("4ff9"),n("4de4"),n("d81d"),n("ac1f"),n("1276"),n("99af"),n("d191"),n("9d26")),a=(n("1b2c"),n("a9ad")),c=n("7560"),u=n("58df"),l=n("80d2"),h=Object(u["a"])(c["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(e,t){var n=t.children,r=t.listeners,i=t.props,o={staticClass:"v-label",class:Object(s["a"])({"v-label--active":i.value,"v-label--is-disabled":i.disabled},Object(c["b"])(t)),attrs:{for:i.for,"aria-hidden":!i.for},on:r,style:{left:Object(l["f"])(i.left),right:Object(l["f"])(i.right),position:i.absolute?"absolute":"relative"},ref:"label"};return e("label",a["a"].options.methods.setTextColor(i.focused&&i.color,o),n)}}),d=h,f=(n("8ff2"),Object(u["a"])(a["a"],c["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(e,t){return this.$createElement("div",{staticClass:"v-messages__message",key:t},Object(l["l"])(this,"default",{message:e,key:t})||[e])}},render:function(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),p=f,m=n("7e2b"),g=n("53ca"),v=(n("fb6a"),n("3206")),y=n("d9bd"),b=Object(u["a"])(a["a"],Object(v["a"])("form"),c["a"]),w=b.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("input",e)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(e,t){Object(l["h"])(e,t)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(e){e||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var e=this;setTimeout((function(){e.hasInput=!1,e.hasFocused=!1,e.isResetting=!1,e.validate()}),0)},hasError:function(e){this.shouldValidate&&this.$emit("update:error",e)},value:function(e){this.lazyValue=e}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(e){return e?Array.isArray(e)?e:[e]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation:function(){this.isResetting=!0},validate:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=[];t=t||this.internalValue,e&&(this.hasInput=this.hasFocused=!0);for(var r=0;r<this.rules.length;r++){var i=this.rules[r],s="function"===typeof i?i(t):i;!1===s||"string"===typeof s?n.push(s||""):"boolean"!==typeof s&&Object(y["b"])("Rules should return a string or boolean, received '".concat(Object(g["a"])(s),"' instead"),this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}}),_=n("d9f7"),I=Object(u["a"])(m["a"],w),T=I.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return Object(s["a"])({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasDetails:function(){return this.messagesToDisplay.length>0},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty:function(){return!!this.lazyValue},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var e=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(t){if("string"===typeof t)return t;var n=t(e.internalValue);return"string"===typeof n?n:""})).filter((function(e){return""!==e})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value:function(e){this.lazyValue=e}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this["".concat(e,"Icon")],s="click:".concat(Object(l["o"])(e)),a=!(!this.listeners$[s]&&!t),c=Object(_["a"])({attrs:{"aria-label":a?Object(l["o"])(e).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:a?{click:function(e){e.preventDefault(),e.stopPropagation(),n.$emit(s,e),t&&t(e)},mouseup:function(e){e.preventDefault(),e.stopPropagation()}}:void 0},r);return this.$createElement("div",{staticClass:"v-input__icon",class:e?"v-input__icon--".concat(Object(l["o"])(e)):void 0},[this.$createElement(o["a"],c,i)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(l["f"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(d,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var e=this;return this.showDetails?this.$createElement(p,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(t){return Object(l["l"])(e,"message",t)}}}):null},genSlot:function(e,t,n){if(!n.length)return null;var r="".concat(e,"-").concat(t);return this.$createElement("div",{staticClass:"v-input__".concat(r),ref:r},n)},genPrependSlot:function(){var e=[];return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot:function(){var e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick:function(e){this.$emit("click",e)},onMouseDown:function(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp:function(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render:function(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),E=T,S=(n("e9b1"),Object(u["a"])(c["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(e,t){var n=t.props,r=parseInt(n.max,10),i=parseInt(n.value,10),o=r?"".concat(i," / ").concat(r):String(n.value),a=r&&i>r;return e("div",{staticClass:"v-counter",class:Object(s["a"])({"error--text":a},Object(c["b"])(t))},o)}})),k=S,O=n("90a2"),x=n("2b0e");function C(e){return x["a"].extend({name:"intersectable",mounted:function(){O["a"].inserted(this.$el,{name:"intersect",value:this.onObserve})},destroyed:function(){O["a"].unbind(this.$el)},methods:{onObserve:function(t,n,r){if(r)for(var i=0,s=e.onVisible.length;i<s;i++){var o=this[e.onVisible[i]];"function"!==typeof o?Object(y["c"])(e.onVisible[i]+" method is not available on the instance but referenced in intersectable mixin options"):o()}}}})}var A=n("297c"),N=n("dc22"),L=n("5607"),R=n("dd89"),D=["title"],P=Object(u["a"])(E,C({onVisible:["onResize","tryAutofocus"]}),A["a"]),j=["color","file","time","date","datetime-local","week","month"];t["a"]=P.extend().extend({name:"v-text-field",directives:{resize:N["a"],ripple:L["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},E.options.computed.classes.call(this)),{},{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped})},computedColor:function(){var e=w.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":e},computedCounterValue:function(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):Object(i["a"])((this.internalValue||"").toString()).length},hasCounter:function(){return!1!==this.counter&&null!=this.counter},hasDetails:function(){return E.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("input",this.lazyValue)}},isDirty:function(){var e;return(null==(e=this.lazyValue)?void 0:e.toString().length)>0||this.badInput},isEnclosed:function(){return this.filled||this.isSolo||this.outlined},isLabelActive:function(){return this.isDirty||j.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var e=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(e-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:e,right:"auto"}:{left:"auto",right:e}},showLabel:function(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue:function(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label:function(){this.$nextTick(this.setLabelWidth)},prefix:function(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value:function(e){this.lazyValue=e}},created:function(){this.$attrs.hasOwnProperty("box")&&Object(y["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(y["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(y["c"])("shaped should be used with either filled or outlined",this)},mounted:function(){var e=this;this.$watch((function(){return e.labelValue}),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((function(){return e.isBooted=!0}))},methods:{focus:function(){this.onFocus()},blur:function(e){var t=this;window.requestAnimationFrame((function(){t.$refs.input&&t.$refs.input.blur()}))},clearableCallback:function(){var e=this;this.$refs.input&&this.$refs.input.focus(),this.$nextTick((function(){return e.internalValue=null}))},genAppendSlot:function(){var e=[];return this.$slots["append-outer"]?e.push(this.$slots["append-outer"]):this.appendOuterIcon&&e.push(this.genIcon("appendOuter")),this.genSlot("append","outer",e)},genPrependInnerSlot:function(){var e=[];return this.$slots["prepend-inner"]?e.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&e.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",e)},genIconSlot:function(){var e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","inner",e)},genInputSlot:function(){var e=E.options.methods.genInputSlot.call(this),t=this.genPrependInnerSlot();return t&&(e.children=e.children||[],e.children.unshift(t)),e},genClearIcon:function(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter:function(){var e,t,n;if(!this.hasCounter)return null;var r=!0===this.counter?this.attrs$.maxlength:this.counter,i={dark:this.dark,light:this.light,max:r,value:this.computedCounterValue};return null!=(e=null==(t=(n=this.$scopedSlots).counter)?void 0:t.call(n,{props:i}))?e:this.$createElement(k,{props:i})},genControl:function(){return E.options.methods.genControl.call(this)},genDefaultSlot:function(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset:function(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel:function(){if(!this.showLabel)return null;var e={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(d,e,this.$slots.label||this.label)},genLegend:function(){var e=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(l["f"])(e)}},[t])},genInput:function(){var e=Object.assign({},this.listeners$);delete e.change;var t=this.attrs$,n=(t.title,Object(r["a"])(t,D));return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:Object(s["a"])(Object(s["a"])({},n),{},{autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type}),on:Object.assign(e,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages:function(){if(!this.showDetails)return null;var e=E.options.methods.genMessages.call(this),t=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[e,t])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(e){return this.$createElement("div",{class:"v-text-field__".concat(e),ref:e},this[e])},onBlur:function(e){var t=this;this.isFocused=!1,e&&this.$nextTick((function(){return t.$emit("blur",e)}))},onClick:function(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus:function(e){if(this.$refs.input){var t=Object(R["a"])(this.$el);if(t)return t.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,e&&this.$emit("focus",e)))}},onInput:function(e){var t=e.target;this.internalValue=t.value,this.badInput=t.validity&&t.validity.badInput},onKeyDown:function(e){e.keyCode===l["p"].enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",e)},onMouseDown:function(e){e.target!==this.$refs.input&&(e.preventDefault(),e.stopPropagation()),E.options.methods.onMouseDown.call(this,e)},onMouseUp:function(e){this.hasMouseDown&&this.focus(),E.options.methods.onMouseUp.call(this,e)},setLabelWidth:function(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth:function(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth:function(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus:function(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;var e=Object(R["a"])(this.$el);return!(!e||e.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue:function(e){this.hasColor=e,e?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize:function(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},8860:function(e,t,n){"use strict";var r=n("b85c"),i=n("5530"),s=(n("0481"),n("c740"),n("a434"),n("3ad0"),n("8dd9"));t["a"]=s["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(e){this.groups.push(e)},unregister:function(e){var t=this.groups.findIndex((function(t){return t._uid===e._uid}));t>-1&&this.groups.splice(t,1)},listClick:function(e){if(!this.expand){var t,n=Object(r["a"])(this.groups);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.toggle(e)}}catch(s){n.e(s)}finally{n.f()}}}},render:function(e){var t={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(i["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return e(this.tag,this.setBackgroundColor(this.color,t),[this.$slots.default])}})},8925:function(e,t,n){var r=n("1626"),i=n("c6cd"),s=Function.toString;r(i.inspectSource)||(i.inspectSource=function(e){return s.call(e)}),e.exports=i.inspectSource},"899c":function(e,t,n){},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8c4f":function(e,t,n){"use strict";
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function r(e,t){0}function i(e,t){for(var n in t)e[n]=t[n];return e}var s=/[!'()*]/g,o=function(e){return"%"+e.charCodeAt(0).toString(16)},a=/%2C/g,c=function(e){return encodeURIComponent(e).replace(s,o).replace(a,",")};function u(e){try{return decodeURIComponent(e)}catch(t){0}return e}function l(e,t,n){void 0===t&&(t={});var r,i=n||d;try{r=i(e||"")}catch(a){r={}}for(var s in t){var o=t[s];r[s]=Array.isArray(o)?o.map(h):h(o)}return r}var h=function(e){return null==e||"object"===typeof e?e:String(e)};function d(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=u(n.shift()),i=n.length>0?u(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function f(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return c(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(c(t)):r.push(c(t)+"="+c(e)))})),r.join("&")}return c(t)+"="+c(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var p=/\/?$/;function m(e,t,n,r){var i=r&&r.options.stringifyQuery,s=t.query||{};try{s=g(s)}catch(a){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:b(t,i),matched:e?y(e):[]};return n&&(o.redirectedFrom=b(n,i)),Object.freeze(o)}function g(e){if(Array.isArray(e))return e.map(g);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=g(e[n]);return t}return e}var v=m(null,{path:"/"});function y(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function b(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var s=t||f;return(n||"/")+s(r)+i}function w(e,t,n){return t===v?e===t:!!t&&(e.path&&t.path?e.path.replace(p,"")===t.path.replace(p,"")&&(n||e.hash===t.hash&&_(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&_(e.query,t.query)&&_(e.params,t.params))))}function _(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var s=e[n],o=r[i];if(o!==n)return!1;var a=t[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?_(s,a):String(s)===String(a)}))}function I(e,t){return 0===e.path.replace(p,"/").indexOf(t.path.replace(p,"/"))&&(!t.hash||e.hash===t.hash)&&T(e.query,t.query)}function T(e,t){for(var n in t)if(!(n in e))return!1;return!0}function E(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,r=t.children,s=t.parent,o=t.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&k(m,o,p.route,p.configProps),a(m,o,r)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(e,t){var n=g.instances[c];(t&&n!==e||!t&&n===e)&&(g.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){g.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==g.instances[c]&&(g.instances[c]=e.componentInstance),E(u)};var y=g.props&&g.props[c];return y&&(i(l[c],{route:u,configProps:y}),k(v,o,u,y)),a(v,o,r)}};function k(e,t,n,r){var s=t.props=O(n,r);if(s){s=t.props=i({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function O(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function x(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function C(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function A(e){return e.replace(/\/\//g,"/")}var N=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},L=Y,R=F,D=V,P=B,j=J,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(e,t){var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/";while(null!=(n=M.exec(e))){var c=n[0],u=n[1],l=n.index;if(o+=e.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=e[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,I=p||m;r.push({name:f||i++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:I?z(I):v?".*":"[^"+q(_)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function V(e,t){return B(F(e,t),t)}function $(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function U(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function B(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",K(t)));return function(t,r){for(var i="",s=t||{},o=r||{},a=o.pretty?$:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(N(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?U(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function q(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function H(e,t){return e.keys=t,e}function K(e){return e&&e.sensitive?"":"i"}function W(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(e,t)}function G(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Y(e[i],t,n).source);var s=new RegExp("(?:"+r.join("|")+")",K(n));return H(s,t)}function Q(e,t,n){return J(F(e,n),t,n)}function J(e,t,n){N(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"===typeof a)s+=q(a);else{var c=q(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=q(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",H(new RegExp("^"+s,K(n)),t)}function Y(e,t,n){return N(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?W(e,t):N(e)?G(e,t,n):Q(e,t,n)}L.parse=R,L.compile=D,L.tokensToFunction=P,L.tokensToRegExp=j;var X=Object.create(null);function Z(e,t,n){t=t||{};try{var r=X[e]||(X[e]=L.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function ee(e,t,n,r){var s="string"===typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){s=i({},e);var o=s.params;return o&&"object"===typeof o&&(s.params=i({},o)),s}if(!s.path&&s.params&&t){s=i({},s),s._normalized=!0;var a=i(i({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;s.path=Z(c,a,"path "+t.path)}else 0;return s}var u=C(s.path||""),h=t&&t.path||"/",d=u.path?x(u.path,h,n||s.append):h,f=l(u.query,s.query,r&&r.options.parseQuery),p=s.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var te,ne=[String,Object],re=[String,Array],ie=function(){},se={name:"RouterLink",props:{to:{type:ne,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:re,default:"click"}},render:function(e){var t=this,n=this.$router,r=this.$route,s=n.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,p=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?m(null,ee(a.redirectedFrom),null,n):a;u[g]=w(r,v,this.exactPath),u[p]=this.exact||this.exactPath?u[g]:I(r,v);var y=u[g]?this.ariaCurrentValue:null,b=function(e){oe(e)&&(t.replace?n.replace(o,ie):n.push(o,ie))},_={click:oe};Array.isArray(this.event)?this.event.forEach((function(e){_[e]=b})):_[this.event]=b;var T={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[p],isExactActive:u[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?e():e("span",{},E)}if("a"===this.tag)T.on=_,T.attrs={href:c,"aria-current":y};else{var S=ae(this.$slots.default);if(S){S.isStatic=!1;var k=S.data=i({},S.data);for(var O in k.on=k.on||{},k.on){var x=k.on[O];O in _&&(k.on[O]=Array.isArray(x)?x:[x])}for(var C in _)C in k.on?k.on[C].push(_[C]):k.on[C]=b;var A=S.data.attrs=i({},S.data.attrs);A.href=c,A["aria-current"]=y}else T.on=_}return e(this.tag,T,this.$slots.default)}};function oe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ae(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=ae(t.children)))return t}}function ce(e){if(!ce.installed||te!==e){ce.installed=!0,te=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",S),e.component("RouterLink",se);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ue="undefined"!==typeof window;function le(e,t,n,r,i){var s=t||[],o=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){he(s,o,a,e,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function he(e,t,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=fe(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:de(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?A(s+"/"+r.path):void 0;he(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};he(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function de(e,t){var n=L(e,[],t);return n}function fe(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:A(t.path+"/"+e)}function pe(e,t){var n=le(e),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(e){le(e,r,i,s)}function a(e,t){var n="object"!==typeof e?s[e]:void 0;le([t||e],r,i,s,n),n&&n.alias.length&&le(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,s,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,o){var a=ee(e,n,!1,t),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Z(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(me(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(m(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var p=ge(c,e),g=Z(p,f,'redirect route with path "'+p+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=Z(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return t.params=i.params,d(o,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):m(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function me(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=e.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?u(r[i]):r[i])}return!0}function ge(e,t){return x(e,t.parent?t.parent.path:"/",!0)}var ve=ue&&window.performance&&window.performance.now?window.performance:Date;function ye(){return ve.now().toFixed(3)}var be=ye();function we(){return be}function _e(e){return be=e}var Ie=Object.create(null);function Te(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=i({},window.history.state);return n.key=we(),window.history.replaceState(n,"",t),window.addEventListener("popstate",ke),function(){window.removeEventListener("popstate",ke)}}function Ee(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var s=Oe(),o=i.call(e,t,n,r?s:null);o&&("function"===typeof o.then?o.then((function(e){De(e,s)})).catch((function(e){0})):De(o,s))}))}}function Se(){var e=we();e&&(Ie[e]={x:window.pageXOffset,y:window.pageYOffset})}function ke(e){Se(),e.state&&e.state.key&&_e(e.state.key)}function Oe(){var e=we();if(e)return Ie[e]}function xe(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Ce(e){return Le(e.x)||Le(e.y)}function Ae(e){return{x:Le(e.x)?e.x:window.pageXOffset,y:Le(e.y)?e.y:window.pageYOffset}}function Ne(e){return{x:Le(e.x)?e.x:0,y:Le(e.y)?e.y:0}}function Le(e){return"number"===typeof e}var Re=/^#\d/;function De(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Re.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Ne(i),t=xe(r,i)}else Ce(e)&&(t=Ae(e))}else n&&Ce(e)&&(t=Ae(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Pe=ue&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function je(e,t){Se();var n=window.history;try{if(t){var r=i({},n.state);r.key=we(),n.replaceState(r,"",e)}else n.pushState({key:_e(ye())},"",e)}catch(s){window.location[t?"replace":"assign"](e)}}function Me(e){je(e,!0)}function Fe(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var Ve={redirected:2,aborted:4,cancelled:8,duplicated:16};function $e(e,t){return ze(e,t,Ve.redirected,'Redirected when going from "'+e.fullPath+'" to "'+Ke(t)+'" via a navigation guard.')}function Ue(e,t){var n=ze(e,t,Ve.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Be(e,t){return ze(e,t,Ve.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function qe(e,t){return ze(e,t,Ve.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function ze(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var He=["params","query","hash"];function Ke(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return He.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function We(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ge(e,t){return We(e)&&e._isRouter&&(null==t||e.type===t)}function Qe(e){return function(t,n,r){var i=!1,s=0,o=null;Je(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,s++;var c,u=et((function(t){Ze(t)&&(t=t.default),e.resolved="function"===typeof t?t:te.extend(t),n.components[a]=t,s--,s<=0&&r()})),l=et((function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=We(e)?e:new Error(t),r(o))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Je(e,t){return Ye(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Ye(e){return Array.prototype.concat.apply([],e)}var Xe="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Ze(e){return e.__esModule||Xe&&"Module"===e[Symbol.toStringTag]}function et(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var tt=function(e,t){this.router=e,this.base=nt(t),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function nt(e){if(!e)if(ue){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function rt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function it(e,t,n,r){var i=Je(e,(function(e,r,i,s){var o=st(e,t);if(o)return Array.isArray(o)?o.map((function(e){return n(e,r,i,s)})):n(o,r,i,s)}));return Ye(r?i.reverse():i)}function st(e,t){return"function"!==typeof e&&(e=te.extend(e)),e.options[t]}function ot(e){return it(e,"beforeRouteLeave",ct,!0)}function at(e){return it(e,"beforeRouteUpdate",ct)}function ct(e,t){if(t)return function(){return e.apply(t,arguments)}}function ut(e){return it(e,"beforeRouteEnter",(function(e,t,n,r){return lt(e,n,r)}))}function lt(e,t,n){return function(r,i,s){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)}))}}tt.prototype.listen=function(e){this.cb=e},tt.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},tt.prototype.onError=function(e){this.errorCbs.push(e)},tt.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(o){throw this.errorCbs.forEach((function(e){e(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(Ge(e,Ve.redirected)&&s===v||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},tt.prototype.confirmTransition=function(e,t,n){var i=this,s=this.current;this.pending=e;var o=function(e){!Ge(e)&&We(e)&&(i.errorCbs.length?i.errorCbs.forEach((function(t){t(e)})):(r(!1,"uncaught error during route navigation:"),console.error(e))),n&&n(e)},a=e.matched.length-1,c=s.matched.length-1;if(w(e,s)&&a===c&&e.matched[a]===s.matched[c])return this.ensureURL(),o(Ue(s,e));var u=rt(this.current.matched,e.matched),l=u.updated,h=u.deactivated,d=u.activated,f=[].concat(ot(h),this.router.beforeHooks,at(l),d.map((function(e){return e.beforeEnter})),Qe(d)),p=function(t,n){if(i.pending!==e)return o(Be(s,e));try{t(e,s,(function(t){!1===t?(i.ensureURL(!0),o(qe(s,e))):We(t)?(i.ensureURL(!0),o(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(o($e(s,e)),"object"===typeof t&&t.replace?i.replace(t):i.push(t)):n(t)}))}catch(r){o(r)}};Fe(f,p,(function(){var n=ut(d),r=n.concat(i.router.resolveHooks);Fe(r,p,(function(){if(i.pending!==e)return o(Be(s,e));i.pending=null,t(e),i.router.app&&i.router.app.$nextTick((function(){E(e)}))}))}))},tt.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},tt.prototype.setupListeners=function(){},tt.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=v,this.pending=null};var ht=function(e){function t(t,n){e.call(this,t,n),this._startLocation=dt(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Pe&&n;r&&this.listeners.push(Te());var i=function(){var n=e.current,i=dt(e.base);e.current===v&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Ee(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){je(A(r.base+e.fullPath)),Ee(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){Me(A(r.base+e.fullPath)),Ee(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(dt(this.base)!==this.current.fullPath){var t=A(this.base+this.current.fullPath);e?je(t):Me(t)}},t.prototype.getCurrentLocation=function(){return dt(this.base)},t}(tt);function dt(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(A(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var ft=function(e){function t(t,n,r){e.call(this,t,n),r&&pt(this.base)||mt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Pe&&n;r&&this.listeners.push(Te());var i=function(){var t=e.current;mt()&&e.transitionTo(gt(),(function(n){r&&Ee(e.router,n,t,!0),Pe||bt(n.fullPath)}))},s=Pe?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){yt(e.fullPath),Ee(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){bt(e.fullPath),Ee(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;gt()!==t&&(e?yt(t):bt(t))},t.prototype.getCurrentLocation=function(){return gt()},t}(tt);function pt(e){var t=dt(e);if(!/^\/#/.test(t))return window.location.replace(A(e+"/#"+t)),!0}function mt(){var e=gt();return"/"===e.charAt(0)||(bt("/"+e),!1)}function gt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function vt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function yt(e){Pe?je(vt(e)):window.location.hash=e}function bt(e){Pe?Me(vt(e)):window.location.replace(vt(e))}var wt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){Ge(e,Ve.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(tt),_t=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Pe&&!1!==e.fallback,this.fallback&&(t="hash"),ue||(t="abstract"),this.mode=t,t){case"history":this.history=new ht(this,e.base);break;case"hash":this.history=new ft(this,e.base,this.fallback);break;case"abstract":this.history=new wt(this,e.base);break;default:0}},It={currentRoute:{configurable:!0}};function Tt(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Et(e,t,n){var r="hash"===n?"#"+t:t;return e?A(e+"/"+r):r}_t.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},It.currentRoute.get=function(){return this.history&&this.history.current},_t.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof ht||n instanceof ft){var r=function(e){var r=n.current,i=t.options.scrollBehavior,s=Pe&&i;s&&"fullPath"in e&&Ee(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},_t.prototype.beforeEach=function(e){return Tt(this.beforeHooks,e)},_t.prototype.beforeResolve=function(e){return Tt(this.resolveHooks,e)},_t.prototype.afterEach=function(e){return Tt(this.afterHooks,e)},_t.prototype.onReady=function(e,t){this.history.onReady(e,t)},_t.prototype.onError=function(e){this.history.onError(e)},_t.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},_t.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},_t.prototype.go=function(e){this.history.go(e)},_t.prototype.back=function(){this.go(-1)},_t.prototype.forward=function(){this.go(1)},_t.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},_t.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=ee(e,t,n,this),i=this.match(r,t),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Et(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},_t.prototype.getRoutes=function(){return this.matcher.getRoutes()},_t.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},_t.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_t.prototype,It),_t.install=ce,_t.version="3.5.2",_t.isNavigationFailure=Ge,_t.NavigationFailureType=Ve,_t.START_LOCATION=v,ue&&window.Vue&&window.Vue.use(_t),t["a"]=_t},"8ce9":function(e,t,n){},"8da5":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n("80d2"),i=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],s=function(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055},o=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],a=function(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)};function c(e){for(var t=Array(3),n=s,o=i,a=0;a<3;++a)t[a]=Math.round(255*Object(r["e"])(n(o[a][0]*e[0]+o[a][1]*e[1]+o[a][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function u(e){for(var t=[0,0,0],n=a,r=o,i=n((e>>16&255)/255),s=n((e>>8&255)/255),c=n((e>>0&255)/255),u=0;u<3;++u)t[u]=r[u][0]*i+r[u][1]*s+r[u][2]*c;return t}},"8dd9":function(e,t,n){"use strict";var r=n("5530"),i=(n("25a8"),n("7e2b")),s=n("a9ad"),o=n("c995"),a=n("24b2"),c=n("a236"),u=n("7560"),l=n("58df");t["a"]=Object(l["a"])(i["a"],s["a"],o["a"],a["a"],c["a"],u["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])(Object(r["a"])({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(e){var t={class:this.classes,style:this.styles,on:this.listeners$};return e(this.tag,this.setBackgroundColor(this.color,t),this.$slots.default)}})},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return xr})),n.d(t,"b",(function(){return Ar})),n.d(t,"c",(function(){return Cr})),n.d(t,"d",(function(){return Lr})),n.d(t,"e",(function(){return Nr})),n.d(t,"f",(function(){return Rr})),n.d(t,"g",(function(){return Dr})),n.d(t,"h",(function(){return kr})),n.d(t,"i",(function(){return Or}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var e=h(this);delete _[e]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},T=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function E(e){e:{var t=Bn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function S(e){return Array.prototype.concat.apply([],arguments)}function k(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e){return/^[\s\xa0]*$/.test(e)}var x,C=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function A(e,t){return-1!=e.indexOf(t)}function N(e,t){return e<t?-1:e>t?1:0}e:{var L=a.navigator;if(L){var R=L.userAgent;if(R){x=R;break e}}x=""}function D(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function P(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function F(e){return F[" "](e),e}function V(e){var t=X;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=c;var $,U=A(x,"Opera"),B=A(x,"Trident")||A(x,"MSIE"),q=A(x,"Edge"),z=q||B,H=A(x,"Gecko")&&!(A(x.toLowerCase(),"webkit")&&!A(x,"Edge"))&&!(A(x,"Trident")||A(x,"MSIE"))&&!A(x,"Edge"),K=A(x.toLowerCase(),"webkit")&&!A(x,"Edge");function W(){var e=a.document;return e?e.documentMode:void 0}e:{var G="",Q=function(){var e=x;return H?/rv:([^\);]+)(\)|;)/.exec(e):q?/Edge\/([\d\.]+)/.exec(e):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):K?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Q&&(G=Q?Q[1]:""),B){var J=W();if(null!=J&&J>parseFloat(G)){$=String(J);break e}}$=G}var Y,X={};function Z(){return V((function(){let e=0;const t=C(String($)).split("."),n=C("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&B){var ee=W();Y=ee||(parseInt($,10)||void 0)}else Y=void 0;var te=Y,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ie(e,t){if(re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(H){e:{try{F(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:se[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}re.prototype.h=function(){this.defaultPrevented=!0},y(ie,re);var se={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ce(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);return null}return n=Se(n),e&&e[oe]?e.N(t,n,l(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Te(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ve(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ne||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ve(){function e(n){return t.call(e.src,e.listener,n)}var t=Ie;return e}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);return null}return n=Se(n),e&&e[oe]?e.O(t,n,l(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function be(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=Se(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Te(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[oe])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Te(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Ie(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&we(e),e=n.call(r,t)}return e}function Te(e){return e=e[fe],e instanceof le?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function ke(){b.call(this),this.i=new le(this),this.P=this,this.I=null}function Oe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new re(t,e);else if(t instanceof re)t.target=t.target||e;else{var i=t;t=new re(r,e),M(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=xe(o,r,!0,t)&&i}if(o=t.g=e,i=xe(o,r,!0,t)&&i,i=xe(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=xe(o,r,!1,t)&&i}function xe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(ke,b),ke.prototype[oe]=!0,ke.prototype.removeEventListener=function(e,t,n,r){be(this,e,t,n,r)},ke.prototype.M=function(){if(ke.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ce=a.JSON.stringify;function Ae(){var e=Ve;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const n=Re.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Le,Re=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new De,e=>e.reset());class De{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){a.setTimeout(()=>{throw e},0)}function je(e,t){Le||Me(),Fe||(Le(),Fe=!0),Ve.add(e,t)}function Me(){var e=a.Promise.resolve(void 0);Le=function(){e.then($e)}}var Fe=!1,Ve=new Ne;function $e(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=Re;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function Ue(e,t){ke.call(this),this.h=e||1,this.g=t||a,this.j=g(this.kb,this),this.l=Date.now()}function Be(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function qe(e,t,n){if("function"===typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function ze(e){e.g=qe(()=>{e.g=null,e.i&&(e.i=!1,ze(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}y(Ue,ke),r=Ue.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(Be(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ue.Z.M.call(this),Be(this),delete this.g};class He extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ze(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(e){b.call(this),this.h=e,this.g={}}y(Ke,b);var We=[];function Ge(e,t,n,r){Array.isArray(n)||(n&&(We[0]=n.toString()),n=We);for(var i=0;i<n.length;i++){var s=me(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qe(e){D(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Je(){this.g=!0}function Ye(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ce(n)}catch(a){return t}}Ke.prototype.M=function(){Ke.Z.M.call(this),Qe(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new ke}function st(e){re.call(this,nt.Ma,e)}function ot(e){const t=it();Oe(t,new st(t,e))}function at(e,t){re.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();Oe(t,new at(t,e))}function ut(e,t){re.call(this,nt.Na,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",y(st,re),nt.STAT_EVENT="statevent",y(at,re),nt.Na="timingevent",y(ut,re);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,vt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function yt(){re.call(this,"d")}function bt(){re.call(this,"c")}function wt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ke(this),this.P=Tt,e=z?125:void 0,this.W=new Ue(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}y(yt,re),y(bt,re),y(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},gt=new wt;var Tt=45e3,Et={},St={};function kt(e,t,n){e.K=1,e.v=Yt(Ht(t)),e.s=n,e.U=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),Nt(e),e.A=Ht(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new It,e.g=br(e.l,n?t:null,!e.s),0<e.O&&(e.L=new He(g(e.Ia,e,e.g),e.O)),Ge(e.V,e.g,"readystatechange",e.gb),t=e.H?P(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ot(1),Ye(e.j,e.u,e.A,e.m,e.X,e.s)}function xt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ct(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==St){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Et){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),jt(e,r)}xt(e)&&r!=St&&r!=Et&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Dt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?Et:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function Nt(e){e.Y=Date.now()+e.P,Lt(e,e.P)}function Lt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(g(e.eb,e),t)}function Rt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Dt(e){0==e.l.G||e.I||pr(e.l,e)}function Pt(e){Rt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Be(e.W),Qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||_n(n.i,e)))if(n.I=e.N,!e.J&&_n(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fr(n),tr(n)}lr(n),ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=lt(g(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else gr(n,11)}else if((e.J||n.g==e)&&fr(n),!O(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(A(e,"spdy")||A(e,"quic")||A(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(In(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Jt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=yr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Rt(a),Nt(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||gr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gr(n,7):er(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ot(4)}catch(u){}}function Mt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)T(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Mt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Vt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Vt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function $t(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Ut(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Ut(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Ut(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=_t.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Gn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const h=Gn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||z||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==t||ot(8==t||0>=d?3:2),Rt(this);var n=this.g.ba();this.N=n;t:if(xt(this)){var r=Qn(this.g);e="";var i=r.length,s=4==Gn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),Dt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ct(12),Pt(this),Dt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(Ct(this,h,o),z&&this.i&&3==h&&(Ge(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,o,null),jt(this,o)),4==h&&Pt(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Nt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Pt(this),Dt(this)}}}catch(h){}},r.fb=function(){if(this.g){var e=Gn(this.g),t=this.g.ga();this.C<t.length&&(Rt(this),Ct(this,e,t),this.i&&4!=e&&Nt(this))}},r.cancel=function(){this.I=!0,Pt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),Pt(this),this.o=2,Dt(this)):Lt(this,this.Y-e)},r=Vt.prototype,r.R=function(){$t(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return $t(this),this.g.concat()},r.get=function(e,t){return Ut(this.h,e)?this.h[e]:t},r.set=function(e,t){Ut(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Bt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof zt){this.g=void 0!==t?t:e.g,Kt(this,e.j),this.s=e.s,Wt(this,e.i),Gt(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Vt(t.g),n.h=t.h),Qt(this,n),this.o=e.o}else e&&(n=String(e).match(Bt))?(this.g=!!t,Kt(this,n[1]||"",!0),this.s=en(n[2]||""),Wt(this,n[3]||"",!0),Gt(this,n[4]),this.l=en(n[5]||"",!0),Qt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function Ht(e){return new zt(e)}function Kt(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Wt(e,t,n){e.i=n?en(t,!0):t}function Gt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qt(e,t,n){t instanceof un?(e.h=t,mn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Jt(e,t,n){e.h.set(t,n)}function Yt(e){return Jt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Xt(e){return e instanceof zt?Ht(e):new zt(e,void 0)}function Zt(e,t,n,r){var i=new zt(null,void 0);return e&&Kt(i,e),t&&Wt(i,t),n&&Gt(i,n),r&&(i.l=r),i}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}zt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ln(e){e.g||(e.g=new Vt,e.h=0,e.i&&qt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){ln(e),t=pn(e,t),Ut(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ut(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&$t(e)))}function dn(e,t){return ln(e),t=pn(e,t),Ut(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),k(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mn(e,t){t&&!e.j&&(ln(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}r=un.prototype,r.add=function(e,t){ln(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){ln(this),this.g.forEach((function(n,r){T(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){ln(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=S(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=S(t,e[n])}return t},r.set=function(e,t){return ln(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var gn=class{constructor(e,t){this.h=e,this.g=t}};function vn(e){this.l=e||yn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function wn(e){return e.h?1:e.g?e.g.size:0}function _n(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function In(e,t){e.g?e.g.add(t):e.h=t}function Tn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function En(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return k(e.i)}function Sn(){}function kn(){this.g=new Sn}function On(e,t,n){const r=n||"";try{Ft(e,(function(e,n){let i=e;l(e)&&(i=Ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function xn(e,t){const n=new Je;if(a.Image){const r=new Image;r.onload=v(Cn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=v(Cn,n,r,"TestLoadImage: error",!1,t),r.onabort=v(Cn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=v(Cn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Cn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function An(e){this.l=e.$b||null,this.j=e.ib||!1}function Nn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=En(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Sn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Sn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(An,ft),An.prototype.g=function(){return new Nn(this.l,this.j)},An.prototype.i=function(e){return function(){return e}}({}),y(Nn,ke);var Ln=0;function Rn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Dn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Pn(e)}function Pn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Nn.prototype,r.open=function(e,t){if(this.readyState!=Ln)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Pn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Ln},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Dn(this):Pn(this),3==this.readyState&&Rn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Dn(this))},r.Ta=function(e){this.g&&(this.response=e,Dn(this))},r.ha=function(){this.g&&Dn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=a.JSON.parse;function Mn(e){ke.call(this),this.headers=new Vt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}y(Mn,ke);var Fn="",Vn=/^https?$/i,$n=["POST","PUT"];function Un(e){return B&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Bn(e){return"content-type"==e.toLowerCase()}function qn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,zn(e),Kn(e)}function zn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function Hn(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=Gn(e)||2!=e.ba()))if(e.v&&4==Gn(e))qe(e.Fa,0,e);else if(Oe(e,"readystatechange"),4==Gn(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(Bt)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Vn.test(i?i.toLowerCase():"")}n=r}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var c=2<Gn(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",zn(e)}}finally{Kn(e)}}}function Kn(e,t){if(e.g){Wn(e);const r=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||Oe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Wn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Gn(e){return e.g?e.g.readyState:0}function Qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Jn(e){let t="";return D(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Yn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Jn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Jt(e,t,n))}function Xn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Je,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xn("baseRetryDelayMs",5e3,e),this.$a=Xn("retryDelaySeedMs",1e4,e),this.Ya=Xn("forwardChannelMaxRetries",2,e),this.ra=Xn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(e&&e.concurrentRequestLimit),this.Ca=new kn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function er(e){if(nr(e),3==e.G){var t=e.V++,n=Ht(e.F);Jt(n,"SID",e.J),Jt(n,"RID",t),Jt(n,"TYPE","terminate"),ar(e,n),t=new _t(e,e.h,t,void 0),t.K=2,t.v=Yt(Ht(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=br(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Nt(t)}vr(e)}function tr(e){e.g&&(hr(e),e.g.cancel(),e.g=null)}function nr(e){tr(e),e.u&&(a.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new gn(e.Za++,t)),3==e.G&&ir(e)}function ir(e){bn(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function sr(e,t){return!(wn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=lt(g(e.Ha,e,t),mr(e,e.C)),e.C++,!0))}function or(e,t){var n;n=t?t.m:e.V++;const r=Ht(e.F);Jt(r,"SID",e.J),Jt(r,"RID",n),Jt(r,"AID",e.U),ar(e,r),e.o&&e.s&&Yn(r,e.o,e.s),n=new _t(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=cr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),In(e.i,n),kt(n,r,t)}function ar(e,t){e.j&&Ft({},(function(e,n){Jt(t,n,e)}))}function cr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?g(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{On(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ur(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function lr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=lt(g(e.Ga,e),mr(e,e.A)),e.A++,!0)}function hr(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function dr(e){e.g=new _t(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ht(e.oa);Jt(t,"RID","rpc"),Jt(t,"SID",e.J),Jt(t,"CI",e.N?"0":"1"),Jt(t,"AID",e.U),ar(e,t),Jt(t,"TYPE","xmlhttp"),e.o&&e.s&&Yn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Yt(Ht(t)),n.s=null,n.U=!0,Ot(n,e)}function fr(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pr(e,t){var n=null;if(e.g==t){fr(e),hr(e),e.g=null;var r=2}else{if(!_n(e.i,t))return;n=t.D,Tn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),Oe(r,new ut(r,n,t,i)),ir(e)}else ur(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&sr(e,t)||2==r&&lr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:gr(e,5);break;case 4:gr(e,10);break;case 3:gr(e,6);break;default:gr(e,2)}}function mr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function gr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=g(e.jb,e);n||(n=new zt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Kt(n,"https"),Yt(n)),xn(n.toString(),r)}else ct(2);e.G=0,e.j&&e.j.va(t),vr(e),nr(e)}function vr(e){e.G=0,e.I=-1,e.j&&(0==En(e.i).length&&0==e.l.length||(e.i.i.length=0,k(e.l),e.l.length=0),e.j.ua())}function yr(e,t,n){let r=Xt(n);if(""!=r.i)t&&Wt(r,t+"."+r.i),Gt(r,r.m);else{const e=a.location;r=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&D(e.aa,(function(e,t){Jt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Jt(r,t,n),Jt(r,"VER",e.ma),ar(e,r),r}function br(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Mn(new An({ib:!0})):new Mn(e.qa),t.L=e.H,t}function wr(){}function _r(){if(B&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Ir(e,t){ke.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Sr(this)}function Tr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Er(){bt.call(this),this.status=1}function Sr(e){this.g=e}r=Mn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void qn(this,s)}e=n||"";const i=new Vt(this.headers);r&&Ft(r,(function(e,t){i.set(t,e)})),r=E(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=I($n,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wn(this),0<this.B&&((this.K=Un(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=qe(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){qn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),Kn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},r.cb=function(){Hn(this)},r.ba=function(){try{return 2<Gn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new _t(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=P(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cr(this,i,t),n=Ht(this.F),Jt(n,"RID",e),Jt(n,"CVER",22),this.D&&Jt(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Yn(n,this.o,s),In(this.i,i),this.Ra&&Jt(n,"TYPE","init"),this.ja?(Jt(n,"$req",t),Jt(n,"SID","null"),i.$=!0,kt(i,n,null)):kt(i,n,t),this.G=2}}else 3==this.G&&(e?or(this,e):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=lt(g(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),tr(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,tr(this),lr(this),ct(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(e,t){return new Ir(e,t)},y(Ir,ke),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(g(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=yr(e,null,e.W),ir(e)},Ir.prototype.close=function(){er(this.g)},Ir.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=Ce(e),rr(this.g,t)):rr(this.g,e)},Ir.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,Ir.Z.M.call(this)},y(Tr,yt),y(Er,bt),y(Sr,wr),Sr.prototype.xa=function(){Oe(this.g,"a")},Sr.prototype.wa=function(e){Oe(this.g,new Tr(e))},Sr.prototype.va=function(e){Oe(this.g,new Er(e))},Sr.prototype.ua=function(){Oe(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var kr=s.createWebChannelTransport=function(){return new _r},Or=s.getStatEventTarget=function(){return it()},xr=s.ErrorCode=ht,Cr=s.EventType=dt,Ar=s.Event=nt,Nr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Lr=s.FetchXmlHttpFactory=An,Rr=s.WebChannel=mt,Dr=s.XhrIo=Mn}).call(this,n("c8ba"))},"8ff2":function(e,t,n){},"90a2":function(e,t,n){"use strict";var r=n("53ca");function i(e,t){if("undefined"!==typeof window&&"IntersectionObserver"in window){var n=t.modifiers||{},i=t.value,o="object"===Object(r["a"])(i)?i:{handler:i,options:{}},a=o.handler,c=o.options,u=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(e._observe){var i=t.some((function(e){return e.isIntersecting}));!a||n.quiet&&!e._observe.init||n.once&&!i&&e._observe.init||a(t,r,i),i&&n.once?s(e):e._observe.init=!0}}),c);e._observe={init:!1,observer:u},u.observe(e)}}function s(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var o={inserted:i,unbind:s};t["a"]=o},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("577e"),i=n("ad6d"),s=n("9f7f"),o=n("5692"),a=n("7c73"),c=n("69f3").get,u=n("fce3"),l=n("107c"),h=RegExp.prototype.exec,d=o("native-string-replace",String.prototype.replace),f=h,p=function(){var e=/a/,t=/b*/g;return h.call(e,"a"),h.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),m=s.UNSUPPORTED_Y||s.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],v=p||g||m||u||l;v&&(f=function(e){var t,n,s,o,u,l,v,y=this,b=c(y),w=r(e),_=b.raw;if(_)return _.lastIndex=y.lastIndex,t=f.call(_,w),y.lastIndex=_.lastIndex,t;var I=b.groups,T=m&&y.sticky,E=i.call(y),S=y.source,k=0,O=w;if(T&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),O=w.slice(y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==w.charAt(y.lastIndex-1))&&(S="(?: "+S+")",O=" "+O,k++),n=new RegExp("^(?:"+S+")",E)),g&&(n=new RegExp("^"+S+"$(?!\\s)",E)),p&&(s=y.lastIndex),o=h.call(T?n:y,O),T?o?(o.input=o.input.slice(k),o[0]=o[0].slice(k),o.index=y.lastIndex,y.lastIndex+=o[0].length):y.lastIndex=0:p&&o&&(y.lastIndex=y.global?o.index+o[0].length:s),g&&o&&o.length>1&&d.call(o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&I)for(o.groups=l=a(null),u=0;u<I.length;u++)v=I[u],l[v[0]]=o[v[1]];return o}),e.exports=f},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},"95ed":function(e,t,n){},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),o=new C(r||[]);return s._invoke=S(e,n,o),s}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function g(){}function v(){}function y(){}var b={};c(b,s,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(A([])));_&&_!==n&&r.call(_,s)&&(b=_);var I=y.prototype=g.prototype=Object.create(b);function T(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,s,o,a){var c=l(e[i],e,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,a)}))}a(c.arg)}var i;function s(e,r){function s(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function S(e,t,n){var r=h;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return N()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=k(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function A(e){if(e){var n=e[s];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:t,done:!0}}return v.prototype=y,c(I,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,a,"GeneratorFunction")),e.prototype=Object.create(I),e},e.awrap=function(e){return{__await:e}},T(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new E(u(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},T(I),c(I,a,"Generator"),c(I,s,(function(){return this})),c(I,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},9911:function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),s=n("af03");r({target:"String",proto:!0,forced:s("link")},{link:function(e){return i(this,"a","href",e)}})},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),s=n("e8b5"),o=n("861d"),a=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),h=n("1dde"),d=n("b622"),f=n("2d00"),p=d("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",v=f>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),y=h("concat"),b=function(e){if(!o(e))return!1;var t=e[p];return void 0!==t?!!t:s(e)},w=!v||!y;r({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,r,i,s,o=a(this),h=l(o,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(s=-1===t?o:arguments[t],b(s)){if(i=c(s.length),d+i>m)throw TypeError(g);for(n=0;n<i;n++,d++)n in s&&u(h,d,s[n])}else{if(d>=m)throw TypeError(g);u(h,d++,s)}return h.length=d,h}})},"9a1f":function(e,t,n){var r=n("59ed"),i=n("825a"),s=n("35a1");e.exports=function(e,t){var n=arguments.length<2?s(e):t;if(r(n))return i(n.call(e));throw TypeError(String(e)+" is not iterable")}},"9bdd":function(e,t,n){var r=n("825a"),i=n("2a62");e.exports=function(e,t,n,s){try{return s?t(r(n)[0],n[1]):t(n)}catch(o){i(e,"throw",o)}}},"9bf2":function(e,t,n){var r=n("83ab"),i=n("0cfb"),s=n("825a"),o=n("a04b"),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(s(e),t=o(t),s(n),i)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9d26":function(e,t,n){"use strict";var r=n("132d");t["a"]=r["a"]},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=i(r,{next:s(1,n)}),o(e,u,!1,!0),a[u]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;t.UNSUPPORTED_Y=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:String(t)}},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("44ad"),s=n("fc6a"),o=n("a640"),a=[].join,c=i!=Object,u=o("join",",");r({target:"Array",proto:!0,forced:c||!u},{join:function(e){return a.call(s(this),void 0===e?",":e)}})},a236:function(e,t,n){"use strict";var r=n("ade3"),i=n("b85c"),s=(n("ac1f"),n("1276"),n("a15b"),n("2b0e"));t["a"]=s["a"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var e=[],t="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)e.push("rounded-0");else if("string"===typeof t){var n,s=t.split(" "),o=Object(i["a"])(s);try{for(o.s();!(n=o.n()).done;){var a=n.value;e.push("rounded-".concat(a))}}catch(c){o.e(c)}finally{o.f()}}else t&&e.push("rounded");return e.length>0?Object(r["a"])({},e.join(" "),!0):{}}}})},a2bf:function(e,t,n){"use strict";var r=n("e8b5"),i=n("50c4"),s=n("0366"),o=function(e,t,n,a,c,u,l,h){var d,f=c,p=0,m=!!l&&s(l,h,3);while(p<a){if(p in n){if(d=m?m(n[p],p,t):n[p],u>0&&r(d))f=o(e,t,d,i(d.length),f,u-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=d}f++}p++}return f};e.exports=o},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("23cb"),s=n("a691"),o=n("50c4"),a=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),h=l("splice"),d=Math.max,f=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!h},{splice:function(e,t){var n,r,l,h,g,v,y=a(this),b=o(y.length),w=i(e,b),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=b-w):(n=_-2,r=f(d(s(t),0),b-w)),b+n-r>p)throw TypeError(m);for(l=c(y,r),h=0;h<r;h++)g=w+h,g in y&&u(l,h,y[g]);if(l.length=r,n<r){for(h=w;h<b-r;h++)g=h+r,v=h+n,g in y?y[v]=y[g]:delete y[v];for(h=b;h>b-r+n;h--)delete y[h-1]}else if(n>r)for(h=b-r;h>w;h--)g=h+r-1,v=h+n-1,g in y?y[v]=y[g]:delete y[v];for(h=0;h<n;h++)y[h+w]=arguments[h+2];return y.length=b-r+n,l}})},a452:function(e,t,n){"use strict";var r=n("ade3"),i=n("2b0e");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return i["a"].extend({name:"proxyable",model:{prop:e,event:t},props:Object(r["a"])({},e,{required:!1}),data:function(){return{internalLazyValue:this[e]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:Object(r["a"])({},e,(function(e){this.internalLazyValue=e}))})}var o=s();t["a"]=o},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("c430"),a=n("83ab"),c=n("4930"),u=n("d039"),l=n("5135"),h=n("e8b5"),d=n("1626"),f=n("861d"),p=n("d9b5"),m=n("825a"),g=n("7b0b"),v=n("fc6a"),y=n("a04b"),b=n("577e"),w=n("5c6c"),_=n("7c73"),I=n("df75"),T=n("241c"),E=n("057f"),S=n("7418"),k=n("06cf"),O=n("9bf2"),x=n("d1e7"),C=n("6eeb"),A=n("5692"),N=n("f772"),L=n("d012"),R=n("90e3"),D=n("b622"),P=n("e538"),j=n("746f"),M=n("d44e"),F=n("69f3"),V=n("b727").forEach,$=N("hidden"),U="Symbol",B="prototype",q=D("toPrimitive"),z=F.set,H=F.getterFor(U),K=Object[B],W=i.Symbol,G=s("JSON","stringify"),Q=k.f,J=O.f,Y=E.f,X=x.f,Z=A("symbols"),ee=A("op-symbols"),te=A("string-to-symbol-registry"),ne=A("symbol-to-string-registry"),re=A("wks"),ie=i.QObject,se=!ie||!ie[B]||!ie[B].findChild,oe=a&&u((function(){return 7!=_(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=Q(K,t);r&&delete K[t],J(e,t,n),r&&e!==K&&J(K,t,r)}:J,ae=function(e,t){var n=Z[e]=_(W[B]);return z(n,{type:U,tag:e,description:t}),a||(n.description=t),n},ce=function(e,t,n){e===K&&ce(ee,t,n),m(e);var r=y(t);return m(n),l(Z,r)?(n.enumerable?(l(e,$)&&e[$][r]&&(e[$][r]=!1),n=_(n,{enumerable:w(0,!1)})):(l(e,$)||J(e,$,w(1,{})),e[$][r]=!0),oe(e,r,n)):J(e,r,n)},ue=function(e,t){m(e);var n=v(t),r=I(n).concat(pe(n));return V(r,(function(t){a&&!he.call(n,t)||ce(e,t,n[t])})),e},le=function(e,t){return void 0===t?_(e):ue(_(e),t)},he=function(e){var t=y(e),n=X.call(this,t);return!(this===K&&l(Z,t)&&!l(ee,t))&&(!(n||!l(this,t)||!l(Z,t)||l(this,$)&&this[$][t])||n)},de=function(e,t){var n=v(e),r=y(t);if(n!==K||!l(Z,r)||l(ee,r)){var i=Q(n,r);return!i||!l(Z,r)||l(n,$)&&n[$][r]||(i.enumerable=!0),i}},fe=function(e){var t=Y(v(e)),n=[];return V(t,(function(e){l(Z,e)||l(L,e)||n.push(e)})),n},pe=function(e){var t=e===K,n=Y(t?ee:v(e)),r=[];return V(n,(function(e){!l(Z,e)||t&&!l(K,e)||r.push(Z[e])})),r};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,t=R(e),n=function(e){this===K&&n.call(ee,e),l(this,$)&&l(this[$],t)&&(this[$][t]=!1),oe(this,t,w(1,e))};return a&&se&&oe(K,t,{configurable:!0,set:n}),ae(t,e)},C(W[B],"toString",(function(){return H(this).tag})),C(W,"withoutSetter",(function(e){return ae(R(e),e)})),x.f=he,O.f=ce,k.f=de,T.f=E.f=fe,S.f=pe,P.f=function(e){return ae(D(e),e)},a&&(J(W[B],"description",{configurable:!0,get:function(){return H(this).description}}),o||C(K,"propertyIsEnumerable",he,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),V(I(re),(function(e){j(e)})),r({target:U,stat:!0,forced:!c},{for:function(e){var t=b(e);if(l(te,t))return te[t];var n=W(t);return te[t]=n,ne[n]=t,n},keyFor:function(e){if(!p(e))throw TypeError(e+" is not a symbol");if(l(ne,e))return ne[e]},useSetter:function(){se=!0},useSimple:function(){se=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:le,defineProperty:ce,defineProperties:ue,getOwnPropertyDescriptor:de}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:fe,getOwnPropertySymbols:pe}),r({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(e){return S.f(g(e))}}),G){var me=!c||u((function(){var e=W();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));r({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,n){var r,i=[e],s=1;while(arguments.length>s)i.push(arguments[s++]);if(r=t,(f(t)||void 0!==e)&&!p(e))return h(t)||(t=function(e,t){if(d(r)&&(t=r.call(this,e,t)),!p(t))return t}),i[1]=t,G.apply(null,i)}})}if(!W[B][q]){var ge=W[B].valueOf;C(W[B],q,(function(){return ge.apply(this,arguments)}))}M(W,U),L[$]=!0},a523:function(e,t,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var r=n("2b0e");function i(e){return r["a"].extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var r=n.props,i=n.data,s=n.children;i.staticClass="".concat(e," ").concat(i.staticClass||"").trim();var o=i.attrs;if(o){i.attrs={};var a=Object.keys(o).filter((function(e){if("slot"===e)return!1;var t=o[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}));a.length&&(i.staticClass+=" ".concat(a.join(" ")))}return r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),t(r.tag,i,s)}})}var s=n("d9f7");t["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,r=t.props,i=t.data,o=t.children,a=i.attrs;return a&&(i.attrs={},n=Object.keys(a).filter((function(e){if("slot"===e)return!1;var t=a[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}))),r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),e(r.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},a630:function(e,t,n){var r=n("23e7"),i=n("4df4"),s=n("1c7e"),o=!s((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:o},{from:i})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a691:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},a9ad:function(e,t,n){"use strict";var r=n("3835"),i=n("ade3"),s=n("5530"),o=(n("ac1f"),n("1276"),n("498a"),n("d3b7"),n("25f0"),n("2b0e")),a=n("d9bd"),c=n("7bc6");t["a"]=o["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof t.style?(Object(a["b"])("style must be an object",this),t):"string"===typeof t.class?(Object(a["b"])("class must be an object",this),t):(Object(c["d"])(e)?t.style=Object(s["a"])(Object(s["a"])({},t.style),{},{"background-color":"".concat(e),"border-color":"".concat(e)}):e&&(t.class=Object(s["a"])(Object(s["a"])({},t.class),{},Object(i["a"])({},e,!0))),t)},setTextColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof t.style)return Object(a["b"])("style must be an object",this),t;if("string"===typeof t.class)return Object(a["b"])("class must be an object",this),t;if(Object(c["d"])(e))t.style=Object(s["a"])(Object(s["a"])({},t.style),{},{color:"".concat(e),"caret-color":"".concat(e)});else if(e){var n=e.toString().trim().split(" ",2),o=Object(r["a"])(n,2),u=o[0],l=o[1];t.class=Object(s["a"])(Object(s["a"])({},t.class),{},Object(i["a"])({},u+"--text",!0)),l&&(t.class["text--"+l]=!0)}return t}}})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),s=n("94ca"),o=n("6eeb"),a=n("5135"),c=n("c6b6"),u=n("7156"),l=n("d9b5"),h=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,m=n("06cf").f,g=n("9bf2").f,v=n("58a8").trim,y="Number",b=i[y],w=b.prototype,_=c(f(w))==y,I=function(e){if(l(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,r,i,s,o,a,c,u=h(e,"number");if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(s=u.slice(2),o=s.length,a=0;a<o;a++)if(c=s.charCodeAt(a),c<48||c>i)return NaN;return parseInt(s,r)}return+u};if(s(y,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var T,E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&(_?d((function(){w.valueOf.call(n)})):c(n)!=y)?u(new b(I(t)),n,E):I(t)},S=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;S.length>k;k++)a(b,T=S[k])&&!a(E,T)&&g(E,T,m(b,T));E.prototype=w,w.constructor=E,o(i,y,E)}},ab13:function(e,t,n){var r=n("b622"),i=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(r){}}return!1}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},addb:function(e,t){var n=Math.floor,r=function(e,t){var o=e.length,a=n(o/2);return o<8?i(e,t):s(r(e.slice(0,a),t),r(e.slice(a),t),t)},i=function(e,t){var n,r,i=e.length,s=1;while(s<i){r=s,n=e[s];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==s++&&(e[r]=n)}return e},s=function(e,t,n){var r=e.length,i=t.length,s=0,o=0,a=[];while(s<r||o<i)s<r&&o<i?a.push(n(e[s],t[o])<=0?e[s++]:t[o++]):a.push(s<r?e[s++]:t[o++]);return a};e.exports=r},ade3:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},ae93:function(e,t,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));m?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},af03:function(e,t,n){var r=n("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},af2b:function(e,t,n){"use strict";n("c96a");var r=n("2b0e");t["a"]=r["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,s=n("9bf2").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!i&&s(o,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(e){return""}}})},b575:function(e,t,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("06cf").f,f=n("2cf4").set,p=n("1cdc"),m=n("d4c3"),g=n("a4b4"),v=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,b=h.document,w=h.process,_=h.Promise,I=d(h,"queueMicrotask"),T=I&&I.value;T||(r=function(){var e,t;v&&(e=w.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?o():s=void 0,n}}s=void 0,e&&e.enter()},p||v||g||!y||!b?!m&&_&&_.resolve?(u=_.resolve(void 0),u.constructor=_,l=u.then,o=function(){l.call(u,r)}):o=v?function(){w.nextTick(r)}:function(){f.call(h,r)}:(a=!0,c=b.createTextNode(""),new y(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),e.exports=T||function(e){var t={fn:e,next:void 0};s&&(s.next=t),i||(i=t,o()),s=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),s=n("5135"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||o;e.exports=function(e){return s(u,e)&&(a||"string"==typeof u[e])||(a&&s(l,e)?u[e]=l[e]:u[e]=h("Symbol."+e)),u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return s(i(e))}})},b680:function(e,t,n){"use strict";var r=n("23e7"),i=n("a691"),s=n("408a"),o=n("1148"),a=n("d039"),c=1..toFixed,u=Math.floor,l=function(e,t,n){return 0===t?n:t%2===1?l(e,t-1,n*e):l(e*e,t/2,n)},h=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},d=function(e,t,n){var r=-1,i=n;while(++r<6)i+=t*e[r],e[r]=i%1e7,i=u(i/1e7)},f=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=u(r/t),r=r%t*1e7},p=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=String(e[t]);n=""===n?r:n+o.call("0",7-r.length)+r}return n},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(e){var t,n,r,a,c=s(this),u=i(e),m=[0,0,0,0,0,0],g="",v="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(g="-",c=-c),c>1e-21)if(t=h(c*l(2,69,1))-69,n=t<0?c*l(2,-t,1):c/l(2,t,1),n*=4503599627370496,t=52-t,t>0){d(m,0,n),r=u;while(r>=7)d(m,1e7,0),r-=7;d(m,l(10,r,1),0),r=t-1;while(r>=23)f(m,1<<23),r-=23;f(m,1<<r),d(m,1,1),f(m,2),v=p(m)}else d(m,0,n),d(m,1<<-t,0),v=p(m)+o.call("0",u);return u>0?(a=v.length,v=g+(a<=u?"0."+o.call("0",u-a)+v:v.slice(0,a-u)+"."+v.slice(a-u))):v=g+v,v}})},b727:function(e,t,n){var r=n("0366"),i=n("44ad"),s=n("7b0b"),o=n("50c4"),a=n("65f0"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,v){for(var y,b,w=s(p),_=i(w),I=r(m,g,3),T=o(_.length),E=0,S=v||a,k=t?S(p,T):n||d?S(p,0):void 0;T>E;E++)if((f||E in _)&&(y=_[E],b=I(y,E,w),e))if(t)k[E]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return E;case 2:c.call(k,y)}else switch(e){case 4:return!1;case 7:c.call(k,y)}return h?-1:u||l?l:k}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},b85c:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");var r=n("06c5");function i(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(r["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,s=function(){};return{s:s,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}},bb2f:function(e,t,n){var r=n("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c04e:function(e,t,n){var r=n("861d"),i=n("d9b5"),s=n("dc4a"),o=n("485a"),a=n("b622"),c=a("toPrimitive");e.exports=function(e,t){if(!r(e)||i(e))return e;var n,a=s(e,c);if(a){if(void 0===t&&(t="default"),n=a.call(e,t),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),o(e,t)}},c430:function(e,t){e.exports=!1},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},c740:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,s=n("44d2"),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s(o)},c7cd:function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),s=n("af03");r({target:"String",proto:!0,forced:s("fixed")},{fixed:function(){return i(this,"tt","","")}})},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},c8d2:function(e,t,n){var r=n("5e77").PROPER,i=n("d039"),s=n("5899"),o="​᠎";e.exports=function(e){return i((function(){return!!s[e]()||o[e]()!==o||r&&s[e].name!==e}))}},c96a:function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),s=n("af03");r({target:"String",proto:!0,forced:s("small")},{small:function(){return i(this,"small","","")}})},c995:function(e,t,n){"use strict";var r=n("ade3"),i=(n("a9e3"),n("2b0e"));t["a"]=i["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var e=this.computedElevation;return null==e||isNaN(parseInt(e))?{}:Object(r["a"])({},"elevation-".concat(this.elevation),!0)}}})},ca84:function(e,t,n){var r=n("5135"),i=n("fc6a"),s=n("4d64").indexOf,o=n("d012");e.exports=function(e,t){var n,a=i(e),c=0,u=[];for(n in a)!r(o,n)&&r(a,n)&&u.push(n);while(t.length>c)r(a,n=t[c++])&&(~s(u,n)||u.push(n));return u}},caad:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").includes,s=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},cb29:function(e,t,n){var r=n("23e7"),i=n("81d5"),s=n("44d2");r({target:"Array",proto:!0},{fill:i}),s("fill")},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),s=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=s.f(e),o=n.resolve;return o(t),n.promise}},ce4e:function(e,t,n){var r=n("da84");e.exports=function(e,t){try{Object.defineProperty(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},ce7e:function(e,t,n){"use strict";var r=n("5530"),i=(n("8ce9"),n("7560"));t["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(r["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(r["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},d191:function(e,t,n){},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);t.f=s?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d28b:function(e,t,n){var r=n("746f");r("iterator")},d2bb:function(e,t,n){var r=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(s){}return function(n,s){return r(n),i(s),t?e.call(n,s):n.__proto__=s,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("5135"),s=n("b622"),o=s("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),s=n("d039"),o=n("b622"),a=n("9112"),c=o("species"),u=RegExp.prototype;e.exports=function(e,t,n,l){var h=o(e),d=!s((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),f=d&&!s((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!d||!f||n){var p=/./[h],m=t(h,""[e],(function(e,t,n,r,s){var o=t.exec;return o===i||o===u.exec?d&&!s?{done:!0,value:p.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,m[0]),r(u,h,m[1])}l&&a(u[h],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").map,s=n("1dde"),o=s("map");r({target:"Array",proto:!0,forced:!o},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},d998:function(e,t,n){var r=n("342f");e.exports=/MSIE|Trident/.test(r)},d9b5:function(e,t,n){var r=n("1626"),i=n("d066"),s=n("fdbf");e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&Object(e)instanceof t}},d9bd:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u}));n("caad"),n("2532"),n("99af"),n("ac1f"),n("5319"),n("b0c0"),n("466d"),n("a15b"),n("d81d"),n("38cf");var r=n("f309");function i(e,t,n){if(!r["a"].config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return"[Vuetify] ".concat(e)+(t?f(t):"")}}function s(e,t,n){var r=i(e,t,n);null!=r&&console.warn(r)}function o(e,t,n){var r=i(e,t,n);null!=r&&console.error(r)}function a(e,t,n,r){s("[UPGRADE] '".concat(e,"' is deprecated, use '").concat(t,"' instead."),n,r)}function c(e,t,n,r){o("[BREAKING] '".concat(e,"' has been removed, use '").concat(t,"' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide"),n,r)}function u(e,t,n){s("[REMOVED] '".concat(e,"' has been removed. You can safely omit it."),t,n)}var l=/(?:^|[-_])(\w)/g,h=function(e){return e.replace(l,(function(e){return e.toUpperCase()})).replace(/[-_]/g,"")};function d(e,t){if(e.$root===e)return"<Root>";var n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{},r=n.name||n._componentTag,i=n.__file;if(!r&&i){var s=i.match(/([^/\\]+)\.vue$/);r=s&&s[1]}return(r?"<".concat(h(r),">"):"<Anonymous>")+(i&&!1!==t?" at ".concat(i):"")}function f(e){if(e._isVue&&e.$parent){var t=[],n=0;while(e){if(t.length>0){var r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map((function(e,t){return"".concat(0===t?"---\x3e ":" ".repeat(5+2*t)).concat(Array.isArray(e)?"".concat(d(e[0]),"... (").concat(e[1]," recursive calls)"):d(e))})).join("\n")}return"\n\n(found in ".concat(d(e),")")}},d9f7:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("5530"),i=n("3835"),s=n("b85c"),o=(n("ac1f"),n("1276"),n("498a"),n("b64b"),n("99af"),n("80d2")),a={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(e){var t,n={},r=Object(s["a"])(e.split(a.styleList));try{for(r.s();!(t=r.n()).done;){var c=t.value,u=c.split(a.styleProp),l=Object(i["a"])(u,2),h=l[0],d=l[1];h=h.trim(),h&&("string"===typeof d&&(d=d.trim()),n[Object(o["c"])(h)]=d)}}catch(f){r.e(f)}finally{r.f()}return n}function u(){var e,t={},n=arguments.length;while(n--)for(var i=0,s=Object.keys(arguments[n]);i<s.length;i++)switch(e=s[i],e){case"class":case"directives":arguments[n][e]&&(t[e]=h(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=d(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]=Object(r["a"])(Object(r["a"])({},arguments[n][e]),t[e]);break;default:t[e]||(t[e]=arguments[n][e])}return t}function l(e,t){return e?t?(e=Object(o["v"])("string"===typeof e?c(e):e),e.concat("string"===typeof t?c(t):t)):e:t}function h(e,t){return t?e&&e?Object(o["v"])(e).concat(t):t:e}function d(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var e={},t=2;t--;){var n=t<0||arguments.length<=t?void 0:arguments[t];for(var r in n)n[r]&&(e[r]?e[r]=[].concat(n[r],e[r]):e[r]=n[r])}return e}},da13:function(e,t,n){"use strict";var r=n("5530"),i=(n("61d2"),n("a9ad")),s=n("1c87"),o=n("4e82"),a=n("7560"),c=n("f2e7"),u=n("5607"),l=n("80d2"),h=n("d9bd"),d=n("58df"),f=Object(d["a"])(i["a"],s["a"],a["a"],Object(o["a"])("listItemGroup"),Object(c["b"])("inputValue"));t["a"]=f.extend().extend({name:"v-list-item",directives:{Ripple:u["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-list-item":!0},s["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(s["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(h["e"])("avatar",this)},methods:{click:function(e){e.detail&&this.$el.blur(),this.$emit("click",e),this.to||this.toggle()},genAttrs:function(){var e=Object(r["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(e.role="option",e["aria-selected"]=String(this.isActive)):this.isInMenu?(e.role=this.isClickable?"menuitem":void 0,e.id=e.id||"list-item-".concat(this._uid)):this.isInList&&(e.role="listitem")),e}},render:function(e){var t=this,n=this.generateRouteLink(),i=n.tag,s=n.data;s.attrs=Object(r["a"])(Object(r["a"])({},s.attrs),this.genAttrs()),s[this.to?"nativeOn":"on"]=Object(r["a"])(Object(r["a"])({},s[this.to?"nativeOn":"on"]),{},{keydown:function(e){e.keyCode===l["p"].enter&&t.click(e),t.$emit("keydown",e)}}),this.inactive&&(i="div"),this.inactive&&this.to&&(s.on=s.nativeOn,delete s.nativeOn);var o=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return e(i,this.isActive?this.setTextColor(this.color,s):s,o)}})},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=o(e),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc22:function(e,t,n){"use strict";function r(e,t){var n=t.value,r=t.options||{passive:!0};window.addEventListener("resize",n,r),e._onResize={callback:n,options:r},t.modifiers&&t.modifiers.quiet||n()}function i(e){if(e._onResize){var t=e._onResize,n=t.callback,r=t.options;window.removeEventListener("resize",n,r),delete e._onResize}}var s={inserted:r,unbind:i};t["a"]=s},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},dca8:function(e,t,n){var r=n("23e7"),i=n("bb2f"),s=n("d039"),o=n("861d"),a=n("f183").onFreeze,c=Object.freeze,u=s((function(){c(1)}));r({target:"Object",stat:!0,forced:u,sham:!i},{freeze:function(e){return c&&o(e)?c(a(e)):e}})},dd89:function(e,t,n){"use strict";function r(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}var t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,"a",(function(){return r}))},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=o.values,d=function(e,t){if(e){if(e[u]!==h)try{a(e,u,h)}catch(r){e[u]=h}if(e[l]||a(e,l,t),i[t])for(var n in o)if(e[n]!==o[n])try{a(e,n,o[n])}catch(r){e[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},df86:function(e,t,n){},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),s=n("da84"),o=n("5135"),a=n("1626"),c=n("861d"),u=n("9bf2").f,l=n("e893"),h=s.Symbol;if(i&&a(h)&&(!("description"in h.prototype)||void 0!==h().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new h(e):void 0===e?h():h(e);return""===e&&(d[t]=!0),t};l(f,h);var p=f.prototype=h.prototype;p.constructor=f;var m=p.toString,g="Symbol(test)"==String(h("test")),v=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=m.call(e);if(o(d,e))return"";var n=g?t.slice(7,-1):t.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e163:function(e,t,n){var r=n("5135"),i=n("1626"),s=n("7b0b"),o=n("f772"),a=n("e177"),c=o("IE_PROTO"),u=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof Object?u:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("7dd0"),c="Array Iterator",u=o.set,l=o.getterFor(c);e.exports=a(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),s.Arguments=s.Array,i("keys"),i("values"),i("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return o(s(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e6cf:function(e,t,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),d=n("6eeb"),f=n("e2cc"),p=n("d2bb"),m=n("d44e"),g=n("2626"),v=n("59ed"),y=n("1626"),b=n("861d"),w=n("19aa"),_=n("8925"),I=n("2266"),T=n("1c7e"),E=n("4840"),S=n("2cf4").set,k=n("b575"),O=n("cdf9"),x=n("44de"),C=n("f069"),A=n("e667"),N=n("69f3"),L=n("94ca"),R=n("b622"),D=n("6069"),P=n("605d"),j=n("2d00"),M=R("species"),F="Promise",V=N.get,$=N.set,U=N.getterFor(F),B=h&&h.prototype,q=h,z=B,H=u.TypeError,K=u.document,W=u.process,G=C.f,Q=G,J=!!(K&&K.createEvent&&u.dispatchEvent),Y=y(u.PromiseRejectionEvent),X="unhandledrejection",Z="rejectionhandled",ee=0,te=1,ne=2,re=1,ie=2,se=!1,oe=L(F,(function(){var e=_(q),t=e!==String(q);if(!t&&66===j)return!0;if(c&&!z["finally"])return!0;if(j>=51&&/native code/.test(e))return!1;var n=new q((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[M]=r,se=n.then((function(){}))instanceof r,!se||!t&&D&&!Y})),ae=oe||!T((function(e){q.all(e)["catch"]((function(){}))})),ce=function(e){var t;return!(!b(e)||!y(t=e.then))&&t},ue=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;k((function(){var r=e.value,i=e.state==te,s=0;while(n.length>s){var o,a,c,u=n[s++],l=i?u.ok:u.fail,h=u.resolve,d=u.reject,f=u.domain;try{l?(i||(e.rejection===ie&&fe(e),e.rejection=re),!0===l?o=r:(f&&f.enter(),o=l(r),f&&(f.exit(),c=!0)),o===u.promise?d(H("Promise-chain cycle")):(a=ce(o))?a.call(o,h,d):h(o)):d(r)}catch(p){f&&!c&&f.exit(),d(p)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&he(e)}))}},le=function(e,t,n){var r,i;J?(r=K.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Y&&(i=u["on"+e])?i(r):e===X&&x("Unhandled promise rejection",n)},he=function(e){S.call(u,(function(){var t,n=e.facade,r=e.value,i=de(e);if(i&&(t=A((function(){P?W.emit("unhandledRejection",r,n):le(X,n,r)})),e.rejection=P||de(e)?ie:re,t.error))throw t.value}))},de=function(e){return e.rejection!==re&&!e.parent},fe=function(e){S.call(u,(function(){var t=e.facade;P?W.emit("rejectionHandled",t):le(Z,t,e.value)}))},pe=function(e,t,n){return function(r){e(t,r,n)}},me=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ne,ue(e,!0))},ge=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw H("Promise can't be resolved itself");var r=ce(t);r?k((function(){var n={done:!1};try{r.call(t,pe(ge,n,e),pe(me,n,e))}catch(i){me(n,i,e)}})):(e.value=t,e.state=te,ue(e,!1))}catch(i){me({done:!1},i,e)}}};if(oe&&(q=function(e){w(this,q,F),v(e),r.call(this);var t=V(this);try{e(pe(ge,t),pe(me,t))}catch(n){me(t,n)}},z=q.prototype,r=function(e){$(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:ee,value:void 0})},r.prototype=f(z,{then:function(e,t){var n=U(this),r=G(E(this,q));return r.ok=!y(e)||e,r.fail=y(t)&&t,r.domain=P?W.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=ee&&ue(n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=V(e);this.promise=e,this.resolve=pe(ge,t),this.reject=pe(me,t)},C.f=G=function(e){return e===q||e===s?new i(e):Q(e)},!c&&y(h)&&B!==Object.prototype)){o=B.then,se||(d(B,"then",(function(e,t){var n=this;return new q((function(e,t){o.call(n,e,t)})).then(e,t)}),{unsafe:!0}),d(B,"catch",z["catch"],{unsafe:!0}));try{delete B.constructor}catch(ve){}p&&p(B,z)}a({global:!0,wrap:!0,forced:oe},{Promise:q}),m(q,F,!1,!0),g(F),s=l(F),a({target:F,stat:!0,forced:oe},{reject:function(e){var t=G(this);return t.reject.call(void 0,e),t.promise}}),a({target:F,stat:!0,forced:c||oe},{resolve:function(e){return O(c&&this===s?q:this,e)}}),a({target:F,stat:!0,forced:ae},{all:function(e){var t=this,n=G(t),r=n.resolve,i=n.reject,s=A((function(){var n=v(t.resolve),s=[],o=0,a=1;I(e,(function(e){var c=o++,u=!1;s.push(void 0),a++,n.call(t,e).then((function(e){u||(u=!0,s[c]=e,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(e){var t=this,n=G(t),r=n.reject,i=A((function(){var i=v(t.resolve);I(e,(function(e){i.call(t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("5135"),i=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t){for(var n=i(t),a=o.f,c=s.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||a(e,l,c(t,l))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},e9b1:function(e,t,n){},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f183:function(e,t,n){var r=n("23e7"),i=n("d012"),s=n("861d"),o=n("5135"),a=n("9bf2").f,c=n("241c"),u=n("057f"),l=n("90e3"),h=n("bb2f"),d=!1,f=l("meta"),p=0,m=Object.isExtensible||function(){return!0},g=function(e){a(e,f,{value:{objectID:"O"+p++,weakData:{}}})},v=function(e,t){if(!s(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,f)){if(!m(e))return"F";if(!t)return"E";g(e)}return e[f].objectID},y=function(e,t){if(!o(e,f)){if(!m(e))return!0;if(!t)return!1;g(e)}return e[f].weakData},b=function(e){return h&&d&&m(e)&&!o(e,f)&&g(e),e},w=function(){_.enable=function(){},d=!0;var e=c.f,t=[].splice,n={};n[f]=1,e(n).length&&(c.f=function(n){for(var r=e(n),i=0,s=r.length;i<s;i++)if(r[i]===f){t.call(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},_=e.exports={enable:w,fastKey:v,getWeakData:y,onFreeze:b};i[f]=!0},f2e7:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n("ade3"),i=n("2b0e");function s(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return i["a"].extend({name:"toggleable",model:{prop:t,event:n},props:Object(r["a"])({},t,{required:!1}),data:function(){return{isActive:!!this[t]}},watch:(e={},Object(r["a"])(e,t,(function(e){this.isActive=!!e})),Object(r["a"])(e,"isActive",(function(e){!!e!==this[t]&&this.$emit(n,e)})),e)})}var o=s();t["a"]=o},f309:function(e,t,n){"use strict";n.d(t,"a",(function(){return De}));var r={};function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}n.r(r),n.d(r,"linear",(function(){return A})),n.d(r,"easeInQuad",(function(){return N})),n.d(r,"easeOutQuad",(function(){return L})),n.d(r,"easeInOutQuad",(function(){return R})),n.d(r,"easeInCubic",(function(){return D})),n.d(r,"easeOutCubic",(function(){return P})),n.d(r,"easeInOutCubic",(function(){return j})),n.d(r,"easeInQuart",(function(){return M})),n.d(r,"easeOutQuart",(function(){return F})),n.d(r,"easeInOutQuart",(function(){return V})),n.d(r,"easeInQuint",(function(){return $})),n.d(r,"easeOutQuint",(function(){return U})),n.d(r,"easeInOutQuint",(function(){return B}));n("159b"),n("caad"),n("2532");var a=n("2b0e"),c=n("d9bd");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!u.installed){u.installed=!0,a["a"]!==e&&Object(c["b"])("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");var n=t.components||{},r=t.directives||{};for(var i in r){var s=r[i];e.directive(i,s)}(function t(n){if(n){for(var r in n){var i=n[r];i&&!t(i.$_vuetify_subcomponents)&&e.component(r,i)}return!0}return!1})(n),e.$_vuetify_installed||(e.$_vuetify_installed=!0,e.mixin({beforeCreate:function(){var t=this.$options;t.vuetify?(t.vuetify.init(this,this.$ssrContext),this.$vuetify=e.observable(t.vuetify.framework)):this.$vuetify=t.parent&&t.parent.$vuetify||this},beforeMount:function(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted:function(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}}var l=n("15fd");function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}n("4ae1"),n("3410");function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var m=n("7037"),g=n.n(m);function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if(t&&("object"===g()(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function b(e){var t=p();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return y(this,n)}}n("95ed");var w={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}},_={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:w},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}},I=n("80d2"),T=function(){function e(){i(this,e),this.framework={}}return o(e,[{key:"init",value:function(e,t){}}]),e}(),E=["preset"],S=function(e){d(n,e);var t=b(n);function n(e,r){var s;i(this,n),s=t.call(this);var o=Object(I["r"])({},_),a=r.userPreset,u=a.preset,h=void 0===u?{}:u,d=Object(l["a"])(a,E);return null!=h.preset&&Object(c["c"])("Global presets do not support the **preset** option, it can be safely omitted"),r.preset=Object(I["r"])(Object(I["r"])(o,h),d),s}return n}(T);S.property="presets";var k=n("ade3"),O=(n("07ac"),function(e){d(n,e);var t=b(n);function n(){var e;return i(this,n),e=t.apply(this,arguments),e.bar=0,e.top=0,e.left=0,e.insetFooter=0,e.right=0,e.bottom=0,e.footer=0,e.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}},e}return o(n,[{key:"register",value:function(e,t,n){this.application[t]=Object(k["a"])({},e,n),this.update(t)}},{key:"unregister",value:function(e,t){null!=this.application[t][e]&&(delete this.application[t][e],this.update(t))}},{key:"update",value:function(e){this[e]=Object.values(this.application[e]).reduce((function(e,t){return e+t}),0)}}]),n}(T));O.property="application";n("b0c0");var x=function(e){d(n,e);var t=b(n);function n(e){var r;i(this,n),r=t.call(this),r.xs=!1,r.sm=!1,r.md=!1,r.lg=!1,r.xl=!1,r.xsOnly=!1,r.smOnly=!1,r.smAndDown=!1,r.smAndUp=!1,r.mdOnly=!1,r.mdAndDown=!1,r.mdAndUp=!1,r.lgOnly=!1,r.lgAndDown=!1,r.lgAndUp=!1,r.xlOnly=!1,r.name="xs",r.height=0,r.width=0,r.mobile=!0,r.resizeTimeout=0;var s=e[n.property],o=s.mobileBreakpoint,a=s.scrollBarWidth,c=s.thresholds;return r.mobileBreakpoint=o,r.scrollBarWidth=a,r.thresholds=c,r}return o(n,[{key:"init",value:function(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=e?0:this.getClientHeight(),n=e?0:this.getClientWidth(),r=n<this.thresholds.xs,i=n<this.thresholds.sm&&!r,s=n<this.thresholds.md-this.scrollBarWidth&&!(i||r),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||i||r),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=n,this.xs=r,this.sm=i,this.md=s,this.lg=o,this.xl=a,this.xsOnly=r,this.smOnly=i,this.smAndDown=(r||i)&&!(s||o||a),this.smAndUp=!r&&(i||s||o||a),this.mdOnly=s,this.mdAndDown=(r||i||s)&&!(o||a),this.mdAndUp=!(r||i)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(r||i||s||o)&&!a,this.lgAndUp=!(r||i||s)&&(o||a),this.xlOnly=a,!0){case r:this.name="xs";break;case i:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"!==typeof this.mobileBreakpoint){var c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}else this.mobile=n<parseInt(this.mobileBreakpoint,10)}},{key:"onResize",value:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}},{key:"getClientWidth",value:function(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}},{key:"getClientHeight",value:function(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}]),n}(T);x.property="breakpoint";var C=n("5530"),A=(n("d3b7"),function(e){return e}),N=function(e){return Math.pow(e,2)},L=function(e){return e*(2-e)},R=function(e){return e<.5?2*Math.pow(e,2):(4-2*e)*e-1},D=function(e){return Math.pow(e,3)},P=function(e){return Math.pow(--e,3)+1},j=function(e){return e<.5?4*Math.pow(e,3):(e-1)*(2*e-2)*(2*e-2)+1},M=function(e){return Math.pow(e,4)},F=function(e){return 1-Math.pow(--e,4)},V=function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},$=function(e){return Math.pow(e,5)},U=function(e){return 1+Math.pow(--e,5)},B=function(e){return e<.5?16*Math.pow(e,5):1+16*Math.pow(--e,5)};function q(e){if("number"===typeof e)return e;var t=K(e);if(!t)throw"string"===typeof e?new Error('Target element "'.concat(e,'" not found.')):new TypeError("Target must be a Number/Selector/HTMLElement/VueComponent, received ".concat(H(e)," instead."));var n=0;while(t)n+=t.offsetTop,t=t.offsetParent;return n}function z(e){var t=K(e);if(t)return t;throw"string"===typeof e?new Error('Container element "'.concat(e,'" not found.')):new TypeError("Container must be a Selector/HTMLElement/VueComponent, received ".concat(H(e)," instead."))}function H(e){return null==e?e:e.constructor.name}function K(e){return"string"===typeof e?document.querySelector(e):e&&e._isVue?e.$el:e instanceof HTMLElement?e:null}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(C["a"])({container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0},t),i=z(n.container);if(n.appOffset&&W.framework.application){var s=i.classList.contains("v-navigation-drawer"),o=i.classList.contains("v-navigation-drawer--clipped"),a=W.framework.application,c=a.bar,u=a.top;n.offset+=c,s&&!o||(n.offset+=u)}var l,h=performance.now();l="number"===typeof e?q(e)-n.offset:q(e)-q(i)-n.offset;var d=i.scrollTop;if(l===d)return Promise.resolve(l);var f="function"===typeof n.easing?n.easing:r[n.easing];if(!f)throw new TypeError('Easing function "'.concat(n.easing,'" not found.'));return new Promise((function(e){return requestAnimationFrame((function t(r){var s=r-h,o=Math.abs(n.duration?Math.min(s/n.duration,1):1);i.scrollTop=Math.floor(d+(l-d)*f(o));var a=i===document.body?document.documentElement.clientHeight:i.clientHeight;if(1===o||a+i.scrollTop===i.scrollHeight)return e(l);requestAnimationFrame(t)}))}))}W.framework={},W.init=function(){};var G=function(e){d(n,e);var t=b(n);function n(){var e;return i(this,n),e=t.call(this),y(e,W)}return n}(T);G.property="goTo";n("ddb0"),n("dca8");var Q={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"},J=Q,Y={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"},X=Y,Z={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},ee=Z,te={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"},ne=te,re={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"},ie=re;n("ac1f"),n("1276");function se(e,t){var n={};for(var r in t)n[r]={component:e,props:{icon:t[r].split(" fa-")}};return n}var oe=se("font-awesome-icon",ne),ae=Object.freeze({mdiSvg:J,md:X,mdi:ee,fa:ne,fa4:ie,faSvg:oe}),ce=function(e){d(n,e);var t=b(n);function n(e){var r;i(this,n),r=t.call(this);var s=e[n.property],o=s.iconfont,a=s.values,c=s.component;return r.component=c,r.iconfont=o,r.values=Object(I["r"])(ae[o],a),r}return n}(T);ce.property="icons";n("a4d3"),n("e01a"),n("5319"),n("2ca0"),n("99af");var ue="$vuetify.",le=Symbol("Lang fallback");function he(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,i=t.replace(ue,""),s=Object(I["k"])(e,i,le);return s===le&&(n?(Object(c["b"])('Translation key "'.concat(i,'" not found in fallback')),s=t):(Object(c["c"])('Translation key "'.concat(i,'" not found, falling back to default')),s=he(r,t,!0,r))),s}var de=function(e){d(n,e);var t=b(n);function n(e){var r;i(this,n),r=t.call(this),r.defaultLocale="en";var s=e[n.property],o=s.current,a=s.locales,c=s.t;return r.current=o,r.locales=a,r.translator=c||r.defaultTranslator,r}return o(n,[{key:"currentLocale",value:function(e){var t=this.locales[this.current],n=this.locales[this.defaultLocale];return he(t,e,!1,n)}},{key:"t",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.startsWith(ue)?this.translator.apply(this,[e].concat(n)):this.replace(e,n)}},{key:"defaultTranslator",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return this.replace(this.currentLocale(e),n)}},{key:"replace",value:function(e,t){return e.replace(/\{(\d+)\}/g,(function(e,n){return String(t[+n])}))}}]),n}(T);de.property="lang";n("7db0");var fe=n("3835"),pe=n("53ca"),me=(n("18a5"),n("b64b"),n("7bc6")),ge=n("8da5"),ve=(n("3ea3"),.20689655172413793),ye=function(e){return e>Math.pow(ve,3)?Math.cbrt(e):e/(3*Math.pow(ve,2))+4/29},be=function(e){return e>ve?Math.pow(e,3):3*Math.pow(ve,2)*(e-4/29)};function we(e){var t=ye,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function _e(e){var t=be,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}var Ie=["anchor"],Te=["anchor"];function Ee(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.anchor,i=Object(l["a"])(e,Ie),s=Object.keys(i),o={},a=0;a<s.length;++a){var c=s[a],u=e[c];null!=u&&(n?t?("base"===c||c.startsWith("lighten")||c.startsWith("darken"))&&(o[c]=Object(me["a"])(u)):"object"===Object(pe["a"])(u)?o[c]=Ee(u,!0,n):o[c]=Ae(c,Object(me["b"])(u)):o[c]={base:Object(me["c"])(Object(me["b"])(u))})}return t||(o.anchor=r||o.base||o.primary.base),o}var Se=function(e,t){return"\n.v-application .".concat(e," {\n  background-color: ").concat(t," !important;\n  border-color: ").concat(t," !important;\n}\n.v-application .").concat(e,"--text {\n  color: ").concat(t," !important;\n  caret-color: ").concat(t," !important;\n}")},ke=function(e,t,n){var r=t.split(/(\d)/,2),i=Object(fe["a"])(r,2),s=i[0],o=i[1];return"\n.v-application .".concat(e,".").concat(s,"-").concat(o," {\n  background-color: ").concat(n," !important;\n  border-color: ").concat(n," !important;\n}\n.v-application .").concat(e,"--text.text--").concat(s,"-").concat(o," {\n  color: ").concat(n," !important;\n  caret-color: ").concat(n," !important;\n}")},Oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base";return"--v-".concat(e,"-").concat(t)},xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base";return"var(".concat(Oe(e,t),")")};function Ce(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.anchor,r=Object(l["a"])(e,Te),i=Object.keys(r);if(!i.length)return"";var s="",o="",a=t?xe("anchor"):n;o+=".v-application a { color: ".concat(a,"; }"),t&&(s+="  ".concat(Oe("anchor"),": ").concat(n,";\n"));for(var c=0;c<i.length;++c){var u=i[c],h=e[u];o+=Se(u,t?xe(u):h.base),t&&(s+="  ".concat(Oe(u),": ").concat(h.base,";\n"));for(var d=Object(I["q"])(h),f=0;f<d.length;++f){var p=d[f],m=h[p];"base"!==p&&(o+=ke(u,p,t?xe(u,p):m),t&&(s+="  ".concat(Oe(u,p),": ").concat(m,";\n")))}}return t&&(s=":root {\n".concat(s,"}\n\n")),s+o}function Ae(e,t){for(var n={base:Object(me["c"])(t)},r=5;r>0;--r)n["lighten".concat(r)]=Object(me["c"])(Ne(t,r));for(var i=1;i<=4;++i)n["darken".concat(i)]=Object(me["c"])(Le(t,i));return n}function Ne(e,t){var n=we(ge["b"](e));return n[0]=n[0]+10*t,ge["a"](_e(n))}function Le(e,t){var n=we(ge["b"](e));return n[0]=n[0]-10*t,ge["a"](_e(n))}var Re=function(e){d(n,e);var t=b(n);function n(e){var r;i(this,n),r=t.call(this),r.disabled=!1,r.isDark=null,r.unwatch=null,r.vueMeta=null;var s=e[n.property],o=s.dark,a=s.disable,c=s.options,u=s.themes;return r.dark=Boolean(o),r.defaults=r.themes=u,r.options=c,a?(r.disabled=!0,y(r)):(r.themes={dark:r.fillVariant(u.dark,!0),light:r.fillVariant(u.light,!1)},r)}return o(n,[{key:"css",set:function(e){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=e)}},{key:"dark",get:function(){return Boolean(this.isDark)},set:function(e){var t=this.isDark;this.isDark=e,null!=t&&this.applyTheme()}},{key:"applyTheme",value:function(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}},{key:"clearCss",value:function(){this.css=""}},{key:"init",value:function(e,t){this.disabled||(e.$meta?this.initVueMeta(e):t&&this.initSSR(t),this.initTheme(e))}},{key:"setTheme",value:function(e,t){this.themes[e]=Object.assign(this.themes[e],t),this.applyTheme()}},{key:"resetThemes",value:function(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}},{key:"checkOrCreateStyleElement",value:function(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}},{key:"fillVariant",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=this.themes[t?"dark":"light"];return Object.assign({},n,e)}},{key:"genStyleElement",value:function(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}},{key:"initVueMeta",value:function(e){var t=this;if(this.vueMeta=e.$meta(),this.isVueMeta23)e.$nextTick((function(){t.applyVueMeta23()}));else{var n="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",r=e.$options[n]||{};e.$options[n]=function(){r.style=r.style||[];var e=r.style.find((function(e){return"vuetify-theme-stylesheet"===e.id}));return e?e.cssText=t.generatedStyles:r.style.push({cssText:t.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(t.options||{}).cspNonce}),r}}}},{key:"applyVueMeta23",value:function(){var e=this.vueMeta.addApp("vuetify"),t=e.set;t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}},{key:"initSSR",value:function(e){var t=this.options.cspNonce?' nonce="'.concat(this.options.cspNonce,'"'):"";e.head=e.head||"",e.head+='<style type="text/css" id="vuetify-theme-stylesheet"'.concat(t,">").concat(this.generatedStyles,"</style>")}},{key:"initTheme",value:function(e){var t=this;"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),e.$once("hook:created",(function(){var n=a["a"].observable({themes:t.themes});t.unwatch=e.$watch((function(){return n.themes}),(function(){return t.applyTheme()}),{deep:!0})})),this.applyTheme())}},{key:"currentTheme",get:function(){var e=this.dark?"dark":"light";return this.themes[e]}},{key:"generatedStyles",get:function(){var e,t=this.parsedTheme,n=this.options||{};return null!=n.themeCache&&(e=n.themeCache.get(t),null!=e)||(e=Ce(t,n.customProperties),null!=n.minifyTheme&&(e=n.minifyTheme(e)),null!=n.themeCache&&n.themeCache.set(t,e)),e}},{key:"parsedTheme",get:function(){return Ee(this.currentTheme||{},void 0,Object(I["j"])(this.options,["variations"],!0))}},{key:"isVueMeta23",get:function(){return"function"===typeof this.vueMeta.addApp}}]),n}(T);Re.property="theme";var De=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(S),this.use(O),this.use(x),this.use(G),this.use(ce),this.use(de),this.use(Re)}return o(e,[{key:"init",value:function(e,t){var n=this;this.installed.forEach((function(r){var i=n.framework[r];i.framework=n.framework,i.init(e,t)})),this.framework.rtl=Boolean(this.preset.rtl)}},{key:"use",value:function(e){var t=e.property;this.installed.includes(t)||(this.framework[t]=new e(this.preset,this),this.installed.push(t))}}]),e}();De.install=u,De.installed=!1,De.version="2.5.8",De.config={silent:!1}},f5df:function(e,t,n){var r=n("00ee"),i=n("1626"),s=n("c6b6"),o=n("b622"),a=o("toStringTag"),c="Arguments"==s(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=Object(e),a))?n:c?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},f748:function(e,t){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("23cb"),c=n("50c4"),u=n("fc6a"),l=n("8418"),h=n("b622"),d=n("1dde"),f=d("slice"),p=h("species"),m=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(e,t){var n,r,h,d=u(this),f=c(d.length),v=a(e,f),y=a(void 0===t?f:t,f);if(i(d)&&(n=d.constructor,s(n)&&(n===Array||i(n.prototype))?n=void 0:o(n)&&(n=n[p],null===n&&(n=void 0)),n===Array||void 0===n))return m.call(d,v,y);for(r=new(void 0===n?Array:n)(g(y-v,0)),h=0;v<y;v++,h++)v in d&&l(r,h,d[v]);return r.length=h,r}})},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fe6c:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n("2b0e"),i=n("80d2"),s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r["a"].extend({name:"positionable",props:e.length?Object(i["i"])(s,e):s})}t["a"]=o()},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise},ffa6:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));function r(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r["throw"](e))}catch(t){s(t)}}function c(e){e.done?n(e.value):i(e.value).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return c([e,t])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=2&s[0]?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}Object.create;function s(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{while((void 0===t||t-- >0)&&!(r=s.next()).done)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s["return"])&&n.call(s)}finally{if(i)throw i.error}}return o}function a(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var c=n("1fd5"),u=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),l="[DEFAULT]",h=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new c["a"];if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(f(e))try{this.getOrInitializeService({instanceIdentifier:l})}catch(p){}try{for(var r=s(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var a=o(i.value,2),c=a[0],u=a[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});u.resolve(d)}catch(p){}}}catch(m){t={error:m}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=l),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(a(a([],o(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),o(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=l),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=l),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:i});try{for(var u=s(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var h=o(l.value,2),d=h[0],f=h[1],p=this.normalizeInstanceIdentifier(d);a===p&&f.resolve(c)}}catch(m){t={error:m}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return c},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var o=s(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,t)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,r=void 0===n?{}:n,i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:d(t),options:r}),this.instances.set(t,i),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(s){}return i||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=l),this.component?this.component.multipleInstances?e:l:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function d(e){return e===l?void 0:e}function f(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new h(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()}}]);
//# sourceMappingURL=chunk-vendors.d5cd345d.js.map