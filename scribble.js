function tribonacci(signature,n){
    if(signature.length >= n){
        return signature;
    }
    const sum = signature.slice(-3).reduce((acc, curr) => {return acc += curr}, 0);
    return tribonacci(signature.concat([sum]), n);
}

console.log(tribonacci([1,1,1],10));