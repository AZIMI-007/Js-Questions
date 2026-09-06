//  (Find the two highest scores) Write a program that prompts the user to enter the 
// number of students and each student’s name and score, and finally displays the 
// student with the highest score and the student with the second-highest score.




let n = Number(prompt("enter the number of students"));
let firstmax = 0
let secondmax = 0
let firststudent = "";
let secondstudent = "";

for (let i = 0; i < n; i++) {
    let name = prompt("enter the name of student")
    let score = Number(prompt("enter the score"))

    if (score > firstmax) {
        secondmax = firstmax;
        secondstudent = firststudent
        firstmax = score
        firststudent = name
    } else if (score > secondmax) {
        secondmax = score
        secondstudent = name
    }
}

console.log("top student: " + firststudent + " scores " + firstmax)
console.log("second top: " + secondstudent + " scores " + secondmax)