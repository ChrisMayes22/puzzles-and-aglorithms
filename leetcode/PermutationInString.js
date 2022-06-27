/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 const checkInclusion = function(s1, s2) {
    
    if(s1.length > s2.length){
        return false;
    }
    
    const s1CharsCount = 'abcdefghijklmnopqrstuvwxyz'.split('')
        .reduce((dict, char) => {
            dict[char] = 0;
            return dict;
        }, {});
    let s2CharsCount = {...s1CharsCount};
    
    for(let char of s1){
        s1CharsCount[char] += 1;
    }
    for(let i = 0; i < s1.length; i++){
        s2CharsCount[s2[i]] += 1;
    }

    let lower = 0;
    let upper = s1.length-1;
    while(upper < s2.length){
        if(dictShallowEqual(s1CharsCount, s2CharsCount)){
            return true
        }
        
        s2CharsCount[s2[lower]] -= 1;
        lower += 1;
        upper += 1;
        s2CharsCount[s2[upper]] += 1;        
    }
    return false;
    
};

const dictShallowEqual = function(dict1, dict2){
    const keys1 = Object.keys(dict1);
    const keys2 = Object.keys(dict2);
    
    if(keys1.length !== keys2.length){
        return false
    }
    
    for(let key of keys1){
        if(dict1[key] !== dict2[key]){
            return false;
        }
    }
    
    return true;
    
}