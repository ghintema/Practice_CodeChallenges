function bubbleSort(array) {
    let unsorted = array.length;
    let counter = 0
    let swapped = true
    while (swapped) {
        swapped = false;
        for(let i = 0; i < unsorted - 1 ; i++) {
            counter ++;
            if(array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
                swapped = true; // only if swap was necessary, we'll keep going in the outer loop to keep sorting.
            }
        }
        unsorted--;
    }
    console.log(counter)
    return array;
}


// console.log(bubbleSort([10,4,8,1,6,3,2,9,7,5]))
// console.log(bubbleSort([10,8,4,6,1,3,2,7,9,5]))
// console.log(bubbleSort([1,2,3,4,5,6,7,8,9,10]))
// console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]))

const unsorted = []
for (let i = 0; i < 30 ; i++){
    unsorted.push(Math.floor(Math.random()*20)+1)
}
console.log(unsorted);
console.log(bubbleSort(unsorted))