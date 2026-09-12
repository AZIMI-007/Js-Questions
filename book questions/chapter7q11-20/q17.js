// (Sort students) Write a program that prompts the user to enter the number of stu
// dents, the students’ names, and their scores, and prints student names in decreas
// ing order of their scores.

let students = Number(prompt("Enter the number of students: "));

let names = [];
let scores = [];


for (let i = 0; i < students; i++) {
    names.push(prompt("Enter the name: "));
    scores.push(Number(prompt("Enter the score of student: ")))
}


for (let i = 0; i < scores.length - 1; i++) {

    for (let j = 0; j < scores.length - 1 - i; j++) {

        if (scores[j + 1] > scores[j]) {

            let temp = scores[j]
            scores[j] = scores[j + 1]
            scores[j + 1] = temp

            let tempName = names[j]
            names[j] = names[j + 1]
            names[j + 1] = tempName
        }
    }
}


for (let i = 0; i < names.length; i++) {
    console.log(names[i]+  "  ==>  " + scores[i])
}
