/*
Given:

function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

This function is too inefficient and will timeout on large test cases.

KEEP THE RECURSIVE TREE STRATEGY, but make it more efficient using memoization.
*/

function fibonacci(n) {
    if(!fibonacci.dict) fibonacci.dict = {};
    if(n == 0 || n == 1) return n;
    if(fibonacci.dict[n]) return fibonacci.dict[n]; 
    fibonacci.dict[n] = fibonacci(n-1) + fibonacci(n-2);
    return fibonacci.dict[n];
}

console.log(fibonacci(10));