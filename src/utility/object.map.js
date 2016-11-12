import keys from './object.keys';

import arrayMap from './array.map';

const map = (fn) => (obj) => arrayMap(
  (key) => fn(obj[key], key, obj)
)( keys(obj) );

export default map;
