// Given two arrays of strings a1 and a2 return 
// a sorted array r in lexicographical order of
//  the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
// #Example 2: a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// Notes:
// Beware: r must be without duplicates.
// Don't mutate the inputs.

    /* Thoughts / Planning:

    Need to be careful about only using copies of inputs.

    Maybe use .slice to check each substring of each a2 item?
    ^^^Is there any way to check without doing EVERY substring?

    -Find a way to check if x is a substring of y
    -Go through every element of a1, 

    */

function inArray(a1, a2){
    const arr1 = [...a1]; 
    const arr2 = [...a2];

    function isSubstring(str1, str2, slice=str2, i=0){
        if(str1 === slice){
            return true;
        }
        if(typeof str1 !== 'string' || typeof str2 !== 'string'){
            return false;
        }
        if (i >= str2.length){
            return false;
        }
        return isSubstring(str1, str2, str2.slice(i, i+str1.length), i+1)
    }

    return arr1.reduce(function(acc, curr){
        const filtered = arr2.filter(char => isSubstring(curr, char))
        const duplicate = acc.find(char => curr === char);
        acc = filtered.length > 0 && !duplicate ? acc.concat([curr]) : acc;
        return acc;
    }, []).sort();
}

console.log(inArray(['xyz'], ['', undefined]))

module.exports = {
    inArray
}