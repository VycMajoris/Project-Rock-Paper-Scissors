let choices = ["Rock", "Paper", "Scissors"];
        function getComputerChoice() {
            let randomChoice = choices[Math.floor((Math.random()) * choices.length)];
            return randomChoice;
        }

        function playRound(playerSelection, computerSelection) {
            if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
                return ("It's a tie");
            } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
                return (`You win! ${playerSelection} beats ${computerSelection}`);
            }
            else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
                return (`You lose! ${computerSelection} beats ${playerSelection}`);
            }
            else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
                return ("It's a tie");
            }
            else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
                return (`You lose! ${computerSelection} beats ${playerSelection}`);
            }
            else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
                return (`You win! ${playerSelection} beats ${computerSelection}`);
            }
            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
                return ("It's a tie");
            }
            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
                return (`You lose! ${computerSelection} beats ${playerSelection}`);
            }
            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
                return (`You win! ${playerSelection} beats ${computerSelection}`);
            }
        }



        function game(playRound) {
            let playerScore = 0;
            let computerScore = 0;


            for (let i = 0; playerScore != 5 && computerScore != 5; i++) {
                let playerChoice = prompt("Make your move!");
                let computerChoice = getComputerChoice();
                if ((playRound(playerChoice, computerChoice)).includes("tie")) {
                    playerScore++;
                    computerScore++;
                    console.log("It's a tie");
                    console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                }
                else if ((playRound(playerChoice, computerChoice)).includes("lose")) {
                    computerScore++;
                    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                    console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                }
                else {
                    playerScore++;
                    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                    console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                }
            }

            console.log("The final score is: " + "You: " + playerScore + "  Computer: " + computerScore);

        }

      //  game(playRound);