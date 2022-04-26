const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
const countCharacters = (str) =>
  str.split('').reduce((acc, char) => ({ ...acc, [char]: (acc[char] ?? 0) + 1 }), {});

function getCommonCharacterCount(s1, s2) {
  const characters1 = countCharacters(s1);
  const characters2 = countCharacters(s2);
  let commonCharsCount = 0;
  for (const char in characters1) {
    const count1 = characters1[char] || 0;
    const count2 = characters2[char] || 0;
    commonCharsCount += Math.min(count1, count2);
  }

  return commonCharsCount;
}

module.exports = {
  getCommonCharacterCount,
};
