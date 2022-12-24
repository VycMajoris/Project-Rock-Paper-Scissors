let choices = ["Rock", "Paper", "Scissors"];

let playerScore=0;
let computerScore=0;

let rock = document.getElementById('rockButton');
let paper = document.getElementById('paperButton');
let scissor = document.getElementById('scissorsButton');
let start  = document.getElementById('startButton');

// make buttons disabled before start button is pressed

rock.disabled = true;
paper.disabled = true;
scissor.disabled = true; 

rock.addEventListener('click' , pressedRock);

paper.addEventListener('click' , pressedPaper);
  
scissor.addEventListener('click' , pressedScissors);
      
start.addEventListener('click', changeBackground);

function getComputerChoice() {
            let randomChoice = choices[Math.floor((Math.random()) * choices.length)];
            return randomChoice;
        }

function playRound(choices) {

            
            if (playerScore === 5 || computerScore === 5) {
                console.log("Game Over! Final score is " + "You: " + playerScore + "  Computer: " + computerScore);
                gameOver();
                


            }
            
            if (choices[0] === "rock" && choices[1] === "Rock") {
                
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
            } else if (choices[0] === "rock" && choices[1] === "Scissors") {
                
                playerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);

            }
            else if (choices[0] === "rock" && choices[1] === "Paper") {
                
                computerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
            }
            else if (choices[0] === "paper" && choices[1] === "Paper") {
                
                
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
            }
            else if (choices[0] === "paper" && choices[1] === "Scissors") {
                
                computerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
            }
            else if (choices[0] === "paper" && choices[1] === "Rock") {
                
                playerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
            }
            else if (choices[0] === "scissors" && choices[1] === "Scissors") {
                
                
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
            }
            else if (choices[0] === "scissors" && choices[1] === "Rock") {
                
                computerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
            }
            else if (choices[0] === "scissors" && choices[1] === "Paper") {
                
                playerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
            }
         }
        

/* function score (choice) {
            let playerScore;
            let computerScore;
            

            for (let i = 0; playerScore != 5 && computerScore != 5; i++) {
                if(playRound(choice) === 0) {
                    playerScore = playerScore;
                } else if (playRound(choice) === -1) {
                    computerScore++;
                } else {
                    playerScore++;
                }
                
            }

            console.log("The final score is: " + "You: " + playerScore + "  Computer: " + computerScore); */














 /*function game(playRound) {
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

        }  */   

      
function changeBackground () {
        // make buttons active and change the backgrounds of buttons
        rock.style.backgroundColor = "yellow";
        paper.style.backgroundColor = "yellow";
        scissor.style.backgroundColor = "yellow";

        rock.disabled = false;
        paper.disabled = false;
        scissor.disabled = false;
        
    } 

 function pressed (string1, string2) {
    console.log( string1 + " " + string2);
 }

 function pressedRock () {
    let compChoice = getComputerChoice();
    let choicesArray = ["rock", compChoice];
    playRound(choicesArray);

 }

 function pressedPaper () {
    let compChoice = getComputerChoice();
    let choicesArray = ["paper", compChoice];
    playRound(choicesArray);

 }

 function pressedScissors () {
    let compChoice = getComputerChoice();
    let choicesArray = ["scissors", compChoice];
    playRound(choicesArray);

 }

 function gameOver () {
                rock.disabled = true;
                paper.disabled = true;
                scissor.disabled = true; 
                playerScore =0;
                computerScore=0;
 }
