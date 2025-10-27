/*
Task 1 - Array operations
Write a JavaScript program that focuses on the basic concepts of arrays. Your program should include the following requirements:
- Create an array called fruits and initialize it with the following elements: “apple”, “banana”, “orange”, “ grape”, “kiwi”.
- Display the contents of the fruits array in the console.
- Calculate and display the length of the fruits array.
- Access and display the element at index 2 in the fruits array in the console.
- Access and display the last element in the fruits array using the length property in the console.
- Create an empty array called vegetables.
- Prompt the user to enter three vegetables one by one, and add each entered vegetable to the vegetables array using the push() method.
- Display the contents of the vegetables array in the console.
- Calculate and display the length of the vegetables array.
*/

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// display array contents
console.log('Fruits: ', fruits);

// array length
console.log(`\nLength of Fruits: ${fruits.length}`);

// display index 2 element
console.log(`\nElement at Index 2: ${fruits[2]}`);

// the last element
console.log(`\nLast Element of Fruits: ${fruits[fruits.length - 1]}`);


// empty array
const vegetables = [];

// add vegetables to the array
for (let i = 0; i < 3; i++) {
  let vegetable = prompt(`Enter ${i + 1}. vegetable:`);
  vegetables.push(vegetable);
}

// display array contents
console.log('\nVegetables: ', vegetables);

// length
console.log(`Length of Vegetables: ${vegetables.length}`);
