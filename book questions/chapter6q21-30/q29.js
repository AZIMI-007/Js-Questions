// (Twin primes) Twin primes are a pair of prime numbers that differ by 2. For exam
// ple, 3 and 5 are twin primes, 5 and 7 are twin primes, and 11 and 13 are twin primes. 
// Write a program to find all twin primes less than 1,000. Display the output as follows:
// (3, 5)
// (5, 7)
// ...


function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}


for(let i = 2 ; i <= 997 ; i++){
    if (isPrime(i) && isPrime(i + 2)){
        console.log("(" + i + ", " + (i + 2) + ")")

    }
}