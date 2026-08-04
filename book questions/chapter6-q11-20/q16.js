// (Number of days in a year) Write a method that returns the number of days in a 
// year using the following header:
// public static int numberOfDaysInAYear(int year)
// Write a test program that displays the number of days in year from 2000 to 2020.

function numberOfDaysInAYear(year){
    let days = 0
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    days = 366
    } else {
      days = 365 
        }

    return days
}

for( let year = 2000 ; year <= 2020 ; year++){
   let days = numberOfDaysInAYear(year)
   console.log( "Year  "+year + " has  "+ days + "  days")
}