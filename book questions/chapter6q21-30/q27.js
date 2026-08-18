// (Emirp) An emirp (prime spelled backward) is a nonpalindromic prime number 
// whose reversal is also a prime. For example, 17 is a prime and 71 is a prime, so 17 
// and 71 are emirps. Write a program that displays the first 100 emirps. Display 10 
// numbers per line, separated by exactly one space, as follows:
// 13 17 31 37 71 73 79 97 107 113 
// 149 157 167 179 199 311 337 347 359 389

function isPrime(n) {
    if (n < 2) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

function isPalindromic(n) {
    let str = String(n);

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }

    return true
}

let count = 0
let line = ""

for (let i = 2; ; i++){
     if (isPrime(i) && !isPalindromic(i)){
         let reverse = Number(String(i).split("").reverse().join(""))

         if (isPrime(reverse)) {
            line += i + " "
            count++
         }

          if (count === 100) {
                break
            }
     }
}
if (line !== "") {
    console.log(line)
}