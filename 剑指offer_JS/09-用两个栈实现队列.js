var CQueue = function(){
    this.stack = [];
}

CQueue.prototype.appendTail = function(value){
    this.stack.push(value)
}

CQueue.prototype.deleteHead = function(){
    if(this.stack.length === 0){
        return -1;
    }else{
        return this.stack.shift();

    }

}