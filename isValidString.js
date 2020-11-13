/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // let left = {},
  //   map = {
  //     '[': ']',
  //     '{': '}',
  //     '(': ')',
  //   }
  // for (let i = 0; i < s.length; i++) {
  //   const value = s[i]
  //   if (map[value]) {
  //     if (left[map[value]]) {
  //       left[map[value]] += 1
  //     } else {
  //       left[map[value]] = 1
  //     }
  //   } else {
  //     if (left[value]) {
  //       left[value] -= 1
  //     } else {
  //       return false
  //     }
  //   }
  // }
  // return !Object.values(left).includes(1)

  let stack = [],
    map = {
      '[': ']',
      '{': '}',
      '(': ')',
    }

  for (let i = 0; i < s.length; i++) {
    const value = s[i]
    if (stack.length === 0) {
      stack.push(value)
      continue
    }
    const pop = stack[stack.length - 1]
    if (map[pop] === value) {
      stack.pop()
    } else {
      stack.push(value)
    }
  }

  return stack.length === 0
  // O(N)
}

console.log(isValid('{[]}([[[]}])'))
