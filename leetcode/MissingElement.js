
const getBound = function(nums, uBound, k){
    let prevIndex = uBound;
    while(true){
        let curr = getMissingNumsQuant(nums, 0, uBound);
        if(curr === k) {
            while(nums[uBound] -1 === nums[uBound-1]){
                uBound -= 1;
            }
            return uBound;
        }
        if(curr > k){
            prevIndex = uBound;
            uBound = Math.floor(uBound/2);
        }
        if(curr < k){
            if(prevIndex - uBound <= 1){
                return prevIndex;
            }
            uBound = Math.floor((uBound + prevIndex)/2);
        }

    }
    
}


const getMissingNumsQuant = function(nums, lBound, uBound){
    const indexDiff = uBound - lBound;
    const valDiff = nums[uBound] - nums[lBound];
    return valDiff - indexDiff;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 const missingElement = function(nums, k) {
    
    let lBound = 0;
    let uBound = nums.length-1
    const totalMissing = getMissingNumsQuant(nums, lBound, uBound);
    
    // kth missing integer is off array
    if(totalMissing < k){
        let result = nums[uBound];
        for(let i = totalMissing; i < k; i++){
            result += 1;
        }
        return result;
    }
    
    //kth missing integer is on array
    uBound = getBound(nums, uBound, k);
    
    let count = getMissingNumsQuant(nums, 0, uBound-1);
    while(true){
        let currNum = nums[uBound-1];
        while(true){
            count += 1;
            currNum += 1;
            if(count === k){
                return currNum;
            }
        }
    }
    
};
