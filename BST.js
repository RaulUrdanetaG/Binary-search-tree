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

  insert(newData) {
    let root = this.root;
    this.#insertToTree(root, newData);
  }

  #insertToTree(root, newData) {
    if (root == null) {
      root = new Node(newData);
      return root;
    }

    if (newData < root.data) {
      root.left = this.#insertToTree(root.left, newData);
    } else if (newData > root.data) {
      root.right = this.#insertToTree(root.right, newData);
    }

    return root;
  }

  delete(data) {
    let root = this.root;
    this.#deleteFromTree(root, data);
  }

  #deleteFromTree(root, data) {
    if (root == null) {
      return root;
    }
    // traverse dow the tree
    if (data < root.data) {
      root.left = this.#deleteFromTree(root.left, data);
      return root;
    } else if (data > root.data) {
      root.right = this.#deleteFromTree(root.right, data);
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

  find(data) {
    let root = this.root;
    this.#findInTree(root, data);
  }

  #findInTree(root, data) {
    if (root == null) {
      return root;
    }
    // traverse dow the tree
    if (data < root.data) {
      root.left = this.#findInTree(root.left, data);
      return root;
    } else if (data > root.data) {
      root.right = this.#findInTree(root.right, data);
      return root;
    }
    this.prettyPrint(root);
    return root;
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
  preOrder(fcn) {
    return this.#preOrderFcn(this.root, fcn);
  }

  #preOrderFcn(node, fcn, result = []) {
    if (node == null) return [];

    result.push(node.data);
    if (fcn) fcn(node);
    this.#preOrderFcn(node.left, fcn, result);
    this.#preOrderFcn(node.right, fcn, result);

    if (!fcn) return result;
  }

  //left data right
  inOrder(fcn) {
    return this.#inOrderFcn(this.root, fcn);
  }

  #inOrderFcn(node, fcn, result = []) {
    if (node == null) return;

    this.#inOrderFcn(node.left, fcn, result);
    result.push(node.data);
    if (fcn) fcn(node);
    this.#inOrderFcn(node.right, fcn, result);

    if (!fcn) return result;
  }

  //left right data
  postOrder(fcn) {
    return this.#postOrderFcn(this.root, fcn);
  }

  #postOrderFcn(node, fcn, result = []) {
    if (node == null) return;

    this.#postOrderFcn(node.left, fcn, result);
    this.#postOrderFcn(node.right, fcn, result);
    result.push(node.data);
    if (fcn) fcn(node);

    if (!fcn) return result;
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
