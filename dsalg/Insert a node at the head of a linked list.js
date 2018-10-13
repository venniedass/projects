// Insert a node at the head of a linked list - HackerRank
// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem


function insertNodeAtHead(head, data) {
    const node = new SinglyLinkedListNode(data)
    if (!SinglyLinkedList.head){
        SinglyLinkedList.head = node
    } else {
        node.next = SinglyLinkedList.head
        SinglyLinkedList.head = node
        
    }
    return SinglyLinkedList.head

}