const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const matrixCopy = matrix.map((row) => [...row]);
  let sum = 0;
  for (let i = 0; i < matrixCopy.length; i += 1) {
    for (let j = 0; j < matrixCopy[i].length; j += 1) {
      if (matrixCopy[i - 1] && matrixCopy[i - 1][j] === 0) {
        matrixCopy[i][j] = 0;
      }
      sum += matrixCopy[i][j];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
