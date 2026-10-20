// (Points nearest to each other) Listing 8.3 gives a program that finds two points in a 
// two-dimensional space nearest to each other. Revise the program so that it finds two 
// points in a three-dimensional space nearest to each other. Use a two-dimensional 
// array to represent the points. Test the program using the following points:
// double[][] points = {{-1, 0, 3}, {-1,-1,-1}, {4,1,1},
//   {2, 0.5, 9}, {3.5, 2,-1}, {3,1.5,3}, {-1.5,4,2},
//   {5.5, 4,-0.5}};
// 308 Chapter 8  Multidimensional Arrays
//   The formula for computing the distance between two points (x1, y1, z1) and 
// (x2, y2, z2) is 2(x2-x1)2 +(y2-y1)2 +(z2-z1)2.



let points = [
    [-1, 0, 3],
    [-1, -1, -1],
    [4, 1, 1],
    [2, 0.5, 9],
    [3.5, 2, -1],
    [3, 1.5, 3],
    [-1.5, 4, 2],
    [5.5, 4, -0.5]
]

let shortestDistance = Infinity
let point1 = 0
let point2 = 1
  
for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {

        let x1 = points[i][0]
        let y1 = points[i][1]
        let z1 = points[i][2]

        let x2 = points[j][0]
        let y2 = points[j][1]
        let z2 = points[j][2]

        let distance = Math.sqrt(
            (x2 - x1) ** 2 +
            (y2 - y1) ** 2 +
            (z2 - z1) ** 2
        )

        if (distance < shortestDistance) {
            shortestDistance = distance
            point1 = i
            point2 = j
        }
    }
}

console.log("The closest two points are:")
console.log(points[point1])
console.log(points[point2])
console.log("Their distance is:", shortestDistance) 