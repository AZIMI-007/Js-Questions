// (Assign grades) Write a program that reads student scores, gets the best score, 
// and then assigns grades based on the following scheme:
// Grade is A if score is Ú best- 10
// Grade is B if score is Ú best- 20;
// Grade is C if score is Ú best- 30;
// Grade is D if score is Ú best- 40;
// Grade is F otherwise.
// The program prompts the user to enter the total number of students, then prompts 
// the user to enter all of the scores, and concludes by displaying the grades. Here 
// is a sample run:

let students = Number(prompt("Enter the number of students"));

let score = [];

for (let i = 0; i < students; i++) {
    let userscore = Number(prompt("Enter the score"));
    score.push(userscore);
}

let best = Math.max(...score);

for (let i = 0; i < students; i++) {
    let currentScore = score[i];

    if (currentScore >= best - 10) {
        console.log("Student " + (i + 1) + " score is " + currentScore + " and grade is A");
    }
    else if (currentScore >= best - 20) {
        console.log("Student " + (i + 1) + " score is " + currentScore + " and grade is B");
    }
    else if (currentScore >= best - 30) {
        console.log("Student " + (i + 1) + " score is " + currentScore + " and grade is C");
    }
    else if (currentScore >= best - 40) {
        console.log("Student " + (i + 1) + " score is " + currentScore + " and grade is D");
    }
    else {
        console.log("Student " + (i + 1) + " score is " + currentScore + " and grade is F");
    }
}