//  (Decimal to octal) Write a program that prompts the user to enter a decimal 
// integer and displays its corresponding octal value. Don’t use Java’s Integer
// .toOctalString(int) in this program.

let decimal = Number(prompt("Enter a decimal number"));

let octal = "";

while (decimal > 0) {
    let remainder = decimal % 8;
    octal = remainder + octal;
    decimal = Math.floor(decimal / 8);
}

console.log("Octal value is: " + octal);