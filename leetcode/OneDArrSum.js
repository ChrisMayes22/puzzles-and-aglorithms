/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums. */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time complexity = O(n)
const runningSum = function(nums) {
    return nums.reduce((arr, num) => {
       if(arr.length > 0){
           num += arr[arr.length-1];
       } 
        arr.push(num);
        return arr;
    }, []);
};