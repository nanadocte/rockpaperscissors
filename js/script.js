console.log("Hello, ready to lose ?")
let choice = "?"
let ordiChoice = "??"

function getComputerChoice() {
    const randomChoice = Math.random() 
    if (randomChoice<0.25) {
        ordiChoice = "rock"
        return ordiChoice
    }
    else if (randomChoice>=0.25 && randomChoice<=0.75) {
        ordiChoice = "paper"
        return ordiChoice
    }
    else {
        ordiChoice = "scissors"
        return ordiChoice
    }

}



function getHumanChoice() {
    choice =prompt("Rock, paper or scissors")
    return choice
}
console.log("You choose " + getHumanChoice().toUpperCase ())
console.log("I choose " + getComputerChoice().toUpperCase ())


if (choice=== ordiChoice) {
   console.log("Egalité ! Je t'aurai la prochaine fois")
}
if (choice=== "rock") {
    if (ordiChoice==="paper") { 
        console.log("You lost!")
    }
    if (ordiChoice==="scissors") {
        console.log("You win, c'est que de la chance!")
    }
}
if (choice=== "paper") {
    if (ordiChoice==="scissors") { 
        console.log("You lost!")
    }
    if (ordiChoice==="rock") {
        console.log("You win, c'est que de la chance")
    }
}

if (choice=== "scissors") {
    if (ordiChoice==="rock") { 
        console.log("You lost!")
    }
    if (ordiChoice==="paper") {
        console.log("You win, c'est que de la chance")
    }
}