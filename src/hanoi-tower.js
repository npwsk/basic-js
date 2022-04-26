const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 const getTurnsNumber = (disksCount) => {
  if (disksCount === 0) {
    return 0;
  }
  if (disksCount === 1) {
    return 1;
  }
  return getTurnsNumber(disksCount - 1) * 2 + 1;
};

function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = getTurnsNumber(disksNumber);
  return { turns, seconds: Math.floor((turns / turnsSpeed) * 3600) };
}

module.exports = {
  calculateHanoi
};
