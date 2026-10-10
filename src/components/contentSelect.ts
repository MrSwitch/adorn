import each from 'tricks/dom/each';
import on from 'tricks/events/on';
import create from 'tricks/dom/create';
import id from 'tricks/dom/id';
import onhashchange from 'tricks/window/onhashchange';
import getContent from './content';

// ///////////////////////////////////
// Navigation
// ///////////////////////////////////

export default function contentSelect(parent: HTMLElement) {

	getContent(content => {

		if (content.length < 2) {
			return;
		}

		// Create a drop down SELECT box and add it too the breadcrumbs
		const toc = createContentSelect(content);
		parent.appendChild(toc);
	});
}


function createContentSelect(headings: HTMLElement[]) {
	const toc = create('div', {class: 'adorn-toc'});

	const select = create('select', {'aria-label': 'menu'}, [], toc);
	const options: string[] = [];
	on(select, 'change', () => {
		window.location.hash = select.options[select.selectedIndex].value;
	});

	let _group: HTMLElement = select;
	each(headings, tag => {

		// Get ID
		const depth = +(tag.tagName.match(/[0-9]/) as RegExpMatchArray)[0];
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
