/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let left = n,
    right = n,
    result = '',
    res = []

  const gen = (result, left, right) => {
    if (left === 0 && right === 0) {
      return res.push(result)
    }
    if (left > 0) {
      gen(result + '(', left - 1, right)
    }
    if (left < right) {
      gen(result + ')', left, right - 1)
    }
  }

  gen(result, left, right)

  return res
}

console.log(generateParenthesis(2))
