// Get day number

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (day) => {
  const OFFSET = 1;
  const NOT_FOUND = -1;

  for (let i = 0; i < DAYS.length; i++) {
    if (day.startsWith(DAYS[i].toLowerCase())) {
      return i + OFFSET;
    }
  }

  return NOT_FOUND;
};

module.exports = getDayNumber;
