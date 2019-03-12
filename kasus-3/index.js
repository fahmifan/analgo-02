#!/usr/bin/env node

const binarySearch = require('./binary-search');
const random = require('../utils/random');

function main() {
  const bsLable = 'binarySearch'; 
  let maxArr = [10, 50, 100, 200, 300, 500, 999, 2000, 10000, 100000];

  maxArr.forEach((m, idx) => {
    let nums = []; 
    for (let i = 0; i < m; i++) {
      nums.push(random.getInt(0+i, m));
    }
    
    // cpnums is sorted array
    let cpnums = [...nums];
    cpnums.sort((a, b) => a - b);
  
    // key is random between range
    let key = random.getInt(cpnums[0], m);
    console.log(`\n>>> search ${key} in ${m} numbers.`);

    console.time(bsLable);
    binarySearch(cpnums, key);
    console.timeEnd(bsLable);  
  });
}

main();