let choices = ["Rock", "Paper", "Scissors"];

let rock = document.getElementById('rockButton');
let paper = document.getElementById('paperButton');
let scissor = document.getElementById('scissorsButton');
let start  = document.getElementById('startButton');

// make buttons disabled before start button is pressed

/* rock.disabled = true;
paper.disabled = true;
scissor.disabled = true; */

rock.addEventListener('click' , pressedRock);

paper.addEventListener('click' , playRound("paper", getComputerChoice));
  
scissor.addEventListener('click' , playRound("scissors", getComputerChoice));
      
// start.addEventListener('click', changeBackground);

function getComputerChoice() {
            let randomChoice = choices[Math.floor((Math.random()) * choices.length)];
            return randomChoice;
        }

function playRound(choices) {
            if (choices[0] === "rock" && choices[1] === "Rock") {
                console.log(choices[0]);
                console.log(choices[1]);
                console.log("1");
                //return ("It's a tie");
            } else if (choices[0] === "rock" && choices[1] === "Scissors") {
                console.log("2");
                //return (`You win! ${playerSelection} beats ${computerSelection}`);
            }
            else if (choices[0] === "rock" && choices[1] === "Paper") {
                console.log("3");
                //return (`You lose! ${computerSelection} beats ${playerSelection}`);
            }
            else if (choices[0] === "paper" && choices[1] === "Paper") {
                console.log("4");
                //return ("It's a tie");
            }
            else if (choices[0] === "paper" && choices[1] === "Scissors") {
                console.log("5");
                //return (`You lose! ${computerSelection} beats ${playerSelection}`);
            }
            else if (choices[0] === "paper" && choices[1] === "Rock") {
                console.log("6");
                //return (`You win! ${playerSelection} beats ${computerSelection}`);
            }
            else if (choices[0] === "scissors" && choices[1] === "Scissors") {
                console.log("7");
                //return ("It's a tie");
            }
            else if (choices[0] === "scissors" && choices[1] === "Rock") {
                console.log("8");
                //return (`You lose! ${computerSelection} beats ${playerSelection}`);
            }
            else if (choices[0] === "scissors" && choices[1] === "Paper") {
                console.log("9");
                //return (`You win! ${playerSelection} beats ${computerSelection}`);
            }
        }

/* function game(playRound) {
            let playerScore = 0;
            let computerScore = 0;


            for (let i = 0; playerScore != 5 && computerScore != 5; i++) {
                let playerSelection = prompt("Make your move!");
                let computerSelection = getComputerChoice();
                if ((playRound(playerSelection, computerSelection)).includes("tie")) {
                    playerScore++;
                    computerScore++;
                    console.log("It's a tie");
                    console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                }
                else if ((playRound(playerSelection, computerSelection)).includes("lose")) {
                    computerScore++;
                    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                    console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                }
                else {
                    playerScore++;
                    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                    console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                }
            }

            console.log("The final score is: " + "You: " + playerScore + "  Computer: " + computerScore);

        }   */    

      
/* function changeBackground () {
        // make buttons active and change the backgrounds of buttons
        rock.style.backgroundColor = "yellow";
        paper.style.backgroundColor = "yellow";
        scissor.style.backgroundColor = "yellow";

        rock.disabled = false;
        paper.disabled = false;
        scissor.disabled = false;
        
    } */

 function pressed (string1, string2) {
    console.log( string1 + " " + string2);
 }

 function pressedRock () {
    let compChoice = getComputerChoice();
    let choicesArray = ["rock", compChoice];
    playRound(choicesArray);

 }

