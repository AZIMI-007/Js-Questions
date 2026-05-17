// (Sort three numbers) Write a method with the following header to display three 
// numbers in increasing order:
// public static void displaySortedNumbers(
// double num1, double num2, double num3)Write a test program that prompts the user to enter three numbers and invokes the 
// method to display them in increasing order.

function displaySortedNumbers(num1, num2, num3) {

    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    if (num1 > num3) {
        let temp = num1;
        num1 = num3;
        num3 = temp;
    }

    if (num2 > num3) {
        let temp = num2;
        num2 = num3;
        num3 = temp;
    }

    console.log(num1, num2, num3);
}
console.log(displaySortedNumbers(400 , 5 , 500))