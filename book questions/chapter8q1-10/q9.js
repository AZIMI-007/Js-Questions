// (Game: play a tic-tac-toe game) In a game of tic-tac-toe, two players take turns 
// marking an available cell in a 3*3 grid with their respective tokens (either 
// X or O). When one player has placed three tokens in a horizontal, vertical, or 
// diagonal row on the grid, the game is over and that player has won. A draw (no 
// winner) occurs when all the cells on the grid have been filled with tokens and 
// neither player has achieved a win. Create a program for playing tic-tac-toe.
//   The program prompts two players to enter an X token and O token alter
// nately. Whenever a token is entered, the program redisplays the board on the 
// console and determines the status of the game (win, draw, or continue). Here 
// is a sample run:



let game = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let currentPlayer = "X";

while (true) {
    let row = Number(prompt(
        "Player " + currentPlayer + " - Enter row (1-3):"
    ));

    let col = Number(prompt(
        "Player " + currentPlayer + " - Enter column (1-3):"
    ));

    
    if (row < 1 || row > 3 || col < 1 || col > 3) {
        alert("Invalid row or column. Try again.");
        continue;
    }

    
    if (game[row - 1][col - 1] !== 0) {
        alert("This cell is already occupied. Choose another cell.");
        continue;
    }

    
    game[row - 1][col - 1] = currentPlayer;

    
    let boardText = "";

    for (let i = 0; i < 3; i++) {
        boardText += game[i].join(" | ") + "\n";
    }

    console.log(boardText);
    alert(boardText);

    
    let win = false;

    
    for (let i = 0; i < 3; i++) {
        if (
            game[i][0] === game[i][1] &&
            game[i][1] === game[i][2] &&
            game[i][0] !== 0
        ) {
            win = true;
        }
    }

    
    for (let j = 0; j < 3; j++) {
        if (
            game[0][j] === game[1][j] &&
            game[1][j] === game[2][j] &&
            game[0][j] !== 0
        ) {
            win = true;
        }
    }

    
    if (
        game[0][0] === game[1][1] &&
        game[1][1] === game[2][2] &&
        game[0][0] !== 0
    ) {
        win = true;
    }

    
    if (
        game[0][2] === game[1][1] &&
        game[1][1] === game[2][0] &&
        game[0][2] !== 0
    ) {
        win = true;
    }

    
    if (win) {
        alert("Player " + currentPlayer + " wins!");
        break;
    }

    
    let draw = true;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (game[i][j] === 0) {
                draw = false;
            }
        }
    }

    if (draw) {
        alert("The game is a draw!");
        break;
    }

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}



