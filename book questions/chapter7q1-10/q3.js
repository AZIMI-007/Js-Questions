// Count occurrence of numbers) Write a program that reads the integers between 1 
// and 100 and counts the occurrences of each. Assume the input ends with 0. Here 
// is a sample run of the program:Note that if a number occurs more than one time, the plural word “times” is used 
// in the output.


let numbers = []

while (true) {
    let user = Number(prompt("Enter a number between 1 and 100"));

    if (user === 0) {
        break;
    }

    numbers.push(user);
}

let counts = []

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (counts[number] === undefined) {
        counts[number] = 1;
    }
    else {
        counts[number]++;
    }
}

for (let i = 1; i <= 100; i++) {

    if (counts[i] !== undefined) {

        if (counts[i] === 1) {
            console.log(i + " occurs 1 time");
        }
        else {
            console.log(i + " occurs " + counts[i] + " times");
        }

    }
}