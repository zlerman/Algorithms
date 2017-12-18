const Node = require("./node.js");
/**
 * Represents a binary search tree. The ordering of the nodes are such that
 * for a given node x, children to the left of x are strictly less than x and
 * children to the right of x are strictly greater.
 * @constructor
 * @param {node} root - The node that is at the top of the BST.
 * @param {node} leftChild - Strictly less than node of a given node x.
 * @param {node} rightChild - Strictly greater than node of a given node x.
 * The basic operations on a BST are searching, traversal, insertion and
 * deletion
 * @insertNode
 * @param {node} node - The node that will be added to the tree
 */
class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  deleteNode(node) {
    var cursor = new Node();
    var predecessor = new Node();
    cursor = this.root;
    if (this.root === null) {
      throw new Error("Can't find delete node from empty tree");
    }
    if (cursor.data === node.data) {
      // To delete node, find parent node.
      predecessor = findPredecessor();
      // Determine if doomed node is left or right child
      if (node.data == predecessor.leftChild) {
        // The next highest node is the left childs right child
        predecessor.leftChild = node.rightChild;
      } else {
        predecessor.rightChild = node.leftChild;
      }
    }
  }
  findMinimum() {
    var cursor = new Node();
    cursor = this.root;
    if (this.root === null) {
      throw new Error("Can't find minimum of empty tree");
    }
    while (cursor.leftChild != null) {
      cursor = cursor.leftChild;
    }
    return cursor;
  }
  findMaximum() {
    var cursor = new Node();
    cursor = this.root;
    if (this.root === null) {
      throw new Error("Can't find maximum of empty tree");
    }
    while (cursor.rightChild != null) {
      cursor = cursor.rightChild;
    }
    return cursor;
  }
  insertNode(index, node) {
    // If index is null, just make the node the new root
    if ( (index === null) || (index.data === undefined) ) {
      this.root = node;
      return;
    }
      // First we determine whether the node is greater or less than index
    if (node.data <= index.data) {
      if (index.leftChild === null) {
        // Add a new left child at this node
        index.leftChild = node;
        return;
      } else {
        // Recurse left subtree
        this.insertNode(index.leftChild, node);
        return;
      }
    } else {
      // node is not greater
      if (index.rightChild === null) {
        // Add a new right child at this node
        index.rightChild = node;
        return;
      } else {
        this.insertNode(index.rightChild, node);
        return;
      }
    }
  }
  printTree(node, count) {
    if (node === null){
      // End
      return;
    }
    console.log("\nNode " + count + " data: " + node.data);
    console.log(node);
    // Recurse left
    this.printTree(node.leftChild, count+=1);
    // Recurse right
    this.printTree(node.rightChild, count+=1);
  }
}
module.exports = BinarySearchTree;
