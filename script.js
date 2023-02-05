let computerSelection


let playerSelection

function playRound(playerSelection, computerSelection) {getComputerChoice()
    function getComputerChoice() {
        let randomNum = Math.random()*100
        let randomWholeNum = Math.round(randomNum)
        if (randomWholeNum<=33){
            computerSelection = "ROCK"
        } else if (randomWholeNum>=66){
            computerSelection = "PAPER"
        } else {
            computerSelection = "SCISSORS"
        }
    }
    rawPlayerChoice = prompt("Choose rock, paper, or scissors")
let upperCasePlayerChoice = rawPlayerChoice.toUpperCase()
playerSelection = upperCasePlayerChoice
    if (playerSelection==="ROCK") {
        if (computerSelection==="PAPER") {
            return "LOSE"
        } else if (computerSelection==="SCISSORS"){
            return "WIN"
        } else if (computerSelection==="ROCK") {
            return "TIE"
        } else { return "You did not select rock, paper, or scissors!"
        }
    } else if (playerSelection==="PAPER") {
        if (computerSelection==="PAPER") {
        return "TIE"
        } else if (computerSelection==="SCISSORS"){
        return "LOSE"
        } else if (computerSelection==="ROCK") {
        return "WIN"
        } else { return "You did not select rock, paper, or scissors!"
        }

    }else if (playerSelection==="SCISSORS") {
        if (computerSelection==="PAPER") {
        return "WIN"
        } else if (computerSelection==="SCISSORS"){
        return "TIE"
        } else if (computerSelection==="ROCK") {
        return "LOSE"
        } else { return "You did not select rock, paper, or scissors!"
        }
    } else {
        return "Something went horribly wrong."
    }
}


let winTotal = 0
 function game() {for (let i=0; i<5; i++){
        let result = playRound(playerSelection, computerSelection)
        if (result ==="WIN"){
            winTotal = winTotal+1
            console.log(winTotal)
            } else if (result ==="LOSE") {
                winTotal = winTotal-1
                console.log(winTotal)
            } else if (result ==="TIE"){
                winTotal = winTotal
                console.log(winTotal)
            } else {
                "Something went horrible wrong"
            }
            

        }
   
}
game()
function matchResult(){
    if (winTotal ===0){
        console.log("We tied!")
    } else if (winTotal<0) {
        console.log("You lost!")
    } else if (winTotal>0) {
        console.log("You won!")
    } else {
        console.log("Something went wrong here.")
    }
}
matchResult()





