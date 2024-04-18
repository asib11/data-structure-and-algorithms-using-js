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
    }
}

let tree = new BinarySearchTree();
console.log(tree.root = new Node(10))
console.log(tree.root.left = new Node(8))
console.log(tree.root.right = new Node(15))