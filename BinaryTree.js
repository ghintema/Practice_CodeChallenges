// Real time complexity depends on the depth of searched value.
// In worst case, when the tree is filled in order, depth(tree) == n --> O(n) for retrieval
class BinaryTreeNode {
    constructor(data, depth = 1) {
        this.depth = depth;
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data) { // for equal values you can go to left or to right
            if ( this.left === null) {
                return this.left = new BinaryTreeNode(data, this.depth + 1);
            } else {
                return this.left.insert(data)
            }
        } 
        if (data >= this.data) {
            if (this.right === null) {
                return this.right = new BinaryTreeNode(data, this.depth + 1);
            } else {
                return this.right.insert(data)
            }
        }
    }

    remove(data) {
        // this mehtod return the calling tree without the given data.
        // best case: data found.
        if (data === this.data) {
            // if there is only one child, return that child as root of new tree.
            if(this.left === null) {
                return this.right;
            }
            if(this.right === null) {
                return this.left
            }
            // if there are two children, get the inorder successor (wich is minValue to the right side)
            // and delete that node in its original place.
            this.data = this.right.minValue();
            this.right = this.right.remove(this.data);
        }

        // if data not yet found, recurse further down the tree,
        // either to the left or to the right.
        if (data < this.data && this.left) {
            this.left = this.left.remove(data);
        } else if (data > this.data && this.right) {
            this.right = this.right.remove(data);
        } 

        // base case: data not in the tree.
        return this;
    
    }

    minValue() {
        let current = this;
        let minValue = current.data;

        while(current.left) {
            current = current.left;
            minValue = current.data;
        }

        return minValue
    }
    contains(value) {
        if (this.data === value) {
            return true; // return this; alternatively
        } 
        else if (value < this.data) {
            if (this.left === null) {
                return false;
            } else {
                return this.left.contains(value);
            }
        } else if (value > this.data) {
            if (this.right === null) {
                return false;
            } else {
                return this.right.contains(value);
            }
        }
    }

    breathFirstTraversal() {
        const queue = [ this ];
        while(queue.length > 0) {
            const current = queue.shift(); // take the first node out of the queue...;
            console.log(current.data, current.depth); // print those values
            current.left ? queue.push(current.left) : queue.push() ;
            current.right ? queue.push(current.right) : queue.push() ;
        }
   
    }

    traverseIncreasingOrder() {
        // aka depth-first traversal
        if (this.left !== null) {
            this.left.traverseIncreasingOrder();
        }
        console.log(this.data, this.depth);
        if (this.right !== null) {
            this.right.traverseIncreasingOrder();
        }
    }

    traverseIncreasingOrder2() {
        // this is a non-recursive version working with internal stack.
        const stack = [];
        const result = [];
        let current = this;

        while(current !== null || stack.length > 0) {

            // first going all the way down to the left outer node, pushing all nodes to the stack.
            while(current !== null) {
                stack.push(current);
                current = current.left;
            }

            // second: take the last from stack, grap the data and go one down to the right.
            current = stack.pop();
            result.push(current.data);
            current = current.right;
        }
        return result;
    }

    traverseDecreasingOrder() {
        if (this.right !== null) {
            this.right.traverseDecreasingOrder()
        }
        console.log(this.data, this.depth);
        if (this.left !== null) {
            this.left.traverseDecreasingOrder();
        }
    }



}



// const randomize = () => Math.floor(Math.random() * 20);
const tree = new BinaryTreeNode(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.insert(0);
tree.insert(-1);
tree.insert(-2);
tree.insert(-3);
console.log(tree.traverseIncreasingOrder())
console.log(tree.traverseIncreasingOrder2())

// console.log(tree.contains(3));
// console.log(tree.contains(8));
// console.log(tree.contains(11));
// console.log(tree.contains(15));
// tree.traverseIncreasingOrder();
// tree.traverseDecreasingOrder();

// for (let i = 0; i < 10; i++) {
//     const value = randomize()
//     tree.insert(value);  
// }
// console.log(tree)

// let bt = new BinaryTreeNode(15);
// let numbers = [ 12, 20, 10, 13, 18, 22, 8, 11, 12, 14, 16, 19, 21, 25 ];
// for (let i = 0; i < numbers.length; i++) {
//   bt.insert(numbers[i]);
// //   console.log(`Insert ${numbers[i]} to binary tree`);
// }
// bt.breathFirstTraversal()
// bt.remove(15);
// bt.remove(25);
// bt.remove(8);
// bt.remove(13);
// bt.remove(21);
// bt.breathFirstTraversal()

// console.log('Depth First Traversal');
// bt.traverseIncreasingOrder();
// bt.remove(15);
// bt.traverseIncreasingOrder();
// bt.remove(21);
// bt.traverseIncreasingOrder();
// bt.remove(19);
// bt.traverseIncreasingOrder();
// bt.remove(14);
// bt.traverseIncreasingOrder();
// bt.remove(8);
// bt = deleteDataInBST(bt, 15)
// bt.traverseIncreasingOrder();
// bt = deleteDataInBST(bt, 21);
// bt.traverseIncreasingOrder();
// bt.remove(20);
// bt.traverseIncreasingOrder();
// bt.remove(15);
// bt.traverseIncreasingOrder();

// const root = new BinaryTreeNode(2);
// root.insert(1);
// root.insert(3);
// console.log(root.traverseIncreasingOrder2())