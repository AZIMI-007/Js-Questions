// (Sum elements column by column) Write a method that returns the sum of all the 
// elements in a specified column in a matrix using the following header:
// ✓ Check
// ✓Point
// public static double sumColumn(double[][] m, int columnIndex)
// Write a test program that reads a 3-by-4 matrix and displays the sum of each 
// column. Here is a sample run:

let matrix = [
    [ 0 , 0 , 0 , 0],
    [ 0 , 0 , 0 , 0],
    [ 0 , 0 , 0 , 0],
    
]

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 4; j++) {
        let number = Number(prompt("Enter a number:"))
        matrix[i][j] = number

    }

}
console.log(matrix)

function sumColumn(matrix, columnIndex) {
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][columnIndex]

    }
    return sum ;
}

for (let column = 0; column < 4; column++) {
    let sum = sumColumn(matrix, column) 
     console.log("Sum of column " + column + ":", sum)
}
       