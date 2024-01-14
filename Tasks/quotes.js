// Change double quotation to open or close quotation

'use strict';

const EMPTY = '';

const changeQuotes = (inputStr) =>  {
  const res = [];
  let open = false;
  for (const c of inputStr) {
    if (c === '"') {
      res.push(open ? '»' : '«');
      open = !open;
    } else {
      res.push(c);
    }
  }
  return res.join(EMPTY);
};

module.exports = changeQuotes;
