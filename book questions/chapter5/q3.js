
// (Conversion from kilograms to pounds) Write a program that displays the follow
// ing table (note that 1 kilogram is 2.2 pounds):


let poundsPerKg = 2.2;
let result = "Kg\tPounds\n"; 

for (let kg = 1; kg <= 199; kg += 2) {
    let pounds = kg * poundsPerKg;
    result += kg + "\t" + pounds.toFixed(1) + "\n"; 
}

console.log(result);