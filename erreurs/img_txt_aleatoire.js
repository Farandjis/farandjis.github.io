 function randomImage() {

    const images = [
        "sitedu230220.png",
        "woaaa.webp",
        "logo.png",
    ]; // liste des noms de fichiers d'images


    const texts = [
        "Voici à quoi ressemblait le site le 20/02/2023 à 20h42. Un menu fonctionnel, mais il manque le principal... <b>Le site web.</b><br><br> Au premier semestre de BUT Informatique, nous avons eu des cours de HTML/CSS. J'ai découvert de nouvelles notions par rapport à la spécialité NSI au lycée.",
        "Voici un magnifique logo Windows qui vole. Incroyable non ?<br>En effet, l'une de mes passions ce sont les anciennes technologies...<br>J'aime beaucoup Windows 98.<br><br>Mais le nouveau aussi ! L'Intelligence Artificiel est quelque chose d'incroyable.<br>Nous avons eu une SAÉ là-dessus d'ailleurs.",
        "Voici l'icône de mon site internet. Coloré, il représente ma personnalité créative et originale. Le F, penché en avant, représente mon ambition sur mes futurs projets et mon ambition de réussir.<br>Vu qu'on parle d'un site internet, le petit globe derrière le rappelle. Cela me fait penser à un coucher de soleil.<br>Qui dit coucher de soleil, dit nuit qui arrive.<br>J'aime beaucoup la nuit, c'est un moment où je me détends, et où je réfléchis sur moi. J'ai tendance à trouver de l'énergie et de nouvelles idées durant mes nuits d'été...",
        ]; // liste des descriptions d'images
    const randomIndex = Math.floor(Math.random() * images.length); // sélectionne un index aléatoire dans la liste
    const randomImage = images[randomIndex]; // sélectionne l'image correspondante
    const randomText = texts[randomIndex]; // sélectionne la description correspondante
    document.getElementById("random-image").src = "img/"+randomImage; // affiche l'image sur la page
    document.getElementById("random-text").innerHTML = randomText; // affiche la description sur la page
}
