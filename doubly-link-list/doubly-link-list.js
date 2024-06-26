class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode // update new tail
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let popTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popTail.prev;
            this.tail.next = null;
            popTail.prev = null;
        }
        this.length--;
        return popTail;
    }

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null
        }

        this.length--;
        return oldHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this;
    }

    get(index){
        if(index<0 || index >= this.length) return undefined;
        let count, current;
        if(index<= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++
            }
        }else{
            count = this.length -1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--
            }
        }
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val){
        if(index<0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        // beforeNode.next = newNode;
        // newNode.prev = beforeNode;
        // newNode.next = afterNode;
        // afterNode.prev = newNode;
        // below 2 lines represent as pair line, nothing change above 4 lines
        beforeNode.next = newNode,newNode.prev = beforeNode;
        newNode.next = afterNode,afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index<0 || index >= this.length) return undefined;
        if(index === 0) return this.unshift();
        if(index === this.length -1) return this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

let list = new DoublyLinkList();
list.push(10)
list.push(20)
list.push(30)
console.log(list)
console.log(list.pop())
console.log(list.shift())
console.log(list.unshift(45))
console.log(list.get(1))
console.log(list.insert(2,25))
console.log(list)