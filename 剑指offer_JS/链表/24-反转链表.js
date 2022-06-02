/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    var tmp = null;
    while(head !== null) {
        var res = new ListNode(head.val);
        res.next = tmp;
        tmp = res;
        head = head.next;
    }

    return tmp;
};