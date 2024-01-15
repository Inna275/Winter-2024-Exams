// Validate person name

'use strict';

const LOWERCASE_A = 97;
const LOWERCASE_Z = 122;

const isValid = (name) => {
  if (!name) return false;
  if (name === '') return false;
  if (typeof name !== 'string') return false;
  if (name.length === 0) return false;
  if (!name.includes(' ')) return false;
  for (const char of name) {
    if (char === ' ') continue;
    const charCode = char.toLowerCase().charCodeAt(0);
    if (charCode >= LOWERCASE_A && charCode <= LOWERCASE_Z) {
    } else {
      return false;
    }
  }
  return true;
};

module.exports = isValid;
