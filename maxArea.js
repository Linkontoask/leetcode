/**
 * https://leetcode-cn.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let x = height.length - 1
  let i = 0,
    j = x,
    res = 0

  while (i < j) {
    res = Math.max(Math.min(height[i], height[j]) * x, res)
    if (height[i] < height[j]) i++
    else j--
    x--
  }

  return res
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
