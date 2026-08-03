import { domElement } from "./config/domElements.js";

const slid = domElement.slid
const slides = domElement.slides
const flexSild = domElement.flexSild
const btnProjects = domElement.btnProjects



export const projects = [
    { link:"https://github.com/CedricUI/make-your-game", title:"Make your game", image:"https://static.wikia.nocookie.net/ssb/images/c/ca/Bomberman.png/revision/latest?cb=20220510092204", description:"Ce projet contient une version légère du jeu Bomberman avec déplacement, pose de bombes, explosions et ennemis.", languages:["HTML", "CSS", "JS"]},
    { link:"https://github.com/CedricUI/forum", title:"Forum", image:"asset/video/forum.gif", description:"Forum web développé en Go avec SQLite, intégrant authentification, posts, commentaires, likes/dislikes, filtres et conteneurisation Docker.", languages:["Go", "HTML", "CSS", "JS", "SQLite"]},
    { link:"https://github.com/CedricUI/lem-in", title:"Lem-in", image:"https://www.gifsanimes.com/data/media/183/fourmi-image-animee-0029.gif", description:"Simulation de colonie de fourmis en Go utilisant des algorithmes de recherche de chemin pour optimiser les déplacements dans un graphe.", languages:["Go"]},
    { link:"https://evreux-muay-thai-gym.fr/", title:"Site E-commerce WP", image:"asset/video/evreux-muya-thai.gif", description:"Site e-commerce WordPress dédié à la boxe thaï : achat de licences,Investigation, t-shirts et équipements sportifs en ligne.", languages:["WordPress"]}
];
slides[0].innerHTML = projects.map(project => `
    <div id = ${project.index}>
    <dt class="slid-title">
            <a href="${project.link}">
                <figure>
                    <img src="${project.image}" alt="${project.title}" width="331" height="250" loading="lazy" decoding="async">
                    <figcaption>${project.title}</figcaption>
                </figure>
            </a>
        </dt>
        <dd class="slid-description">
            <div>
                <span>Langage&nbsp;:</span>
                <ul>
                    ${project.languages.map(language => `<li class="${language.toLowerCase() }">${language}</li>`).join('')}
                </ul>
            </div>
            <p>${project.description}</p>
        </dd>
    </div>
`).join('');

const menu = document.createElement('menu')

for (let index = 0; index < projects.length ; index++) {
    const button = document.createElement('button')
    button.className ='btn-projects'
    button.append(projects[index].title)
    menu.append(button) 
}

flexSild.append(menu)

let slideStep = 0;

window.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
        slideStep = 531;
    } else {
        slideStep = 431;
    }
});
// if (window.innerWidth < 1024) {
//    slideStep = 531;
// } else {
//     slideStep = 431;
// }

const attachSlideButton = (button, index, container) => {
    button.addEventListener("click", () => {
        container.scrollTo({
            left: slideStep * index,
            behavior: "smooth"
        });
    });
};
const btnProjectsArray = Array.from(btnProjects);
btnProjectsArray.forEach((button, index) => {
    attachSlideButton(button, index, slid[0]);
});
            