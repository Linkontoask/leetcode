/**
 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]

 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var start = 0
    var end = nums.length - 1

    while (start <= end) {
        var min = start + ((end - start) >> 1)

        if (nums[min] === target) {
            let left = 0;
            let right = 0;
      
            while (nums[min - left] === target) {
              left++;
            }
            while (nums[min + right] === target) {
              right++;
            }
            return [min - left + 1, min + right - 1];
        } else if (nums[min] > target) {
            end = min - 1
        } else {
            start = min + 1
        }
    }

    return [-1, -1]
};

