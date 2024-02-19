function hamburger() {
    var nav = document.querySelector("nav");
    var btnToggleNav = document.querySelector(".hamburger-menu");

    nav.classList.toggle("active");
    btnToggleNav.classList.toggle("active");

    // --- mon code

    // Accéder au document de la page parente
    var documentParent = parent.document;
    var nbDeBoutonDuMenuHaut = document.getElementsByClassName("centrer").item(0).childElementCount;

    // Faire quelque chose avec le document de la page parente
    var iframe = documentParent.getElementsByClassName("menu_haut").item(0);
    var hautCSS = documentParent.getElementsByClassName("HautCSS").item(0);
    if (iframe.getAttribute("style") == null) {
        iframe.setAttribute("style", "height: " + (80 + nbDeBoutonDuMenuHaut*53) + "px;");
        hautCSS.setAttribute("style", "top: " + (42 + nbDeBoutonDuMenuHaut*26) + "px;");
    }
    else {
        iframe.removeAttribute("style");
        hautCSS.removeAttribute("style");
    }

}
