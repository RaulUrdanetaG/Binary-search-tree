import Tree from "./BST.js";

// You can create a function that returns an array of random numbers every time you call it, if you wish.
function createRandomArray() {
  let newArray = [];
  let arrayLength = Math.floor(Math.random() * 16) + 10;

  newArray = Array.from(
    { length: arrayLength },
    () => Math.floor(Math.random() * 99) + 1
  );
  return newArray;
}

let testArray = createRandomArray();
let binaryTree = new Tree(testArray);

// ---------------------------------- sugested test by odin project --------------------------------------

console.log(
  "---------------------------------- sugested test by odin project --------------------------------------"
);
// Create a binary search tree from an array of random numbers < 100.
binaryTree.buildTree();

// Confirm that the tree is balanced by calling isBalanced.
binaryTree.isBalanced()
  ? console.log("is balanced")
  : console.log("is NOT balanced");

// Print out all elements in level, pre, post, and in order.
console.log(binaryTree.levelOrder());
console.log(binaryTree.preOrder());
console.log(binaryTree.inOrder());
console.log(binaryTree.postOrder());

// Unbalance the tree by adding several numbers > 100.
binaryTree.insert(101);
binaryTree.insert(102);
binaryTree.insert(103);
binaryTree.insert(104);
binaryTree.insert(105);
binaryTree.insert(106);
binaryTree.insert(107);
binaryTree.insert(108);
binaryTree.insert(109);
binaryTree.insert(110);

// Confirm that the tree is unbalanced by calling isBalanced.
binaryTree.isBalanced()
  ? console.log("is balanced")
  : console.log("is NOT balanced");

// Balance the tree by calling rebalance.
binaryTree.reBalance();

// Confirm that the tree is balanced by calling isBalanced.
binaryTree.isBalanced()
  ? console.log("is balanced")
  : console.log("is NOT balanced");

// Print out all elements in level, pre, post, and in order.
console.log(binaryTree.levelOrder());
console.log(binaryTree.preOrder());
console.log(binaryTree.inOrder());
console.log(binaryTree.postOrder());

// ---------------------------------- tests made by me during development --------------------------------------

console.log(
  "---------------------------------- tests made by me during development --------------------------------------"
);

// create a binary tree object with a known array of elements
let binaryTree2 = new Tree([
  12, 22, 63, 89, 59, 77, 72, 49, 16, 10, 13, 27, 54, 2, 31, 20,
]);

console.log(
  "------------------------- Original tree -------------------------"
);
// build tree and print it out
binaryTree2.buildTree();
binaryTree2.print();

console.log(
  "------------------------- Tree insertion -------------------------"
);
// insert a new element and print it out to see if its added correctly
binaryTree2.insert(21);
binaryTree2.print();

console.log(
  "------------------------- Tree deletion -------------------------"
);
// delete an element and print it out to see if its deleted correctly
binaryTree2.delete(13);
binaryTree2.print();

console.log("------------------------- Find node -------------------------");
// use find method to check if the returned node is correct
const found = binaryTree2.find(10);
console.log(found);

// Print out all elements in level, pre, post, and in order. And check if using a callback function works
let levelOrderArray = [];
let preOrderArray = [];
let inOrderArray = [];
let postOrderArray = [];

console.log("------------------------- Level order -------------------------");
console.log(binaryTree2.levelOrder());
binaryTree2.levelOrder((node) => {
  levelOrderArray.push(node.data);
});
console.log("levelOrder callback: ", levelOrderArray);

console.log("------------------------- Pre order -------------------------");
console.log(binaryTree2.preOrder());
binaryTree2.preOrder((node) => {
  preOrderArray.push(node.data);
});
console.log("preOrder callback: ", preOrderArray);

console.log("------------------------- In order -------------------------");
console.log(binaryTree2.inOrder());
binaryTree2.inOrder((node) => {
  inOrderArray.push(node.data);
});
console.log("inOrder callback: ", inOrderArray);

console.log("------------------------- Post order -------------------------");
console.log(binaryTree2.postOrder());
binaryTree2.postOrder((node) => {
  postOrderArray.push(node.data);
});
console.log("postOrder callback: ", postOrderArray);

console.log(
  "------------------------- Height and depth -------------------------"
);
// test height method (should return 4)
console.log("Height: ", binaryTree2.height());

// test depth method using found node.
console.log("Depth: ", binaryTree2.depth(found));

// test isBalanced method for original tree
console.log(
  "------------------------- Original tree is -------------------------"
);
binaryTree2.isBalanced()
  ? console.log("balanced")
  : console.log("not balanced");

console.log(
  "------------------------- Unbalance tree -------------------------"
);
// Unbalance the tree by adding several numbers > 100.
binaryTree2.insert(100);
binaryTree2.insert(101);
binaryTree2.insert(102);
binaryTree2.insert(103);
binaryTree2.insert(104);
binaryTree2.insert(105);
binaryTree2.insert(106);

// see the unbalanced tree and then new balanced tree
binaryTree2.print();

console.log("------------------------- New tree is -------------------------");
// test isBalanced method for unbalanced tree
binaryTree2.isBalanced()
  ? console.log("balanced")
  : console.log("not balanced");

console.log("------------------------- Rebalance -------------------------");
binaryTree2.reBalance();
binaryTree2.print();

console.log(
  "------------------------- Rebalanced tree is -------------------------"
);
// test isBalanced method for rebalanced tree
binaryTree2.isBalanced()
  ? console.log("balanced")
  : console.log("not balanced");
