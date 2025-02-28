// The challenge solution using prototype style

// Define the ToDo constructor
function ToDo(description) {
  this.description = description;
  this.completed = false;
}

// Attach the markComplete method to ToDo's prototype
ToDo.prototype.markComplete = function() {
  this.completed = true;
  console.log(`${this.description} marked as complete!`);
};

// Define the ToDoList constructor
function ToDoList() {
  this.todos = [];
}

// Attach methods to ToDoList's prototype
ToDoList.prototype.addTodo = function(description) {
  const newTodo = new ToDo(description);
  this.todos.push(newTodo);
  this.renderTodoList(); // Update the webpage display
};

ToDoList.prototype.listTodos = function() {
  return this.todos;
};

ToDoList.prototype.markTodoComplete = function(index) {
  if (index >= 0 && index < this.todos.length) {
    this.todos[index].markComplete();
    this.renderTodoList(); // Update the display after marking complete
  }
};

ToDoList.prototype.renderTodoList = function() {
  const todoListElement = document.getElementById('todoList');
  todoListElement.innerHTML = '';
  this.todos.forEach((todo, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = todo.description;
    
    if (todo.completed) {
      // Add CSS class for styling completed items
      listItem.classList.add('completed');
    }
    
    // Create a "Complete" button for each to-do
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => this.markTodoComplete(index);
    
    listItem.appendChild(completeButton);
    todoListElement.appendChild(listItem);
  });
};

const todoList = new ToDoList();
const addButton = document.getElementById("addButton");
const todoInput = document.getElementById("todoInput");

addButton.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    todoList.addTodo(todoText);
    todoInput.value = "";
  }
});

// Render the to-do list initially (it will be empty to start)
todoList.renderTodoList();