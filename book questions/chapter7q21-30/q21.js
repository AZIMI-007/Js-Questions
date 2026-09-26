// (Game: bean machine) The bean machine, also known as a quincunx or the Gal ton box, is a device for statistics experiments named after English scientist Sir  Francis Galton. It consists of an upright board with evenly spaced nails (or pegs)  in a triangular form, as shown in Figure 7.13  Each ball takes a random path and falls into a slot.  Balls are dropped from the opening of the board. Every time a ball hits a nail, it  has a 50% chance of falling to the left or to the right. The piles of balls are accu mulated in the slots at the bottom of the board. Write a program that simulates the bean machine. Your program should prompt  the user to enter the number of the balls and the number of the slots in the machine.  Simulate the falling of each ball by printing its path. For example, the path for  the ball in Figure 7.13b is LLRRLLR and the path for the ball in Figure 7.13c is  RLRRLRR. Display the final buildup of the balls in the slots in a histogram. Here  is a sample run of the program:  


let balls = Number(prompt("Enter the balls "))
let slots = Number(prompt("Enter the slots"))

let slot = []
for(let i = 0; i < slots; i++){
    slot.push(0)
}
for(let i = 0 ; i < balls ; i++){
    let path = ""

    for(let j = 0; j < slots - 1; j++){
        let random = Math.floor(Math.random() * 2)

        if(random === 0 ){
            path += "L"
        }else{
            path += "R"
        }
    }

    let right = 0
    

    for( let j = 0 ; j < path.length ; j++){
        if(path[j] === "R"){
            right++
        }

    }

    slot[right]++

    console.log(path)

}

let max = 0
for(let i = 0 ; i < slot.length ; i++){
    if(slot[i] > max){
        max = slot[i]
    }
}

for(let level = max; level >= 1; level--){

    let row = ""

    for(let i = 0; i < slot.length; i++){

        if(slot[i] >= level){
            row += "O "
        }else{
            row += "  "
        }

    }

    console.log(row)
}

let bottom = ""

for(let i = 0; i < slot.length; i++){
    bottom += i + " "
}

console.log(bottom)
