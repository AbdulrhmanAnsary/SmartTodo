class ToDo {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }
  
  markComplete() {
    this.completed = true;
    console.log(`${this.description}
      marked as complete!`);
  }
}

class ToDoList {
  constructor() {
    this.todos = [];
  }
  
  addTodo(description) {
    const newTodo = new ToDo(description);
    this.todos.push(newTodo);
    this.renderTodoList(); // Update the webpage display
  }
  
  listTodos() {
    return this.todos;
  }
  
  markTodoComplete(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index].markComplete();
      this.renderTodoList(); // Update the display after marking complete
      
    }
  }
  
  renderTodoList() {
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
  }
}

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