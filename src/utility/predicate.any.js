const any = (...preds) => (x) =>
  preds.reduce((truth, pred) =>
    truth === true ||
    !!pred(x),

    x
  );

export default any;
