// Reverse a linked list
// https://www.hackerrank.com/challenges/reverse-a-linked-list/problem


function reverse(head) {
    
    var current = head;
    var prev = null;
    var next = null;
    
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
}