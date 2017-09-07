import insertBefore from 'tricks/dom/insertBefore';
import create from 'tricks/dom/create';
import query from 'tricks/dom/query';

if (!query('meta[name=viewport]')) {

	// Insert Meta Tag
	insertBefore(create('meta', {
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0'
	}), document.getElementsByTagName('script')[0]);
}
