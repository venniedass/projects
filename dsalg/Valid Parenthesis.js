// Valid Parenthesis - LeetCode
// https://leetcode.com/submissions/detail/168069285/

var isValid = function(s) {
    
    stack = []
    index = 0
    
    while(index < s.length){
        
        
        if (s[index] === "(" || s[index] === "[" || s[index] === "{"){
         stack.push(s[index])  
    } else {
        var oldC = stack.pop();
        c = s[index]
        
        if(oldC === '(' && c !== ')'){
                return false;
            } else if(oldC === '[' && c !== ']'){
                return false;
            } else if(oldC === '{' && c !== '}'){
                return false;
            } else if(oldC === undefined) {
                return false;
            }
       

    }
        index++
    }
    return stack.length === 0;
};