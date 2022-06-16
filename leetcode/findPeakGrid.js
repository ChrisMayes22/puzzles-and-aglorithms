const maxInRow = function(mat, i){
    let result = 0;
    for(let j = 0; j < mat[0].length; j++){
        result = mat[i][j] > mat[i][result] ? j : result;
    }
    return [i, result]
}

const maxInCol = function(mat, j){
    let result = 0;
    for(let i = 0; i < mat.length; i++){
        result = mat[i][j] > mat[result][j] ? i : result;
    }
    return [result, j];
}

const isPeak = function(mat, i, j){
    const edges = [[i+1, j], [i-1, j], [i, j+1], [i, j-1]];
    for(edge of edges){
        if(!mat[edge[0]] || !mat[edge[0]][edge[1]]){
            continue;
        }
        if(mat[i][j] < mat[edge[0]][edge[1]]){
            return false;
        }
    }
    return true;
}

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findPeakGrid = function(mat) {
    let [i, j] = [0,0];
    let largestInRow = true;
    while(true){
        if(isPeak(mat, i, j)){
            return [i, j]
        }
        
        if(largestInRow){
            [i, j] = maxInCol(mat, j);
        } else {
            [i, j] = maxInRow(mat, i);
        }
        largestInRow = !largestInRow;
    }
};