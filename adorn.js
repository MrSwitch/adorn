!function t(e,n,r){function o(u,a){if(!n[u]){if(!e[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[u]={exports:{}};e[u][0].call(l.exports,function(t){var n=e[u][1][t];return o(n||t)},l,l.exports,t,e,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!e||(0,a.default)("manifest")||(0,c.default)("manifest")||(0,l.default)("link",{rel:"manifest",href:t},[],document.head),e&&e.theme_color&&!(0,a.default)("theme-color")&&(0,l.default)("meta",{name:"theme-color",content:e.theme_color},[],document.head),document.body){(e=e||{}).favicon=(0,a.default)("favicon")||(0,u.default)(e.favicon,t)||"/favicon.ico",e.author=(0,a.default)("author")||e.author,e.root=(0,a.default)("root")||(0,u.default)(e.root||"/",t),(0,s.default)(d.default,"no-adorn")||((0,y.default)(e),(0,b.default)(e),(0,w.default)(e)),d.default.getAttribute("lang")||d.default.setAttribute("lang",e.lang||"en"),document.title||(document.title=(0,f.default)("h1,h2").textContent||"");var n=(0,a.default)("ga:tracking")||e["ga:tracking"];n&&(0,v.default)(n);var r=(0,a.default)("sw")||(0,a.default)("serviceworker");r?r=(0,u.default)(r):(r=e.sw||e.serviceworker)&&(r=(0,u.default)(r,t));var i=navigator.serviceWorker;r&&i&&(i.ready.then(function(){var n=e.fallover;n&&n.forEach(function(e){var n=e.mode,r=e.fallover;r=(0,u.default)(r,t),i.controller.postMessage({type:"fallover",fallover:r,mode:n})})}),i.register(r).catch(function(t){console.error("Adorn: SW registration failed: ",t)}))}else(0,p.default)(o.bind(null,t,e))}var i=r(t(13)),u=r(t(48)),a=r(t(30)),c=r(t(28)),f=r(t(34)),l=r(t(17)),s=r(t(23)),d=r(t(19)),p=r(t(42));t(58),t(56),t(10);var h=r(t(43)),v=r(t(47));t(6);var m=r(t(5)),w=r(t(4)),b=r(t(7)),y=r(t(9));(0,p.default)(m.default);var g=(0,a.default)("manifest")||(0,c.default)("manifest")||"/manifest.json";(0,i.default)(g,o.bind(null,g)),(0,h.default)()},{10:10,13:13,17:17,19:19,23:23,28:28,30:30,34:34,4:4,42:42,43:43,47:47,48:48,5:5,56:56,58:58,6:6,7:7,9:9}],2:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if("complete"===document.readyState){var e=window.scrollY||window.pageYOffset,n=window.innerHeight,r=document.querySelector(".adorn-toolbar"),o=void 0,i=r&&r.offsetHeight||50,a=window.location.hash;if(a){var c=document.querySelector(a);if(c){var f=(0,l.default)(c)[1];if(f>e&&f<e+n)return}}if((0,u.default)(t,function(t){var n=(0,l.default)(t)[1]+i;if(e<n)return!0;o=t}),o){var s=o.getElementsByTagName("a")[0];s&&(s=s.getAttribute("href").replace(/^#/,"")),"history"in window&&"replaceState"in window.history&&window.location.hash!=="#"+s&&history.replaceState({},document.title,"#"+s),(0,p.default)()}}}Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(20)),u=r(t(36)),a=r(t(15)),c=r(t(41)),f=r(t(17)),l=r(t(21)),s=r(t(24)),d=r(t(42)),p=r(t(60)),h=r(t(44)),v=r(t(59)),m=new h.default;(0,d.default)(function(){var t=(0,i.default)("h1,h2");if(document.querySelector&&!(document.documentElement.className||"").match(/adorn-(nav|toc)-off/)){(0,i.default)(t,function(t){var e=(0,s.default)(t);t.insertBefore((0,f.default)("a",{name:e,href:"#"+e,"aria-label":"Jump to "+t.innerText,class:"adorn-anchor"}),t.firstChild)});var e=window.location.hash;if(e&&e.length>2){var n=document.querySelector(window.location.hash);n&&n.scrollIntoView()}t.length&&setTimeout(function(){(0,a.default)(document.documentElement,"adorn-toc-on")}),m.resolve(t);var r=(0,v.default)();(0,c.default)(window,"scroll",function(){(0,v.default)(o.bind(null,t),100,r)})}}),n.default=function(t){m.push(t)}},{15:15,17:17,20:20,21:21,24:24,36:36,41:41,42:42,44:44,59:59,60:60}],3:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=(0,a.default)("div",{class:"adorn-toc"}),n=(0,a.default)("select",{"aria-label":"menu"},[],e),r=[];(0,u.default)(n,"change",function(){window.location.hash=n.options[n.selectedIndex].value});var o=n;return(0,i.default)(t,function(t){var e=+t.tagName.match(/[0-9]/)[0],i=t.innerText||t.textContent||t.innerHTML,u=(0,c.default)(t);1===e&&(o=(0,a.default)("optgroup",{label:i},[],n)),(0,a.default)("option",{value:u},[i],o),r.push(u)}),(0,f.default)(function(t){n.selectedIndex=r.indexOf(t)}),e}Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(20)),u=r(t(41)),a=r(t(17)),c=r(t(24)),f=r(t(60)),l=r(t(2));n.default=function(t){(0,l.default)(function(e){if(!(e.lenth<2)){var n=o(e);t.appendChild(n)}})}},{17:17,2:2,20:20,24:24,41:41,60:60}],4:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=r(t(42)),i=r(t(17));n.default=function(t){t.author&&(0,o.default)(function(){var e=t.author.split(/\s*, \s*/);if(e){var n=["Authored by "];e[1]?n.push((0,i.default)("a",{href:e[1],rel:"author"},[e[0]])):n.push(e[0]),(0,i.default)("footer",{},n,document.body)}})}},{17:17,42:42}],5:[function(require,module,exports){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function tryitButton(pre,func){var btn=(0,_create2.default)("button",{class:"tryit"},["tryit"]);(0,_insertAfter2.default)(btn,pre),(0,_on2.default)(btn,"click",function(){if(func)func();else{if("function"==typeof tryit&&!tryit(pre.innerText))return;setTimeout(function(){return eval(pre.innerText)},100)}}),func||pre.setAttribute("contenteditable",!0)}Object.defineProperty(exports,"__esModule",{value:!0});var _each=require(20),_each2=_interopRequireDefault(_each),_on=require(41),_on2=_interopRequireDefault(_on),_create=require(17),_create2=_interopRequireDefault(_create),_insertAfter=require(25),_insertAfter2=_interopRequireDefault(_insertAfter);exports.default=function(){(0,_each2.default)("pre",function(t){"tryit"!==t.className&&"tryitoffline"!==t.className||tryitButton(t)}),(0,_each2.default)("script",function(t){var e=t.getAttribute("data-tryit");e&&tryitButton(t,window[e]),t.getAttribute("src")&&(0,_on2.default)(t,"click",function(){window.open(t.getAttribute("src"),"_blank")})}),(0,_each2.default)("link",function(t){t.getAttribute("href")&&(0,_on2.default)(t,"click",function(){window.open(t.getAttribute("href"),"_blank")})})}},{17:17,20:20,25:25,41:41}],6:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=r(t(42)),i=r(t(16));(0,o.default)(function(){(0,i.default)("a[target=_blank]:not([rel=noopener])",{rel:"noopener"})})},{16:16,42:42}],7:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){if(e<n)return(0,a.default)("ul",{},[],t);do{t=(0,f.default)(t,"ul")||t}while(t&&e-- >n);return t}Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(20)),u=r(t(15)),a=r(t(17)),c=r(t(33)),f=r(t(31)),l=r(t(35)),s=r(t(60)),d=r(t(2)),p=r(t(24));n.default=function(){(0,d.default)(function(t){if(t.length<2)(0,u.default)(document.documentElement,"adorn-sidebar-off");else{var e=0,n=(0,c.default)("aside",{class:"adorn-sidebar"}),r={};(0,i.default)(t,function(t){var i=+t.tagName.match(/[0-9]/)[0],u=o(n,e,i);e=i;var c=t.innerText||t.textContent||t.innerHTML,f=(0,p.default)(t);r[f]=n=(0,a.default)("li",{},[(0,a.default)("a",{href:"#"+f},[c])],u)}),(0,s.default)(function(t){var e=r[t];e&&((0,l.default)(".adorn-sidebar .selected","selected"),(0,u.default)(e,"selected"))})}})}},{15:15,17:17,2:2,20:20,24:24,31:31,33:33,35:35,60:60}],8:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.github_btn=function(t){var e=[],n=t.paths;if(t.github){var r=t.github;if(!r.match("/")&&n.length&&(r+="/"+n[0].replace(/\/$/,"")),r.match("/")){var u="https://github.com/"+r,f=h("source")||(window.location.pathname||"").replace(/^\/?([^/]+)/g,"").replace(/\/$/,"index.html").replace(/^\//,"");e.push((0,a.default)("a",{href:(0,p.default)(f,u+"/blob/master/"),target:"_blank",rel:"noopener",id:"adorn-edit"},["Edit this page"]),(0,a.default)("span"),(0,a.default)("a",{href:""+u,target:"_blank",rel:"noopener",title:"Stars",id:"adorn-github-button"},[(0,a.default)("i",{class:"adorn-icon-github"}),(0,a.default)("span",{class:"adorn-speeach-bubble"})])),(0,i.default)("https://api.github.com/repos/"+r+"?callback=?",function(t){t&&t.data&&t.data.watchers&&(0,o.default)(".adorn-github-button span.adorn-speeach-bubble",function(e){e.innerHTML=t.data.watchers||""})})}}return c.default.apply(void 0,e)},n.twitter_btn=function(t){var e=[],n=t["twitter:creator"]||(0,l.default)("twitter:creator");if(n){var r=(0,a.default)("a",{href:"https://twitter.com/share",class:"adorn-twitter-button",target:"_blank",rel:"noopener","data-via":n.replace("@",""),title:"Tweet"},[(0,a.default)("i",{class:"adorn-icon-twitter"})]);return e.push(r,(0,a.default)("a",{href:"https://twitter.com/search?ref_src=twsrc%5Etfw&q="+encodeURIComponent(v),class:"adorn-twitter-count",rel:"noopener","aria-label":"Twitter comments",target:"_blank"},[(0,a.default)("i",{class:"adorn-speeach-bubble"})])),(0,i.default)("https://cdn.syndication.twitter.com/widgets/tweetbutton/count.json?url="+encodeURIComponent(v),function(t){t&&(0,o.default)(".adorn-twitter-count span.adorn-speeach-bubble",function(e){e.innerHTML=t.count||"",e.title="This page has been shared "+t.count+" times, view these tweets"})}),(0,u.default)(r,"click",function(e){e.preventDefault();var r={width:550,height:250},o={text:document.title,via:n.replace("@",""),url:window.location.href.replace(/#.*/,"")},i=(0,l.default)("twitter:hashtag")||t["twitter:hashtag"];i&&(o.hashtag=i),(0,d.default)("https://twitter.com/intent/tweet?"+(0,f.default)(o),"twitter",r)}),c.default.apply(void 0,e)}},n.share_btn=function(){if("share"in navigator){var t=[],e=(0,a.default)("button",{class:"adorn-icon-share",target:"_blank",rel:"noopener",title:"Share"});return t.push(e),(0,u.default)(e,"click",function(){navigator.share({title:document.title,text:document.title,url:location.href}).then(function(){e.style.color="green"}).catch(function(){e.style.color="red"})}),c.default.apply(void 0,t)}};var o=r(t(20)),i=r(t(14)),u=r(t(41)),a=r(t(17)),c=r(t(22)),f=r(t(52)),l=r(t(30)),s=r(t(34)),d=r(t(61)),p=r(t(48)),h=function(){var t=(0,s.default)("link[rel=source]");if(t)return t.getAttribute("href")},v=window.location.href},{14:14,17:17,20:20,22:22,30:30,34:34,41:41,48:48,52:52,61:61}],9:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=r(t(17)),i=r(t(62)),u=r(t(50)),a=r(t(26)),c=r(t(3)),f=t(8);n.default=function(t){var e=window.location.pathname||"",n=(0,i.default)(t.root).pathname,r=(e=(e=(0,u.default)(e,n)).replace(/^\//g,"")).split(/([^/]+\/?)/).filter(function(t){return!!t});t.paths=r;var l=[(0,o.default)("a",{href:t.root},[(0,o.default)("img",{src:t.favicon,alt:window.location.hostname,title:t.name})])];r.forEach(function(e,n){var i=t.root+r.slice(0,n+1).join(""),u=e.replace(/\.(html?)$/,"");l.push(" ",(0,o.default)("a",{href:i},[u]))});var s=(0,o.default)("div",{class:"adorn-breadcrumbs"},l),d=(0,o.default)("div",{class:"adorn-links"},[(0,f.github_btn)(t),(0,o.default)("span"),(0,f.twitter_btn)(t),(0,o.default)("span"),(0,f.share_btn)(t)]),p=(0,o.default)("aside",{class:"adorn-toolbar"},[s,d]);(0,a.default)(p,document.body.firstElementChild||document.body.firstChild),(0,c.default)(s)}},{17:17,26:26,3:3,50:50,62:62,8:8}],10:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=r(t(26)),i=r(t(17));(0,r(t(34)).default)("meta[name=viewport]")||(0,o.default)((0,i.default)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),document.getElementsByTagName("script")[0])},{17:17,26:26,34:34}],11:[function(t,e,n){"use strict";e.exports=function(t){return Array.prototype.slice.call(t)}},{}],12:[function(t,e,n){"use strict";var r=t(18),o=t(37);e.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=0,u=void 0,a=document.getElementsByTagName("script")[0].parentNode,c=function(t){!i++&&e&&e(t),u&&clearTimeout(u)};n&&(u=window.setTimeout(function(){c(o("timeout"))},n));var f=r("script",{src:t,onerror:c,onload:c,onreadystatechange:function(){/loaded|complete/i.test(f.readyState)&&c(o("load"))}});return f.async=!0,a.insertBefore(f,a.firstChild),f}},{18:18,37:37}],13:[function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=t(49),i=t(46);e.exports=function(t,e){var n=new XMLHttpRequest;n.onload=function(){var t="object"===r(n.response)?n.response:o(n.response);e(t)},n.onerror=e,n.open("GET",t),"responseType"in n&&i(function(){return n.responseType="json"}),n.send()}},{46:46,49:49}],14:[function(t,e,n){"use strict";var r=t(39),o=t(12),i=/=\?(&|$)/;e.exports=function(t,e,n){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6e4,a=void 0;n=r(function(t){return a=t,!0},n),t=t.replace(i,"="+n+"$1");var c=o(t,function(){e(a),c.parentNode.removeChild(c)},u);return c}},{12:12,39:39}],15:[function(t,e,n){"use strict";var r=t(20),o=t(23);e.exports=function(t,e){return r(t,function(t){o(t,e)||(t.className+=" "+e)})}},{20:20,23:23}],16:[function(t,e,n){"use strict";var r=t(20);e.exports=function(t,e){return r(t,function(t){for(var n in e){var r=e[n];"function"==typeof r?t[n]=r:t.setAttribute(n,r)}})}},{20:20}],17:[function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i="string"==typeof t?document.createElement(t):t;for(var u in e)if(e.hasOwnProperty(u))if("text"===u)i.appendChild(document.createTextNode(e[u]));else if("html"===u)"string"==typeof e[u]?i.innerHTML=e[u]:i.appendChild(e[u]);else if("object"===r(e[u]))for(var a in e[u])e[u].hasOwnProperty(a)&&(i[u][a]=e[u][a]);else i.setAttribute(u,e[u]);return n.forEach(function(t){"string"==typeof t&&(t=document.createTextNode(t)),t&&i.appendChild(t)}),o&&o.appendChild(i),i}},{}],18:[function(t,e,n){"use strict";var r=t(16);e.exports=function(t,e){var n=document.createElement(t);return r(n,e),n}},{16:16}],19:[function(t,e,n){"use strict";e.exports=document.documentElement||document.body.parentNode},{}],20:[function(t,e,n){"use strict";var r=t(27),o=t(45),i=t(11);e.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return r(t)?t=[t]:"string"==typeof t&&(t=document.querySelectorAll(t)),o(t,Array)||(t=i(t)),e&&t.forEach(e),t}},{11:11,27:27,45:45}],21:[function(t,e,n){"use strict";e.exports=function(t){var e=0,n=0;if(t.offsetParent)do{e+=t.offsetLeft,n+=t.offsetTop}while(t=t.offsetParent);return[e,n]}},{}],22:[function(t,e,n){"use strict";e.exports=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=document.createDocumentFragment();return e.forEach(function(t){return r.appendChild(t)}),r}},{}],23:[function(t,e,n){"use strict";var r=t(36);e.exports=function(t,e){var n=new RegExp("(^|\\s)"+e+"($|\\s)","i");return r(t,function(t){return(t.className||"").match(n)})}},{36:36}],24:[function(t,e,n){"use strict";e.exports=function(t){if(t.id)return t.id;var e=(t.innerText||t.textContent||t.innerHTML).toLowerCase().replace(/\s/g,"-").replace(/[^a-z0-9_-]/g,"");return t.id=e,e}},{}],25:[function(t,e,n){"use strict";e.exports=function(t,e){e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}},{}],26:[function(t,e,n){"use strict";e.exports=function(t,e){return e.parentNode.insertBefore(t,e)}},{}],27:[function(t,e,n){"use strict";var r=t(45),o="undefined"!=typeof HTMLElement&&HTMLElement||"undefined"!=typeof Element&&Element,i="undefined"!=typeof HTMLDocument&&HTMLDocument||"undefined"!=typeof Document&&Document,u=window.constructor;e.exports=function(t){return r(t,o)||r(t,i)||r(t,u)}},{45:45}],28:[function(t,e,n){"use strict";var r=t(46),o=t(34);e.exports=function(t){return r(function(){return o('link[rel="'+t+'"]').href})}},{34:34,46:46}],29:[function(t,e,n){"use strict";var r=t(36),o=document.createElement("div"),i=o.matches||o.mozMatchesSelector||o.webkitMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;e.exports=function(t,e){var n=e;return"string"==typeof e&&(n=function(t){return i.call(t,e)}),r(t,n)}},{36:36}],30:[function(t,e,n){"use strict";var r=t(46),o=t(34);e.exports=function(t){return r(function(){return o('meta[name="'+t+'"]').content})}},{34:34,46:46}],31:[function(t,e,n){"use strict";var r=t(32);e.exports=function(t,e){var n=r(t,e);return n.length?n[0]:null}},{32:32}],32:[function(t,e,n){"use strict";var r=t(20),o=t(29),i=t(19);e.exports=function(t,e){var n=[];return r(t,function(t){for(;t&&t.parentNode&&((t=t.parentNode)===document&&(t=i),o(t,e)&&n.push(t),t!==i););}),n}},{19:19,20:20,29:29}],33:[function(t,e,n){"use strict";var r=t(18);e.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.body,o=r(t,e);return n.insertBefore(o,n.firstChild),o}},{18:18}],34:[function(t,e,n){"use strict";e.exports=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(t)}},{}],35:[function(t,e,n){"use strict";var r=t(20);e.exports=function(t,e){var n=new RegExp("(^|\\s)"+e+"($|\\s)","ig");return r(t,function(t){t.className=t.className.replace(n," ")})}},{20:20}],36:[function(t,e,n){"use strict";var r=t(20);e.exports=function(t,e){var n=void 0;return r(t,function(t){n||(n=e(t))}),n}},{20:20}],37:[function(t,e,n){"use strict";var r={bubbles:!0,cancelable:!0},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return new Event(t,e)};try{o("test")}catch(t){o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=document.createEvent("Event");return n.initEvent(t,!!e.bubbles,!!e.cancelable),n}}e.exports=o},{}],38:[function(t,e,n){"use strict";var r=t(41),o=t(40),i=t(29);e.exports=function(t,e,n){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document,a=function(e){for(var r=e.target;r;){if(i(r,t)){e.delegateTarget=r,n(e);break}r=r.parentNode}};return r(u,e,a),{remove:function(){return o(u,e,a)}}}},{29:29,40:40,41:41}],39:[function(t,e,n){"use strict";function r(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];e.apply(void 0,r)&&delete window[t]}var o=t(53);e.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_tricks_";return e=e||n+o(),window[e]=r.bind(null,e,t),e}},{53:53}],40:[function(t,e,n){"use strict";var r=t(20),o=/[\s,]+/;e.exports=function(t,e,n){return e=e.split(o),r(t,function(t){return e.forEach(function(e){return t.removeEventListener(e,n)})})}},{20:20}],41:[function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=t(20),i=/[\s,]+/,u=!1;try{var a=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("test",null,a)}catch(t){}e.exports=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return"object"===(void 0===a?"undefined":r(a))&&a.passive&&!u&&(a=!1),e=e.split(i),o(t,function(t){return e.forEach(function(e){return t.addEventListener(e,n,a)})})}},{20:20}],42:[function(t,e,n){"use strict";var r=t(41);e.exports=function(t){"loading"!==document.readyState&&document.body?t():r(document,"DOMContentLoaded",t)}},{41:41}],43:[function(t,e,n){"use strict";var r=t(38),o=t(55);e.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!o)return!1;r("a","click",function(t){var e=t.delegateTarget;e.href&&e.href.match(/^https?:\/\//)&&(t.preventDefault(),window.open(e.href,"_system"))},t)}},{38:38,55:55}],44:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.exports=function(){function t(){r(this,t),this.items=[],this.state="pending",this.response=null,this.push.apply(this,arguments)}return o(t,[{key:"push",value:function(){var t,e=this;(t=this.items).push.apply(t,arguments),"pending"!==this.state&&(this.items.forEach(function(t){return t(e.response)}),this.length=0)}},{key:"resolve",value:function(t){this.state="resolved",this.response=t,this.push()}},{key:"length",get:function(){return this.items.length},set:function(t){return this.items.length=t}}]),t}()},{}],45:[function(t,e,n){"use strict";e.exports=function(t,e){return e&&t instanceof e}},{}],46:[function(t,e,n){"use strict";e.exports=function(t){try{return t.call(null)}catch(t){}}},{}],47:[function(t,e,n){"use strict";var r=t(12);e.exports=function(t){window._gaq=window._gaq||[],_gaq.push(["_setAccount",t]),_gaq.push(["_trackPageview"]),r(("https:"===document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js")}},{12:12}],48:[function(t,e,n){"use strict";e.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"./";if(!t)return"";try{return new URL(t,new URL(e,window.location)).href||t}catch(e){return t}}},{}],49:[function(t,e,n){"use strict";var r=t(46);e.exports=function(t){return r(function(){return JSON.parse(t)})}},{46:46}],50:[function(t,e,n){"use strict";e.exports=function(t,e){return e&&0===t.indexOf(e)?t.slice(e.length):t}},{}],51:[function(t,e,n){"use strict";e.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"=",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t){return t};return Object.keys(t).map(function(e){var o=r(t[e]);return e+(null!==o?n+o:"")}).join(e)}},{}],52:[function(t,e,n){"use strict";var r=t(51),o=function(t){return"?"===t?"?":encodeURIComponent(t)};e.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return r(t,"&","=",e)}},{51:51}],53:[function(t,e,n){"use strict";e.exports=function(){return parseInt(1e12*Math.random(),10).toString(36)}},{}],54:[function(t,e,n){"use strict";e.exports=function(t,e){document.documentElement.className=document.documentElement.className+" "+(e?"":"no-")+t}},{}],55:[function(t,e,n){"use strict";var r=t(57),o=/^file:\/{3}[^/]/i.test(window.location.href);e.exports=r&&o},{57:57}],56:[function(t,e,n){"use strict";"header,section,datalist,option,footer,nav,menu,aside,article,style,script".split(",").forEach(function(t){return document.createElement(t)})},{}],57:[function(t,e,n){"use strict";var r=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);e.exports=r},{}],58:[function(t,e,n){"use strict";var r=t(54),o="ontouchstart"in window;r("touch",o),e.exports=o},{54:54}],59:[function(t,e,n){"use strict";var r=1,o={};e.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r++;return n&&o[n]&&(clearTimeout(o[n]),delete o[n]),t&&(o[n]=setTimeout(function(){t()},e)),n}},{}],60:[function(t,e,n){"use strict";function r(){var t=window.location.hash.substr(1);o.forEach(function(e){e.call(null,t)})}var o=[];t(41)(window,"hashchange",r),e.exports=function(t){t?o.push(t):r()}},{41:41}],61:[function(t,e,n){"use strict";function r(t){var e=o(t,2),n=e[0],r=e[1],i=n.toLowerCase(),a=r.toLowerCase();if(this[a]&&!(i in this)){var c=void 0!==window["screen"+n]?window["screen"+n]:screen[i],f=screen[a]||window["inner"+r]||u["client"+r];this[i]=parseInt((f-this[a])/2,10)+c}}var o=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=t(51),u=document.documentElement,a=[["Top","Height"],["Left","Width"]];e.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.forEach(r.bind(n)),window.open(t,e,i(n,","))}},{51:51}],62:[function(t,e,n){"use strict";e.exports=function(t){if(t){if(window.URL&&URL instanceof Function&&0!==URL.length)return new URL(t,window.location);var e=document.createElement("a");return e.href=t,e.cloneNode(!1)}return window.location}},{}]},{},[1]);
//# sourceMappingURL=adorn.js.map
