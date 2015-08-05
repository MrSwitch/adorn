// JSON
export var json = function (url, callback) {
	var x = new XMLHttpRequest();
	x.onload = function(){
		var v;
		try {v = JSON.parse(x.response);} catch(e) {}
		callback(v);
	};
	x.onerror = callback;
	x.open("GET", url);
	x.send();
};