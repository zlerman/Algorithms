var assert = require('assert');
const Node = require('../single-linked-list/node.js');
const NodeList = require('../single-linked-list/nodeList.js');
describe('SingleLinkedList', function() {
  describe('initializeList()', function() {
    it('should return the newly created list as empty', function() {
	var testList = new NodeList();
        assert.equal(testList.head, null);
    });
    it('should return a node insert at front as the head', function() {
	var testList = new NodeList();
	var firstNode = new Node();
	testList.insertInFront(firstNode);
	assert.equal(testList.head, firstNode);
    });
    it('should return a the new node correctly at the end of the list', function() {
	var testList = new NodeList();
	var node1 = new Node(1);
	var node2 = new Node(2);
	var node3 = new Node(3);
	var node4 = new Node(4);
	testList.insertInFront(node1);
	console.log("First node"); testList.printNodes();
	testList.insertInFront(node2);
	console.log("\n Second node");testList.printNodes();
	testList.insertInFront(node3);
	console.log("\n Third node");testList.printNodes();
	testList.insertAtEnd(node4);
	console.log("\n Node at the end");testList.printNodes();
	assert.equal(testList.getTail(), node4);
    });
  });
});
