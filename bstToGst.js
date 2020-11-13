/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {}

let sum = 0
var rInl = function (root) {
  if (!root) return
  rInl(root.right)
  sum += root.val
  root.val = sum
  rInl(root.left)
}

const tree = {
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

rInl(tree)
