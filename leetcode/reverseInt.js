/**
 * @param {number} x
 * @return {number}
 */
 const reverse = function(x) {
    let signFlag = 1;
    if(x < 0){
        signFlag = -1
        x = x * -1
    }
    stringNum = x.toString().split("").reverse().join("");
    
    const max = ['2', '1', '4', '7', '4', '8', '3', '6', '4', '7'];
    if(stringNum.length < max.length){
        return parseInt(stringNum) * signFlag;
    } else if(stringNum.length > max.length){
        return 0;
    }

    for(let i = 0; i < max.length; i++){
        console.log(max[i], stringNum[i])
        if(max[i] > stringNum[i]){
            break;
        } else if (stringNum[i] > max[i]){
            return 0;
        }
    }

    return parseInt(stringNum) * signFlag;
};

console.log(reverse(1534236469))