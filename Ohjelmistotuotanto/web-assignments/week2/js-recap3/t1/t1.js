/*
Task 1 - Todo list
There is an array of todo items called todoList. Add the todo items to ul element in t1.html by using insertAdjacentHTML method. The structure of the end result should be this:

<li>
   <input type="checkbox" id="todo-1" checked>
   <label for="todo-1">Buy milk</label>
</li>
<li>
   <input type="checkbox" id="todo-2">
   <label for="todo-2">Buy eggs</label>
</li>
<li>
   <input type="checkbox" id="todo-3" >
   <label for="todo-3">Buy bread</label>
</li>
note: if completed property is true, the checkbox should be automatically checked.
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
    const strChecked = createCheckedStr(item.completed);
    const id = `todo-${item.id}`;

    const inputRow = `<input type="checkbox" id="${id}"${strChecked}>`;
    const labelRow = `<label for="${id}">${item.task}</label>`;

    ulElement.insertAdjacentHTML('beforeend', `<li>${inputRow}${labelRow}</li>`);
  }

}

// create string based on checked value - if false, return empty string
function createCheckedStr(checkedValue) {
  if (checkedValue) {
    return ' checked';
  }
  return '';
}


updateList(todoList);
