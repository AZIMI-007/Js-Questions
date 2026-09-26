// (Game: Eight Queens) The classic Eight Queens puzzle is to place eight queens 
// on a chessboard such that no two queens can attack each other (i.e., no two queens 
// are on the same row, same column, or same diagonal). There are many possible 
// solutions. Write a program that displays one such solution. A sample output is 
// shown below:
// |Q| | | | | | | |
// | | | | |Q| | | |
// | | | | | | | |Q|
// | | | | | |Q| | |
// | | |Q| | | | | |
// | | | | | | |Q| |
// | |Q| | | | | | |
// | | | |Q| | | | |          

 
let puzzle_borde = []

for(let i = 0; i < 8; i++){
    let row = []
    puzzle_borde.push(row)

    for(let j = 0; j < 8; j++){
      row.push(" ")
    }
} 

for(let row = 0; row < 8; row++){

    for(let col = 0; col < 8; col++){
        let safe = true
    }

}