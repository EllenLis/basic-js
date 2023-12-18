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
function getCommonCharacterCount(s1, s2) {
  const countMap1 = createCountMap(s1);
  const countMap2 = createCountMap(s2);
  let commonCount = 0;

  for (let char in countMap1) {
    if (countMap2[char]) {
      commonCount += Math.min(countMap1[char], countMap2[char]);
    }
  }

  return commonCount;
}

function createCountMap(str) {
  const countMap = {};
  for (let char of str) {
    if (!countMap[char]) {
      countMap[char] = 0;
    }
    countMap[char]++;
  }
  return countMap;
}


module.exports = {
  getCommonCharacterCount
};
