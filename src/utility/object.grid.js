import range from 'array.range';
import length from 'array.length';
import map from 'array.map';
import isEmpty from 'array.isEmpty';
import all as arrayAll from 'array.all';

import compose from 'function.compose';

import all from 'predicate.all';
import not from 'predicate.not';
import equals from 'predicate.equals';

const validateArray = all(
  not( isEmpty ),
  arrayAll( not( isEmpty ) ),
  compose( equals(1), length, distinct, map(length) ),
);

const grid = (
  array,
  rowNames = range(array.length),
  colNames = range(array[0].length)
) => {

};

export default grid;
