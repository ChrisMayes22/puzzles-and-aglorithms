/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 const findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    let left = 0;
    let right = totalLength - 1;
    const isEven = ((nums1.length + nums2.length) % 2) === 0; 
    while((isEven && right - left !== 1) && (!isEven && left !== right)){
        
    }
};

/*
My plan is to create a sliding window that implements a binary search for the 
middle term shared between nums1 and nums2 without creating any additional data structures.

Update:The correct approach is to build a left and right partition and to then binary search
Where the correct partition edge is. Note that we can compute the size of the right
partition from the left partition.

Try again another day.
*/