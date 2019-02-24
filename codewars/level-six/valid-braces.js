// Write a function that takes a string of braces, and determines if the order of the braces is valid. 
// It should return true if the string is valid, and false if it's invalid.

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// ### Planning / Thinking ###

//What are the conditions / of valid parentheses?
// -- An even number of parentheses
// -- Even-numbered parentheses (excluding other chars) should be open, 
//      odd-numbered closed
// -- If you encounter an open bracket inside a pair of valid parentheses, 
//      you must also encounter its closed bracket inside the parentheses 

//What if we have a reduce method that eliminates complete bracket/parenthesis statements,
//And returns false if it tries to eliminate an expression with something inside of it? 


//### FIRST ATTEMPT ###
function validBraces(braces){
    const validStrings = ['()','[]','{}'];
    const arr = !Array.prototype.reduce.call(braces, function(accu, curr){
        accu = accu.concat(curr);
        var searchValid = validStrings.map(valid => accu.slice(-2).join('') === valid);
        while(searchValid[0] || searchValid[1] || searchValid[2]){
            accu.splice(-2, 2);
            searchValid = validStrings.map(valid => accu.slice(-2).join('') === valid);
        }
        return accu;
    }, [])[0];
    return arr;
}

module.exports = {
    validBraces
}