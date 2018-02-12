#include "../binary-search-tree/binary-search-tree.cpp"

int main() {
	BinarySearchTree tree;
	
	int arr[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
	tree.insertNode(arr[5]);
	tree.insertNode(arr[3]);
	tree.insertNode(arr[1]);
	tree.insertNode(arr[2]);
	tree.insertNode(arr[9]);

	/* 
			5
		  /	  \
		 3		9
		/ \
	   1   2
	   print out: 5 3 1 2 9
	*/
	
	tree.printTree(tree.root);
}