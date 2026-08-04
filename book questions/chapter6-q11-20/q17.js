// (Display matrix of 0s and 1s) Write a method that displays an n-by-n matrix using 
// the following header:
// public static void printMatrix(int n)
// Each element is 0 or 1, which is generated randomly. Write a test program that 
// prompts the user to enter n and displays an n-by-n matrix. Here is a sample run:

function printMatrix(n){

   for(let row = 0; row < n; row++){
    let line = ""

    for(let col = 0; col < n; col++){
        let random = Math.floor(Math.random() * 2)
        line += random + " "
    }

    console.log(line)
}
}

printMatrix(3)
