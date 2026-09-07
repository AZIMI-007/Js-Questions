// (Display the first days of each month) Write a program that prompts the user to 
// enter the year and first day of the year, and displays the first day of each month 
// in the year. For example, if the user entered the year 2013, and 2 for Tuesday, 
// January 1, 2013, your program should display the following output:
// January 1, 2013 is Tuesday
// ...
// December 1, 2013 is Sunday

let year = Number(prompt("Enter year: "))
let firstDay = Number(prompt("Enter first day (0=Sun, 1=Mon, ...): "))

let month = 1

while (month <= 12) {

    let monthName = ""
    let days = 0

    if (month === 1) {
        monthName = "January"
        days = 31
    }
    else if (month === 2) {
        monthName = "February"

    
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            days = 29
        } else {
            days = 28
        }
    }
    else if (month === 3) {
        monthName = "March"
        days = 31
    }
    else if (month === 4) {
        monthName = "April"
        days = 30
    }
    else if (month === 5) {
        monthName = "May"
        days = 31
    }
    else if (month === 6) {
        monthName = "June"
        days = 30
    }
    else if (month === 7) {
        monthName = "July"
        days = 31
    }
    else if (month === 8) {
        monthName = "August"
        days = 31
    }
    else if (month === 9) {
        monthName = "September"
        days = 30
    }
    else if (month === 10) {
        monthName = "October"
        days = 31
    }
    else if (month === 11) {
        monthName = "November"
        days = 30
    }
    else if (month === 12) {
        monthName = "December"
        days = 31
    }

    
    let dayName = ""

    if (firstDay === 0) dayName = "Sunday"
    else if (firstDay === 1) dayName = "Monday"
    else if (firstDay === 2) dayName = "Tuesday"
    else if (firstDay === 3) dayName = "Wednesday"
    else if (firstDay === 4) dayName = "Thursday"
    else if (firstDay === 5) dayName = "Friday"
    else if (firstDay === 6) dayName = "Saturday"

    console.log(monthName + " 1, " + year + " is " + dayName)

    
    firstDay = (firstDay + days) % 7 

    month++
}