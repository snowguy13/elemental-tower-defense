const range = (max, { min = 0, step = 1, inclusive = false } = {}) => {
  let arr = [];
  let val = min;

  while( val < max || ( inclusive && (val === max) ) ) {
    arr.push(val);
    val += step;
  }

  return arr;
};

export default range;
