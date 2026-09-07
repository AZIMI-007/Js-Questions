//  (Sum a series) Write a program to sum the following series:
// 1
// 3 + 3
// 5 + 5
// 7 + 7
// 9 + 9
// 11 + 11
// 13 + g+ 95
// 97 + 97
// 99

let sum = 0; 

for (let i = 1; i <= 97; i += 2) {
    sum += i / (i + 2);
}

console.log("Sum of the series: " + sum); 