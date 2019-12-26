/**
 给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。

 注意:
 数组长度 n 满足以下条件:

 1 ≤ n ≤ 1000
 1 ≤ m ≤ min(50, n)

 示例:
 输入:
 nums = [7,2,5,10,8]
 m = 2

 输出:
 18

 解释:
 一共有四种方法将nums分割为2个子数组。
 其中最好的方式是将其分为[7,2,5] 和 [10,8]，
 因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。

 */

/**
 * 此解法未达到题意 “连续性”，如果非连续的数组可按照此法解答 时间复杂度 O(max(m, m - n))
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  const mid = nums.reduce((a,b) => a + b) / m
  nums.sort((a,b) => b - a)

  const split = Array.from({length: m}).fill([])
  let index = 0
  for (var i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    const before = split[index].length > 0 ? split[index].reduce((a,b) => a + b) : 0
    let check = false
    if (index === (m - 1) && before + num > mid) {
      check = true
      const splitNum = split.map(item => item.reduce((a,b) => a + b))
      const minIndex = splitNum.findIndex(item => item === Math.min(...splitNum))
      split[minIndex] = split[minIndex].concat(num)
      // console.log(minIndex, num, split[minIndex])
    }
    if (before + num > mid && index < (m - 1) && split[index].length !== 0) {
      index++
    }
    if (!check)
      split[index] = split[index].concat(num)
  }

  console.log(split)
  return Math.max(...split.map(item => item.reduce((a,b) => a + b)))
};

console.log(splitArray([7,2,5,10,8], 2))

