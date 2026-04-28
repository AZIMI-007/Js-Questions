// (Compute p) You can approximate p by using the following series:
// p = 4¢1- 1
// 3 + 1
// 5- 1
// 7 + 1
// 9- 1
// 11 + g + (-1)i+1
// 2i- 1 ≤
// Write a program that displays the p value for i = 10000, 20000, …, and 
// 100000.


for (let n = 10000; n <= 100000; n += 10000) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let term = 1 / (2 * i - 1);

        if (i % 2 === 0) {
            sum -= term; 
        } else {
            sum += term; 
        }
    }

    let pi = 4 * sum;
    console.log("i = " + n + "  pi ≈ " + pi);
}