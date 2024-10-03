/*global tryit*/
import each from 'tricks/dom/each.js';
import on from 'tricks/events/on.js';
import create from 'tricks/dom/create.js';
import insertAfter from 'tricks/dom/insertAfter.js';

export default function helpers() {

	// TryIt
	each('pre', pre => {
		if (pre.className === 'tryit' || pre.className === 'tryitoffline') {
			// Create a button and insert it after the pre tag
			tryitButton(pre);
		}
	});

	// TryIt, View
	each('script', script => {
		const func = script.getAttribute('data-tryit');
		if (func) {
			// Create a button and insert it after the pre tag
			tryitButton(script, window[func]);
		}

		if (script.getAttribute('src')) {

			// Add click event to open in new window
			on(script, 'click', () => {
				window.open(script.getAttribute('src'), '_blank');
			});
		}
	});

	each('link', script => {
		if (script.getAttribute('href')) {

			// Add click event to open in new window
			on(script, 'click', () => {
				window.open(script.getAttribute('href'), '_blank');
			});
		}
	});
};

function tryitButton(pre, func) {

	const btn = create('button', {class: 'tryit'}, ['tryit']);

	insertAfter(btn, pre);

	on(btn, 'click', () => {
		if (func) {
			func();
		}
		else if (typeof(tryit) === 'function' && !tryit(pre.innerText)) {
			// Continue
		}
		else {
			setTimeout(() => (0, eval)(pre.innerText), 100);
		}
	});

	if (!func) {
		pre.setAttribute('contenteditable', true);
	}
}

function nonDirectVal(val) {
	return val.replace(/[\n\t]/g, '');
}
