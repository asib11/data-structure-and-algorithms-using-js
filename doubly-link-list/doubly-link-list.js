class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode // update new tail
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let popTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = popTail.prev;
            this.tail.next = null;
            popTail.prev = null;
        }
        this.length--;
        return popTail;
    }

    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null
        }
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null
        this.length--;
        return oldHead;
    }
}

let list = new DoublyLinkList();
list.push(10)
list.push(20)
list.push(30)
console.log(list)
console.log(list.pop())
console.log(list.shift())