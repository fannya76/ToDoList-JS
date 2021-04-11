
// ON RECUPERE LA LISTE PAR l'ID de l'UL
let maliste = document.getElementById('maliste')

// ON ECOUTE LES CLICS SUR LA LISTE 1 ET ON CLONE DANS LA LISTE 2 SI CLIQUé
for (i = 0; i < maliste.children.length; i++) {

    maliste.children[i].addEventListener("click", function (e) {
        clone_li = e.currentTarget.cloneNode(true);  // on clone le li cliqué (non affiché pour le moment)

        maliste2 = document.getElementById("liste2")  // on récupère maliste2 
        maliste2.appendChild(clone_li)               // on affiche le li cloné à la fin de la 2eme liste  
        e.currentTarget.remove()                    // on supprime le li de la 1ère liste

    }, { once: true })        // on écoute un seul clic pour cette fonction de déplacement
}

// ON RECUPERE tout ITEM CLIQUé, dans une FONCTION 
function getTarget(e) {
    e = window.event
    return e.target
}

// ON SELECTIONNE UN LI DE LA LISTE 2 et on lui applique du style
let maliste2 = document.getElementById('liste2')

maliste2.addEventListener("click", function (e) {
    // on supprime la classe selected de tous les li
    for (var i = 0; i < maliste2.children.length; i++) {
        maliste2.children[i].classList.remove("selected")
    }
    // on appelle la fonction getTarget pour récupérer l'élément cliqué (car sinon ul)
    target = getTarget(e)
    target.className = "selected"   // on ajoute la classe selected à l'élément cliqué (en gras et symbole coche)

})
// ON DEPLACE LE LI SELECTIONNé assigné à la variable "target" 
// vers le haut
let haut = document.getElementById('haut')

haut.addEventListener("click", function () {
    if (target.previousElementSibling) {
        maliste2.insertBefore(target, target.previousElementSibling)
    }
})

// vers le bas
let bas = document.getElementById('bas')

bas.addEventListener("click", function () {
    if (target.nextElementSibling) {
        // maliste2.insertBefore(selected, (selected.nextElementSibling).nextElementSibling)
        target.nextElementSibling.insertAdjacentElement("afterend", target);
    }
})

// en premier
let first = document.getElementById('first')

first.addEventListener("click", function () {
    maliste2.insertAdjacentElement("afterbegin", target)
})

// en dernier
let last = document.getElementById('last')

last.addEventListener("click", function () {
    maliste2.insertAdjacentElement("beforeend", target)
})

// on le supprime de liste2, et on le clone dans liste1
let supprimer = document.getElementById('supprimer')

supprimer.addEventListener("click", function () {
    let clone_li = target.cloneNode(true)
    clone_li.className = "list-item"
    maliste.prepend(clone_li)
    maliste2.removeChild(target)


})





