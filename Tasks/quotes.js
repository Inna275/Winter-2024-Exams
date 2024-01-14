// Change double quotation to open or close quotation

'use strict';

const changeQuotes = (inputStr) =>  {
  let res = '';
  let open = false;
  for (const c of inputStr) {
    if (c === '"') {
      res += open ? '»' : '«';
      open = !open;
    } else {
      res += c;
    }
  }
  return res;
};

module.exports = changeQuotes;
