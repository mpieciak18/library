// Import Firebase functions
import { retrieveBooks, addBookToDb, delBookFromDb, changeReadDbField, returnReadField, createUser, signinUser } from './firebase.js';
import { renderLoginMenu } from './modules/components/loginMenu.js';
import { getAuth } from 'firebase/auth';

const auth = getAuth()

// Import Entry, Register, & Login Pop-Up Modules, Then Create Elements
import { entry } from './modules/popups/entry.js';
window.addEventListener("DOMContentLoaded", entry.init());
import { register } from './modules/popups/register.js';
window.addEventListener("DOMContentLoaded", register.init());
import { login } from './modules/popups/login.js';
window.addEventListener("DOMContentLoaded", login.init());

// Initialize variables
let loggedIn = false
let userId
let toggleButtonCounter = 0;
let bookIdCounter = 0;
let myLibrary = [];
const sortChildrenIndex = {
    'title': 0,
    'author': 1,
    'length': 2,
    'language': 3
};

// Attach auth state change listener, which updates login menu area
auth.onAuthStateChanged(async (user) => {
    if (user) {
        loggedIn = true
        removeAllChildren(document.getElementById('book-section'))
        clearLibLogStats()
        renderLoginMenu(loggedIn, user.email, () => auth.signOut())
        userId = user.uid
        await initBooksLoggedIn(userId)
        myLibrary = []
    } else {
        loggedIn = false
        removeAllChildren(document.getElementById('book-section'))
        clearLibLogStats()
        renderLoginMenu(loggedIn, login.open, register.open)
        userId = ''
        initBooksLoggedOut()
    }
})

// Pass registration form submission values to createUser
const newRegistration = (event) => {
    event.preventDefault()
    const email = event.target.children[1].value
    const password = event.target.children[3].value
    createUser(auth, email, password)
    register.close()
}

// Pass login form submission values to signinUser
const newLogin = (event) => {
    event.preventDefault()
    const email = event.target.children[1].value
    const password = event.target.children[3].value
    signinUser(auth, email, password)
    login.close()
}

// Initiliaze Local Storage Functions
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

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
const entryButton = document.getElementById('entry-button');
const navSection = document.getElementById('nav-section');
const favicon = document.getElementById('favicon');
const entryBox = document.getElementById('entry-box');
const registerBox = document.getElementById('register-box')
const loginBox = document.getElementById('login-box')

