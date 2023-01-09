
const quickSort = (array, leftBound = 0, rightBound = (array.length - 1)) => {
    // unlike mergeSort, quickSort works 'in place' with space complexity O(1). 
    // Instead of using smaller copies of the array (using extra space), the original array is restricted during the recursion by rightBound and leftBound.
    // leftBound === rightBound represents the base-case of array.length === 1
    // just like mergeSort time complexity is O(nlogn)


    if(leftBound < rightBound) {
        const pivotIndex = partition(array, leftBound, rightBound);
        quickSort(array, leftBound, pivotIndex - 1); // calling quickSort on the remaining left side;
        quickSort(array, pivotIndex, rightBound); // calling quickSort on the remaining right side;
    }

    return array;
}

const partition = (array, leftIndex, rightIndex) => {
    const pivot = array[Math.floor((leftIndex + rightIndex) / 2)];

    while(leftIndex <= rightIndex) {
        // going through all the partition, 
        // searching for elements left of the piviot that are larger than the pivot and
        // searching for elements right of the piviot that are smaller than the pivot.
        // swapping those elements, if found before leftIndex passes rightIndex.

        while(array[leftIndex] < pivot) {
            leftIndex++; // increasing leftIndex until it points to a value >= pivot.
        }
        while(array[rightIndex] > pivot) {
            rightIndex--;  // decreasing rightIndex until it points to a value <= pivot
        }

        if(leftIndex <= rightIndex) { // swapping those values, but only if found before crossing the pivot.
            [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
            leftIndex++;
            rightIndex--;
        }
    }
    return leftIndex;
}



const unsorted = []
for (let i = 0; i < 10 ; i++){
    unsorted.push(Math.floor(Math.random()*20)+1)
}
console.log(unsorted);
console.log(quickSort(unsorted))