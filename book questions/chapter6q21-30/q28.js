// (Mersenne prime) A prime number is called a Mersenne prime if it can be written 
// in the form 2p- 1 for some positive integer p. Write a program that finds all 
// Mersenne primes with p … 31 and displays the output as follows:
// p       2^p –1
// 2       3
// 3       7
// 5       31
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

console.log("P".padEnd(12) + "2^p - 1");
console.log("-------------------")

for (let p = 2; p <= 31; p++) {
    let number = 2 ** p - 1

    if (isPrime(number)) {
        console.log(p.toString().padEnd(12) + number) 
    }
}