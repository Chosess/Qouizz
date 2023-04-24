

function getValue() {
    var input = document.querySelector(".pseudo").value;
    localStorage.pseudo = input ;
    document.location.href="mael2.html"; 
}

const valider = document.querySelector("#btn")

valider.addEventListener("click",getValue)

const pseudoo = document.querySelector(".pseudo")

let locals = localStorage.pseudo

pseudoo.value = locals
