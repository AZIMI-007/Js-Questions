// (Average an array) Write two overloaded methods that return the average of an 
// array with the following headers:
// public static int average(int[] array)
// public static double average(double[] array)
// Write a test program that prompts the user to enter ten double values, invokes this 
// method, and displays the average value.

function average(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum / numbers.length
}

let numbers = []

for (let i = 0; i < 10; i++) {
    numbers[i] = Number(prompt("Enter a number:"))
}

let result = average(numbers)

console.log("Average = " + result)