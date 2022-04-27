const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((acc, domain) => {
    const elems = domain.split('.');
    const curStats = {};
    for (let i = 0; i < elems.length; i += 1) {
      const cur = '.'.concat(
        elems
          .slice(elems.length - i - 1)
          .reverse()
          .join('.')
      );
      curStats[cur] = (acc[cur] ?? 0) + 1;
    }
    return { ...acc, ...curStats };
  }, {});
}

module.exports = {
  getDNSStats,
};
