/**
 * https://leetcode-cn.com/problems/valid-mountain-array/
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let index = 0,
    rise = false,
    decline = false

  while (index < A.length) {
    if (A[index] === A[index + 1]) return false
    if (A[index] < A[index + 1]) {
      if (decline) {
        rise = false
      } else {
        rise = true
      }
    }
    if (A[index] > A[index + 1]) {
      if (rise) {
        decline = true
      } else return false
    }
    index++
  }

  return rise && decline
}

console.log(
  validMountainArray([2, 1, 2, 3, 5, 7, 9, 10, 12, 14, 15, 16, 18, 14, 13])
)
