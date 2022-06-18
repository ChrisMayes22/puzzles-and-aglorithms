/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const rotate = function(nums, k) {
    const preComputed = [];
    preComputed[nums.length-1] = null;
    for(let i = 0; i < nums.length; i++){
        const destination = (i + k) % nums.length;
        preComputed[destination] = nums[i];
    }
    for(let i = 0; i < nums.length; i++){
        nums[i] = preComputed[i];
    }
};