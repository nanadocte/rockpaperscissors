
let button = document.getElementById("btn")
let resultatChoix = document.getElementById("results")
let btnPierre = document.getElementById("btnPierre")
let btnFeuille = document.getElementById("btnFeuille")
let btnCiseaux = document.getElementById("btnCiseaux")
const jouer = document.getElementById("jouer")
let gameOver = false


const affichageBoutons = document.createElement("h2")
let phrase = document.createElement("h3")
let choixHuman = document.createElement("h2")
let choixOrdi = document.createElement("h2")
let score = document.createElement("h4")




resultatChoix.appendChild(choixHuman)
resultatChoix.appendChild(choixOrdi)
resultatChoix.appendChild(score)
button.insertBefore(affichageBoutons, button.firstChild)
resultatChoix.appendChild(phrase)


function vérifManche(){
    
    if (ordiScore===3 || humanScore===3) {
        phrase.textContent = "Fin de partie !"
        disableBtn()
        gameOver = true 
        return true 
        }
    
    else {
    enableBtn()
    return false
    }
}

jouer.addEventListener("click", ()=>{
    jouer.style.display = "none"
    affichageBoutons.textContent= "T'as l'air prêt à te faire éclater alors..."
    setTimeout(()=>{
            affichageBoutons.textContent= "C'est parti !"
             setTimeout(()=>{
                btnCiseaux.style.display = "inline-block"
                btnFeuille.style.display = "inline-block"
                btnPierre.style.display = "inline-block"
                affichageBoutons.textContent = ""
             }, 800)
    }, 1000)
})

function visibleImg(choixMoi, choixOrdinateur) {
  //Humain
  document.getElementById("imgPlayerPierre").style.display = "none"
  document.getElementById("imgPlayerFeuille").style.display = "none"
  document.getElementById("imgPlayerCiseaux").style.display = "none"
  
  // Ordi
  document.getElementById("imgOrdiPierre").style.display = "none"
  document.getElementById("imgOrdiFeuille").style.display = "none"
  document.getElementById("imgOrdiCiseaux").style.display = "none"

  document.getElementById("imgPlayer" + choixMoi).style.display = "inline-block"
  document.getElementById("imgOrdi" + choixOrdinateur).style.display = "inline-block"
}

function disableBtn() {
    btnCiseaux.disabled=true
    btnFeuille.disabled=true
    btnPierre.disabled=true

}
function enableBtn(){
    btnPierre.disabled=false
    btnCiseaux.disabled=false
    btnFeuille.disabled=false
}

score.textContent= updatePoint()

let i =0
function jouerCoup(choix) {
    if (gameOver === true) { 
        return 
    }
    affichageBoutons.textContent = manche[i] || "Manche suivante"
    i++
    disableBtn()
    phrase.textContent = ""
    choixHuman.textContent = ""
    choixOrdi.textContent = ""

    
    choixHuman.textContent = "1..."
        setTimeout(()=> {
            choixHuman.textContent = "2..."
            setTimeout(()=> {
                choixHuman.textContent = "3..."
                setTimeout(()=> {
                    let choixOrdiText = getComputerChoice()
                    let choixHumanText = choix.toLowerCase()
                    visibleImg(choix, choixOrdiText)
                    choixHuman.textContent = choix
                    choixOrdi.textContent = choixOrdiText
                choixOrdiText= choixOrdiText.toLowerCase()
                let gagnant = determineWinner(choixHumanText, choixOrdiText)
                phrase.textContent = whoGetsThePoint(choixHumanText, choixOrdiText, gagnant, phrase)
                score.textContent= updatePoint()
                vérifManche()

                }, 500)
            }, 500)
        }, 500)
}


btnPierre.addEventListener("click", ()=>{
        jouerCoup("Pierre")
        
})
btnFeuille.addEventListener("click", ()=>{
        jouerCoup("Feuille")
})
btnCiseaux.addEventListener("click", ()=>{
        jouerCoup("Ciseaux")
})




