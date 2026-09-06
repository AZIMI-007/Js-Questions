// (Geometry: area of a pentagon) Write a program that prompts the user to enter 
// the length from the center of a pentagon to a vertex and computes the area of the 
// pentagon, as shown in the following figure. 
// r
// The formula for computing the area of a pentagon is Area =
// 5 * s2
// , where 
// 4 * tan¢p
// 5 ≤
// s is the length of a side. The side can be computed using the formula s = 2r sin p
// ,
// where r is the length from the center of a pentagon to a vertex. Round up two digits 
// after the decimal point


let r = Number(prompt("فاصله مرکز تا رأس پنج‌ضلعی را وارد کنید"))
let s = 2 * r * Math.sin(Math.PI / 5)
switch (r){
  case 0:
    
    let area = (5 * s * s) / (4 * Math.tan(Math.PI / 5))

    area = area
    console.log("مساحت پنج‌ضلعی:"+ area)
    break;

  default:
    console.log("عدد وارد شده معتبر نیست")
}
