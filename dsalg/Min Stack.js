// Min Stack - LeetCode
// https://leetcode.com/problems/min-stack/description/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    
    this.stack = []
    this.min = []
    
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    
    var min = this.getMin()
    this.stack.push(x);
    
    if(min == null || x <= min){
        this.min.push(x)
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    var val = this.stack.pop();
    var min = this.getMin();
    
    if (val === min){
        this.min.pop();
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
    return this.stack[this.stack.length-1]
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
    return this.min[this.min.length-1]
    
};