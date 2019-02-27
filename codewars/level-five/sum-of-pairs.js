// Given a list of integers and a single sum value, return the first two values 
// (parse from the left please) in order of appearance that add up to form the sum.

    /* Planning

    Test suite includes 10,000,000 elements, so need to not timeout. Efficiency is key.
    Also want to be mindful of the callstack if we use a recursive strategy. Should
    clear the callstack periodically.
        
    */

const sum_pairs = function(ints, s){ //Challenge author uses snake_case for var declarations; I follow his style.
    const solution = [];
    const dict = {};
    let i = 0;

    while(i < ints.length){
        let target = s - ints[i];
        if(dict[target]){ // Checks if previously encountered number is a solution
            solution.push(target, ints[i])
            break;
        };
        if(dict[ints[i]]){ //Checks if current index is duplicate #.
            i++
            continue;
        }
        dict[ints[i]] = true; //Stores new numbers in dictionary
        i++
    }
    return solution.length >= 2 ? solution : undefined;
}