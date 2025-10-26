'use strict';

/*
Task 6 - Multiplication table
Write a program that prompts the user to enter a positive integer and generates a multiplication table up to that number using a for loop. The multiplication table displays the product of each pair of numbers from 1 to the entered number.

Your program should follow these steps:
Write JavaScript code that prompts the user to enter a positive integer using the prompt() function. Store the user’s input in a variable.
Convert the user’s input from a string to a number.
Use nested for loops to generate the multiplication table.
The outer loop will iterate from 1 up to the entered number, representing the rows of the table.
The inner loop will also iterate from 1 up to the entered number, representing the columns of the table.
Inside the nested loops, calculate the product of the current row and column values.
Display each product in a formatted way to create the multiplication table on the HTML document.
*/

function isNumber(value) {
  return (typeof value === 'string' && !isNaN(value) && !isNaN(parseFloat(value)));
}

function handleInput() {
  let numberValid = false;
  let intNumber;

  while (!numberValid) {
    const strNumber = prompt('Enter a positive integer:');

    if (isNumber(strNumber)) {
      intNumber = parseInt(strNumber);
    }

    if (intNumber > 0) {
      numberValid = true;
    }
  }
  return intNumber;
}

function createMultiplicationTable(largestNumber) {
  let num;

  const tableHeader = document.querySelector('#multi');
  tableHeader.innerText = 'Multiplication table';

  const outputTable = document.querySelector('#table');

  for (let i = 1; i <= largestNumber; i++) {

    // create tr element
    let tr = document.createElement("tr");

    for (let j = 1; j <= largestNumber; j++) {

      // create td element
      let td = document.createElement("td");

      // set table data
      num = i * j;
      td.innerHTML = num;

      // insert table data to table row
      tr.appendChild(td);

      // insert table row to table
      outputTable.appendChild(tr);
    }
  }
}

const largestNumber = handleInput();
createMultiplicationTable(largestNumber);
