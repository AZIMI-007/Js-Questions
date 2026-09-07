//  (Math: combinations) Write a program that displays all possible combinations 
// for picking two numbers from integers 1 to 7. Also display the total number of 
// all combinations.

let count = 0;

for (let i = 1; i <= 7; i++) {
    for (let j = i + 1; j <= 7; j++) {
        console.log(i + " , " + j);
        count++;
    }
}

console.log("Total combinations: " + count);