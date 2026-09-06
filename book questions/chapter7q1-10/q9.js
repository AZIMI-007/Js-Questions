// (Find the smallest element) Write a method that finds the smallest element in an 
// array of double values using the following header:
// public static double min(double[] array)
// Write a test program that prompts the user to enter ten numbers, invokes this 
// method to return the minimum value, and displays the minimum value. Here is a 
// sample run of the program:

function min(array) {
    let smallest = array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] < smallest) {
            smallest = array[i];
        }

    }

    return smallest;
}


let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers[i] = Number(prompt("Enter a number:"))
}

let result = min(numbers)

console.log("The minimum value is: " + result)