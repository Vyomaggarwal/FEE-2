// Select DOM elements
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent form submission

    const taskText = todoInput.value; // Get input value
    const listItem = document.createElement('li'); // Create a new list item
    listItem.className = 'list-group-item'; // Set class for styling

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create a button to mark task as completed
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'btn btn-success btn-sm ms-2';
    completeButton.onclick = () => {
        taskSpan.classList.toggle('completed'); // Toggle completed class
    };

    // Create a button to remove the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'btn btn-danger btn-sm ms-2';
    removeButton.onclick = () => {
        todoList.removeChild(listItem); // Remove the list item
    };

    // Append elements to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(completeButton);
    listItem.appendChild(removeButton);

    // Append the list item to the to-do list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = '';
}

// Event listener for form submission
todoForm.addEventListener('submit', addTask);
