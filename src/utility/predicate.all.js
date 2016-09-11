const all = (...preds) => (x) =>
  preds.reduce((truth, pred) =>
    truth !== false &&
    !!pred(x),

    x
  );

export default all;
