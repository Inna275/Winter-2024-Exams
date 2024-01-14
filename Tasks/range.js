// Generate int array from given range

'use strict';

const generateIntArray = (...Range) => {
  let [from, to] = Range;
  if (to >= from) {
    Range = new Array(to - from + 1);
    for (let i = from; i <= to; i++) {
      Range[i - from] = i;
    }
  } else {
    return [];
  }
  return Range;
};

module.exports = generateIntArray;
