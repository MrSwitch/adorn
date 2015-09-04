import insertBefore from '../utils/dom/insertBefore';

export default function (tracking) {
	window._gaq = window._gaq || [];
	_gaq.push(['_setAccount', tracking]);
	_gaq.push(['_trackPageview']);

	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	insertBefore(ga, document.getElementsByTagName('script')[0]);
}
