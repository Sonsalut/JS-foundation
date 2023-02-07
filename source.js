const selects = ["ROCK","PAPER","SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let playerSelect ='';
let computerSelect = selects[Math.floor(Math.random()*selects.length)];
let roundWinner = ''
let finalWinner = ''

function playRound(playerSelect) {
    if (playerScore < 5 && computerScore < 5) {
    computerSelect = selects[Math.floor(Math.random()*selects.length)];

    if (playerSelect === computerSelect) {
        roundWinner = 'Tie'
        console.log("Tie");
        document.getElementById("playerScore").innerHTML=playerScore;
        document.getElementById("playerChoice").innerHTML=playerSelect;
        document.getElementById("computerChoice").innerHTML=computerSelect;
        document.getElementById("computerScore").innerHTML=computerScore;
        document.getElementById("round").innerHTML=roundWinner;
    } else
    
    if ((playerSelect === 'ROCK' && computerSelect === 'SCISSORS') 
    || (playerSelect === 'SCISSORS' && computerSelect === 'PAPER') 
    || (playerSelect === 'PAPER' && computerSelect === 'ROCK')) {

        playerScore++;
        roundWinner = 'You win!!!';
        console.log('You win!!!');
        document.getElementById("playerScore").innerHTML=playerScore;
        document.getElementById("playerChoice").innerHTML=playerSelect;
        document.getElementById("computerChoice").innerHTML=computerSelect;
        document.getElementById("computerScore").innerHTML=computerScore;
        document.getElementById("round").innerHTML=roundWinner;
    }else
    
    if ((computerSelect === 'ROCK' && playerSelect === 'SCISSORS') 
    || (computerSelect === 'PAPER' && playerSelect === 'ROCK') 
    || (computerSelect === 'SCISSORS' && playerSelect === 'PAPER')) {
        computerScore++;
        roundWinner = 'You lose. Try again!';
        console.log('You lose. Try again!');
        document.getElementById("computerChoice").innerHTML=computerSelect;
        document.getElementById("computerScore").innerHTML=computerScore;
        document.getElementById("playerScore").innerHTML=playerScore;
        document.getElementById("playerChoice").innerHTML=playerSelect;
        document.getElementById("round").innerHTML=roundWinner;
    }
    }
    else {
        if (computerScore === 5 && playerScore < 5) {
            document.getElementById("final").innerHTML="computer wins";
        }
        if (computerScore < 5 && playerScore === 5) {
            document.getElementById("final").innerHTML="you win";
        }
        
    }

}

