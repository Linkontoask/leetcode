/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 最接近每组数字的和
  // let resultArr = []
  // for (let i = 0; i < nums.length; i++) {
  //   const dif = Math.abs(nums[i] - target)
  //   resultArr.push({
  //     dif,
  //     i,
  //   })
  //   resultArr.sort((a, b) => a.dif - b.dif)
  //   if (resultArr.length > 3) resultArr.pop()
  // }
  // let num = 0
  // resultArr.forEach((item) => (num += nums[item.i]))
  // return num
  // O(N)
}

console.log(threeSumClosest([0, 2, 1, -3], 1))
