// You are given an array strarr of strings and an integer k. 
// Your task is to return the first longest string consisting of 
// k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsec(strarr, k) {
    if(k > strarr.length || k <= 0){
        return "";
    }
    return strarr.reduce(function(acc, curr, i, arr){
        for(j = 1; j < k; j++){
            if(arr[j+i]){
                curr += arr[j + i];
            }
        }
        acc = acc.length >= curr.length ? acc : curr;
        return acc;
    }, '')
}

module.exports = {
    longestConsec
}