import {addClass} from './addClass';
import {removeClass} from './removeClass';

export function toggleClass(elm, className){
	if(elm.className.match(className)){
		removeClass( elm, className );
	}
	else{
		addClass(elm, className);
	}
}
