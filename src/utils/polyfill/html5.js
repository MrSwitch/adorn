import each from '../each';

each( "header,section,datalist,option,footer,nav,menu,aside,article,style,script".split(","), (tag) => document.createElement(tag));