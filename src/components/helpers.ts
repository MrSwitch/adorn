/*global tryit*/
import each from 'tricks/dom/each';
import on from 'tricks/events/on';
import create from 'tricks/dom/create';
import insertAfter from 'tricks/dom/insertAfter';

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
			tryitButton(script, (window as any)[func]);
		}

		const src = script.getAttribute('src');
		if (src) {

			// Add click event to open in new window
			on(script, 'click', () => {
				window.open(src, '_blank');
			});
		}
	});

	each('link', script => {
		const href = script.getAttribute('href');
		if (href) {

			// Add click event to open in new window
			on(script, 'click', () => {
				window.open(href, '_blank');
			});
		}
	});
}

function tryitButton(pre: HTMLElement, func?: () => void) {

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
		pre.setAttribute('contenteditable', 'true');
	}
}