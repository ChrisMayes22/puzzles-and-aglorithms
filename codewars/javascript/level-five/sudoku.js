// Build a function that will indicate whether a given 10 x 10 Sudoku board is solved.
// The board will be implemented on an array of 10 arrays w/ 10 numbers each.
// Return "Finished!" for solved, "Try again!" for unsolved.


    /* Planning 

        Columns and rows -- can just create helper functions to check if sorted row contains 1-9.
        Tough part is the sections -- [1:1-3, 2:1-3, 3:1-3] [4:1-3, 5:1-3, 6:1-3] etc.
        Would need to give the function:
            -A Starting row
            -A starting index for each row
            -Number of rows to include
            -Number of indices from each row to include
    */


    //NOTE FOR WHEN YOU TRY THIS AGAIN: REMEMBER ARRAY.SLICE!!  

    //Also, consider checking inside the recursion
    //And use dictionary checking

function doneOrNot(board){
    if(board.length !== 9){
        return "Are you playing Sudoku? Input size is not 9x9."
    }
    function isValidRow(row){
        const finishedRow = [1,2,3,4,5,6,7,8,9];
        return (row.sort().filter((num, i) => num === finishedRow[i]).length === 9);
    }
    function getBoardRegion(startRow, lastRow, startIndex, lastIndex, outputArr=[]){ 
        if(startRow > lastRow){
            return outputArr;
        }
        for(let i = startIndex; i <= lastIndex; i++){
            outputArr.push(board[startRow][i]);
        }
        return getBoardRegion(startRow + 1, lastRow, startIndex, lastIndex, outputArr);
    }
    for(let i = 0; i < board.length; i++){ //Checks Rows
        if(!isValidRow(getBoardRegion(i, i, 0, 8))){
            return "Try again!"
        }
        if(!isValidRow(getBoardRegion(0, 8, i, i))){ //Checks columns
            return "Try again!"
        }
    }
    console.log('Passed columns and rows!')
    for(let i = 0; i <= 6; i += 3){ //Checks 3x3 regions
        for(let j = 0; j <= 6; j += 3){
            if(!isValidRow(getBoardRegion(i, i+2, j, j+2))){
                return "Try again!";
            }
        }
    }
    return "Finished!";
}

module.exports = {
    doneOrNot
}