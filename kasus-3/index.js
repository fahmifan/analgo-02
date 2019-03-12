#!/usr/bin/env node

'use strict';

const insertionSort = require('./insertion-sort');

function main() {
  let res = insertionSort([1, 0, 3, 5, 10, 30, 7]);
  console.log(res);

  res = insertionSort([100, 45, 28, 3, 2, 1, 0]);
  console.log(res);

  res = insertionSort([7, 100, 10, 20, 50, 120, 0]);
  console.log(res);
}

main();
