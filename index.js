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
console.log(testArray);
let binaryTree = new Tree([12, 22, 63, 89, 59, 77, 72, 49, 16, 10, 13]);

binaryTree.buildTree();
binaryTree.print();

binaryTree.insertToTree(21);
binaryTree.print();

binaryTree.deleteFromTree(13);
binaryTree.print();

binaryTree.findInTree(16);
