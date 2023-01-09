const knapSackRecursive = (cap, values, weights, n = weights.length) => {
    // This function returns the optimal value that fits in a knapSack of capazity cap.
    // Each item n has a value = values[n-1] and a weight = weights[n-1]; 
    // So far it has a runtime of O(2^n)

    // base case: no items or no capacity
    if ( cap === 0 || n === 0 ) {
        return 0;
    }

    // simple case: item n doesn't fit into cap, not even alone. The only thing to do is return the optimum before without item n.
    if ( weights[n-1] > cap ) {
        return knapSackRecursive(cap, values, weights, n - 1);
    }

    // other case: item n could fit into cap, pick the better of two szenarios:
        // including item n: value of n plus value of the remaining cap without the item.
        // not including item n: value of the cap without the item.
    // NOTICE: the arrays 'values' and 'weights' are 0-based. Parameter 'n' is 1-based.
    if ( weights[n-1] <= cap ) {
        return Math.max(
            values[n-1] + knapSackRecursive(cap - weights[n-1], values, weights, n - 1),
            knapSackRecursive(cap, values, weights, n - 1)
        );
    }
}

const knapSackDynamicIterativ = (cap, values, weights) => {
    // this version is based on dynamic programming, iterative and has a runtime O(n*cap) 
    
    // creating a matrix n*cap
    const n = weights.length;
    const matrix = new Array(n + 1);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(cap + 1);
    }

    // iterating the matrix
    for (let item = 0; item <= n; item ++) {

        for (let weight = 0; weight <= cap; weight ++) {

            // basecase:if there is not item or no capazity
            if (item === 0 || weight === 0) {
                matrix[item][weight] = 0;
            }

            // simple case: if the item does't fit at all
            else if (weights[item-1] > weight) {
                matrix[item][weight] = matrix[item-1][weight];
            }

            // other case: if the item does fit, we include it if it incerases the value.
            else if (weights[item-1] <= weight) {
                const include = values[item-1] + matrix[item-1][weight - weights[item-1]];
                const exclude = matrix[item-1][weight];
                matrix[item][weight] = Math.max(include, exclude);
            }

        }
    }
    return matrix[n][cap]
}


console.log(knapSackRecursive(11, [5,4,6,8,20], [2,4,6,5,1]))
console.log(knapSackDynamicIterativ(11, [5,4,6,8,20], [2,4,6,5,1]))
console.log(knapSackRecursive(15, [5,4,6,8,11], [2,4,6,5,1]))
console.log(knapSackDynamicIterativ(15, [5,4,6,8,11], [2,4,6,5,1]))