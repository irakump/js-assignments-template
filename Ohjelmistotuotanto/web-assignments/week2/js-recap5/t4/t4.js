/*
Task 4 - Generic Fetch Function
Create a reusable async function that abstracts the Fetch API usage and handles errors.

Define an async function named fetchData that takes two parameters: url and options.
Use the Fetch API with async/await to make a request to the specified url with the provided options.
If the response is not successful (status code other than 2xx), throw an error with an appropriate message.
Return the response as a JSON promise if successful.
When testing the function, call the fetchData function with the desired URL and options.
*/

async function fetchData(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(
      `Response status: ${response.status} ${response.statusText}`
    );
  }

  return await response.json();
}

// Data
const user = {
  name: 'John Doe',
  job: 'Developer',
};

const url1 = 'https://reqres.in/api/users';
const url2 = 'https://reqres.in/api/users3';

const options1 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres-free-v1',
  },
  body: JSON.stringify(user),
};

const options2 = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres-free-v1',
  },
};

// Try POST and GET methods
async function run() {
  try {
    const userData = await fetchData(url1, options1);
    console.log('POST result: ', userData);

    const userData2 = await fetchData(url2, options2);
    console.log('GET result: ', userData2);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

run();
