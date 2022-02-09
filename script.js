const buttons = document.querySelectorAll("input");
const displayResult = document.querySelector("div.result");
const scoreBoard = document.querySelector("div.scoreboard");
let userScore = 0;
let compScore = 0;
let res = "";
let finalScore = `User : ${userScore}  Computer : ${compScore}`;

const computerPlay = () => {
  let options = ["Rock", "Paper", "Scissors"];
  let optionsIndex = Math.floor(Math.random() * options.length);
  let compOption = options[optionsIndex];
  return compOption;
};

const blockButtons = () => {
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
};

const playRound = (playerSelection) => {
  const computerSelection = computerPlay();

  let info =
    "Player Selected: " +
    playerSelection +
    "\nComputer Selected: " +
    computerSelection;
  // console.log(info);

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    userScore += 1;
    res = `You Win! ${playerSelection} beats ${computerSelection}`;
    finalScore = `User : ${userScore}  Computer : ${compScore}`;
    // console.log(res);

    if (userScore === 5) {
      res = `You beat Computer and won this series.`;
      blockButtons();
    }
  } else if (playerSelection === computerSelection) {
    res = `It\'s tie! Both selected ${computerSelection}!`;
    // console.log(res);
  } else {
    compScore += 1;
    res = `You lose! ${computerSelection} beats ${playerSelection}`;
    finalScore = `User : ${userScore}  Computer : ${compScore}`;
    // console.log(res);

    if (compScore === 5) {
      res = `Computer Won! You lose this series.`;
      blockButtons();
    }
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
    // console.log(`Clicked ${button.value} button!`);
    displayResult.textContent = res;
    scoreBoard.textContent = finalScore;
  });
});
