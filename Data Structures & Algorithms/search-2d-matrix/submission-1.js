class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = matrix.length;
        let col = matrix[0].length;
        let left = 0;
        let right = col * row - 1;
        let mid = 0;
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            let i = Math.floor(mid / col);
            let j = mid % col;
            if (matrix[i][j] === target) return true;
            if (matrix[i][j] > target) right = mid - 1;
            if (matrix[i][j] < target) left = mid + 1;
        }
        return false;
    }
}
