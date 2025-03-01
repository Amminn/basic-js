const { NotImplementedError } = require("../extensions/index.js");

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
  if (!domains || domains.length === 0 || !Array.isArray(domains)) {
    return {};
  }

  const dnsStats = {};

  for (const domain of domains) {
    if (typeof domain !== "string") {
      continue;
    }
    const parts = domain.split(".").reverse();
    let currentDns = "";

    for (const part of parts) {
      currentDns += `.${part}`;
      dnsStats[currentDns] = (dnsStats[currentDns] || 0) + 1;
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats,
};
