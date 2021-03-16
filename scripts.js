// Inital Variables
//
let toggleButtonCounter = 0;
let bookIdCounter = 0;
let myLibrary = {};
// HTML Elements
//
let darkModeButton = document.getElementById('dark-mode-button');
let bookSection = document.getElementById('book-section');
let booksRead = document.getElementById('books-read');
let booksNotRead = document.getElementById('books-not-read');
let booksTotal = document.getElementById('books-total');
// Event Listeners
//
// Toggle Button Function
//
let changeReadStatus = function(event) {
    let bookItself = event.target.parentNode.parentNode;
    let toggleText = event.target.previousSibling;
    let bookObject = myLibrary[Number(bookItself.id)];
    if (bookObject.read == true) {
        bookItself.className = 'book-unread';
        toggleText.innerText = 'Mark As Read';
        bookObject.read = false;
        booksRead.innerText = (-1 + Number(booksRead.innerText)).toString();
        booksNotRead.innerText = (1 + Number(booksNotRead.innerText)).toString();
    } else {
        bookItself.className = 'book-read';
        toggleText.innerText = 'Mark As Unread';
        bookObject.read = true;
        booksRead.innerText = (1 + Number(booksRead.innerText)).toString();
        booksNotRead.innerText = (-1 + Number(booksNotRead.innerText)).toString();
    };    
};
// X Button Function
//
let deleteBookEntry = function(event) {
    let bookElement = event.target.parentNode;
    let bookId = Number(bookElement.id);
    if (myLibrary[bookId].read == true) {
        booksRead.innerText = (-1 + Number(booksRead.innerText)).toString();
    } else {
        booksNotRead.innerText = (-1 + Number(booksNotRead.innerText)).toString();
    }; 
    booksTotal.innerText = (-1 + Number(booksTotal.innerText)).toString();
    delete myLibrary[bookId];
    bookElement.remove();
};
// Dark Mode Function
//
let changeDarkMode = function(event) {

};
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
    bookIdCounter += 1;
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
    xButton.addEventListener('click', deleteBookEntry);
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
    toggleButtonInput.className = 'read-input';
    toggleButtonInput.id = `switch${toggleButtonCounter.toString()}`;
    if (this.read == true) {
        toggleButtonInput.checked = true;
    } else {
        toggleButtonInput.checked = false;
    };
    toggleButtonInput.addEventListener('click', changeReadStatus);
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
    // Update book stats
    if (this.read == true) {
        booksRead.innerText = (1 + Number(booksRead.innerText)).toString();
    } else {
        booksNotRead.innerText = (1 + Number(booksNotRead.innerText)).toString();
    };
    booksTotal.innerText = (1 + Number(booksTotal.innerText)).toString();
};
new Book('12 Rules for Life: An Antidote to Chaos', 'Jordan B. Peterson', '448', 'English', true)
new Book('Beyond Order: 12 More Rules For Life', 'Jordan B. Peterson', '432', 'English', false)