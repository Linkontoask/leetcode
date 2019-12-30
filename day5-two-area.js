/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  var areaA = (C - A) * (D - B)
  var areaB = (G - E) * (H - F)

  if (E >= C || G <= A || H <= B || F >= D) {
    return areaA + areaB
  }

  var area = {
    leftX: Math.max(A, E),
    leftY: Math.max(B, F),
    rightX: Math.min(C, G),
    rightY: Math.min(H, D)
  }

  return areaA + areaB - (area.rightX - area.leftX) * (area.rightY - area.leftY)
};
