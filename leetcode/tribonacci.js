// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.


// FIRST ATTEMPT

const memo = {};

/**
 * @param {number} n
 * @return {number}
 */
let tribonacci = function(n) {
    if(n < 3){
        return n === 0 ? 0 : 1;
    }
    if(memo[n] !== undefined){
        return memo[n];
    }

    memo[n] = tribonacci(n-3) + tribonacci(n-1) + tribonacci(n - 2);
    return memo[n];
}; 

// SECOND ATTEMPT

const memo = {0:0, 1:1, 2:1};

/**
 * @param {number} n
 * @return {number}
 */
let tribonacci = function(n) {

    if(n in memo){
        return memo[n];
    }

    memo[n] = tribonacci(n-3) + tribonacci(n-1) + tribonacci(n - 2);
    return memo[n];
}; 