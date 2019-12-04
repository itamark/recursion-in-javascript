function fibonacciIterative(n) {
    const sequence = [0, 1];
    for(let i = 2; i < n + 1; i++){
        sequence.push(sequence[i-2] + sequence[i-1]);
    }
    return sequence[n];
}

function fibonacciRecursive(n) {
    if(n < 2) return n;
    return (fibonacciRecursive(n-2) + fibonacciRecursive(n-1));
}

function memoize(fn){
    const cache = {};
    return function(arg){
        if(cache[arg]) return cache[arg];
        return fn(arg);
    }
}

const memoizedFibonacciRecursive = memoize(fibonacciRecursive);


export {
    memoizedFibonacciRecursive,
    fibonacciRecursive,
    fibonacciIterative,
}