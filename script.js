const addBookButton = document.getElementById("add-book");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const cardContainer = document.getElementById("card-container");

// Main App
let myLibrary = [];

// Book constructor.
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

// Get values and add new book to library.
function addBookToLibrary() {
  let newBook = new Book();

  newBook.title = document.getElementById("title").value;
  newBook.author = document.getElementById("author").value;
  newBook.pages = document.getElementById("pages").value;
  newBook.readStatus = 1;
  myLibrary.push(newBook);

  formReset();
  createBook(newBook);
}

Book.prototype.readToggle = (statusValue, button) => {
  if (statusValue % 2 == 0) {
    button.innerText = "Read";
    button.classList.remove("toggle-inactive");
    button.classList.add("toggle-active");
  } else {
    button.innerText = "Not read";
    button.classList.remove("toggle-active");
    button.classList.add("toggle-inactive");
  }
};

// Create book
function createBook(newBook) {
  const newCard = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardAuthor = document.createElement("p");
  let statusButton = document.createElement("button");
  const removeButton = document.createElement("button");

  // let thisReadStatus = readToggle(statusButton);
  newCard.classList.add("card");
  cardTitle.classList.add("title");
  cardAuthor.classList.add("author");
  statusButton.classList.add("status");
  // statusButton.classList.add("toggle-active");
  // statusButton.classList.add("toggle-inactive");

  newCard.appendChild(cardTitle);
  newCard.appendChild(cardAuthor);
  newCard.appendChild(statusButton);
  newCard.appendChild(removeButton);
  cardContainer.appendChild(newCard);

  removeButton.setAttribute("onclick", "this.parentNode.remove()");

  removeButton.innerText = "Remove";
  cardTitle.innerText = newBook.title;
  cardAuthor.innerText = newBook.author;

  removeButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(newBook), 1);
  });

  statusButton.addEventListener("click", () => {
    newBook.readStatus += 1;
    newBook.readToggle(newBook.readStatus, statusButton);
  });
}

// Helper Functions
// Prevents page from automatically refreshing when form is submitted.
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

function formReset() {
  document.querySelector("#form").reset();
}

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
