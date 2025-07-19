console.log("Hello, ready to lose ?")

let humanScore = 0
let ordiScore = 0

let manche = [] 
for (let i=1; i<15; i++) {
    manche.push(i + "e manche")
}


function updatePoint() {
    return "Score = "+ humanScore +" : " + ordiScore
}


function determineWinner(human, ordi){
    if (ordi===human) return "Egalité"
    const winMap = {feuille: "pierre", ciseaux: "feuille", pierre:"ciseaux"}
    return winMap[human]=== ordi ? "human": "ordi"
}
function whoGetsThePoint(humanChoice, ordiChoice, gagnant, phrase) {
    if (humanChoice=== ordiChoice) {
//    console.log("Égalité ! Je t'aurai la prochaine fois")
        return phrase = "Égalité ! Je t'aurai la prochaine fois"
}

  else if (gagnant === "ordi"){
        // console.log("Je te l'avais bien dit!")
        ordiScore= ordiScore + 1 
        return "Je te l'avais bien dit!"
    }

   else if (gagnant === "human"){
                // console.log("Mouais c'est de la chance.")
                humanScore = humanScore + 1 
                return "Mouais c'est de la chance."

   }

  else {
    console.log("Tu as pris peur, cheh?")
    ordiScore= ordiScore + 1 
            return "Tu as pris peur on dirait bien."

}
}

function round(){

let ordiChoice = getComputerChoice() 
let humanChoice = getHumanChoice()
let gagnant = determineWinner(humanChoice, ordiChoice)

console.log("You choose " + humanChoice.toUpperCase())
console.log("I choose " + ordiChoice.toUpperCase())

whoGetsThePoint(humanChoice, ordiChoice, gagnant)
}




function resetScore() {
    ordiScore = 0
    humanScore = 0
}




function gagnant() {
if (ordiScore<humanScore) {
    console.log("...")
}
    else if (ordiScore>humanScore) {
        console.log("T'as quand même de la chance, je t'ai laissé le plaisir de jouer avec moi :)")
    }
    else {
        console.log("Moi, au même niveau que toi ?????...")
    }
}


