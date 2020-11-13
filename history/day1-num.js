// https://leetcode-cn.com/problems/two-sum/
/**
 * 两数之和
 */

const twoSum = function (num, target) {

  for (var i = 0; i < num.length; i++) {
    for (var j = num.length; j > 0; j--) {
      if (num[i] + num[j] === target) {
        return [i, j]
      }
    }
  }

  return []

}


console.log(twoSum([1,3,45,6,23,4], 4).join('-') === '0-1')
console.log(twoSum([1,3,45,6,23,4], 29).join('-') === '3-4')

/**
 * 优化 两数之和
 * @param num
 * @param target
 */
const optimization = function (num, target) {
  const map = new Map(num.map((item, index) => {
    return [item, index]
  }))

  for (var i = 0, len = num.length; i < len; i++) {
    const last = target - num[i]
    if (map.has(last)) {
      return [i, map.get(last)]
    }
  }

  return []
}

console.log(optimization([1,3,45,6,23,4], 4).join('-') === '0-1')
console.log(optimization([1,3,45,6,23,4], 29).join('-') === '3-4')
