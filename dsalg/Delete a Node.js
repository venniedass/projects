// Delete a Node
// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem


function deleteNode(head, position) {
    
    var prev = head;
    var current = head.next;
    
    if (position !== 0){
    
    for (var i = 0; i !== position-1; i++){
        prev = prev.next;
        current = current.next;
    }
    prev.next = current.next
        
    } else{
        head = head.next
    }
return head;
}