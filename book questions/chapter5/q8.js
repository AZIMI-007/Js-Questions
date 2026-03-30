// (Find the highest score) Write a program that prompts the user to enter the num
// ber of students and each student’s name and score, and finally displays the name 
// of the student with the highest score.

let numberOfStudents = Number(prompt("Enter number of students:"));

let highestScore;
let topStudent;

for (let i = 0; i < numberOfStudents; i++) {
    let name = prompt("Enter student name:");
    let score = Number(prompt("Enter score:"));

    if (i === 0) {
        highestScore = score;
        topStudent = name;
    } else if (score > highestScore) {
        highestScore = score;
        topStudent = name;
    }
}

alert("Top student is: " + topStudent + " with score: " + highestScore);