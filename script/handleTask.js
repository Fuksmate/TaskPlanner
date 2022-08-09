const modalButton = document.querySelector(".modal-btn");
const defaultTaskPosition = ".todo";

let tasks = JSON.parse(localStorage.getItem("task"));

const createTask = (task, index) => {
  const { name, description, category, position } = task;
  const taskElement = document.createElement("div");
  const todoContainer = document.querySelector(position);

  taskElement.draggable = true;
  taskElement.id = index;
  taskElement.classList.add("task");
  taskElement.innerHTML = name;
  taskElement.addEventListener("dragstart", () => {
    taskElement.classList.add("dragging");
  });
  todoContainer.appendChild(taskElement);
};
const displayAllTasks = () => {
  if (tasks !== null) {
    if (Array.isArray(tasks)) {
      tasks.forEach((task, index) => {
        createTask(task, index);
      });
    } else {
      let taskIndex = tasks == null ? 0 : tasks.length;
      createTask(tasks, taskIndex);
    }
  }
};
const saveInLocalStorage = (task) => {
  task["position"] = defaultTaskPosition; //set default position
  tasks = JSON.parse(localStorage.getItem("task"));
  let taskIndex = tasks == null ? 0 : tasks.length;

  createTask(task, taskIndex);
  if (tasks) {
    let tasksArr = tasks.length > 0 ? [...tasks, task] : [task];
    localStorage.setItem("task", JSON.stringify(tasksArr));
  } else {
    localStorage.setItem("task", JSON.stringify(task));
  }
};

modalButton.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".modal-input");
  const task = {};
  inputs.forEach((input) => {
    task[input.name] = input.value;
  });
  saveInLocalStorage(task);
});

displayAllTasks();
