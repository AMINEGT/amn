/*Recuperation des ékéments html*/

let menu = document.getElementById("menu")
let zone = document.getElementById("gameZone")

/*définit les fonctions*/

function menuChange() {
    switch(menu.value) {
    case '1':
        fairNumber()
        
        break
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
function compareNumber() 
    count++
    let userNumber = parseInt(playerInput.value)
    let message = 'coup n°$ {count'-propositon} : ${userNumber} -'
    if (isNaN(userNumber) ) {
        message("C'est trop grand")
         else if (userNumber < randomTraget){
            message("C'est trop petit ")
        } else{
        message("Bravo t'as trouvé")
        }


/*on configure les évènements*/

menu.addEventListener("change",menuChange)