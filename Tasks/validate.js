// Validate person name

'use strict';

const LOWERCASE_A = 97;
const LOWERCASE_Z = 122;

const isValid = (name) => {
  const conditions = [
    !name,
    name === '',
    typeof name !== 'string',
    name.length === 0,
    !name.includes(' '),
  ];

  for (const condition of conditions) {
    if (condition) {
      return false;
    }
  }

  for (const char of name) {
    if (char === ' ') continue;
    const charCode = char.toLowerCase().charCodeAt(0);
    if (charCode < LOWERCASE_A || charCode > LOWERCASE_Z) {
      return false;
    }
  }

  return true;
};

module.exports = isValid;
