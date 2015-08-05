// JSON
export default function json(url, callback) {
	let x = new XMLHttpRequest();
	x.onload = function(){
		var v;
		try {v = JSON.parse(x.response);} catch(e) {}
		callback(v);
	};
	x.onerror = callback;
	x.open("GET", url);
	x.send();
};