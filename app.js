const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const playBtn = document.querySelector("#play");
console.log(playBtn);

let result;
let hitPosition;
let currentTime;
let timerId;
let countDownTimerId;

score.textContent = result;
timeLeft.textContent = currentTime;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  playBtn.removeEventListener("click", moveMole);
  result = 0;
  score.textContent = result;
  currentTime = 60;
  timeLeft.textContent = currentTime;
  timerId = setInterval(randomSquare, 500);
  countDownTimerId = setInterval(countDown, 1000);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime <= 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("END OF GAME! Your final score is: " + result);
    playBtn.textContent = "Play Again";
    playBtn.addEventListener("click", moveMole);
  }
}

function playGame() {
  playBtn.addEventListener("click", moveMole);
}

playGame();
