const all = (...preds) => (x) =>
  preds.reduce((truth, pred) =>
    truth !== false &&
    !!pred(truth),

    x
  );

export default all;
