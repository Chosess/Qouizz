document.querySelector(".scoreactuel").textContent = sessionStorage.score * 10

document.querySelector(".scoretotal").textContent = localStorage.scoretotal * 10

localStorage.scorecumule++;

document.querySelector(".scorecumule").textContent = localStorage.scorecumule * 100






document.querySelector(".qouizz").addEventListener("click", function() {
    document.location.href="selection.html";
})