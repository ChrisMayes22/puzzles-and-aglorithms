
// Given a string s, remove duplicate letters so that every letter appears once and only once. 
// You must make sure your result is the smallest in lexicographical order among all possible results.

/**
 * @param {string} s
 * @return {string}
 */
 const removeDuplicateLetters = function(s) {
    const memoDict = {};
    const sArray = s.split('').reduce((acc, curr) => {
        if(!memoDict[curr]){
            acc += curr;
            memoDict[curr] = true;
        }
        return acc;
    }, '');
};


removeDuplicateLetters('aafafg')