// 12. Ask the user for a number 1–7. Print the corresponding weekday (1 → Monday, 7 → Sunday). If not 1–7, print "Invalid".
let day=Number(prompt("enter a number (1,7)"))
if(day===1){
    console.log("شنیه")
}else if(day===2){
    console.log("یک شنبه")
}else if(day===3){
    console.log("دو شنبه")
}else if(day===4){
    console.log("سه شنبه")
}else if(day===5){
    console.log("جهاز شنبه")
}else if(day===6){
    console.log("پنج شنبه")
}else if(day===7){
    console.log("جمعه")
}else{isNaN(day)
    console.log("نامعتبر")
}