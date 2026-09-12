//  (Revise selection sort) In Section 7.11, you used selection sort to sort an array. 
// The selection-sort method repeatedly finds the smallest number in the current 
// array and swaps it with the first. Rewrite this program by finding the largest num
// ber and swapping it with the last. Write a test program that reads in ten double 
// numbers, invokes the method, and displays the sorted numbers.

let numbers = [];


for (let i = 0; i < 10; i++) {
    let number = Number(prompt("Enter a number: "));
    numbers.push(number);
}

function sort(numbers) {

    for (let i = numbers.length - 1; i > 0; i--) {

        let maxIndex = 0;


        for (let j = 1; j <= i; j++) {

            if (numbers[j] > numbers[maxIndex]) {
                maxIndex = j;
            }
        }

        
        let temp = numbers[maxIndex];
        numbers[maxIndex] = numbers[i];
        numbers[i] = temp;
    }

    return numbers;
}

let result = sort(numbers);

console.log("Sorted numbers:", result);