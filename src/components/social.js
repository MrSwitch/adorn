// Social controls
import each from '../utils/dom/each';
import jsonp from '../utils/http/jsonp';
import on from '../utils/events/on';
import create from '../utils/dom/create';
import querystringify from '../utils/string/querystringify';
import meta from '../utils/dom/meta';
import popup from '../utils/window/popup';

let url = window.location.href;

export function github_btn(manifest) {

	let content = document.createDocumentFragment();
	let paths = manifest.paths;

	// GITHUB
	if (manifest.github) {

		// Get the location of this file in the repo
		var repo_file = (window.location.pathname || '').replace(/^\/?([^\/]+)/g, '').replace(/\/$/, '/index.html');

		// Repo
		var repo = manifest.github;
		if (!repo.match('/') && paths.length) {
			repo += '/' + paths[0].replace(/\/$/, '');
		}

		if (repo.match('/')) {

			let repo_path = `https://github.com/${repo}`;

			content.appendChild(create('a', {
				href: `${repo_path}/blob/master${repo_file}`,
				target: '_blank',
				id: 'adorn-edit',
				html: 'Edit this page'
			}));

			content.appendChild(create('span'));

			content.appendChild(create('a', {
				href: `${repo_path}`,
				target: '_blank',
				title: 'Stars',
				id: 'adorn-github-button',
				html: '<i class="adorn-icon-github"></i><span class="adorn-speeach-bubble"></span>'
			}));

			// Install the GitHub widget
			// Probably could make this a little more ajaxy

			jsonp(`https://api.github.com/repos/${repo}?callback=?`, r => {

				if (r && r.data && r.data.watchers) {

					// Add value to twitter icon
					each('.adorn-github-button span.adorn-speeach-bubble', item => {
						item.innerHTML = r.data.watchers || '';
					});
				}

			});
		}
	}

	return content;
}

export function twitter_btn (manifest) {

	// Content
	let content = document.createDocumentFragment();

	// TWITTER
	var twitter_creator = manifest['twitter:creator'] || meta('twitter:creator');

	// If we dont have a creator, do nothing
	if (!twitter_creator) {
		return content;
	}


	// Create components
	let btn = create('a', {
		href: 'https://twitter.com/share',
		'class': 'adorn-twitter-button',
		target: '_blank',
		'data-via': twitter_creator.replace('@', ''),
		title: 'Tweet',
		html: '<i class="adorn-icon-twitter"></i>'
	});

	content.appendChild(btn);
	content.appendChild(create('a', {
		href: 'https://twitter.com/search?ref_src=twsrc%5Etfw&q=' + encodeURIComponent(url),
		'class': 'adorn-twitter-count',
		target: '_blank',
		html: '<span class="adorn-speeach-bubble"></span>'
	}));


	// Probably could make this a little more ajaxy
	jsonp('https://cdn.syndication.twitter.com/widgets/tweetbutton/count.json?url=' + encodeURIComponent(url), r => {
		// Add value to twitter icon
		if (!r) {
			return;
		}
		each('.adorn-twitter-count span.adorn-speeach-bubble', item => {
			item.innerHTML = r.count || '';
			item.title = 'This page has been shared ' + r.count + ' times, view these tweets';
		});
	});


	// Add event to twitter button
	on(btn, 'click', e => {

		e.preventDefault();

		let options = {
			width: 550,
			height: 250
		};

		let params = {
			text: document.title,
			via: twitter_creator.replace('@', ''),
			url: window.location.href.replace(/#.*/, '')
		};

		var hashtag = meta('twitter:hashtag') || manifest['twitter:hashtag'];
		if (hashtag) {
			params.hashtag = hashtag;
		}

		popup('https://twitter.com/intent/tweet?' + querystringify(params), 'twitter', options);
	});

	return content;
}
