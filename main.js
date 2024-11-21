const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');

function addTodo() {
    const task = todoInput.value.trim();
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();
    
    li.appendChild(span);
    li.appendChild(deleteBtn);

            // Append the list item to the to-do list
    todoList.appendChild(li);

            // Clear the input field
    todoInput.value = "";
}