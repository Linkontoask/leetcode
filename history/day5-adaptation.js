/**
 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。
 如果答案不存在，则返回空字符串。

 示例 1:

 输入:
 s = "abpcplea", d = ["ale","apple","monkey","plea"]

 输出:
 "apple"
 示例 2:

 输入:
 s = "abpcplea", d = ["a","b","c"]

 输出:
 "a"
 说明:

 所有输入的字符串只包含小写字母。
 字典的大小不会超过 1000。
 所有输入的字符串长度不会超过 1000。

 */

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {

  var sA = [...s], result = []

  for (var i = 0, len = d.length; i < len; i++) {
    var item = d[i]
    var dd = [...item]
    var ss = [].concat(sA)
    for (var j = 0; j < ss.length; j++) {
      if (ss[j] === dd[0]) {
        dd.shift()
      }
    }
    if (dd.length === 0) {
      result.push(item)
    }
  }

  if (result.length <= 0) {
    return ''
  }

  var char = '', max = 0
  for (var i = 0; i < result.length; i++) {
    var item = result[i]

    if (item.length >= max) {
      max = item.length
      if (char === '') {
        char = item
      } else {
        var iNum = [...item].map(o => o.charCodeAt())
        var cNum = [...char].map(o => o.charCodeAt())
        if (iNum.length > cNum.length) {
          char = item
        } else {
          for (var j = 0; j < iNum.length; j++) {
            if (cNum[j] > iNum[j]) {
              char = item
              break
            }
            if (cNum[j] !== iNum[j]) break
          }
        }
      }
    }
  }

  return char
};

