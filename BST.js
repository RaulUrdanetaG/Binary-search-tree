import Node from "./node.js";

export default class Tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }

  formatArray() {
    let array = this.array;
    let sortedArray = array.sort((a, b) => {
      return a - b;
    });
    let formatedArray = [...new Set(sortedArray)];

    return formatedArray; // returns sorted array without duplicates
  }

  arrayToBinaryTree(array, start, end) {
    if (start > end) {
      return null;
    }

    let mid = parseInt((start + end) / 2);
    let node = new Node(array[mid]);

    node.left = this.arrayToBinaryTree(array, start, mid - 1);
    node.right = this.arrayToBinaryTree(array, mid + 1, end);

    return node;
  }

  buildTree() {
    let formatedArray = this.formatArray(this.array);
    let binaryTree = this.arrayToBinaryTree(
      formatedArray,
      0,
      formatedArray.length - 1
    );
    this.root = binaryTree;
    return this.root;
  }

  insertToTree(newData) {
    let root = this.root;
    this.insert(root, newData);
  }

  insert(root, newData) {
    if (root == null) {
      root = new Node(newData);
      return root;
    }

    if (newData < root.data) {
      root.left = this.insert(root.left, newData);
    } else if (newData > root.data) {
      root.right = this.insert(root.right, newData);
    }

    return root;
  }

  deleteFromTree(data) {
    let root = this.root;
    this.delete(root, data);
  }

  delete(root, data) {
    if (root == null) {
      return root;
    }
    // traverse dow the tree
    if (data < root.data) {
      root.left = this.delete(root.left, data);
      return root;
    } else if (data > root.data) {
      root.right = this.delete(root.right, data);
      return root;
    }
    // whe it finds the value search
    if (root.left === null) {
      // cases where node has one child
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      // case where node has two childs
      let succParent = root;
      let succ = root.right; // when deleting new parent node is bigger than deleted one

      while (succ.left !== null) {
        // Search for a left node with no left children.
        succParent = succ;
        succ = succ.left;
      }

      if (succParent !== root) {
        // when deleting new parent node is bigger than deleted one
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }

      root.data = succ.data;

      return root;
    }
  }

  findInTree(data) {
    let root = this.root;
    this.find(root, data);
  }

  find(root, data) {
    if (root == null) {
      return root;
    }
    // traverse dow the tree
    if (data < root.data) {
      root.left = this.find(root.left, data);
      return root;
    } else if (data > root.data) {
      root.right = this.find(root.right, data);
      return root;
    }
    this.prettyPrint(root);
    return root;
  }

  print() {
    this.prettyPrint(this.root);
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
