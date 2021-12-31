// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

/* FIRST ATTEMPT (recursive top-down) */

const memo_dict = {};
/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function(n) {


    if(n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else if (memo_dict[n]){
        return memo_dict[n];
    }

    const result = climbStairs(n - 1) + climbStairs(n - 2);
    memo_dict[n] = result;
    return result;
};

/* SECOND ATTEMPT (iterative bottom-up) */

const memo_dict = {};
/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function(n) {

    const solutions = [1, 2];

    for(let i = 2; i < n; i++){
        solutions[i] = solutions[i-1] + solutions[i-2];
    }

    return solutions[n-1];
};