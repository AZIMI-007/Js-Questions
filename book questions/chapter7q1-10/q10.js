// (Find the index of the smallest element) Write a method that returns the index of 
// the smallest element in an array of integers. If the number of such elements is 
// greater than 1, return the smallest index. Use the following header:
// public static int indexOfSmallestElement(double[] array)
// Write a test program that prompts the user to enter ten numbers, invokes this 
// method to return the index of the smallest element, and displays the index.


function indexOfSmallestElement(array) {

    let smallestIndex = 0;

    for (let i = 1; i < array.length; i++) {

        if (array[i] < array[smallestIndex]) {
            smallestIndex = i
        }

    }

    return smallestIndex
}


let numbers = []

for (let i = 0; i < 10; i++) {
    let number = Number(prompt("Enter number " + (i + 1) + ":"))
    numbers.push(number)
}

let index = indexOfSmallestElement(numbers)

console.log("The index of the smallest element is " + index)