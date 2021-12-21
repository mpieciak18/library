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

export { pop };