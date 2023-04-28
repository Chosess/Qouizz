

function getValue() {
    var input = document.querySelector(".pseudo").value;
    localStorage.pseudo = input ;
    document.location.href="selection.html"; 
};

const valider = document.querySelector("#btn");

valider.addEventListener("click",getValue);

const pseudoo = document.querySelector(".pseudo");

let locals = localStorage.pseudo || "";

pseudoo.value = locals;

// if(![localStorage.scoretotal >= 0]){
//     localStorage.scoretotal = 0
// }

// if(![localStorage.scorecumule >= 0]){
//     localStorage.scorecumule = 0
// }

localStorage.scoretotal = localStorage.scoretotal??0;
localStorage.scorecumule = localStorage.scorecumule??0;