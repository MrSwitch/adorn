import addEvent from './addEvent';

export default function ready(callback){
	if( document.readyState !== "loading" && document.body ){
		callback();
	}
	else{
		addEvent(document, 'DOMContentLoaded', callback);
	}
};
