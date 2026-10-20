// (Largest row and column) Write a program that randomly fills in 0s and 1s into 
// a 4-by-4 matrix, prints the matrix, and finds the first row and column with the 
// most 1s. Here is a sample run of the program:
// 0011
// 0011
// 1101
// 1010
// The largest row index: 2
// The largest column index: 2


let matrix = [];


for (let i = 0; i < 4; i++) {
    matrix[i] = [];

    for (let j = 0; j < 4; j++) {
        matrix[i][j] = Math.floor(Math.random() * 2);
    }
}


console.log("The matrix:");

for (let i = 0; i < 4; i++) {
    console.log(matrix[i].join(""));
}


let maxRowIndex = 0;
let maxRowCount = -1;

for (let i = 0; i < 4; i++) {
    let count = 0;

    for (let j = 0; j < 4; j++) {
        if (matrix[i][j] === 1) {
            count++;
        }
    }

    if (count > maxRowCount) {
        maxRowCount = count;
        maxRowIndex = i;
    }
}


let maxColumnIndex = 0;
let maxColumnCount = -1;

for (let j = 0; j < 4; j++) {
    let count = 0;

    for (let i = 0; i < 4; i++) {
        if (matrix[i][j] === 1) {
            count++;
        }
    }

    if (count > maxColumnCount) {
        maxColumnCount = count;
        maxColumnIndex = j;
    }
}


console.log("The largest row index: " + maxRowIndex);
console.log("The largest column index: " + maxColumnIndex);
