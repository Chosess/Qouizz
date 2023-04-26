let temp = 30;

function rebours(){
    let timer = document.querySelector("#timer");

    timer.textContent = temp;
    if (temp==0){
        sessionStorage.numero++;
        document.location.href="mauvaisereponse.html";
    }
    temp--;
    setTimeout(rebours,1000);

}

rebours();