const any = (...preds) => (x) =>
  preds.reduce((truth, pred) => {
    return truth || !!pred(x);
  }, false);

export default any;
