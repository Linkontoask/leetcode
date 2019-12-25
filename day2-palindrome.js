/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

 示例 1：

 输入: "babad"
 输出: "bab"
 注意: "aba" 也是一个有效答案。
 示例 2：

 输入: "cbbd"
 输出: "bb"

 */

/**
 * 找出相同字符最长子串
 * @param {string} s
 * @return {number}
 */
var longSame = function(s) {

  const array = [...s]

  let max = []

  if (array.length === 0) {
    return 0
  }
  if (array.length === 1) {
    return 1
  }
  for (var i = 0, len = array.length; i < len; i++) {
    const item = array[i]
    for (var j = len - 1; j > i; j--) {
      const last = array[j]
      if (item === last) {
        let count = j - i + 1
        max.push([].concat(array).splice(i, count))
      }
    }
  }

  return Math.max(...max.map(item => item.length))
};

console.log(longSame("aaaaa"))

/**
 * 回文 未解决
 * @param {string} s
 * @return {string}
 */
function longestPalindrome (s) {

  let arrayReverse = [...s].reverse()

  while(arrayReverse.length) {
    if (s.includes(arrayReverse.join(''))) {
      console.log(arrayReverse)
      break;
    } else {
      arrayReverse.shift()
    }
  }

  return arrayReverse.reverse().join('')
}

console.log(longestPalindrome("abacdfgdcaba"))
