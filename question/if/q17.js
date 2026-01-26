// 17. Ask for weight (kg) and height (m). Calculate BMI and classify as Underweight, Normal, Overweight, or Obese.

let weight=Number(prompt("Enter your weight in (kg)"))
let height=Number(prompt("Enter your height in (cm)"))
let h=height/100
let bmi=weight/(h**2)
if (bmi<18.5){
    console.log("Underweight")
}else if(bmi<=24.9 && bmi>=18.5){
    console.log("Normal")
}else if(bmi>=25 && bmi<=29.9){
    console.log("Overweight")
}else{
    console.log("Obese")
}