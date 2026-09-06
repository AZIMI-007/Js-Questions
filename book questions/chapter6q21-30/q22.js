// (Math: approximate the square root) There are several techniques for implement
// ing the sqrt method in the Math class. One such technique is known as the 
// Babylonian method. It approximates the square root of a number, n, by repeatedly 
// performing a calculation using the following formula:
// nextGuess = (lastGuess + n / lastGuess) / 2
// When nextGuess and lastGuess are almost identical, nextGuess is the 
// approximated square root. The initial guess can be any positive value (e.g., 1).
// This value will be the starting value for lastGuess. If the difference between 
// nextGuess and lastGuess is less than a very small number, such as 0.0001,
// you can claim that nextGuess is the approximated square root of n. If not, next
// Guess becomes lastGuess and the approximation process continues. Imple
// ment the following method that returns the square root of n.
// public static double sqrt(long n)


function sqrt(n) {
    let lastGuess = 1;
    let nextGuess

    do {
        nextGuess = (lastGuess + n / lastGuess) / 2;

        if (Math.abs(nextGuess - lastGuess) < 0.0001) {
            return nextGuess;
        }

        lastGuess = nextGuess;

    } while (true);
}

let n = Number(prompt("Enter a number"));

console.log("Square root = " + sqrt(n));