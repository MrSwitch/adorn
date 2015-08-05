import {addEvent} from './addEvent';

export var ready = function (callback){
	if( document.readyState !== "loading" && document.body ){
		callback();
	}
	else{
		addEvent(document, 'DOMContentLoaded', callback);
	}
};
