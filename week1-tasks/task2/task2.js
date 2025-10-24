/*
Task 2 - Distance calculator
Write a program that calculates the distance between two points on a 2D plane and displays the result in an HTML document. The program should prompt the user for the coordinates of two points (x, y) and then calculate the Euclidean distance between them using the formula:
Distance = √((x2 - x1)^2 + (y2 - y1)^2)
In total, there will be four prompts to input the x and y coordinates for the two points.
You can do it also with fewer prompts if you use string methods like split().
3p
*/

const x1 = prompt('Give first point x coordinate');
const y1 = prompt('Give first point y coordinate');

const x2 = prompt('Give second point x coordinate');
const y2 = prompt('Give second point y coordinate');

function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt( (x2-x1)**2 + (y2-y1)**2 );
}

const outputElement = document.querySelector('main');

outputElement.innerText = `The distance between points (${x1}, ${y1}) and (${x2}, ${y2}) is ${calculateDistance(x1, y1, x2, y2)}.`
