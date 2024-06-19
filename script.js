// targeting
const buttons = document.querySelectorAll("img")
// computerFunction
function computerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}
// scores
let playerScore = 0
let computerScore = 0
// disable
function disableButtons() {
    
    setTimeout(() => {
        alert("restart")
        playerScore = 0
        computerScore = 0
        show = ""
        show.innerHTML = ""
    }, 50);
    
    
   
}

// playRound
function playRound(playerSection) {
    let computerSection = computerChoice()
    let show = ""

    if(playerSection == "rock" && computerSection == "scissors" ||
        playerSection == "paper" && computerSection == "rock" ||
        playerSection == "scissors" && computerSection == "paper") {
     playerScore+=1
    show = " Good Luck! " + playerSection +" beats " + computerSection + "<br> player Score - " + playerScore + "<br> computer score - " + computerScore
    if(playerScore==5) {
        show+= "<br> game Over! you won!"
        disableButtons()
    }
}

else if (playerSection == computerSection) {
    show = " its a tie! you both chose " + computerSection+ "<br> player Score - " + playerScore + "<br> computer score - " + computerScore
}
 else {
    computerScore+=1
    show = " Bad Luck! " + computerSection +" beats " + playerSection + "<br> player Score - " + playerScore + "<br> computer score - " + computerScore
    if(computerScore==5) {
        show+= "<br> game Over! you Lost!"
        disableButtons()
    }

}

document.querySelector(".show").innerHTML = show
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        playRound(btn.className)
    })
})