// Import Pop-Up Module & Create Element
import { pop } from './modules/popup.js';
window.addEventListener("DOMContentLoaded", pop.init());

// Initiliaze Local Storage Functions
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

// Inital Variables
let toggleButtonCounter = 0;
let bookIdCounter = 0;
let myLibrary = [];
const sortChildrenIndex = {
    'title': 0,
    'author': 1,
    'length': 2,
    'language': 3
};

// HTML Element for book section
const bookSection = document.getElementById('book-section');

// HTML Elements for Book Counter
const booksRead = document.getElementById('books-read');
const booksNotRead = document.getElementById('books-not-read');
const booksTotal = document.getElementById('books-total');

// HTML Elements for Sorting
const sortByDropdown = document.getElementById('sort-by');
const sortByValue = sortByDropdown.value;
const ascDescDropdown = document.getElementById('asc-desc');
const ascDescValue = ascDescDropdown.value;

// HTML Elements for Dark Mode
const darkModeButton = document.getElementById('dark-mode-button');
const pageTitle = document.getElementById('title');
const pageLogo = document.getElementById('logo');
const libLog = document.getElementById('lib-log');
const libLogTitle = document.getElementById('lib-log-title');
const libLogStats = document.getElementById('lib-log-stats');
const darkModeText = document.getElementById('dark-mode');
const pageBody = document.body;
const bookBlocks = bookSection.children;
const popupButton = document.getElementById('popup-button');
const navSection = document.getElementById('nav-section');
const favicon = document.getElementById('favicon');
const popupBox = document.getElementById('pop-box');

// Dark Mode Function
const changeDarkMode = function(event) {
    if (event.target.checked) {
        pageTitle.style.color = '#c4e5f3';
        pageLogo.src = 'images/logo-2.svg';
        favicon.href = 'images/logo-2.svg';
        libLog.style.borderColor = '#c4e5f3';
        libLogTitle.style.color = '#c4e5f3';
        libLogStats.style.color = '#c4e5f3';
        darkModeText.style.color = '#c4e5f3';
        pageBody.style.backgroundColor = 'rgb(25, 25, 25)';
        popupButton.style.boxShadow = 'rgb(10, 10, 10) 1px 1px 2px 1px';
        navSection.style.backgroundColor = 'rgb(30, 30, 30)';
        navSection.style.color = '#c4e5f3';
        for (let i = 0; i < bookBlocks.length; i++) {
            bookBlocks[i].style.boxShadow = 'rgb(10, 10, 10) 2px 2px 5px 1px';
        };
        popupBox.style.backgroundColor = 'rgb(35, 35, 35)';
        for (let i = 0; i < popupBox.children.length; i++) {
            popupBox.children[i].style.color = '#c4e5f3';
        };
    } else {
        pageTitle.style.color = '#164460';
        pageLogo.src = 'images/logo.svg';
        favicon.href = 'images/logo.svg';
        libLog.style.borderColor = '#164460';
        libLogTitle.style.color = '#164460';
        libLogStats.style.color = '#164460';
        darkModeText.style.color = '#164460';
        pageBody.style.backgroundColor = 'white';
        popupButton.style.boxShadow = 'rgb(180, 180, 180) 1px 1px 2px 1px';
        navSection.style.backgroundColor = 'rgb(240, 240, 240)';
        navSection.style.color = '#164460';
        for (let i = 0; i < bookBlocks.length; i++) {
            bookBlocks[i].style.boxShadow = 'grey 2px 2px 5px 1px';
        };
        popupBox.style.backgroundColor = 'white';
        for (let i = 0; i < popupBox.children.length; i++) {
            popupBox.children[i].style.color = '#164460';
        };
    };
};

// Return Book Object by Element ID Function
const findThisBook = function(elementId) {
    return myLibrary.find(function(book) {
        if (book.id == Number(elementId)) {
            return true;
        };
    });
};

