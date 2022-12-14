/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const numArr = (l) => {
        let arr = []
        while(l) {
            arr.unshift(l.val)
            l = l.next
        }

        return parseInt(arr.join(''))
    }
    let res = (numArr(l1)+numArr(l2)).toString().split('').reverse()

    let node = new ListNode(0)
    let a = node
    let tmp = null
    for(let i = 0; i < res.length; i++) {
        tmp = new ListNode(res[i])
        node.next = tmp
        node = node.next
    }

    return a.next
};