
import each from '../utils/dom/each';
import jsonp from '../utils/http/jsonp';
import until from '../utils/dom/until';
import addClass from '../utils/dom/addClass';
import on  from '../utils/events/on';
import create from '../utils/dom/create';
import findPos from '../utils/dom/findPos';
import id from '../utils/dom/id';
import querystringify from '../utils/string/querystringify';
import insertBefore from '../utils/dom/insertBefore';
import insertAfter from '../utils/dom/insertAfter';
import meta from '../utils/dom/meta';
import ready from '../utils/events/ready';
import popup from '../utils/helper/popup';

// ///////////////////////////////////
// TOOLBAR
// ///////////////////////////////////

export default function (manifest) {

	//
	// Build toolbar
	//
	var repo_path,
		paths = (window.location.pathname||'').replace(/^\//g,'').split(/([^\/]+\/?)/).filter((s) => !!s);

	var url = window.location.href,
		social_btns = [],
		breadcrumbs = [`<a href="${manifest.root}"><img src="${manifest.favicon}" alt="${window.location.hostname}" title="${manifest.name}"/></a>`];

	each(paths, (val, index) => {
		breadcrumbs.push( '<a href="/'+ paths.slice(0,index+1).join('') + '">'+ val.replace(/\.(html?)$/, '') +'</a>' );
	});

	// GITHUB
	if (manifest.github) {

		// Get the location of this file in the repo
		var repo_file = (window.location.pathname||'').replace(/^\/?([^\/]+)/g,'').replace(/\/$/, '/index.html');

		// Repo
		var repo = manifest.github;
		if (!repo.match("/") && paths.length) {
			repo += "/" + paths[0].replace(/\/$/,'');
		}
		if (repo.match("/")) {

			repo_path = `https://github.com/${repo}`;
			social_btns = [
				`<a href="${repo_path}/blob/master${repo_file}" target="_blank" id="adorn-edit">Edit this page</a>`,
				`<a href="${repo_path}" class="adorn-github-button" target="_blank" title="Stars"><i class="adorn-icon-github"></i><span class="adorn-speeach-bubble"></span></a>`,
			];


			// Install the GitHub widget
			// Probably could make this a little more ajaxy

			jsonp(`https://api.github.com/repos/${manifest.github}/${repo}?`, (r) => {
				// Add value to twitter icon
				each('.adorn-github-button span.adorn-speeach-bubble', (item) => {
					item.innerHTML = r.data.watchers || '';
				});
			});
		}
	}

	// TWITTER

	var twitter_creator = manifest['twitter:creator'] || meta("twitter:creator");

	if (twitter_creator) {
		social_btns.push(['<a href="https://twitter.com/share" class="adorn-twitter-button" target="_blank" data-via="'+ twitter_creator.replace('@','') +'" title="Tweet"><i class="adorn-icon-twitter"></i></a>',
			'<a href="https://twitter.com/search?ref_src=twsrc%5Etfw&q='+encodeURIComponent(url)+'" class="adorn-twitter-count" target="_blank"><span class="adorn-speeach-bubble"></span></a>'].join(''));

		// Probably could make this a little more ajaxy
		jsonp('https://cdn.syndication.twitter.com/widgets/tweetbutton/count.json?url='+encodeURIComponent(url), (r) => {
			// Add value to twitter icon
			each('.adorn-twitter-count span.adorn-speeach-bubble', (item) => {
				item.innerHTML = r.count || '';
				item.title = "This page has been shared "+r.count+" times, view these tweets";
			});
		});
	}


	insertBefore(create('aside', {
		'class' : 'adorn-toolbar',
		'html' : '<div class="adorn-breadcrumbs"> '+breadcrumbs.join(' ') +'</div> <div class="adorn-links">'+ social_btns.join('<span></span>') +' <div class="clearfix"></div></div>'
	}),document.body.firstElementChild||document.body.firstChild);



	//
	// Add event to twitter button
	on('.adorn-twitter-button', 'click', (e) => {

		e.preventDefault();

		let options = {
			width: 550,
			height: 250
		};

		let params = {
			text: encodeURIComponent(document.title),
			via: twitter_creator.replace('@',''),
			url: encodeURIComponent(window.location.href.replace(/#.*/,''))
		};

		var hashtag = meta("twitter:hashtag") || manifest['twitter:hashtag'];
		if (hashtag) {
			params.hashtag = hashtag;
		}

		popup("https://twitter.com/intent/tweet?" + querystringify(params), 'twitter', options);
	});

	// ///////////////////////////////////
	// TOC
	// ///////////////////////////////////

	ready(buildNav);
}

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

	each(headings, (tag) => {

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
	on(select, 'change', function() {
		window.location.hash = select.options[select.selectedIndex].value;
	});
	toc.appendChild(select);

	var _group = select;
	each(headings, (tag) => {

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

		setTimeout(() => {
			// Lets add a class to the body
			addClass(document.documentElement,"adorn-toc-on");
		});
	}

	on(window, 'hashchange', hashChange);


	// Listen to scroll navigation position
	var toolbar_height = document.querySelector('.adorn-toolbar').offsetHeight || 50;
	on(window, 'scroll', (e) => {

		// from the list of items
		// find the one which is in view on the page
		var T = window.scrollY || window.pageYOffset,
			H = ("screen" in window ? window.screen.availHeight : 500);

		var tag;

		// Find the current selection
		until( headings, (anchor) => {

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

	on(window, 'scroll', (e) => {
		var sY = window.scrollY || window.pageYOffset;
		if (sY > tocY) {
			clist.add( 'adorn-float' );
		}
		else {
			clist.remove('adorn-float');
		}
	});
}
