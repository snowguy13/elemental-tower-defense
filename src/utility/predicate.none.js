import any from './predicate.any';
import not from './predicate.not';

const none = (...preds) => not(any(preds));