// Dark Mode Function
const changeDarkMode = function(event = null) {
    // Grab toggle status
    let buttonStatus
    if (event == null) {
        buttonStatus = darkModeButton.checked
    } else {
        buttonStatus = event.target.checked
    }
    // Change styling
    if (buttonStatus == true) {
        pageTitle.style.color = '#c4e5f3';
        pageLogo.src = 'images/logo-2.svg';
        favicon.href = 'images/logo-2.svg';
        libLog.style.borderColor = '#c4e5f3';
        libLogTitle.style.color = '#c4e5f3';
        libLogStats.style.color = '#c4e5f3';
        darkModeText.style.color = '#c4e5f3';
        pageBody.style.backgroundColor = 'rgb(25, 25, 25)';
        entryButton.style.boxShadow = 'rgb(10, 10, 10) 1px 1px 2px 1px';
        navSection.style.backgroundColor = 'rgb(30, 30, 30)';
        navSection.style.color = '#c4e5f3';
        for (let i = 0; i < bookBlocks.length; i++) {
            bookBlocks[i].style.boxShadow = 'rgb(10, 10, 10) 2px 2px 5px 1px';
        };
        entryBox.style.backgroundColor = 'rgb(35, 35, 35)';
        for (let i = 0; i < entryBox.children.length; i++) {
            entryBox.children[i].style.color = '#c4e5f3';
        };
        registerBox.style.backgroundColor = 'rgb(35, 35, 35)';
        for (let i = 0; i < registerBox.children.length; i++) {
            registerBox.children[i].style.color = '#c4e5f3';
        };
        loginBox.style.backgroundColor = 'rgb(35, 35, 35)';
        for (let i = 0; i < loginBox.children.length; i++) {
            loginBox.children[i].style.color = '#c4e5f3';
        };
        const welcomeMessage = document.getElementById('welcome-message')
        if (welcomeMessage) {
            welcomeMessage.style.color = '#c4e5f3'
        }
    } else {
        pageTitle.style.color = '#164460';
        pageLogo.src = 'images/logo.svg';
        favicon.href = 'images/logo.svg';
        libLog.style.borderColor = '#164460';
        libLogTitle.style.color = '#164460';
        libLogStats.style.color = '#164460';
        darkModeText.style.color = '#164460';
        pageBody.style.backgroundColor = 'white';
        entryButton.style.boxShadow = 'rgb(180, 180, 180) 1px 1px 2px 1px';
        navSection.style.backgroundColor = 'rgb(240, 240, 240)';
        navSection.style.color = '#164460';
        for (let i = 0; i < bookBlocks.length; i++) {
            bookBlocks[i].style.boxShadow = 'grey 2px 2px 5px 1px';
        };
        entryBox.style.backgroundColor = 'white';
        for (let i = 0; i < entryBox.children.length; i++) {
            entryBox.children[i].style.color = '#164460';
        };
        registerBox.style.backgroundColor = 'white';
        for (let i = 0; i < registerBox.children.length; i++) {
            registerBox.children[i].style.color = '#164460';
        };
        loginBox.style.backgroundColor = 'white';
        for (let i = 0; i < loginBox.children.length; i++) {
            loginBox.children[i].style.color = '#164460';
        };
        const welcomeMessage = document.getElementById('welcome-message')
        if (welcomeMessage) {
            welcomeMessage.style.color = '#164460'
        }
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
const changeReadStatus = async function(event) {
    let bookElement = event.target.parentNode.parentNode;
    let toggleText = event.target.previousSibling;
    let isRead = await checkReadStatus(bookElement)
    if (isRead == true) {
        bookElement.className = 'book-unread';
        toggleText.innerText = 'Mark As Read';
        if (loggedIn == true) {
            changeReadDbField(userId, bookElement.id, false)
        } else {
            let bookObject = findThisBook(bookElement.id);
            bookObject.read = false;
            localStorage.setObj(0, myLibrary);
        }
        booksRead.innerText = (-1 + Number(booksRead.innerText)).toString();
        booksNotRead.innerText = (1 + Number(booksNotRead.innerText)).toString();
    } else {
        bookElement.className = 'book-read';
        toggleText.innerText = 'Mark As Unread';
        if (loggedIn == true) {
            changeReadDbField(userId, bookElement.id, true)
        } else {
            let bookObject = findThisBook(bookElement.id)
            bookObject.read = true;
            localStorage.setObj(0, myLibrary);
        }
        booksRead.innerText = (1 + Number(booksRead.innerText)).toString();
        booksNotRead.innerText = (-1 + Number(booksNotRead.innerText)).toString();
    };    
};

// Check read status of book object
const checkReadStatus = (bookElement) => {
    if (loggedIn == true) {
        return returnReadField(userId, bookElement.id)
    } else {
        let bookObject = findThisBook(bookElement.id)
        return bookObject.read
    }
}

// X Button Function
const deleteBookEntry = function(event) {
    let bookElement = event.target.parentNode;
    let isRead = bookElement.children[2].children[1].checked
    if (isRead == true) {
        booksRead.innerText = (-1 + Number(booksRead.innerText)).toString();
    } else {
        booksNotRead.innerText = (-1 + Number(booksNotRead.innerText)).toString();
    }; 
    booksTotal.innerText = (-1 + Number(booksTotal.innerText)).toString();
    if (loggedIn == true) {
        delBookFromDb(userId, bookElement.id)
    } else {
        let bookObject = findThisBook(bookElement.id);
        let indexOfObject = myLibrary.indexOf(bookObject);
        myLibrary.splice(indexOfObject, 1);
        localStorage.setObj(0, myLibrary);
    }
    bookElement.remove();
};

// Book Constructor
// Scenario 1: user is not logged in, and new book is added OR book is rendered from local storage
// (ie, loggedIn == false && id == null)
// Scenario 2: user is logged in, and book is rendered from firestore (either upon login or addition)
// (ie, loggedIn == true && id != null)
const Book = function(title, author, length, language, read, id=null) {
    // Initialize object properties
    this.title = title;
    this.author = author;
    this.length = length;
    this.language = language;
    this.read = read;
    this.id;
    this.toggleId = toggleButtonCounter;
    toggleButtonCounter += 1;
    // Scenario 1
    if (loggedIn == false){
        // Set book id to generic book counter, and increase counter
        this.id = bookIdCounter;
        bookIdCounter += 1;
        // Add object to book library array and local storage
        myLibrary.push(this);
        localStorage.setObj(0, myLibrary);
    // Scenario 2
    } else if (loggedIn == true && id != null) {
        // Set book id to passed id and add object to book library array
        this.id = id;
        // myLibrary.push(this);
    }
    // Create new book element for this Book instance
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
    bookPages.innerText = `Length: ${thisBook.length} Pages`;
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
const newBookFromForm = async function(event) {
    event.preventDefault();
    let title = document.getElementById('entry-input-one').value;
    let author = document.getElementById('entry-input-two').value;
    let length = document.getElementById('entry-input-three').value;
    let language = document.getElementById('entry-input-four').value;
    let read = document.getElementById('entry-input-five').checked;
    // if user is logged in, add to db THEN create DOM object
    // else, create DOM object
    if (loggedIn == true) {
        const book = {title: title, author: author, length: length, language: language, read: read}
        const id = addBookToDb(userId, book)
        new Book(title, author, length, language, read, id)
    } else {
        new Book(title, author, length, language, read)
    }
    entry.close();
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
register.pForm.addEventListener('submit', newRegistration)
login.pForm.addEventListener('submit', newLogin)
darkModeButton.addEventListener('click', changeDarkMode);
entryButton.firstChild.addEventListener('click', entry.open);
entry.pForm.addEventListener('submit', newBookFromForm);
sortByDropdown.addEventListener('change', sortByChange);
ascDescDropdown.addEventListener('change', ascDescChange);

// Clear lib-log stats
const clearLibLogStats = () => {
    booksRead.innerText = '0'
    booksNotRead.innerText = '0'
    booksTotal.innerText = '0'
}

// Remove all child nodes from a parent node
const removeAllChildren = (parent) => {
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

// Initialize book objects & render to DOM while logged out
const initBooksLoggedOut = () => {
    // If local storage is not empty, render books from local storage
    if (localStorage.getObj(0) != null && localStorage.getObj(0).length != 0) {
        let library = localStorage.getObj(0);
        for (let i = 0; i < library.length; i++) {
            const book = library[i]
            console.log(book)
            new Book(book.title, book.author, book.length, book.language, book.read)
        };
    // If local storage is empty, add & render default example books
    } else {
        new Book('12 Rules for Life: An Antidote to Chaos', 'Jordan B. Peterson', '448', 'English', true);
        new Book('Beyond Order: 12 More Rules For Life', 'Jordan B. Peterson', '432', 'English', false);
        new Book('Fear and Loathing in Las Vegas', 'Hunter S. Thompson', '204', 'English', false);
    };
    changeDarkMode()
}

// Initialize book objects & render to DOM while logged in
const initBooksLoggedIn = async (userId) => {
    // Retrieve array of book objects from user's collection in firestore
    const library = await retrieveBooks(userId)
    // Add & render books from retrieved array of book objects
    for (let i = 0; i < library.length; i++) {
        const book = library[i]
        new Book(book.title, book.author, book.length, book.language, book.read, book.id)
    };
    changeDarkMode()
}