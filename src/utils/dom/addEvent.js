import {each} from '../each';

export var addEvent = function addEvent(obj, eventName, listener) { //function to add event
	if(obj instanceof window.NodeList || typeof obj === 'string'){
		each(obj, function(elm) {
			addEvent( elm, eventName, listener );
		});
		return;
	}
	if(eventName===true){
		// execue immediatley
		listener();
		return;
	}
	if(!obj){
		return;
	}
	if (obj.addEventListener) {
		obj.addEventListener(eventName, listener, false);
	} else if(obj.attachEvent){
		// DOMContentLoaded
		if( eventName === "DOMContentLoaded" ){
			eventName = 'readystatechange';
			_listener = listener;
			listener = function(){
				if(obj.readyState === "complete"){
					_listener();
				}
			};
		}
		obj.attachEvent("on" + eventName, listener);
	}
};
