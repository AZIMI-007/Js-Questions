// (Reverse an array) The reverse method in Section 7.7 reverses an array by 
// copying it to a new array. Rewrite the method that reverses the array passed in 
// the argument and returns this array. Write a test program that prompts the user to enter ten numbers, invokes the method to reverse the numbers, and displays the 
// numbers.


let numbers = [];

for (let i = 0; i < 10; i++) {
    let user = Number(prompt("Enter a number: "));
    numbers.push(user);
}

function reverse(numbers) {
    for (let i = 0; i < numbers.length / 2; i++) {
        let temp = numbers[i]

        numbers[i] = numbers[numbers.length - 1 - i]

        numbers[numbers.length - 1 - i] = temp
    }

    return numbers
}

reverse(numbers)

console.log(numbers)