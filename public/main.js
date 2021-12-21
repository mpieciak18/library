/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/modules/popup.js
let pop = {

  // (A) ATTACH POPUP HTML
  init : function () {
    // (A1) POPUP WRAPPER
    pop.pWrap = document.createElement("div");
    pop.pWrap.id = "pop-up";
    document.body.appendChild(pop.pWrap);
    
    // (A2) POPUP BOX
    pop.pBox = document.createElement("div");
    pop.pBox.id = "pop-box";
    pop.pWrap.appendChild(pop.pBox);
    
    // (A3) TITLE
    pop.pTitle = document.createElement("h1");
    pop.pTitle.id = "pop-title";
    pop.pTitle.innerHTML = 'Add a New Book Entry';
    pop.pBox.appendChild(pop.pTitle);

    // (A4) CREATE FORM
    pop.pForm = document.createElement("form");
    pop.pForm.action = "/";
    pop.pForm.method = "get";
    pop.pForm.setAttribute('autocomplete', 'off');

    // (A5) FORM FIELD ONE (TITLE)
    pop.pLabelOne = document.createElement("LABEL");
    pop.pLabelOne.classList = "pop-labels";
    pop.pLabelOne.htmlFor = "input-one";
    pop.pLabelOne.innerHTML = "Title:"
    pop.pForm.appendChild(pop.pLabelOne);
    pop.pInputOne = document.createElement("INPUT");
    pop.pInputOne.classList = "pop-inputs";
    pop.pInputOne.id = "input-one";
    pop.pInputOne.name = "input-one";
    pop.pInputOne.placeholder = 'Enter the book\'s title';
    pop.pInputOne.setAttribute("type", "text");
    pop.pInputOne.setAttribute("minlength", "1");
    pop.pInputOne.required = true;
    pop.pForm.appendChild(pop.pInputOne);

    // (A6) FORM FIELD TWO (AUTHOR)
    pop.pLabelTwo = document.createElement("LABEL");
    pop.pLabelTwo.classList = "pop-labels";
    pop.pLabelTwo.htmlFor = "input-two";
    pop.pLabelTwo.innerHTML = "Author:"
    pop.pForm.appendChild(pop.pLabelTwo);
    pop.pInputTwo = document.createElement("INPUT");
    pop.pInputTwo.required = true;
    pop.pInputTwo.classList = "pop-inputs";
    pop.pInputTwo.id = "input-two";
    pop.pInputTwo.name = "input-two";
    pop.pInputTwo.placeholder = 'Enter the book\'s author';
    pop.pInputTwo.setAttribute("type", "text");
    pop.pInputTwo.setAttribute("minlength", "1");
    pop.pInputTwo.setAttribute('required', 'true');
    pop.pForm.appendChild(pop.pInputTwo);

    // (A7) FORM FIELD THREE (LENGTH)
    pop.pLabelThree = document.createElement("LABEL");
    pop.pLabelThree.classList = "pop-labels";
    pop.pLabelThree.htmlFor = "input-three";
    pop.pLabelThree.innerHTML = "Total Pages:"
    pop.pForm.appendChild(pop.pLabelThree);
    pop.pInputThree = document.createElement("INPUT");
    pop.pInputThree.required = true;
    pop.pInputThree.setAttribute("type", "number");
    pop.pInputThree.classList = "pop-inputs";
    pop.pInputThree.id = "input-three";
    pop.pInputThree.name = "input-three";
    pop.pInputThree.placeholder = 'Enter the book\'s total pages';
    pop.pInputThree.setAttribute('required', 'true');
    pop.pInputThree.setAttribute("minlength", "1");
    pop.pForm.appendChild(pop.pInputThree);

    // (A8) FORM FIELD FOUR (LANGUAGE)
    pop.pLabelFour = document.createElement("LABEL");
    pop.pLabelFour.classList = "pop-labels";
    pop.pLabelFour.htmlFor = "input-four";
    pop.pLabelFour.innerHTML = "Language:"
    pop.pForm.appendChild(pop.pLabelFour);
    pop.pInputFour = document.createElement("INPUT");
    pop.pInputFour.required = true;
    pop.pInputFour.classList = "pop-inputs";
    pop.pInputFour.id = "input-four";
    pop.pInputFour.name = "input-four";
    pop.pInputFour.placeholder = 'Enter the book\'s language';
    pop.pInputFour.setAttribute("type", "text");
    pop.pInputFour.setAttribute('required', 'true')
    pop.pInputFour.setAttribute("minlength", "1");
    pop.pForm.appendChild(pop.pInputFour);

    // (A9) FORM RADIO OPTIONS (READ/UNREAD)
    pop.pRadioBox = document.createElement("div");
    pop.pRadioBox.id = 'radio-box';
    pop.pInputFive = document.createElement("INPUT");
    pop.pInputFive.classList = "pop-radio-inputs";
    pop.pInputFive.id = "input-five";
    pop.pInputFive.name = "read-vs-unread";
    pop.pInputFive.checked = "true";
    pop.pInputFive.value = "read";
    pop.pInputFive.setAttribute("type", "radio");
    pop.pRadioBox.appendChild(pop.pInputFive);
    pop.pLabelFive = document.createElement("LABEL");
    pop.pLabelFive.classList = "pop-radio-labels";
    pop.pLabelFive.htmlFor = "input-five";
    pop.pLabelFive.innerHTML = "Read"
    pop.pRadioBox.appendChild(pop.pLabelFive);
    pop.pInputSix = document.createElement("INPUT");
    pop.pInputSix.classList = "pop-radio-inputs";
    pop.pInputSix.id = "input-six";
    pop.pInputSix.name = "read-vs-unread";
    pop.pInputSix.value = "unread";
    pop.pInputSix.setAttribute("type", "radio");
    pop.pRadioBox.appendChild(pop.pInputSix);
    pop.pLabelSix = document.createElement("LABEL");
    pop.pLabelSix.classList = "pop-radio-labels";
    pop.pLabelSix.htmlFor = "input-six";
    pop.pLabelSix.innerHTML = "Unread"
    pop.pRadioBox.appendChild(pop.pLabelSix);
    pop.pForm.appendChild(pop.pRadioBox);

     // (A10) FORM SUBMIT BUTTON
     pop.pSubmit = document.createElement("BUTTON");
     pop.pSubmit.id = "button";
     pop.pSubmit.innerText = 'Add New Book';
     pop.pSubmit.setAttribute("type", "submit");
     pop.pForm.appendChild(pop.pSubmit);

    // (A11) APPEND FORM TO BOX

    pop.pBox.appendChild(pop.pForm);
    
    // (A12) CLOSE
    pop.pClose = document.createElement("div");
    pop.pClose.id = "pop-close";
    pop.pClose.innerHTML = "✕";
    pop.pClose.onclick = pop.close;
    pop.pBox.appendChild(pop.pClose);
  },

  // (B) OPEN POPUP
  open : function () {
    pop.pWrap.classList.add("open");
  },

  // (C) CLOSE POPUP
  close : function () {
    pop.pWrap.classList.remove("open");
  }
};


;// CONCATENATED MODULE: ./src/app.js
// Import Pop-Up Module & Create Element

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
    event.preventDefault();
    let title = document.getElementById('input-one').value;
    let author = document.getElementById('input-two').value;
    let pages = document.getElementById('input-three').value;
    let language = document.getElementById('input-four').value;
    let read = document.getElementById('input-five').checked;
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
pop.pForm.addEventListener('submit', newBookFromForm);
sortByDropdown.addEventListener('change', sortByChange);
ascDescDropdown.addEventListener('change', ascDescChange);

// Initialize Book Instances
if (localStorage.getObj(0) != null && localStorage.getObj(0).length != 0) {
    let newLib = localStorage.getObj(0);
    for (let i = 0; i < newLib.length; i++) {
        new Book(newLib[i].title, newLib[i].author, newLib[i].pages, newLib[i].language, newLib[i].read)
      };
} else {
    new Book('12 Rules for Life: An Antidote to Chaos', 'Jordan B. Peterson', '448', 'English', true);
    new Book('Beyond Order: 12 More Rules For Life', 'Jordan B. Peterson', '432', 'English', false);
    new Book('Fear and Loathing in Las Vegas', 'Hunter S. Thompson', '204', 'English', false);
};
/******/ })()
;