#!/usr/bin/env node

'use strict';

const maxGrade = require('./max-grade');

function main() {
  const max = maxGrade([1, 0, 3, 5, 10, 30, 7]);
  console.log(eval(max === 30));
}

main();
