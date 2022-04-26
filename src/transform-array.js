const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const transformedArr = [];
  const tmpArr = [];
  // const changes = { double: [], discard: [] };
  for (let i = 0, k = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case '--discard-next':
        tmpArr[k] = { action: 'discard' };
        break;
      case '--discard-prev':
        if (k - 1 >= 0 && tmpArr[k - 1].action === null) {
          tmpArr[k - 1].action = 'discard';
        }
        if (k - 1 >= 0 && tmpArr[k - 1].action === 'double') {
          tmpArr[k - 1].action = null;
        }
        break;
      case '--double-next':
        if (i < arr.length - 1 && tmpArr[k] === undefined) {
          tmpArr[k] = { action: 'double' };
        }
        break;
      case '--double-prev':
        if (k - 1 >= 0 && tmpArr[k - 1].action !== 'discard') {
          tmpArr[k - 1].action = 'double';
        }
        if (k - 1 >= 0 && tmpArr[k - 1].action === 'double') {
          tmpArr[k - 1].action = 'triple';
        }
        break;
      default:
        if (tmpArr[k] === undefined) {
          tmpArr[k] = { value: arr[i], action: null };
        } else {
          tmpArr[k].value = arr[i];
        }
        k += 1;
    }
  }
  for (const elem of tmpArr) {
    switch (elem.action) {
      case null:
        transformedArr.push(elem.value);
        break;
      case 'discard':
        break;
      case 'double':
        transformedArr.push(elem.value, elem.value);
        break;
      case 'triple':
        transformedArr.push(elem.value, elem.value, elem.value);
        break;
    }
  }
  return transformedArr;
}

module.exports = {
  transform
};
