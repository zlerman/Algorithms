#include "../single-linked-list/nodeList.cpp"

int main() {
	NodeList testList;
	struct Node node1;
	node1.data = 1;
	node1.next = NULL;
	struct Node node2;
	node2.data = 2;
	node2.next = NULL;
	struct Node node3;
	node3.data = 3;
	node3.next = NULL;
	struct Node node4; 
	node4.data = 4;
	node4.next = NULL;
	testList.insertInFront(&node1);
	testList.printNodes();
	testList.insertAtEnd(&node2);
	testList.printNodes();
	testList.insertAtEnd(&node4);
	testList.printNodes();
	testList.insertAtIndex(2, &node3);
	testList.printNodes();
	struct Node* tail = testList.getTail();
	cout << tail->data;
	return 0;
}