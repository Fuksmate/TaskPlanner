const modalShadow = document.querySelector(".modal-shadow");
const closeModalButton = document.querySelectorAll(".modal-close");
const openModalButton = document.querySelector(".aside-btn");
const taskModalShadow = document.querySelector(".task-modal-shadow");

openModalButton.addEventListener("click", () => {
  modalShadow.classList.add("modal-active");
});

closeModalButton[0].addEventListener("click", () => {
  modalShadow.classList.remove("modal-active");
});

closeModalButton[1].addEventListener("click", () => {
  taskModalShadow.classList.remove("modal-active");
});
