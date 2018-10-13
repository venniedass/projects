// Insert a Node at the Tail of a Linked List
// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

function insertNodeAtTail(head, data) {
    const node = new SinglyLinkedListNode(data);
    
    if(SinglyLinkedList.head == null){
       SinglyLinkedList.head = node
       return SinglyLinkedList.head
        
    } else {
  
        var current = SinglyLinkedList.head
        
        while(current.next){
            current = current.next
            
        }
                
        current.next = node
    }
    
    return SinglyLinkedList.head
}