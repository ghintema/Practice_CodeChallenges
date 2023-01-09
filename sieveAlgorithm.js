const SieveOfEratosthenes = (n) => {
    const primStatus = new Array(n + 1).fill(true); // every index in this array is representing a potential prim number.
    primStatus[0] = false;
    primStatus[1] = false;

    let outerLoop = 0;
    let innerLoop = 0;

    for (let i = 2; i <= n; i++) {
        outerLoop ++;
        if (primStatus[i] === true) { // if i is a prime number, than all manifolds of i are NOT prime numbers.
            for ( let j = 2 * i; j <= n; j = j + i ) {// this loop is to skip all manyfolds of current i from the list of prime numbers.
                innerLoop ++;
                primStatus[j] = false;
            } 
        }
    }

    console.log(outerLoop, innerLoop);
    console.log(innerLoop / outerLoop)
    const primNumbers = [];
    primStatus.forEach((status, index) => status ? primNumbers.push(index) : 1 )
    return primNumbers;

}

console.log(SieveOfEratosthenes(10000000))