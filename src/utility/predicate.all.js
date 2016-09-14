const all = (...preds) => (x) =>
  preds.reduce((truth, pred) => {
    return truth && !!pred(x);
  }, true);

export default all;
