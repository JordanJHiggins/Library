const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const cardContainer = document.getElementById("card-container");
const submitButton = document.getElementById("submit-button");
const form = document.getElementById("form");
const myLibrary = [];

function Book(title, author, pages, readStatus, initialReadStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.initialReadstatus = initialReadStatus;
}

function toggleActive(button) {
  button.innerText = "Read";
  button.classList.remove("toggle-inactive");
  button.classList.add("toggle-active");
}

function toggleInactive(button) {
  button.innerText = "Not read";
  button.classList.remove("toggle-active");
  button.classList.add("toggle-inactive");
}

Book.prototype.readToggle = (statusValue, button) => {
  if (statusValue % 2 === 0) {
    toggleActive(button);
  } else {
    toggleInactive(button);
  }
};

Book.prototype.initReadStatus = (button) => {
  const isRead = document.querySelector("#read");

  if (isRead.checked) {
    toggleActive(button);
  } else {
    toggleInactive(button);
  }
};
// Create book
function displayBook(newBook) {
  const newCard = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const cardPages = document.createElement("p");
  const removeButton = document.createElement("button");
  const statusButton = document.createElement("button");

  newCard.classList.add("card");
  cardTitle.classList.add("title");
  cardAuthor.classList.add("author");
  cardPages.classList.add("page-count");
  removeButton.classList.add("remove");
  statusButton.classList.add("status");

  newCard.appendChild(cardTitle);
  newCard.appendChild(cardAuthor);
  newCard.appendChild(cardPages);
  newCard.appendChild(statusButton);
  newCard.appendChild(removeButton);
  cardContainer.appendChild(newCard);

  removeButton.setAttribute("onclick", "this.parentNode.remove()");

  removeButton.innerText = "Remove";
  cardTitle.innerText = newBook.title;
  cardAuthor.innerText = newBook.author;
  cardPages.innerText = newBook.pages;

  newBook.initReadStatus = newBook.initReadStatus(statusButton);

  // removes book element from myLibrary
  removeButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(newBook), 1);
  });

  statusButton.addEventListener("click", () => {
    newBook.readStatus += 1;
    newBook.readToggle(newBook.readStatus, statusButton);
  });
}

function formReset() {
  document.querySelector("#form").reset();
}

// Get values and add new book to library.
function addBookToLibrary() {
  const newBook = new Book();

  newBook.title = `"${document.getElementById("title").value}"`;
  newBook.author = document.getElementById("author").value;
  newBook.pages = document.getElementById("pages").value;
  newBook.readStatus = 1;
  newBook.initialReadstatus = "";

  myLibrary.push(newBook);

  displayBook(newBook);
  formReset();
}

submitButton.addEventListener("click", addBookToLibrary);

// Prevents page from automatically refreshing when form is submitted.
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Modal
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
