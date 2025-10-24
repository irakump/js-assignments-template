/*
Task 5 - Calculate sum of natural integers
Write a program that prompts the user to enter a positive integer and calculates the sum of all the natural numbers up to and including that integer using a for loop. The program should display the sum on the HTML document.

Natural numbers are positive integers used for counting and representing quantities. Let’s consider the example of the number 5. When the user enters 5, the program will calculate the sum of all the natural numbers up to and including 5. In this case, the natural numbers are 1, 2, 3, 4, and 5. The program will use a for loop to iterate through each of these numbers and add them together. Finally, the program will display the sum, which in this case would be 15, on the HTML document.
3p
*/

function isNumber(value) {
  return (
    typeof value === 'string' && !isNaN(value) && !isNaN(parseFloat(value))
  );
}

function handleInput() {
  let isValidNumber = false;
  let intNumber;

  while (!isValidNumber) {
    const strNumber = prompt('Enter a positive integer:');

    if (isNumber(strNumber)) {
      // parse string to int
      intNumber = parseInt(strNumber);
    }

    if (intNumber > 0) {
      isValidNumber = true;
    }
  }
  return intNumber;
}

function calculateSum(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}


const number = handleInput();
const sum = calculateSum(number);

console.log(sum);

const outputElement = document.querySelector('main');
outputElement.innerText = `Sum of natural numbers up to ${number} is ${sum}.`;
