const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (typeof email !== "string" || email.length === 0 || !email.includes("@")) {
    return false;
  }

  return email.substring(email.lastIndexOf("@") + 1);
}

module.exports = {
  getEmailDomain,
};
