// (Demonstrate cancellation errors) A cancellation error occurs when you are 
// manipulating a very large number with a very small number. The large number 
// may cancel out the smaller number. For example, the result of 100000000.0 + 
// 0.000000001 is equal to 100000000.0. To avoid cancellation errors and obtain 
// more accurate results, carefully select the order of computation. For example, in 
// computing the following series, you will obtain more accurate results by comput
// ing from right to left rather than from left to right:
// 1 + 1
// 2 + 1
// 3 + c + 1
// n
// Write a program that compares the results of the summation of the preceding 
// series, computing from left to right and from right to left with n = 50000.

let n = 50000;


let sumLeft = 0;
for (let i = 1; i <= n; i++) {
    sumLeft += 1 / i;
}


let sumRight = 0;
for (let i = n; i >= 1; i--) {
    sumRight += 1 / i;
}

console.log("Sum from left to right: " + sumLeft);
console.log("Sum from right to left: " + sumRight);