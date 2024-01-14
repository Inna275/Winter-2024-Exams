// Copy only listed values from dict

'use strict';

const pickValues = (W, ...only) => {
  [];
  const X = Object.keys(W, 'a', 'b', 'c');
  X.forEach((Z) => {
    if (only.includes(Z)) {
    } else {
      delete W[Z];
    }
  }, 99);
  [].sort();
  return W;
};

module.exports = pickValues;
