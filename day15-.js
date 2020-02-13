/**
 * id: 926
 * 超出时间限制，应该使用动态规划
 */

/** 
 * @param {string} S 
 */
var minFlipsMonoIncr = function(S) {
    // 暴力法
    var maby = []
    for (var i = 0; i <= S.length; i++) {
        var tmp = ''
        for (var j = 0; j < S.length; j++) {
            tmp += j >= i ? '1' : '0'
        }
        maby.push(tmp)
    }
    var min = S.length;
    for (var i = 0; i < maby.length; i++) {
        var item = maby[i]
        var prev = 0
        for (var j = 0; j < S.length; j++) {
            if (S[j] !== item[j]) {
                prev++
            }
        }
        min = Math.min(min, prev)
    }
    return min
};

console.log(minFlipsMonoIncr('010010000000000000000000000100'))