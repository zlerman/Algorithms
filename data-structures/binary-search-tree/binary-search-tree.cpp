#import <iostream>
#import "node.cpp"

using namespace std;

class BinarySearchTree {
	public:
		struct Node* root;
		BinarySearchTree();
		void insertNode(int data); // wrapper for insert method
		void insertNode(struct Node** ptr, struct Node* parent, int data);
		void printTree(struct Node* node);
};

BinarySearchTree::BinarySearchTree() {
	root = NULL;
}

void BinarySearchTree::insertNode(int data) {
	insertNode(&root, root, data);
}

void BinarySearchTree::insertNode(struct Node** ptr, struct Node* parent, int data) {
	while(*ptr) {		
		if (data > (*ptr)->data) {
			parent = *ptr;
			ptr = &(*ptr)->rightChild;
		}
		else {
			parent = *ptr;
			ptr = &(*ptr)->leftChild;
		}
	}

	// reached end of the tree
	struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
	newNode->leftChild = newNode->rightChild = NULL;
	newNode->data = data;
	*ptr = newNode;

	if (!root)
		root = newNode;

	return;
}

void BinarySearchTree::printTree(struct Node* node) {
	if (!node)
		return;

	cout << node->data << endl;

	if (node->leftChild)
		printTree(node->leftChild);
	if (node->rightChild)
		printTree(node->rightChild);
}

