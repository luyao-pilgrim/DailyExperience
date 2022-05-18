/**
 * initialize your data structure here.
 * 关键点：min函数需O(1),所以必须有个辅助栈
 */
 var MinStack = function() {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack1.push(x)
    if(this.stack2.length === 0) {
        this.stack2.push(x)
    } else {
        let a = this.stack2.pop()
        if(a >= x) {
            this.stack2.push(a)
            this.stack2.push(x)
        } else {
            this.stack2.push(a)
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let a = this.stack1.pop()
    let b = this.stack2.pop()
    if(a === b){
        return
    } else {
        this.stack2.push(b)
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let t = this.stack1.pop()
    this.stack1.push(t)
    return t
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    let t = this.stack2.pop()
    this.stack2.push(t)
    return t

};