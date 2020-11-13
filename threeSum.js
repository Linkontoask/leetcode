/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。



示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums || nums.length < 3) return []
  let result = [],
    second,
    last
  // 排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue
    second = i + 1
    last = nums.length - 1
    while (second < last) {
      const sum = nums[i] + nums[second] + nums[last]
      if (!sum) {
        // sum 为 0
        result.push([nums[i], nums[second], nums[last]])
        // 去重
        while (second < last && nums[second] === nums[second + 1]) second++
        while (second < last && nums[last] === nums[last - 1]) last--
        second++
        last--
      } else if (sum < 0) second++
      else if (sum > 0) last--
    }
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

console.log(Date.now())