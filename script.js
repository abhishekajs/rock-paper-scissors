let userScore = 0;
let compScore = 0;

const delay = () => {
  setInterval(() => {
    return;
  }, 3000);
};

const computerPlay = () => {
  let options = ["Rock", "Paper", "Scissors"];
  let optionsIndex = Math.floor(Math.random() * options.length);
  let compOption = options[optionsIndex];
  return compOption;
};

const playRound = (playerSelection, computerSelection) => {
  let info =
    "Player Selected: " +
    playerSelection +
    "\nComputer Selected: " +
    computerSelection;
  console.log(info);
  let res = "";

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    res = `You Win! ${playerSelection} beats ${computerSelection}`;
    userScore += 1;
    console.log(res);
  } else if (playerSelection === computerSelection) {
    res = `It\'s tie! Both selected ${computerSelection}!`;
    console.log(res);
  } else {
    res = `You lose! ${computerSelection} beats ${playerSelection}`;
    compScore += 1;
    console.log(res);
  }
};

const game = () => {
  while (userScore < 5 && compScore < 5) {
    let playerSelection = prompt("Enter your choice!");
    playerSelection =
      playerSelection.toLowerCase().charAt(0).toUpperCase() +
      playerSelection.slice(1);
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
    delay();
  }

  if (userScore < compScore) {
    console.log("Computer Wins whole set!");
  } else {
    console.log("You Win whole set!");
  }

  return;
};

game();
