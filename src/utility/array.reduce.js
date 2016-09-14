const reduce = (fn, defInit = undefined, forceDef = false) =>
  (arr, init = defInit) => arr.reduce(fn, forceDef ? defInit : init);

export default reduce;
