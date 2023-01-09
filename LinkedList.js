class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }  

  getNextNode() {
    return this.next;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null ) {
        this.next = node;
    } else {
        throw new Error('Next node must be a member of the Node class.')
    }    
  }
} 


class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const currentHead = this.head;
        const newHead = new Node(data);
        if(currentHead) {
            newHead.setNextNode(currentHead);
        }
        this.head = newHead;
    }

    addToTail(data) {
        let tail = this.head;

        if(!tail) { // is list is empty, start a new one.
            this.head = new Node(data);
        } else { // else, find the tail and add a new Node(data);
            while(tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }
    
    insertAtIndex(index, data) {
        if (index === 0) {
            this.addToHead(data);
            return;
        }
        const insert = new Node(data);
        let successor = this.head;
        let predecessor = this.head;
        let n = 0;
        while(n < index && successor !== null) {
            predecessor = successor;
            successor = successor.getNextNode();
            n++;
        }

        if (n === index) {
            insert.setNextNode(successor);
            predecessor.setNextNode(insert);
        }
    }

    removeHead(data) {
        const removedHead = this.head;

        if(!removedHead) {
            return; // is list is empty, return;
        } 
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }
    
    removeTail() {
        let tail = this.head;
        let newTail = tail;
        // console.log(tail)
        if(!tail) {return}; // is list is empty, do nothing
        if(!tail.getNextNode()) {
            this.head = null; // if list has only one element, delet it;
            return tail.data;
        }
        while(tail.getNextNode() !== null) {
            newTail = tail;
            tail = tail.getNextNode();
        }
        newTail.setNextNode(null);
    }
    
    removeData(data) {
        let remove = this.head;
        let prev = this.head

        while(remove.data != data && remove.getNextNode() !== null ) {
            prev = remove;
            remove = remove.getNextNode();
        }
        if (remove.data === data) {
            prev.setNextNode(remove.getNextNode())
        }
    }

    removeIndex(index) {
        if (index === 0) {
            this.removeHead(data); 
            return;
        }
        let remove = this.head;
        let prev = this.head;
        let n = 0;
        while(n < index && remove.getNextNode() !== null) {
            prev = remove;
            remove = remove.getNextNode();
            n++;
        }
        if (n === index) {
            prev.setNextNode(remove.getNextNode());
        }
    }
    
    findIndexOfData(data) {
        let find = this.head;
        let index = 0;

        while(find.data != data && find.getNextNode() !== null) {
            find = find.getNextNode();
            index ++;
        }

        if(find.data === data) {
            return index;
        } else {
            return null;
        }

    }

    getTail() {
        let tail = this.head;
        while(tail.getNextNode()) {
            tail = tail.getNextNode();
        }
        return tail.data;
    }
    
    getAtIndex(index) {
        let count = 0;
        let find = this.head;

        while(count < index && find !== null) {
            find = find.getNextNode();
            count ++;
        }

        if(count === index) {
            return find.data
        } else {
            return null
        }
    }

    getAtNthLastIndex(index) {
        let lastNode = this.head;
        let nthLastNode = this.head;
        let counter1 = 0;
        index = Math.max(index, 0);
        while(lastNode.getNextNode()) {
            if (counter1 >= index) {
                nthLastNode = nthLastNode.getNextNode();
            }
            lastNode = lastNode.getNextNode();
            counter1 ++;
        }
        return nthLastNode.data;
    }

    getTheMiddleNode() {
        let tail = this.head;
        let middle = this.head;
        let count = 0;
        while(tail) {
            tail = tail.getNextNode();
            if(count % 2 === 0 && count > 0) {
                middle = middle.getNextNode();
            }
            count ++;
        }

        return middle.data;
    
    }

    swapNodes(data1, data2) {
        let node1 = this.head;
        let prev1 = null;    
        let node2 = this.head;
        let prev2 = null;
        
        // finding nodes and there prevs
        while(node1.data !== data1 && node1.getNextNode() != null) {
            prev1 = node1;
            node1 = node1.getNextNode();
        }
        
        while(node2.data !== data2 && node2.getNextNode() != null) {
            prev2 = node2;
            node2 = node2.getNextNode();
        }
        // swaping nodes depending on case and only if both nodes where found.
        if (node1.data === data1 && node2.data === data2) {
            if (node1 === prev2) {          // node1 directly infront of node2...
                node1.setNextNode(node2.getNextNode());
                node2.setNextNode(node1);
                if (prev1) {                // and node1 is NOT first of list
                    prev1.setNextNode(node2);
                } else {                    // and node1 IS first of list
                    this.head = node2;
                }
            } else if (node2 === prev1) {
                node2.setNextNode(node1.getNextNode());
                node1.setNextNode(node2);
                if (prev2) {
                    prev2.setNextNode(node1);
                } else {
                    this.head = node1;
                }
            } else {            // there is atleast one node between 
                const node1OldNext = node1.getNextNode();
                node1.setNextNode(node2.getNextNode());
                node2.setNextNode(node1OldNext);
                if (prev1 === null) {
                    this.head = node2;
                    prev2.setNextNode(node1);
                } else if (prev2 === null) {
                    this.head = node1;
                    prev1.setNextNode(node2);
                } else {
                    prev2.setNextNode(node1);
                    prev1.setNextNode(node2);
                }   
            }  
        }
    }

    getLength() {
        let length = 0;
        let tail = this.head;
        while(tail) {
            tail=tail.getNextNode();
            length++;
        }
        return length;
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';

        while(currentNode) {
            output += `${currentNode.data} `;
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>'
        console.log(output);
    }
}

const reverseList = (list) => {
    let currentNode = list.head;
    let reversedList = new LinkedList;
    while(node) {
        reversedList.addToHead(node.data);
        currentNode = currentNode.getNextNode();
    }
    return reversedList;
}


function reverseLinkedList(linkedList){
    // This version of list-reversal works without any list-class but only with node-class.
    let currentNode = linkedList;
    let reversedList = null;
    while(current) {
      const newHead = new Node(current.data);
      newHead.next = reversedList;
      reversedList = newHead;
      current = current.next;
    }
    return reversedList
  }

const reverseListBetween = (list, left, right) => {
    if (right <= left) {return console.log('wrong input data')}
    // reverses the list between node left to right
    let node = list.head;
    const sideList = new LinkedList();
    const outputList = new LinkedList();
    let count = 0;
    
    while(node) { // walking through the original list...
        if (count < left) { // storing the nodes from 0 to left in reverse order for later use.
            sideList.addToHead(node.data);
        } else if ( count >= left && count < right) { // storing the nodes from left to right in reverse oder into the output-list
            outputList.addToHead(node.data);
        } else if (count >= right) { // storing the nodes from right to end of the list in chronological order into the output-list. 
            console.log('test')
            outputList.addToTail(node.data)
        }

        count ++;
        node = node.getNextNode();
    }

    if (sideList.head) {
        node = sideList.head;
        while(node) { // walking the side-list to put the very first nodes to the output-list
            outputList.addToHead(node.data);
            node = node.getNextNode();
        }
    }

    return outputList



    // first, walk the list up to left, putting the nodes in reverse order in a side-list.
    // from left to right, put all nodes in reverse order (using addToHead) in the final output-list.
    // from right to the end of the list put all nodes in chronological order (using addToTail) in the final output-list.
    // finally, walk the creeated side-list (wich carries the beginning of the original list in reverse order) and put every node to the head of the output list.
}

list = new LinkedList;
const array = [1, 2, 3, [7,8,9]]
const obj = {first: 1, second: 2}
list.addToHead(array);
list.addToHead(obj);
list.addToHead('string');
list.addToTail(5);
list.printList();
list.removeData(array);
list.printList();
list.removeData(obj);
list.printList();
list.addToHead('spring');
list.addToHead('winter')
list.printList();
list.insertAtIndex(40,'tetst')
list.printList();
list.insertAtIndex(40,'tetst')
list.addToTail(10);
list.printList();
list.swapNodes('spring', 'string');
list.printList();
list.swapNodes('winter', 10);
list.printList();
list.swapNodes(5, 10);
list.printList();
list.swapNodes(5, 11);
list.printList();
// // console.log(list.getTail());
// // console.log(list.head)

const list2 = new LinkedList();
list2.addToTail(1);
list2.addToTail(2);
list2.addToTail(3);
list2.addToTail(4);
list2.addToTail(5);
list2.addToTail(6);
list2.addToTail(7);
list2.addToTail(8);
list2.printList();
const listReversed = reverseListBetween(list2, 2,5);
listReversed.printList()
console.log(list.head)
// console.log(listReversed.getTail)

// console.log(listReversed)
// console.log(list.getAtNthLastIndex(0))
// console.log(list.getAtNthLastIndex(1))
// console.log(list.getAtNthLastIndex(2))
// console.log(list.getAtNthLastIndex(3))
// console.log(list.getAtNthLastIndex(4))
// console.log(list.getAtNthLastIndex(5))
// console.log(list.getAtNthLastIndex(6))
// console.log(list.getAtNthLastIndex(-6))
// console.log(list.getTheMiddleNode())
// list.addToHead(3);
// list.printList();
// console.log(list.getTheMiddleNode())
// list.addToHead('köas');
// list.printList();
// console.log(list.getTheMiddleNode())
// list.addToTail('köas');
// list.printList();
// console.log(list.getTheMiddleNode())

// console.log(list.head)
// console.log(list.head.next)
// console.log(list.head.next.next)
// console.log(list.head.next.next.next)
// list.swapNodes('winter', 10);
// list.printList();
// list.swapNodes(5, 'spring');
// list.printList();
// list.swapNodes('spring', 'string');
// list.printList();
// console.log(list.getLength())
// console.log(list.findIndexOfData('string'))
// console.log(list.findIndexOfData('winter'))
// console.log(list.findIndexOfData(5))
// console.log(list.findIndexOfData(9))

