//  (Algebra: multiply two matrices) Write a method to multiply two matrices. The 
// header of the method is:
// publicstatic double[][]
//     multiplyMatrix(double[][] a, double[][] b)
//   To multiply matrix a by matrix b, the number of columns in a must be the same as 
// the number of rows in b, and the two matrices must have elements of the same or 
// compatible types. Let c be the result of the multiplication. Assume the column size 
// of matrix a is n. Each element cij is ai1*b1j +ai2*b2j +c+ain*bnj.
// For example, for two 3*3 matrices a and b,c is
// £
// a11 a12 a13
// a21 a22 a23
// a31 a32 a33
// ≥*£
// b11 b12 b13
// b21 b22 b23
// b31 b32 b33
// ≥=£
// c11 c12 c13
// c21 c22 c23
// c31 c32 c33
// ≥
// wherecij =ai1*b1j +ai2*b2j +ai3*b3j.
//   Write a test program that prompts the user to enter two 3*3 matrices and dis
// plays their product. Here is a sample run:

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
        let number = Number(prompt("Enter a number for matrix a:"))
        a[i][j] = number
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let number = Number(prompt("Enter a number for matrix b:"))
        b[i][j] = number
    }
}

function multiplyMatrix(a, b) {
    let c = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            c[i][j] = 0

            for (let k = 0; k < 3; k++) {
                c[i][j] += a[i][k] * b[k][j]
            }
        }
    }

    return c
}

let result = multiplyMatrix(a, b)


console.log("Product of the two matrices:")

for (let i = 0; i < 3; i++) {
    console.log(result[i].join(" "))
}