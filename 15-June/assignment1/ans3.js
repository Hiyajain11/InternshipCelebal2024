// 3. Print the fibonacci sequence?
function printFibonacci(n) {
    let a = 0, b = 1, nextTerm;

    console.log("Fibonacci Sequence:");
    for (let i = 1; i <= n; i++) {
        console.log(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
}
printFibonacci(10);





