const Node = require("./node.js");
class NodeList {
        constructor() {
                this.head = null;
        }
	printNodes() {
		var cursor = new Node();
		cursor = this.head;
		while (cursor.next != null) {
			console.log(cursor);
			cursor = cursor.next;
		}
		console.log(cursor);
	}
        insertAtEnd(newNode) {
                if (newNode === null) {
                        throw new Error("Can't add null node");
                }
                if (this.head === null) {
                        this.head = newNode;
			return this.head;
                }
                var cursor = new Node();
                cursor = this.head;
                while (cursor.next != null) {
                        cursor = cursor.next;
                }
                cursor.next = newNode;
        }
	insertInFront(newNode) {
		if (newNode === null) {
			throw new Error("Can't add null node");
		}
		if (this.head === null) {
			this.head = newNode;
			return this.head;
		}
		newNode.next = this.head;
		this.head = newNode;
	}
	insertAtIndex(index, newNode) {
		if (newNode === null) {
			throw new Error("Can't add null node");
		}
		if (this.head === null && index === 0) {
			this.head = newNode;
		} else if (index === 0)
			insertAtFront(newNode);
		}
		var cursor = new Node();
		cursor = this.head;
		while (index-- > 
	}
	getTail() {
		var cursor = new Node();
		cursor = this.head;
		while (cursor.next != null) {
			cursor = cursor.next;
		}
		return cursor;
	}
}
module.exports = NodeList;
