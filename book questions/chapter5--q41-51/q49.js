// (Count vowels and consonants) Assume letters A, E, I, O, and U as the vowels. 
// Write a program that prompts the user to enter a string and displays the number 
// of vowels and consonants in the string.


let text = prompt("Enter a string: ");

let vowels = 0;
let consonants = 0;

for (let i = 0; i < text.length; i++) {
    let karectar = text[i].toLowerCase();

    if (karectar == "a" || karectar == "e" || karectar == "i" || karectar == "o" || karectar == "u") {
        vowels++;
    }
    else if (karectar >= "a" && karectar <= "z"){
      consonants ++
    }
}
console.log(text)
console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);