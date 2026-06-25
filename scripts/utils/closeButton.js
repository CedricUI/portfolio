
export function closeBtn(idBtn, idClose){

    if (idClose === undefined || idClose === null && idClose === undefined || idClose === null) {
        console.info(`Paramètre manquant:\n Nom de l'id du bouton : ${idClose} - Nom de l'id de l'élément manquant ${idClose}`)
    }
    
    idBtn.addEventListener("click", () =>{
        idClose.style.display = "none"
        document.body.style.overflow = ""
    })
}
