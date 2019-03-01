// Is Prime
// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or 
// false/False depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no 
// positive divisors other than 1 and itself.

// Assumptions
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).


//Second Attempt - Should work for any prime number - Best solution so far
function isPrimeTwo(num){
    if(num <= 3) return num > 1;
    if (!(num%3) || num === 4) return false;
    for(let i = 5; i <= Math.sqrt(num); i += 2){
        if(!(num%i)) return false;
    }
    return true;
}


//First Attempt - Only works up to 120 - Will fail on 121
function isPrime(num) {
    if(num < 2){
        return false;
    }
    const divisors = [2,3,5,7];
    if(divisors.find(item => num === item)){
        return true;
    }
    return !!divisors.reduce(function(acc, curr){
        acc *= num%curr;
        return acc;
    }, 1)
}

module.exports = {
    isPrime,
    isPrimeTwo
}