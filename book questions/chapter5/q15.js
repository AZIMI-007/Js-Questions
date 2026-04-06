// (Display the ASCII character table) Write a program that prints the characters in 
// the ASCII character table from ! to ~. Display ten characters per line. The ASCII 
// table is shown in Appendix B. Characters are separated by exactly one space.

let line = "";
let count = 0;

for (let i = 33; i <= 126; i++) {
    line += String.fromCharCode(i) + " ";
    count++;

    if (count === 10) {
        console.log(line);
        line = "";
        count = 0;
    }
}


if (line !== "") {
    console.log(line);
}
