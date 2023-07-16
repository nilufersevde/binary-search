class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
      }
}


class Tree {
    constructor(array) {
        this.sortedArray = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(array);
    }

    buildTree(array){

        if (array.length == 0) {return null}

        let midPoint = Math.floor(array.length/2);
        let midNode = new Node(array[midPoint]);

        let leftArray = array.slice(0, midPoint);
        let rightArray = array.slice(midPoint+1);
        midNode.left = this.buildTree(leftArray);
        midNode.right = this.buildTree(rightArray);

        return midNode;
        
    }

    insertVal(val, node = this.root){

        if (node == null) {
            node = new Node(val);
            return node;
        }
      
        if (val < node.data) {
            node.left = this.insertVal(val, node.left);
        } else if (val > rootNode.data) {
            node.right = this.insertVal(val, node.right);
        }
        
        return node;
    }


    deleteVal(val, node = this.root)  {
       if (node == null) return null
      
       if (val < node.data) {
            node.left = this.deleteVal(val, node.left);
       }
       else if (val > node.data) {
            node.right = this.deletVal(val, node.right);
       }
       else {
            if ( node.right == null) {
                return node.left;
            }
            else if ( node.left == null) {
                return node.right;
            }

            node.data = minVal(node.right);
            node.right= deleteVal(rootNode.data, rootNode.rightChild);

            return node;
            
       }

    }

    minValue(root){
        let minV = root.data;
        while (root.leftChild != null) {
          minV = root.leftChild.data;
          root = root.leftChild;
        }
        return minV;
      };



    find(val, node = this.root){
        if (node === null) return false;
        if (node.data === val) return node;
        if (node.data > val) {
          return this.find(val, rootNode.leftChild);
        } else if (rootNode.data < val) {
          return this.find(val, rootNode.rightChild);
        }
      };


    levelOrder(root = this.root){
        const queue = [];
        const result = [];

        if (root == null) return;
         
        queue.push(root);

        while (queue > 0){
            const current = queue.shift();
            result.push(current.data);
            
            if (current.right != null){queue.push(current.right)};
            if (current.left != null){queue.push(current.left)};

        }

        return result; 

    }


    preOrder(nodeRoot = this.root){
        if (nodeRoot == null){return []};

        const preOrderArr = [];

        preOrderArr.push(nodeRoot);
        if (nodeRoot.left !=null){this.preOrder(nodeRoot.left)};
        if (nodeRoot.right !=null){this.preOrder(nodeRoot.right)};
        
        return preOrderArr;
    }

    height(node){
        if(node == null || this.find(node.data)){return -1}

        return Math.max(this.height(node.left),this.height(node.right))+1;
    }


    depth(node, root = this.root, level = 0) {
        if (!node) return null;
        if (root === null) return 0;
        if (root.key === node.key) return level;
        let count = this.depth(node, root.left, level + 1);
        if (count !== 0) return count;
        return this.depth(node, root.right, level + 1);
      }

      isBalanced(node = this.root) {
        if (node === null) return true;
        const heightDiff = Math.abs(
          this.height(node.left) - this.height(node.right)
        );
        return (
          heightDiff <= 1 &&
          this.isBalanced(node.left) &&
          this.isBalanced(node.right)
        );
      }
    
      rebalance() {
        if (this.root === null) return;
        const sorted = [...new Set(this.inorder().sort((a, b) => a - b))];
        this.root = this.buildTree(sorted);
      }
    
    
}


