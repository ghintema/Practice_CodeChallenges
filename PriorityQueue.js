class PriorityQueue {
    constructor() {
      this.heap = [ null ]; // with placeholder at index = 0, data begin only at index = 1; This faciclitates insertion and retrieval.
      this.size = 0;
    }

    popMin() {
        if (this.size === 0) {
          return null;
        }
        
        // console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
        this.swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        // console.log(`.. Removed ${min} from heap`);
        // console.log('..',this.heap);
        this.heapify();
        return min;
      }
  
    add({ vertex, priority }) {
        // console.log(`.. adding ${value}`);
        this.heap.push({ vertex, priority });
        this.size++;
        this.bubbleUp();
        // console.log(`added ${value} to heap`, this.heap);
    }
  
    bubbleUp() {
        let current = this.size; // beginning at the end of the heap where the new data has just been inserted.
        while (current > 1 && this.heap[current].priority < this.heap[getParent(current)].priority) {
            // console.log('..', this.heap);
            // console.log(`.. swap index ${current} with ${getParent(current)}`);
            this.swap(current, getParent(current));
            current = getParent(current);
        }
    }
  
    heapify() {
        let current = 1;
        let leftChild = getLeftChild(current);
        let rightChild = getRightChild(current);
        while (this.canSwap(current, leftChild, rightChild)) {
            if ( this.exists(leftChild) && this.exists()) {
                // if both childs exist, the PriorityQueue swaps the smaller to the top.
                if ( this.heap[leftChild].priority < this.heap[rightChild].priority ) {
                    this.swap(current, leftChild);
                    current = leftChild;
                } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                }
            } else {
                // if only one child exists, it is the left one.
                this.swap(current, leftChild);
                current = leftChild;
            }
            leftChild = getLeftChild(current);
            rightChild = getRightChild(current);
        }
    }

  exists(index) {
    return index <= this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  canSwap(current, leftChild, rightChild) {
        // Check that one of the possible swap conditions exists
        return (
            this.exists(leftChild) && this.heap[current].priority > this.heap[leftChild].priority
            || this.exists(rightChild) && this.heap[current].priority > this.heap[rightChild].priority
        );
  }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  }
  

  // ATTENTION: these formulars depent on the fact of min-index = 1 instead of 0.
  const getParent = current => Math.floor((current / 2));
  const getLeftChild = current => current * 2;
  const getRightChild = current => current * 2 + 1;
  
  module.exports = PriorityQueue;
  


  const myPriorityQueue = new PriorityQueue();

  myPriorityQueue.add(3);
  myPriorityQueue.add(5);
  myPriorityQueue.add(8);
  myPriorityQueue.add(2);
  myPriorityQueue.add(4);
  myPriorityQueue.add(9);
  myPriorityQueue.add(3);
  myPriorityQueue.add(1);
  myPriorityQueue.add(-1);
//   console.log(myPriorityQueue.heap)