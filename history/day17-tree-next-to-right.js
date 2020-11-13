/**
 * id: 117
 */
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
var connect = function(root) {
    if (!root) {
        return root
    }
    var statuc = [root]
    while(statuc.length) {
        var len = statuc.length // 之所以要在这里取长度，因为push会改变length，避免把下一层的在这一层处理
        for (var i = 0; i < len; i++) {
            var n = statuc.shift()
            if (i < len - 1) {
                n.next = statuc[0]
            }
            // 下一层
            if (n.left) statuc.push(n.left)
            if (n.right) statuc.push(n.right)
        }
        
    }
    return root
};