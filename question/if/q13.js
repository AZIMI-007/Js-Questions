// 13. Ask the user for their age. Print "Child" if under 13, "Teen" if 13–19, "Adult" if 20–64, "Senior" if 65+.

let userAge=Number(prompt("سن خود را وارد کنید"))
if(userAge<=13){
    console.log("کودک")
}else if(userAge>13 && userAge<=19){
    console.log("نوجوان")
}else if(userAge>=20 && userAge<=64){
    console.log("بزرگسال")
}else if(userAge>=65){
    console.log("ارشد")
}