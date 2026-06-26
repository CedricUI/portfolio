export function closeBtn(idBtn, idClose, effect){
    console.log("effect", effect)
    if (idClose === undefined || idClose === null && idClose === undefined || idClose === null) {
        console.info(`Paramètre manquant:\n Nom de l'id du bouton : ${idClose} - Nom de l'id de l'élément manquant ${idClose}`)
    }
    
    idBtn.addEventListener("click", () =>{

        if (typeof effect === "function"){
            effect(idClose)
        }else if (
            typeof effect === "number" ||
            typeof effect === "string" ||
            Array.isArray(effect)
        ){
            console.info("Erreur de paramètre")
        }else{
            idClose.style.display = "none"
        }

        document.body.style.overflow = ""

    })
}
