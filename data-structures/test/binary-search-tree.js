var assert = require('assert');
const Node = require("../binary-search-tree/node.js");
const BinarySearchTree = require("../binary-search-tree/binary-search-tree.js");
describe('BST', function() {
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
});
