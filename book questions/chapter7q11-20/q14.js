// (Computing gcd) Write a method that returns the gcd of an unspecified number 
// of integers. The method header is specified as follows:
// public static int gcd(int... numbers)
// Write a test program that prompts the user to enter five numbers, invokes the 
// method to find the gcd of these numbers, and displays the gcd.

function gcd(...numbers) {
    let result = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        let a = result
        let b = numbers[i]

        while (b !== 0) {
            let temp = a % b
            a = b
            b = temp
        }

        result = a
    }

    return result
}



let numbers = []

for (let i = 0; i < 5; i++) {
    let userNumber = Number(prompt("Enter number " + (i + 1) + ":"));
    numbers.push(userNumber);
}

let result = gcd(...numbers)

console.log("The GCD is: " + result);