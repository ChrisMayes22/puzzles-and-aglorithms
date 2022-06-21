/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const middleNode = function(head) {
    let curr = head;
    let mid = head;
    let fullLength = 1;
    let midLength = 1;
    while(curr != null){
        curr = curr.next;
        fullLength += 1;
        if(Math.ceil(fullLength / 2) > midLength){
            mid = mid.next;
            midLength = Math.ceil(fullLength/2);
        }
    }
    return mid;
};