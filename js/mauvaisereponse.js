if(sessionStorage.numero == 10){
    document.querySelector(".lasuite").addEventListener("click", function(){
    document.location.href="resultat.html"
    })
} else {
    document.querySelector(".lasuite").addEventListener("click", function(){
        document.location.href="Questions.html"
    })
}