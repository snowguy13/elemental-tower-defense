import map from './utility/object.map';

let g = map((v, k) => [k, v])({
  a: 1,
  b: 2
});

console.log(g);
