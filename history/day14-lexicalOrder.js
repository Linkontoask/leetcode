/**
 * id: 386
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var arr = Array(n + 1).fill().map((o,i)=>String(i))
    arr.shift()

    return arr.sort().map(i => Number(i))
};