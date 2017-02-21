import each from 'tricks/dom/each';
import until from 'tricks/dom/until';
import addClass from 'tricks/dom/addClass';
import on from 'tricks/events/on';
import create from 'tricks/dom/create';
import findPos from 'tricks/dom/findPos';
import id from 'tricks/dom/id';
import ready from 'tricks/events/ready';
import onhashchange from 'tricks/window/onhashchange';
import Defer from 'tricks/object/Defer';
import sleep from 'tricks/time/sleep';

// Pending
const defer = new Defer();

// Once the DOM has loaded we can get all the h1,h2 elements in the page
ready(() => {

	// TOC
	const headings = each('h1,h2');

	if (!document.querySelector || !!(document.documentElement.className || '').match(/adorn-(nav|toc)-off/)) {
		// This feature is disabled
		return;
	}


	each(headings, tag => {

		// Get the ID of the tag
		const ref = id(tag);

		// Create an anchor for this tag
		tag.insertBefore(create('a', {name: ref, href: `#${ ref}`, class: 'adorn-anchor'}), tag.firstChild);
	});


	{
		const hash = window.location.hash;

		if (hash && hash.length > 2) {

			// If the location.hash is defined, lets navigate to the item
			const selected = document.querySelector(window.location.hash);
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
	const sleepId = sleep();

	// Listen to scroll navigation position
	on(window, 'scroll', () => {

		// When this has been idle for the period defined
		sleep(updateHashLocation.bind(null, headings), 100, sleepId);
	});

});

// ///////////////////////////////////
// Navigation
// ///////////////////////////////////

export default callback => {

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
	const T = window.scrollY || window.pageYOffset;
	const H = window.innerHeight;

	const toolbar = document.querySelector('.adorn-toolbar');

	let tag;

	const toolbar_height = (toolbar && toolbar.offsetHeight) || 50;

	// Is the current hash in the viewport
	const hash = window.location.hash;

	if (hash) {
		const anchor = document.querySelector(hash);

		if (anchor) {
			const t = findPos(anchor)[1];
			if (t > T && t < T + H) {
				// This is fine
				return;
			}
		}
	}


	// Find the current selection
	until(headings, anchor => {

		const t = findPos(anchor)[1] + toolbar_height;

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
		let ref = tag.getElementsByTagName('a')[0];

		if (ref) {
			ref = ref.getAttribute('href').replace(/^#/, '');
		}

		// Change the current window hash
		if ('history' in window && 'replaceState' in window.history && window.location.hash !== `#${ ref}`) {
			history.replaceState({}, document.title, `#${ ref}`);
		}

		// Trigger onhashchange
		onhashchange();
	}
}
