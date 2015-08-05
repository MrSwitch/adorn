export var toggleClass = function (elm, className){
		if(elm.className.match(className)){
			removeClass( elm, className );
		}
		else{
			addClass(elm, className);
		}
	}
