const pseudoo = document.querySelector("#pseudoo")

let locals = localStorage.pseudo

pseudoo.textContent = locals

document.querySelector(".logpseu").addEventListener("click", function() {
    document.location.href="index.html";
})