// (Sort students on grades) Rewrite Listing 8.2, GradeExam.java, to display the 
// students in increasing order of the number of correct answers.

let answers = [
    ['A', 'B', 'A', 'C', 'C', 'D', 'E', 'E', 'A', 'D'],
    ['D', 'B', 'A', 'B', 'C', 'A', 'E', 'E', 'A', 'D'],
    ['E', 'D', 'D', 'A', 'C', 'B', 'E', 'E', 'A', 'D'],
    ['C', 'B', 'A', 'E', 'D', 'C', 'E', 'E', 'A', 'D'],
    ['A', 'B', 'D', 'C', 'C', 'D', 'E', 'E', 'A', 'D'],
    ['B', 'B', 'E', 'C', 'C', 'D', 'E', 'E', 'A', 'D'],
    ['B', 'B', 'A', 'C', 'C', 'D', 'E', 'E', 'A', 'D'],
    ['E', 'B', 'E', 'C', 'C', 'D', 'E', 'E', 'A', 'D']
]

let keys = ['D', 'B', 'D', 'C', 'C', 'D', 'A', 'E', 'A', 'D']

let correctCounts = []


for (let i = 0; i < answers.length; i++) {

    let correctCount = 0

    for (let j = 0; j < answers[i].length; j++) {

        if (answers[i][j] === keys[j]) {
            correctCount++
        }
    }

    correctCounts.push(correctCount)
}

for (let i = 0; i < correctCounts.length - 1; i++) {

    let minIndex = i

    for (let j = i + 1; j < correctCounts.length; j++) {

        if (correctCounts[j] < correctCounts[minIndex]) {
            minIndex = j
        }
    }

    
    let temp = correctCounts[i]
    correctCounts[i] = correctCounts[minIndex]
    correctCounts[minIndex] = temp
}


for (let i = 0; i < correctCounts.length; i++) {
    console.log("Student " + i + "'s correct count is " + correctCounts[i])
}