// Defineing variables according to the Id's in the html file.
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to create a new task on the task list.
const createTaskElement = (task) => {
    const listItem = document.createElement('li');
    
    // Checkbox which crosses out the task once the user clicks it
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', () => {
        listItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    const taskText = document.createElement('span');
    taskText.textContent = task;

    // Button to delete tasks.
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    return listItem;
};

// Event listener for adding tasks when user clicks the button to add a task.
addTask.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
        taskInput.value = '';
    }
});