const slides = document.getElementsByClassName('slid-list');
export const projects = [
    {link:"https://github.com/CedricUI/forum", title:"Projet Forum", image:"asset/video/forum.gif", description:"Forum web développé en Go avec SQLite, intégrant authentification, posts, commentaires, likes/dislikes, filtres et conteneurisation Docker.", languages:["Go", "HTML", "CSS", "JS", "SQLite"]},
    {link:"https://github.com/CedricUI/lem-in", title:"Lem-in", image:"https://www.gifsanimes.com/data/media/183/fourmi-image-animee-0029.gif", description:"Simulation de colonie de fourmis en Go utilisant des algorithmes de recherche de chemin pour optimiser les déplacements dans un graphe.", languages:["Go"]},
    {link:"https://evreux-muay-thai-gym.fr/", title:"Site E-commerce WP", image:"asset/video/evreux-muya-thai.gif", description:"Site e-commerce WordPress dédié à la boxe thaï : achat de licences,Investigation, t-shirts et équipements sportifs en ligne.", languages:["WordPress"]}
];
slides[0].innerHTML = projects.map(project => `
    <div>
        <dt class="slid-title">
            <a href="${project.link}">
                <figure>
                    <img src="${project.image}" alt="${project.title}">
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