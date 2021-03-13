// Inital Variables
//
let toggleButtonCounter = 0;
let bookIdCounter = 0;
let myLibrary = {};
// HTML Elements
//
let bookSection = document.getElementById('book-section')
let readButtons = document.getElementsByClassName('read-label-input');
// Book constructor
//
let Book = function(title, author, pages, language, read) {
    // Initialize object properties
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.read = read;
    this.id = bookIdCounter;
    bookIdCounter =+ 1;
    // Create book element
    this.block = document.createElement('div');
    if (this.read == true) {
        this.block.className = 'book-read';
    } else {
        this.block.className = 'book-unread';
    };
    this.block.id = this.id;
    // Create x-button child element
    let xButton = document.createElement('div');
    xButton.className = 'x-button';
    xButton.innerText = '✕';
    // Create book-contents child element
    let bookContents = document.createElement('div');
    bookContents.className = 'book-contents';
    // Create child elements for book-contents
    let bookTitle = document.createElement('h2');
    bookTitle.innerText = this.title;
    let bookAuthor = document.createElement('p');
    bookAuthor.innerText = `By: ${this.author}`;
    let bookPages = document.createElement('p');
    bookPages.innerText = `Length: ${this.pages} Pages`;
    let bookLanguage = document.createElement('p');
    bookLanguage.innerText = `Language: ${this.language}`;
    // Add book-contents child elements to book-contents
    bookContents.appendChild(bookTitle);
    bookContents.appendChild(bookAuthor);
    bookContents.appendChild(bookPages);
    bookContents.appendChild(bookLanguage);
    // Create read-or-not child element
    let readOrNotRead = document.createElement('div');
    readOrNotRead.className = 'read-or-not-read';
    // Create read-status child element for read-or-not
    let readStatus = document.createElement('p');
    readStatus.className = 'read-status';
    if (this.read == true) {
        readStatus.innerText = 'Mark As Unread';
    } else {
        readStatus.innerText = 'Mark As Read';
    };
    // Create input child element for read-or-not
    let toggleButtonInput = document.createElement('INPUT');
    toggleButtonInput.setAttribute('type', 'checkbox');
    toggleButtonInput.id = `switch${toggleButtonCounter.toString()}`;
    if (this.read == true) {
        toggleButtonInput.checked = true;
    } else {
        toggleButtonInput.checked = false;
    };
    toggleButtonCounter += 1;
    // Create label child element for read-or-not
    let toggleButtonLabel = document.createElement('LABEL');
    toggleButtonLabel.htmlFor = toggleButtonInput.id;
    toggleButtonLabel.innerText = 'Toggle';
    // Add read-or-not child elements to read-or-not
    readOrNotRead.appendChild(readStatus);
    readOrNotRead.appendChild(toggleButtonInput);
    readOrNotRead.appendChild(toggleButtonLabel);
    // Add book child elements to book element
    this.block.appendChild(xButton);
    this.block.appendChild(bookContents);
    this.block.appendChild(readOrNotRead);
    // Add book element to book section parent element
    bookSection.appendChild(this.block);
    // Add object to book library
    myLibrary[this.id] = this;
};
// let addBookToLibrary = function(book) {
// };
// // Toggle Button Functions
// //
// let displayMessage = function() {
//     alert('pop goes the weasel');
// }
// // Event Listeners
// //
// toggleButton.addEventListener('click', change);
// Initialize two sample objects
//
let book1 = new Book('12 Rules for Life: An Antidote to Chaos', 'Jordan B. Peterson', '448', 'English', true)
let book2 = new Book('Beyond Order: 12 More Rules For Life', 'Jordan B. Peterson', '432', 'English', false)