// Count types in an array

'use strict';

types_ = (s) => {
  types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of s) {
    const t = typeof i;
    types_[t]++;
  }
  return types_;
};

module.exports = types_;
