import range from './array.range';
import distinct from './array.distinct';
import length from './array.length';

import map from './array.map';
import reduce from './array.reduce';

import isEmpty from './array.isEmpty';
import arrayAll from './array.all';

import compose from './function.compose';

import all from './predicate.all';
import not from './predicate.not';
import equals from './predicate.equals';

const validateArray = all(
  not( isEmpty ),
  arrayAll( not( isEmpty ) ),
  compose( equals(1), length, distinct, map(length) ),
);

const grid = (
  array,
  rowNames = range(array.length),
  colNames = range((array[0] || []).length)
) => {
  if( !validateArray( array ) ) {
    throw new Error('Invalid array: ' + array );
  }

  let reducer = (names) => reduce((ret, val, index, array) => ({
    [names[index]]: val,
    ...ret,
  }), {}, true);

  return reducer(rowNames)(
    map( reducer(colNames) )(array)
  );
};

export default grid;
