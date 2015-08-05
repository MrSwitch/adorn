/**
 * adorn.js
 * Adds document navigation to a page.
 */

import {each} from './utils/each';
import {json} from './utils/json';
import {jsonp} from './utils/jsonp';
import {rURL} from './utils/rURL';
import {until} from './utils/until';

import {addClass} from './utils/dom/addClass';
import {addEvent}  from './utils/dom/addEvent';
import {create}  from './utils/dom/create';
import {findPos}  from './utils/dom/findPos';
import {id}  from './utils/dom/id';
import {insertBefore} from './utils/dom/insertBefore';
import {insertAfter} from './utils/dom/insertAfter';
import {meta}  from './utils/dom/meta';
import {ready}  from './utils/dom/ready';
import {removeClass}  from './utils/dom/removeClass';

(function(window, document, encodeURIComponent){

	// Touch exists?
	addClass( document.documentElement, (' ' + ( "ontouchstart" in window ? '' : 'no-') + 'touch') );


	// fix HTML5 in IE
	each( "header,section,datalist,option,footer,nav,menu,aside,article,style,script".split(","), function(tag){
		document.createElement(tag);
	});

	// Add mobile ag to page.

	// Insert Meta Tag
	insertBefore( create('meta', {
		name:'viewport',
		content:'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
	}), document.getElementsByTagName('script')[0] );



	// Manifest
	var manifest_json = meta("manifest") || "/manifest.json";

	// Set the toolbar, doesn't work if document body is undefined
	json(manifest_json, buildToolbar.bind(null, manifest_json));



	// ///////////////////////////////////
	// TOOLBAR
	// ///////////////////////////////////

	function buildToolbar(base, manifest){

		if(!document.body){
			// Just in case...
			ready(buildToolbar.bind(null, base, manifest));
			return;
		}

		// Set bench
		manifest = manifest || {};

		// Favicon
		manifest.favicon = meta("favicon") || rURL(manifest.favicon, base) || "/favicon.ico";

		// Author
		manifest.author = meta("author") || manifest.author;

		// Root domain
		manifest.root = rURL(manifest.root || '/', base);

		//
		// Build toolbar
		// 
		var repo_path,
			paths = (window.location.pathname||'').replace(/^\//g,'').split(/([^\/]+\/?)/).filter(function(s){return !!s});

		var url = window.location.href,
			social_btns = [],
			breadcrumbs = ['<a href="'+manifest.root+'"><img src="'+ manifest.favicon +'" alt="' + window.location.hostname + '" title="' + manifest.name + '"/></a>'];

		each( paths, function(val, index){
			breadcrumbs.push( '<a href="/'+ paths.slice(0,index+1).join('') + '">'+ val.replace(/\.(html?)$/, '') +'</a>' );
		});


		// GITHUB

		if( manifest.github && paths.length ){
			// Get the location of this file in the repo
			var repo_file = (window.location.pathname||'').replace(/^\/?([^\/]+)/g,'').replace(/\/$/, '/index.html');
			var repo = paths[0].replace(/\/$/,'');

			repo_path = "https://github.com/"+manifest.github+"/"+repo;
			social_btns = [
				'<a href="'+repo_path+'/blob/master'+ repo_file +'" target="_blank" id="adorn-edit">Edit this page</a>',
				'<a href="'+repo_path+'" class="adorn-github-button" target="_blank" title="Stars"><i class="adorn-icon-github"></i><span class="adorn-speeach-bubble"></span></a>',
			];


			// Install the GitHub widget
			// Probably could make this a little more ajaxy
			jsonp('https://api.github.com/repos/'+ manifest.github +'/'+repo+'?',function(r){
				// Add value to twitter icon
				// Add value to twitter icon
				each('.adorn-github-button span.adorn-speeach-bubble', function(){
					this.innerHTML = r.data.watchers || '';
				});
			});
		}


		// TWITTER

		var twitter_creator = manifest['twitter:creator'] || meta("twitter:creator");

		if (twitter_creator) {
			social_btns.push(['<a href="https://twitter.com/share" class="adorn-twitter-button" target="_blank" data-via="'+ twitter_creator.replace('@','') +'" title="Tweet"><i class="adorn-icon-twitter"></i></a>',
				'<a href="https://twitter.com/search?ref_src=twsrc%5Etfw&q='+encodeURIComponent(url)+'" class="adorn-twitter-count" target="_blank"><span class="adorn-speeach-bubble"></span></a>'].join(''));

			// Probably could make this a little more ajaxy
			jsonp('https://cdn.syndication.twitter.com/widgets/tweetbutton/count.json?url='+encodeURIComponent(url),function(r){
				// Add value to twitter icon
				each('.adorn-twitter-count span.adorn-speeach-bubble', function(){
					this.innerHTML = r.count || '';
					this.title = "This page has been shared "+r.count+" times, view these tweets";
				});
			});
		}


		insertBefore(create('aside', {
			'class' : 'adorn-toolbar',
			'html' : '<div class="adorn-breadcrumbs"> '+breadcrumbs.join(' ') +'</div> <div class="adorn-links">'+ social_btns.join('<span></span>') +' <div class="clearfix"></div></div>'
		}),document.body.firstElementChild||document.body.firstChild);



		//
		// Add event to twitter button
		addEvent('.adorn-twitter-button','click',function(e) {
			
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
		// TOC
		// ///////////////////////////////////

		ready(buildNav);


		// ///////////////////////////////////
		// FOOTER
		// ///////////////////////////////////

		if (manifest.author) {

			ready(function() {

				var author = manifest.author.split(/\s*,\s*/);

				if (author) {
					// Add Footer link to repo
					document.body.appendChild(create('footer',{
							html : 'Authored by ' + ( author[1] ? '<a href="'+author[1]+'" rel="author">'+author[0]+'</a>' : author[0] )
						}
					));
				}

			});
		}


		// ///////////////////////////////////
		// Analytics
		// ///////////////////////////////////

		{

			let tracking = meta("ga:tracking") || manifest['ga:tracking'];

			if (tracking) {
				window._gaq = window._gaq || [];
				_gaq.push(['_setAccount', tracking]);
				_gaq.push(['_trackPageview']);

				var ga = document.createElement('script');
				ga.type = 'text/javascript';
				ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				insertBefore(ga, document.getElementsByTagName('script')[0]);
			}

		}
	}


	// ///////////////////////////////////
	// Markup
	// ///////////////////////////////////

	ready(function() {

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
	});

	// ///////////////////////////////////
	// Navigation
	// ///////////////////////////////////


	function buildNav() {

		// TOC
		var last_depth = 0,
			headings = each('h1,h2');
		
		if (!document.querySelector || !!(document.documentElement.className||'').match(/adorn-(nav|toc)-off/)) {
			// This feature is disabled
			return;
		}

		each(headings, function(tag) {

			// Get the ID of the tag
			var ref = id(tag);

			// Create an anchor for this tag
			tag.insertBefore(create('a', {name: ref, href: "#" +ref, "class": "adorn-anchor"}), tag.firstChild);
		});


		if (headings.length<2) {
			return;
		} 

		var toc = create('div', {'class':'adorn-toc'});
		document.querySelector('.adorn-breadcrumbs').appendChild(toc);

		var select = create('select');
		var options = [];
		addEvent(select, 'change', function() {
			window.location.hash = select.options[select.selectedIndex].value;
		});
		toc.appendChild(select);

		var _group = select;
		each(headings, function(tag) {

			// Get ID
			var depth = parseInt(tag.tagName.match(/[0-9]/)[0], 10),
				text = (tag.innerText||tag.textContent||tag.innerHTML),
				ref = id(tag);

			if (depth===1){
				_group = create('optgroup', {label: text});
				select.appendChild(_group);
			}
			_group.appendChild(create('option', {html: text, value: ref}));

			options.push(ref);

		});

		function hashChange() {
			select.selectedIndex = options.indexOf(window.location.hash.substr(1));
		}

		//
		// Is there a TOC
		if(toc){

			setTimeout(function(){
				// Lets add a class to the body
				addClass(document.documentElement,"adorn-toc-on");
			});
		}

		addEvent(window, 'hashchange', hashChange);

		// // Listen to scroll direction

		// var _prevScrollTop = document.body.scrollTop;

		// // Listen to scroll direction
		// addEvent(window, 'scroll', function(e){

		// 	var scrollTop = Math.max(document.body.scrollTop,0);
		// 	var scrollingDown = _prevScrollTop < scrollTop;
		// 	_prevScrollTop = scrollTop;

		// 	// Add a class to the documentElement describing the direction of the scroll
		// 	addClass( document.documentElement, "adorn-scroll-" + (scrollingDown ? 'down' : 'up') );
		// 	removeClass( document.documentElement, "adorn-scroll-" + (!scrollingDown ? 'down' : 'up') );
		// });


		// Listen to scroll navigation position
		var toolbar_height = document.querySelector('.adorn-toolbar').offsetHeight || 50;
		addEvent(window, 'scroll', function(e){

			// from the list of items
			// find the one which is in view on the page
			var T = window.scrollY || window.pageYOffset,
				H = ("screen" in window ? window.screen.availHeight : 500);

			var tag;

			// Find the current selection
			until( headings, function(anchor) {

				var t = findPos(anchor)[1] - toolbar_height;

				if (T < t) {

					// Stop looping
					return true;
				}

				// set the last active tag
				tag = anchor;
			});


			// Has a tag been set?
			if (tag) {
				// Set as the current selected one
				var text = (tag.innerText||tag.innerHTML),
				ref = tag.getElementsByTagName('a')[0];

				if(ref){
					ref = ref.getAttribute('href').replace(/^#/,'');
				}

				// Change the current window hash
				if( "history" in window && "replaceState" in window.history && window.location.hash !== '#'+ref ){
					history.replaceState({}, document.title, "#"+ref);
				}

				// Update the 
				hashChange();
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
				clist.add( 'adorn-float' );
			}
			else{
				clist.remove('adorn-float');
			}
		});
	}


})(window, document, encodeURIComponent);