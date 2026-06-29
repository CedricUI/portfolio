import { setCookie, getCookie } from './cookie.js'
import { closeBtn } from './closeBtn.js'

export async function popUpButton(idBtn, idClose, effect){
    
    if(await getCookie(idClose.id)) {
        idClose.style.display = "none"
        document.body.style.overflow = ""
    }else{
        closeBtn(idBtn, idClose, effect)
        setCookie(idClose.id, "true", null)
    }
}
