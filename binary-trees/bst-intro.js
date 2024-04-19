class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(this.root === value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    this.left = newNode;
                    return this;
                }
                current = current.left;
            }else {
                if(value > current.value){
                    this.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }

    }
}

let tree = new BinarySearchTree();
console.log(tree.root = new Node(10))
console.log(tree.root.left = new Node(8))
console.log(tree.root.right = new Node(15))