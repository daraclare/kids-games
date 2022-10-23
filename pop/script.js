balloon.addEventListener("click", clickIt);
let score = 0;
let count = 0;

function clickIt() {
  score++;
  scoreBox.innerHTML = "SCORE: " + score;
  balloon.style.height = "10px";
}

function moveIt() {
  balloon.style.height = "160px";
  balloon.style.left = Math.random() * 800 + "px";
  balloon.style.top = Math.random() * 600 + "px";
  count++;
  if (count === 40) {
    alert("game over!");
    clearInterval(timer);
  }
}

var timer = setInterval(moveIt, 5000);
