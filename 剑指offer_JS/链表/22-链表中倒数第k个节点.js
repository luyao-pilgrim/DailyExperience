/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let a = head;
    let b = head;
    for(let i = 0; i < k; i++) {
        b = b.next;
    }
    while(b) {
        a = a.next;
        b = b.next;
    }

    return a;

};