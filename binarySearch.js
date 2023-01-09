const binarySearchRecursiv = (array, value,  left = 0, right = array.length) => {

    const index = Math.floor((left + right) / 2);
    

    // two base cases:
    if(array[index] === value) { // base case for value found
        return index
    } 
    if(left >= right) { // base case for values not present in array
        return null;
    }

    // two recursive casese:
    if(array[index] < value) {
        return binarySearchRecursiv(array, value, index + 1, right)
    }
    if(array[index] > value) {
        return binarySearchRecursiv(array, value, left, index - 1)
    }


    // return null;  // for values not present below min or beyond max
}


binarySearchIterative = (array, value) => {
    let left = 0;
    let right = array.length;

    while(right > left) {
        const index = Math.floor((left + right) / 2);
        const checking = array[index];

        if(checking === value) {
            return
        }
        if(checking < value) {
            left = index + 1;
        }
        if(checking > value) {
            right = index - 1;
        }
    }
}

console.log(binarySearchRecursiv([1,3,5,6,8,9,11,13,14,18,20],14))
console.log(binarySearchRecursiv([1,3,5,6,8,9,11,13,14,18,20],1))
console.log(binarySearchRecursiv([1,3,5,6,8,9,11,13,14,18,20],3))
console.log(binarySearchRecursiv([1,3,5,6,8,9,11,13,14,18,20],6))
console.log(binarySearchRecursiv([1,3,5,6,8,9,11,13,14,18,20],11))
console.log(binarySearchRecursiv([1,3,5,6,8,9,11,13,14,18,20],20))
console.log(binarySearchRecursiv([1,3,5,6,8,9,11,13,14,18,20],22))
console.log(binarySearchRecursiv([1,3,5,6,8,9,11,13,14,18,20],10))



-1