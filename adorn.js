!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=66)}([function(t,e,n){"use strict";var r=n(57),o=n(18),i=n(56);t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return r(t)?t=[t]:"string"==typeof t&&(t=document.querySelectorAll(t)),o(t,Array)||(t=i(t)),e&&t.forEach(e),t}},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i="string"==typeof t?document.createElement(t):t;for(var a in e)if(e.hasOwnProperty(a))if("text"===a)i.appendChild(document.createTextNode(e[a]));else if("html"===a)"string"==typeof e[a]?i.innerHTML=e[a]:i.appendChild(e[a]);else if("object"===r(e[a]))for(var u in e[a])e[a].hasOwnProperty(u)&&(i[a][u]=e[a][u]);else i.setAttribute(a,e[a]);return n.forEach(function(t){"string"==typeof t&&(t=document.createTextNode(t)),t&&i.appendChild(t)}),o&&o.appendChild(i),i}},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(0),i=/[\s,]+/,a=!1;try{var u=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,u)}catch(t){}t.exports=function(t,e,n){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return"object"===(void 0===u?"undefined":r(u))&&u.passive&&!a&&(u=!1),e=e.split(i),o(t,function(t){return e.forEach(function(e){return t.addEventListener(e,n,u)})})}},function(t,e,n){"use strict";t.exports=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(t)}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t){"loading"!==document.readyState&&document.body?t():r(document,"DOMContentLoaded",t)}},function(t,e,n){"use strict";t.exports=function(t){try{return t.call(null)}catch(t){}}},function(t,e,n){"use strict";t.exports=function(t){if(t.id)return t.id;var e=(t.innerText||t.textContent||t.innerHTML).toLowerCase().replace(/\s/g,"-").replace(/[^a-z0-9_-]/g,"");return t.id=e,e}},function(t,e,n){"use strict";var r=[];function o(){var t=window.location.hash.substr(1);r.forEach(function(e){e.call(null,t)})}n(2)(window,"hashchange",o),t.exports=function(t){t?r.push(t):o()}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){var n=void 0;return r(t,function(t){n||(n=e(t))}),n}},function(t,e,n){"use strict";t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"=",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t){return t};return Object.keys(t).map(function(e){var o=r(t[e]);return e+(null!==o?n+o:"")}).join(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=h(n(0)),o=h(n(8)),i=h(n(11)),a=h(n(2)),u=h(n(1)),c=h(n(35)),s=h(n(6)),l=h(n(4)),f=h(n(7)),d=h(n(34)),p=h(n(33));function h(t){return t&&t.__esModule?t:{default:t}}var m=new d.default;(0,l.default)(function(){var t=(0,r.default)("h1,h2");if(document.querySelector&&!(document.documentElement.className||"").match(/adorn-(nav|toc)-off/)){(0,r.default)(t,function(t){var e=(0,s.default)(t);t.insertBefore((0,u.default)("a",{name:e,href:"#"+e,"aria-label":"Jump to "+t.innerText,class:"adorn-anchor"}),t.firstChild)});var e=window.location.hash;if(e&&e.length>2){var n=document.querySelector(window.location.hash);n&&n.scrollIntoView()}t.length&&setTimeout(function(){(0,i.default)(document.documentElement,"adorn-toc-on")}),m.resolve(t);var l=(0,p.default)();(0,a.default)(window,"scroll",function(){(0,p.default)(function(t){if("complete"===document.readyState){var e=window.scrollY||window.pageYOffset,n=window.innerHeight,r=document.querySelector(".adorn-toolbar"),i=void 0,a=r&&r.offsetHeight||50,u=window.location.hash;if(u){var s=document.querySelector(u);if(s){var l=(0,c.default)(s)[1];if(l>e&&l<e+n)return}}if((0,o.default)(t,function(t){var n=(0,c.default)(t)[1]+a;if(e<n)return!0;i=t}),i){var d=i.getElementsByTagName("a")[0];d&&(d=d.getAttribute("href").replace(/^#/,"")),"history"in window&&"replaceState"in window.history&&window.location.hash!=="#"+d&&history.replaceState({},document.title,"#"+d),(0,f.default)()}}}.bind(null,t),100,l)})}}),e.default=function(t){m.push(t)},t.exports=e.default},function(t,e,n){"use strict";var r=n(0),o=n(19);t.exports=function(t,e){return r(t,function(t){o(t,e)||(t.className+=" "+e)})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){return r(t,function(t){for(var n in e){var r=e[n];"function"==typeof r?t[n]=r:t.setAttribute(n,r)}})}},function(t,e,n){"use strict";var r=n(12);t.exports=function(t,e){var n=document.createElement(t);return r(n,e),n}},function(t,e,n){"use strict";var r=n(13),o=n(45);t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=0,a=void 0,u=document.getElementsByTagName("script")[0].parentNode,c=function(t){!i++&&e&&e(t),a&&clearTimeout(a)};n&&(a=window.setTimeout(function(){c(o("timeout"))},n));var s=r("script",{src:t,onerror:c,onload:c,onreadystatechange:function(){/loaded|complete/i.test(s.readyState)&&c(o("load"))}});return s.async=!0,u.insertBefore(s,u.firstChild),s}},function(t,e,n){"use strict";var r=n(8),o=document.createElement("div"),i=o.matches||o.mozMatchesSelector||o.webkitMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;t.exports=function(t,e){var n=e;return"string"==typeof e&&(n=function(t){return i.call(t,e)}),r(t,n)}},function(t,e,n){"use strict";t.exports=function(t,e){return e.parentNode.insertBefore(t,e)}},function(t,e,n){"use strict";t.exports=document.documentElement||document.body.parentNode},function(t,e,n){"use strict";t.exports=function(t,e){return e&&t instanceof e}},function(t,e,n){"use strict";var r=n(8);t.exports=function(t,e){var n=new RegExp("(^|\\s)"+e+"($|\\s)","i");return r(t,function(t){return(t.className||"").match(n)})}},function(t,e,n){"use strict";var r=n(5),o=n(3);t.exports=function(t){return r(function(){return o('meta[name="'+t+'"]').content})}},function(t,e,n){"use strict";t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"./";if(!t)return"";try{return new URL(t,new URL(e,window.location)).href||t}catch(e){return t}}},function(t,e,n){"use strict";var r=n(9),o=document.documentElement,i=[["Top","Height"],["Left","Width"]];t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.forEach(function(t){var e=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(t,2),n=e[0],r=e[1],i=n.toLowerCase(),a=r.toLowerCase();if(this[a]&&!(i in this)){var u=void 0!==window["screen"+n]?window["screen"+n]:screen[i],c=screen[a]||window["inner"+r]||o["client"+r];this[i]=parseInt((c-this[a])/2,10)+u}}.bind(n)),window.open(t,e,r(n,","))}},function(t,e,n){"use strict";var r=n(9),o=function(t){return"?"===t?"?":encodeURIComponent(t)};t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return r(t,"&","=",e)}},function(t,e,n){"use strict";t.exports=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=document.createDocumentFragment();return e.forEach(function(t){return r.appendChild(t)}),r}},function(t,e,n){"use strict";t.exports=function(){return parseInt(1e12*Math.random(),10).toString(36)}},function(t,e,n){"use strict";var r=n(25);t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_tricks_";return e=e||n+r(),window[e]=function(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];e.apply(void 0,r)&&delete window[t]}.bind(null,e,t),e}},function(t,e,n){"use strict";var r=n(26),o=n(14),i=/=\?(&|$)/;t.exports=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6e4,u=void 0;n=r(function(t){return u=t,!0},n),t=t.replace(i,"="+n+"$1");var c=o(t,function(){e(u),c.parentNode.removeChild(c)},a);return c}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.github_btn=function(t){var e=[],n=t.paths;if(t.github){var i=t.github;if(!i.match("/")&&n.length&&(i+="/"+n[0].replace(/\/$/,"")),i.match("/")){var c="https://github.com/"+i,s=h("source")||(window.location.pathname||"").replace(/^\/?([^/]+)/g,"").replace(/\/$/,"index.html").replace(/^\//,"");e.push((0,a.default)("a",{href:(0,d.default)(s,c+"/blob/master/"),target:"_blank",rel:"noopener",id:"adorn-edit"},["Edit this page"]),(0,a.default)("span"),(0,a.default)("a",{href:""+c,target:"_blank",rel:"noopener",title:"Stars",id:"adorn-github-button"},[(0,a.default)("i",{class:"adorn-icon-github"}),(0,a.default)("span",{class:"adorn-speeach-bubble"})])),(0,o.default)("https://api.github.com/repos/"+i+"?callback=?",function(t){t&&t.data&&t.data.watchers&&(0,r.default)(".adorn-github-button span.adorn-speeach-bubble",function(e){e.innerHTML=t.data.watchers||""})})}}return u.default.apply(void 0,e)},e.twitter_btn=function(t){var e=[],n=t["twitter:creator"]||(0,s.default)("twitter:creator");if(n){var l=(0,a.default)("a",{href:"https://twitter.com/share",class:"adorn-twitter-button",target:"_blank",rel:"noopener","data-via":n.replace("@",""),title:"Tweet"},[(0,a.default)("i",{class:"adorn-icon-twitter"})]);return e.push(l,(0,a.default)("a",{href:"https://twitter.com/search?ref_src=twsrc%5Etfw&q="+encodeURIComponent(m),class:"adorn-twitter-count",rel:"noopener","aria-label":"Twitter comments",target:"_blank"},[(0,a.default)("i",{class:"adorn-speeach-bubble"})])),(0,o.default)("https://cdn.syndication.twitter.com/widgets/tweetbutton/count.json?url="+encodeURIComponent(m),function(t){t&&(0,r.default)(".adorn-twitter-count span.adorn-speeach-bubble",function(e){e.innerHTML=t.count||"",e.title="This page has been shared "+t.count+" times, view these tweets"})}),(0,i.default)(l,"click",function(e){e.preventDefault();var r={text:document.title,via:n.replace("@",""),url:window.location.href.replace(/#.*/,"")},o=(0,s.default)("twitter:hashtag")||t["twitter:hashtag"];o&&(r.hashtag=o),(0,f.default)("https://twitter.com/intent/tweet?"+(0,c.default)(r),"twitter",{width:550,height:250})}),u.default.apply(void 0,e)}},e.share_btn=function(){if("share"in navigator){var t=[],e=(0,a.default)("button",{class:"adorn-icon-share",target:"_blank",rel:"noopener",title:"Share"});return t.push(e),(0,i.default)(e,"click",function(){try{navigator.share({title:document.title,text:document.title,url:location.href}).then(function(){e.style.color="green"})}catch(t){e.style.color="red"}}),u.default.apply(void 0,t)}};var r=p(n(0)),o=p(n(27)),i=p(n(2)),a=p(n(1)),u=p(n(24)),c=p(n(23)),s=p(n(20)),l=p(n(3)),f=p(n(22)),d=p(n(21));function p(t){return t&&t.__esModule?t:{default:t}}var h=function(){var t=(0,l.default)("link[rel=source]");if(t)return t.getAttribute("href")},m=window.location.href},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(n(0)),o=s(n(2)),i=s(n(1)),a=s(n(6)),u=s(n(7)),c=s(n(10));function s(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){(0,c.default)(function(e){if(!(e.lenth<2)){var n=function(t){var e=(0,i.default)("div",{class:"adorn-toc"}),n=(0,i.default)("select",{"aria-label":"menu"},[],e),c=[];(0,o.default)(n,"change",function(){window.location.hash=n.options[n.selectedIndex].value});var s=n;return(0,r.default)(t,function(t){var e=+t.tagName.match(/[0-9]/)[0],r=t.innerText||t.textContent||t.innerHTML,o=(0,a.default)(t);1===e&&(s=(0,i.default)("optgroup",{label:r},[],n)),(0,i.default)("option",{value:o},[r],s),c.push(o)}),(0,u.default)(function(t){n.selectedIndex=c.indexOf(t)}),e}(e);t.appendChild(n)}})},t.exports=e.default},function(t,e,n){"use strict";t.exports=function(t,e){return e&&0===t.indexOf(e)?t.slice(e.length):t}},function(t,e,n){"use strict";t.exports=function(t){if(t){if(window.URL&&URL instanceof Function&&0!==URL.length)return new URL(t,window.location);var e=document.createElement("a");return e.href=t,e.cloneNode(!1)}return window.location}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(n(1)),o=s(n(31)),i=s(n(30)),a=s(n(16)),u=s(n(29)),c=n(28);function s(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var e=window.location.pathname||"",n=(0,o.default)(t.root).pathname,s=(e=(e=(0,i.default)(e,n)).replace(/^\//g,"")).split(/([^/]+\/?)/).filter(function(t){return!!t});t.paths=s;var l=[(0,r.default)("a",{href:t.root},[(0,r.default)("img",{src:t.favicon,alt:window.location.hostname,title:t.name})])];s.forEach(function(e,n){var o=t.root+s.slice(0,n+1).join(""),i=e.replace(/\.(html?)$/,"");l.push(" ",(0,r.default)("a",{href:o},[i]))});var f=(0,r.default)("div",{class:"adorn-breadcrumbs"},l),d=(0,r.default)("div",{class:"adorn-links"},[(0,c.github_btn)(t),(0,r.default)("span"),(0,c.twitter_btn)(t),(0,r.default)("span"),(0,c.share_btn)(t)]);t.shoutout&&(d.appendChild((0,r.default)("span")),d.insertAdjacentHTML("beforeend",t.shoutout));var p=(0,r.default)("aside",{class:"adorn-toolbar"},[f,d]);(0,a.default)(p,document.body.firstElementChild||document.body.firstChild),(0,u.default)(f)},t.exports=e.default},function(t,e,n){"use strict";var r=1,o={};t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r++;return n&&o[n]&&(clearTimeout(o[n]),delete o[n]),t&&(o[n]=setTimeout(function(){t()},e)),n}},function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();t.exports=function(){function t(){!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.items=[],this.state="pending",this.response=null,this.push.apply(this,arguments)}return r(t,[{key:"push",value:function(){var t,e=this;(t=this.items).push.apply(t,arguments),"pending"!==this.state&&(this.items.forEach(function(t){return t(e.response)}),this.length=0)}},{key:"resolve",value:function(t){this.state="resolved",this.response=t,this.push()}},{key:"length",get:function(){return this.items.length},set:function(t){return this.items.length=t}}]),t}()},function(t,e,n){"use strict";t.exports=function(t){var e=0,n=0;if(t.offsetParent)do{e+=t.offsetLeft,n+=t.offsetTop}while(t=t.offsetParent);return[e,n]}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){var n=new RegExp("(^|\\s)"+e+"($|\\s)","ig");return r(t,function(t){t.className=t.className.replace(n," ")})}},function(t,e,n){"use strict";var r=n(0),o=n(15),i=n(17);t.exports=function(t,e){var n=[];return r(t,function(t){for(;t&&t.parentNode&&((t=t.parentNode)===document&&(t=i),o(t,e)&&n.push(t),t!==i););}),n}},function(t,e,n){"use strict";var r=n(37);t.exports=function(t,e){var n=r(t,e);return n.length?n[0]:null}},function(t,e,n){"use strict";var r=n(13);t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.body,o=r(t,e);return n.insertBefore(o,n.firstChild),o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=d(n(0)),o=d(n(11)),i=d(n(1)),a=d(n(39)),u=d(n(38)),c=d(n(36)),s=d(n(7)),l=d(n(10)),f=d(n(6));function d(t){return t&&t.__esModule?t:{default:t}}e.default=function(){(0,l.default)(function(t){if(t.length<2)(0,o.default)(document.documentElement,"adorn-sidebar-off");else{var e=0,n=(0,a.default)("aside",{class:"adorn-sidebar"}),l={};(0,r.default)(t,function(t){var r=+t.tagName.match(/[0-9]/)[0],o=function(t,e,n){if(e<n)return(0,i.default)("ul",{},[],t);do{t=(0,u.default)(t,"ul")||t}while(t&&e-- >n);return t}(n,e,r);e=r;var a=t.innerText||t.textContent||t.innerHTML,c=(0,f.default)(t);l[c]=n=(0,i.default)("li",{},[(0,i.default)("a",{href:"#"+c},[a])],o)}),(0,s.default)(function(t){var e=l[t];e&&((0,c.default)(".adorn-sidebar .selected","selected"),(0,o.default)(e,"selected"))})}})},t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(4)),o=i(n(1));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){t.author&&(0,r.default)(function(){var e=t.author.split(/\s*, \s*/);if(e){var n=["Authored by "];e[1]?n.push((0,o.default)("a",{href:e[1],rel:"author"},[e[0]])):n.push(e[0]),(0,o.default)("footer",{},n,document.body)}})},t.exports=e.default},function(t,e,n){"use strict";t.exports=function(t,e){e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _each=__webpack_require__(0),_each2=_interopRequireDefault(_each),_on=__webpack_require__(2),_on2=_interopRequireDefault(_on),_create=__webpack_require__(1),_create2=_interopRequireDefault(_create),_insertAfter=__webpack_require__(42),_insertAfter2=_interopRequireDefault(_insertAfter);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function tryitButton(pre,func){var btn=(0,_create2.default)("button",{class:"tryit"},["tryit"]);(0,_insertAfter2.default)(btn,pre),(0,_on2.default)(btn,"click",function(){if(func)func();else{if("function"==typeof tryit&&!tryit(pre.innerText))return;setTimeout(function(){return eval(pre.innerText)},100)}}),func||pre.setAttribute("contenteditable",!0)}exports.default=function(){(0,_each2.default)("pre",function(t){"tryit"!==t.className&&"tryitoffline"!==t.className||tryitButton(t)}),(0,_each2.default)("script",function(t){var e=t.getAttribute("data-tryit");e&&tryitButton(t,window[e]),t.getAttribute("src")&&(0,_on2.default)(t,"click",function(){window.open(t.getAttribute("src"),"_blank")})}),(0,_each2.default)("link",function(t){t.getAttribute("href")&&(0,_on2.default)(t,"click",function(){window.open(t.getAttribute("href"),"_blank")})})},module.exports=exports.default},function(t,e,n){"use strict";var r=i(n(4)),o=i(n(12));function i(t){return t&&t.__esModule?t:{default:t}}(0,r.default)(function(){(0,o.default)("a[target=_blank]:not([rel=noopener])",{rel:"noopener"})})},function(t,e,n){"use strict";var r={bubbles:!0,cancelable:!0},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return new Event(t,e)};try{o("test")}catch(t){o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=document.createEvent("Event");return n.initEvent(t,!!e.bubbles,!!e.cancelable),n}}t.exports=o},function(t,e,n){"use strict";var r=n(14);t.exports=function(t){window._gaq=window._gaq||[],_gaq.push(["_setAccount",t]),_gaq.push(["_trackPageview"]),r(("https:"===document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js")}},function(t,e,n){"use strict";var r=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);t.exports=r},function(t,e,n){"use strict";var r=n(47),o=/^file:\/{3}[^/]/i.test(window.location.href);t.exports=r&&o},function(t,e,n){"use strict";var r=n(0),o=/[\s,]+/;t.exports=function(t,e,n){return e=e.split(o),r(t,function(t){return e.forEach(function(e){return t.removeEventListener(e,n)})})}},function(t,e,n){"use strict";var r=n(2),o=n(49),i=n(15);t.exports=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document,u=function(e){for(var r=e.target;r;){if(i(r,t)){e.delegateTarget=r,n(e);break}r=r.parentNode}};return r(a,e,u),{remove:function(){return o(a,e,u)}}}},function(t,e,n){"use strict";var r=n(50),o=n(48);t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!o)return!1;r("a","click",function(t){var e=t.delegateTarget;e.href&&e.href.match(/^https?:\/\//)&&(t.preventDefault(),window.open(e.href,"_system"))},t)}},function(t,e,n){"use strict";var r=i(n(16)),o=i(n(1));function i(t){return t&&t.__esModule?t:{default:t}}(0,i(n(3)).default)("meta[name=viewport]")||(0,r.default)((0,o.default)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),document.getElementsByTagName("script")[0])},function(t,e,n){"use strict";"header,section,datalist,option,footer,nav,menu,aside,article,style,script".split(",").forEach(function(t){return document.createElement(t)})},function(t,e,n){"use strict";t.exports=function(t,e){document.documentElement.className=document.documentElement.className+" "+(e?"":"no-")+t}},function(t,e,n){"use strict";var r=n(54),o="ontouchstart"in window;r("touch",o),t.exports=o},function(t,e,n){"use strict";t.exports=function(t){return Array.prototype.slice.call(t)}},function(t,e,n){"use strict";var r=n(18),o="undefined"!=typeof HTMLElement&&HTMLElement||"undefined"!=typeof Element&&Element,i="undefined"!=typeof HTMLDocument&&HTMLDocument||"undefined"!=typeof Document&&Document,a=window.constructor;t.exports=function(t){return r(t,o)||r(t,i)||r(t,a)}},function(t,e,n){"use strict";var r=n(5),o=n(3);t.exports=function(t){return r(function(){return o('link[rel="'+t+'"]').href})}},function(t,e,n){"use strict";var r=n(5);t.exports=function(t){return r(function(){return JSON.parse(t)})}},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(59),i=n(5);t.exports=function(t,e){var n=new XMLHttpRequest;n.onload=function(){var t="object"===r(n.response)?n.response:o(n.response);e(t)},n.onerror=e,n.open("GET",t),"responseType"in n&&i(function(){return n.responseType="json"}),n.send()}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,s=0,l=[],f=n(61);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(w(r.parts[a],e))}else{var u=[];for(a=0;a<r.parts.length;a++)u.push(w(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:u}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function h(t,e){var n=u(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function b(t){var e=document.createElement("style");return t.attrs.type="text/css",v(e,t.attrs),h(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function w(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=s++;n=c||(c=b(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",v(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(u=i[a.id]).refs--,r.push(u)}for(t&&d(p(t,e),e),o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}};var g,y=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n,r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[r].concat(a).concat([i]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){(t.exports=n(63)(!1)).push([t.i,"h1:target,h2:target,h3:target,h4:target{-webkit-animation:slideInDown .3s cubic-bezier(.68,-.55,.265,1.55) alternate,fadeIn .3s cubic-bezier(.68,-.55,.265,1.55);animation:slideInDown .3s cubic-bezier(.68,-.55,.265,1.55) alternate,fadeIn .3s cubic-bezier(.68,-.55,.265,1.55)}a.adorn-anchor{position:relative;text-indent:0;text-decoration:none;outline:none;opacity:0;transition:opacity .3s}:hover>a.adorn-anchor{opacity:.5}a.adorn-anchor:hover{opacity:1}a.adorn-anchor:before{content:\"#\";position:absolute;left:-1em;color:inherit;vertical-align:middle}a.adorn-anchor:hover:before{-webkit-transform:scale(1.1);-webkit-transform-origin:50% 50%;transform:scale(1.1);transform-origin:50% 50%}.adorn-toolbar{-webkit-transform:translateZ(0);-webkit-transform-origin:0 0;transform:translateZ(0);transform-origin:0 0;-webkit-animation:fadeIn .3s ease;animation:fadeIn .3s ease;background-color:#fff;height:50px;color:#000;display:-webkit-flex;display:flex;-webkit-flex-flow:row;flex-flow:row;-webkit-justify-content:space-between;justify-content:space-between;left:0;right:0;margin:0;padding:5px 10px;position:fixed;top:0;z-index:1;white-space:nowrap}.adorn-toolbar>:last-child{text-align:right;margin-left:20px}.adorn-toolbar>:first-child{text-align:left}.adorn-toolbar>*{flex:1 0 auto;-webkit-flex:1 0 auto;white-space:normal;display:inline-block}.adorn-toolbar:after{content:\"\";border-bottom:1px solid #c7c7c7;position:absolute;bottom:0;width:100%;left:0;z-index:-1;-webkit-animation:fillWidth 1s linear forwards;animation:fillWidth 1s linear forwards}@media (max-width:650px),screen and (max-device-width:480px){.adorn-toolbar{transition:-webkit-transform 1s;transition:transform 1s}.adorn-toolbar #adorn-edit,.adorn-toolbar #adorn-edit+*{display:none}}.adorn-breadcrumbs{white-space:nowrap}.adorn-breadcrumbs>*{display:inline-block;transition:all .3s ease-in}.adorn-breadcrumbs>*>img{margin:-5px 10px -5px 0;background:hsla(0,0%,100%,.2);border-radius:50%;height:36px;vertical-align:middle;width:36px;transition:all .3s}.adorn-breadcrumbs>*>img:hover{-webkit-transform:scale(2.5);-webkit-transform-origin:50% 50%;transform:scale(2.5);transform-origin:50% 50%;filter:none}.adorn-breadcrumbs>:hover~*{transition:all 1s ease-in;-webkit-transform:translateX(50px);-webkit-transform-origin:0 0;transform:translateX(50px);transform-origin:0 0;opacity:0;filter:alpha(opacity=0)}.adorn-breadcrumbs>:last-child{text-decoration:none;color:#444}.adorn-links{white-space:nowrap}.adorn-links>span{margin:0 20px}.adorn-links>span:after{content:\"\\22C5\"}@media (max-width:650px),screen and (max-device-width:480px){.adorn-links>span{margin:0 2px}}@-webkit-keyframes slideInDown{0%{transform:translateY(-100px);-webkit-transform:translateY(-100px)}}@keyframes slideInDown{0%{transform:translateY(-100px);-webkit-transform:translateY(-100px)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.webkit{content:\"\"}@-webkit-keyframes fillWidth{0%{width:0;left:50%}to{width:100%;left:0}}.key{content:\"\"}@keyframes fillWidth{0%{width:0;left:50%}to{width:100%;left:0}}.adorn-toc{display:inline-block;margin-left:5px}.adorn-toc:before{content:\"#\"}.adorn-sidebar{background:#eee;border-right:1px solid #c7c7c7;height:calc(100% - 50px);left:0;overflow:auto;padding:10px;position:fixed;top:50px;width:200px;-webkit-animation:fadeIn 1s ease;animation:fadeIn 1s ease}@media (max-width:1048px){.adorn-sidebar{display:none}}.adorn-sidebar a{text-decoration:none;color:inherit}.adorn-sidebar a:hover{color:#0c50c7}.adorn-sidebar li,.adorn-sidebar ul{margin:0;padding:0}.adorn-sidebar>ul{margin:0 -10px}.adorn-sidebar>ul>li>a{font-weight:700}.adorn-sidebar li{list-style:none;padding:0 10px}.adorn-sidebar li.selected>a{color:#0c50c7}.adorn-sidebar li li{font-size:.9em}@supports (appearance:none) or (-webkit-appearance:none) or (-moz-appearance:none){.adorn-toc select{font:inherit;appearance:none;-webkit-appearance:none;-moz-appearance:none;text-decoration:underline;height:2em}.adorn-toc select:not(:focus){border-color:transparent;color:inherit;background-color:inherit}.adorn-toc select::-ms-expand{display:none}}.clearfix{display:inline-block}.clearfix:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}* html .clearfix{height:1%}.clearfix{display:block}.adorn-icon-github{color:inherit;display:inline-block;font-style:normal;text-decoration:inherit}.adorn-icon-github:after{content:\"GitHub\"}.adorn-icon-twitter{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M27.49 10.126c.011.254.017.507.017.766 0 7.808-5.942 16.809-16.813 16.809a16.72 16.72 0 0 1-9.056-2.653c.463.058.932.083 1.408.083 2.769 0 5.317-.944 7.341-2.534a5.9 5.9 0 0 1-5.52-4.097c.36.067.729.104 1.111.104.54 0 1.185-.071 1.68-.208-2.704-.541-4.616-2.929-4.616-5.795v-.075c0 .441 1.584.711 2.552.74-1.584-1.06-2.69-2.87-2.69-4.917 0-1.085.261-2.101.768-2.974 2.916 3.578 7.255 5.928 12.167 6.173a5.702 5.702 0 0 1-.16-1.343 5.9 5.9 0 0 1 5.901-5.907 5.89 5.89 0 0 1 4.312 1.863 11.91 11.91 0 0 0 3.754-1.431 5.909 5.909 0 0 1-2.598 3.266 12.019 12.019 0 0 0 3.392-.928 11.983 11.983 0 0 1-2.948 3.057z' fill='%23black'/%3E%3C/svg%3E\") no-repeat 50%;background-size:1em}.adorn-icon-share,.adorn-icon-twitter{width:1em;height:1em;font-size:1.5em;vertical-align:middle;display:inline-block}.adorn-icon-share{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath stroke='null' d='M26.293 20.872a5.39 5.39 0 0 0-3.933 1.705l-11.563-5.7c.04-.266.067-.538.067-.818 0-.271-.026-.536-.064-.797l11.546-5.637a5.395 5.395 0 0 0 3.947 1.72c3 0 5.433-2.45 5.433-5.47 0-3.02-2.432-5.468-5.433-5.468s-5.432 2.448-5.432 5.469c0 .271.026.536.064.797L9.38 12.31a5.395 5.395 0 0 0-3.947-1.72C2.432 10.59 0 13.04 0 16.06c0 3.02 2.432 5.468 5.432 5.468 1.55 0 2.944-.656 3.933-1.704l11.563 5.7a5.43 5.43 0 0 0-.068.817c0 3.021 2.432 5.469 5.432 5.469s5.433-2.448 5.433-5.469c0-3.02-2.431-5.469-5.432-5.469z'/%3E%3C/svg%3E\") no-repeat 50%;background-size:1em}.adorn-speeach-bubble{color:#444;margin-left:5px;position:relative;line-height:1;text-align:center;display:inline-block;background-color:#fff;border:1px solid #444;color:#000;border-radius:15%;padding:5px;transition:all .3s cubic-bezier(.68,-.55,.265,1.55)}.adorn-speeach-bubble:after,.adorn-speeach-bubble:before{position:absolute;left:-6px;bottom:5px;content:\" \";width:0;height:0;padding:0;border:5px solid transparent;border-width:3.5px 5px;border-right-color:inherit;border-left-width:0}.adorn-speeach-bubble:after{border-right-color:#fff;left:-4px;border-width:2.975px 4.25px;border-left-width:0;bottom:5.5px}.adorn-speeach-bubble:empty{-webkit-transform:scale(.01);-webkit-transform-origin:50% 50%;transform:scale(.01);transform-origin:50% 50%;opacity:0}",""])},function(t,e,n){var r=n(64);"string"==typeof r&&(r=[[t.i,r,""]]),n(62)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";n(65);var r=w(n(60)),o=w(n(21)),i=w(n(20)),a=w(n(58)),u=w(n(3)),c=w(n(1)),s=w(n(19)),l=w(n(17)),f=w(n(4));n(55),n(53),n(52);var d=w(n(51)),p=w(n(46));n(44);var h=w(n(43)),m=w(n(41)),b=w(n(40)),v=w(n(32));function w(t){return t&&t.__esModule?t:{default:t}}(0,f.default)(h.default);var g=(0,i.default)("manifest")||(0,a.default)("manifest")||"/manifest.json";(0,r.default)(g,function t(e,n){if(!n||(0,i.default)("manifest")||(0,a.default)("manifest")||(0,c.default)("link",{rel:"manifest",href:e},[],document.head),n&&n.theme_color&&!(0,i.default)("theme-color")&&(0,c.default)("meta",{name:"theme-color",content:n.theme_color},[],document.head),document.body){(n=n||{}).favicon=(0,i.default)("favicon")||(0,o.default)(n.favicon,e)||"/favicon.ico",n.author=(0,i.default)("author")||n.author,n.root=(0,i.default)("root")||(0,o.default)(n.root||"/",e),(0,s.default)(l.default,"no-adorn")||((0,v.default)(n),(0,b.default)(n),(0,m.default)(n)),l.default.getAttribute("lang")||l.default.setAttribute("lang",n.lang||"en"),document.title||(document.title=(0,u.default)("h1,h2").textContent||"");var r=(0,i.default)("ga:tracking")||n["ga:tracking"];r&&(0,p.default)(r);var d=(0,i.default)("sw")||(0,i.default)("serviceworker");d?d=(0,o.default)(d):(d=n.sw||n.serviceworker)&&(d=(0,o.default)(d,e));var h=navigator.serviceWorker;d&&h&&(h.ready.then(function(){var t=n.fallover;t&&t.forEach(function(t){var n=t.mode,r=t.fallover;r=(0,o.default)(r,e),h.controller.postMessage({type:"fallover",fallover:r,mode:n})})}),h.register(d).catch(function(t){}))}else(0,f.default)(t.bind(null,e,n))}.bind(null,g)),(0,d.default)()}]);
//# sourceMappingURL=adorn.js.map