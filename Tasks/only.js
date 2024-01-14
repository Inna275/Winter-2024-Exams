// Copy only listed values from dict

'use strict';

const pickValues = (source, ...selectedKeys) => {
  const result = {};
  const sourceKeys = Object.keys(source);

  for (const key of sourceKeys) {
    if (selectedKeys.includes(key)) {
      result[key] = source[key];
    }
  }

  return result;
};

module.exports = pickValues;
