/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  // if (!root) return []
  // let result = [[root.val]]

  // const bfs = (node, leave) => {
  //   if (!node) return
  //   let tp = []
  //   if (node.left) tp.push(node.left.val)
  //   if (node.right) tp.push(node.right.val)
  //   if (tp.length) {
  //     if (result[leave]) {
  //       result[leave] = [].concat(...result[leave], ...tp)
  //     } else {
  //       result[leave] = tp
  //     }
  //   }

  //   bfs(node.left, leave + 1)
  //   bfs(node.right, leave + 1)
  // }
  // bfs(root, 1)

  // return result.reverse()

  if (!root) return []

  let queue = [root],
    result = []

  while (queue.length) {
    const size = queue.length
    let leave = []

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      leave.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    result.push(leave)
  }

  return result.reverse()
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
    },
  },
  right: {
    val: 4,
    left: {
      val: 5,
    },
    right: {
      val: 6,
    },
  },
}

console.log(levelOrderBottom(root))
