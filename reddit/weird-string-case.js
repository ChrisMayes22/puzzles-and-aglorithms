// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
// and returns the same string with all even indexed characters in each word upper cased, 
// and all odd indexed characters in each word lower cased. The indexing just explained is 
// zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces 
// will only be present if there are multiple words. Words will be separated by a single space(' ').


// ## THIRD ATTEMPT - SIMPLIFIED - BEST SO FAR ##
function toWeirdCaseThree(string){
    return Array.prototype
            .map.call(string, (item, i) => i%2 ? item.toLowerCase() : item.toUpperCase())
            .join('');
}

// ## FIRST ATTEMPT - SPLIT AND JOIN ##
function toWeirdCaseOne(string){
    const stringArray = string.split('');
    stringArray.forEach((item, i) => {
        stringArray[i] = i%2 ? item.toLowerCase() : item.toUpperCase();
    })
    return stringArray.join('');
}

// ## SECOND ATTEMPT - USE FOREACH.CALL ##
function toWeirdCaseTwo(string){
    let strCopy = '';
    Array.prototype.forEach.call(string, function(char, i){
        strCopy += i%2 ? char.toLowerCase() : char.toUpperCase();
    })
    return strCopy;
};



module.exports = {
    toWeirdCaseOne,
    toWeirdCaseTwo,
    toWeirdCaseThree
}
