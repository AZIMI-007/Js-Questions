// (Decimal to hex) Write a program that prompts the user to enter an integer between 
// 0 and 15 and displays its corresponding hex number.


var user = Number(prompt("Enter a number between 0 and 15"))

switch (user) {
    case 0:
        console.log("0")
        break
    case 1:
        console.log("1")
        break
    case 2:
        console.log("2")
        break
    case 3:
        console.log("3")
        break
    case 4:
        console.log("4")
        break
    case 5:
        console.log("5")
        break
    case 6:
        console.log("6")
        break
    case 7:
        console.log("7")
        break
    case 8:
        console.log("8")
        break
    case 9:
        console.log("9")
        break
    case 10:
        console.log("A")
        break
    case 11:
        console.log("B")
        break
    case 12:
        console.log("C")
        break
    case 13:
        console.log("D")
        break
    case 14:
        console.log("E")
        break
    case 15:
        console.log("F")
        break
    default:
        console.log("Try again. Number must be between 0 and 15")
}
