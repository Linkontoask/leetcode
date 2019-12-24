// https://leetcode-cn.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const ListNode = function(val) {
  this.val = val;
  this.next = null;
}

/**
 * 未解决
 * @param l1
 * @param l2
 * @returns {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let map = {
    l1: [],
    l2: []
  }
  function listToArray(list, key) {
    map[key].push(list.val)
    if (list.next) {
      listToArray(list.next, key)
    }
  }

  listToArray(l1, 'l1')
  listToArray(l2, 'l2')

  const newl3 = +map['l1'].reverse().join('') + (+map['l2'].reverse().join(''))

  const newList = (newl3 + '').split('').reverse()

  let l3 = new ListNode(newList.shift()[0])

  function arrayToList(list, array){

    if (array.length) {
      const n = array.shift()[0]
      list.next = new ListNode(n)
      arrayToList(list.next, array)
    }
  }
  arrayToList(l3, newList)

  return l3;
};

