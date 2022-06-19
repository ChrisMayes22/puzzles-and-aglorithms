/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const moveZeroes = function(nums) {
    let j = nums.length - 1;
    for(let i = 0; i < nums.length; i++){
        while(nums[i] === 0){
            unshiftSubArray(nums, i, j);
            j -= 1;
            if(j <= i){
                break;
            }
        }
    }
};

const unshiftSubArray = function(arr, start, j){
    for(let i = start; i < j; i++){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }
}