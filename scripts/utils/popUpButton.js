import { setCookie, getCookie } from './cookie.js'

export async function popUpButton(idBtn, idClose, effect){
    const conditionIdBtn = typeof idBtn !== "object" && idBtn !== null && !Array.isArray(idBtn) && idBtn !== undefined 
    const conditionIdClose = typeof idClose !== "object" && idClose !== null && !Array.isArray(idClose) && idClose !== undefined

    if (conditionIdBtn || conditionIdClose) {
        console.error(`Paramètre manquant:\n Nom de l'id du bouton : ${idBtn} - Nom de l'id de l'élément manquant ${idClose}`)
    }
    
    if(await getCookie(idClose.id)) {
        idClose.style.display = "none"
        document.body.style.overflow = ""
    }else{
        let ok = true
        idBtn.addEventListener("click", () =>{

            if (typeof effect !== "function"){
                console.error(`Erreur de paramètre ; ${effect} n'est pas une fonction`)
                ok = false
            }else if (typeof effect === "function"){
                effect(idClose)
    
                const display = () =>{
                    idClose.style.display = "none"
                }
                setTimeout(display, 5000);

                document.body.style.overflow = ""
            }else{
                idClose.style.display = "none"
                document.body.style.overflow = ""
            }
    
            if (ok) setCookie(idClose.id, "true", null)
        })
    }
}
