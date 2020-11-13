/**
 给定一个二维网格 grid。 "." 代表一个空房间， "#" 代表一堵墙， "@" 是起点，（"a", "b", ...）代表钥匙，（"A", "B", ...）代表锁。
 我们从起点开始出发，一次移动是指向四个基本方向之一行走一个单位空间。我们不能在网格外面行走，也无法穿过一堵墙。如果途经一个钥匙，我们就把它捡起来。除非我们手里有对应的钥匙，
 否则无法通过锁。
 假设 K 为钥匙/锁的个数，且满足 1 <= K <= 6，字母表中的前 K 个字母在网格中都有自己对应的一个小写和一个大写字母。换言之，每个锁有唯一对应的钥匙，每个钥匙也有唯一对应的锁。
 另外，代表钥匙和锁的字母互为大小写并按字母顺序排列。
 返回获取所有钥匙所需要的移动的最少次数。如果无法获取所有钥匙，返回 -1 。

 示例 1：

 输入：[
 "@.a.#",
 "###.#",
 "b.A.B"
 ]
 输出：8

 示例 2：
 输入：[
 "@..aA",
 "..B#.",
 "....b"
 ]
 输出：6
  

 提示：

 1 <= grid.length <= 30
 1 <= grid[0].length <= 30
 grid[i][j] 只含有 '.', '#', '@', 'a'-'f' 以及 'A'-'F'
 钥匙的数目范围是 [1, 6]，每个钥匙都对应一个不同的字母，正好打开一个对应的锁。
 */

/**
 * 未完成
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {

  var steps = [], step = 0, key = [], allKey = [...grid.join('')].filter(item => /[a-z]/.test(item))
  var left = true, top = true, right = true, bottom = true, jj = 0;
  for (var i = 0, len = grid.length; i < len; i++) {
    var item = grid[i]

    for (var j = jj, itemLen = item.length; j < itemLen; j++) {
      var char = item[j],
        rightChar = item[j + 1],
        leftChar = item[j - 1],
        topChar = grid[i - 1] ? grid[i - 1][j] : undefined,
        bottomChar = grid[i + 1] ? grid[i + 1][j] : undefined

      console.log(char, leftChar, topChar, rightChar, bottomChar, [i,j])

      if (/[a-z]/.test(char)) {
        key.push(char.toLocaleUpperCase())
      }
      if (right && rightChar && rightChar === '#') {
        if (bottomChar && bottomChar !== '#') {
          if (/[A-Z]/.test(topChar) && key.includes(topChar)) {
            jj = j
            console.log(char, '往下走')
            break
          }
        } else if (topChar && topChar !== '#') {
          if (/[A-Z]/.test(topChar) && key.includes(topChar)) {
            jj = j
            console.log(char, '往上走')
            break
          }
        } else {
          jj = --j
          i--
          right = false
          console.log(char, '往左走', leftChar)
          break
        }
      }
      if (right && rightChar && rightChar !== '#') {
        if (/[A-Z]/.test(rightChar) && key.includes(rightChar)) { // 往右走，并且手里有钥匙

        } else if (rightChar === '.') { // 如果是空间，则步数加 1
          step++
        } else if (!key.map(c => c.toLocaleString()).every(o => allKey.includes(o))) { // 不能往右走了并且没有找到所有钥匙，退回到上一次可选的位置
          console.log(step)
        }
      } else if (bottom) {
        if (/[A-Z]/.test(bottomChar) && key.includes(bottomChar) || bottomChar === '.') {
          jj = j
          console.log(char, '往下走', key, allKey)
          break
        }
      } else if (top && /[A-Z]/.test(topChar) && key.includes(topChar)) {
        i--
        console.log(char, '往上走')
        break
      } else if (left) {

      }

    }
  }

  console.log(key)
  return Math.min(...steps)
};

shortestPathAllKeys([
  "@..a#",
  ".AB#.",
  "....b"
])
