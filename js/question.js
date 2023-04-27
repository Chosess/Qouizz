const pseudoo = document.querySelector("#pseudoo")

let locals = localStorage.pseudo

pseudoo.textContent = locals


// fetch("https://quiz.freefakeapi.io/api/categories/" + sessionStorage.id + "/questions?limit=10", {
//     headers: {
//         "Accept-Language": "fr_FR"
//     }
// })
// .then(reponse => reponse.json())
// .then(questions => {
//     let question = document.querySelector(".question")

//     question.textContent = questions[0].text

//     let q1 = document.querySelector(".q1")
//     let q2 = document.querySelector(".q2")
//     let q3 = document.querySelector(".q3")
//     let q4 = document.querySelector(".q4")
    
//     q1.textContent = questions[0].answers[0].text
//     q2.textContent = questions[0].answers[1].text
//     q3.textContent = questions[0].answers[2].text
//     q4.textContent = questions[0].answers[3].text

//     q1.dataset.correct = questions[0].answers[0].is_correct;
//     q2.dataset.correct = questions[0].answers[1].is_correct;
//     q3.dataset.correct = questions[0].answers[2].is_correct;
//     q4.dataset.correct = questions[0].answers[3].is_correct;

//     document.querySelector(".points").textContent = sessionStorage.score * 10;


//     q1.addEventListener("click", function(){
        
//             sessionStorage.numero++;
        
//         if(q1.dataset.correct == "true"){
//             sessionStorage.score++;
            

//             document.location.href="bonnereponse.html";



//         } else {

//             document.location.href="mauvaisereponse.html";

//         }
//     })

//     q2.addEventListener("click", function(){
        
//             sessionStorage.numero++;
        
//         if(q2.dataset.correct == "true"){
//             sessionStorage.score++;


//             document.location.href="bonnereponse.html";

//         } else {

//             document.location.href="mauvaisereponse.html";
            
//         }
//     })

//     q3.addEventListener("click", function(){
        
//             sessionStorage.numero++;
        
//         if(q3.dataset.correct == "true"){
//             sessionStorage.score++;


//             document.location.href="bonnereponse.html";

//         } else {

//             document.location.href="mauvaisereponse.html";
            
//         }
//     })

//     q4.addEventListener("click", function(){
        
//             sessionStorage.numero++;
        
//         if(q4.dataset.correct == "true"){
//             sessionStorage.score++;


//             document.location.href="bonnereponse.html";

//         } else {

//             document.location.href="mauvaisereponse.html";
            
//         }
//     })

// })


let chose = JSON.parse(sessionStorage.question)

let question = document.querySelector(".question")

    // question.textContent = chose.questions[0].text

    question.textContent = chose[Number(sessionStorage.numero)].text

    let q1 = document.querySelector(".q1")
    let q2 = document.querySelector(".q2")
    let q3 = document.querySelector(".q3")
    let q4 = document.querySelector(".q4")
    
    q1.textContent = chose[Number(sessionStorage.numero)].answers[0].text
    q2.textContent = chose[Number(sessionStorage.numero)].answers[1].text
    q3.textContent = chose[Number(sessionStorage.numero)].answers[2].text
    q4.textContent = chose[Number(sessionStorage.numero)].answers[3].text

    q1.dataset.correct = chose[Number(sessionStorage.numero)].answers[0].is_correct;
    q2.dataset.correct = chose[Number(sessionStorage.numero)].answers[1].is_correct;
    q3.dataset.correct = chose[Number(sessionStorage.numero)].answers[2].is_correct;
    q4.dataset.correct = chose[Number(sessionStorage.numero)].answers[3].is_correct;

    document.querySelector(".points").textContent = sessionStorage.score * 10;


    q1.addEventListener("click", function(){
        
            sessionStorage.numero++;
        
        if(q1.dataset.correct == "true"){
            sessionStorage.score++;
            

            document.location.href="bonnereponse.html";



        } else {

            document.location.href="mauvaisereponse.html";

        }
    })

    q2.addEventListener("click", function(){
        
            sessionStorage.numero++;
        
        if(q2.dataset.correct == "true"){
            sessionStorage.score++;


            document.location.href="bonnereponse.html";

        } else {

            document.location.href="mauvaisereponse.html";
            
        }
    })

    q3.addEventListener("click", function(){
        
            sessionStorage.numero++;
        
        if(q3.dataset.correct == "true"){
            sessionStorage.score++;


            document.location.href="bonnereponse.html";

        } else {

            document.location.href="mauvaisereponse.html";
            
        }
    })

    q4.addEventListener("click", function(){
        
            sessionStorage.numero++;
        
        if(q4.dataset.correct == "true"){
            sessionStorage.score++;


            document.location.href="bonnereponse.html";

        } else {

            document.location.href="mauvaisereponse.html";
            
        }
    })

