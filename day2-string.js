/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

 示例 1:

 输入: "abcabcbb"
 输出: 3
 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 示例 2:

 输入: "bbbbb"
 输出: 1
 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 示例 3:

 输入: "pwwkew"
 输出: 3
 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  const array = [...s]

  let resultString = [], max = 0

  if (array.length === 1) {
    max = 1
  } else {
    for (var i = 0, len = array.length; i < len; i++) {
      const item = array[i]
      const index = resultString.findIndex(i => i === item)
      // console.log(resultString, item)
      if (index >= 0) {
        if (resultString.length-1 === index) {
          resultString = [item]
        } else if (index === 0) {
          resultString.splice(0, 1)
          resultString.push(item)
        } else {
          if (resultString.length > max) {
            max = resultString.length;
          }
          resultString.splice(0, index + 1)
          resultString.push(item)
        }
      } else {
        resultString.push(item)
      }
      if (resultString.length > max) {
        max = resultString.length;
      }
    }
  }

  return max
};

console.log(lengthOfLongestSubstring("abcabcbb"))
