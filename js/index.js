!function(e){function n(e){delete installedChunks[e]}function r(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=f.p+""+e+"."+w+".hot-update.js",n.appendChild(r)}function t(e){return e=e||1e4,new Promise(function(n,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=f.p+""+w+".hot-update.json";t.open("GET",o,!0),t.timeout=e,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)n();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void r(e)}n(e)}}})}function o(e){var n=M[e];if(!n)return f;var r=function(r){return n.hot.active?(M[r]?M[r].parents.indexOf(e)<0&&M[r].parents.push(e):(j=[e],y=r),n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),j=[]),f(r)};for(var t in f)Object.prototype.hasOwnProperty.call(f,t)&&"e"!==t&&Object.defineProperty(r,t,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(n){f[e]=n}}}(t));return r.e=function(e){function n(){I--,"prepare"===x&&(P[e]||l(e),0===I&&0===H&&u())}return"ready"===x&&i("prepare"),I++,f.e(e).then(n,function(e){throw n(),e})},r}function c(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:y!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:a,apply:p,status:function(e){if(!e)return x;E.push(e)},addStatusHandler:function(e){E.push(e)},removeStatusHandler:function(e){var n=E.indexOf(e);n>=0&&E.splice(n,1)},data:_[e]};return y=void 0,n}function i(e){x=e;for(var n=0;n<E.length;n++)E[n].call(null,e)}function d(e){return+e+""===e?+e:e}function a(e){if("idle"!==x)throw new Error("check() is only allowed in idle status");return b=e,i("check"),t(O).then(function(e){if(!e)return i("idle"),null;A={},P={},k=e.c,g=e.h,i("prepare");var n=new Promise(function(e,n){v={resolve:e,reject:n}});m={};return l(1),"prepare"===x&&0===I&&0===H&&u(),n})}function s(e,n){if(k[e]&&A[e]){A[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(m[r]=n[r]);0==--H&&0===I&&u()}}function l(e){k[e]?(A[e]=!0,H++,r(e)):P[e]=!0}function u(){i("ready");var e=v;if(v=null,e)if(b)Promise.resolve().then(function(){return p(b)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&n.push(d(r));e.resolve(n)}}function p(r){function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==x)throw new Error("apply() is only allowed in ready status");r=r||{};var o,c,a,s,l,u={},p=[],h={},y=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var v in m)if(Object.prototype.hasOwnProperty.call(m,v)){l=d(v);var b;b=m[v]?function(e){for(var n=[e],r={},o=n.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var c=o.pop(),i=c.id,d=c.chain;if((s=M[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<s.parents.length;a++){var l=s.parents[a],u=M[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([l]),moduleId:i,parentId:l};n.indexOf(l)>=0||(u.hot._acceptedDependencies[i]?(r[l]||(r[l]=[]),t(r[l],[i])):(delete r[l],n.push(l),o.push({chain:d.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}(l):{type:"disposed",moduleId:v};var O=!1,D=!1,E=!1,H="";switch(b.chain&&(H="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":r.onDeclined&&r.onDeclined(b),r.ignoreDeclined||(O=new Error("Aborted because of self decline: "+b.moduleId+H));break;case"declined":r.onDeclined&&r.onDeclined(b),r.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+H));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(b),r.ignoreUnaccepted||(O=new Error("Aborted because "+l+" is not accepted"+H));break;case"accepted":r.onAccepted&&r.onAccepted(b),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(b),E=!0;break;default:throw new Error("Unexception type "+b.type)}if(O)return i("abort"),Promise.reject(O);if(D){h[l]=m[l],t(p,b.outdatedModules);for(l in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,l)&&(u[l]||(u[l]=[]),t(u[l],b.outdatedDependencies[l]))}E&&(t(p,[b.moduleId]),h[l]=y)}var I=[];for(c=0;c<p.length;c++)l=p[c],M[l]&&M[l].hot._selfAccepted&&I.push({module:l,errorHandler:M[l].hot._selfAccepted});i("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&n(e)});for(var P,A=p.slice();A.length>0;)if(l=A.pop(),s=M[l]){var U={},q=s.hot._disposeHandlers;for(a=0;a<q.length;a++)(o=q[a])(U);for(_[l]=U,s.hot.active=!1,delete M[l],delete u[l],a=0;a<s.children.length;a++){var T=M[s.children[a]];T&&((P=T.parents.indexOf(l))>=0&&T.parents.splice(P,1))}}var R,S;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)&&(s=M[l]))for(S=u[l],a=0;a<S.length;a++)R=S[a],(P=s.children.indexOf(R))>=0&&s.children.splice(P,1);i("apply"),w=g;for(l in h)Object.prototype.hasOwnProperty.call(h,l)&&(e[l]=h[l]);var B=null;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)&&(s=M[l])){S=u[l];var L=[];for(c=0;c<S.length;c++)if(R=S[c],o=s.hot._acceptedDependencies[R]){if(L.indexOf(o)>=0)continue;L.push(o)}for(c=0;c<L.length;c++){o=L[c];try{o(S)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[c],error:e}),r.ignoreErrored||B||(B=e)}}}for(c=0;c<I.length;c++){var N=I[c];l=N.module,j=[l];try{f(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,orginalError:e,originalError:e}),r.ignoreErrored||B||(B=n),B||(B=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:l,error:e}),r.ignoreErrored||B||(B=e)}}return B?(i("fail"),Promise.reject(B)):(i("idle"),new Promise(function(e){e(p)}))}function f(n){if(M[n])return M[n].exports;var r=M[n]={i:n,l:!1,exports:{},hot:c(n),parents:(D=j,j=[],D),children:[]};return e[n].call(r.exports,r,r.exports,o(n)),r.l=!0,r.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){s(e,n),h&&h(e,n)};var y,v,m,g,b=!0,w="876c4b3c6dceadbc93dc",O=1e4,_={},j=[],D=[],E=[],x="idle",H=0,I=0,P={},A={},k={},M={};f.m=e,f.c=M,f.d=function(e,n,r){f.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},f.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.h=function(){return w},o("./src/js/index.js")(f.s="./src/js/index.js")}({"./src/css/styl/index.styl":function(e,n){},"./src/js/index.js":function(e,n,r){"use strict";function t(e){return document.getElementById(e)?document.getElementById(e):console.error("this ID is undefind")}function o(e){var n=e.offsetTop;return window.innerHeight+document.documentElement.scrollTop>n+500}function c(e){console.log(e.getAttribute("data-mg")),i(0,e.getAttribute("data-mg"),e)}function i(e,n,r){function t(){return e+=1}var o=setInterval(function(){var e=t();e>=n&&clearInterval(o),r.innerHTML=e},1)}Object.defineProperty(n,"__esModule",{value:!0});var d=r("./src/css/styl/index.styl"),a=(r.n(d),!0);window.onscroll=function(){o(t("our-stats"))&&a&&(c(t("magic-num1")),a=!1)};var s=t("magic-num1").getAttribute("data-mg");s=s.split(""),s=s.map(function(e){return++e}),console.log(s)}});