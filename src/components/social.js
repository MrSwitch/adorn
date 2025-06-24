// Social controls
import jsonp from 'tricks/http/jsonp.js';
import on from 'tricks/events/on.js';
import create from 'tricks/dom/create.js';
import fragment from 'tricks/dom/fragment.js';
import querystringify from 'tricks/string/querystringify.js';
import meta from 'tricks/dom/meta.js';
import query from 'tricks/dom/query.js';
import popup from 'tricks/window/popup.js';
import fullpath from 'tricks/string/fullpath.js';

function link() {
	const a = query('link[rel=source]');
	if (a) {
		return a.getAttribute('href');
	}
}

function numberFormat(num) {
	try {
		return new Intl.NumberFormat().format(num);
	}
	catch (e) {
		return num;
	}
}

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

	let speechBubble;
	// Get the location of this file in the repo
	const repo_path = `https://github.com/${repo}`;
	const repo_file = link('source') || (window.location.pathname || '').replace(/^\/?([^/]+)/g, '').replace(/\/$/, 'index.html').replace(/^\//, '');

	if (repo.match('/')) {
		content.push(
			create('a', {
				href: fullpath(repo_file, `${repo_path}/blob/master/`),
				target: '_blank',
				rel: 'noopener',
				id: 'adorn-edit'
			}, [
				'Suggest an edit'
			]),
			create('span')
		);

		speechBubble = create('span', {class: 'adorn-speech-bubble'});

		// Grab Github Data
		jsonp(`https://api.github.com/repos/${repo}?callback=?`, r => {

			const stars = r?.data?.stargazers_count;

			if (stars) {
				// Add value to bubble icon
				speechBubble.innerHTML = `${numberFormat(stars)}⭐️`;
				speechBubble.title = `${numberFormat(stars)} Github ⭐️gazers`;
			}

		});
	}


	content.push(
		create('a', {
			href: `${repo_path}`,
			target: '_blank',
			rel: 'noopener',
			title: 'Github',
			id: 'adorn-github-button'
		}, [
			create('i', {class: 'adorn-icon-github'}),
			speechBubble
		])
	);


	return fragment(...content);
}

export function twitter_btn(manifest) {

	// Content
	const content = [];

	// TWITTER
	const twitter_creator = ['twitter:creator', 'twitter-x:creator'].map(n => manifest[n] || meta(n)).filter(Boolean)[0];

	// If we dont have a creator, do nothing
	if (!twitter_creator) {
		return;
	}

	// Create components
	const btn = create('a', {
		href: 'https://x.com/intent/post',
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
	);


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

		const hashtag = ['twitter:hashtag', 'twitter-x:hashtag'].map(n => manifest[n] || meta(n)).filter(Boolean)[0];

		if (hashtag) {
			params.hashtag = hashtag;
		}

		popup(`https://x.com/intent/post?${querystringify(params)}`, 'x', options);
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
	const btn = create('a', {
		class: 'adorn-icon-share',
		title: 'Share',
		href: 'javascript:void(0);'
	});

	content.push(btn);

	on(btn, 'click', () => {
		try {
			navigator.share({
				title: document.title,
				text: document.title,
				url: location.href
			});
		}
		catch (e) {
			console.warn('Share API failed', e);
		}
	});

	return fragment(...content);
}
