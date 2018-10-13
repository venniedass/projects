// Insert a node at a specific position in a linked list
// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem




function insertNodeAtPosition(head, data, position) {
   const node = new SinglyLinkedListNode(data);
    if (!head){
        head = node;
    } else {
        
        var prev = head;
        var current = head.next
        
        for(var i = 0; i !== position-1; i++){
            prev = prev.next;
            current = current.next
        }
        
        prev.next = node
        node.next = current
    }
        
    
return head

}