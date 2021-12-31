/* You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint 
stopping you from robbing each of them is that adjacent houses have security 
systems connected and it will automatically contact the police if two adjacent 
houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.*/


// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

/* FIRST ATTEMPT */

/**
 * @param {number[]} nums
 * @return {number}
 */

let rob = function(nums) {
    if(nums.length <= 2){
        return (nums[1] > nums[0] && nums[1] !== undefined) ? nums[1] : nums[0]
    }
    
    thirdValue = nums[1] > nums[0] + nums[2] ? nums[1] : nums[0] + nums[2];
    
    if (nums.length === 3){
        return thirdValue;
    }

    const solutions = [nums[0], nums[1], thirdValue];
    for(let i = 3; i < nums.length; i++){
        const tmpSolution = solutions[i-2] + nums[i] > solutions[i-1] ?  solutions[i-2] + nums[i] : solutions[i-1];
        solutions[i] = solutions[i-3] + nums[i] > tmpSolution ? solutions[i-3] + nums[i] : tmpSolution;
    }

    return solutions[nums.length - 1];
};

console.log(rob([2,1,1,2]));