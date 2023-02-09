const taskManager = new TaskManager();
taskManager.load(); // to `load` the task
taskManager.render();

// *********
// Input Validation
const validFormFieldInput = (data) => {
  // To access the input value from the form
  const newTaskNameInput = document.querySelector("#newTaskNameInput");
  const newTaskDescriptionInput = document.getElementById(
    "newTaskDescriptionInput"
  );
  const newTaskAssignedTo = document.getElementById("newTaskAssignedTo");
  const newTaskDueDate = document.getElementById("newTaskDueDate");

  // variables to hold each input values from the form
  const name = newTaskNameInput.value;
  const description = newTaskDescriptionInput.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;

  // To check if the each input value is not empty
  if (
    !name == " " &&
    !description == " " &&
    !assignedTo == " " &&
    !dueDate == " "
  ) {
    // ****************
    // To add values from the form to the addTask Method
    taskManager.addTask(name, description, assignedTo, dueDate);
    // taskManager.save()
    taskManager.render();
    // ********
    // To clear/Rest the form after submiting the values
    // ************************************************
    document.getElementById("myForm").reset();
  }
};

let inputBox = document.getElementById("newTaskNameInput");
let inputBox1 = document.getElementById("newTaskDescriptionInput");
let inputBox2 = document.getElementById("newTaskAssignedTo");
let inputBox3 = document.getElementById("newTaskDueDate");
// let ch = [inputBox, inputBox1, inputBox2, inputBox3];

// To grab an error and change the input boarder to red
let errorcatch = document.getElementById("errorsDip");
// Selecting a class name to Remove a bootstrap class "is-invalid" to change the border color from red to blue if there is an input
let taskInput = document.querySelector(".checkInput");
let taskInput1 = document.querySelector(".checkInput1");
let taskInput2 = document.querySelector(".checkInput2");
let taskInput3 = document.querySelector(".checkInput3");
inputBox.onkeyup = function () {
  // to change boarder color if there is no an input values
  if (this.value.length >= 1) {
    errorcatch.style.display = "none";
  }
  // Remove a bootstrap class "is-invalid" to change the border color from red to blue if there is an input
  taskInput.classList.remove("is-invalid");
};
//For task description
inputBox1.onkeyup = function () {
  // to change boarder color if there is an input
  if (this.value.length >= 1) {
    // let errorcatch = document.getElementById("errorsDip");
    errorcatch.style.display = "none";
  }
  // Remove a bootstrap class "is-invalid" to change the border color from red to blue if there is an input
  taskInput1.classList.remove("is-invalid");
};
//2 Assigned To
inputBox2.onkeyup = function () {
  // to change boarder color if there is an input
  if (this.value.length >= 1) {
    // let errorcatch = document.getElementById("errorsDip");
    errorcatch.style.display = "none";
  }
  // Remove a bootstrap class "is-invalid" to change the border color from red to blue if there is an input
  taskInput2.classList.remove("is-invalid");
};
// To change boarder color , if there is an input for Due Date
inputBox3.onclick = function () {
  if (this.value.length) {
    errorcatch.style.display = "none";
  }
  // Remove a bootstrap class "is-invalid" to change the border color from red to blue if there is an input
  taskInput3.classList.remove("is-invalid");
};
// Input boarder color change for empty input field ends here
// ****************************************************

// input form validation
let addTa = document.getElementById("addButton"); // // on clicking Add to cart Buttons
addTa.onclick = addToTask;

// To display an error starts here
function addToTask(e) {
  let errors = [];
  let elErrDisp = document.getElementById("errorsDip"); // elErrDisp = ElementErrorDisplay
  elErrDisp.innerHTML = "";

  //  To Check if the input value entered or date input selected
  let TaskIpute = document.getElementsByName("TaskName");
  let DescriptionIpute = document.getElementsByName("TaskDescription");
  let assignedInpuute = document.getElementsByName("assignedTo");
  let DateSeelceted = document.getElementsByName("dates");
  // get their values
  let taskNameValue = TaskIpute[0].value;
  let descriptionValue = DescriptionIpute[0].value;
  let assignedValue = assignedInpuute[0].value;
  let DateValue = DateSeelceted[0].value;

  //   to check if it is empty or not
  let input = document.querySelector(".checkInput");
  let input1 = document.querySelector(".checkInput1");
  let input2 = document.querySelector(".checkInput2");
  let input3 = document.querySelector(".checkInput3");
  // we use ip short form of input
  if (!taskNameValue) {
    // for border coloring if it is empty

    input.classList.add("is-invalid");
    // errors.push("Text is required");
  } else if (!descriptionValue) {
    input1.classList.add("is-invalid");
    // errors.push("Text is required");
  } else if (!assignedValue) {
    input2.classList.add("is-invalid");
    // errors.push("Text is required");
  } else if (!DateValue) {
    input3.classList.add("is-invalid");
    // errors.push("Text is required");
  }
  validFormFieldInput();
}

// Adding an Event Listener to the Task List
//  Event Listener for the **Task List**
// ***************************************
// Selecting an "id" called "ntasks" to access the Task List element in the HTML
const taskListn = document.querySelector("#ntasks");
taskListn.addEventListener("click", (event) => {
  // "event" here is the event parameter
  // Get the `taskId` of the parent task from its `data-task-id` property
  const parentTask = event.target.parentElement.parentElement;

  //To set the value to the `taskId` `data-attribute` of the DOM element.
  const taskId = parentTask.dataset.taskId;

  // Using the `taskId` as it's parameter, call the `getTaskById()` method on the `taskManager`,
  // storing the result in a `task` variable.

  // To convert string to number
  let strToNum = Number(taskId);

  const task = taskManager.getTaskById(strToNum);

  // to check if the `event.target.classList` `contains` the class `"done-button"
  if (event.target.classList.contains("done-button")) {
    // To change the status to "DONE"
    task.status = "DONE";
    // after both adding a new task and updating a task's status to done,
    // call `taskManager.save()` to save the tasks to `localSorage`.
    taskManager.save();
    taskManager.render();
    return false;
  }
  // It's all very similar to the code we did for the "Mark As Done" button.
  //To check if the `event.target.classList` `contains` the class `'delete-button'`.
  if (event.target.classList.contains("delete-button")) {
    if (task.status == "DONE") {
      taskManager.deleteTask();
      taskManager.save(); //To Save the tasks to `localStorage`
      taskManager.render(); //Render the tasks
      return false;
    }
  }
});
