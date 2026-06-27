import { setCookie, getCookie } from './cookie.js'

export async function popUpButton(idBtn, idClose, effect){
    
    if (idClose === undefined || idClose === null && idBtn === undefined || idBtn === null) {
        console.error(`Paramètre manquant:\n Nom de l'id du bouton : ${idBtn} - Nom de l'id de l'élément manquant ${idClose}`)
    }else if(await getCookie(idClose.id)) {
        idClose.style.display = "none"
        document.body.style.overflow = ""
    }else{
        let ok = true
        idBtn.addEventListener("click", () =>{
            if (typeof effect === "number" || typeof effect === "string" || Array.isArray(effect)){
                console.error(`Erreur de paramètre ; ${effect} n'est pas une fonction`)
                ok = false
            }else if (typeof effect === "function"){
    
                effect(idClose)
    
                const display = () =>{
                    idClose.style.display = "none"
                }
    
                setTimeout(display, 5000);
            }else{
                idClose.style.display = "none"
            }
    
            document.body.style.overflow = ""
            if (ok) { setCookie(idClose.id, "true", null)}

        })
    }
}
