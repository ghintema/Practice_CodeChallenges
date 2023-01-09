const firstElementKTime = (arr,n,k) => {
    //code here

    if(k===1) return arr[0];

    const numbers = [arr[0]];
    const counter = [1];
    let leaderScore = 1;
    let leaderValue = arr[0];
    
    for(let i = 1; i < n; i++) {
        
        const index = numbers.indexOf(arr[i]);
        
        if(index >= 0) {
            counter[index] ++;
            if(counter[index] > leaderScore ) {
                leaderValue = numbers[index];
                leaderScore = counter[index];
            }
        } else {
            numbers.push(arr[i]);
            counter.push(1);
        }
        if(leaderScore === k) {
            return leaderValue;
        }
    }
    
    return -1
}

console.log(firstElementKTime([4, 2, 2, 2, 3, 4, 4, 4, 3, 2],10,3))