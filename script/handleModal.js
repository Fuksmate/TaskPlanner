const modalShadow = document.querySelector(".modal-shadow");
const closeModalButton = document.querySelector(".modal-close");
const openModalButton = document.querySelector(".aside-btn");

openModalButton.addEventListener("click", () => {
  modalShadow.classList.add("modal-active");
});

closeModalButton.addEventListener("click", () => {
  modalShadow.classList.remove("modal-active");
});
