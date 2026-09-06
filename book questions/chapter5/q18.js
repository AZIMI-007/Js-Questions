// (Display four patterns using loops) Use nested loops that display the following 
// patterns in four separate programs:

let n = Number(prompt(" enter a number")); 


console.log("Pattern A"); 
for(let i = 1; i <= n; i++){
    let line = "";
    for(let j = 1; j <= i; j++){
        line += j + " ";
    }
    console.log(line);
}
console.log("\n");


console.log("Pattern B");
for(let i = n; i >= 1; i--){
    let line = "";
    for(let j = 1; j <= i; j++){
        line += j + " ";
    }
    console.log(line);
}
console.log("\n");


console.log("Pattern C");
for(let i = 1; i <= n; i++){
    let line = "";
    for(let j = i; j >= 1; j--){
        line += j + " ";
    }
    console.log(line);
}
console.log("\n");


console.log("Pattern D");
for(let i = n; i >= 1; i--){
    let line = "";
    for(let j = 1; j <= i; j++){
        line += j + " ";
    }
    console.log(line);
}