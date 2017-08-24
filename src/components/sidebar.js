import each from 'tricks/dom/each';
import addClass from 'tricks/dom/addClass';
import create from 'tricks/dom/create';
import prepend from 'tricks/dom/prepend';
import parent from 'tricks/dom/parent';
import removeClass from 'tricks/dom/removeClass';
import onhashchange from 'tricks/window/onhashchange';
import getContent from './content';
import id from 'tricks/dom/id';


// ///////////////////////////////////
// Navigation
// ///////////////////////////////////

export default () => {

	getContent(content => {

		if (content.length < 2) {
			addClass(document.documentElement, 'adorn-sidebar-off');
			return;
		}

		// Create a sidebar navigation on the body
		const aside = prepend('aside', {class: 'adorn-sidebar'});

		// Create elements
		let i = 0;
		let prev = aside;
		const items = {};

		each(content, item => {

			// New depth
			const j = +item.tagName.match(/[0-9]/)[0];

			// Get parent UL
			const ul = getParentUL(prev, i, j);

			// Update depth
			i = j;

			// Build list item
			const text = (item.innerText || item.textContent || item.innerHTML);
			const ref = id(item);

			items[ref] = prev = create('li', {}, [
				create('a', {href: `#${ref}`}, [text])
			], ul);

		});

		// Show current selection
		onhashchange(hash => {

			// Add Class
			const item = items[hash];
			if (item) {

				// Remove class
				removeClass('.adorn-sidebar .selected', 'selected');

				// Add class
				addClass(item, 'selected');
			}
		});

	});

};

function getParentUL(ul, i, j) {
	if (i < j) {
		return create('ul', {}, [], ul);
	}
	else {
		do {
			ul = parent(ul, 'ul') || ul;
		}
		while (ul && i-- > j);
		return ul;
	}
}
