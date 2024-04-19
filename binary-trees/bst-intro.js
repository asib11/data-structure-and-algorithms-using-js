class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (this.root === value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }

    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) current = current.left;
            else if (value > current.value) current = current.right;
            else return true
        }
        return false;
    }

    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
}

let tree = new BinarySearchTree();
// console.log(tree.root = new Node(10))
// console.log(tree.root.left = new Node(8))
// console.log(tree.root.right = new Node(15))
tree.insert(10)
tree.insert(8)
tree.insert(9)
tree.insert(3)
tree.insert(13)
tree.insert(12)
console.log(tree)
// console.log(tree.root.right)
console.log(tree.find(8))
console.log(tree.find(82))
console.log(tree.contains(82))
console.log(tree.contains(12))