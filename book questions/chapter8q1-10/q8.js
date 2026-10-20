//  (All closest pairs of points) Revise Listing 8.3, FindNearestPoints.java, to 
// display all closest pairs of points with the same minimum distance. Here is 
// a sample run:



let numberOfPoints = Number(prompt("Enter the number of points:"));

let points = [];

for (let i = 0; i < numberOfPoints; i++) {
    let x = Number(prompt("Enter x for point " + (i + 1) + ":"));
    let y = Number(prompt("Enter y for point " + (i + 1) + ":"));

    points.push([x, y]);
}

let shortestDistance = Infinity;


for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
        let dx = points[i][0] - points[j][0];
        let dy = points[i][1] - points[j][1];

        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < shortestDistance) {
            shortestDistance = distance;
        }
    }
}


console.log("All closest pairs of points:");

for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
        let dx = points[i][0] - points[j][0];
        let dy = points[i][1] - points[j][1];

        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance === shortestDistance) {
            console.log(
                points[i],
                "and",
                points[j],
                "Distance:",
                distance
            );
        }
    }
}

console.log("Shortest distance:", shortestDistance);
