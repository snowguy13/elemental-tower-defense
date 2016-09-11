import equals from 'predicate.equals';
import not from 'predicate.not';

const doesNotEqual = (x) => not(equals(x));

export default doesNotEqual;
