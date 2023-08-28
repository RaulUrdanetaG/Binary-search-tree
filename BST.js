import Node from "./node.js";

export default class Tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }

  #formatArray() {
    let array = this.array;
    let sortedArray = array.sort((a, b) => {
      return a - b;
    });
    let formatedArray = [...new Set(sortedArray)];

    return formatedArray; // returns sorted array without duplicates
  }

  #arrayToBinaryTree(array, start, end) {
    if (start > end) {
      return null;
    }

    let mid = parseInt((start + end) / 2);
    let node = new Node(array[mid]);

    node.left = this.#arrayToBinaryTree(array, start, mid - 1);
    node.right = this.#arrayToBinaryTree(array, mid + 1, end);

    return node;
  }

  buildTree() {
    let formatedArray = this.#formatArray(this.array);
    let binaryTree = this.#arrayToBinaryTree(
      formatedArray,
      0,
      formatedArray.length - 1
    );
    this.root = binaryTree;
    return this.root;
  }

  insert(newData, root = this.root) {
    if (root == null) {
      root = new Node(newData);
      return root;
    }

    if (newData < root.data) {
      root.left = this.insert(newData, root.left);
    } else if (newData > root.data) {
      root.right = this.insert(newData, root.right);
    }

    return root;
  }

  delete(data, root = this.root) {
    if (root == null) {
      return root;
    }
    // traverse dow the tree
    if (data < root.data) {
      root.left = this.delete(data, root.left);
      return root;
    } else if (data > root.data) {
      root.right = this.delete(data, root.right);
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

  find(data, root = this.root) {
    if (root === null || root.data === data) {
      return root;
    }

    // Access root's children if value not found;
    if (data < root.data) {
      return this.find(data, root.left);
    }
    return this.find(data, root.right);
  }

  levelOrder(fcn) {
    if (!this.root) return [];

    let queue = [this.root];
    let result = [];

    while (queue.length != 0) {
      let level = [];
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        level.push(node.data);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        if (fcn) fcn(node);
      }

      result.push(level);
    }
    if (!fcn) return result;
  }

  // data left right
  preOrder(fcn, node = this.root, result = []) {
    if (node == null) return [];

    result.push(node.data);
    if (fcn) fcn(node);
    this.preOrder(fcn, node.left, result);
    this.preOrder(fcn, node.right, result);

    if (!fcn) return result;
  }

  //left data right
  inOrder(fcn, node = this.root, result = []) {
    if (node == null) return;

    this.inOrder(fcn, node.left, result);
    result.push(node.data);
    if (fcn) fcn(node);
    this.inOrder(fcn, node.right, result);

    if (!fcn) return result;
  }

  //left right data
  postOrder(fcn, node = this.root, result = []) {
    if (node == null) return;

    this.postOrder(fcn, node.left, result);
    this.postOrder(fcn, node.right, result);
    result.push(node.data);
    if (fcn) fcn(node);

    if (!fcn) return result;
  }

  height(node = this.root) {
    if (node === null) return 0;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node, root = this.root, level = 0) {
    if (root == null) return -1;

    if (node.data < root.data) {
      return this.depth(node, root.left, level + 1);
    } else if (node.data > root.data) {
      return this.depth(node, root.right, level + 1);
    }
    if (node.data == root.data) {
      return level;
    }
  }

  isBalanced() {
    let root = this.root;

    if (this.height(root.left) == this.height(root.right)) {
      return true;
    } else {
      return false;
    }
  }

  reBalance() {
    this.array = this.inOrder();
    this.buildTree();
  }

  print() {
    this.#prettyPrint(this.root);
  }

  #prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.#prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.#prettyPrint(
        node.left,
        `${prefix}${isLeft ? "    " : "│   "}`,
        true
      );
    }
  }
}
