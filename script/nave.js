/*on récupère les éléments*/

let nav = document.getElementById("navBar")
let navButton = document.getElementById("Menu")

/*on crée des variables utiles*/

let isHidden = true 

/*on definitles fonctions*/

function moveNav(){
    if(isHidden){
        nav.style.transform = "translateX(20vw)"
        isHidden = false
    }else{
        nav.style.transform = "translateX(-20vw)"
        isHidden = true
    }
}

//on règle les évènements décleancheur

navButton.addEventListener('click',moveNav)