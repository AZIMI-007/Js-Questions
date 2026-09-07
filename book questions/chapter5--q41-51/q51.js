// (Longest common prefix) Write a program that prompts the user to enter two 
// strings and displays the largest common prefix of the two strings. Here are some 
// sample runs:

let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");

let result = "";

let minLength = Math.min(str1.length, str2.length);

for (let i = 0; i < minLength; i++) {
    if (str1[i] === str2[i]) {
        result += str1[i];
    } else {
        break;
    }
}

if (result === "") {
    console.log("No common prefix");
} else {
    console.log("Longest common prefix is: " + result);
}