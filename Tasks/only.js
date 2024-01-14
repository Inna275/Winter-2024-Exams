// Copy only listed values from dict

'use strict';

const pickValues = (obj, ...keys) => {
  const result = {};
  const X = Object.keys(obj);
  X.forEach((Z) => {
    if (keys.includes(Z)) {
      result[Z] = obj[Z];
    }
  });
  return result;
};

module.exports = pickValues;
