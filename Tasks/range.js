// Generate int array from given range

'use strict';

const INDEX_OFFSET = 1;

const generateIntArray = (...range) => {
  const [from, to] = range;

  if (to < from) {
    return [];
  }

  const arrayLength = to - from + INDEX_OFFSET;
  const resultArray = new Array(arrayLength);

  for (let i = from; i <= to; i++) {
    resultArray[i - from] = i;
  }

  return resultArray;
};

module.exports = generateIntArray;
