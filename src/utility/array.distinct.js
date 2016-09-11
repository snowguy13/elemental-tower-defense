import contains from 'array.contains';

const distinct = (arr) => arr.reduce((dist, el) =>
   contains(el)(dist) ? dist : [el, ...dist]);

export default distinct;
