/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (head == null) {
        return head;
    }

    let cur = head;
    const map = new Map();
    while (cur != null) {
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }

    const res = new Node();
    let newCur = res;
    cur = head;
    while (cur != null) {
        const node = map.get(cur);
        node.random = map.get(cur.random);
        newCur.next = node;
        newCur = node;
        cur = cur.next;
    }

    return res.next;
};