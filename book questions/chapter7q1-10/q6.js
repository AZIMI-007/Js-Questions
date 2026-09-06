// (Revise Listing 5.15, PrimeNumber.java) Listing 5.15 determines whether a num
// ber n is prime by checking whether 2, 3, 4, 5, 6, ...,n/2 is a divisor. If a divisor 
// is found, n is not prime. A more efficient approach is to check whether any of the 
// prime numbers less than or equal to 2n can divide n evenly. If not, n is prime. 
// Rewrite Listing 5.15 to display the first 50 prime numbers using this approach. 
// You need to use an array to store the prime numbers and later use them to check 
// whether they are possible divisors for n.



let primes = []
let number = 2

while (primes.length < 50) {

    let isPrime = true;

    for (let i = 0; i < primes.length; i++) {

        if (number % primes[i] === 0) {
            isPrime = false;
            break;
        }

        if (primes[i] * primes[i] > number) {
            break;
        }
    }

    if (isPrime) {
        primes.push(number)
    }

    number++
}

console.log(primes.join(" "))