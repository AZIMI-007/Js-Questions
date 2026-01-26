// 19. Triangle Classification by Angles
// Ask for three angles. Check if they form a triangle, then classify as:
// Right
// Acute
// Obtuse

let Angle1=Number(prompt("زاویه اول را وارد کنید"))
let Angle2=Number(prompt("زاویه دوم را وارد کنید"))
let Angle3=Number(prompt("زاویه سوم را وارد کنید"))
if (Angle1<90 && Angle2<90 && Angle3<90){
    console.log("مثلث حاده")
}else if(Angle1===90 || Angle2===90 || Angle3===90){
    console.log("مثلث قایم")
}else{
    Angle1>90 || Angle2>90 || Angle3>90
    console.log("مثلث منفرجه")
}