const taskDraggable = document.querySelectorAll(".task");
const containers = document.querySelectorAll(".container-on-task");

taskDraggable.forEach((taskDraggable) => {
  taskDraggable.addEventListener("dragstart", () => {
    taskDraggable.classList.add("dragging");
  });

  taskDraggable.addEventListener("dragend", () => {
    taskDraggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const taskDraggable = document.querySelector(".dragging");
    if (afterElement == null) {
      container.appendChild(taskDraggable);
    } else {
      container.insertBefore(taskDraggable, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const taskDraggableElements = [
    ...container.querySelectorAll(".taskDraggable:not(.dragging)"),
  ];

  return taskDraggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
