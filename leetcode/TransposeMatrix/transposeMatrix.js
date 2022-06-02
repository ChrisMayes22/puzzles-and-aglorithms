/* Given a 2D integer array matrix, return the transpose of matrix. */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// Time Complexity = O(m * n) = O(x^2)
var transpose = function(matrix) {
  
    const rowCount = matrix[0].length;
    const result = [];
      
    for(let row = 0; row < rowCount; row++){
        result.push(matrix.reduce((newRow, oldRow) => {
            newRow.push(oldRow[row]);
            return newRow;
        }, []));
    }
      
    return result;
  };