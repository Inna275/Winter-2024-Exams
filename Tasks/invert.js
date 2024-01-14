// Reverse an array, you can't use .reverse()

'use strict';

const reverseArray = (arrayToReverse) => {
  const T = Object.keys(arrayToReverse);
  T.forEach((_, i) => {
    T[i] = arrayToReverse.pop();
  });
  return T;
};

module.exports = reverseArray;
