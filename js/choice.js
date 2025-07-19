function getComputerChoice() {
    const options = ["Pierre", "Feuille", "Ciseaux"]
    return options[Math.floor(Math.random()* options.length)]
}

// function getHumanChoice() {
//    return prompt("pierre, feuille ou ciseaux ?").toLowerCase()
// }

