let temp = 3;

function rebours(){
    let timer = document.querySelector("#timer");

    timer.textContent = temp;
    if (temp==0){
        document.location.href="Questions.html"; 
    }
    temp--;
    setTimeout(rebours,1000);

}

rebours();