// (Student major and status) Write a program that prompts the user to enter two 
// characters and displays the major and status represented in the characters. The first 
// character indicates the major and the second is number character 1, 2, 3, 4, which 
// indicates whether a student is a freshman, sophomore, junior, or senior. Suppose 
// the following chracters are used to denote the majors:
// M: Mathematics
// C: Computer Science
// I: Information Technology


let input = prompt("Enter two characters ( M1)")   

let major = input.charAt(0).toUpperCase()
let status = input.charAt(1)

let result = ""
let result2 = "" 

switch (major) {
    case "M":
        result = "Mathematics "
        break
    case "C":
        result = "Computer Science "
        break
    case "I":
        result = "Information Technology "
        break
    default:
        result = "Invalid input"
}

switch (status) {
    case "1":
        result2 = "Freshman"
        break
    case "2":
        result2 = "Sophomore"
        break
    case "3":
        result2 = "Junior"
        break
    case "4":
        result2 = "Senior"
        break
    default:
        result2 = "Invalid input"
}

console.log(result + result2)



