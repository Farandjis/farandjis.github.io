function hamburger() {
    var nav = document.querySelector("nav");
    var btnToggleNav = document.querySelector(".hamburger-menu");

    nav.classList.toggle("active");
    btnToggleNav.classList.toggle("active");

    // --- mon code
    var menuHamburger = document.getElementsByClassName("hamburger-menu").item(0);
    if (menuHamburger.getAttribute("class") == "hamburger-menu active"){
        menuHamburger.setAttribute("aria-label","Refermer le menu de navigation avec la touche ENTRÉE.");
    }
    else {
        menuHamburger.setAttribute("aria-label","Ouvrir le menu de navigation avec la touche ENTRÉE.");
    }


    // Accéder au document de la page parente
    var documentParent = parent.document;
    var nbDeBoutonDuMenuHaut = document.getElementsByClassName("centrer").item(0).childElementCount;

    // Faire quelque chose avec le document de la page parente
    var iframe = documentParent.getElementsByClassName("menu_haut").item(0);
    var hautCSS = documentParent.getElementsByClassName("HautCSS").item(0);
    if (iframe.getAttribute("style") == null) {
        iframe.setAttribute("style", "height: " + (80 + nbDeBoutonDuMenuHaut*53) + "px;");
        iframe.setAttribute("id", "iframeMenuGrand");
        hautCSS.setAttribute("style", "margin-top: " + (1 + nbDeBoutonDuMenuHaut*26) + "px;");
        hautCSS.setAttribute("id", "hautCSSMenuGrand");
    }
    else {
        iframe.removeAttribute("style");
        iframe.removeAttribute("id")
        hautCSS.removeAttribute("style");
        hautCSS.removeAttribute("id");
    }

}
