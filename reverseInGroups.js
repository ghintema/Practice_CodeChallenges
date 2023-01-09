const reverseInGroups = (arr, k) => {
    // code here
    
    for(let i = 0; i < arr.length; i = i + k) {
        //swap the element from i*k...i*k+k
        let l = 0;
        while( l < Math.floor( k / 2 ) && (i + k) <= arr.length ) {
            [arr[i + l], arr[i + k - l - 1]] = [arr[i + k - l - 1], arr[i + l]]
            l++;
        }
    }
    let x = arr.length%k;
    let l = 0;
    while( l < Math.floor( x / 2)) {
        [arr[arr.length - x + l], arr[arr.length - 1 - l]] = [arr[arr.length - 1 - l], arr[arr.length - x + l]]
        l++;
    }
    return arr;
}

console.log(reverseInGroups([1,2,3,4,5,6,8,9,10,11], 3))