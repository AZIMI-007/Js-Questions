// (Financial: compare costs) Suppose you shop for rice in two different packages. 
// You would like to write a program to compare the cost. The program prompts the 
// user to enter the weight and price of the each package and displays the one with 
// the better price.

let weight1 = Number(prompt("وزن بسته اول را وارد کنید"))
let price1 = Number(prompt("قیمت بسته اول را وارد کنید"))

let weight2= Number(prompt("وزن بسته دوم را وارد کنید"))
let price2 = Number(prompt("قیمت بسته دوم را وارد کنید"))

let cost1 = price1 / weight1
let cost2 = price2 / weight2

if(cost1 < cost2){
  console.log("بسته اول قیمت بهتری داد")
}else if (cost1 > cost2){
  console.log("بسته دوم قیمت بتری دارد")
}else {
  console.log("هر دو بسته قیمت یکسان دارند")
}
