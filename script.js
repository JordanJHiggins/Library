const addBookButton = document.getElementById("add-book");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const form = document.getElementById("form");
// const title = document.getElementById("title");

// Main App
let myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToLibrary() {
  let newBook = new Book("The Hobbit", "JRR Tolkien", 225, false);

  myLibrary.push(newBook);

  console.log(myLibrary);
}

// addBookButton.addEventListener("click", addBookToLibrary());

// Helper Functions
function getValues() {
  const title = document.getElementById("title").value;

  console.log(title);
}
// Prevents page from automatically refreshing when form is submitted.
function handleForm(event) {
  event.preventDefault();
}

form.addEventListener("submit", handleForm);

// Modal
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;

  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;

  modal.classList.remove("active");
  overlay.classList.remove("active");
}
