// Fib sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// Given a number prod, search for a Fib pair z,u whose product is x.
// Return an array [z,u,true]
//
// If no such number exists, return [z,u,false] where z and u are the first pair whose product is greater than prod.

function productFib(prod){
    const fib = (num1, num2) => {
        if(num1 * num2 < prod) {
            return fib(num2, num1+num2);
        } 
        return [num1, num2, num1 * num2===prod]
    }
    return fib(0,1)
}

