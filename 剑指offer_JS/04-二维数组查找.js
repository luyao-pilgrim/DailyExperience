/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][0] > target) {
            return false;
        }
        for(let x = 0; x < matrix[0].length; x++) {
            if(matrix[i][x] === target) {
                return true
            }
        }
    }

    return false;
};