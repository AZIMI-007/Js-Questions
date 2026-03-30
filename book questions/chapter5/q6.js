//  (Conversion from miles to kilometers) Write a program that displays the follow
// ing two tables side by side:
// Miles       Kilometers  |  Kilometers       Miles
// 1           1.609       |  20               12.430
// 2           3.218       |  25               15.538
// ...
// 9           14.481      |  60               37.290
// 10          16.090      |  65               40.398


console.log("Miles     Kilometers  |  Kilometers    Miles")

let mile = 1; 
let km = 20;    

while (mile <= 10 && km <= 65) {
    let kmFromMile = (mile * 1.609).toFixed(3);  
    let mileFromKm = (km / 1.609).toFixed(3);   

    
    console.log(mile + "         " + kmFromMile + "       |   " + km + "            " + mileFromKm);

    mile += 1;   
    km += 5;     
}