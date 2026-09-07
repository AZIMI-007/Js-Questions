// (Financial application: find the sales amount) Rewrite Programming Exercise 
// 5.39 as follows:
//  ■ Use a for loop instead of a do-while loop.
//  ■ Let the user enter COMMISSION_SOUGHT instead of fixing it as a constant.

let commissionSought = Number(prompt("Enter the commission you want: "));

let commission = 0;

for (let sales = 1; commission < commissionSought; sales++) {

    if (sales <= 5000) {
        commission = sales * 0.08;
    } 
    else if (sales <= 10000) {
        commission = 5000 * 0.08 + (sales - 5000) * 0.10;
    } 
    else {
        commission = 5000 * 0.08 + 5000 * 0.10 + (sales - 10000) * 0.12;
    }

    if (commission >= commissionSought) {
        console.log("Minimum sales to reach commission is: " + sales);
        break;
    }
}