// Maximum Element
// https://www.hackerrank.com/challenges/maximum-element/problem


function processData(data) {
    const stack = [];
    const input = data.split(/[^0-9]/g); // RegExp to split the data
    var max, i, inPos = 0; // inPos is data read pos
    var count = Number(input[inPos++]); // You could get away without Number 
                                        // but using a number type is faster 
    while (count--) { //simplify the loop
       const command = input[inPos++];
       if (command === "1") {
            stack[stack.length] = Number(input[inPos++]);
       } else if(command === "2") {
            stack.pop();
       } else {
            // for and while loops are faster than array methods.
            i = stack.length;            
            max = stack[--i];
            while (i--) {
                max = Math.max(max, stack[i]);
            }
            console.log(max);
       }
    }
}