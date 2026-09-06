// (Financial application: compute future tuition) Suppose that the tuition for a uni
// versity is $10,000 this year and increases 5% every year. In one year, the tuition 
// will be $10,500. Write a program that computes the tuition in ten years and the 
// total cost of four years’ worth of tuition after the tenth year.

let tuition = 10000
let rate = 0.05 

for(i = 1 ; i <= 10 ; i++){
    tuition = tuition + (tuition * rate)

}
console.log("tuition after 10 year " + tuition.toFixed(1))

let tuitionfor4year = 0
for (i=1 ; i<=4 ; i++) {
    tuition = tuition + (tuition * rate)
    tuitionfor4year += tuition 
}

console.log("Total cost of 4 years after 10th year" + tuitionfor4year.toFixed(1))
