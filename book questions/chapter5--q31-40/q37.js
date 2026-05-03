// (Decimal to binary) Write a program that prompts the user to enter a decimal 
// integer and displays its corresponding binary value. Don’t use Java’s Integer
// .toBinaryString(int) in this program.




let number = Number(prompt("Enter a decimal integer:"));

if (number === 0) {
    console.log("Binary: 0");
} else { 

    let binary = "";

    while (number > 0) {
        let remainder = number % 2;
        binary = remainder + binary;
        number = Math.floor(number / 2);
    }

    console.log("Binary:", binary);
}