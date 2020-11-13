/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = {},
    max = 0,
    tmp = 0

  for (let i = 0; i < s.length; i++) {
    const j = map[s[i]] === undefined ? -1 : map[s[i]]
    map[s[i]] = i
    tmp = tmp < i - j ? tmp + 1 : i - j
    max = Math.max(tmp, max)
  }

  return max
}

console.log(
  lengthOfLongestSubstring(
    'Given a string, find the length of the longest substring without repeating characters'
  )
)
