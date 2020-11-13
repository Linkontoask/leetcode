/**
 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

 示例:

 输入: 3
 输出:
 [
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
 ]

 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {

  let result = []
  for (var i = 0; i < n; i++) {
    result[i] = []
  }

  var l = 0, r = n - 1, t = 0, b = n - 1;
  var num = 1, tar = n * n;
  while (num <= tar) {
    for (var i = l; i <= r; i++) result[t][i] = num++; // left to right.
    t++;
    for (var i = t; i <= b; i++) result[i][r] = num++; // top to bottom.
    r--;
    for (var i = r; i >= l; i--) result[b][i] = num++; // right to left.
    b--;
    for (var i = b; i >= t; i--) result[i][l] = num++; // bottom to top.
    l++;
  }

  return result
};

console.log(generateMatrix(3))
