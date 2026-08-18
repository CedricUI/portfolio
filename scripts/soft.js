import { domElement } from "./config/domElements.js";

export const softLi = domElement.softLi;

const softskills = {
    "autonomie": "Capacité à travailler seul, prendre des initiatives et avancer sans avoir besoin d'une supervision constante.",
    "fiabilité": "Capacité à respecter ses engagements, être ponctuel et produire un travail de qualité sur lequel les autres peuvent compter.",
    "esprit d'équipe": "Capacité à collaborer efficacement avec les autres, communiquer et contribuer à atteindre un objectif commun.",
    "curiosité": "Envie d'apprendre, de découvrir de nouvelles choses et de chercher à comprendre son environnement.",
    "créativité": "Capacité à imaginer de nouvelles idées et à trouver des solutions originales face à un problème."
};

softLi.forEach((li) => {
    const skill = li.textContent.trim().toLowerCase();

    li.addEventListener("mouseenter", () => {
        if (softskills[skill] && !li.querySelector(".skill-description")) {
            const span = document.createElement("span");

            span.classList.add("skill-description");
            span.textContent = softskills[skill];

            li.appendChild(span);
        }
    });

    li.addEventListener("mouseleave", () => {
        const span = li.querySelector(".skill-description");

        if (span) {
            span.remove();
        }
    });
});

