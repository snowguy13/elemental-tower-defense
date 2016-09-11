import indexOf from 'array.indexOf';

import compose from 'function.compose';

import doesNotEqual from 'predicate.doesNotEqual';

const contains = (x) => compose( doesNotEqual(-1), indexOf(x) );
