// You are given an integer array cost where cost[i] is the cost of 
// ith step on a staircase. Once you pay the cost, you can either
// climb one or two steps.

// You can either start from the step with index 0, or the step 
// with index 1.

// Return the minimum cost to reach the top of the floor.

// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999


// FIRST ATTEMPT

/**
 * @param {number[]} cost
 * @return {number}
 */
let minCostClimbingStairs = function(cost) {
    if(cost.length === 2){
        return cost[0] < cost[1] ? cost[0] : cost[1];
    }
    const solutions = [0, 0];
    for(let i = 2; i <= cost.length; i++){
        const twoStepCost = solutions[i-2] + cost[i-2];
        const oneStepCost = solutions[i-1] + cost[i-1] 
        solutions[i] = twoStepCost < oneStepCost ? twoStepCost : oneStepCost 
    }

    return solutions[solutions.length - 1];
};

// SECOND ATTEMPT

/**
 * @param {number[]} cost
 * @return {number}
 */
 let minCostClimbingStairs = function(cost) {
    const solutions = [0, 0];
    for(let i = 2; i <= cost.length; i++){
        solutions[i] = Math.min(solutions[i-2] + cost[i-2], solutions[i-1] + cost[i-1]);
    }

    return solutions[solutions.length - 1];
};