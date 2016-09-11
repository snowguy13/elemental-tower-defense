import contains from './array.contains';
import map from './array.map';

import compose from './function.compose';

import not from './predicate.not';

const any = (fn) => compose(not(contains(false)), map(fn));

export default any;
