// 5. Ask the user for a time in minutes. Convert it to hours and minutes.
// Example: 130 → 2 hours and 10 minutes.

let time=Number(prompt("writh a time in minutes"))
console.log(Math.floor(time/60) +"hours and " +time % 60 +"minutes" )
