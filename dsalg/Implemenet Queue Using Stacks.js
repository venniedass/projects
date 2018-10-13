// Implement a queue using stacks
// https://leetcode.com/problems/implement-queue-using-stacks/description/

/**
 * @constructor
 */
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];

};

/**
 * @param {number} x
 * @returns {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);

};

/**
 * @returns {void}
 */
MyQueue.prototype.pop = function() {
    if(this.stack2.length > 0){
        return this.stack2.pop();
    } else if (this.stack1.length > 0){
        while(this.stack1.length > 0){
        this.stack2.push(this.stack1.pop())
        }
        return this.stack2.pop()
    } else {
        return null;
    }

};

/**
 * @returns {number}
 */
MyQueue.prototype.peek = function() {
    if(this.stack2.length > 0){
        return this.stack2[this.stack2.length-1]
    } else if(this.stack1.length > 0){
            return this.stack1[0]
        }
    };



/**
 * @returns {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;

};