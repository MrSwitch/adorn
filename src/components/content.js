import each from '../utils/dom/each';
import until from '../utils/dom/until';
import addClass from '../utils/dom/addClass';
import on from '../utils/events/on';
import create from '../utils/dom/create';
import findPos from '../utils/dom/findPos';
import id from '../utils/dom/id';
import ready from '../utils/events/ready';
import onhashchange from '../utils/window/onhashchange';
import Defer from '../utils/object/Defer';
import sleep from '../utils/time/sleep';

// Pending
var defer = new Defer();

// Once the DOM has loaded we can get all the h1,h2 elements in the page
ready(() => {

	// TOC
	var headings = each('h1,h2');

	if (!document.querySelector || !!(document.documentElement.className || '').match(/adorn-(nav|toc)-off/)) {
		// This feature is disabled
		return;
	}


	each(headings, tag => {

		// Get the ID of the tag
		var ref = id(tag);

		// Create an anchor for this tag
		tag.insertBefore(create('a', {name: ref, href: '#' + ref, 'class': 'adorn-anchor'}), tag.firstChild);
	});


	{
		let hash = window.location.hash;

		if (hash && hash.length > 2) {

			// If the location.hash is defined, lets navigate to the item
			let selected = document.querySelector(window.location.hash);
			if (selected) {
				selected.scrollIntoView();
			}
		}
	}

	// Is there a TOC
	if (headings.length) {
		setTimeout(() => {
			// Lets add a class to the body
			addClass(document.documentElement, 'adorn-toc-on');
		});
	}

	// Resolve all the callbacks
	defer.resolve(headings);

	// Get a sleepid
	let sleepId = sleep();

	// Listen to scroll navigation position
	on(window, 'scroll', () => {

		// When this has been idle for the period defined
		sleep(updateHashLocation.bind(null, headings), 100, sleepId);
	});

});

// ///////////////////////////////////
// Navigation
// ///////////////////////////////////

export default (callback) => {

	defer.push(callback);

};


function updateHashLocation (headings) {

	// Are properties which affect the position of elements on the page are still loading...
	if (document.readyState !== 'complete') {
		// Ok, then we shouldn't try to determine if the user has changed position in the document.
		return;
	}

	// from the list of items
	// find the one which is in view on the page
	var T = window.scrollY || window.pageYOffset;
	var H = window.innerHeight;

	var toolbar = document.querySelector('.adorn-toolbar');

	var tag;

	var toolbar_height = (toolbar && toolbar.offsetHeight) || 50;

	// Is the current hash in the viewport
	let hash = window.location.hash;

	if (hash) {
		let anchor = document.querySelector(hash);

		if (anchor) {
			let t = findPos(anchor)[1];
			if (t > T && t < T + H) {
				// This is fine
				return;
			}
		}
	}


	// Find the current selection
	until(headings, anchor => {

		var t = findPos(anchor)[1] + toolbar_height;

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
		var ref = tag.getElementsByTagName('a')[0];

		if (ref) {
			ref = ref.getAttribute('href').replace(/^#/, '');
		}

		// Change the current window hash
		if ('history' in window && 'replaceState' in window.history && window.location.hash !== '#' + ref) {
			history.replaceState({}, document.title, '#' + ref);
		}

		// Trigger onhashchange
		onhashchange();
	}
}
