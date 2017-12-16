#include "node.cpp"
#include <iostream>

using namespace std;

class NodeList {
	struct Node* head;
	public:
		NodeList();
		void printNodes();
		struct Node* insertInFront(struct Node*);
		struct Node* insertAtEnd(struct Node*);
		struct Node* insertAtIndex(int, struct Node*);
		struct Node* getTail();
};

NodeList::NodeList() {
	head = NULL;
}

void NodeList::printNodes() {
	struct Node* ptr;

	for (ptr = head; ptr != NULL; ptr = ptr->next)	
		cout << ptr->data << "\n";
}

struct Node* NodeList::insertInFront(struct Node* newNode) {
	if (newNode == NULL)
		return NULL;
 
	if (head == NULL) {
		head = newNode;
		newNode->next = NULL;
		return head;
	}
 	
 	newNode->next = head;
 	head = newNode;
 	return head;
}

struct Node* NodeList::insertAtEnd(struct Node* newNode) {
	struct Node* ptr;

	if (newNode == NULL) 
		return NULL;

	if (head == NULL) {
		head = newNode;
		newNode->next = NULL;
		return head;
	}

	ptr = head;
	while (ptr->next != NULL) {
		ptr = ptr->next;
	}

	ptr->next = newNode;
	return newNode;
}

struct Node* NodeList::insertAtIndex(int index, struct Node* newNode) {
	struct Node* ptr;

	if (newNode == NULL || index < 0)
		return NULL;

	if (head == NULL && index == 0) {
		head = newNode;
		return head;
	} else if (index == 0) {
		return insertInFront(newNode);
	} else {
		ptr = head;
		while (--index > 0) 
			ptr = ptr->next;
		newNode->next = ptr->next;
		ptr->next = newNode;
		return newNode;
	}
}

struct Node* NodeList::getTail() {
	struct Node* ptr;
	for (ptr = head; ptr->next != NULL; ptr = ptr->next);
	return ptr;
}