// targeting
const buttons = document.querySelectorAll("input")
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
    buttons.forEach((btn) => {
        btn.disabled = true
    })
}

// playround
