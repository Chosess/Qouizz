if(sessionStorage.numero == 10){
    document.querySelector(".lasuite").addEventListener("click", function(){
        localStorage.scoretotal = Number(localStorage.scoretotal) + Number(sessionStorage.score)
        
    document.location.href="resultat.html"
    })
} else {
    document.querySelector(".lasuite").addEventListener("click", function(){
        document.location.href="Questions.html"
    })
}