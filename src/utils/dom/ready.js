import {addEvent} from './addEvent';

export function ready(callback){
	if( document.readyState !== "loading" && document.body ){
		callback();
	}
	else{
		addEvent(document, 'DOMContentLoaded', callback);
	}
};
