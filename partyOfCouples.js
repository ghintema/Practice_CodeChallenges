const findSingle = (n, arr) => {
    //code here
    for (let i = 0; i < arr.length; i++) {
        const copy = [...arr]; // deep copy of arr to not change it.
        const x = copy.splice(i,1) // remove one element beginning from i ;
        if(copy.includes(...x)) {
            continue;
        } else {
            return arr[i]
        }
    }
}

console.log(findSingle(11, [1, 2, 3, 5, 3,85, 2, 1, 4, 5, 6, 6,4,7]));
