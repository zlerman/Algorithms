var assert = require('assert');
const Node = require("../binary-search-tree/node.js");
const BinarySearchTree = require("../binary-search-tree/binary-search-tree.js");
describe('BST', function() {
  describe('handle insertion', function() {
    it('should handle the insertion of nodes at any index', function (){
      var child1 = new Node(1, null, null);
      var child3 = new Node(1, null, null);
      var child2 = new Node(3, null, null);
      var child4 = new Node(5, null, null);
      var child5 = new Node(0, null, null);
      var child6 = new Node(10, null, null);
      var child7 = new Node(7, null, null);
      var child8 = new Node(4, null, null);
      var root = new Node(2, child1, child2);
      var newBst = new BinarySearchTree(root);
      /*
       *     2
       *    / \
       *   1  3
       *  /
       * 1
       */
      newBst.insertNode(child1, child3);
      assert.equal(newBst.root.leftChild.leftChild, child3);
      /*
       *     2
       *    / \
       *   1  3
       *  /    \
       * 1      5
       */
      newBst.insertNode(newBst.root, child4);
      assert.equal(newBst.root.rightChild.rightChild, child4);
      /*
       *      2
       *     / \
       *    1  3
       *   /    \
       *  1      5
       * /
       *0
       */
      newBst.insertNode(newBst.root, child5);
      assert.equal(newBst.root.leftChild.leftChild.leftChild, child5);
      /*
       *      2
       *     / \
       *    1   3
       *   /    \
       *  1      5
       * /       \
       *0         10
       */
      newBst.insertNode(newBst.root, child6);
      assert.equal(newBst.root.rightChild.rightChild.rightChild, child6);
      /*
       *      2
       *     / \
       *    1   3
       *   /    \
       *  1      5
       * /        \
       *0         10
       *          /
       *         7
       */
      newBst.insertNode(newBst.root, child7);
      assert.equal(newBst.root.rightChild.rightChild.rightChild.leftChild, child7);
      /*
       *      2
       *     / \
       *    1   3
       *   /     \
       *  1       5
       * /       / \
       *0       4  10
       *          /
       *         7
       */
      newBst.insertNode(newBst.root, child8);
      assert.equal(newBst.root.rightChild.rightChild.leftChild, child8);
    });
  });
  describe('test finding max', function (){
    it('should return the minimum value in the constructed bst', function() {
      var rootNode = new Node(15, null, null);
      var node1 = new Node (6, null, null);
      var node2 = new Node (9, null, null);
      var node3 = new Node (4, null, null);
      var node4 = new Node (17, null, null);
      var node5 = new Node (21, null, null);
      var minBst = new BinarySearchTree(rootNode);
      minBst.insertNode(minBst.root, node1);
      minBst.insertNode(minBst.root, node2);
      minBst.insertNode(minBst.root, node3);
      minBst.insertNode(minBst.root, node4);
      minBst.insertNode(minBst.root, node5);
      var min = minBst.findMinimum();
      assert.equal(min.data, 4);
    });
  })
  describe('test finding min', function (){
    it('should return the maximum value in the constructed bst', function() {
      var rootNode = new Node(15, null, null);
      var node1 = new Node (6, null, null);
      var node2 = new Node (9, null, null);
      var node3 = new Node (4, null, null);
      var node4 = new Node (17, null, null);
      var node5 = new Node (21, null, null);
      var minBst = new BinarySearchTree(rootNode);
      minBst.insertNode(minBst.root, node1);
      minBst.insertNode(minBst.root, node2);
      minBst.insertNode(minBst.root, node3);
      minBst.insertNode(minBst.root, node4);
      minBst.insertNode(minBst.root, node5);
      var max = minBst.findMaximum();
      assert.equal(max.data, 21);
    });
  })
  describe('initializeBST()', function() {
    it('should return a new binary search tree that can maintain ordering of children', function() {
  	var child1 = new Node(1, null, null);
    var child3 = new Node(1, null, null);
  	var child2 = new Node(3, null, null);
    var child4 = new Node(5, null, null);
    var child5 = new Node(0, null, null);
    var child6 = new Node(10, null, null);
    var child7 = new Node(7, null, null);
    var child8 = new Node(4, null, null);
    var root = new Node(2, child1, child2);
  	var newBst = new BinarySearchTree(root);
  	assert.equal(newBst.root, root);
  	assert.equal(newBst.root.leftChild, child1);
  	assert.equal(newBst.root.rightChild, child2);
    });
  });
});
