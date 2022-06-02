/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    let res = [];
    while(head !== null) {
        res.unshift(head.val);
        head = head.next;
    }

    return res;
};