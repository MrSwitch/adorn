
export var removeClass = function (elm, className){
	var reg = new RegExp("(^|\\s)+"+className+"($|\\s)+", 'i');
	elm.className = elm.className.replace(reg, ' ');
};