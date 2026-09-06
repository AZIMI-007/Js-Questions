// (Financials: currency exchange) Write a program that prompts the user to enter 
// the exchange rate from currency in U.S. dollars to Chinese RMB. Prompt the user 
// to enter 0 to convert from U.S. dollars to Chinese RMB and 1 to convert from 
// Chinese RMB and U.S. dollars. Prompt the user to enter the amount in U.S. dol
// lars or Chinese RMB to convert it to Chinese RMB or U.S. dollars, respectively

let rate = Number(prompt("Enter the exchange rate from USD to RMB"))

let choice = Number(prompt(
  "Enter 0 to convert USD to RMB\nEnter 1 to convert RMB to USD"
))

if (choice === 0) {
  let usd = Number(prompt("Enter amount in U.S. dollars"))
  let rmb = usd * rate
  console.log(usd + " USD is " + rmb + " RMB")
}
else if (choice === 1) {
  let rmb = Number(prompt("Enter amount in Chinese RMB"))
  let usd = rmb / rate
  console.log(rmb + " RMB is " + usd + " USD")
}else {
  console.log("Invalid input")
}
