// (Convert milliseconds to hours, minutes, and seconds) Write a method that con
// verts milliseconds to hours, minutes, and seconds using the following header:
// public static String convertMillis(long millis)
// The method returns a string as hours:minutes:seconds. For example, 
// convertMillis(5500) returns a string 0:0:5, convertMillis(100000) returns 
// a string 0:1:40, and convertMillis(555550000) returns a string 154:19:10.



function convertMillis(millis) {
    let totalSeconds = Math.floor(millis / 1000)

    let seconds = totalSeconds % 60;

    let totalMinutes = Math.floor(totalSeconds / 60)

    let minutes = totalMinutes % 60;

    let hours = Math.floor(totalMinutes / 60)

    return hours + ":" + minutes + ":" + seconds
}

let millis = Number(prompt("Enter milliseconds"))

console.log(convertMillis(millis))