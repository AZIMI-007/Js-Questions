// (Analyze scores) Write a program that reads an unspecified number of scores and 
// determines how many scores are above or equal to the average and how many 
// scores are below the average. Enter a negative number to signify the end of the 
// input. Assume that the maximum number of scores is 100.


let scores = []
while(true){
    let user = Number(prompt("enter the scores"))

    if(user < 0 ){
        break;
    }

    scores.push(user)
}

let total = 0
for(let i = 0 ; i < scores.length ; i++){
total += scores[i]

}
let average = total / scores.length
let above = 0
let below = 0

for (let i = 0; i < scores.length; i++) {
if (scores[i] >= average) {
    above++
}else {
    below++
}
}


console.log("Above or equal to average: " + above)
console.log("Below average: " + below)

