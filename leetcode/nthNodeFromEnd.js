/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 const removeNthFromEnd = function(head, n) {
    
    let dummy = new ListNode(0, head);
    
    let p1 = dummy;
    let p2 = dummy;
    
    
    for(let i = 0; i <= n; i++){
        p1 = p1.next;
    }
    
    while(p1 !== null){
        p1 = p1.next;
        p2 = p2.next;
    }
    
    p2.next = p2.next.next;
    
    return dummy.next;
};