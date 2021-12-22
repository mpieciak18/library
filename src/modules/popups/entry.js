let entry = {

  // (A) ATTACH NEW ENTRY HTML
  init : function () {
    // (A1) NEW ENTRY WRAPPER
    entry.pWrap = document.createElement("div");
    entry.pWrap.id = "entry";
    document.body.appendChild(entry.pWrap);
    
    // (A2) NEW ENTRY BOX
    entry.pBox = document.createElement("div");
    entry.pBox.id = "entry-box";
    entry.pWrap.appendChild(entry.pBox);
    
    // (A3) TITLE
    entry.pTitle = document.createElement("h1");
    entry.pTitle.id = "entry-title";
    entry.pTitle.innerHTML = 'Add a New Book Entry';
    entry.pBox.appendChild(entry.pTitle);

    // (A4) CREATE FORM
    entry.pForm = document.createElement("form");
    entry.pForm.action = "/";
    entry.pForm.method = "get";
    entry.pForm.setAttribute('autocomplete', 'off');

    // (A5) FORM FIELD ONE (TITLE)
    entry.pLabelOne = document.createElement("LABEL");
    entry.pLabelOne.classList = "entry-labels";
    entry.pLabelOne.htmlFor = "entry-input-one";
    entry.pLabelOne.innerHTML = "Title:"
    entry.pForm.appendChild(entry.pLabelOne);
    entry.pInputOne = document.createElement("INPUT");
    entry.pInputOne.classList = "entry-inputs";
    entry.pInputOne.id = "entry-input-one";
    entry.pInputOne.name = "entry-input-one";
    entry.pInputOne.placeholder = 'Enter the book\'s title';
    entry.pInputOne.setAttribute("type", "text");
    entry.pInputOne.setAttribute("minlength", "1");
    entry.pInputOne.required = true;
    entry.pForm.appendChild(entry.pInputOne);

    // (A6) FORM FIELD TWO (AUTHOR)
    entry.pLabelTwo = document.createElement("LABEL");
    entry.pLabelTwo.classList = "entry-labels";
    entry.pLabelTwo.htmlFor = "entry-input-two";
    entry.pLabelTwo.innerHTML = "Author:"
    entry.pForm.appendChild(entry.pLabelTwo);
    entry.pInputTwo = document.createElement("INPUT");
    entry.pInputTwo.required = true;
    entry.pInputTwo.classList = "entry-inputs";
    entry.pInputTwo.id = "entry-input-two";
    entry.pInputTwo.name = "entry-input-two";
    entry.pInputTwo.placeholder = 'Enter the book\'s author';
    entry.pInputTwo.setAttribute("type", "text");
    entry.pInputTwo.setAttribute("minlength", "1");
    entry.pInputTwo.setAttribute('required', 'true');
    entry.pForm.appendChild(entry.pInputTwo);

    // (A7) FORM FIELD THREE (LENGTH)
    entry.pLabelThree = document.createElement("LABEL");
    entry.pLabelThree.classList = "entry-labels";
    entry.pLabelThree.htmlFor = "entry-input-three";
    entry.pLabelThree.innerHTML = "Total Pages:"
    entry.pForm.appendChild(entry.pLabelThree);
    entry.pInputThree = document.createElement("INPUT");
    entry.pInputThree.required = true;
    entry.pInputThree.setAttribute("type", "number");
    entry.pInputThree.classList = "entry-inputs";
    entry.pInputThree.id = "entry-input-three";
    entry.pInputThree.name = "entry-input-three";
    entry.pInputThree.placeholder = 'Enter the book\'s total pages';
    entry.pInputThree.setAttribute('required', 'true');
    entry.pInputThree.setAttribute("minlength", "1");
    entry.pForm.appendChild(entry.pInputThree);

    // (A8) FORM FIELD FOUR (LANGUAGE)
    entry.pLabelFour = document.createElement("LABEL");
    entry.pLabelFour.classList = "entry-labels";
    entry.pLabelFour.htmlFor = "entry-input-four";
    entry.pLabelFour.innerHTML = "Language:"
    entry.pForm.appendChild(entry.pLabelFour);
    entry.pInputFour = document.createElement("INPUT");
    entry.pInputFour.required = true;
    entry.pInputFour.classList = "entry-inputs";
    entry.pInputFour.id = "entry-input-four";
    entry.pInputFour.name = "entry-input-four";
    entry.pInputFour.placeholder = 'Enter the book\'s language';
    entry.pInputFour.setAttribute("type", "text");
    entry.pInputFour.setAttribute('required', 'true')
    entry.pInputFour.setAttribute("minlength", "1");
    entry.pForm.appendChild(entry.pInputFour);

    // (A9) FORM RADIO OPTIONS (READ/UNREAD)
    entry.pRadioBox = document.createElement("div");
    entry.pRadioBox.id = 'entry-radio-box';
    entry.pInputFive = document.createElement("INPUT");
    entry.pInputFive.classList = "entry-radio-inputs";
    entry.pInputFive.id = "entry-input-five";
    entry.pInputFive.name = "read-vs-unread";
    entry.pInputFive.checked = "true";
    entry.pInputFive.value = "read";
    entry.pInputFive.setAttribute("type", "radio");
    entry.pRadioBox.appendChild(entry.pInputFive);
    entry.pLabelFive = document.createElement("LABEL");
    entry.pLabelFive.classList = "entry-radio-labels";
    entry.pLabelFive.htmlFor = "entry-input-five";
    entry.pLabelFive.innerHTML = "Read"
    entry.pRadioBox.appendChild(entry.pLabelFive);
    entry.pInputSix = document.createElement("INPUT");
    entry.pInputSix.classList = "entry-radio-inputs";
    entry.pInputSix.id = "entry-input-six";
    entry.pInputSix.name = "read-vs-unread";
    entry.pInputSix.value = "unread";
    entry.pInputSix.setAttribute("type", "radio");
    entry.pRadioBox.appendChild(entry.pInputSix);
    entry.pLabelSix = document.createElement("LABEL");
    entry.pLabelSix.classList = "entry-radio-labels";
    entry.pLabelSix.htmlFor = "entry-input-six";
    entry.pLabelSix.innerHTML = "Unread"
    entry.pRadioBox.appendChild(entry.pLabelSix);
    entry.pForm.appendChild(entry.pRadioBox);

     // (A10) FORM SUBMIT BUTTON
     entry.pSubmit = document.createElement("BUTTON");
     entry.pSubmit.id = "entry-submit";
     entry.pSubmit.innerText = 'Add New Book';
     entry.pSubmit.setAttribute("type", "submit");
     entry.pForm.appendChild(entry.pSubmit);

    // (A11) APPEND FORM TO BOX

    entry.pBox.appendChild(entry.pForm);
    
    // (A12) CLOSE
    entry.pClose = document.createElement("div");
    entry.pClose.id = "entry-close";
    entry.pClose.innerHTML = "✕";
    entry.pClose.onclick = entry.close;
    entry.pBox.appendChild(entry.pClose);
  },

  // (B) OPEN NEW ENTRY
  open : function () {
    entry.pWrap.classList.add("open");
  },

  // (C) CLOSE NEW ENTRY
  close : function () {
    entry.pWrap.classList.remove("open");
  }
};

export { entry };