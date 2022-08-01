class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
   if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value === currentNode.value) {
          return currentNode;
        }
      }
      return currentNode;
    }
    
  }
  
}

const MyT = new BinarySearchTree();
MyT.insert(11);
MyT.insert(3);
MyT.insert(7);
MyT.insert(70);
MyT.insert(770);
MyT.insert(25);
MyT.insert(1);

console.log(MyT);
