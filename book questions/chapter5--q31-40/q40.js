// (Simulation: heads or tails) Write a program that simulates flipping a coin one 
// million times and displays the number of heads and tails.

let shir = 0;
let khat = 0;

for (let i = 0; i < 1000000; i++) {
    let coin = Math.random(); 

    if (coin < 0.5) {
        shir++;
    } else {
        khat++;
    }
}

console.log("shir == " + shir);
console.log("khat == " + khat);