// Change double quotation to open or close quotation

'use strict';

const changeQuotes = (inputStr) => {
  let result = '';
  let isQuoteOpen = false;

  for (const char of inputStr) {
    if (char === '"') {
      result += isQuoteOpen ? '»' : '«';
      isQuoteOpen = !isQuoteOpen;
    } else {
      result += char;
    }
  }

  return result;
};

module.exports = changeQuotes;
