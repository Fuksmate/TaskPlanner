const tasks1 = document.querySelectorAll(".task");

tasks1.forEach((task) => {
  task.addEventListener("click", (e) => {
    console.log(e.target.parentElement.classList.contains("todo"));
  });
});
