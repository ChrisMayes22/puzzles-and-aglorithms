/**
 * @param {string} s
 * @return {number}
 */
//Time Complexity = O(n) where n = s.length;
const lengthOfLongestSubstring = function(s) {
    const char_dict = {};
    let i = 0;
    let j = 0;
    let result = 0;
    
    while(j < s.length){
        if(char_dict[s[j]] !== undefined){
            i = Math.max(i, char_dict[s[j]]);
        }
        result = Math.max(result, j - i + 1)
        char_dict[s[j]] = j + 1;
        j++
    }
    return result;
};


/**
 * General Strategy: Dynamic Programming
 *    This problem has optimal substructure: It can be broken into smaller subproblems.
 *    Namely, we can find the largest substring for a string of size 1, 2, ... n
 *    These problems are overlapping: The largest substring between sizes n and n-1
 *    is max(lengthOfLongest(n), lengthOfLongest(n-1)).
 * 
 * Specific Approach: Sliding Window
 *    The general approach is to maintain a window i...j. We grow j until we find a repeat.
 *    How do we handle a repeat? As we work, we memoize the index of each character encountered. 
 *    When we encounter a repeat, we resize the window's lower bound to the repeat's previous index + 1
 *    As this window thus mutates, we track the size of the window and store the largest window
 *    encountered. We then return that size at the end.
 */