/*
Task 4 - Array sorter
Create a function called sortArray that accepts an array of numbers as a parameter and returns a new array with the numbers sorted in ascending order.
No need to prompt for the numbers. Use a hard coded array. Use console.log to print the original array and the sorted array.
2p
*/

function sortArray(array) {
  return array.sort((a, b) => a-b);
}

let numbers = [1, -4, 6, 2, 40, 5];
console.log('Original array: ' + numbers);

numbers = sortArray(numbers);
console.log('Sorted array: ' + numbers);
