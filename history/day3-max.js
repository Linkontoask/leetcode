/**
 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

 输入: [1,8,6,2,5,4,8,3,7]
 输出: 49
 */

/**
 * 暴力法
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  let malaria  = 0
  for (var i = 0, len = height.length; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      const item = height[i]
      const item1 = height[j]
      malaria = Math.max(malaria ,Math.min(item, item1) * (j - i))
    }
  }

  return malaria
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
