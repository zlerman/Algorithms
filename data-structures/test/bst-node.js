var assert = require('assert');
const Node = require("../binary-search-tree/node.js");
describe('BST-Node', function() {
  describe('initializeNode()', function() {
    it('should return a new node object that can take a data field, left child, right child', function() {
  	var newNode = new Node();
  	var leftChild = new Node("rootLeftChild", null, null);
  	var rightChild = new Node("rootRightChild", null, null);
  	newNode.data = "root";
  	newNode.leftChild = leftChild;
  	newNode.rightChild = rightChild;
  	assert.equal(newNode.data, "root");
  	assert.equal(newNode.leftChild, leftChild);
  	assert.equal(newNode.rightChild, rightChild);
    });
  });
});
