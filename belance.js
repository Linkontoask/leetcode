var isBalanced = function (root) {
  function reducer(root) {
    if (!root) return 0
    const left = reducer(root.left)
    if (left == -1) return -1
    const right = reducer(root.right)
    if (right == -1) return -1
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
  }

  return reducer(root) != -1
}

const tree = {
  val: '1',
  left: {
    val: '1-1',
    left: {
      val: '1-1-1',
      left: {
        val: '1-1-1-1',
      },
      right: {
        val: '1-1-1-2',
        left: {
          val: '1-1-1-1-1',
        },
      },
    },
  },
  right: {
    val: '1-2',
    left: {
      val: '1-2-1',
    },
    right: {
      val: '1-2-2',
    },
  },
}

console.log(isBalanced(tree))
