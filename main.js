import { domElement } from './scripts/config/domElements.js'
import { closeBtn } from './scripts/utils/closeButton.js'
import { cookie } from './scripts/utils/cookie.js'

document.body.style.overflow = "hidden"
closeBtn(domElement.popUpCloseBtn, domElement.popUpIntro)
cookie()