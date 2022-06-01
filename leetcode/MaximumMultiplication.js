// You are given two integer arrays nums and multipliers of size n and m respectively, 
// where n >= m. The arrays are 1-indexed.s

// You begin with a score of 0. You want to perform exactly m operations. 
// On the ith operation (1-indexed), you will:

// Choose one integer x from either the start or the end of the array nums.
// Add multipliers[i] * x to your score.
// Remove x from the array nums.
// Return the maximum score after performing m operations


/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
let maximumScore = function(nums, multipliers) {

    const n = nums.length;
    const m = multipliers.length;
    const memo = Array.from(Array(m+1), () => Array.from(Array(m+1), () => 0));

    for (let i = m - 1; i >= 0; i--) {
        for (let left = i; left >= 0; left--) {
            let mult = multipliers[i];
            let right = n - 1 - (i - left);
            memo[i][left] = Math.max(mult * nums[left] + memo[i + 1][left + 1], 
                                   mult * nums[right] + memo[i + 1][left]);
        }
    }
    console.log(memo);    
    return memo[0][0];
};

maximumScore([1,2,3], [3,2,1])