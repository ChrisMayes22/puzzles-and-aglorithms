// The goal of this exercise is to convert a string to a new string where each character 
// in the new string is '(' if that character appears only once in the original string, or 
// ')' if that character appears more than once in the original string. Ignore capitalization
//  when determining if a character is a duplicate.

// Examples:
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

// ### FIRST ATTEMPT
function duplicateEncode(word){
    return word
            .toLowerCase()
            .split('')
            .reduce(function(acc, curr){
                acc += Array.prototype.filter.call(word, (char => char === curr)).length > 1 ? ')' : '('
                return acc;
            }, '')
}

module.exports = {
    duplicateEncode
}