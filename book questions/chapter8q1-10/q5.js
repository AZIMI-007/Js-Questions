// (Algebra: add two matrices) Write a method to add two matrices. The header of 
// the method is as follows:
// public static double[][] addMatrix(double[][] a, double[][] b) 

//   In order to be added, the two matrices must have the same dimensions and the 
// same or compatible types of elements. Let c be the resulting matrix. Each ele
// mentcij is aij +bij. For example, for two 3*3 matrices a and b,c is
// £
// a11 a12 a13
// a21 a22 a23
// a31 a32 a33
// ≥+£
// b11 b12 b13
// b21 b22 b23
// b31 b32 b33
// ≥=£
// a11+b11 a12+b12 a13+b13
// a21+b21 a22+b22 a23+b23
// a31+b31 a32+b32 a33+b33
// ≥
//   Write a test program that prompts the user to enter two 3*3 matrices and 
// displays their sum. Here is a sample run:   

let a = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let b = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let number = Number(prompt("Enter a number:"))
        a[i][j] = number

    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let number = Number(prompt("Enter a number for matrix b:"))
        b[i][j] = number
    }
}

function addMatrix(a, b) {

    let c = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    for(let i = 0 ; i < 3 ; i++){
        for(let j = 0 ; j < 3 ; j++){
         c[i][j] = a[i][j] + b[i][j]
        }
    }
   

    return c ;

}
let result = addMatrix(a, b)
console.log(result)

