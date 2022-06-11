function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let returnNode = ListNode(0, null)
    let first = true;
    while(l1 !== null || l2 !== null){
        
        carry = 0
        op1 = l1 !== null ? l1.val : 0
        op2 = l2 !== null ? l2.val : 0

        let currSum = op1 + op2 + carry;
        if(currSum >= 10){
            currSum -= 10;
            carry = 1;
        }
        if(first){
            returnNode = ListNode(currSum, null)
            first = false;
        } else {
            returnNode.next = ListNode(currSum, null);
            returnNode = returnNode.next;
        }
        [l1, l2] = [l1 === null ? null : l1.next, l1 === null ? null : l2.next]
    }
    
    if(carry > 0){
        returnNode.val += 1;
        if(returnNode.val > 10){
            returnNode.val = 0;
            returnNode.next= ListNode(carry, null)
        }
    }
    return returnNode;
};

console.log()