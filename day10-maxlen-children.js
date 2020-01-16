/**
 给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0
    var dp = Array(nums.length)
    dp[0] = 1
    var maxans = 1
    for (var i = 0; i < nums.length; i++) {
        var maxval = 0
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                maxval = Math.max(maxval, dp[j])
            }
        }
        dp[i] = maxval + 1
        maxans = Math.max(maxans, dp[i])
    }
    return maxans
};

console.log(lengthOfLIS([1,3,5,4,7]))
