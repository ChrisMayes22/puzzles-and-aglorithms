// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p 
// is equal to k * n.
// In other words:
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.


// ### SOLUTION TWO - BEST SOLUTION SO FAR ###
function digPowTwo(n, p){
    let product = Array.prototype
                    .map.call(n+'', (item, i) => Math.pow(item, p+i))
                    .reduce((acc, curr) => acc+curr);
    return product % n === 0 ? product/n : -1; 
}

// ### SOLUTION ONE - VERBOSE ### 
function digPowOne(n, p){
    function exponent(base, power, product = base){ // NOTE TO SELF IN FUTURE: Math object comes with .pow method!!
        if(power === 0){
            return 1;
        } else if (power === 1){
            return product
        }
        product *= base;
        power -= 1;
        return exponent(base, power, product);
    }
    let product = Array.prototype.map.call((n+''), item => parseInt(item)).map((item, i) => exponent(item, p+i))
        .reduce((acc, curr) => acc+curr);
    return product % n === 0 ? product/n : -1; 
}



module.exports = {
    digPowOne,
    digPowTwo
}