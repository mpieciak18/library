// Inital Variables
//
let toggleButtonCounter = 0

// HTML Elements
//
let bookSection = document.getElementById('book-section')
let readButtons = document.getElementsByClassName('read-label-input');

let myLibrary = [];

class Book {
    constructor(title, author, pages, language, read) {
        // Initialize object properties
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.language = language;
        this.read = read;
        // Create book element
        this.block = document.createElement('div');
        if (this.read = true) {
            this.block.className = 'book-read';
        } else {
            this.block.className = 'book-unread';
        };
        // Create x-button child element
        this.xButton = document.createElement('div');
        this.xButton.className = 'x-button';
        this.xButton.innerText = '✕';
        // Create book-contents child element
        this.bookContents = document.createElement('div');
        this.bookContents.className = 'book-contents';
        // Create child elements for book-contents
        this.bookTitle = document.createElement('h2');
        this.bookTitle.innerText = this.title;
        this.bookAuthor = document.createElement('p');
        this.bookAuthor.innerText = this.author;
        this.bookPages = document.createElement('p');
        this.bookPages.innerText = this.pages;
        this.bookLanguage = document.createElement('p');
        this.bookLanguage.innerText = this.language;
        // Add book-contents child elements to book-contents
        this.bookContents.appendChild(this.bookTitle);
        this.bookContents.appendChild(this.bookAuthor);
        this.bookContents.appendChild(this.bookPages);
        this.bookContents.appendChild(this.bookLanguage);
        // Create read-or-not child element
        this.readOrNotRead = document.createElement('div');
        this.readOrNotRead.className = 'read-or-not-read';
        // Create read-status child element for read-or-not
        this.readStatus = document.createElement('p');
        this.readStatus.className = 'read-status';
        if (this.read == true) {
            this.readStatus.innerText = 'Mark As Unread';
        } else {
            this.readStatus.innerText = 'Mark As Read';
        };
        // Create input child element for read-or-not
        this.toggleButtonInput = document.createElement('INPUT');
        this.toggleButtonInput.setAttribute('type', 'checkbox');
        toggleButtonCounter += 1;
        this.toggleButtonInput.id = `switch${toggleButtonCounter.toString()}`;
        if (this.read == true) {
            this.toggleButtonInput.checked = true;
        } else {
            this.toggleButtonInput.checked = false;
        };
        // Create label child element for read-or-not
        this.toggleButtonLabel = document.createElement('LABEL');
        this.toggleButtonLabel.htmlFor = this.toggleButtonInput.id;
        this.toggleButtonLabel.innerText = 'Toggle';
        // Add read-or-not child elements to read-or-not
        this.readOrNotRead.appendChild(this.readStatus);
        this.readOrNotRead.appendChild(this.toggleButtonInput);
        this.readOrNotRead.appendChild(this.toggleButtonLabel);
        // Add book child elements to book element
        this.block.appendChild(this.xButton);
        this.block.appendChild(this.bookContents);
        this.block.appendChild(this.readOrNotRead);
        // Add book element to book section parent element
        bookSection.appendChild(this.block);
    };
};

let addBookToLibrary = function(book) {
};
// Toggle Button Functions
//
let displayMessage = function() {
    alert('pop goes the weasel');
}
// Event Listeners
//
toggleButton.addEventListener('click', change);