const { NotImplementedError } = require("../extensions/index.js");

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
  if (typeof n !== "number" || n < 0) {
    return NaN;
  }
  let currentNumber = n;

  while (currentNumber >= 10) {
    currentNumber = String(currentNumber)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return currentNumber;
}

module.exports = {
  getSumOfDigits,
};
