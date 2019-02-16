// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer


// ### SECOND ATTEMPT - SIMPLIFIED - BEST VERSION SO FAR ### 
function squareDigitsTwo(num){
    return parseInt((num+'')
                        .split('')
                        .map(item => Math.pow(item,2))
                        .join(''));
}

// ### FIRST ATTEMPT - VERBOSE ###
function squareDigitsOne(num){
    const string = num + '';
    let arr = [];
    Array.prototype.forEach.call(string, function(num){
        arr.push(parseInt(num)*parseInt(num))
    })
    return parseInt(arr.join(''));
}



module.exports = {
    squareDigitsOne,
    squareDigitsTwo
}