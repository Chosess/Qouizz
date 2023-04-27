document.querySelector(".scoreactuel").textContent = sessionStorage.score * 10

localStorage.scoretotal = localStorage.scoretotal + sessionStorage.score

document.querySelector(".scoretotal").textContent = localStorage.scoretotal * 10






document.querySelector(".qouizz").addEventListener("click", function() {
    document.location.href="selection.html";
})