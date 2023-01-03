let userScore = 0;
let computerScore = 0;
let userScores = false;
let computerScores = false;
let draw = false;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const gameInfo_div = document.getElementById("gameInfoFlex");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let userName_span = document.getElementById("userName");
//let obj;

//const inputs = document.querySelectorAll('input[type="radio"');
//let bestOfRounds = document.querySelector('input[name="bestOf"]:checked').value;
//sessionStorage.setItem('Rounds', bestOfRounds);
//console.log(Rounds);
//const selectedRounds = document.querySelector("#selectedRounds");
//let rounds;

//console.log(inputs[0].checked)

/*
function func() {
    let radio = document.getElementsByName("bestOf");
    for(i=0; i<radio.length; i++) {
        if(radio[i].checked) {
            alert(radio[i].value)
        }
    }
}*/
/*
function onBtnChange(event) {
    //selectedRounds.innerHTML = event.target.value =='5'?"5":"5"
    let option = event.target.value;
    console.log(option)
    document.getElementById("selectedRounds").innerText = option;
}*/

function callme() {
  //getting value from userInput (name)
  var name = document.getElementById("userInput").value;
  sessionStorage.setItem("userName", name);

  // getting value from radio buttons (best of 3/5)
  option = document.querySelector('input[name="bestOf"]:checked').value;
  sessionStorage.setItem("Rounds", option);
  /*
    alert(option);
    let obj = JSON.parse(option);
    console.log(obj)
    if(userScore === option) {
        gameInfo_div.innerHTML = "You won! Woop Woop"
    }
    else if (computerScore === option) {
        gameInfo_div.innerHTML = "You lost this time, but don't look so devastated, it's just a game :-) "
    }
*/
}

window.onload = function () {
  document.getElementById("user-Name").innerText =
    sessionStorage.getItem("userName");
  document.getElementById("h3").innerText =
    "Welcome " + sessionStorage.getItem("userName") + "!";
  document.getElementById("selectedRounds").innerText =
    "Best of " + sessionStorage.getItem("Rounds");

  /*
    if(userScore === Rounds) {
        gameInfo_div.innerHTML = "You won! Woop Woop"
    }
    else if (computerScore === Rounds) {
        gameInfo_div.innerHTML = "You lost this time, but don't look so devastated, it's just a game :-) "
    }*/
};

// this functino randomizes a choice for the computer between 1-3, and returns a number from the array between 0-2
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// this function exists so that the "comment-box" doesn't just print out "r wins over s" for example
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function winnerScore(userChoice, computerChoice) {
  if (userScores) {
    console.log(computerChoice, userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    gameInfo_div.innerHTML =
      convertToWord(userChoice) +
      " beats " +
      convertToWord(computerChoice) +
      ". You win! 🔥 ";
    userScores = false;
  } else if (computerScores) {
    console.log(computerChoice, userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    gameInfo_div.innerHTML =
      convertToWord(userChoice) +
      " loses to " +
      convertToWord(computerChoice) +
      ". You lost ";
    computerScores = false;
  } else if (draw) {
    console.log(computerChoice, userChoice);
    gameInfo_div.innerHTML = "It's a draw!";
    draw = false;
  }
}

function checkWinner(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      userScores = true;
      winnerScore(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      computerScores = true;
      winnerScore(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw = true;
      winnerScore(userChoice, computerChoice);
      break;
  }
}

function userChoiceFunction() {
  rock_div.addEventListener("click", function () {
    checkWinner("r");
  });
  paper_div.addEventListener("click", function () {
    checkWinner("p");
  });
  scissors_div.addEventListener("click", function () {
    checkWinner("s");
  });
}

userChoiceFunction();
