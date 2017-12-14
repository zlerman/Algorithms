var assert = require('assert');
const Node = require("../single-linked-list/node.js");
describe('Node', function() {
  describe('initializeNode()', function() {
    it('should return a new node object that can take a data field and a next node', function() {
	var newNode = new Node();
	var nextNode = new Node();
	newNode.data = "someValue";
	newNode.next = nextNode;
	assert.equal(newNode.data, "someValue");
	assert.equal(newNode.next, nextNode);
    });
  });
});
