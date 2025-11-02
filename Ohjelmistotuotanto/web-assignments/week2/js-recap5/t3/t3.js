/*
Task 3 - Error Handling
Practice error handling while using the Fetch API
Attempt to make a GET request to a non-existent URL (e.g., https://reqres.in/api/unknown/23).
Handle the error using try/catch blocks.
Log an error message to the console in case of an error.
*/

async function getData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) {
      throw new Error('Request failed.');
    }

    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

getData();
