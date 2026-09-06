// (Days of a month) Write a program that prompts the user to enter a year and the 
// first three letters of a month name (with the first letter in uppercase) and displays 
// the number of days in the month.

let year = Number(prompt("Enter a year:"))
let month = prompt("Enter the first three letters of a month ( Jan, Feb):")


switch(month) {
    case "Jan":
    case "Mar":
    case "May":
    case "Jul":
    case "Aug":
    case "Oct":
    case "Dec":
        console.log(month + " " + year + " has 31 days.")
        break;
    case "Apr":
    case "Jun":
    case "Sep":
    case "Nov":
        console.log(month + " " + year + " has 30 days.")
        break;
    case "Feb":
        console.log(month + " " + year + " has 29 days.")
        break;
    default:
        console.log("invalid mont")
}


