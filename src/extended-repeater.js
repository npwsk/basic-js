const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const joinRepeat = (str, separator, times) => {
  const arr = [];
  for (let i = 0; i < times; i += 1) {
    arr.push(String(str));
  }
  return arr.join(separator);
};

function repeater(str, options = {}) {
  const defaultOptions = {
    repeatTimes: 1,
    separator: '+',
    additionRepeatTimes: 1,
    additionSeparator: '|',
  };
  const currentOptions = {...defaultOptions, ...options};
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = currentOptions;

  let strToRepeat = str;
  if (currentOptions.hasOwnProperty('addition')) {
    const addStr = joinRepeat(addition, additionSeparator, additionRepeatTimes);
    strToRepeat += addStr;
  }

  return joinRepeat(strToRepeat, separator, repeatTimes);
}

module.exports = {
  repeater
};
