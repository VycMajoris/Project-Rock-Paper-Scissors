let choices = ["Rock", "Paper", "Scissors"];

let playerScore=0;
let computerScore=0;

let rock = document.getElementById('rockButton');
let paper = document.getElementById('paperButton');
let scissor = document.getElementById('scissorsButton');
let start  = document.getElementById('startButton');

let showScore1 = document.getElementById('scoreArea1');
let showScore2 = document.getElementById('scoreArea2');

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
                gameOver();
                
                
                


            }
            
            if (choices[0] === "rock" && choices[1] === "Rock") {
                
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                displayScores(playerScore,computerScore);
            } else if (choices[0] === "rock" && choices[1] === "Scissors") {
                
                playerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                displayScores(playerScore,computerScore);

            }
            else if (choices[0] === "rock" && choices[1] === "Paper") {
                
                computerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                displayScores(playerScore,computerScore);
            }
            else if (choices[0] === "paper" && choices[1] === "Paper") {
                
                
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                displayScores(playerScore,computerScore);
            }
            else if (choices[0] === "paper" && choices[1] === "Scissors") {
                
                computerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                displayScores(playerScore,computerScore);
            }
            else if (choices[0] === "paper" && choices[1] === "Rock") {
                
                playerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                displayScores(playerScore,computerScore);
            }
            else if (choices[0] === "scissors" && choices[1] === "Scissors") {
                
                
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                displayScores(playerScore,computerScore);
            }
            else if (choices[0] === "scissors" && choices[1] === "Rock") {
                
                computerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                displayScores(playerScore,computerScore);
            }
            else if (choices[0] === "scissors" && choices[1] === "Paper") {
                
                playerScore++;
                console.log("Current score is " + "You: " + playerScore + "  Computer: " + computerScore);
                displayScores(playerScore,computerScore);
            }
         }
        

     
function displayScores(playerScore, computerScore) {
    showScore1.textContent = playerScore;
    showScore2.textContent = computerScore;
}

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
                
                console.log("Game Over! Final score is " + "You: " + playerScore + "  Computer: " + computerScore);                
                displayScores(playerScore,computerScore);
                playerScore =0;
                computerScore=0;
                
 }
