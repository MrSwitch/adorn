// Selection share
// When the user highlights text on the page show a tooltip with options to share the quote
import create from 'tricks/dom/create';
import on from 'tricks/events/on';
import meta from 'tricks/dom/meta';
import querystringify from 'tricks/string/querystringify';
import popup from 'tricks/window/popup';

const MAX_TEXT_LENGTH = 280;

export default function selectionShare(manifest: Manifest) {

	let tooltip: HTMLElement | null = null;
	let timer: ReturnType<typeof setTimeout> | undefined;

	on(document, 'selectionchange', () => {
		clearTimeout(timer);
		timer = setTimeout(update, 300);
	});

	function update() {

		const selection = window.getSelection();
		const text = selection?.toString().trim();

		if (!selection || selection.isCollapsed || !text) {
			hide();
			return;
		}

		// Ignore selections within the adorn chrome and form fields
		const node = selection.anchorNode;
		const el = node instanceof Element ? node : node?.parentElement;
		if (!el || el.closest('.adorn-toolbar, .adorn-sidebar, .adorn-selection-share, input, textarea')) {
			return;
		}

		show(text, selection.getRangeAt(0).getBoundingClientRect());
	}

	function show(text: string, rect: DOMRect) {

		if (!tooltip) {
			tooltip = createTooltip();
		}

		tooltip.dataset.text = text;

		// Position above the selection, centered
		tooltip.style.left = `${Math.max(10, rect.left + window.scrollX + (rect.width / 2))}px`;
		tooltip.style.top = `${rect.top + window.scrollY}px`;
		tooltip.classList.add('adorn-selection-share-active');
	}

	function hide() {
		tooltip?.classList.remove('adorn-selection-share-active');
	}

	function createTooltip() {

		const buttons: HTMLElement[] = [];

		// Native Share API
		if ('share' in navigator) {
			const btn = create('a', {
				href: 'javascript:void(0);',
				title: 'Share quote'
			}, [
				create('i', {class: 'adorn-icon-share'})
			]);

			on(btn, 'click', () => {
				navigator.share({
					title: document.title,
					text: quote(),
					url: shareUrl()
				}).catch(() => { /* cancelled */ });
			});

			buttons.push(btn);
		}

		// Post to X
		{
			const btn = create('a', {
				href: 'https://x.com/intent/post',
				target: '_blank',
				rel: 'noopener',
				title: 'Post quote on X'
			}, [
				create('i', {class: 'adorn-icon-twitter'})
			]);

			on(btn, 'click', e => {

				e.preventDefault();

				const params: Record<string, string> = {
					text: quote(),
					url: shareUrl()
				};

				const via = ['twitter:creator', 'twitter-x:creator'].map(n => manifest[n] || meta(n)).filter(Boolean)[0];
				if (via) {
					params.via = via.replace('@', '');
				}

				popup(`https://x.com/intent/post?${querystringify(params)}`, 'x', {width: 550, height: 250});
			});

			buttons.push(btn);
		}

		// Copy quote and link
		if (navigator.clipboard) {
			const btn = create('a', {
				href: 'javascript:void(0);',
				title: 'Copy quote and link'
			}, ['⧉']);

			on(btn, 'click', () => {
				navigator.clipboard.writeText(shareUrl()).then(() => {
					btn.textContent = '✓';
					setTimeout(() => {
						btn.textContent = '⧉';
					}, 1000);
				});
			});

			buttons.push(btn);
		}

		const el = create('div', {class: 'adorn-selection-share'}, buttons, document.body);

		// Don't clear the selection when interacting with the tooltip
		on(el, 'pointerdown', e => e.preventDefault());

		return el;
	}

	function quote() {
		const text = tooltip?.dataset.text || '';
		return text.length > MAX_TEXT_LENGTH ? `${text.slice(0, MAX_TEXT_LENGTH - 1)}…` : text;
	}

	function shareUrl() {
		const text = tooltip?.dataset.text || '';
		const base = window.location.href.replace(/#.*/, '');

		// Link directly to the highlighted text with a text fragment
		const fragment = encodeURIComponent(text).replace(/-/g, '%2D');
		return `${base}#:~:text=${fragment}`;
	}
}
