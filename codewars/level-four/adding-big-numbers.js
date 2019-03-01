//Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
//These numbers are BIG.

    /*  Planning

    -Could essentially just create an algorithm that adds strings?

    SEPARATION OF CONCERNS / TASKS
    Need to:
        -Match places in the addends -- 1s w/ 1s place, 10s with 10s, etc
        -Add matched numbers **from 1s to the highest place**
            -Note: need to implement carrying

    How to:
        -Match -- create 2 arrays and iterate from last index
            What if 1 array much larger than another?
            Carry as necessary, then just take the larger #
            
            Need to use the larger array for indices. How do we find larger array?
                check for .length for right now, maybe can find more elegant solution later.
        -Add -- Will need to parseInt() or otherwise convert, then add matched indices.
            How do we carry?
            could use a recursive function that has a "carry" argument

    */

function add(a, b) {
    const longNum = a.length > b.length ? a : b;
    const shortNum = a.length > b.length ? b : a;

    function recursiveAdd(i = 1, carry = 0, finalSum = []){
        if(i === longNum.length+1){
            if(carry) finalSum.unshift(1);
            return finalSum;
        } 
        let sum = +longNum[longNum.length - i] + (+shortNum[shortNum.length - i] || 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        sum = sum%10;
        finalSum.unshift(sum);
        return recursiveAdd(i+1, carry, finalSum);
    }
    return recursiveAdd().join('');
}