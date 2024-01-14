// Copy only listed values from dict

'use strict';

const pickValues = (obj, ...keys) => {
  const result = {};

  for (const key of Object.keys(obj)) {
    if (keys.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
};

module.exports = pickValues;
