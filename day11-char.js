/**
 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。
 */

 /**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    var r = [], map = {}, index = 0

    for (var i = 0; i < strs.length; i++) {
        var item = strs[i];

        var q = [...item].sort().join('');

        if (typeof map[q] !== 'undefined') {
            var j = map[q]
            r[j] = r[j] ? r[j].concat(item) : [item]
        } else {
            map[q] = index
            r[index] = [item]
            index++
        }
    }

    return r;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
