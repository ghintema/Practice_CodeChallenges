const missingNumber = (array,n) => {
    //code here
    let target = 0;
    let actual = 0;

    for(let i = 0; i < array.length ; i++) {
        actual += array[i];
        target += i + 1;
    }
    target += n;
    return  target - actual;
}

console.log(missingNumber([3, 5, 2, 1, 4, 6, 9, 10, 11, 12, 7, 13], 13))
console.log(missingNumber([1,2,3,5],5))
console.log(missingNumber([1,6,3,4,2],6))