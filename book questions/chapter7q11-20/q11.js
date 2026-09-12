// (Statistics: compute deviation) Programming Exercise 5.45 computes the stand
// ard deviation of numbers. This exercise uses a different but equivalent formula to
// compute the standard deviation of n numbers.
// a
// n
// mean =
// i =1
// xi
// n = x1 + x2 + g+ xn
// n
// a
// n
// i =1
// deviation = H
// (xi- mean)2
// n- 1
// To compute the standard deviation with this formula, you have to store the indi
// vidual numbers using an array, so that they can be used after the mean is obtained.
// Your program should contain the following methods:
// /** Compute the deviation of double values */
// public static double deviation(double[] x) 
// /** Compute the mean of an array of double values */
// public static double mean(double[] x) 
// Write a test program that prompts the user to enter ten numbers and displays the 
// mean and standard deviation, as shown in the following sample run:

function mean(x) {
    let sum = 0

    for (let i = 0; i < x.length; i++) {
        sum += x[i]
    }

    return sum / x.length
}

function deviation(x) {
    let average = mean(x)
    let sum = 0

    for (let i = 0; i < x.length; i++) {
        sum += (x[i] - average) ** 2
    }

    return Math.sqrt(sum / (x.length - 1))
}


let numbers = [];

for (let i = 0; i < 10; i++) {
    let number = Number(prompt("Enter number " + (i + 1) + ":"))
    numbers.push(number)
}

