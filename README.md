# Binary-search-tree
Binary search tree implemented with JavaScript

## Features
- `BuildTree()` Takes array from created object, sorts and delete duplicates, and builds the binary tree.
- `insert(value)` Traverses down the binary tree based on comparing tha value with the binaty tree data, when the next node is null creates a node with input value, and places it in the new spot.
- `delete(value)` Traverses down the binary tree  same as insert, but when value and data node are the same deletes the node and replaces it with next right node.
- `find(value)` Traverses down the binary tree, when value and node data are equal, returns the current node.
- `levelOrder(callback(optional))` Traverses down the binary tree by level, if theres no input callback, method returns an array with each level data.
- `preOrder(callback(optional))` traverses down the binary tree, if theres no callback input, method returns an array based on pre order traverse (data, left, right).
- `inOrder(callback(optional))` traverses down the binary tree, if theres no callback input, method returns an array based on in order traverse (left, data, right) this array is sorted from lower to higher value.
- `preOrder(callback(optional))` traverses down the binary tree, if theres no callback input, method returns an array based on post order traverse (left, right, data).
- `height(node(optional))` Returns maximum height of left and right sub-trees of the node, if theres no input returns height from the root.
- `isBalanced()` Returns a bool telling if the bbinary tree is balanced or not.
- `reBalance()` Rebalances current tree.
- `print()` Prints a graphic description of the tree in console.
