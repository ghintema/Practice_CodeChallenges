
const fib = n => {
    // returns the nth number in the fibonacci-line
    if(n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fib(n-1) + fib(n-2);
    }
}

// console.log(fib(0))
// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(4))
// console.log(fib(5))
// console.log(fib(6))
console.log(fib(10))