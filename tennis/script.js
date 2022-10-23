document.addEventListener("mousemove", moveBat);
let x = 100;
let y = 100;
let speedX = 2;
let speedY = 2;
let batX = 0;

function moveBat(event) {
  batX = event.clientX;
  bat.style.left = batX + "px";
}

function moveBall() {
  x = x + speedX;
  y = y + speedY;
  ball.style.left = x + "px";
  ball.style.top = y + "px";

  if (x > 530) speedX = -2;
  if (x < 0) speedX = 2;
  if (y < 0) speedY = 2;
  if (y > 372 && Math.abs(batX - x) < 60) {
    speedY = -2;
  }

  if (y > 450) {
    alert("GAME OVER!");
    clearInterval(timer);
  }
}

const timer = setInterval(moveBall, 10);
