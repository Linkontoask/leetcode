/**
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let even = [],
    off = [],
    result = [],
    index = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      even.push(A[i])
    } else {
      off.push(A[i])
    }
  }
  while (even.length || off.length) {
    if (index % 2 === 0) {
      result.push(even.pop())
    } else {
      result.push(off.pop())
    }
    index++
  }
  return result
}

console.log(sortArrayByParityII([4, 2, 5, 7, 1, 2]))
