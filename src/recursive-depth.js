const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (const item of arr) {
      if (Array.isArray(item)) {
        const itemDepth = this.calculateDepth(item);
        console.log(item, itemDepth);
        depth = Math.max(depth, itemDepth + 1);
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
