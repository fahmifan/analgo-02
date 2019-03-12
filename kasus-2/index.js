#!/usr/bin/env node

'use strict';

const linearSearch = require('./linear-search');

function main() {
  const nums = [1, 0, 3, 5, 10, 30, 7];
  console.log(eval(linearSearch(nums, 5) === 3));
  console.log(eval(linearSearch(nums, 7) === 6));
  console.log(eval(linearSearch(nums, 100) === -1));
}

main();
