// Find an intersection of two dictionaries

'use strict';

const findIntersection = (dict1, dict2) => {
  const keysDict1 = Object.keys(dict1);
  for (const key of keysDict1) {
    if (dict1[key] === dict2[key]) {
      dict2[key] = dict1[key];
    } else {
      delete dict1[key];
    }
  }
  return dict1;
};

module.exports = findIntersection;
