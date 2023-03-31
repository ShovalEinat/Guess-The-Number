let answer, count, countdownEl, dountdownInterval, randomNumber;
let tries = 0;
let time = 60;
let maxNum = 100;
let audio = new Audio('congratulations.mp3');
let hints = document.getElementById("hints");
let triesSpan = document.getElementById("tries");
let scoreSpan = document.getElementById("score");
let restartSpan = document.getElementById("restart");
document.getElementById("game").style.display = "none";

function startGame() {
    randomNumber = Math.floor(Math.random() * maxNum) + 1;
    timer()
    document.getElementById("game").style.display = "block";
    document.getElementById("start").style.display = "none";
    countdownEl.textContent = "Time left : " + time + "s" ;
}

function timer() {
    count = time;
    countdownEl = document.getElementById("timer");
    countdownInterval = setInterval(function() {
    count--;
    countdownEl.textContent = "Time left : " + count + "s";
  if (count === 0) {
    clearInterval(countdownInterval);
    endByTime()
  }
}, 1000);
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        checks();
    }
});

function checks() {
    tries = tries +1;
    triesSpan.innerText = "Tries : " + tries;
    answer = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    if (answer > randomNumber) {
        hints.innerText = "Try smaller number";
    }
    else if(answer < randomNumber){
        hints.innerText = "Try a bigger number";
    }
    else if(answer = randomNumber){
        hints.innerText = "Nice! You got the number!";
        won();
    }
}

function restart() {
    location.reload();
}

function showAnswer() {
    console.log(randomNumber);
}

let range = document.getElementById("range");
let rangeValue = document.getElementById("rangeValue");

range.addEventListener("input", () => {
    rangeValue.innerHTML = "Time will Be : " + range.value;
});

range2.addEventListener("input", () => {
    rangeValue2.innerHTML = "The number could be up to : " + range2.value;
});

function endByTime() {
    timeLeft.innerHTML = "Did Not Succeeded";
    scoreSpan.innerHTML = "Tries : " + tries;
    document.getElementById("notRestart").style.display = "none";
    document.getElementById("restart").style.display = "block";
    restartSpan.style.fontSize = "40px";
    timeLeft.style.textShadow = "0 0 10px red";
}

function won() {
    scoreSpan.style.fontSize = "45px";
    timeLeft.innerHTML = "You beat the game!";
    scoreSpan.innerHTML = "Tries : " + tries;
    document.getElementById("notRestart").style.display = "none";
    document.getElementById("restart").style.display = "block";
    audio.play();
}
