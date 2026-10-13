// Copy code
// When hovering over a `pre > code` block which has not been processed
// show a "copy all" button in the top right corner of the pre element.

import on from 'tricks/events/on';
import create from 'tricks/dom/create';
import addClass from 'tricks/dom/addClass';

const CLIPBOARD = '⧉';
const TICK = '✓';
const RESET_DELAY = 10000;

if (navigator.clipboard) {

	// Listen to hover events on the document and lazily attach the button
	on(document.documentElement, 'mouseover', e => {

		const target = e.target as Element;
		const pre = target.closest?.('pre') as HTMLElement;
        const code = pre?.querySelector('code:not([data-processed="true"])');

		if (!code) {
			return;
		}

		// Only attach the button once per pre element
		if (pre.querySelector('.adorn-copy-code')) {
			return;
		}

		addClass(pre, 'adorn-copyable');

		const btn = create('button', {
			type: 'button',
			class: 'adorn-copy-code',
			title: 'Copy all',
			'aria-label': 'Copy all'
		}, [CLIPBOARD], pre);

		on(btn, 'click', () => {
			navigator.clipboard.writeText(code.textContent || '').then(() => {

				// Acknowledge the copy with a tick mark
				btn.textContent = TICK;

				// Revert back to the clipboard icon
				setTimeout(() => {
					btn.textContent = CLIPBOARD;
				}, RESET_DELAY);
			});
		});
	});
}
