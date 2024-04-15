class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }

    enqueue(val){ // enqueue = push = add data from last
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue(){ // dequeue = shift = remove from the begining
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--
        return temp.val;
    }
}


let queue = new Queue();
console.log(queue.enqueue(10))
console.log(queue.enqueue(20))
console.log(queue.enqueue(30))
console.log(queue)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