// Toggle Button Function
const changeReadStatus = function(event) {
    let bookItself = event.target.parentNode.parentNode;
    let toggleText = event.target.previousSibling;
    let bookObject = findThisBook(bookItself.id);
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
const deleteBookEntry = function(event) {
    let bookElement = event.target.parentNode;
    let bookObject = findThisBook(bookElement.id);
    let indexOfObject = myLibrary.indexOf(bookObject);
    if (bookObject.read == true) {
        booksRead.innerText = (-1 + Number(booksRead.innerText)).toString();
    } else {
        booksNotRead.innerText = (-1 + Number(booksNotRead.innerText)).toString();
    }; 
    booksTotal.innerText = (-1 + Number(booksTotal.innerText)).toString();
    myLibrary.splice(indexOfObject, 1);
    localStorage.setObj(0, myLibrary);
    bookElement.remove();
};

// Book Constructor
const Book = function(title, author, pages, language, read) {
    // Initialize object properties
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.read = read;
    this.id = bookIdCounter;
    bookIdCounter += 1;
    this.toggleId = toggleButtonCounter;
    toggleButtonCounter += 1;
    // Add object to book library array
    myLibrary.push(this);
    localStorage.setObj(0, myLibrary);
    // Create new book element
    createBookElement(this);
    // Sort all book elements
    sortBookElements();
};

// New Book Element Function
const createBookElement = function(thisBook) {
    // Create book element
    thisBook.block = document.createElement('div');
    if (thisBook.read == true) {
        thisBook.block.className = 'book-read';
    } else {
        thisBook.block.className = 'book-unread';
    };
    thisBook.block.id = thisBook.id;
    // Create x-button child element
    let xButton = document.createElement('div');
    xButton.className = 'x-button';
    xButton.innerText = '✕';
    xButton.addEventListener('click', deleteBookEntry);
    // Create book-contents child element
    let bookContents = document.createElement('div');
    bookContents.className = 'book-contents';
    // Create child elements for book-contents
    let bookTitle = document.createElement('h3');
    bookTitle.className = 'book-title';
    bookTitle.innerText = thisBook.title;
    let bookAuthor = document.createElement('p');
    bookAuthor.innerText = `By: ${thisBook.author}`;
    let bookPages = document.createElement('p');
    bookPages.innerText = `Length: ${thisBook.pages} Pages`;
    let bookLanguage = document.createElement('p');
    bookLanguage.innerText = `Language: ${thisBook.language}`;
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
    if (thisBook.read == true) {
        readStatus.innerText = 'Mark As Unread';
    } else {
        readStatus.innerText = 'Mark As Read';
    };
    // Create input child element for read-or-not
    let toggleButtonInput = document.createElement('INPUT');
    toggleButtonInput.setAttribute('type', 'checkbox');
    toggleButtonInput.id = `switch${thisBook.toggleId.toString()}`;
    toggleButtonInput.className = 'read-input toggle-input';
    if (thisBook.read == true) {
        toggleButtonInput.checked = true;
    } else {
        toggleButtonInput.checked = false;
    };
    toggleButtonInput.addEventListener('click', changeReadStatus);
    // Create label child element for read-or-not
    let toggleButtonLabel = document.createElement('LABEL');
    toggleButtonLabel.className = 'toggle-label';
    toggleButtonLabel.htmlFor = toggleButtonInput.id;
    toggleButtonLabel.innerText = 'Toggle';
    // toggleButtonLabel.addEventListener('click', changeReadStatus);
    // Add read-or-not child elements to read-or-not
    readOrNotRead.appendChild(readStatus);
    readOrNotRead.appendChild(toggleButtonInput);
    readOrNotRead.appendChild(toggleButtonLabel);
    // Add book child elements to book element
    thisBook.block.appendChild(xButton);
    thisBook.block.appendChild(bookContents);
    thisBook.block.appendChild(readOrNotRead);
    // Add book element to book section parent element
    bookSection.appendChild(thisBook.block);
    // Update book stats
    if (thisBook.read == true) {
        booksRead.innerText = (1 + Number(booksRead.innerText)).toString();
    } else {
        booksNotRead.innerText = (1 + Number(booksNotRead.innerText)).toString();
    };
    booksTotal.innerText = (1 + Number(booksTotal.innerText)).toString();
};

// Sort Book Elements Function
const sortBookElements = function() {
    let booksToSort = bookSection.children;
    booksToSort = Array.prototype.slice.call(booksToSort);
    let sortReturn = null;
    if (ascDescValue == 'ascending') {
        sortReturn = 1;
    } else {
        sortReturn = -1;
    };
    let sortIndex = sortChildrenIndex[sortByValue]
    booksToSort.sort(function(a, b) {
        let currentElement, nextElement = null;
        if (sortIndex != 2) {
            currentElement = a.children[1].children[sortIndex].innerHTML;
            nextElement = b.children[1].children[sortIndex].innerHTML;
        } else {
            currentElement = Number(a.children[1].children[sortIndex].innerHTML.slice(8, -6));
            nextElement = Number(b.children[1].children[sortIndex].innerHTML.slice(8, -6));
        };
        if (currentElement > nextElement) {
            return sortReturn;
        } else {
            return -(sortReturn);
        };
    });
    bookSection.innerHTML = '';
    for (let i = 0; i < booksToSort.length; i++) {
        bookSection.append(booksToSort[i]);
    };
}; 

// Form Submission Function
const newBookFromForm = function(event) {
    let title = event.target.parentNode[0].value;
    let author = event.target.parentNode[1].value;
    let pages = event.target.parentNode[2].value;
    let language = event.target.parentNode[3].value;
    let read = event.target.parentNode[4].checked;
    new Book(title, author, pages, language, read);
    pop.close();
};

const sortByChange = function(event) {
    sortByValue = event.target.value;
    sortBookElements();
};
const ascDescChange = function(event) {
    ascDescValue = event.target.value;
    sortBookElements();
}

// Event Listeners
darkModeButton.addEventListener('click', changeDarkMode);
popupButton.firstChild.addEventListener('click', pop.open);
pop.pSubmit.addEventListener('click', newBookFromForm);
sortByDropdown.addEventListener('change', sortByChange);
ascDescDropdown.addEventListener('change', ascDescChange);

// Initialize Book Instances
if (localStorage.getObj(0) != null && localStorage.getObj(0).length != 0) {
    console.log(localStorage.getObj(0));
    let newLib = localStorage.getObj(0);
    for (let i = 0; i < newLib.length; i++) {
        new Book(newLib[i].title, newLib[i].author, newLib[i].pages, newLib[i].language, newLib[i].read)
      };
} else {
    new Book('12 Rules for Life: An Antidote to Chaos', 'Jordan B. Peterson', '448', 'English', true);
    new Book('Beyond Order: 12 More Rules For Life', 'Jordan B. Peterson', '432', 'English', false);
    new Book('Fear and Loathing in Las Vegas', 'Hunter S. Thompson', '204', 'English', false);
};