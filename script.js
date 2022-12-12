const addBookButton = document.getElementById("add-book");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

const cardContainer = document.getElementById("card-container");

// Main App
let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  let newBook = Object.create(Book);
  newBook.title = document.getElementById("title").value;
  newBook.author = document.getElementById("author").value;
  newBook.pages = document.getElementById("pages").value;

  myLibrary.push(newBook);
  document.querySelector("#form").reset();
  displayBook(newBook);
}

function displayBook(newBook) {
  const newCard = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const removeButton = document.createElement("button");

  newCard.classList.add("card");
  cardTitle.classList.add("title");
  cardAuthor.classList.add("author");
  removeButton.classList.add("remove-button");

  removeButton.setAttribute("onclick", "this.parentNode.remove()");
  removeButton.textContent = "Remove";

  newCard.appendChild(cardTitle);
  newCard.appendChild(cardAuthor);
  newCard.appendChild(removeButton);
  cardContainer.appendChild(newCard);

  cardTitle.innerText = newBook.title;
  cardAuthor.innerText = newBook.author;
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
