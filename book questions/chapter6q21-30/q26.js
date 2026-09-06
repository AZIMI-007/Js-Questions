// (Palindromic prime) A palindromic prime is a prime number and also palindro
// mic. For example, 131 is a prime and also a palindromic prime, as are 313 and 
// 757. Write a program that displays the first 100 palindromic prime numbers. Dis
// play 10 numbers per line, separated by exactly one space, as follows:
// 2 3 5 7 11 101 131 151 181 191
// 313 353 373 383 727 757 787 797 919 929
// ...

function isPrime(n) {
    if (n < 2) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function isPalindromic(n) {
    let str = String(n)

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

let count = 0
let line = ""

for (let i = 2; ; i++) {

    if (isPrime(i) && isPalindromic(i)) {
        line += i + " ";
        count++;

        if (count % 10 === 0) {
            console.log(line)
            line = "";
        }

        if (count === 100) {
            break;
        }
    }
}