/*
Our example problem:
Write a function that calculates the sum of all numbers
from 1 up to and including some number n.
*/

// one solution
function addUpTo(n) {
    let total = 0;
    for (let i=1; i <= n; i++) {
        total += i;
    }
    return total
}

// calculate efficiency of first solution in time
let t1 = performance.now();
addUpTo(10000000000)
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`);

// another solution
function addUpTo2(n) {
    return n * (n + 1) / 2;
}

// calculate efficiency of second solution in time
let t3 = performance.now();
addUpTo2(10000000000)
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4-t3)/1000} seconds.`);

// Time is not the most reliable metric
// different for different machines
// same machine will record different times
// for fast algorithms, speed measurements may not be precise enough
