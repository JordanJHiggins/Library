const addBookButton = document.getElementById("add-book");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
// Card elements
const cardContainer = document.getElementById("card-container");
const cardTitle = document.querySelector(".card-title");
const cardAuthor = document.querySelector(".card-author");
const cardPages = document.querySelector(".card-pages");
// clone of card
const clone = document.querySelector(".card").cloneNode(true);

// Main App
let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  const newBook = Object.create(Book);
  newBook.title = document.getElementById("title").value;
  newBook.author = document.getElementById("author").value;
  newBook.pages = document.getElementById("pages").value;

  myLibrary.push(newBook);
  document.querySelector("#form").reset();
}

// Helper Functions
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
