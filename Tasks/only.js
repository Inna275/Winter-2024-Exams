// Copy only listed values from dict

'use strict';

const pickValues = (W, ...only) => {
  const X = Object.keys(W);
  X.forEach((Z) => {
    if (!only.includes(Z)) {
      delete W[Z];
    }
  });
  return W;
};

module.exports = pickValues;
