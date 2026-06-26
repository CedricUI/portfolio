import { domElement } from './config/domElements.js'

const popUpIntro = domElement.popUpIntro

const div = document.createElement('div')
div.className = 'info'

const p = document.createElement('p')
p.textContent = "Mon portfolioi est en cours..."

div.prepend(p)


export const infoBulle = popUpIntro.append(div)