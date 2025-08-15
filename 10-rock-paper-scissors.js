let score = JSON.parse(
  localStorage.getItem("score") || '{"wins":0,"losses":0,"ties":0}'
); // loads score from local storage.

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You lose";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissors") {
      result = "You win";
    }
  } else if (playerMove === "reset") {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
  }

  // Update the score
  if (result === "You win") {
    score.wins++;
  } else if (result === "You lose") {
    score.losses++;
  } else if (result === "Tie") {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerText = result;
  if (result == "You win" || result == "Tie" || result == "You lose") {
    document.querySelector(
      ".js-moves"
    ).innerHTML = `You <img src="emojis/${playerMove}-emoji.png" class="emoji">Computer<img src="emojis/${computerMove}-emoji.png" class="emoji">`;
  } else if (playerMove == "reset") {
    document.querySelector(".js-moves").innerText = "Score has been reset.";
  }
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
