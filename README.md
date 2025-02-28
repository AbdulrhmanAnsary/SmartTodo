# SmartTodo

SmartTodo is a minimalist To-Do list application built with plain JavaScript that leverages modern class-based architecture. This project is adapted from [freeCodeCamp's article](https://www.freecodecamp.org/news/how-to-use-classes-in-javascript-handbook/) by Spruce Emmanuel, which offers an insightful guide on using classes in JavaScript.

## Features
- **Add Tasks:** Quickly create new tasks with a single click.
- **Mark as Complete:** Easily update the status of your tasks.
- **Real-Time Rendering:** Watch your task list update instantly as you work.
- **Clean Code Structure:** Embraces a modern, object-oriented approach for streamlined task management.

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, etc.)
- Basic familiarity with HTML, CSS, and JavaScript is helpful but not required.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbdulrhmanAnsary/SmartTodo.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd SmartTodo
   ```

3. **Launch the application:** Open index.html in your preferred web browser.


## Code Overview
The application is structured around two primary classes:

- **ToDo:** Represents individual tasks, holding details such as description and completion status. Its markComplete() method updates the task’s state and logs a confirmation.

- **ToDoList:** Manages an array of ToDo objects, providing methods to add tasks, mark tasks as complete, and render the updated list on the webpage in real time.


Each time a task is added or marked complete, the list re-renders to keep the UI in sync with the underlying data.

## Credits
This code is adapted from the freeCodeCamp article "[How to Use Classes in JavaScript: A Handbook](https://www.freecodecamp.org/news/how-to-use-classes-in-javascript-handbook/)" by Spruce Emmanuel. For more insights on JavaScript classes and coding practices, be sure to check out the original article.

## Future Enhancements
- **Enhanced Styling:** Integrate a CSS framework for a more polished UI.

- **Data Persistence:** Implement local storage to save tasks between sessions.

- **Extended Features:** Add options for task editing, deletion, and filtering.


## Contributing
We welcome contributions that drive forward innovative features and improvements. Feel free to fork the repository, make your enhancements, and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.
