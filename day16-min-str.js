/**
 * id: 988
 */

 /**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    var min = '~'
    function dfs(node, A) {
        if (node) {
            A.push(String.fromCharCode(node.val + 97))
            if (!node.left && !node.right) {
                var str = [].concat(A).reverse().join('')
                min = min < str ? min : str 
            }
            dfs(node.left, A)
            dfs(node.right, A)
            A.pop()
        }
    }
    dfs(root, [])
    return min
};
