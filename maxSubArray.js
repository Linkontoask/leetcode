var maxSubArray = function (nums) {
  // let c = -Infinity
  // for (let i = 0; i < nums.length; i++) {
  //   let count = 0
  //   for (let j = i; j < nums.length; j++) {
  //     count = count + nums[j]
  //     c = Math.max(count, c)
  //   }
  // }
  // return c

  let c = 0,
    max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    c += nums[i]
    max = Math.max(c, max)
    if (c < 0) {
      c = 0
    }
  }
  return max
}

console.log(maxSubArray([-2]))
