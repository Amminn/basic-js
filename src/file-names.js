const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const fileMap = new Map();
  const result = [];

  for (const name of names) {
    if (!fileMap.has(name)) {
      // If name is unique, use it directly
      fileMap.set(name, 1);
      result.push(name);
    } else {
      // If name exists, find the next available (k)
      let count = fileMap.get(name);
      let newName = `${name}(${count})`;

      while (fileMap.has(newName)) {
        count++;
        newName = `${name}(${count})`;
      }

      fileMap.set(name, count + 1); // Update count for base name
      fileMap.set(newName, 1); // Store the new unique name
      result.push(newName);
    }
  }

  return result;
}

module.exports = {
  renameFiles,
};
