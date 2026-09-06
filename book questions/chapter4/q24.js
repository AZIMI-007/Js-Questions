// // (Order three cities) Write a program that prompts the user to enter three cities and 
// displays them in ascending order



let city1 = prompt("Enter first city:")
let city2 = prompt("Enter second city:")
let city3 = prompt("Enter third city:")



if (city1 <= city2 && city2 <= city3) {
    console.log(city1 + ", " + city2 + ", " + city3)
}else if (city1 <= city3 && city3 <= city2) {
    console.log(city1 + ", " + city3 + ", " + city2)
}else if (city2 <= city1 && city1 <= city3) {
    console.log(city2 + ", " + city1 + ", " + city3)
}else if (city2 <= city3 && city3 <= city1) {
    console.log(city2 + ", " + city3 + ", " + city1)
}else if (city3 <= city1 && city1 <= city2) {
    console.log(city3 + ", " + city1 + ", " + city2)
}else {
    console.log(city3 + ", " + city2 + ", " + city1)
}
