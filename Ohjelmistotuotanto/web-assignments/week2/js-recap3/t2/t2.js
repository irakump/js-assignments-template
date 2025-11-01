/*
Task 2 - Todo list with DOM methods
The assignment remains unchanged from the first, except that for this version, DOM methods are used to add the todo items.
for attribute is added to <label> with htmlFor
4p
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

    // append elements
    li.appendChild(input);
    li.appendChild(label);
    ulElement.appendChild(li);

  }

}

updateList(todoList);
