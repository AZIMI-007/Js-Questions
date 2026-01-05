// 20. Temperature Advice
// Ask for temperature in Celsius:

// ≤ 0 → “Freezing”
// 1–15 → “Cold”
// 16–25 → “Warm”
// 26–35 → “Hot”
// 35 → “Extreme heat”

let temp=Number(prompt("درجه هوا را برحسب سانتی گرید بیان کنید"))
if (temp<=0){
    console.log("Freezing")
}else if (temp>=1 && temp<=15){
    console.log("Cold")
}else if(temp>=16 && temp<=25){
    console.log("Warm")
}else if(temp>=26 && temp<=35){
    console.log("Hot")
}else{temp>35
    console.log("Extreme heat")
}