class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    /*
    create newNode
        if(root === null) then root = newNode
        let temp = this.root;
        while loop
        if newNode === temp return undefined
            if < left else  > right
            if null insert newNode else move to next
        
        */

    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contain(value) {
    /*
        if(root == null) return false
        let temp = this.root;
        while(temp)
            if < left
            else if > right
            else return true
        return false
        
        */

    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  // Breadth First Search

  BFS() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);

    while(queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }
  
  //Depth First Search - PreOrder function
  DFSPreOrder() {
    let results = [];
    function traverse(currentNode){
      results.push(currentNode.value);
      if(currentNode.left) traverse(currentNode.left);
      if(currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }

   //Depth First Search - PreOrder function
   DFSPostOrder() {
    let results = [];
    function traverse(currentNode){
      if(currentNode.left) traverse(currentNode.left);
      if(currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }

   //Depth First Search - InOrder function
   DFSInOrder() {
    let results = [];
    function traverse(currentNode){
      if(currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if(currentNode.right) traverse(currentNode.right);
     
    }
    traverse(this.root);
    return results;
  }

}

let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);
myTree.contain(92);
const minVaue = myTree.minValueNode(myTree.root.left);

console.log(JSON.stringify(myTree));

const resultBFS = myTree.BFS();
const resultDFSPreOrder = myTree.DFSPreOrder();
const resultDFSPostOrder = myTree.DFSPostOrder();
const resultDFSInOrder = myTree.DFSInOrder();

console.log({
  resultBFS,
  resultDFSPreOrder,
  resultDFSPostOrder,
  resultDFSInOrder,
  minVaue
});


 


