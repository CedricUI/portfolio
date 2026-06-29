export function closeBtn(idBtn, idClose, effect = null){
    const conditionIdBtn = typeof idBtn !== "object" || idBtn === null || Array.isArray(idBtn) || idBtn === undefined 
    const conditionIdClose = typeof idClose !== "object"|| idClose === null || Array.isArray(idClose) || idClose === undefined

    if (conditionIdBtn || conditionIdClose) {
        console.error(`Paramètre manquant:\n Nom de l'id du bouton : ${idBtn} - Nom de l'id de l'élément manquant ${idClose}`)
    }
        idBtn.addEventListener("click", () =>{

            if (typeof effect === "function"){
                effect(idClose)
    
                const display = () =>{
                    idClose.style.display = "none"
                }
                setTimeout(display, 5000);

                document.body.style.overflow = ""

            }else if (effect === null || effect === undefined){
                idClose.style.display = "none"
                document.body.style.overflow = ""
            }else{
                console.error(`Erreur de paramètre ; ${effect} n'est pas une fonction`)
            }
        })

}