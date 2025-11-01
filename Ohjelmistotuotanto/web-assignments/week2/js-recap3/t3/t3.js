/*
Task 3 - Display browser and device information
Create a web page that dynamically displays information about the user’s browser and device using the BOM. Print the data to #target element. The page should show details such as:
- Browser name and version. (e.g. Google Chrome, 114)
- (Operating system name.)
- Screen width and height.
- Available screen space for the browser.
- Current date and time. Use Finnish localization
    - 1. helmikuuta 2056 as date format
    - Hours and minutes for time

Place each item within its own <p> element, for example. Save the web page as t3.html and JS as t3.js to t3 folder
5p
*/

function displayInformation() {
  const outputElement = document.getElementById('target');

  // Browser name, version and OS name
  const heading1 = document.createElement('h3');
  heading1.innerHTML = 'Browser name, version and OS name';

  const p1 = document.createElement('p');
  p1.innerHTML = navigator.userAgent;

  outputElement.appendChild(heading1);
  outputElement.appendChild(p1);

  // Screen size
  const heading2 = document.createElement('h3');
  heading2.innerHTML = 'Screen size';

  const p2 = document.createElement('p');
  p2.innerHTML = 'Width: ' + screen.width + ', height: ' + screen.height;

  outputElement.appendChild(heading2);
  outputElement.appendChild(p2);

  // Available screen space
  const heading3 = document.createElement('h3');
  heading3.innerHTML = 'Available screen space for the browser';

  const p3 = document.createElement('p');
  p3.innerHTML = 'Width: ' + screen.availWidth + ', height: ' + screen.availHeight;

  outputElement.appendChild(heading3);
  outputElement.appendChild(p3);

  // Current date and time
  const heading4 = document.createElement('h3');
  heading4.innerHTML = 'Current date and time';

  const date = new Date();
  const formattedDate = date.toLocaleDateString('fi-FI', {
    'day': 'numeric',
    'month': 'long',
    'year': 'numeric',
    'hour': '2-digit',
    'minute': '2-digit'
  });

  const p4 = document.createElement('p');
  p4.innerHTML = formattedDate;

  outputElement.appendChild(heading4);
  outputElement.appendChild(p4);
}

displayInformation();
