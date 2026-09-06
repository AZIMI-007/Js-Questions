// (Conversion from kilograms to pounds and pounds to kilograms) Write a program
// that displays the following two tables side by side:
// Kilograms  Pounds    |      Pounds      Kilograms
// 1             2.2    |      20               9.09
// 3             6.6    |      25              11.36
// ...
// 197         433.4    |      510            231.82
// 199         437.8    |      515            234.09


console.log("Kilograms  Pounds    |    Pounds   Kilograms");


let kg = 1;    
let lb = 20;   

while (kg <= 199 && lb <= 515) {
    let pounds = (kg * 2.2).toFixed(2)
    let kilograms =  (lb / 2.2) .toFixed(2)

    
    console.log(kg + "         " + pounds + "        |    " + lb + "       " + kilograms);

    kg += 2;   
    lb += 5;   
}