// Social controls
import each from 'tricks/dom/each';
import jsonp from 'tricks/http/jsonp';
import on from 'tricks/events/on';
import create from 'tricks/dom/create';
import fragment from 'tricks/dom/fragment';
import querystringify from 'tricks/string/querystringify';
import meta from 'tricks/dom/meta';
import query from 'tricks/dom/query';
import popup from 'tricks/window/popup';
import fullpath from 'tricks/string/fullpath';

const link = () => {
	const a = query('link[rel=source]');
	if (a) {
		return a.getAttribute('href');
	}
};

const url = window.location.href;

export function github_btn(manifest) {

	const content = [];
	const paths = manifest.paths;

	// GITHUB
	if (!manifest.github) {
		return;
	}

	// Repo
	let repo = manifest.github;
	if (!repo.match('/') && paths.length) {
		repo += `/${ paths[0].replace(/\/$/, '')}`;
	}

	if (!repo.match('/')) {
		return;
	}

	const repo_path = `https://github.com/${repo}`;

	// Get the location of this file in the repo
	const repo_file = link('source') || (window.location.pathname || '').replace(/^\/?([^/]+)/g, '').replace(/\/$/, 'index.html').replace(/^\//, '');

	content.push(
		create('a', {
			href: fullpath(repo_file, `${repo_path}/blob/master/`),
			target: '_blank',
			rel: 'noopener',
			id: 'adorn-edit'
		}, [
			'Edit this page'
		]),
		create('span'),
		create('a', {
			href: `${repo_path}`,
			target: '_blank',
			rel: 'noopener',
			title: 'Stars',
			id: 'adorn-github-button'
		}, [
			create('i', {class: 'adorn-icon-github'}),
			create('span', {class: 'adorn-speeach-bubble'})
		])
	);

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

	return fragment(...content);
}

export function twitter_btn(manifest) {

	// Content
	const content = [];

	// TWITTER
	const twitter_creator = manifest['twitter:creator'] || meta('twitter:creator');

	// If we dont have a creator, do nothing
	if (!twitter_creator) {
		return;
	}


	// Create components
	const btn = create('a', {
		href: 'https://twitter.com/share',
		class: 'adorn-twitter-button',
		target: '_blank',
		rel: 'noopener',
		'data-via': twitter_creator.replace('@', ''),
		title: 'Tweet'
	}, [
		create('i', {class: 'adorn-icon-twitter'})
	]);

	content.push(
		btn,
		create('a', {
			href: `https://twitter.com/search?ref_src=twsrc%5Etfw&q=${ encodeURIComponent(url)}`,
			class: 'adorn-twitter-count',
			rel: 'noopener',
			'aria-label': 'Twitter comments',
			target: '_blank'
		}, [
			create('i', {class: 'adorn-speeach-bubble'})
		])
	);


	// Probably could make this a little more ajaxy
	jsonp(`https://cdn.syndication.twitter.com/widgets/tweetbutton/count.json?url=${ encodeURIComponent(url)}`, r => {
		// Add value to twitter icon
		if (!r) {
			return;
		}
		each('.adorn-twitter-count span.adorn-speeach-bubble', item => {
			item.innerHTML = r.count || '';
			item.title = `This page has been shared ${ r.count } times, view these tweets`;
		});
	});


	// Add event to twitter button
	on(btn, 'click', e => {

		e.preventDefault();

		const options = {
			width: 550,
			height: 250
		};

		const params = {
			text: document.title,
			via: twitter_creator.replace('@', ''),
			url: window.location.href.replace(/#.*/, '')
		};

		const hashtag = meta('twitter:hashtag') || manifest['twitter:hashtag'];
		if (hashtag) {
			params.hashtag = hashtag;
		}

		popup(`https://twitter.com/intent/tweet?${querystringify(params)}`, 'twitter', options);
	});

	return fragment(...content);
}


export function share_btn() {

	// Does this browser support the native Share API
	if (!('share' in navigator)) {
		return;
	}

	// Content
	const content = [];

	// Create components
	const btn = create('button', {
		class: 'adorn-icon-share',
		target: '_blank',
		rel: 'noopener',
		title: 'Share'
	});

	content.push(btn);

	on(btn, 'click', () => {
		try {
			navigator.share({
				title: document.title,
				text: document.title,
				url: location.href
			}).then(() => {
				btn.style.color = 'green';
			});
		}
		catch (e) {
			btn.style.color = 'red';
		}
	});

	return fragment(...content);
}
