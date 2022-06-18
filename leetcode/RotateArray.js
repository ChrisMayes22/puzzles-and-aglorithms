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

const rotateReverse = function(nums, k){
    k = k % nums.length;
    reverseSubArr(nums, 0, nums.length-1);
    reverseSubArr(nums, 0, k-1);
    reverseSubArr(nums, k, nums.length-1);
}

const reverseSubArr = function(arr, i, j){
    while(j > i){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i += 1;
        j -= 1;
    }
}