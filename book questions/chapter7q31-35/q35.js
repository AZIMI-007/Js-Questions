// (Game: hangman) Write a hangman game that randomly generates a word and 
// prompts the user to guess one letter at a time, as shown in the sample run. Each 
// letter in the word is displayed as an asterisk. When the user makes a correct 
// guess, the actual letter is then displayed. When the user finishes a word, display 

// the number of misses and ask the user whether to continue to play with another 
// word. Declare an array to store words, as follows:
// // Add any words you wish in this array
// String[] words = {"write", "that", ...};

let words = ["black", "java", "friend", "youtube" , "football" , "ronaldo" , "portugal"]

let playAgain = "y"

while (playAgain === "y") {

    let random = Math.floor(Math.random() * words.length)
    let word = words[random]

    let guessedWord = ""

    for (let i = 0; i < word.length; i++) {
        guessedWord += "*"
    }

    console.log(guessedWord)
    alert(guessedWord)

    let misses = 0
    let guessedLetters = []

    while (guessedWord.includes("*")) {

        let guess = prompt("Enter a letter:")
        guess = guess.toLowerCase();

        if (guessedLetters.includes(guess)) {
            console.log("You already guessed this letter!")
            alert("You already guessed this letter!")
            continue
        }

        guessedLetters.push(guess)

        if (word.includes(guess)) {
            console.log("Correct!")
            alert("Correct!")
        } else {
            console.log("Wrong!")
            alert("Wrong!")
            misses++
        }

        for (let i = 0; i < word.length; i++) {

            if (word[i] === guess) {
                guessedWord =
                    guessedWord.substring(0, i) +
                    guess +
                    guessedWord.substring(i + 1)
            }

        }

        console.log(guessedWord)
        alert(guessedWord)
    }

    console.log("The word is:", word)
    console.log("Number of misses:", misses)

    playAgain = prompt("Do you want to play again? (y/n)");
    playAgain = playAgain.toLowerCase();

    
}

