const reverseString = function(s) {
    s = s.split('');
    let i = 0;
    let j = s.length-1;
    while(j > i){
        [s[i], s[j]] = [s[j], s[i]];
        i += 1;
        j -= 1;
    }
    return s.join('');
};

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    return s.split(' ').reduce((prev, curr, i, arr) => {
        curr = reverseString(curr);
        if(i < arr.length-1){
            curr += ' ';
        }
        return prev + curr;
    }, '');
};