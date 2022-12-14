const addBookButton = document.getElementById("add-book");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

const cardContainer = document.getElementById("card-container");

// Main App
let myLibrary = [];

// Book constructor.
function Book(title, author, pages, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = id;
}

// Get values and add new book to library.
function addBookToLibrary() {
  let newBook = new Book();

  newBook.title = document.getElementById("title").value;
  newBook.author = document.getElementById("author").value;
  newBook.pages = document.getElementById("pages").value;
  newBook.id = this.title.value;

  myLibrary.push(newBook);
  document.querySelector("#form").reset();

  displayBook(newBook);
}

// Create book
function displayBook(newBook) {
  const newCard = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardAuthor = document.createElement("p");

  newCard.classList.add("card");
  cardTitle.classList.add("title");
  cardAuthor.classList.add("author");

  newCard.appendChild(cardTitle);
  newCard.appendChild(cardAuthor);
  cardContainer.appendChild(newCard);

  const removeButton = document.createElement("button");
  removeButton.setAttribute("onclick", "this.parentNode.remove()");

  newCard.appendChild(removeButton);
  cardTitle.innerText = newBook.title;
  cardAuthor.innerText = newBook.author;

  removeButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(newBook), 1);
  });
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
