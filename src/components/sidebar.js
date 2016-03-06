import each from '../utils/dom/each';
import until from '../utils/dom/until';
import addClass from '../utils/dom/addClass';
import on from '../utils/events/on';
import create from '../utils/dom/create';
import findPos from '../utils/dom/findPos';
import id from '../utils/dom/id';

// ///////////////////////////////////
// Navigation
// ///////////////////////////////////

export default () => {

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


	if (headings.length < 2) {
		return;
	}

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

	var toc = create('div', {'class': 'adorn-toc'});
	document.querySelector('.adorn-breadcrumbs').appendChild(toc);

	var select = create('select');
	var options = [];
	on(select, 'change', function() {
		window.location.hash = select.options[select.selectedIndex].value;
	});
	toc.appendChild(select);

	var _group = select;
	each(headings, tag => {

		// Get ID
		var depth = parseInt(tag.tagName.match(/[0-9]/)[0], 10),
			text = (tag.innerText || tag.textContent || tag.innerHTML),
			ref = id(tag);

		if (depth === 1) {
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
	if (toc) {

		setTimeout(() => {
			// Lets add a class to the body
			addClass(document.documentElement, 'adorn-toc-on');
		});
	}

	on(window, 'hashchange', hashChange);


	// Listen to scroll navigation position
	var toolbar_height = document.querySelector('.adorn-toolbar').offsetHeight || 50;
	on(window, 'scroll', () => {

		// Are properties which affect the position of elements on the page are still loading...
		if (document.readyState !== 'complete') {
			// Ok, then we shouldn't try to determine if the user has changed position in the document.
			return;
		}

		// from the list of items
		// find the one which is in view on the page
		var T = window.scrollY || window.pageYOffset;

		var tag;

		// Find the current selection
		until(headings, anchor => {

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
			var ref = tag.getElementsByTagName('a')[0];

			if (ref) {
				ref = ref.getAttribute('href').replace(/^#/, '');
			}

			// Change the current window hash
			if ('history' in window && 'replaceState' in window.history && window.location.hash !== '#' + ref) {
				history.replaceState({}, document.title, '#' + ref);
			}

			// Update the
			hashChange();
		}

	});

	// If toc
	if (!toc) {
		return;
	}

	// Add a class to the documentElement describing the direction of the scroll
	var clist = toc.classList;
	if (!clist) {
		return;
	}

	// Get items that need to be static, and then float
	var tocY = findPos(toc)[1];

	// Offset Parent

	on(window, 'scroll', () => {
		var sY = window.scrollY || window.pageYOffset;
		if (sY > tocY) {
			clist.add('adorn-float');
		}
		else {
			clist.remove('adorn-float');
		}
	});
};
