/**
 * id: 390
 */

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    var tmp = Array(n + 1).fill().map((o,i) => i)
    tmp.shift()

    while (tmp.length > 1) {
        for (var i = 0; i < tmp.length; i+=2) {
            tmp[i] = 0
        }
        tmp = tmp.filter(i => i)
        if (tmp.length === 1) return tmp[0]
        for (var i = tmp.length - 1; i >= 0; i -= 2) {
            tmp[i] = 0
        }
        tmp = tmp.filter(i => i)
    }

    return tmp[0]
};

console.log(lastRemaining(100000000))