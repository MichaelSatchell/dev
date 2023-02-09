//  Display The Tasks
// Using Javascript to Create an HTML which display the "Task List"

const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
  const display = status == "TODO" ? "" : "d-none";
  const color = status == "TODO" ? "btn btn-danger " : "btn-success";
  const html = `
  <li class="list-group-item">
      <div class="task" data-task-id=${id}>
      <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <h5><b>Task Name:</b> ${name}</h5>
        <span class="btn btn-pill badge ${color} btn-success task-status">${status}</span>
      </div>
      <p><b>Description:</b> ${description}</p>
      <div class="d-flex w-100 mb-3 justify-content-between">
          <small><b>Assigned To</b>: ${assignedTo}</small>&nbsp;&nbsp;
          <small><b>Due</b>: ${dueDate}</small>
      </div>
      <div class="task-bottom">    
          <span class="${display} btn btn-outline-success done-button">Mark as Done </span> 
          <span class="btn btn-outline-danger delete-button">Delete </span>
      </div>
    </div>
</li>`;
  return html;
};
// end createTaskHtml of task 6 step1

// The TaskManager Class
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this._currentId = currentId;
  }

  //   Adding A New Task Programmatically
  //   Method that accept all nessecary info from the form, to create a task as parameters
  addTask(name, description, assignedTo, dueDate, status = "TODO") {
    this._currentId++;
    this.tasks.push({
      id: this._currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    });
  }
  // end of addTask() method on task 5

  // start of Task 6 step:2
  // render method to display the task
  render() {
    //a variable array to hold the HTML of all the tasks' html
    const tasksHtmlList = [];

    //Loop over the `TaskManager`'s tasks, for each tasks
    // "Render" means to "create a visual reference of"
    this.tasks.forEach((e, i) => {
      e.id = i;
      const date = new Date(e.dueDate);
      const formattedDate = date.toDateString();

      // Create a `taskHtml` variable to store the HTML of the current task
      const taskHtml = createTaskHtml(
        e.name,
        e.description,
        e.assignedTo,
        formattedDate,
        e.status,
        i
      );
      // push the `taskHtml` into the `tasksHtmlList` array
      tasksHtmlList.push(taskHtml);
    });

    // create a `tasksHtml` variable, set the variable to a string of HTML of all the tasks by `join`ing the `tasksHtmlList` array together,
    // separating each task's html with a newline.
    const tasksHtml = tasksHtmlList.join("\n");
    $("#ntasks").html(tasksHtml);
  }

  //Task7, Step:4, using getTaskById Method to find the correct task to select

  getTaskById(taskId) {
    let foundTask;
    this.tasks.forEach((e) => {
      const task = e;
      if (task.id == taskId) {
        foundTask = task;
      }
    });
    return foundTask;
  }

  // Task8: step 1
  // Persisting(i.e Saving) Tasks to LocalStorage
  // create save() method
  save() {
    // LocalStorage: can only store stings, to do so create a JSON string of the tasks as follow
    const tasksJson = JSON.stringify(this.tasks);
    // Store the JSON string in `localStorage
    localStorage.setItem("tasks", tasksJson);
    // Convert the `this.currentId` to a string and store it in a new variable, `currentId`
    localStorage.setItem("currentID", JSON.stringify(this._currentId));
  }

  //Task8  Step 2: Adding the load method to TaskManager
  // converting the array we _stringified_ with `JSON.stringify()` back to an array, using `JSON.parse()`
  load() {
    // To check if any tasks are saved in localStorage
    if (localStorage.getItem("tasks") !== null) {
      //To get the JSON string of tasks stored in `localStorage`
      const tasksJson = localStorage.getItem("tasks");
      // Convert the `tasksJson` string to an array using `JSON.parse()` and store it in `this.tasks`
      this.tasks = JSON.parse(tasksJson);
    }
    // check if the `currentId` is saved in localStorage with `localStorage.getItem()`
    if (localStorage.getItem("currentID") !== null) {
      // Convert the currentId to a number before storing it to the `TaskManager`'s `this.currentId`
      this._currentId = +localStorage.getItem("currentID");
    }
  }

  // Task9: Step 2: Create the deleteTask Method on TaskManager
  deleteTask(taskId) {
    this.tasks.splice(taskId, 1); //to remove an element from the `this.tasks` array
    this._currentId--;
  }
  // end of TaskManager class
}
