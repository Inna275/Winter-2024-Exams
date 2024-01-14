// Reverse an array, you can't use .reverse()

'use strict';

const reverseArray = (arrayToReverse) => {
  const reversedArray = [];
  for (let i = arrayToReverse.length - 1; i >= 0; i--) {
    reversedArray.push(arrayToReverse[i]);
  }
  return reversedArray;
};

module.exports = reverseArray;
