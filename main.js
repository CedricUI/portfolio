import { domElement } from './scripts/config/domElements.js'
import { popUpButton } from './scripts/utils/popUpButton.js'
import { infoBulle } from './scripts/maintenance.js'
import { effect } from "./scripts/effects/effect.js"


document.body.style.overflow = "hidden"

popUpButton(domElement.popUpCloseBtn, domElement.popUpIntro, effect.disappearance)

infoBulle