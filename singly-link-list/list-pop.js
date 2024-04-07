class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--
        if(this.length === 0){
            this.head = null;
            this.tail = null
        }
        return current;
    }

    //shift list
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--
        if(this.tail === 0) this.tail = null;
        return currentHead
    }

    unshift(val){
        let newHead = new Node(val);
        if(!this.head){
            this.head = newHead;
            this.tail = this.head;
        }else{
            newHead.next = this.head;
            this.head = newHead
        }
        this.length++;
        return this;
    }

    get(index){
        if(index< 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index >= this.length) return false;
        if(index === this.push) return !!this.push(val) // here !! means calculate push and return true together
        if(index === 0) return !!this.unshift(val)
        let newNode = new Node(val)
        let prev = this.get(index -1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index, val){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.push) return !!this.pop(val) // here !! means calculate push and return true together
        if(index === 0) return !!this.shift(val)
        let previous = this.get(index - 1);
        let remove = previous.next;
        previous.next = remove.next;
        this.length--;
        return true;
    }
}

let list = new SinglyLinkedList()
list.push('asib');
list.push('ahmed');
list.push(99)
console.log(list);
list.push(105)
console.log(list.head.next.next);
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
// console.log(list.pop())
console.log(list.shift())
console.log(list)
console.log(list.unshift(100))
console.log(list.get(0))
console.log(list.insert(0,10))
console.log(list.insert(1,20))
console.log(list)