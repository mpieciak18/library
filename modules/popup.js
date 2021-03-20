let pop = {
  // (A) ATTACH POPUP HTML
  pWrap : null, // HTML popup wrapper
  pBox : null, // HTML popup box
  pTitle : null, // HTML popup title
  pLabelOne : null, // HTML popup field label (one)
  pInputOne: null, // HTML popup field input (one)
  pClose : null, // HTML close button
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
    
    // (A4) FORM FIELD ONE (TITLE)
    pop.pLabelOne = document.createElement("LABEL");
    pop.pLabelOne.classList = "pop-labels";
    pop.pLabelOne.htmlFor = "input-one";
    pop.pLabelOne.innerHTML = "Title:"
    pop.pBox.appendChild(pop.pLabelOne);
    pop.pInputOne = document.createElement("INPUT");
    pop.pInputOne.classList = "pop-inputs";
    pop.pInputOne.id = "input-one";
    pop.pInputOne.name = "input-one";
    pop.pInputOne.setAttribute("type", "text");
    pop.pBox.appendChild(pop.pInputOne)
    
    // (A5) CLOSE
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