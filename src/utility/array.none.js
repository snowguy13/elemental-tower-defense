import contains from './array.contains';
import map from './array.map';

import compose from './function.compose';

const none = (fn) => compose(not(contains(true)), map(fn));

export default none;
