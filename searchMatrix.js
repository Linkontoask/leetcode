/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     if (matrix[i][j] === target) {
  //       return true
  //     }
  //   }
  // }
  // return false

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
    const min = row[0]
    const max = row[row.length - 1]
    if (target < min) {
      return false
    }
    if (target > max) {
      continue
    }
    if (target >= min && target <= max) {
      let j = 0
      while (j < row.length) {
        if (row[j] === target) return true
        j++
      }
    }
  }
  return false

  // const m = matrix.flat(2).sort((a, b) => a - b)

  // let left = 0,
  //   right = m.length - 1

  // while (left <= right) {
  //   const point = (left + (right - left) / 2) | 0
  //   if (m[point] === target) return true
  //   if (target < m[point]) {
  //     right = point - 1
  //   }
  //   if (target > m[point]) {
  //     left = point + 1
  //   }
  // }
  // return false
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
)
