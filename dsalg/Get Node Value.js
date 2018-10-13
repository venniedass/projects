// Get Node Value
// https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem


function getNode(head, positionFromTail) {
    
    var current = head;
    var pft = positionFromTail;
    
    if (head){
        
        if (pft == 0){
            while(current.next){
                current = current.next;
                
            }
            
            return current.data
            
        } else {
            
            var next = null;
            var current = head;
            var prev = null;
            
            while (current){
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
                }
            head = prev
            
            for (var i = 0; i < pft; i++){
                head = head.next;
            }
            
            return head.data
           }
       }
}