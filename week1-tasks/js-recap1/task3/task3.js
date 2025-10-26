/*
Task 3 - Triangle type checker
Write a program that prompts the user to enter the lengths of three sides of a triangle and determines the type of triangle based on the side lengths. The program should classify the triangle as equilateral (all sides are equal), isosceles (two sides are equal), or scalene (no sides are equal). Print the result on the HTML document.
try to use &&, || and ! operators
3p
*/

const side1 = prompt("Enter the length of the triangle's first side: ");
const side2 = prompt("Enter the length of the triangle's second side: ");
const side3 = prompt("Enter the length of the triangle's third side: ");

function checkTriangleType(side1, side2, side3) {
  let triangleType;

  if (side1 === null || side1 === '' || side2 === null || side2 === '' || side3 === null || side3 === '') {
    triangleType = 'not a triangle';
  } else if (side1 === side2 && side1 === side3) {
    triangleType = 'equilateral (tasasivuinen)';
  } else if (side1 === side2 || side1 == side3 || side2 == side3) {
    triangleType = 'isosceles (tasakylkinen)';
  } else {
    triangleType = 'scalene (erikylkinen)';
  }
  return triangleType;
}

const outputElement = document.querySelector('main');
outputElement.innerText = `Triangle with sides ${side1}, ${side2} and ${side3} is ${checkTriangleType(side1, side2, side3)}.`;
