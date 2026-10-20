// (Sum the major diagonal in a matrix) Write a method that sums all the numbers  in the major diagonal in an n * n matrix of double values using the following  header: public static double sumMajorDiagonal(double[][] m) Write a test program that reads a 4-by-4 matrix and displays the sum of all its  elements on the major diagonal. Here is a sample run:  


let matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]


for (let i = 0; i < 4; i++) {

    for (let j = 0; j < 4; j++) {

        let number = Number(prompt("Enter a number:"))

        matrix[i][j] = number
    }
}
console.log(matrix)
function sumMajorDiagonal(matrix) {

    let sum = 0

    for (let i = 0; i < matrix.length; i++) {

        sum += matrix[i][i]

    }

    return sum
}

let result = sumMajorDiagonal(matrix)

console.log("Sum of the major diagonal:", result)