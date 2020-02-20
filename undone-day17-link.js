/**
 * id: 143
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var tp = head.next, statuc = [tp]
    while(tp) {
        tp = tp.next
        if (tp)
            statuc.push(tp)
    }
    var n = statuc.pop(), len = statuc.length, mid = (len / 2) | 0, prev = n
    for (var i = len; i >= mid; i--) {
        var tp = statuc[len - i]
        tp.next = statuc[i]
        if (prev) {
            prev.next = tp
            prev = tp.next
        }
        
    }
    var curr = n.next
    while(curr) {
        prev = curr
        curr = curr.next
        if (!curr) {
            var c = statuc[mid]
            prev.next = new ListNode(c.val)
            break
        }
    }
    head.next = n
    return head
};