export var meta = function (name){
	var content;
	try{
		content = document.querySelector('meta[name="'+name+'"]').content;
	}
	catch(e) {}

	return content;
};