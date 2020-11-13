/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let steps = 0,
    end = 0,
    maxPosition = 0

  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, nums[i] + i)
    if (i == end) {
      end = maxPosition
      steps++
    }
  }

  return res
}

console.log(jump([2, 3, 1, 1, 4]))
