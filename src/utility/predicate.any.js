const any = (...preds) => (x) =>
  preds.reduce((truth, pred) =>
    truth === true ||
    !!pred(truth),

    x
  );

export default any;
