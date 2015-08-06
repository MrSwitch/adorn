import addClass from '../dom/addClass';

addClass( document.documentElement, (' ' + ( "ontouchstart" in window ? '' : 'no-') + 'touch') );