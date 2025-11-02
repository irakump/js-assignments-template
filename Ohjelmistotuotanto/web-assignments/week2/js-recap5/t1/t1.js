/*
Task 1 - GET Method
Practice using the Fetch API with async/await to make a GET request and log the response.
Utilize the Fetch API with async/await to make a GET request to the URL https://reqres.in/api/users/1.
Log the response data to the console.
*/

async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/users/1', {
      headers: {
      'x-api-key': 'reqres-free-v1',
    },
    });

    const jsonData = await response.json();
    console.log(jsonData);

  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
