// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

// ## SECOND ATTEMPT - Regex strategy - Best so far ##
function vowelCountRegex(string){
    return string.match(/[aeiou]/ig) ? string.match(/[aeiou]/ig).length : 0; 
}

// ## FIRST ATTEMPT ##
function vowelCount(string){
    let count = 0;
    Array.prototype.forEach.call(string, function(char){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count += 1;
        }
    })
    return count;
}

module.exports = {
    vowelCount,
    vowelCountRegex
};