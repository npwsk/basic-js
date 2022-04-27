const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let curChar;
  let charCount = 0;
  for (let i = 0; i < str.length + 1; i += 1) {
    if (str[i] !== curChar) {
      res += `${charCount > 1 ? charCount : ''}${curChar ?? ''}`;
      curChar = str[i];
      charCount = 1;
    } else {
      charCount += 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
