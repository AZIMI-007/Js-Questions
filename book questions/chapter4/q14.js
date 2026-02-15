// (Convert letter grade to number) Write a program that prompts the user to enter a 
// letter grade A, B, C, D, or F and displays its corresponding numeric value 4, 3, 2, 
// 1, or 0.

let grade1 = prompt("Enter a letter grade (A, B, C, D, or F):");


grade = grade1.toUpperCase()

switch (grade) {
    case "A":
        console.log(4)
        break
    case "B":
        console.log(3)
        break
    case "C":
        console.log(2)
        break
    case "D":
        console.log(1)
        break
    case "F":
        console.log(0)
        break
    default:
        console.log("Invalid grade! Please enter A, B, C, D, or F.")
}
