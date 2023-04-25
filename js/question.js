const pseudoo = document.querySelector("#pseudoo")

let locals = localStorage.pseudo

pseudoo.textContent = locals


fetch("https://quiz.freefakeapi.io/api/categories/" + sessionStorage.id + "/questions?limit=10", {
    headers: {
        "Accept-Language": "fr_FR"
    }
})
.then(reponse => reponse.json())
.then(questions => {
    let question = document.querySelector(".question")

    question.textContent = questions[0].text

    let q1 = document.querySelector(".q1")
    let q2 = document.querySelector(".q2")
    let q3 = document.querySelector(".q3")
    let q4 = document.querySelector(".q4")
    
    q1.textContent = questions[0].answers[0].text
    q2.textContent = questions[0].answers[1].text
    q3.textContent = questions[0].answers[2].text
    q4.textContent = questions[0].answers[3].text

    q1.dataset.correct = questions[0].answers[0].is_correct;
    q2.dataset.correct = questions[0].answers[1].is_correct;
    q3.dataset.correct = questions[0].answers[2].is_correct;
    q4.dataset.correct = questions[0].answers[3].is_correct;

    q1.addEventListener("click", function(){
        if(q1.dataset.correct == "true"){

            document.location.href="bonnereponse.html";

        } else {

            document.location.href="mauvaisereponse.html";

        }
    })

    q2.addEventListener("click", function(){
        if(q2.dataset.correct == "true"){

            document.location.href="bonnereponse.html";

        } else {

            document.location.href="mauvaisereponse.html";
            
        }
    })

    q3.addEventListener("click", function(){
        if(q3.dataset.correct == "true"){

            document.location.href="bonnereponse.html";

        } else {

            document.location.href="mauvaisereponse.html";
            
        }
    })

    q4.addEventListener("click", function(){
        if(q4.dataset.correct == "true"){

            document.location.href="bonnereponse.html";

        } else {

            document.location.href="mauvaisereponse.html";
            
        }
    })

})
