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
// console.log(testArray);
let binaryTree = new Tree([12, 22, 63, 89, 59, 77, 72, 49, 16, 10, 13]);
// let binaryTree = new Tree(testArray);

binaryTree.buildTree();
binaryTree.print();

binaryTree.insert(21);
binaryTree.print();

binaryTree.delete(13);
binaryTree.print();


binaryTree.find(16);

// binaryTree.levelOrder((node) => console.log(node.data));
console.log(binaryTree.levelOrder());

console.log(binaryTree.preOrder());
// binaryTree.preOrder((node) => console.log(node.data));

console.log(binaryTree.inOrder());

console.log(binaryTree.postOrder());
