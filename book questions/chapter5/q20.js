// (Display prime numbers between 2 and 1,000) Modify Listing 5.15 to display all 
// the prime numbers between 2 and 1,000, inclusive. Display eight prime numbers 
// per line. Numbers are separated by exactly one space.


let count = 0;
let line = "";

for (let i = 2; i <= 1000; i++) {
let p = 1;

for (let j = 2; j < i; j++) {
if (i % j === 0) {
p = 0;
break;
}
}

if (p === 1) {
line += i + " ";
count++;

if (count === 8) {
console.log(line);
line = "";
count = 0;
}
}
}

if (count !== 0) {
    console.log(line);
}