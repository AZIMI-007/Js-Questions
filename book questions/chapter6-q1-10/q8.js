// (Conversions between Celsius and Fahrenheit) Write a class that contains the fol
// lowing two methods:
// /** Convert from Celsius to Fahrenheit */
// public static double celsiusToFahrenheit(double celsius)
// /** Convert from Fahrenheit to Celsius */
// public static double fahrenheitToCelsius(double fahrenheit)
// The formula for the conversion is:
// fahrenheit = (9.0 / 5) * celsius + 32
// celsius = (5.0 / 9) * (fahrenheit – 32)Write a test program that invokes these methods to display the following tables:
 




function celsiusToFahrenheit(celsius) {
    return (9 / 5) * celsius + 32;
}


function fahrenheitToCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}


console.log("Celsius\tFahrenheit\t|\tFahrenheit\tCelsius");
console.log("--------------------------------------------------------------");


for (let celsius = 40, fahrenheit = 120; celsius >= 31;
     celsius--, fahrenheit -= 10) {

    let f = celsiusToFahrenheit(celsius);

    let c = fahrenheitToCelsius(fahrenheit);

    console.log(
        celsius + "\t\t" + f.toFixed(1) + "\t\t|\t" +
        fahrenheit + "\t\t" + c.toFixed(2)
    );
}