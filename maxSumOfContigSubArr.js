const maxSumOfContiguousSubArray = (array, k) => {
    // k = size of contiguousSubArray within array
    // perfect example for sliding window technic
    let windowSum = 0;
    let maxSum = - Infinity;

    for (let i = 0; i < array.length; i++) {
        if(i < k) {
            windowSum += array[i];
        } else {
            windowSum = windowSum + array[i] - array[i - k];
            if(maxSum < windowSum) {
                maxSum = windowSum;
            }
        }
    }
    return maxSum;
}

console.log(maxSumOfContiguousSubArray([4,5,6,-5,8,0],4))