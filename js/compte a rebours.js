const countDownDuration = 30;

const countDownElement = document.getElementById("timer");

function updateCountDown() {
    // Calculer les secondes restantes
    const secondsLeft = countDownDuration - Math.floor((Date.now() - startTime) / 1000);
    
    // Vérifier si le compte à rebours est terminé
    if (secondsLeft <= 0) {
      countDownElement.textContent = "Terminé!";
      clearInterval(countDownInterval);
    } else {
      // Afficher les secondes restantes
      countDownElement.textContent = secondsLeft + " secondes";
    }
  }

  const startTime = Date.now();

  const countDownInterval = setInterval(updateCountDown, 1000);

