/*
Task 3 - POST Method
Practice making a POST request using the Fetch API with async/await and handling the response.
Make a POST request to the URL https://reqres.in/api/users with a JSON payload containing user information (e.g. name and job).
Log the response data to the console.
*/

async function addData() {
  const data = {
    body: JSON.stringify({
      email: 'jane.doe@example.com',
      first_name: 'Jane',
      last_name: 'Doe',
      job: 'Engineer',
    }),
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'x-api-key': 'reqres-free-v1',
    },
  };

  try {
    const response = await fetch('https://reqres.in/api/users/', data);

    const jsonData = await response.json();
    console.log('result', jsonData);

  } catch (error) {
    console.log('Error', error.message);
  }
}

addData();
