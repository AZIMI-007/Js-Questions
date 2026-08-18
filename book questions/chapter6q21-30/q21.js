// (Phone keypads)The international standard letter/number mapping for telephones 
// is shown in Programming Exercise 4.15. Write a method that returns a number, 
// given an uppercase letter, as follows:
// int getNumber(char uppercaseLetter)
// Write a test program that prompts the user to enter a phone number as a string. 
// The input number may contain letters. The program translates a letter (uppercase 
// or lowercase) to a digit and leaves all other characters intact. Here is a sample run 
// of the program:


let letter = prompt("Enter a string")

function PhoneKeypads (letter){
    
    let result = ""
    for(let i = 0 ; i < letter.length ; i++ ){
       let ch = letter[i].toUpperCase();
        if (ch === "A" || ch === "B" || ch === "C") {
            result += "2";
        }else if (ch === "D" || ch === "E" || ch === "F") {
            result += "3";
        }else if (ch === "G" || ch === "H" || ch === "I") {
            result += "4";
        }else if (ch === "J" || ch === "K" || ch === "L") {
            result += "5";
        }else if (ch === "M" || ch === "N" || ch === "O") {
            result += "6";
        }else if (ch === "P" || ch === "Q" || ch === "R" || ch === "S") {
            result += "7";
        }else if (ch === "T" || ch === "U" || ch === "V") {
            result += "8";
        }else if (ch === "W" || ch === "X" || ch === "Y" || ch === "Z") {
            result += "9";
        }else {
            result += ch;
        }

        
    }
    return result;
    
}

console.log(PhoneKeypads(letter));