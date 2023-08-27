import Tree from "./BST.js";

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
let tree = binaryTree.buildTree();

binaryTree.print();

binaryTree.insertToTree(21);

binaryTree.print();
