var BinarySearchTree = function(value) {
  var someInstance = Object.create(BinarySearchTree.prototype);
  someInstance.value = value;
  someInstance.left = undefined;
  someInstance.right = undefined;
  return someInstance;  
};


BinarySearchTree.prototype.insert = function(value) {
  var newNode = BinarySearchTree(value);
  console.log(this)
  var current = this;
  if (newNode.value < current.value) {
    if (current.left === undefined) {
      current.left = newNode;
    } else {
      current.left.insert(value);
    }
  }
  if (newNode.value > current.value) {
    if (current.right === undefined) {
      current.right = newNode;
    } else {
      current.right.insert(value);
    }
  }
  
};

BinarySearchTree.prototype.contains = function(target) {
  var result; 
  
  var topNode = this;

  var checkNode = function(node) {  
    if (node.value === target) {
     return true;
    };

    if (target < node.value) {
      if (node.left) {
       return checkNode(node.left)
      } 
    } 
    if (target > node.value){
      if (node.right) {
        return checkNode(node.right)
      } 
    }
    return false
 };
 
    return checkNode(topNode)
 
};







BinarySearchTree.prototype.depthfirstLog = function (callback) {

};

