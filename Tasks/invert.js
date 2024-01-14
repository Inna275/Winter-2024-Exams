// Reverse an array, you can't use .reverse()

'use strict';

const reverseArray = (arrayToReverse) => {
  const reversedArray = [];
  const arrayLength = arrayToReverse.length;

  for (let i = arrayLength - 1; i >= 0; i--) {
    const currentElement = arrayToReverse[i];
    reversedArray.push(currentElement);
  }

  return reversedArray;
};

module.exports = reverseArray;
