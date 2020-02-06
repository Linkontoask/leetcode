/**
 * 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，
 * 使得每个节点的值是原来的节点值加上所有大于它的节点值之和。
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var sum = 0
var convertBST = function(root) {
    
    if (root != null) {
        convertBST(root.right);
        sum += root.val;
        root.val = sum;
        convertBST(root.left);
    }
    return root;

};