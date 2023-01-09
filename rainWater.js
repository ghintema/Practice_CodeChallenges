// const capturingRainwater = (array) => {
//     const amountPerIndex = [];
//     amountPerIndex[0] = 0;
//     amountPerIndex[array.length - 1] = 0;
//     let total = 0;

//     for (let i = 1; i < array.length - 1; i++) {
//         // for every index, look for their highest boundaries left and right.
//         // every index stores as much water as the lower of these boundaries minus its value.
//         // as we are iterating every index, the boundary distance is not important.

//         const leftValues = array.slice(0, i);
//         const rightValues = array.slice(i + 1, array.length);
//         const leftBoundary = Math.max(...leftValues);
//         const rightBoundary = Math.max(...rightValues);

//         amountPerIndex[i] = Math.max(0, Math.min(leftBoundary, rightBoundary) - array[i])
//         total = total + amountPerIndex[i];
//     }
//     console.log(amountPerIndex);
//     return total;
// }


const capturingRainwater = (array) => {
    // this version approaches the elements from outside to the middle running in O(n)
    let leftPointer = 0; 
    let rightPointer = array.length - 1;
    let leftBoundary = 0;
    let rightBoundary = 0;
    let total = 0;
    const amountPerIndex = [];
    amountPerIndex[0] = 0;
    amountPerIndex[array.length - 1] = 0;

    while(leftPointer <= rightPointer) {

        if(array[leftPointer] <= array[rightPointer]) {
            if(array[leftPointer] > leftBoundary) {
                leftBoundary = array[leftPointer];
            }
            total = total + leftBoundary - array[leftPointer];
            amountPerIndex[leftPointer] = leftBoundary - array[leftPointer];
            leftPointer ++;
        }

        if(array[leftPointer] > array[rightPointer]) {
            if(array[rightPointer] > rightBoundary) {
                rightBoundary = array[rightPointer];
            }
            total = total + rightBoundary - array[rightPointer];
            amountPerIndex[rightPointer] = rightBoundary - array[rightPointer];
            rightPointer --;
        }




        if(leftBoundary <= array[leftPointer]) {
            leftBoundary = array[leftPointer];
        }
    }

    console.log(amountPerIndex)
    return total;

}

console.log(capturingRainwater([5,2,1,3,4]))
console.log(capturingRainwater([5,2,1,3,2]))
console.log(capturingRainwater([15,2,1,4,2]))
console.log(capturingRainwater([15,2,1,4,22]))
console.log(capturingRainwater([1,2,3,2,2]))