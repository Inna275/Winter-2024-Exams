// Generate int array from given range

'use strict';

const generateIntArray = (...range) => {
  let [from, to] = range;
  if (to < from) {
    return [];
  }
  const resultArray = new Array(to - from + 1);
  for (let i = from; i <= to; i++) {
    resultArray[i - from] = i;
  }
  return resultArray;
};

module.exports = generateIntArray;
