// (Random number chooser) Write a method that returns a random number between 
// 1 and 54, excluding the numbers passed in the argument. The method header is 
// specified as follows:
// public static int getRandom(int... numbers)



function getRandom(...numbers) {
    let random = Math.floor(Math.random() * 54) + 1

    while (numbers.includes(random)) {
        random = Math.floor(Math.random() * 54) + 1
    }

    return random
}
let result = getRandom(5, 10, 20)

console.log(result)