import { say, sayIterative, sayRecursive } from './say';
import { fibonacciIterative, fibonacciRecursive } from './fibonacci';
import { factorialIterative, factorialRecursive } from './factorial';

let t0 = performance.now();

console.log(factorialIterative(5))

let t1 = performance.now();

console.log("iterative took " + (t1 - t0) + " milliseconds.");

console.log(factorialRecursive(20));


// let t2 = performance.now();

// console.log(fibonacciRecursive(50))

// let t3 = performance.now();

// console.log("recursive took " + (t3 - t2) + " milliseconds.");