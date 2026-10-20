// (Compute the weekly hours for each employee) Suppose the weekly hours for all 
// employees are stored in a two-dimensional array. Each row records an employ
// ee’s seven-day work hours with seven columns. For example, the following 
// array stores the work hours for eight employees. Write a program that displays 
// employees and their total hours in decreasing order of the total hours.
// Su M T W Th F Sa
// Employee 0
// Employee 1
// Employee 2
// Employee 3
// Employee 4
// Employee 5
// Employee 6
// Employee 7
// 2 4 3 4 5 8 8
// 7 3 4 3 3 4 4
// 3 3 4 3 3 2 2
// 9 3 4 7 3 4 1
// 3 5 4 3 6 3 8
// 3 4 4 6 3 4 4
// 3 7 4 8 3 8 4
// 6 3 5 9 2 7 9

let employee = [
    [2, 4, 3, 4, 5, 8, 8],
    [7, 3, 4, 3, 3, 4, 4],
    [3, 3, 4, 3, 3, 2, 2],
    [9, 3, 4, 7, 3, 4, 1],
    [3, 5, 4, 3, 6, 3, 8],
    [3, 4, 4, 6, 3, 4, 4],
    [3, 7, 4, 8, 3, 8, 4],
    [6, 3, 5, 9, 2, 7, 9]
]

let totalHours = []
let employeeNumbers = []


for (let i = 0; i < employee.length; i++) {

    let sum = 0

    for (let j = 0; j < employee[i].length; j++) {

        sum += employee[i][j]
    }

    totalHours.push(sum)
    employeeNumbers.push(i)
}


for (let i = 0; i < totalHours.length - 1; i++) {

    let maxIndex = i

    for (let j = i + 1; j < totalHours.length; j++) {

        if (totalHours[j] > totalHours[maxIndex]) {
            maxIndex = j
        }
    }


    let temp = totalHours[i]
    totalHours[i] = totalHours[maxIndex]
    totalHours[maxIndex] = temp

    
    let tempEmployee = employeeNumbers[i]
    employeeNumbers[i] = employeeNumbers[maxIndex]
    employeeNumbers[maxIndex] = tempEmployee
}

for (let i = 0; i < totalHours.length; i++) {

    console.log(
        "Employee " + employeeNumbers[i] +
        " : " + totalHours[i] + " hours"
    )
}  
