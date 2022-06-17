const shortestPathBinSearch = function(i, colorArr){
    if(colorArr.length === 0){
        return -1;
    }
    let minIndex = 0;
    let maxIndex = colorArr.length-1;
    let target = Math.floor(maxIndex/2);
    
    while(true){
        if(colorArr[target] === i){
            return 0;
        }
        if(colorArr[target] > i){
            maxIndex = target;
            target = Math.floor((minIndex + maxIndex)/2);
        } else if(colorArr[target] < i){
            minIndex = target;
            target = Math.floor((minIndex + maxIndex)/2);
        }
        if(maxIndex - minIndex <= 1){
            const result1 = Math.abs(colorArr[minIndex] - i);
            const result2 = Math.abs(colorArr[maxIndex] - i);
            
            return result1 > result2 ? result2 : result1;
        }
    }
}

/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
const shortestDistanceColor = function(colors, queries) {
    const colorDict = {
        1: [],
        2: [],
        3: []
    };
    
    for(let i = 0; i < colors.length; i++){
        colorDict[colors[i]].push(i);
    }
    
    const result = [];
    for(let query of queries){
        let [i, c] = query;
        result.push(shortestPathBinSearch(i, colorDict[c]));
    }
    return result;
};
