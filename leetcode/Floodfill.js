/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 const floodFill = function(image, sr, sc, color) {
    const startColor = image[sr][sc];
    const visited = {};
    const toVisit = [[sr,sc]];
    
    while(toVisit.length > 0){
        let [currSr, currSc] = toVisit[toVisit.length - 1];
        image[currSr][currSc] = color;
        visited[currSr.toString() + currSc.toString()] = true;
        toVisit.pop();

        let neighbors = [[currSr + 1, currSc], [currSr - 1, currSc],
                        [currSr, currSc + 1], [currSr, currSc - 1]];
        
        for(let neighbor of neighbors){
            if(!visited[neighbor[0].toString() + neighbor[1].toString()]){
                if(image[neighbor[0]] !== undefined && image[neighbor[0]][neighbor[1]] !== undefined){
                    const neighborColor = image[neighbor[0]][neighbor[1]];
                    if(neighborColor === startColor){
                        toVisit.push(neighbor);
                    }
                }
            }
        }
    }
    
    return image;
};