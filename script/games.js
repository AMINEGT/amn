/*Recuperation des ékéments html*/

let menu = document.getElementById("menu")
let zone = document.getElementById("gameZone")

/*définit les fonctions*/

function menuChange() {
    switch(menu.value) {
    case '1':
        fairNumber()        
        break
    case '2':
        ticTacDoe()
    default:
        reset()
        break
    }
   
}

function reset(){
zone.innerHTML = ""
}
/**
 * Cette fonction declanche le jeux du juste de nombre
 */
function fairNumber(){
    /* initialiser la zone*/
    reset()
zone.innerHTML = "<h2>Bienvenue dans notre jeu</h2>"
/*on initialise les variables*/
let randomTraget = Math.floor(Math.random() *100)+1
console.log(randomTraget)
let count = 0
/*on ajoute des éléments html*/
let playerInput = document.createElement("input")
playerInput.setAttribute('type','text')
playerInput.setAttribute('id','playerInput')
playerInput.setAttribute('placeholder','Tapez votre proposition')

let InputLabel = document.createElement("label")
InputLabel.setAttribute('fot','playerInput')
InputLabel.innerHTML = "Devniez un nombre entre 1 et 100 "

let submitButton = document.createElement("button")
submitButton.innerHTML = "Valider"
submitButton.addEventListener('click',compareNumber)

zone.appendChild(InputLabel)
zone.appendChild(playerInput)
zone.appendChild(submitButton)
/*le fonctionnement du jeu*/

function compareNumber() {
    count++
    let userNumber = parseInt(playerInput.value)
    let message =` coup n°$ {count'-propositon} : ${userNumber} -`
    if (isNaN(userNumber) ) {
        message("C'est trop grand")
    } else if (userNumber < randomTraget)
    {
            message("C'est trop petit ")
        } else{
        message("Bravo t'as trouvé")
        }
    }
    let newMessage = document.createElement('p')
    newMessage.innerHTML += message
    zone.appendChild(newMessage)
}
/*on configure les évènements*/

menu.addEventListener("change",menuChange)

function reset () {

}

function fairNumber () {

}

function ticTacDoe () {

    reset ()
    console.log ('jeu du morpion')
    let squares = []
    let redPlayer = true

    let infoPanel = document.createElement('div')
    infoPanel.classList.add('infoPanel')

    let grid = documemnt.createElement('div')
    grid.classList.add('grid')

    zone.appendChild(infoPanel)
    zone.appendChild(grid)
    zone.classList.add('ttdZone')
}
 /*création de la grille*/
for(let  i=0; i<9; i++)
let squares = document.createElement('div')
squares.classList.add('square')
grid.appendChild(squares)
squares.push(squares)
isActive.push(True)

function squareClick(squareNumber) {
    if(isActive[squareNumber]) {
if(redPlayer){
    this.style.backgroundImage = '../assets/rouge.png'
score(squarNumber) = 1
else{
    this.style.backgroundImage = '../assets/vert.png'
    score[squareNumber] = false
}
}
isActive(squarNumber) = false
redPlayer = !redPlayer
clickvictory 
console.log(score)
    }
}
function checkVictory(){
let lineScore = {
    score[3]+score[1]+score[2],
    score[6]+score[4]+score[5],
    score[0]+score[7]+score[8],
    score[1]+score[3]+score[6],
    score[2]+score[4]+score[7],
    score[0]+score[5]+score[8],
    score[0]+score[4]+score[8],
    score[2]+score[4]+score[6]
}


}
let endGameMesage = ""
if(lineScore.contains(3)){
  endGameMesage = * Victoire rouge*
  else if (lineScore.contains(12)){
  endGameMesage = *Victoire vert*
  else if (isActive.contains(true))

  }
  console.log(lineScore)
}
function.endGame () {

    for(let i = 0; i++) {
        isActive[i]= false 
    }
    let gameOverMessage = document.createElement('h2')
    gameOverMessage.classList.add('gameOver')
    
}
}
/*on configure les évènements*/

menu.addEventListener("change",menuChange)

