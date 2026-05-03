// (Summation) Write a program to compute the following summation.
// 1
// 1+22
// + 1
// 22+23
// + 1
// 23+24
// +c+ 1
// 2624+2625

let sum = 0;

for (let i = 1; i <= 24; i++) {
    let term = 1 / (Math.pow(2, i) + Math.pow(2, i + 1));
    sum += term;
}

console.log("Sum =", sum); 