/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

 你可以假设 nums1 和 nums2 不会同时为空。

 示例 1:

 nums1 = [1, 3]
 nums2 = [2]

 则中位数是 2.0
 示例 2:

 nums1 = [1, 2]
 nums2 = [3, 4]

 则中位数是 (2 + 3)/2 = 2.5

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const array = nums1.concat(nums2).sort((a, b) => a - b)

  let media
  if ((array.length & 1) === 1) {
    media = array[array.length / 2 | 0]
  } else {
    const index = array.length / 2
    media = (array[index] + array[index - 1]) / 2
  }

  return media
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))
