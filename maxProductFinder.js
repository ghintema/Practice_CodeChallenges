function maxProductFinder(list, k) {
    // find the greates possible product with any k numbers (not contiguous) out of list.
    // Assumption: list.length > k

    const absSortedNumbers = list.sort((a,b) => Math.abs(b) - Math.abs(a));


    let product = 1;
    let minusIncludedCounter = 0; 
    for (let i = 0; i < k; i++) {
        if(absSortedNumbers !== 0) {
        product *= absSortedNumbers[i];
        }
        if(absSortedNumbers[i] < 0) {
        minusIncludedCounter ++;
        }
    }

    // if product is < 0, there are two possible options:
        // exchange a positive for a negetive number.
        // exchagen a negative for a positive number.

    let posRemove = null; // the first positive number above index k within absSortedNumbers.
    let posInclud = null; // the first positive number below index k - 1 within absSortedNumbers.   
    let negRemove = null; // the first negative number above index k within absSortedNumbers.
    let negInclud = null; // the first negative number below index k - 1 within absSortedNumbers.
    if(product < 0) {

        let counter = k;
        while(counter < absSortedNumbers.length ) {
            if(absSortedNumbers[counter] > 0 && posInclud === null) {
                posInclud = absSortedNumbers[counter];
            }
            counter ++;
        }

        counter = k;
        while(counter < absSortedNumbers.length ) {
            if(absSortedNumbers[counter] < 0 && negInclud === null) {
                negInclud = absSortedNumbers[counter];
            }
            counter ++;
        }

        counter = k - 1;
        while(counter >= 0) {
            if(absSortedNumbers[counter] > 0 && posRemove === null) {
                posRemove = absSortedNumbers[counter];
            }
            counter --;
        }
        counter = k - 1;
        while(counter >= 0) {
            if(absSortedNumbers[counter] < 0 && negRemove === null) {
                negRemove = absSortedNumbers[counter];
            }
            counter --;
        }
        let factorByIncludingANegativ = null;
        let factorByRemovingANegativ = null;
        
        if (posRemove && negRemove && posInclud && negInclud) {
            const factorByIncludingANegativ = negInclud / posRemove;
            const factorByRemovingANegativ = posInclud / negRemove;
            
            if( Math.abs(factorByIncludingANegativ) >= Math.abs(factorByRemovingANegativ)) {
                return product * factorByIncludingANegativ;
            } else if(Math.abs(factorByIncludingANegativ) < Math.abs(factorByRemovingANegativ)) {
                return product * factorByRemovingANegativ;
            }
        } else if(negInclud && posRemove) {
            const factorByIncludingANegativ = negInclud / posRemove;
            return product * factorByIncludingANegativ;
        } else if(posInclud && negRemove) {
            const factorByRemovingANegativ = posInclud / negRemove;
            return product * factorByRemovingANegativ;
        }

        if (posRemove !== null && negInclud !== null) {
            console.log('test')
        }
        if (negRemove !== null && posInclud !== null) {
        }
        console.log('test')
    }
    return product
}

console.log(maxProductFinder([8, 6, 7, 5, -4, 1, -9],1));
console.log(maxProductFinder([-8, 6, -7, 3, 2, 1, -9], 1))
console.log(maxProductFinder([-9,8,-7,-6,5,-4,-3,2,1], 1))