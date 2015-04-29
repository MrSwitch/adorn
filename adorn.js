/**
 * adorn.js
 * Adds document navigation to a page.
 */

(function(window, document){

	// JSONP COUNTER
	var jsonp_counter = 0;
	window.jsonp = jsonp;


	// Touch exists?
	document.documentElement.className += (' ' + ( "ontouchstart" in window ? '' : 'no-') + 'touch');


	// fix HTML5 in IE
	var a = "header,section,datalist,option,footer,nav,menu,aside,article,style,script".split(",");
	for( var i=0;i<a.length;i++){
		document.createElement(a[i]);
	}

	// Add mobile ag to page.

	// Insert Meta Tag
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(create('meta',{
		name:'viewport',
		content:'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
	}), s);


	// ///////////////////////////////////
	// TOOLBAR
	// ///////////////////////////////////

	function buildToolbar(manifest){

		if(!document.body){
			// Just in case...
			ready(buildToolbar.bind(null, manifest));
			return;
		}

		// Set bench
		manifest = manifest || {};

		// Favicon
		manifest.favicon = meta("favicon") || manifest.favicon || "/favicon.ico";

		// Author
		manifest.author = meta("author") || manifest.author;

		//
		// Build toolbar
		// 
		var repo_path,
			paths = (window.location.pathname||'').replace(/^\/|\/$|\.html?$/g,'').split(/\//),
			repo = paths[0];

		var url = window.location.href,
			social_btns = [],
			breadcrumbs = ['<a href="/"><img src="'+ manifest.favicon +'" alt="' + window.location.hostname + '" title="' + manifest.author + '"/></a>'];

		each( paths, function(val, index){
			if(!val) return;
			breadcrumbs.push( '<a href="/'+ paths.slice(0,index+1).join('/') +'/">'+ val +'</a>' );
		});


		// GITHUB

		if( manifest.github && repo ){
			// Get the location of this file in the repo
			var repo_file = (window.location.pathname||'').replace(/^\/?([^\/]+)/g,'').replace(/\/$/, '/index.html');

			repo_path = "https://github.com/"+manifest.github+"/"+repo;
			social_btns = [
				'<a href="'+repo_path+'/blob/master'+ repo_file +'" target="_blank" id="adorn-edit">Edit this page</a>',
				'<a href="'+repo_path+'" class="github-star-button" target="_blank" title="Stars"><i class="icon-github"></i><span class="speeach-bubble"></span></a>',
			];


			// Install the GitHub widget
			// Probably could make this a little more ajaxy
			jsonp('https://api.github.com/repos/'+ manifest.github +'/'+repo+'?',function(r){
				// Add value to twitter icon
				// Add value to twitter icon
				each('.github-star-button span.speeach-bubble', function(){
					this.innerHTML = r.data.watchers || '';
				});
			});
		}


		// TWITTER

		var twitter_creator = manifest['twitter:creator'] || meta("twitter:creator");

		if (twitter_creator) {
			social_btns.push('<a href="https://twitter.com/share" class="twitter-share-button" target="_blank" data-via="'+ twitter_creator.replace('@','') +'" title="Tweet"><i class="icon-twitter"></i><span class="speeach-bubble"></span></a>');

			if(window.location.href.indexOf('http://')===0){
				// Probably could make this a little more ajaxy
				jsonp('http://urls.api.twitter.com/1/urls/count.json?url='+encodeURIComponent(url),function(r){
					// Add value to twitter icon
					each('.twitter-share-button span.speeach-bubble', function(){
						this.innerHTML = r.count || '';
					});
				});
			}
		}


		document.body.insertBefore(create('aside',{
			'class' : 'toolbar',
			'html' : '<div class="breadcrumbs"> '+breadcrumbs.join(' ') +'</div> <div>'+ social_btns.join('<span class="period"></span>') +' <div class="clearfix"></div></div>'
		}),document.body.firstElementChild||document.body.firstChild);



		//
		// Add event to twitter button
		addEvent('.twitter-share-button','click',function(e){
			
			var hashtag;

			e.preventDefault();

			var w = 550,
				h = 250,
				l = (screen.width/2)-(w/2),
				t = (screen.height/2)-(h/2);

			var hashtag = meta("twitter:hashtag") || manifest['twitter:hashtag'];

			window.open("https://twitter.com/intent/tweet?text="+ encodeURIComponent( document.title ) + (hashtag ? '&hashtags=' + hashtag : '') + "&via=" + this.getAttribute('data-via') + "&url="+ encodeURIComponent(window.location.href.replace(/#.*/,'')), 'twitter', 'width='+w+',height='+h+',left='+l+'px,top='+t+'px');
		});


		// ///////////////////////////////////
		// FOOTER
		// ///////////////////////////////////

		ready(function(){

			var author = manifest.author.split(/\s*,\s*/);

			if ( author ) {
				// Add Footer link to repo
				document.body.appendChild(create('footer',{
						html : 'Authored by ' + ( author[1] ? '<a href="'+author[1]+'" rel="author">'+author[0]+'</a>' : author[0] )
					}
				));
			}

		});

	}

	// Manifest
	var manifest = meta("manifest") || "/manifest.json";

	// Set the toolbar, doesn't work if document body is undefined
	json( manifest, buildToolbar);




	// ///////////////////////////////////
	// NAVIGATION
	// ///////////////////////////////////

	ready(function(){

		var pres, i;

		//
		function tryitButton(pre,func){
			var btn = create('button',{html:'tryit','class':'tryit'});
			insertAfter(btn, pre);

			addEvent(btn, 'click', function(){
				if(func){
					func();
				}
				else if(typeof(tryit)==='function'&&!tryit(pre.innerText)){
					return;
				}else{
					setTimeout( function(){ eval(pre.innerText); }, 100);
				}
			});

			if(!func){
				pre.setAttribute('contenteditable', true);
			}
		}


		// TryIt
		each('pre', function(pre){
			if(pre.className === 'tryit'||pre.className === 'tryitoffline'){
				// Create a button and insert it after the pre tag
				tryitButton(pre);
			}
		});

		// TryIt, View
		each('script', function(script){
			var func = script.getAttribute('data-tryit');
			if(func){
				// Create a button and insert it after the pre tag
				tryitButton(script,window[func]);
			}

			if(script.getAttribute('src')){

				// Add click event to open in new window
				addEvent(script, 'click', function(){
					window.open(script.getAttribute('src'), '_blank');
				});
			}
		});

		each('link', function(script){
			if(script.getAttribute('href')){

				// Add click event to open in new window
				addEvent(script, 'click', function(){
					window.open(script.getAttribute('href'), '_blank');
				});
			}
		});


		if(!document.querySelector){
			// degrade gracefully
			return;
		}


		// TOC
		var last_depth = 0,
			headings = document.querySelectorAll('h1,h2'),
			toc = document.querySelector('nav.toc');

		if( !toc && !(document.documentElement.className||'').match(/adorn-nav-off/) ){
			var h1 = document.querySelectorAll('header,h1,h2');
			if( h1 && h1.length>1 && h1[0].parentNode === document.body ){
				toc = create('nav', {'class':'toc'});
				document.body.insertBefore( toc, h1[0].nextSibling );
			}
		}

		var ul;
		if(toc){
			ul = create('ul');
			var toggle = create('a');
			addEvent( toc, 'click', function(e){
				e.stopPropagation();
				toggleClass(toc, "focus");
			});
			addEvent( document, 'click', function(){
				removeClass(toc, "focus");
			});
			toc.appendChild(toggle);
		}

		for(i=0;i<headings.length;i++){
			var tag = headings[i];
			// Create
			var depth = parseInt(tag.tagName.match(/[0-9]/)[0], 10),
				text = (tag.innerText||tag.textContent||tag.innerHTML),
				ref = text.toLowerCase().replace(/\s/g,'-').replace(/[^a-z0-9\_\-]/g, '');

			// Add anchor
			tag.id = ref;
			tag.insertBefore(create('a',{name:ref, href:"#" +ref, "class":"anchor"}),tag.firstChild);

			if( ul ){
				ul.appendChild( create('li', {html: create('a', {href:"#" +ref, text: text, "class": tag.tagName }), id : "toc_"+ref} ));
			}
		}


		//
		// Is there a TOC
		if(toc){

			toc.appendChild(ul);

			setTimeout(function(){
				// Lets add a class to the body
				document.documentElement.className += " toc";
			});
		}

		// Listen to scroll direction

		var _prevScrollTop = document.body.scrollTop;

		// Listen to scroll direction
		addEvent(window, 'scroll', function(e){

			var scrollTop = Math.max(document.body.scrollTop,0);
			var scrollingDown = _prevScrollTop < scrollTop;
			_prevScrollTop = scrollTop;

			// Add a class to the documentElement describing the direction of the scroll
			var clist = document.documentElement.classList;
			if(clist){
				clist.add( scrollingDown ? 'scrolledDown' : 'scrolledUp' );
				clist.remove( !scrollingDown ? 'scrolledDown' : 'scrolledUp' );
			}
		});


		// Listen to scroll navigation position
		addEvent(window, 'scroll', function(e){

			// from the list of items
			// find the one which is in view on the page
			var T = window.scrollY || window.pageYOffset,
				H = ("screen" in window ? window.screen.availHeight : 500);

			for(var i=0;i<headings.length;i++){
				var tag = headings[i],
					text = (tag.innerText||tag.innerHTML),
					ref = tag.getElementsByTagName('a')[0];

				if(ref){
					ref = ref.getAttribute('href').replace(/^#/,'');
				}


				var t = findPos(tag)[1] + 100,
					h = (tag.outerHeight||tag.innerHeight) + 50;

				if( T < t && T+H > t ){
	
					if(toc){
						var _toc = document.getElementById('toc_'+ref);

						if(_toc.className!=='active'){

							// Activate this one
							_toc.className='active';

							// Unmark any list items marked active
							var a = toc.querySelectorAll('.active');
							for(var j=0;j<a.length;j++){
								if(a[j]!==_toc){
									a[j].className = '';
								}
							}
						}
					}

					// Change the current window hash
					if( "history" in window && "replaceState" in window.history && window.location.hash !== '#'+ref ){
						history.replaceState({}, document.title, "#"+ref);
					}

					// Stop looping
					return;
				}
			}
		});


		// If toc
		if(!toc){
			return;
		}

		// Add a class to the documentElement describing the direction of the scroll
		var clist = toc.classList;
		if(!clist){
			return;
		}

		// Get items that need to be static, and then float
		var tocY = findPos(toc)[1];

		// Offset Parent
		
		addEvent(window, 'scroll', function(e){
			var sY = window.scrollY || window.pageYOffset;
			if( sY > tocY ){
				clist.add( 'float' );
			}
			else{
				clist.remove('float');
			}
		});
	});


	// Find position of an element
	function findPos(obj) {
		var curleft = 0,
			curtop = 0;
		if (obj.offsetParent) {
			do {
				curleft += obj.offsetLeft;
				curtop += obj.offsetTop;
			} while ((obj = obj.offsetParent));
		}
		return [curleft,curtop];
	}

	//
	// Insert After
	function insertAfter(el,ref){
		ref.nextSibling?ref.parentNode.insertBefore(el,ref.nextSibling):ref.parentNode.appendChild(el);
	}

	//
	// Create and Append new Dom elements
	// @param node string
	// @param attr object literal
	// @param dom/stringx
	//
	function create(node,attr){

		var n = typeof(node)==='string' ? document.createElement(node) : node;

		if(typeof(attr)==='object' ){
			if( "tagName" in attr ){
				target = attr;
			}
			else{
				for(var x in attr){if(attr.hasOwnProperty(x)){

					if(x === 'text'){
						n.appendChild(document.createTextNode(attr[x]));
					}
					else if(x === 'html'){
						if(typeof(attr[x])==='string'){
							n.innerHTML = attr[x];
						}
						else{
							n.appendChild(attr[x]);
						}
					}
					else if(typeof(attr[x])==='object'){
						for(var y in attr[x]){if(attr[x].hasOwnProperty(y)){
							n[x][y] = attr[x][y];
						}}
					}
					else {
						n.setAttribute(x, attr[x]);
					}
				}}
			}
		}
		return n;
	}

	function addEvent(obj, eventName, listener) { //function to add event
		if(obj instanceof window.NodeList || typeof obj === 'string'){
			each(obj, function(elm) {
				addEvent( elm, eventName, listener );
			});
			return;
		}
		if(eventName===true){
			// execue immediatley
			listener();
			return;
		}
		if(!obj){
			return;
		}
		if (obj.addEventListener) {
			obj.addEventListener(eventName, listener, false);
		} else if(obj.attachEvent){
			// DOMContentLoaded
			if( eventName === "DOMContentLoaded" ){
				eventName = 'readystatechange';
				_listener = listener;
				listener = function(){
					if(obj.readyState === "complete"){
						_listener();
					}
				};
			}
			obj.attachEvent("on" + eventName, listener);
		}
	}

	function ready(callback){
		if( document.readyState !== "loading" && document.body ){
			callback();
		}
		else{
			addEvent(document, 'DOMContentLoaded', callback);
		}
	}

	function toggleClass(elm, className){
		if(elm.className.match(className)){
			removeClass( elm, className );
		}
		else{
			elm.className += ' '+className;
		}
	}

	function removeClass(elm, className){
		elm.className = elm.className.replace(className, '');
	}

	//
	// JSONP

	function jsonp(url, callback){
		// JSONP
		// Make the anonymous function. not anonymous
		var callback_name = 'jsonp_document_' + jsonp_counter++;

		window[callback_name] = callback;
		// find a place to insert the script tag
		var sibling = document.getElementsByTagName('script')[0];
		// Create the script tag
		var script = document.createElement('script');
		// Update the path with the callback name
		script.src = (url+"&callback="+callback_name);
		script.async = true;
		// Append
		sibling.parentNode.insertBefore(script,sibling);
	};


	// JSON

	function json(url, callback) {
		var x = new XMLHttpRequest();
		x.onload = function(){
			var v;
			try{v = JSON.parse(x.response);}catch(e){} 
			callback(v);
		}
		x.onerror = callback;
		x.open("GET", url);
		x.send();
	}


	function each(matches, callback){
		if(typeof(matches)==='string'){
			matches = document.querySelectorAll(matches);
		}

		for(var i=0;i<matches.length;i++){
			callback.call(matches[i], matches[i], i );
		}
	}

	function meta(name){
		var content;
		try{
			content = document.querySelector('meta[name="'+name+'"]').content;
		}
		catch(e) {}

		return content;
	}

})(window, document);


// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35317561-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();