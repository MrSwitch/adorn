import each from '../utils/dom/each';
import until from '../utils/dom/until';
import addClass from '../utils/dom/addClass';
import on from '../utils/events/on';
import create from '../utils/dom/create';
import id from '../utils/dom/id';
import onhashchange from '../utils/window/onhashchange';
import getContent from './content';

// ///////////////////////////////////
// Navigation
// ///////////////////////////////////

export default (parent) => {

	getContent(content => {

		if (content.lenth < 2) {
			return;
		}

		// Create a drop down SELECT box and add it too the breadcrumbs
		let toc = createContentSelect(content, parent);
		parent.appendChild(toc);
	});
};


function createContentSelect(headings) {
	var toc = create('div', {'class': 'adorn-toc'});

	var select = create('select', {}, [], toc);
	var options = [];
	on(select, 'change', () => {
		window.location.hash = select.options[select.selectedIndex].value;
	});

	var _group = select;
	each(headings, tag => {

		// Get ID
		var depth = +tag.tagName.match(/[0-9]/)[0],
			text = (tag.innerText || tag.textContent || tag.innerHTML),
			ref = id(tag);

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
