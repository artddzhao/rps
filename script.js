function getComputerChoce() {
    let randomNum = Math.random()*100
    let randomWholeNum = Math.round(randomNum)
    if (randomWholeNum<=33){
        return "Rock"
    } else if (randomWholeNum>=66){
        return "Paper"
    } else {
        return "Scissors"
    }
}
console.log(getComputerChoce())