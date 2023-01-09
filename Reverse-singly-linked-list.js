const Node = require('./Node.js');
const makeLinkedList = require('./makeLinkedList.js');

function reverseLinkedList(linkedList){
  // Write your code here
  let current = linkedList;
  let reversedList = null;
  while(current) {
    const newHead = new Node(current.data);
    newHead.next = reversedList;
    reversedList = newHead;
    current = current.next;
  }
  return reversedList
}

//Calling your function on an example
console.log("Original")
let exampleLinkedList = makeLinkedList([4, 8,17, 15, 22, 33])
exampleLinkedList.print()
// console.log(exampleLinkedList)
console.log("Reversed")
let reversed = reverseLinkedList(exampleLinkedList)
reversed.print()
// Leave this here so we can test your code
module.exports = reverseLinkedList;
