// (Display calendars) Write a program that prompts the user to enter the year and 
// first day of the year and displays the calendar table for the year on the console. For 
// example, if the user entered the year 2013, and 2 for Tuesday, January 1, 2013, 
// your program should display the calendar for each month in the year, as follows:


let year = Number(prompt("Enter year: "));
let firstDay = Number(prompt("Enter first day (0=Sun ... 6=Sat): "));


if (firstDay < 0) {
    console.log("Error: first day cannot be negative!");
} else {


    firstDay = firstDay % 7;

    
    let leap = false;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leap = true;
    }

    for (let month = 1; month <= 12; month++) {

        
        if (month === 1) console.log("\nJanuary " + year);
        else if (month === 2) console.log("\nFebruary " + year);
        else if (month === 3) console.log("\nMarch " + year);
        else if (month === 4) console.log("\nApril " + year);
        else if (month === 5) console.log("\nMay " + year);
        else if (month === 6) console.log("\nJune " + year);
        else if (month === 7) console.log("\nJuly " + year);
        else if (month === 8) console.log("\nAugust " + year);
        else if (month === 9) console.log("\nSeptember " + year);
        else if (month === 10) console.log("\nOctober " + year);
        else if (month === 11) console.log("\nNovember " + year);
        else if (month === 12) console.log("\nDecember " + year);

        console.log("Sun Mon Tue Wed Thu Fri Sat");

        let line = "";

        
        for (let i = 0; i < firstDay; i++) {
            line = line + "    ";
        }


        let days;

        if (month === 1) days = 31;
        else if (month === 2) {
            if (leap) days = 29;
            else days = 28;
        }
        else if (month === 3) days = 31;
        else if (month === 4) days = 30;
        else if (month === 5) days = 31;
        else if (month === 6) days = 30;
        else if (month === 7) days = 31;
        else if (month === 8) days = 31;
        else if (month === 9) days = 30;
        else if (month === 10) days = 31;
        else if (month === 11) days = 30;
        else if (month === 12) days = 31;

        let dayCounter = firstDay;

        for (let day = 1; day <= days; day++) {

            let space = " ";
            if (day < 10) {
                space = "  ";
            }

            line = line + space + day + " ";

            dayCounter++;

            if (dayCounter % 7 === 0) {
                console.log(line);
                line = "";
            }
        }

        if (line !== "") {
            console.log(line);
        }

        
        firstDay = (firstDay + days) % 7;
    }
}




   
