let temp = 30;

function rebours(){
    let timer = document.querySelector("#timer");

    timer.textContent = temp;
    if (temp==0){
        document.location.href="page5.html"; 
    }
    temp--;
    setTimeout(rebours,1000);

}

rebours();