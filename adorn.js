!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([function(e,t,n){const o=n(31),r=n(12),a=n(32);e.exports=((e,t=(()=>{}))=>(o(e)?e=[e]:"string"==typeof e&&(e=document.querySelectorAll(e)),r(e,Array)||(e=a(e)),t&&e.forEach(t),e))},function(e,t){e.exports=((e,t={},n=[],o=null)=>{const r="string"==typeof e?document.createElement(e):e;for(const e in t)if(t.hasOwnProperty(e))if("text"===e)r.appendChild(document.createTextNode(t[e]));else if("html"===e)"string"==typeof t[e]?r.innerHTML=t[e]:r.appendChild(t[e]);else if("object"==typeof t[e])for(const n in t[e])t[e].hasOwnProperty(n)&&(r[e][n]=t[e][n]);else r.setAttribute(e,t[e]);return n.forEach(e=>{"string"==typeof e&&(e=document.createTextNode(e)),e&&r.appendChild(e)}),o&&o.appendChild(r),r})},function(e,t,n){const o=n(0),r=/[\s,]+/;let a=!1;try{const t=Object.defineProperty({},"passive",{get(){a=!0}});window.addEventListener("test",null,t)}catch(e){}e.exports=((e,t,n,i=!1)=>("object"==typeof i&&i.passive&&!a&&(i=!1),t=t.split(r),o(e,e=>t.forEach(t=>e.addEventListener(t,n,i)))))},function(e,t){e.exports=((e,t=document)=>t.querySelector(e))},function(e,t){e.exports=(e=>{try{return e()}catch(e){}})},function(e,t,n){const o=n(2);e.exports=(e=>{"loading"!==document.readyState&&document.body?e():o(document,"DOMContentLoaded",e)})},function(e,t,n){const o=n(0);e.exports=((e,t)=>{let n;return o(e,e=>{n||(n=t(e))}),n})},function(e,t,n){const o=[];function r(){const e=window.location.hash.substr(1);o.forEach(t=>{t(e)})}n(2)(window,"hashchange",r),e.exports=(e=>{e?o.push(e):r()})},function(e,t){e.exports=(e=>{if(e.id)return e.id;const t=(e.innerText||e.textContent||e.innerHTML).toLowerCase().replace(/\s/g,"-").replace(/[^a-z0-9_-]/g,"");return e.id=t,t})},function(e,t){e.exports=((e,t="./")=>{if(!e)return"";try{return new URL(e,new URL(t,window.location)).href||e}catch(t){return e}})},function(e,t,n){const o=n(4),r=n(3);e.exports=(e=>o(()=>r(`meta[name="${e}"]`).content))},function(e,t,n){const o=n(6);e.exports=((e,t)=>{const n=new RegExp(`(^|\\s)${t}($|\\s)`,"i");return o(e,e=>(e.className||"").match(n))})},function(e,t){e.exports=((e,t)=>t&&e instanceof t)},function(e,t){e.exports=document.documentElement||document.body.parentNode},function(e,t){e.exports=((e,t)=>t.parentNode.insertBefore(e,t))},function(e,t,n){const o=n(6),r=document.createElement("div"),a=r.matches||r.mozMatchesSelector||r.webkitMatchesSelector||r.msMatchesSelector||r.oMatchesSelector;e.exports=((e,t)=>{let n=t;return"string"==typeof t&&(n=(e=>a.call(e,t))),o(e,n)})},function(e,t,n){const o=n(17),r=n(43);e.exports=((e,t,n=0)=>{let a,i=0;const c=document.getElementsByTagName("script")[0].parentNode,s=e=>{!i++&&t&&t(e),a&&clearTimeout(a)};n&&(a=window.setTimeout(()=>{s(r("timeout"))},n));const l=o("script",{src:e,onerror:s,onload:s,onreadystatechange:()=>{/loaded|complete/i.test(l.readyState)&&s(r("load"))}});return l.async=!0,c.insertBefore(l,c.firstChild),l})},function(e,t,n){const o=n(18);e.exports=((e,t)=>{const n=document.createElement(e);return o(n,t),n})},function(e,t,n){const o=n(0);e.exports=((e,t)=>o(e,e=>{for(const n in t){const o=t[n];"function"==typeof o?e[n]=o:e.setAttribute(n,o)}}))},function(e,t,n){const o=n(0),r=n(11);e.exports=((e,t)=>o(e,e=>{r(e,t)||(e.className+=` ${t}`)}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=h(n(0)),r=h(n(6)),a=h(n(19)),i=h(n(2)),c=h(n(1)),s=h(n(53)),l=h(n(8)),u=h(n(5)),d=h(n(7)),f=h(n(54)),p=h(n(55));function h(e){return e&&e.__esModule?e:{default:e}}var m=new f.default;(0,u.default)(function(){var e=(0,o.default)("h1,h2");if(document.querySelector&&!(document.documentElement.className||"").match(/adorn-(nav|toc)-off/)){(0,o.default)(e,function(e){var t=(0,l.default)(e);e.insertBefore((0,c.default)("a",{name:t,href:"#".concat(t),"aria-label":"Jump to ".concat(e.innerText),class:"adorn-anchor"}),e.firstChild)});var t=window.location.hash;if(t&&t.length>2){var n=document.querySelector(window.location.hash);n&&n.scrollIntoView()}e.length&&setTimeout(function(){(0,a.default)(document.documentElement,"adorn-toc-on")}),m.resolve(e);var u=(0,p.default)();(0,i.default)(window,"scroll",function(){(0,p.default)(function(e){if("complete"===document.readyState){var t,n=window.scrollY||window.pageYOffset,o=window.innerHeight,a=document.querySelector(".adorn-toolbar"),i=a&&a.offsetHeight||50,c=window.location.hash;if(c){var l=document.querySelector(c);if(l){var u=(0,s.default)(l)[1];if(u>n&&u<n+o)return}}if((0,r.default)(e,function(e){var o=(0,s.default)(e)[1]+i;if(n<o)return!0;t=e}),t){var f=t.getElementsByTagName("a")[0];f&&(f=f.getAttribute("href").replace(/^#/,"")),"history"in window&&"replaceState"in window.history&&window.location.hash!=="#".concat(f)&&history.replaceState({},document.title,"#".concat(f)),(0,d.default)()}}}.bind(null,e),100,u)})}}),t.default=function(e){m.push(e)}},function(e,t){e.exports=((e,t="&",n="=",o=(e=>e))=>Object.keys(e).map(t=>{const r=o(e[t]);return t+(null!==r?n+r:"")}).join(t))},function(e,t,n){"use strict";n(23);var o=g(n(28)),r=g(n(9)),a=g(n(10)),i=g(n(30)),c=g(n(3)),s=g(n(1)),l=g(n(11)),u=g(n(13)),d=g(n(5));n(33),n(35),n(36);var f=g(n(37)),p=g(n(42));n(44);var h=g(n(45)),m=g(n(47)),b=g(n(48)),w=g(n(56));function g(e){return e&&e.__esModule?e:{default:e}}(0,d.default)(h.default);var v=(0,a.default)("manifest")||(0,i.default)("manifest")||"/manifest.json";(0,o.default)(v,function e(t,n){if(!n||(0,a.default)("manifest")||(0,i.default)("manifest")||(0,s.default)("link",{rel:"manifest",href:t},[],document.head),n&&n.theme_color&&!(0,a.default)("theme-color")&&(0,s.default)("meta",{name:"theme-color",content:n.theme_color},[],document.head),document.body){(n=n||{}).favicon=(0,a.default)("favicon")||(0,r.default)(n.favicon,t)||"/favicon.ico",n.author=(0,a.default)("author")||n.author,n.root=(0,a.default)("root")||(0,r.default)(n.root||"/",t),(0,l.default)(u.default,"no-adorn")||((0,w.default)(n),(0,b.default)(n),(0,m.default)(n)),u.default.getAttribute("lang")||u.default.setAttribute("lang",n.lang||"en"),document.title||(document.title=(0,c.default)("h1,h2").textContent||"");var o=(0,a.default)("ga:tracking")||n["ga:tracking"];o&&(0,p.default)(o);var f=(0,a.default)("sw")||(0,a.default)("serviceworker");f?f=(0,r.default)(f):(f=n.sw||n.serviceworker)&&(f=(0,r.default)(f,t));var h=navigator.serviceWorker;f&&h&&(h.ready.then(function(){var e=n.fallover;e&&e.forEach(function(e){var n=e.mode,o=e.fallover;o=(0,r.default)(o,t),h.controller.postMessage({type:"fallover",fallover:o,mode:n})})}),h.register(f).catch(function(e){console.error("Adorn: SW registration failed: ",e)}))}else(0,d.default)(e.bind(null,t,n))}.bind(null,v)),(0,f.default)()},function(e,t,n){var o=n(24);"string"==typeof o&&(o=[[e.i,o,""]]),n(26)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(25)(!1)).push([e.i,"h1:target,h2:target,h3:target,h4:target{-webkit-animation:slideInDown .3s cubic-bezier(.68,-.55,.265,1.55) alternate,fadeIn .3s cubic-bezier(.68,-.55,.265,1.55);animation:slideInDown .3s cubic-bezier(.68,-.55,.265,1.55) alternate,fadeIn .3s cubic-bezier(.68,-.55,.265,1.55)}a.adorn-anchor{position:relative;text-indent:0;text-decoration:none;outline:none;opacity:0;transition:opacity .3s}:hover>a.adorn-anchor{opacity:.5}a.adorn-anchor:hover{opacity:1}a.adorn-anchor:before{content:\"#\";position:absolute;left:-1em;color:inherit;vertical-align:middle}a.adorn-anchor:hover:before{-webkit-transform:scale(1.1);-webkit-transform-origin:50% 50%;transform:scale(1.1);transform-origin:50% 50%}.adorn-toolbar{-webkit-transform:translateZ(0);-webkit-transform-origin:0 0;transform:translateZ(0);transform-origin:0 0;-webkit-animation:fadeIn .3s ease;animation:fadeIn .3s ease;background-color:#fff;height:50px;color:#000;display:-webkit-flex;display:flex;-webkit-flex-flow:row;flex-flow:row;-webkit-justify-content:space-between;justify-content:space-between;left:0;right:0;margin:0;padding:5px 10px;position:fixed;top:0;z-index:1;white-space:nowrap}.adorn-toolbar>:last-child{text-align:right;margin-left:20px}.adorn-toolbar>:first-child{text-align:left}.adorn-toolbar>*{flex:1 0 auto;-webkit-flex:1 0 auto;white-space:normal;display:inline-block}.adorn-toolbar:after{content:\"\";border-bottom:1px solid #c7c7c7;position:absolute;bottom:0;width:100%;left:0;z-index:-1;-webkit-animation:fillWidth 1s linear forwards;animation:fillWidth 1s linear forwards}@media (max-width:650px),screen and (max-device-width:480px){.adorn-toolbar{transition:-webkit-transform 1s;transition:transform 1s}.adorn-toolbar #adorn-edit,.adorn-toolbar #adorn-edit+*{display:none}}.adorn-breadcrumbs{white-space:nowrap}.adorn-breadcrumbs>*{display:inline-block;transition:all .3s ease-in}.adorn-breadcrumbs>*>img{margin:-5px 10px -5px 0;background:hsla(0,0%,100%,.2);border-radius:50%;height:36px;vertical-align:middle;width:36px;transition:all .3s}.adorn-breadcrumbs>*>img:hover{-webkit-transform:scale(2.5);-webkit-transform-origin:50% 50%;transform:scale(2.5);transform-origin:50% 50%;filter:none}.adorn-breadcrumbs>:hover~*{transition:all 1s ease-in;-webkit-transform:translateX(50px);-webkit-transform-origin:0 0;transform:translateX(50px);transform-origin:0 0;opacity:0;filter:alpha(opacity=0)}.adorn-breadcrumbs>:last-child{text-decoration:none;color:#444}.adorn-links{white-space:nowrap}.adorn-links>span{margin:0 20px}.adorn-links>span:after{content:\"\\22C5\"}@media (max-width:650px),screen and (max-device-width:480px){.adorn-links>span{margin:0 2px}}@-webkit-keyframes slideInDown{0%{transform:translateY(-100px);-webkit-transform:translateY(-100px)}}@keyframes slideInDown{0%{transform:translateY(-100px);-webkit-transform:translateY(-100px)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.webkit{content:\"\"}@-webkit-keyframes fillWidth{0%{width:0;left:50%}to{width:100%;left:0}}.key{content:\"\"}@keyframes fillWidth{0%{width:0;left:50%}to{width:100%;left:0}}.adorn-toc{display:inline-block;margin-left:5px}.adorn-toc:before{content:\"#\"}.adorn-sidebar{background:#eee;border-right:1px solid #c7c7c7;height:calc(100% - 50px);left:0;overflow:auto;padding:10px;position:fixed;top:50px;width:200px;-webkit-animation:fadeIn 1s ease;animation:fadeIn 1s ease}@media (max-width:1048px){.adorn-sidebar{display:none}}.adorn-sidebar a{text-decoration:none;color:inherit}.adorn-sidebar a:hover{color:#0c50c7}.adorn-sidebar li,.adorn-sidebar ul{margin:0;padding:0}.adorn-sidebar>ul{margin:0 -10px}.adorn-sidebar>ul>li>a{font-weight:700}.adorn-sidebar li{list-style:none;padding:0 10px}.adorn-sidebar li.selected>a{color:#0c50c7}.adorn-sidebar li li{font-size:.9em}@supports (appearance:none) or (-webkit-appearance:none) or (-moz-appearance:none){.adorn-toc select{font:inherit;appearance:none;-webkit-appearance:none;-moz-appearance:none;text-decoration:underline;height:2em}.adorn-toc select:not(:focus){border-color:transparent;color:inherit;background-color:inherit}.adorn-toc select::-ms-expand{display:none}}.clearfix{display:inline-block}.clearfix:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}* html .clearfix{height:1%}.clearfix{display:block}.adorn-icon-github{color:inherit;display:inline-block;font-style:normal;text-decoration:inherit}.adorn-icon-github:after{content:\"GitHub\"}.adorn-icon-twitter{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M27.49 10.126c.011.254.017.507.017.766 0 7.808-5.942 16.809-16.813 16.809a16.72 16.72 0 0 1-9.056-2.653c.463.058.932.083 1.408.083 2.769 0 5.317-.944 7.341-2.534a5.9 5.9 0 0 1-5.52-4.097c.36.067.729.104 1.111.104.54 0 1.185-.071 1.68-.208-2.704-.541-4.616-2.929-4.616-5.795v-.075c0 .441 1.584.711 2.552.74-1.584-1.06-2.69-2.87-2.69-4.917 0-1.085.261-2.101.768-2.974 2.916 3.578 7.255 5.928 12.167 6.173a5.702 5.702 0 0 1-.16-1.343 5.9 5.9 0 0 1 5.901-5.907 5.89 5.89 0 0 1 4.312 1.863 11.91 11.91 0 0 0 3.754-1.431 5.909 5.909 0 0 1-2.598 3.266 12.019 12.019 0 0 0 3.392-.928 11.983 11.983 0 0 1-2.948 3.057z' fill='%23black'/%3E%3C/svg%3E\") no-repeat 50%;background-size:1em}.adorn-icon-share,.adorn-icon-twitter{width:1em;height:1em;font-size:1.5em;vertical-align:middle;display:inline-block}.adorn-icon-share{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath stroke='null' d='M26.293 20.872a5.39 5.39 0 0 0-3.933 1.705l-11.563-5.7c.04-.266.067-.538.067-.818 0-.271-.026-.536-.064-.797l11.546-5.637a5.395 5.395 0 0 0 3.947 1.72c3 0 5.433-2.45 5.433-5.47 0-3.02-2.432-5.468-5.433-5.468s-5.432 2.448-5.432 5.469c0 .271.026.536.064.797L9.38 12.31a5.395 5.395 0 0 0-3.947-1.72C2.432 10.59 0 13.04 0 16.06c0 3.02 2.432 5.468 5.432 5.468 1.55 0 2.944-.656 3.933-1.704l11.563 5.7a5.43 5.43 0 0 0-.068.817c0 3.021 2.432 5.469 5.432 5.469s5.433-2.448 5.433-5.469c0-3.02-2.431-5.469-5.432-5.469z'/%3E%3C/svg%3E\") no-repeat 50%;background-size:1em}.adorn-speeach-bubble{color:#444;margin-left:5px;position:relative;line-height:1;text-align:center;display:inline-block;background-color:#fff;border:1px solid #444;color:#000;border-radius:15%;padding:5px;transition:all .3s cubic-bezier(.68,-.55,.265,1.55)}.adorn-speeach-bubble:after,.adorn-speeach-bubble:before{position:absolute;left:-6px;bottom:5px;content:\" \";width:0;height:0;padding:0;border:5px solid transparent;border-width:3.5px 5px;border-right-color:inherit;border-left-width:0}.adorn-speeach-bubble:after{border-right-color:#fff;left:-4px;border-width:2.975px 4.25px;border-left-width:0;bottom:5.5px}.adorn-speeach-bubble:empty{-webkit-transform:scale(.01);-webkit-transform-origin:50% 50%;transform:scale(.01);transform-origin:50% 50%;opacity:0}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var a=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[o].concat(i).concat([a]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var o,r,a={},i=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),s=null,l=0,u=[],d=n(27);function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=a[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(g(o.parts[i],t))}else{var c=[];for(i=0;i<o.parts.length;i++)c.push(g(o.parts[i],t));a[o.id]={id:o.id,refs:1,parts:c}}}}function p(e,t){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(c):n.push(o[i]={id:i,parts:[c]})}return n}function h(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function b(e){var t=document.createElement("style");return e.attrs.type="text/css",w(t,e.attrs),h(e,t),t}function w(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,o,r,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var i=l++;n=s||(s=b(t)),o=y.bind(null,n,i,!1),r=y.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",w(t,e.attrs),h(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||a)&&(o=d(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}.bind(null,n,t),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),o=function(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var i=n[r];(c=a[i.id]).refs--,o.push(c)}for(e&&f(p(e,t),t),r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete a[c.id]}}}};var v,x=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function y(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(r=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:o+a.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){const o=n(29),r=n(4);e.exports=((e,t)=>{const n=new XMLHttpRequest;n.onload=(()=>{const e="object"==typeof n.response?n.response:o(n.response);t(e)}),n.onerror=t,n.open("GET",e),"responseType"in n&&r(()=>n.responseType="json"),n.send()})},function(e,t,n){const o=n(4);e.exports=(e=>o(()=>JSON.parse(e)))},function(e,t,n){const o=n(4),r=n(3);e.exports=(e=>o(()=>r(`link[rel="${e}"]`).href))},function(e,t,n){const o=n(12),r="undefined"!=typeof HTMLElement&&HTMLElement||"undefined"!=typeof Element&&Element,a="undefined"!=typeof HTMLDocument&&HTMLDocument||"undefined"!=typeof Document&&Document,i=window.constructor;e.exports=(e=>o(e,r)||o(e,a)||o(e,i))},function(e,t){e.exports=(e=>Array.prototype.slice.call(e))},function(e,t,n){const o=n(34),r="ontouchstart"in window;o("touch",r),e.exports=r},function(e,t){e.exports=((e,t)=>{document.documentElement.className=`${document.documentElement.className} ${t?"":"no-"}${e}`})},function(e,t){"header,section,datalist,option,footer,nav,menu,aside,article,style,script".split(",").forEach(e=>document.createElement(e))},function(e,t,n){"use strict";var o=a(n(14)),r=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}(0,a(n(3)).default)("meta[name=viewport]")||(0,o.default)((0,r.default)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),document.getElementsByTagName("script")[0])},function(e,t,n){const o=n(38),r=n(40);e.exports=((e=document)=>{if(!r)return!1;o("a","click",e=>{const t=e.delegateTarget;t.href&&t.href.match(/^https?:\/\//)&&(e.preventDefault(),window.open(t.href,"_system"))},e)})},function(e,t,n){const o=n(2),r=n(39),a=n(15);e.exports=((e,t,n,i=document)=>{const c=t=>{let o=t.target;for(;o;){if(a(o,e)){t.delegateTarget=o,n(t);break}o=o.parentNode}};return o(i,t,c),{remove:()=>r(i,t,c)}})},function(e,t,n){const o=n(0),r=/[\s,]+/;e.exports=((e,t,n)=>(t=t.split(r),o(e,e=>t.forEach(t=>e.removeEventListener(t,n)))))},function(e,t,n){const o=n(41),r=/^file:\/{3}[^\/]/i.test(window.location.href);e.exports=o&&r},function(e,t){const n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);e.exports=n},function(e,t,n){const o=n(16);e.exports=(e=>{window._gaq=window._gaq||[],_gaq.push(["_setAccount",e]),_gaq.push(["_trackPageview"]),o(`${"https:"===document.location.protocol?"https://ssl":"http://www"}.google-analytics.com/ga.js`)})},function(e,t){const n={bubbles:!0,cancelable:!0};let o=(e,t=n)=>new Event(e,t);try{o("test")}catch(e){o=((e,t=n)=>{const o=document.createEvent("Event");return o.initEvent(e,!!t.bubbles,!!t.cancelable),o})}e.exports=o},function(e,t,n){"use strict";var o=a(n(5)),r=a(n(18));function a(e){return e&&e.__esModule?e:{default:e}}(0,o.default)(function(){(0,r.default)("a[target=_blank]:not([rel=noopener])",{rel:"noopener"})})},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _each=_interopRequireDefault(__webpack_require__(0)),_on=_interopRequireDefault(__webpack_require__(2)),_create=_interopRequireDefault(__webpack_require__(1)),_insertAfter=_interopRequireDefault(__webpack_require__(46));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default=function(){(0,_each.default)("pre",function(e){"tryit"!==e.className&&"tryitoffline"!==e.className||tryitButton(e)}),(0,_each.default)("script",function(e){var t=e.getAttribute("data-tryit");t&&tryitButton(e,window[t]),e.getAttribute("src")&&(0,_on.default)(e,"click",function(){window.open(e.getAttribute("src"),"_blank")})}),(0,_each.default)("link",function(e){e.getAttribute("href")&&(0,_on.default)(e,"click",function(){window.open(e.getAttribute("href"),"_blank")})})};function tryitButton(pre,func){var btn=(0,_create.default)("button",{class:"tryit"},["tryit"]);(0,_insertAfter.default)(btn,pre),(0,_on.default)(btn,"click",function(){func?func():("function"!=typeof tryit||tryit(pre.innerText))&&setTimeout(function(){return eval(pre.innerText)},100)}),func||pre.setAttribute("contenteditable",!0)}exports.default=_default},function(e,t){e.exports=((e,t)=>{t.nextSibling?t.parentNode.insertBefore(e,t.nextSibling):t.parentNode.appendChild(e)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(5)),r=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){e.author&&(0,o.default)(function(){var t=e.author.split(/\s*, \s*/);if(t){var n=["Authored by "];t[1]?n.push((0,r.default)("a",{href:t[1],rel:"author"},[t[0]])):n.push(t[0]),(0,r.default)("footer",{},n,document.body)}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(0)),r=f(n(19)),a=f(n(1)),i=f(n(49)),c=f(n(50)),s=f(n(52)),l=f(n(7)),u=f(n(20)),d=f(n(8));function f(e){return e&&e.__esModule?e:{default:e}}t.default=function(){(0,u.default)(function(e){if(e.length<2)(0,r.default)(document.documentElement,"adorn-sidebar-off");else{var t=0,n=(0,i.default)("aside",{class:"adorn-sidebar"}),u={};(0,o.default)(e,function(e){var o=+e.tagName.match(/[0-9]/)[0],r=function(e,t,n){if(t<n)return(0,a.default)("ul",{},[],e);do{e=(0,c.default)(e,"ul")||e}while(e&&t-- >n);return e}(n,t,o);t=o;var i=e.innerText||e.textContent||e.innerHTML,s=(0,d.default)(e);u[s]=n=(0,a.default)("li",{},[(0,a.default)("a",{href:"#".concat(s)},[i])],r)}),(0,l.default)(function(e){var t=u[e];t&&((0,s.default)(".adorn-sidebar .selected","selected"),(0,r.default)(t,"selected"))})}})}},function(e,t,n){const o=n(17);e.exports=((e,t,n=document.body)=>{const r=o(e,t);return n.insertBefore(r,n.firstChild),r})},function(e,t,n){const o=n(51);e.exports=((e,t)=>{const n=o(e,t);return n.length?n[0]:null})},function(e,t,n){const o=n(0),r=n(15),a=n(13);e.exports=((e,t)=>{const n=[];return o(e,e=>{for(;e&&e.parentNode&&((e=e.parentNode)===document&&(e=a),r(e,t)&&n.push(e),e!==a););}),n})},function(e,t,n){const o=n(0);e.exports=((e,t)=>{const n=new RegExp(`(^|\\s)${t}($|\\s)`,"ig");return o(e,e=>{e.className=e.className.replace(n," ")})})},function(e,t){e.exports=(e=>{let t=0,n=0;if(e.offsetParent)do{t+=e.offsetLeft,n+=e.offsetTop}while(e=e.offsetParent);return[t,n]})},function(e,t){e.exports=class{constructor(...e){this.items=[],this.state="pending",this.response=null,this.push(...e)}push(...e){this.items.push(...e),"pending"!==this.state&&(this.items.forEach(e=>e(this.response)),this.length=0)}get length(){return this.items.length}set length(e){return this.items.length=e}resolve(e){this.state="resolved",this.response=e,this.push()}}},function(e,t){let n=1;const o={};e.exports=((e,t=0,r=n++)=>(r&&o[r]&&(clearTimeout(o[r]),delete o[r]),e&&(o[r]=setTimeout(()=>{e()},t)),r))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(1)),r=l(n(57)),a=l(n(58)),i=l(n(14)),c=l(n(59)),s=n(60);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=window.location.pathname||"",n=(0,r.default)(e.root).pathname,l=(t=(t=(0,a.default)(t,n)).replace(/^\//g,"")).split(/([^\/]+\/?)/).filter(function(e){return!!e});e.paths=l;var u=[(0,o.default)("a",{href:e.root},[(0,o.default)("img",{src:e.favicon,alt:window.location.hostname,title:e.name})])];l.forEach(function(t,n){var r=e.root+l.slice(0,n+1).join(""),a=t.replace(/\.(html?)$/,"");u.push(" ",(0,o.default)("a",{href:r},[a]))});var d=(0,o.default)("div",{class:"adorn-breadcrumbs"},u),f=[(0,s.github_btn)(e),(0,s.twitter_btn)(e),(0,s.share_btn)(e)].reduce(function(e,t){return t?(e.length&&e.push((0,o.default)("span")),e.push(t),e):e},[]),p=(0,o.default)("div",{class:"adorn-links"},f);e.shoutout&&(p.appendChild((0,o.default)("span")),p.insertAdjacentHTML("beforeend",e.shoutout));var h=(0,o.default)("aside",{class:"adorn-toolbar"},[d,p]);(0,i.default)(h,document.body.firstElementChild||document.body.firstChild),(0,c.default)(d)}},function(e,t){e.exports=(e=>{if(e){if(window.URL&&URL instanceof Function&&0!==URL.length)return new URL(e,window.location);{const t=document.createElement("a");return t.href=e,t.cloneNode(!1)}}return window.location})},function(e,t){e.exports=((e,t)=>t&&0===e.indexOf(t)?e.slice(t.length):e)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(2)),a=l(n(1)),i=l(n(8)),c=l(n(7)),s=l(n(20));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){(0,s.default)(function(t){if(!(t.lenth<2)){var n=function(e){var t=(0,a.default)("div",{class:"adorn-toc"}),n=(0,a.default)("select",{"aria-label":"menu"},[],t),s=[];(0,r.default)(n,"change",function(){window.location.hash=n.options[n.selectedIndex].value});var l=n;return(0,o.default)(e,function(e){var t=+e.tagName.match(/[0-9]/)[0],o=e.innerText||e.textContent||e.innerHTML,r=(0,i.default)(e);1===t&&(l=(0,a.default)("optgroup",{label:o},[],n)),(0,a.default)("option",{value:r},[o],l),s.push(r)}),(0,c.default)(function(e){n.selectedIndex=s.indexOf(e)}),t}(t);e.appendChild(n)}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.github_btn=function(e){var t=[],n=e.paths;if(e.github){var a=e.github;if(!a.match("/")&&n.length&&(a+="/".concat(n[0].replace(/\/$/,""))),a.match("/")){var s="https://github.com/".concat(a),l=h("source")||(window.location.pathname||"").replace(/^\/?([^\/]+)/g,"").replace(/\/$/,"index.html").replace(/^\//,"");return t.push((0,i.default)("a",{href:(0,f.default)(l,"".concat(s,"/blob/master/")),target:"_blank",rel:"noopener",id:"adorn-edit"},["Edit this page"]),(0,i.default)("span"),(0,i.default)("a",{href:"".concat(s),target:"_blank",rel:"noopener",title:"Stars",id:"adorn-github-button"},[(0,i.default)("i",{class:"adorn-icon-github"}),(0,i.default)("span",{class:"adorn-speeach-bubble"})])),(0,r.default)("https://api.github.com/repos/".concat(a,"?callback=?"),function(e){e&&e.data&&e.data.watchers&&(0,o.default)(".adorn-github-button span.adorn-speeach-bubble",function(t){t.innerHTML=e.data.watchers||""})}),c.default.apply(void 0,t)}}},t.twitter_btn=function(e){var t=[],n=e["twitter:creator"]||(0,l.default)("twitter:creator");if(n){var u=(0,i.default)("a",{href:"https://twitter.com/share",class:"adorn-twitter-button",target:"_blank",rel:"noopener","data-via":n.replace("@",""),title:"Tweet"},[(0,i.default)("i",{class:"adorn-icon-twitter"})]);return t.push(u,(0,i.default)("a",{href:"https://twitter.com/search?ref_src=twsrc%5Etfw&q=".concat(encodeURIComponent(m)),class:"adorn-twitter-count",rel:"noopener","aria-label":"Twitter comments",target:"_blank"},[(0,i.default)("i",{class:"adorn-speeach-bubble"})])),(0,r.default)("https://cdn.syndication.twitter.com/widgets/tweetbutton/count.json?url=".concat(encodeURIComponent(m)),function(e){e&&(0,o.default)(".adorn-twitter-count span.adorn-speeach-bubble",function(t){t.innerHTML=e.count||"",t.title="This page has been shared ".concat(e.count," times, view these tweets")})}),(0,a.default)(u,"click",function(t){t.preventDefault();var o={text:document.title,via:n.replace("@",""),url:window.location.href.replace(/#.*/,"")},r=(0,l.default)("twitter:hashtag")||e["twitter:hashtag"];r&&(o.hashtag=r),(0,d.default)("https://twitter.com/intent/tweet?".concat((0,s.default)(o)),"twitter",{width:550,height:250})}),c.default.apply(void 0,t)}},t.share_btn=function(){if("share"in navigator){var e=[],t=(0,i.default)("button",{class:"adorn-icon-share",target:"_blank",rel:"noopener",title:"Share"});return e.push(t),(0,a.default)(t,"click",function(){try{navigator.share({title:document.title,text:document.title,url:location.href}).then(function(){t.style.color="green"})}catch(e){t.style.color="red"}}),c.default.apply(void 0,e)}};var o=p(n(0)),r=p(n(61)),a=p(n(2)),i=p(n(1)),c=p(n(64)),s=p(n(65)),l=p(n(10)),u=p(n(3)),d=p(n(66)),f=p(n(9));function p(e){return e&&e.__esModule?e:{default:e}}var h=function(){var e=(0,u.default)("link[rel=source]");if(e)return e.getAttribute("href")},m=window.location.href},function(e,t,n){const o=n(62),r=n(16),a=/[=]\?(&|$)/;e.exports=((e,t,n,i=6e4)=>{let c;n=o(e=>(c=e,!0),n),e=e.replace(a,`=${n}$1`);const s=r(e,()=>{t(c),s.parentNode.removeChild(s)},i);return s})},function(e,t,n){const o=n(63);e.exports=((e,t,n="_tricks_")=>(t=t||n+o(),window[t]=function(e,t,...n){t(...n)&&delete window[e]}.bind(null,t,e),t))},function(e,t){e.exports=(()=>parseInt(1e12*Math.random(),10).toString(36))},function(e,t){e.exports=((...e)=>{const t=document.createDocumentFragment();return e.forEach(e=>t.appendChild(e)),t})},function(e,t,n){const o=n(21);e.exports=((e,t=(e=>"?"===e?"?":encodeURIComponent(e)))=>o(e,"&","=",t))},function(e,t,n){const o=n(21),r=document.documentElement,a=[["Top","Height"],["Left","Width"]];e.exports=((e,t,n={})=>(a.forEach(function([e,t]){const n=e.toLowerCase(),o=t.toLowerCase();if(this[o]&&!(n in this)){const a=void 0!==window[`screen${e}`]?window[`screen${e}`]:screen[n],i=screen[o]||window[`inner${t}`]||r[`client${t}`];this[n]=parseInt((i-this[o])/2,10)+a}}.bind(n)),window.open(e,t,o(n,","))))}]);
//# sourceMappingURL=adorn.js.map