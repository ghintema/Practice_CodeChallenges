const factorial = (int) => {
    // returns the factorial of integer int   
    if(int < 0) { // illegal case
        return -1;
    } else if(int === 0 || int === 1) { // base case
        return 1
    } else return int * factorial(int - 1);
}

const permutation = (array) => {
    // returns the possible number of permutations with the elements given in array.
    // each index in array is a specific element.
    // array[index] is the amount of that specific element.
    // https://www.grund-wissen.de/mathematik/stochastik/kombinatorik.html

    const sum = array.reduce((prev, curr) => prev + curr, 0);
    const den = array.reduce((prev, curr) => prev * factorial(curr), 1);

    return ( factorial(sum) / den )
}

const staircasePermutation = (N) => {
    // given a staircase of height N and the possiblity to go either steps of one or two stairs. How many different ways are there to climb the stairs, not counting for duplicates.

    let result = 0;
    const maxSteps = N; // if you only take one stair at a time.
    const minSteps = Math.round(N/2); // if you only take two stairs at a time (if available)



    // the number of different step-combinations (large and small steps) is maxSteps - minSteps
    // we have to add all possible permutation for every combination of number of small steps and large steps.
    
    for (let steps = maxSteps; steps >= minSteps; steps --) {
        const largeSteps =  maxSteps - steps;
        const smallSteps =  steps - largeSteps;
        
        result = result + permutation([smallSteps, largeSteps])
    }   
    return result;
}
// console.log(permutation([1]))
console.log(staircasePermutation(4))
console.log(staircasePermutation(3))
console.log(staircasePermutation(2))
console.log(staircasePermutation(1))