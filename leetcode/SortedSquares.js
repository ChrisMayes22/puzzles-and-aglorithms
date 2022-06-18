/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const sortedSquares = function(nums) {
    let i = 0;
    let j = nums.length-1;
    let resIndex = j;
    const result = [];
    while(j >= i){
        let [left, right] = [Math.pow(nums[i], 2), Math.pow(nums[j], 2)];
        if(left > right){
            result[resIndex] = left;
            resIndex -= 1;
            i += 1;
        } else {
            result[resIndex] = right;
            resIndex -= 1;
            j -= 1;
        }
    }
    return result; 
};