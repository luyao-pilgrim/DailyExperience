/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let newHead = new ListNode(0,head)
    let a = newHead
    let b = newHead
    
    for(let i = 0; i < n; i++) {
        b = b.next
    }
    while(b.next) {
        a = a.next
        b = b.next
    }

    a.next = a.next.next
    return newHead.next
};