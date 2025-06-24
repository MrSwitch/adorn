import each from 'tricks/dom/each.js';
import on from 'tricks/events/on.js';
import create from 'tricks/dom/create.js';
import id from 'tricks/dom/id.js';
import onhashchange from 'tricks/window/onhashchange.js';
import getContent from './content.js';

// ///////////////////////////////////
// Navigation
// ///////////////////////////////////

export default function contentSelect(parent) {

	getContent(content => {

		if (content.lenth < 2) {
			return;
		}

		// Create a drop down SELECT box and add it too the breadcrumbs
		const toc = createContentSelect(content, parent);
		parent.appendChild(toc);
	});
}


function createContentSelect(headings) {
	const toc = create('div', {class: 'adorn-toc'});

	const select = create('select', {'aria-label': 'menu'}, [], toc);
	const options = [];
	on(select, 'change', () => {
		window.location.hash = select.options[select.selectedIndex].value;
	});

	let _group = select;
	each(headings, tag => {

		// Get ID
		const depth = +tag.tagName.match(/[0-9]/)[0];
		const text = (tag.innerText || tag.textContent || tag.innerHTML);
		const ref = id(tag);

		if (depth === 1) {
			_group = create('optgroup', {label: text}, [], select);
		}

		create('option', {value: ref}, [text], _group);

		options.push(ref);

	});

	onhashchange(hash => {
		// Update the SELECT
		select.selectedIndex = options.indexOf(hash);
	});

	return toc;
}
