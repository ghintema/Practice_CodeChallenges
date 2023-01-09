class MaxHeap {
    constructor() {
        this.heap = [null]; // having a fixed placeholder on index 0 to start indexing the real data with 1.
        this.size = 0;
    }

    add(value) {
        console.log(`.. adding ${value}`);
        this.heap.push(value);
        this.size++;
        this.bubbleUp();
        console.log(`added ${value} to heap`, this.heap);
    }

    popMax() {
        if( this.size < 1) {
            return null
        }
        console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
        this.swap(1, this.size); // swaping the first and last element of the heap-array.
        const max = this.heap.pop();
        this.size --;
        console.log(`.. Removed ${max} from heap`);
        console.log('..',this.heap);
        this.heapify()
        return max;
    }


    bubbleUp() {
        let current = this.size;
        while(current > 1 && this.heap[current] > this.heap[getParent(current)]) {
            console.log('..', this.heap);
            console.log(`.. swap index ${current} with ${getParent(current)}`);
            this.swap(current, getParent(current));
            current = getParent(current);
        }
    }

    heapify() {
        let current = 1; // after having swaped first and last before the poping, this misplaced first needs to be restored. 
        let leftChild = getLeftChild(current);
        let rightChild = getRightChild(current);
        while(canSwap(current, leftChild, rightChild)) {
            if( this.exists(leftChild) && this.exists(rightChild)) {
                // if both childs exist, the MaxHeap swaps the larger of the childs to the top.
                if( this.heap[leftChild] > this.heap[rightChild]) {
                    this.swap(current, leftChild);
                    current = leftChild;
                } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                }
            } else {
                // if there is only one child, it's to the left
                this.swap(current, leftChild);
                current = leftChild;
            }
            leftChild = getLeftChild(current);
            rightChild = getRightChild(current);
        }
    }

    swap(a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    canSwap(current, leftChild, rightChild) {
        return ( 
            this.exists(leftChild) && this.heap[current] < this.heap[leftChild]
            ||  this.exists(rightChild) && this.heap[current] < this.heap[rightChild]
        )
    }

    exist(current) {
        return current <= this.size;
    }
}



const getParent = index => Math.floor( index / 2 );
const getLeftChild = index => index * 2;
const getRightChild = index => index * 2 + 1;

const myHeap = new MaxHeap();

myHeap.add(3);
myHeap.add(5);
myHeap.add(8);
myHeap.add(2);
myHeap.add(4);
myHeap.add(9);
myHeap.add(3);
myHeap.add(1);
myHeap.add(-1);