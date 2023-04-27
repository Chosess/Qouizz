fetch("https://quiz.freefakeapi.io/api/categories?limit=4&random=true", {
    headers: {
        "Accept-Language": "fr_FR"
    }
})
    .then(reponse => reponse.json())
    .then(theme => {
        document.querySelector(".c1").textContent = theme[0].name
        document.querySelector(".c2").textContent = theme[1].name
        document.querySelector(".c3").textContent = theme[2].name
        document.querySelector(".c4").textContent = theme[3].name

        let c1 = document.querySelector(".c1")
        let c2 = document.querySelector(".c2")
        let c3 = document.querySelector(".c3")
        let c4 = document.querySelector(".c4")

        c1.addEventListener("click", function () {
            sessionStorage.score = 0
            sessionStorage.numero = 0


            sessionStorage.id = theme[0].id

            localStorage.scorecumule++;

            fetch("https://quiz.freefakeapi.io/api/categories/" + sessionStorage.id + "/questions?limit=10", {
                headers: {
                    "Accept-Language": "fr_FR"
                }
            })
            .then(reponse => reponse.json())
            .then(questions => {
                sessionStorage.question = JSON.stringify(questions)
                document.location.href="Questions.html";
            })

            
        })

        c2.addEventListener("click", function () {
            sessionStorage.score = 0
            sessionStorage.numero = 0


            sessionStorage.id = theme[1].id


            localStorage.scorecumule++;
            fetch("https://quiz.freefakeapi.io/api/categories/" + sessionStorage.id + "/questions?limit=10", {
                headers: {
                    "Accept-Language": "fr_FR"
                }
            })
            .then(reponse => reponse.json())
            .then(questions => {
                sessionStorage.question = JSON.stringify(questions)
                document.location.href="Questions.html";
            })
        })

        c3.addEventListener("click", function () {
            sessionStorage.score = 0
            sessionStorage.numero = 0


            sessionStorage.id = theme[2].id


            localStorage.scorecumule++;
            fetch("https://quiz.freefakeapi.io/api/categories/" + sessionStorage.id + "/questions?limit=10", {
                headers: {
                    "Accept-Language": "fr_FR"
                }
            })
            .then(reponse => reponse.json())
            .then(questions => {
                sessionStorage.question = JSON.stringify(questions)
                document.location.href="Questions.html";
            })
        })

        c4.addEventListener("click", function () {
            sessionStorage.score = 0
            sessionStorage.numero = 0


            sessionStorage.id = theme[3].id


            localStorage.scorecumule++;
            fetch("https://quiz.freefakeapi.io/api/categories/" + sessionStorage.id + "/questions?limit=10", {
                headers: {
                    "Accept-Language": "fr_FR"
                }
            })
            .then(reponse => reponse.json())
            .then(questions => {
                sessionStorage.question = JSON.stringify(questions)
                document.location.href="Questions.html";
            })
        })
        

        
    });


