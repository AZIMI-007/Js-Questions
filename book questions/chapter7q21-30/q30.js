// (Pattern recognition: consecutive four equal numbers) Write the following 
// method that tests whether the array has four consecutive numbers with the same 
// value. 
// public static boolean isConsecutiveFour(int[] values)
// Write a test program that prompts the user to enter a series of integers and dis
// plays if the series contains four consecutive numbers with the same value. Your 
// program should first prompt the user to enter the input size—i.e., the number of 
// values in the series. Here are sample runs:



function isConsecutiveFour(values) {

    for (let i = 0; i < values.length - 3; i++) {

        if (
            values[i] === values[i + 1] &&
            values[i] === values[i + 2] &&
            values[i] === values[i + 3]
        ) {
            return true
        }
    }

    return false
}



let size = Number(prompt("Enter the input size:"))

let values = []


for (let i = 0; i < size; i++) {

    let number = Number(prompt("Enter a number:"))

    values.push(number)
}

let result = isConsecutiveFour(values)


if (result) {
    console.log("The series contains four consecutive numbers with the same value.")
}else {
    console.log("The series does not contain four consecutive numbers with the same value.")
}