let login = {

    // (A) ATTACH LOGIN POPUP HTML
    init : function () {
         // (A1) LOGIN WRAPPER
        login.pWrap = document.createElement("div");
        login.pWrap.id = "login";
        document.body.appendChild(login.pWrap);
        
        // (A2) LOGIN BOX
        login.pBox = document.createElement("div");
        login.pBox.id = "login-box";
        login.pWrap.appendChild(login.pBox);
        
        // (A3) TITLE
        login.pTitle = document.createElement("h1");
        login.pTitle.id = "login-title";
        login.pTitle.innerHTML = 'Sign In To Your Profile';
        login.pBox.appendChild(login.pTitle);

        // (A4) CREATE FORM
        login.pForm = document.createElement("form");
        login.pForm.action = "/";
        login.pForm.method = "get";
        login.pForm.setAttribute('autocomplete', 'off');

        // (A5) FORM FIELD ONE (EMAIL)
        login.pLabelOne = document.createElement("LABEL");
        login.pLabelOne.classList = "login-labels";
        login.pLabelOne.htmlFor = "login-input-one";
        login.pLabelOne.innerHTML = "Email:"
        login.pForm.appendChild(login.pLabelOne);
        login.pInputOne = document.createElement("INPUT");
        login.pInputOne.classList = "login-inputs";
        login.pInputOne.id = "login-input-one";
        login.pInputOne.name = "login-input-one";
        login.pInputOne.placeholder = 'Enter your email';
        login.pInputOne.setAttribute("type", "email");
        login.pInputOne.setAttribute('required', 'true');
        login.pForm.appendChild(login.pInputOne);

        // (A6) FORM FIELD TWO (PASSWORD)
        login.pLabelTwo = document.createElement("LABEL");
        login.pLabelTwo.classList = "login-labels";
        login.pLabelTwo.htmlFor = "login-input-two";
        login.pLabelTwo.innerHTML = "Password:"
        login.pForm.appendChild(login.pLabelTwo);
        login.pInputTwo = document.createElement("INPUT");
        login.pInputTwo.classList = "login-inputs";
        login.pInputTwo.id = "login-input-two";
        login.pInputTwo.name = "login-input-two";
        login.pInputTwo.placeholder = 'Enter your password:';
        login.pInputTwo.setAttribute("type", "text");
        login.pInputTwo.setAttribute('minlength', '1')
        login.pInputTwo.setAttribute('required', 'true');
        login.pForm.appendChild(login.pInputTwo);

        // (A8) FORM SUBMIT BUTTON
        login.pSubmit = document.createElement("BUTTON");
        login.pSubmit.id = "login-submit";
        login.pSubmit.innerText = 'Login';
        login.pSubmit.setAttribute("type", "submit");
        login.pForm.appendChild(login.pSubmit);

        // (A9) APPEND FORM TO BOX
        login.pBox.appendChild(login.pForm);

        // (A10) CLOSE
        login.pClose = document.createElement("div");
        login.pClose.id = "login-close";
        login.pClose.innerHTML = "✕";
        login.pClose.onclick = login.close;
        login.pBox.appendChild(login.pClose);
    },

    // (B) OPEN LOGIN POPUP
    open : function () {
        login.pWrap.classList.add("open");
    },

  // (C) CLOSE LOGIN POPUP
    close : function () {
        login.pWrap.classList.remove("open");
    }
}

export { login };