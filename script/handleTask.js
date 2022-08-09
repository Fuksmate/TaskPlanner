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
  todoContainer.appendChild(taskElement);
};

const displayAllTasks = () => {
  tasks.forEach((task, index) => {
    console.log(index);
    createTask(task, index);
  });
};

const saveInLocalStorage = (task) => {
  task["position"] = defaultTaskPosition;
  if (tasks) {
    tasks = JSON.parse(localStorage.getItem("task"));
    let tasksArr = tasks.length > 0 ? [...tasks, task] : [task];
    localStorage.setItem("task", JSON.stringify(tasksArr));
  } else {
    localStorage.setItem("task", JSON.stringify(task));
  }
  createTask(task);
};

modalButton.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".modal-input");
  const task = {};
  inputs.forEach((input) => {
    task[input.name] = input.value;
  });
  saveInLocalStorage(task);
});

console.log(tasks);

displayAllTasks();
