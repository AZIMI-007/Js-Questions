// (Display current date and time) Listing 2.7, ShowCurrentTime.java, displays the 
// current time. Improve this example to display the current date and time. The cal
// endar example in Listing 6.12, PrintCalendar.java, should give you some ideas on 
// how to find the year, month, and day.


let date = new Date() 

let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()

console.log(
    year + "-" + month + "-" + day +
    " " + hour + ":" + minute + ":" + second
)