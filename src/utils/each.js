export var each = function (matches, callback){
	if(typeof(matches)==='string'){
		matches = document.querySelectorAll(matches);
	}

	if(callback) {
		for(var i=0;i<matches.length;i++){
			callback.call(matches[i], matches[i], i );
		}
	}

	return matches || [];
};