function agrandir_MenuDuHaut_DerniereNouvelle() {
    // Accéder au document de la page parente
    let documentParent = parent.document;
    let iframeDerniereNouvelle = documentParent.getElementById("statut_haut");
    let iframeMenuDuHaut =  documentParent.getElementById("menu_haut");


    let nav = iframeMenuDuHaut.contentDocument.querySelector("nav");
    let btnToggleNav = iframeMenuDuHaut.contentDocument.querySelector(".hamburger-menu");

    nav.classList.toggle("active");
    btnToggleNav.classList.toggle("active");


    // --- mon code
    let menuHamburger = iframeMenuDuHaut.contentDocument.getElementsByClassName("hamburger-menu").item(0);
    if (menuHamburger.getAttribute("class") == "zoneStatut active"){
        menuHamburger.setAttribute("aria-label","Refermer le menu de navigation avec la touche ENTRÉE.");
    }
    else {
        menuHamburger.setAttribute("aria-label","Ouvrir le menu de navigation avec la touche ENTRÉE.");
    }



    // Pour récupérer le nb bouton du menu du haut, on va se rendre dans la page parente, puis accéder à l'iframe et chercher le nombre d'enfant du div.
    // "contentDocument" permet de récupérer le contenu de l'iframe (et donc de le visiter).
    let nbDeBoutonDuMenuHaut = iframeMenuDuHaut.contentDocument.getElementsByClassName("centrer").item(0).childElementCount;

    // Faire quelque chose avec le document de la page parente



    let hautCSS = documentParent.getElementsByClassName("HautCSS").item(0);
    if (iframeDerniereNouvelle.getAttribute("style") == null && iframeMenuDuHaut.getAttribute("style") == null) {
        iframeDerniereNouvelle.setAttribute("style", "height: " + (80 + nbDeBoutonDuMenuHaut*53) + "px;");
        iframeDerniereNouvelle.setAttribute("class", "iframeMenuGrand");
        iframeMenuDuHaut.setAttribute("style", "height: " + (80 + nbDeBoutonDuMenuHaut*53) + "px;");
        iframeMenuDuHaut.setAttribute("class", "iframeMenuGrand");
        hautCSS.setAttribute("style", "margin-top: " + (1 + nbDeBoutonDuMenuHaut*26) + "px;");
        hautCSS.setAttribute("id", "hautCSSMenuGrand");
    }
    else if (iframeDerniereNouvelle.getAttribute("style") != null && iframeMenuDuHaut.getAttribute("style") != null) {
        iframeDerniereNouvelle.removeAttribute("style");
        iframeDerniereNouvelle.removeAttribute("class")
        iframeMenuDuHaut.removeAttribute("style");
        iframeMenuDuHaut.removeAttribute("class");
        hautCSS.removeAttribute("style");
        hautCSS.removeAttribute("id");
    }



}
