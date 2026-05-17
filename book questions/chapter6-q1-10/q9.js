// (Conversions between feet and meters) Write a class that contains the following 
// two methods:
// /** Convert from feet to meters */
// public static double footToMeter(double foot)
// /** Convert from meters to feet */
// public static double meterToFoot(double meter)
// The formula for the conversion is:
// meter = 0.305 * foot
// foot = 3.279 * meter
// Write a test program that invokes these methods to display the following tables:


function footToMeter(foot) {
    return 0.305 * foot;
}


function meterToFoot(meter) {
    return 3.279 * meter;
}

console.log("Feet\tMeters\t|\tMeters\tFeet");
console.log("------------------------------------------------");


let foot = 1;
let meter = 20;


for (let i = 1; i <= 10; i++) {


    let metersValue = footToMeter(foot);

    
    let feetValue = meterToFoot(meter);

    console.log(
        foot + "\t" +
        metersValue.toFixed(3) + "\t|\t" +
        meter + "\t" +
        feetValue.toFixed(3)
    );

    
    foot += 1;
    meter += 5;
}