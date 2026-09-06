// (Use theisPrimeMethod) Listing 6.7, PrimeNumberMethod.java, provides the 
// isPrime(int number) method for testing whether a number is prime. Use this 
// method to find the number of prime numbers less than 10000.

function isPrime(number) {

    if (number <= 1) {
        return false;
    }

    for (let divisor = 2; divisor <= number / 2; divisor++) {

        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
}

let count = 0;


for (let i = 2; i < 10000; i++) {

    if (isPrime(i)) {
        count++;
    }
}

console.log("Number of prime numbers less than 10000:", count);