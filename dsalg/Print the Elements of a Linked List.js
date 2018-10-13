// Print the Elements of a Linked List - HackerRank
// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem


function printLinkedList(head) {
    if (head == null){
        return;
    } else {
        var current = head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
        
    }

}