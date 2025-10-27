/*
Task 2 - Array operations with numbers
Write a JavaScript program that focuses on various array operations using the push(), includes(), pop(), and numerical sorting functions.
Your program should include the following requirements:

- Create an empty array called numbers.
- Prompt the user to enter five numbers, one by one, and add each entered number to the numbers array using the push() method.
- Display the contents of the numbers array on the HTML document or in the console.
- Prompt the user to enter a number and check if the entered number is included in the numbers array using the includes() method.
- Display a message indicating whether the entered number is found or not found in the numbers array.
- Remove the last number from the numbers array using the pop() method.
- Display the updated numbers array on the HTML document or in the console.
- Sort the numbers array in ascending numerical order using the sort() method with a custom comparison function.
- Display the sorted numbers array on the HTML document or in the console.
*/

const numbers = [];

for (let i = 0; i < 5; i++) {
  let number = prompt(`Enter Number ${i + 1}:`);
  numbers.push(number);
}

// format number string, separate with comma
let strNumbers = numbers.join(', ');

// display numbers on the HTML document
const outputElement = document.querySelector('main');
outputElement.innerHTML = `Numbers: ${strNumbers}`;

// check if entered number is included in the array
const userNum = prompt('Enter a Number to Search');

let pElement = document.createElement('p');
let pText;

if (numbers.includes(userNum)) {
  pText = `Number ${userNum} is found in the array.`;
} else {
  pText = `Number ${userNum} is not found in the array.`;
}

pElement.innerText = pText;
outputElement.appendChild(pElement);

// remove last number
numbers.pop();

// show updated array
let pElement2 = document.createElement('p');
pElement2.innerText = 'Updated Numbers after last number was removed: ' + numbers.join(', ');
outputElement.appendChild(pElement2);

// sort the array

function sortAscending(array) {
  return array.sort((a, b) => a-b);
}

sortAscending(numbers);

// display sorted array
let pElement3 = document.createElement('p');
pElement3.innerText = 'Sorted Numbers: ' + numbers.join(', ');
outputElement.appendChild(pElement3);
