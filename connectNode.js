/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root

  let queue = [root]

  while (queue.length) {
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (i < size - 1) {
        node.next = queue[0]
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  return root
}

const root = {
  val: 1,
  left: {
    val: 2,
    next: null,
    left: {
      val: 3,
      next: null,
    },
  },
  right: {
    val: 4,
    next: null,
    left: {
      val: 5,
      next: null,
    },
    right: {
      val: 6,
      next: null,
    },
  },
  next: null,
}

console.log(connect(root))
