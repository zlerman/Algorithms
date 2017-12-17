"use strict";
class Node {
  constructor(data = null, leftChild = null, rightChild = null){
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  };
}
module.exports = Node;
