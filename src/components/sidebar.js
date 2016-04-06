import each from '../utils/dom/each';
import until from '../utils/dom/until';
import addClass from '../utils/dom/addClass';
import on from '../utils/events/on';
import create from '../utils/dom/create';
import prepend from '../utils/dom/prepend';
import parent from '../utils/dom/parent';
import removeClass from '../utils/dom/removeClass';
import onhashchange from '../utils/window/onhashchange';
import getContent from './content';
import id from '../utils/dom/id';


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
		let aside = prepend('aside', {'class':'adorn-sidebar'});

		// Create elements
		let i = 0;
		let prev = aside;
		let items = {};

		each(content, item => {

			// New depth
			let j = +item.tagName.match(/[0-9]/)[0];

			// Get parent UL
			let ul = getParentUL(prev, i, j);

			// Update depth
			i = j;

			// Build list item
			let text = (item.innerText || item.textContent || item.innerHTML);
			let ref = id(item);

			items[ref] = prev = create('li', {}, [
				create('a', {href: '#' + ref}, [text])
			], ul);

		});

		// Show current selection
		onhashchange(hash => {

			// Add Class
			let item = items[hash];
			if (item) {

				// Remove class
				removeClass('.adorn-sidebar .selected', 'selected');

				// Add class
				addClass(item, 'selected');
			}
		});

	});

}

function getParentUL(ul, i, j) {
	if (i < j) {
		return create('ul', {}, [], ul);
	}
	else {
		do{
			ul = parent(ul, 'ul') || ul;
		}
		while (ul && i-- > j);
		return ul;
	}
}
