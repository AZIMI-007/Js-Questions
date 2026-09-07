
// (Display leap years) Write a program that displays all the leap years, ten per line, 
// from 101 to 2100, separated by exactly one space. Also display the number of 
// leap years in this period.let leapYear  = 0;    



let leapYear = 0;
let perLine = 0;
let output = "";

for (let year = 101; year <= 2100; year++) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        
        output += year + " ";
        
        leapYear++;
        perLine++;

        if (perLine === 10) {
            output += "\n";
            perLine = 0;
        }
    }
}

console.log(output);
console.log("Total leap years: " + leapYear);