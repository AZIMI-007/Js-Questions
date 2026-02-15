// (Check substring) Write a program that prompts the user to enter two strings and 
// reports whether the second string is a substring of the first string.


let str1 = prompt("Enter the first string:")
let str2 = prompt("Enter the second string:")

switch (str1.includes(str2)) {
    case true:
        console.log("The second string is a substring of the first string.")
        break
    case false:
        console.log("The second string is NOT a substring of the first string.")
        break
}