/*
Task 3 - Even number extractor
Write a JavaScript program that prompts the user to enter a series of numbers one by one and extracts and displays only the even numbers from the entered values using the for...of loop.
Define an empty array to store the numbers entered by the user.
Use a loop (e.g., while or do...while) to prompt the user for numbers and add them to the array until the user decides to stop.
Use the for...of loop to iterate over the entered values stored in the array.
Inside the loop, check if the current number is even using the modulo operator %.
If the current number is even, display it on the HTML document.
After the loop completes, display a message indicating the end of the program.
*/

function promptSaveNumbers() {
  const numbers = [];
  let doneEntered = false;

  // prompt numbers until user enters 'done'
  while (!doneEntered) {
    let strNum = prompt('Enter a number (or "done" to finish)');

    // save only numbers into the array
    if (isNumber(strNum)) {
      const intNum = parseInt(strNum);
      numbers.push(intNum);

      // stop after 'done' is entered
    } else if (strNum.toLowerCase() === 'done') {
      doneEntered = true;
      alert('Program ended.')
    }
  }
  return numbers;
}

function isNumber(value) {
  return (
    typeof value === 'string' && !isNaN(value) && !isNaN(parseFloat(value))
  );
}

function displayEvenNumbers(array) {
  let evenNumbers = [];
  console.log('All numbers: ' + array);

  for (let num of array) {
    // add even numbers to new list
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }

  const mainElement = document.querySelector('main');

  if (evenNumbers.length > 0) {
    // display modified array on HTML document
    const outputElement = document.createElement('p');
    outputElement.innerText = 'Even numbers: ' + evenNumbers.join(', ');

    mainElement.appendChild(outputElement);

    // empty list
  } else {
    mainElement.innerText = 'Even numbers: None';
  }
}

const numbers = promptSaveNumbers();
displayEvenNumbers(numbers);
