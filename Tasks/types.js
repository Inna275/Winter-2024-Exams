// Count types in an array

'use strict';

const countTypes = (arr) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const item of arr) {
    const type = typeof item;
    types[type]++;
  }
  return types;
};

module.exports = countTypes;
