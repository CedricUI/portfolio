export function closeBtn(idBtn, idClose, effect){
    console.log("effect", effect)
    if (idClose === undefined || idClose === null && idClose === undefined || idClose === null) {
        console.error(`Paramètre manquant:\n Nom de l'id du bouton : ${idClose} - Nom de l'id de l'élément manquant ${idClose}`)
    }
    
    idBtn.addEventListener("click", () =>{
        if (typeof effect === "function"){
            effect(idClose)
            const display = () =>{
                idClose.style.display = "none"
            }
            setTimeout(display, 5000);
        }else if (
            typeof effect === "number" ||
            typeof effect === "string" ||
            Array.isArray(effect)
        ){
            console.error(`Erreur de paramètre ; ${effect} n'est pas une fonction`)
        }else{
            idClose.style.display = "none"
        }

        document.body.style.overflow = ""
    })
}
