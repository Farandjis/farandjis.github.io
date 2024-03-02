function agrandir_MenuDuHaut_DerniereNouvelle() {
    let estUnMobile = false;
     if (parent.innerWidth < 780){ estUnMobile = true; }

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
        iframeDerniereNouvelle.setAttribute("style", "height: " + /*(80 + nbDeBoutonDuMenuHaut*53)*/ (10000000) + "px;");
        let tailleHauteurBoiteDerniereNouvelle = iframeDerniereNouvelle.contentDocument.getElementsByClassName("message").item(0).clientHeight
        let nbTotalLignes = Math.max(2, Math.round(tailleHauteurBoiteDerniereNouvelle / 15));
        //alert(tailleHauteurBoiteDerniereNouvelle)


        let tailleHauteurIframeChoisit = 0;
        let tailleHauteurIframeDerniereNouvelle = (tailleHauteurBoiteDerniereNouvelle + 47 );
        let tailleHauteurIframeMenuHaut = (80 + nbDeBoutonDuMenuHaut*53);
        if(estUnMobile == false && false) {
            if (tailleHauteurIframeDerniereNouvelle > tailleHauteurIframeMenuHaut) {
                tailleHauteurIframeMenuHaut = tailleHauteurIframeDerniereNouvelle;
            }
            else {
                tailleHauteurIframeDerniereNouvelle = tailleHauteurIframeMenuHaut;
            }
        }


        iframeDerniereNouvelle.setAttribute("style", "height: " + tailleHauteurIframeDerniereNouvelle + "px;");

        iframeMenuDuHaut.setAttribute("class", "iframeMenuGrand");
        iframeDerniereNouvelle.setAttribute("class", "iframeDNGrand");

        if (estUnMobile == true) {
            // iframeMenuDuHaut.setAttribute("style", "height: " + (tailleHauteurIframeChoisit + tailleHauteurIframeDerniereNouvelle - 145) + "px;position: relative; top: " + (tailleHauteurIframeDerniereNouvelle - 80) + "px;");
            iframeMenuDuHaut.setAttribute("style", "height: " + tailleHauteurIframeMenuHaut + "px;");
        } else {
            iframeMenuDuHaut.setAttribute("style", "height: " + tailleHauteurIframeMenuHaut + "px;");
        }


        let decalagePourDerniereNouvelle = 0;
        let decalagePourMenuHaut = (nbDeBoutonDuMenuHaut*26);
        let decalageChoisit = 0;
        if (nbTotalLignes > 2) { decalagePourDerniereNouvelle = (6 + (Math.max(0, nbTotalLignes - 3) * 7.6)); }

        if (decalagePourDerniereNouvelle > decalagePourMenuHaut || true) { decalageChoisit = decalagePourDerniereNouvelle;}
        else  { decalageChoisit = decalagePourMenuHaut;}



        if (estUnMobile == true && false) {
            hautCSS.setAttribute("style", "margin-top: " + (decalageChoisit + decalagePourDerniereNouvelle - 31) + "px;");
        } else {
            hautCSS.setAttribute("style", "margin-top: " + (decalageChoisit) + "px;");
        }
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
