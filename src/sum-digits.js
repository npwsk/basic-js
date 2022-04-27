const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = n;
  while (Math.floor(sum / 10)) {
    let cur = sum;
    let curSum = 0;
    while (cur > 0) {
      curSum += cur % 10;
      cur = Math.floor(cur / 10);
    }
    sum = curSum;
  }
  return sum;
}

module.exports = {
  getSumOfDigits
};
