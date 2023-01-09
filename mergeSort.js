const mergeSort = (array) => {

    if(array.length === 1) {
        return array
    }

    const middle = Math.floor(array.length / 2);

    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left); // as left and right are not yet sorted, we call the function on each of them again.
    right = mergeSort(right);

    return merge(left, right) // the sorted arrays need be merged together.
}

const merge = (left, right) => {
    // this function merges two sorted arrays into one sorted array 

    const result = [];

    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
            result.push(left[0]);
            left.shift();
        } else {
            result.push(right[0]);
            right.shift();
        }
    }

    // if any of left or right is empty and thus no more choices to make, concate the rest of the not empty to the result

    // while(left.length > 0) {
    //     result.push(left[0]);
    //     left.shift();
    // }

    // while(right.length > 0) {
    //     result.push(right[0]);
    //     right.shift();
    // }
    return result.concat(left).concat(right);
}

// console.log(mergeSort([5,4,3,2,1]))

const unsorted = []
for (let i = 0; i < 30 ; i++){
    unsorted.push(Math.floor(Math.random()*20)+1)
}
console.log(unsorted);
console.log(mergeSort(unsorted))