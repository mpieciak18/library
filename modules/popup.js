let pop = {
  // (A) ATTACH POPUP HTML
  pWrap : null, // HTML popup wrapper
  pBox : null, // HTML popup box
  pTitle : null, // HTML popup title
  pText : null, // HTML popup text
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
    pop.pBox.appendChild(pop.pTitle);
    
    // (A4) TEXT
    pop.pText = document.createElement("p");
    pop.pText.id = "pop-text";
    pop.pBox.appendChild(pop.pText);
    
    // (A5) CLOSE
    pop.pClose = document.createElement("div");
    pop.pClose.id = "pop-close";
    pop.pClose.innerHTML = "✕";
    pop.pClose.onclick = pop.close;
    pop.pBox.appendChild(pop.pClose);
  },

  // (B) OPEN POPUP
  open : function () {
    pop.pTitle.innerHTML = 'My Library';
    pop.pText.innerHTML = 'Library Log';
    pop.pWrap.classList.add("open");
  },

  // (C) CLOSE POPUP
  close : function () {
    pop.pWrap.classList.remove("open");
  }
};

export { pop };