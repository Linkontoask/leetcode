/**
 * id: 77
 */

 /**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var out = []
    function fn(frist, curr) {
        if (curr.length === k) {
            out.push(curr)
        }
        for (var i = frist; i <= n; i++) {
            curr.push(i)
            fn(i + 1, curr.slice())
            curr.pop()
        }
    }
    fn(1, [])
    return out
};