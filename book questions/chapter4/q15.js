// (Phone key pads) The international standard letter/number mapping found on the 
// telephone is shown below:
// Write a program that prompts the user to enter a letter and displays its correspond
// ing number.


let letter1 = prompt("Enter a letter:")
letter = letter1.toUpperCase()

switch(letter){
    case "A":
    case "B":
    case "C":
        console.log(2)
        break
    case "D":
    case "E":
    case "F":
        console.log(3)
        break
    case "G":
    case "H":
    case "I":
        console.log(4)
        break
    case "J":
    case "K":
    case "L":
        console.log(5)
        break
    case "M":
    case "N":
    case "O":
        console.log(6)
        break
    case "P":
    case "Q":
    case "R":
    case "S":
        console.log(7)
        break
    case "T":
    case "U":
    case "V":
        console.log(8)
        break
    case "W":
    case "X":
    case "Y":
    case "Z":
        console.log(9)
        break
    default:
        console.log(" Please enter a letter A-Z.")
}
