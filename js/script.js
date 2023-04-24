

function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.querySelector(".pseudo").value;
    // Afficher la valeur
    localStorage.pseudo = input ;
    document.location.href="mael2.html"; 
}

const valider = document.querySelector("#btn")

valider.addEventListener("click",getValue)