// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types
// or for non-character characters.

//## FINAL ATTEMPT - USE SPLIT APPROPRIATELY 

function findShort(s) {
    return Math.min.apply(null, s.split(' ').map(word => word.length));  //Today I learned a bit about how the .split method works.
}

// ### FIRST ATTEMPT - VERBOSE ###
function findShortOne(s){
    let position = 0, wordLengths = [0];
    Array.prototype.forEach.call(s, function(char){
        if(char === " "){
            position += 1;
            wordLengths[position] = '';
        } else {    
            wordLengths[position] += 1; 
            wordLengths[position] = parseInt(wordLengths[position])
        }
    })
    return Math.min.apply(null, wordLengths);
}

// ### SECOND ATTEMPT - ALL ONE REDUCE METHOD ###
function findShortTwo(s){
    return Array.prototype.reduce.call(s, function(acc, char, i){
        if(char === " " || (i+1) === s.length){
            acc.smallestSoFar = acc.counter < acc.smallestSoFar ? acc.counter : acc.smallestSoFar;
            acc.counter = 0;
        } else {
            acc.counter += (i+2) === s.length ? 2 : 1; 
        }
        return acc;
    }, {counter: 0, smallestSoFar: 9999}).smallestSoFar;
}

console.log(findShortTwo('Hello there'));

module.exports = {
    findShortOne,
    findShortTwo,
    findShort
}