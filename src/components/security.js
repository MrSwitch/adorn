import ready from 'tricks/events/ready';
import attr from 'tricks/dom/attr';

// Wait for the DOM to load
ready(() => {

	// Find all external links which dont have noopener and ensure they do
	// https://developers.google.com/web/tools/lighthouse/audits/noopener
	attr('a[target=_blank]:not([rel=noopener])', {rel: 'noopener'});
});