const equilibriumPoint = (a, n) => {
        //your code here
        if(n===1) return 1;
        
        let leftSum = 0;
        let rightSum = 0;
        
        for(let i = 1; i < a.length; i++) {
            rightSum += a[i];
        }
        
        for(let i = 1; i < a.length - 1; i++) {
        
            leftSum += a[i-1];
            rightSum -= a[i];
        
            if(leftSum === rightSum) {
                return i + 1;
            }
            
        }
        
        return -1;
    }

    console.log(equilibriumPoint([1,3,2,2,2,3,5,4,5,1,1,1,1],8))
    console.log(equilibriumPoint([1,1,1,1],8))