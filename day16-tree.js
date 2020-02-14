/**
 * 二叉树的遍历
 */

 function treeNode (val, left, right) {
     this.val = val;
     this.left = left;
     this.right = right;
 }
 const l2 = new treeNode(3)
 const l3 = new treeNode(4)
 const l1 = new treeNode(1, l2, l3)
 const r2 = new treeNode(4)
 const r1 = new treeNode(2, undefined, r2)
 const node = new treeNode(25, l1, r1)

 /**
  * 
  * @param {*} root 
  * @param {Array} A 
  */
 var min = '~'
 function tree (root, A) {
    if (root) {
        // console.log(root.val)
        A.unshift(String.fromCharCode(root.val + 97))
        if (!root.left && !root.right) {
            var str = A.join('')
            min = min < str ? min : str 
        }
        tree(root.left, A)
        tree(root.right, A)
        A.pop()
    }
 }
 tree(node, [])
 console.log(min)