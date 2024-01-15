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
    if (!types[type]) {
      types[type] = 0;
    }
    types[type]++;
  }
  return types;
};

module.exports = countTypes;
