/*
Task 5 - Enhanced array sorter
Enhance the existing sortArray function to include an additional parameter that defines whether the array should be sorted in ascending or descending order.

Create a function called sortArray that takes two parameters: numbers (an array of numbers) and order (a string indicating the sorting order).
If the order parameter is set to “asc” (ascending), the function should sort the numbers array in ascending order.
If the order parameter is set to “desc” (descending), the function should sort the numbers array in descending order.
Return a new array with the sorted numbers.
Test the function by passing different arrays and sorting orders.
*/

function sortArray(numbers, order) {
  switch (order) {
    case 'asc':
      numbers.sort((a, b) => a - b);
      break;

    case 'desc':
      numbers.sort((a, b) => b - a);
      break;
  }
  return numbers;
}

const numbers = [1, -4, 6, 2, 40, 5];
console.log('Original numbers: ' + numbers);

console.log('Sorted numbers (ascending): ' + sortArray(numbers, 'asc'));
console.log('Sorted numbers (descending): ' + sortArray(numbers, 'desc'));

const evenNumbers = [10, 2, -4, 16, 26, 8];
console.log('\nOriginal even numbers: ' + evenNumbers)

console.log('Sorted even numbers (ascending): ' + sortArray(evenNumbers, 'asc'));
console.log('Sorted even numbers (descending): ' + sortArray(evenNumbers, 'desc'));
