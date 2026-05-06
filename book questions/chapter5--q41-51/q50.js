// (Count uppercase letters) Write a program that prompts the user to enter a string 
// and displays the number of the uppercase letters in the string. 
 

let text = prompt("Enter a string:");

let count = 0;

for (let i = 0; i < text.length; i++) {
    let karectar = text[i];

    if (karectar >= 'A' && karectar <= 'Z') {
        count++;
    }
} 

console.log("Number of uppercase letters: " + count); 