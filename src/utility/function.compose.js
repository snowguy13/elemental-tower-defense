const compose = (...fns) => (x) =>
  fns.reduceRight((val, fn) => fn(val), x);

export default compose;
