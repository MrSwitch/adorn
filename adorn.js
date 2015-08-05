!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";var _utilsEach=require("./utils/each"),_utilsJson=require("./utils/json"),_utilsJsonp=require("./utils/jsonp"),_utilsRURL=require("./utils/rURL"),_utilsUntil=require("./utils/until"),_utilsDomAddClass=require("./utils/dom/addClass"),_utilsDomAddEvent=require("./utils/dom/addEvent"),_utilsDomCreate=require("./utils/dom/create"),_utilsDomFindPos=require("./utils/dom/findPos"),_utilsDomId=require("./utils/dom/id"),_utilsDomInsertBefore=require("./utils/dom/insertBefore"),_utilsDomInsertAfter=require("./utils/dom/insertAfter"),_utilsDomMeta=require("./utils/dom/meta"),_utilsDomReady=require("./utils/dom/ready"),_utilsDomRemoveClass=require("./utils/dom/removeClass");!function(window,document,encodeURIComponent){function buildToolbar(base,manifest){if(!document.body)return void _utilsDomReady.ready(buildToolbar.bind(null,base,manifest));manifest=manifest||{},manifest.favicon=_utilsDomMeta.meta("favicon")||_utilsRURL.rURL(manifest.favicon,base)||"/favicon.ico",manifest.author=_utilsDomMeta.meta("author")||manifest.author,manifest.root=_utilsRURL.rURL(manifest.root||"/",base);var repo_path,paths=(window.location.pathname||"").replace(/^\//g,"").split(/([^\/]+\/?)/).filter(function(s){return!!s}),url=window.location.href,social_btns=[],breadcrumbs=['<a href="'+manifest.root+'"><img src="'+manifest.favicon+'" alt="'+window.location.hostname+'" title="'+manifest.name+'"/></a>'];if(_utilsEach.each(paths,function(val,index){breadcrumbs.push('<a href="/'+paths.slice(0,index+1).join("")+'">'+val.replace(/\.(html?)$/,"")+"</a>")}),manifest.github&&paths.length){var repo_file=(window.location.pathname||"").replace(/^\/?([^\/]+)/g,"").replace(/\/$/,"/index.html"),repo=paths[0].replace(/\/$/,"");repo_path="https://github.com/"+manifest.github+"/"+repo,social_btns=['<a href="'+repo_path+"/blob/master"+repo_file+'" target="_blank" id="adorn-edit">Edit this page</a>','<a href="'+repo_path+'" class="adorn-github-button" target="_blank" title="Stars"><i class="adorn-icon-github"></i><span class="adorn-speeach-bubble"></span></a>'],_utilsJsonp.jsonp("https://api.github.com/repos/"+manifest.github+"/"+repo+"?",function(r){_utilsEach.each(".adorn-github-button span.adorn-speeach-bubble",function(){this.innerHTML=r.data.watchers||""})})}var twitter_creator=manifest["twitter:creator"]||_utilsDomMeta.meta("twitter:creator");twitter_creator&&(social_btns.push(['<a href="https://twitter.com/share" class="adorn-twitter-button" target="_blank" data-via="'+twitter_creator.replace("@","")+'" title="Tweet"><i class="adorn-icon-twitter"></i></a>','<a href="https://twitter.com/search?ref_src=twsrc%5Etfw&q='+encodeURIComponent(url)+'" class="adorn-twitter-count" target="_blank"><span class="adorn-speeach-bubble"></span></a>'].join("")),_utilsJsonp.jsonp("https://cdn.syndication.twitter.com/widgets/tweetbutton/count.json?url="+encodeURIComponent(url),function(r){_utilsEach.each(".adorn-twitter-count span.adorn-speeach-bubble",function(){this.innerHTML=r.count||"",this.title="This page has been shared "+r.count+" times, view these tweets"})})),_utilsDomInsertBefore.insertBefore(_utilsDomCreate.create("aside",{"class":"adorn-toolbar",html:'<div class="adorn-breadcrumbs"> '+breadcrumbs.join(" ")+'</div> <div class="adorn-links">'+social_btns.join("<span></span>")+' <div class="clearfix"></div></div>'}),document.body.firstElementChild||document.body.firstChild),_utilsDomAddEvent.addEvent(".adorn-twitter-button","click",function(e){var hashtag;e.preventDefault();var w=550,h=250,l=screen.width/2-w/2,t=screen.height/2-h/2,hashtag=_utilsDomMeta.meta("twitter:hashtag")||manifest["twitter:hashtag"];window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(document.title)+(hashtag?"&hashtags="+hashtag:"")+"&via="+this.getAttribute("data-via")+"&url="+encodeURIComponent(window.location.href.replace(/#.*/,"")),"twitter","width="+w+",height="+h+",left="+l+"px,top="+t+"px")}),_utilsDomReady.ready(buildNav),manifest.author&&_utilsDomReady.ready(function(){var author=manifest.author.split(/\s*,\s*/);author&&document.body.appendChild(_utilsDomCreate.create("footer",{html:"Authored by "+(author[1]?'<a href="'+author[1]+'" rel="author">'+author[0]+"</a>":author[0])}))}),function(){var tracking=manifest["ga:tracking"]||_utilsDomMeta.meta("ga:tracking");if(tracking){this._gaq=this._gaq||[],_gaq.push(["_setAccount",tracking]),_gaq.push(["_trackPageview"]);var ga=document.createElement("script");ga.type="text/javascript",ga.async=!0,ga.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",_utilsDomInsertBefore.insertBefore(ga,document.getElementsByTagName("script")[0])}}()}function buildNav(){function hashChange(){select.selectedIndex=options.indexOf(window.location.hash.substr(1))}var headings=_utilsEach.each("h1,h2");if(document.querySelector&&!(document.documentElement.className||"").match(/adorn-(nav|toc)-off/)&&(_utilsEach.each(headings,function(tag){var ref=_utilsDomId.id(tag);tag.insertBefore(_utilsDomCreate.create("a",{name:ref,href:"#"+ref,"class":"adorn-anchor"}),tag.firstChild)}),!(headings.length<2))){var toc=_utilsDomCreate.create("div",{"class":"adorn-toc"});document.querySelector(".adorn-breadcrumbs").appendChild(toc);var select=_utilsDomCreate.create("select"),options=[];_utilsDomAddEvent.addEvent(select,"change",function(){window.location.hash=select.options[select.selectedIndex].value}),toc.appendChild(select);var _group=select;_utilsEach.each(headings,function(tag){var depth=parseInt(tag.tagName.match(/[0-9]/)[0],10),text=tag.innerText||tag.textContent||tag.innerHTML,ref=_utilsDomId.id(tag);1===depth&&(_group=_utilsDomCreate.create("optgroup",{label:text}),select.appendChild(_group)),_group.appendChild(_utilsDomCreate.create("option",{html:text,value:ref})),options.push(ref)}),toc&&setTimeout(function(){_utilsDomAddClass.addClass(document.documentElement,"adorn-toc-on")}),_utilsDomAddEvent.addEvent(window,"hashchange",hashChange);var toolbar_height=document.querySelector(".adorn-toolbar").offsetHeight||50;if(_utilsDomAddEvent.addEvent(window,"scroll",function(e){{var tag,T=window.scrollY||window.pageYOffset;"screen"in window?window.screen.availHeight:500}if(_utilsUntil.until(headings,function(anchor){var t=_utilsDomFindPos.findPos(anchor)[1]-toolbar_height;return t>T?!0:void(tag=anchor)}),tag){var ref=(tag.innerText||tag.innerHTML,tag.getElementsByTagName("a")[0]);ref&&(ref=ref.getAttribute("href").replace(/^#/,"")),"history"in window&&"replaceState"in window.history&&window.location.hash!=="#"+ref&&history.replaceState({},document.title,"#"+ref),hashChange()}}),toc){var clist=toc.classList;if(clist){var tocY=_utilsDomFindPos.findPos(toc)[1];_utilsDomAddEvent.addEvent(window,"scroll",function(e){var sY=window.scrollY||window.pageYOffset;sY>tocY?clist.add("adorn-float"):clist.remove("adorn-float")})}}}}_utilsDomAddClass.addClass(document.documentElement," "+("ontouchstart"in window?"":"no-")+"touch"),_utilsEach.each("header,section,datalist,option,footer,nav,menu,aside,article,style,script".split(","),function(tag){document.createElement(tag)}),_utilsDomInsertBefore.insertBefore(_utilsDomCreate.create("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),document.getElementsByTagName("script")[0]);var manifest_json=_utilsDomMeta.meta("manifest")||"/manifest.json";_utilsJson.json(manifest_json,buildToolbar.bind(null,manifest_json)),_utilsDomReady.ready(function(){function tryitButton(pre,func){var btn=_utilsDomCreate.create("button",{html:"tryit","class":"tryit"});_utilsDomInsertAfter.insertAfter(btn,pre),_utilsDomAddEvent.addEvent(btn,"click",function(){if(func)func();else{if("function"==typeof tryit&&!tryit(pre.innerText))return;setTimeout(function(){eval(pre.innerText)},100)}}),func||pre.setAttribute("contenteditable",!0)}_utilsEach.each("pre",function(pre){("tryit"===pre.className||"tryitoffline"===pre.className)&&tryitButton(pre)}),_utilsEach.each("script",function(script){var func=script.getAttribute("data-tryit");func&&tryitButton(script,window[func]),script.getAttribute("src")&&_utilsDomAddEvent.addEvent(script,"click",function(){window.open(script.getAttribute("src"),"_blank")})}),_utilsEach.each("link",function(script){script.getAttribute("href")&&_utilsDomAddEvent.addEvent(script,"click",function(){window.open(script.getAttribute("href"),"_blank")})})})}(window,document,encodeURIComponent)},{"./utils/dom/addClass":2,"./utils/dom/addEvent":3,"./utils/dom/create":4,"./utils/dom/findPos":5,"./utils/dom/id":6,"./utils/dom/insertAfter":7,"./utils/dom/insertBefore":8,"./utils/dom/meta":9,"./utils/dom/ready":10,"./utils/dom/removeClass":11,"./utils/each":12,"./utils/json":13,"./utils/jsonp":14,"./utils/rURL":15,"./utils/until":16}],2:[function(require,module,exports){"use strict";function addClass(elm,className){var reg=new RegExp("(^|\\s)"+className+"($|\\s)","i");elm.className.match(reg)||(elm.className+=" "+className)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addClass=addClass},{}],3:[function(require,module,exports){"use strict";function addEvent(obj,eventName,listener){return obj instanceof window.NodeList||"string"==typeof obj?void _each.each(obj,function(elm){addEvent(elm,eventName,listener)}):eventName===!0?void listener():void(obj&&(obj.addEventListener?obj.addEventListener(eventName,listener,!1):obj.attachEvent&&("DOMContentLoaded"===eventName&&(eventName="readystatechange",_listener=listener,listener=function(){"complete"===obj.readyState&&_listener()}),obj.attachEvent("on"+eventName,listener))))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addEvent=addEvent;var _each=require("../each")},{"../each":12}],4:[function(require,module,exports){"use strict";function create(node,attr){var n="string"==typeof node?document.createElement(node):node;if("object"==typeof attr)if("tagName"in attr)target=attr;else for(var x in attr)if(attr.hasOwnProperty(x))if("text"===x)n.appendChild(document.createTextNode(attr[x]));else if("html"===x)"string"==typeof attr[x]?n.innerHTML=attr[x]:n.appendChild(attr[x]);else if("object"==typeof attr[x])for(var y in attr[x])attr[x].hasOwnProperty(y)&&(n[x][y]=attr[x][y]);else n.setAttribute(x,attr[x]);return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.create=create},{}],5:[function(require,module,exports){"use strict";function findPos(obj){var curleft=0,curtop=0;if(obj.offsetParent)do curleft+=obj.offsetLeft,curtop+=obj.offsetTop;while(obj=obj.offsetParent);return[curleft,curtop]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.findPos=findPos},{}],6:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var id=function(tag){if(tag.id)return tag.id;var text=tag.innerText||tag.textContent||tag.innerHTML,ref=text.toLowerCase().replace(/\s/g,"-").replace(/[^a-z0-9\_\-]/g,"");return tag.id=ref,ref};exports.id=id},{}],7:[function(require,module,exports){"use strict";function insertAfter(el,ref){ref.nextSibling?ref.parentNode.insertBefore(el,ref.nextSibling):ref.parentNode.appendChild(el)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.insertAfter=insertAfter},{}],8:[function(require,module,exports){"use strict";function insertBefore(el,ref){ref.parentNode.insertBefore(el,ref)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.insertBefore=insertBefore},{}],9:[function(require,module,exports){"use strict";function meta(name){var content;try{content=document.querySelector('meta[name="'+name+'"]').content}catch(e){}return content}Object.defineProperty(exports,"__esModule",{value:!0}),exports.meta=meta},{}],10:[function(require,module,exports){"use strict";function ready(callback){"loading"!==document.readyState&&document.body?callback():_addEvent.addEvent(document,"DOMContentLoaded",callback)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ready=ready;var _addEvent=require("./addEvent")},{"./addEvent":3}],11:[function(require,module,exports){"use strict";function removeClass(elm,className){var reg=new RegExp("(^|\\s)+"+className+"($|\\s)+","i");elm.className=elm.className.replace(reg," ")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeClass=removeClass},{}],12:[function(require,module,exports){"use strict";function each(matches,callback){if("string"==typeof matches&&(matches=document.querySelectorAll(matches)),callback)for(var i=0;i<matches.length;i++)callback.call(matches[i],matches[i],i);return matches||[]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.each=each},{}],13:[function(require,module,exports){"use strict";function json(url,callback){var x=new XMLHttpRequest;x.onload=function(){var v;try{v=JSON.parse(x.response)}catch(e){}callback(v)},x.onerror=callback,x.open("GET",url),x.send()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.json=json},{}],14:[function(require,module,exports){"use strict";function jsonp(url,callback){var callback_name="jsonp_document_"+counter++;window[callback_name]=callback;var sibling=document.getElementsByTagName("script")[0],script=document.createElement("script");script.src=url+"&callback="+callback_name,script.async=!0,sibling.parentNode.insertBefore(script,sibling)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.jsonp=jsonp;var counter=0},{}],15:[function(require,module,exports){"use strict";function rURL(path,relative){if(!path)return"";try{return new URL(path,new URL(relative,window.location)).href}catch(e){return path}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.rURL=rURL},{}],16:[function(require,module,exports){"use strict";function until(matches,callback){var b=!1;_each.each(matches,function(item){b||(b=callback.call(item,item))})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.until=until;var _each=require("./each")},{"./each":12}]},{},[1]);
//# sourceMappingURL=adorn.js.map