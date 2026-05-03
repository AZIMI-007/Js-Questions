// (Business application: checking ISBN) Use loops to simplify Programming 
// Exercise 3.9.

let isbn = prompt("Enter the first 9 digits of ISBN-10 as a string");

if (isbn.length !== 9) {
    console.log(" Invalid input You must enter exactly 9 digits.");
} else {
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        sum += isbn[i] * (i + 1);
    }

    let checkDigit = sum % 11;

    if (checkDigit === 10) {
        console.log("The ISBN-10 number is " + isbn + "X");
    } else {
        console.log("The ISBN-10 number is " + isbn + checkDigit);
    }
}