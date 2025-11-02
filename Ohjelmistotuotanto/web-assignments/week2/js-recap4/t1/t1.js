/*
Task 1 - New features to TODO list
In this assignment, you will build upon the previous TODO list assignment and implement new features to enhance its functionality. You will continue working with the DOM, event handling, and array manipulation in JavaScript.

Tasks:
- Update todoList Array on Item Completion:
Modify the existing TODO list so that users can mark items as completed by checking a checkbox.
Update the todoList array when a user checks an item to be done. Set the completed property of the corresponding item in the array to true if the checkbox is checked, or false if it is unchecked.
After each change, log the updated todoList array to the console to verify that the array has been modified correctly.
2p

- Add Delete Button to List Items:
For each item in the TODO list, add a “Delete” button that users can click to remove the item.
Implement an event handler so that when the “Delete” button is clicked, the corresponding item is removed from the todoList array.
Use removeChild method to remove the item from the TODO list.
After each change, log the updated todoList array to the console to verify that the array has been modified correctly.
4p

- Add Button to Add TODO Items:
Introduce an “Add Item” button to the UI. When this button is clicked, open a modal window.
The modal should contain a form with an input field for the new item’s name and a “Save” button.
Implement an event handler for the “Save” button that adds a new TODO item to the todoList array. The new item should have a default completed property of false.
After each change, log the updated todoList array to the console to verify that the array has been modified correctly.
*/

// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function updateList(list) {
  const ulElement = document.querySelector('ul');

  for (let item of list) {
    const id = `todo-${item.id}`;

    // create elements
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const deleteButton = document.createElement('button');

    // set input attributes
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', id);

    // check whether item is checked (completed is true)
    if (item.completed) {
      input.setAttribute('checked', '');
    }

    // label content
    label.htmlFor = `${id}`;
    label.innerHTML = item.task;

    // set button id and content
    deleteButton.setAttribute('class', 'del-btn');
    deleteButton.innerText = 'X';

    // append elements
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(deleteButton);
    ulElement.appendChild(li);
  }
}

function updateCompleted() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function () {
      const checkboxId = checkbox.getAttribute('id');

      // Get ID for comparing to todoList item id
      const lastDigit = getIdFromCheckboxId(checkboxId);

      todoList.forEach((item) => {
        if (item.id === lastDigit) {
          item.completed = !item.completed;
        }
      });

      console.log('\nUpdated Todo List after (un)checking:');
      logTodoList(todoList);
    });
  });
}

function logTodoList(list) {
  list.forEach((item) => {
    console.log(item);
  });
}

function getIdFromCheckboxId(idStr) {
  return parseInt(idStr.split('-')[1], 10);
}


function deleteItem() {
  const delButtons = document.querySelector('ul').querySelectorAll('button');

  delButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      const liElement = button.closest('li');

      // Detect li element
      const inputId = liElement
        .querySelector('input[type="checkbox"]')
        .getAttribute('id');
      const lastDigit = getIdFromCheckboxId(inputId);

      // Delete item from todoList, when id matches
      todoList.forEach((item) => {
        if (item.id === lastDigit) {
          const itemIndex = todoList.indexOf(item);
          todoList.splice(itemIndex, 1);

          // Delete li element from HTML
          liElement.parentNode.removeChild(liElement);
        }
      });

      console.log('\nUpdated Todo List after removing:');
      logTodoList(todoList);
    });
  });
}

function addItem() {
  const addButton = document.querySelector('button[class="add-btn"]');
  addButton.addEventListener('click', function (event) {
    openModal();
  });
}

function openModal() {
  const dialog = document.querySelector('dialog');
  dialog.setAttribute('open', '');
}

function saveNewItem() {
  const submitButton = document.querySelector('button[type="submit"]');

  submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // prevent page from reloading after submit
    let newItemName = document.getElementById('new-item').value;

    if (newItemName === '') {
      newItemName = 'Empty';
    }

    let newId = todoList.length + 1;

    // Prevent getting used id
    todoList.forEach((item) => {
      if (item.id === newId) {
        newId++;
      }
    });

    // Add new item to todoList
    todoList.push({
      id: newId,
      task: newItemName,
      completed: false,
    });

    // Close modal
    document.querySelector('dialog').removeAttribute('open');

    console.log('\nUpdated Todo List after adding:');
    logTodoList(todoList);

    // Delete item value from form to make placeholder appear again
    document.getElementById('new-item').value = '';

    addNewItemHTML(newId, newItemName);
  });
}

function addNewItemHTML(newId, newItemName) {
  const ulElement = document.querySelector('ul');

  // create elements
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const deleteButton = document.createElement('button');

  // set input attributes
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${newId}`);

  // label content
  label.htmlFor = input.id;
  label.innerHTML = newItemName;

  // button content
  deleteButton.setAttribute('class', 'del-btn');
  deleteButton.innerText = 'X';

  // append to li
  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(deleteButton);

  // append li to ul
  ulElement.appendChild(li);

  // attach event listener for the new checkbox
  input.addEventListener('click', function () {
    const lastDigit = getIdFromCheckboxId(input.id);

    todoList.forEach((item) => {
      if (item.id === lastDigit) {
        item.completed = !item.completed;
      }
    });
    console.log('\nUpdated Todo List after (un)checking:');
    logTodoList(todoList);
  });

  // attach event listener for the new delete button
  deleteButton.addEventListener('click', function () {
    const lastDigit = getIdFromCheckboxId(input.id);
    const index = todoList.findIndex((item) => item.id === lastDigit);

    if (index > -1) {
      todoList.splice(index, 1);
    }

    li.parentNode.removeChild(li);

    console.log('\nUpdated Todo List after removing:');
    logTodoList(todoList);
  });
}

updateList(todoList);
updateCompleted();
deleteItem();
addItem();
saveNewItem();
