fetch ("https://quiz.freefakeapi.io/api/categories?limit=4&random=true",{
    headers: {
        "Accept-Language":"fr_FR"
    }
})
.then (reponse => reponse.json())
.then (theme => {
    
});


