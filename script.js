// Function created to add a new task!!!
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task here!! asap.');
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `${taskText}
                  <button class="delete" onclick="deleteTask(this)">Delete</button>
                  <button class="update" onclick="updateTask(this)">Update</button>`;
  taskList.appendChild(li);

  taskInput.value = '';
}

// Function created to delete a task!!
function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}

// Function created to update a task!!
function updateTask(button) {
  const li = button.parentElement;
  const taskText = li.firstChild.textContent.trim();
  const updatedTask = prompt('Update task:', taskText);

  if (updatedTask === null || updatedTask.trim() === '') {
    return;
  }

  li.firstChild.textContent = updatedTask.trim();
}
