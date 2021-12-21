let register = {

    // (A) ATTACH REGISTER POPUP HTML
    init : function () {
         // (A1) REGISTER WRAPPER
        register.pWrap = document.createElement("div");
        register.pWrap.id = "register";
        document.body.appendChild(register.pWrap);
        
        // (A2) REGISTER BOX
        register.pBox = document.createElement("div");
        register.pBox.id = "register-box";
        register.pWrap.appendChild(register.pBox);
        
        // (A3) TITLE
        register.pTitle = document.createElement("h1");
        register.pTitle.id = "register-title";
        register.pTitle.innerHTML = 'Sign Up for Your Own Profile';
        register.pBox.appendChild(register.pTitle);

        // (A4) CREATE FORM
        register.pForm = document.createElement("form");
        register.pForm.action = "/";
        register.pForm.method = "get";
        register.pForm.setAttribute('autocomplete', 'off');

        // (A5) FORM FIELD ONE (FIRST NAME)
        register.pLabelOne = document.createElement("LABEL");
        register.pLabelOne.classList = "register-labels";
        register.pLabelOne.htmlFor = "register-input-one";
        register.pLabelOne.innerHTML = "First Name:"
        register.pForm.appendChild(register.pLabelOne);
        register.pInputOne = document.createElement("INPUT");
        register.pInputOne.classList = "register-inputs";
        register.pInputOne.id = "register-input-one";
        register.pInputOne.name = "register-input-one";
        register.pInputOne.placeholder = 'Enter your first name';
        register.pInputOne.setAttribute("type", "text");
        register.pInputOne.setAttribute("minlength", "1");
        register.pInputOne.setAttribute('required', 'true');
        register.pForm.appendChild(register.pInputOne);

        // (A6) FORM FIELD TWO (EMAIL)
        register.pLabelTwo = document.createElement("LABEL");
        register.pLabelTwo.classList = "register-labels";
        register.pLabelTwo.htmlFor = "register-input-two";
        register.pLabelTwo.innerHTML = "Email:"
        register.pForm.appendChild(register.pLabelTwo);
        register.pInputTwo = document.createElement("INPUT");
        register.pInputTwo.classList = "register-inputs";
        register.pInputTwo.id = "register-input-two";
        register.pInputTwo.name = "register-input-two";
        register.pInputTwo.placeholder = 'Enter your email address:';
        register.pInputTwo.setAttribute("type", "email");
        register.pInputTwo.setAttribute('required', 'true');
        register.pForm.appendChild(register.pInputTwo);

        // (A7) FORM FIELD THREE (PASSWORD)
        register.pLabelThree = document.createElement("LABEL");
        register.pLabelThree.classList = "register-labels";
        register.pLabelThree.htmlFor = "input-three";
        register.pLabelThree.innerHTML = "Password:"
        register.pForm.appendChild(register.pLabelThree);
        register.pInputThree = document.createElement("INPUT");
        register.pInputThree.classList = "register-inputs";
        register.pInputThree.id = "register-input-three";
        register.pInputThree.name = "register-input-three";
        register.pInputThree.placeholder = 'Enter your desired password';
        register.pInputThree.setAttribute("type", "text");
        register.pInputThree.setAttribute("minlength", "1");
        register.pInputThree.setAttribute('required', 'true');
        register.pForm.appendChild(register.pInputThree);

        // (A8) FORM SUBMIT BUTTON
        register.pSubmit = document.createElement("BUTTON");
        register.pSubmit.id = "register-submit";
        register.pSubmit.innerText = 'Register';
        register.pSubmit.setAttribute("type", "submit");
        register.pForm.appendChild(register.pSubmit);

        // (A9) APPEND FORM TO BOX
        register.pBox.appendChild(register.pForm);

        // (A10) CLOSE
        register.pClose = document.createElement("div");
        register.pClose.id = "register-close";
        register.pClose.innerHTML = "✕";
        register.pClose.onclick = register.close;
        register.pBox.appendChild(register.pClose);
    },

    // (B) OPEN REGISTER POPUP
    open : function () {
        register.pWrap.classList.add("open");
    },

  // (C) CLOSE REGISTER POPUP
    close : function () {
        register.pWrap.classList.remove("open");
    }
}

export { register };