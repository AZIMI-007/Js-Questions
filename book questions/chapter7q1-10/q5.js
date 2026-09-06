// (Print distinct numbers) Write a program that reads in ten numbers and displays 
// the number of distinct numbers and the distinct numbers separated by exactly one 
// space (i.e., if a number appears multiple times, it is displayed only once). (Hint:
// Read a number and store it to an array if it is new. If the number is already in the 
// array, ignore it.) After the input, the array contains the distinct numbers. Here is 
// the sample run of the program:

  let distinct = [];

for (let i = 0; i < 10; i++) {
    let number = Number(prompt("Enter a number:"));

    if (!distinct.includes(number)) {
        distinct.push(number);
    }
}

console.log("The number of distinct numbers is " + distinct.length);

console.log(distinct.join(" "));