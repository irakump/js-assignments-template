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

let restaurants = []; // TODO: hae data API:sta

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

    tr.restaurant = restaurant;   // Save restaurant object

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

function displayRestaurantInfo(restaurant) {
  const dialog = document.querySelector('dialog');
  const dialogDiv = dialog.querySelector('div');

  dialogDiv.innerHTML = `<h3>${restaurant.name}</h3>
    <p>${restaurant.address}</p>
    <p>${restaurant.postalCode}</p>
    <p>${restaurant.city}</p>
    <p>${restaurant.phone}</p>
    <p>${restaurant.company}</p>`;

  dialog.showModal();

  const closeButton = document.getElementById('close');
  closeButton.addEventListener('click', () => {
    dialog.close();
  })

}

restaurants = sortAlphabetical(restaurants);
displayRestaurants(restaurants);
highlight();

