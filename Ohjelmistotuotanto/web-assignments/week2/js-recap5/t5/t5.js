/*
Task 5 - Integrate Restaurant API
In this assignment we will work with the Restaurant API (accessible only inside Metropolia network or via VPN connection) to build upon the previous lab’s restaurant assignment (Assignment 2). Extend the previous restaurant assignment by integrating the Restaurant API and enhancing the app to display the current day’s menu for selected restaurants. To use the API you need to be connected to the school’s network or use a VPN connection.
Begin by revisiting your previous restaurant assignment code.
Modify the app to fetch restaurant data using a single AJAX call to the Restaurant API endpoint. Replace the previous hard-coded array of restaurants.
Implement the necessary logic to display the retrieved restaurant data in your app.
When a user clicks on a restaurant, make another AJAX call to fetch the current day’s menu for the selected restaurant from the API.
Enhance the modal functionality to show both the restaurant details (name, address, etc.) and the current day’s menu.
Ensure that the modal is populated with the relevant information when a user clicks on a restaurant.
Implement error handling for the AJAX calls, displaying appropriate messages if data retrieval fails.
Test the app thoroughly to ensure that restaurant data and menus are displayed accurately.
*/

'use strict';

function sortAlphabetical(restaurantArray) {
  return restaurantArray.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

// Display restaurant array in HTML document
function displayRestaurants(array) {
  const tableElement = document.getElementById('target');

  for (let restaurant of array) {
    // Create elements and content
    const tr = document.createElement('tr');
    tr.setAttribute('class', 'datarow');

    tr.restaurant = restaurant; // Save restaurant object

    const td1 = document.createElement('td');
    td1.textContent = restaurant.name;

    const td2 = document.createElement('td');
    td2.textContent = restaurant.address;

    // Append data row elements to table row element
    tr.appendChild(td1);
    tr.appendChild(td2);

    // Display content in HTML document
    tableElement.appendChild(tr);
  }
}

// Highlight selected row
function highlight() {
  const table = document.getElementById('target');
  const rows = table.querySelectorAll('.datarow');

  rows.forEach((row) => {
    row.addEventListener('click', () => {
      // Remove highlight from all rows
      for (let row of rows) {
        row.classList.remove('highlight');
      }

      // Add highlight to the clicked row
      row.classList.add('highlight');

      displayRestaurantInfo(row.restaurant);
    });
  });
}

async function displayRestaurantInfo(restaurant) {
  const dialog = document.querySelector('dialog');
  const dialogDiv = dialog.querySelector('#restaurant-info');

  dialogDiv.innerHTML = `<h3>${restaurant.name}</h3>
    <p>${restaurant.address}</p>
    <p>${restaurant.postalCode}</p>
    <p>${restaurant.city}</p>
    <p>${restaurant.phone}</p>
    <p>${restaurant.company}</p>`;

  const menu = await getDailyMenu(restaurant);
  displayDailyMenu(menu, restaurant);

  dialog.showModal();

  const closeButton = document.getElementById('close');
  closeButton.addEventListener('click', () => {
    dialog.close();
  });
}

async function getRestaurants() {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const url =
      'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json(); // restaurants in json-format
  } catch (error) {
    // Show error message in HTML document
    const p = document.createElement('p');
    p.id = 'error-text';
    p.textContent = 'Error while fetching restaurants';
    document.body.appendChild(p);

    console.log('Error while fetching restaurants: ', error.message);
  }
}

async function getDailyMenu(restaurant) {
  try {
    const lang = 'en';
    const id = restaurant._id;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const url = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${id}/${lang}`;

    const response = await fetch(url, options);

    console.log(
      'Daily menu fetch status:',
      response.status,
      response.statusText
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.log('Error while fetching menu: ', error.message);
  }
}

function displayDailyMenu(menu, restaurant) {

  //const dialog = document.querySelector('dialog');
  const menuDiv = document.getElementById('restaurant-menu');

  // Check if menu is available
  if (menu && menu.courses && menu.courses.length > 0) {

    menuDiv.innerHTML = `<h3>Menu</h3><ul>`;

    for (let course of menu.courses) {
      menuDiv.innerHTML += `<li>${course.name} - ${course.price} (${course.diets})</li>`;
    }

    menuDiv.innerHTML += `</ul>`;

    console.log(`Daily menu for ${restaurant.name}:`);
    menu.courses.forEach((course, i) => {
      console.log(
        `${i + 1}. ${course.name} - ${course.price} (${course.diets})`
      );
    });
  } else {
    menuDiv.innerHTML = `<h3>Menu</h3>
      <p>Menu is not available</p>`

    console.log(`No menu available for ${restaurant.name}.`);
  }
}

async function run() {
  let restaurants = await getRestaurants();

  // Return if no data
  if (!restaurants) {
    return;
  }

  restaurants = sortAlphabetical(restaurants);
  displayRestaurants(restaurants);
  highlight();

  // Test daily menu for a specific restaurant
  /*const testIndex = 10; // index of the restaurant to test
  const testRestaurant = restaurants[testIndex];

  console.log('Testing restaurant at index', testIndex, ':', testRestaurant);

  if (!testRestaurant || !testRestaurant._id) {
    console.log('No valid restaurant found or missing _id.');
    return;
  }

  console.log('Fetching daily menu for restaurant id:', testRestaurant._id);

  try {
    const menu = await getDailyMenu(testRestaurant);
    console.log('Raw menu response:', menu);

    if (menu && Array.isArray(menu.courses) && menu.courses.length > 0) {
      console.log('Daily menu for', testRestaurant.name, ':');
      menu.courses.forEach((course, i) => {
        console.log(`${i + 1}. ${course.name} - ${course.price} (${course.diets})`);
      });
    } else {
      console.log('No courses available for', testRestaurant.name);
    }
  } catch (err) {
    console.log('Error fetching daily menu:', err);
  }
*/
}

run();
