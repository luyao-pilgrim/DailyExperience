/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//我在js中，所以好多天秀解法，1.JSON.Stringfy,如有循环则报错  2.快慢指针，A前进2，B前进1，如果A到null则无环，如果蹦到A=B说明有环  3.Map存储每一个路过的节点  4.每一个节点打tag
var hasCycle = function(head) {
    
};