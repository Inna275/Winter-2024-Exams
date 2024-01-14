// Get one random element from an array

'use strict';

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomElement = (arr) => arr[getRandomIndex(arr)];

module.exports = getRandomElement;
