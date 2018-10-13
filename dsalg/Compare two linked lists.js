// Compare two linked lists
// https://www.hackerrank.com/challenges/compare-two-linked-lists/problem


function CompareLists(llist1, llist2) {
    
    while(llist1 && llist2){
        
        if (llist1.data == llist2.data){

        llist1 = llist1.next;
        llist2 = llist2.next;
            
    } else {
        return 0;
    }
        if (llist1 == null && llist2 == null){
            return 1;
        }
    }
}