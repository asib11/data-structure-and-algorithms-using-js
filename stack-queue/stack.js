class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this.size; 
        // return ++this.size; this line represent above 2 lines
    }

    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next;
        this.size--
        return temp.val
    }
}


let stack = new Stack()
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.push(5))
console.log(stack)
console.log(stack.pop())