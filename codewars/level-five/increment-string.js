// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, 
// the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
    function increment(arr, i=arr.length-1){
        if(isNaN(parseInt(arr[i]))){ //if we encounter a non-number, 
            arr.splice(i+1, 0, 1) // then add 1 as the first numeric entry,
            return arr.join(''); 
        }
        arr[i] = parseInt(arr[i]) + 1; 
        if(arr[i] !== 10){
            return arr.join('');
        }
        arr[i] = 0 //if arr[i] === 10, then set it to 0
        return increment(arr, i -= 1); //and recurse for the next largest index.
    }
    return increment(strng.split(''));
}

//For refactoring this one, consider using the .substring and/or .match string methods. 

module.exports = {
    incrementString
}