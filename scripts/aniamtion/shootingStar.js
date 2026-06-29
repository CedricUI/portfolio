const container = document.getElementById("shooting-stars");

function createStar(){

    const star = document.createElement("div");

    star.className = "shooting-star";

    //-----------------------------------
    // Position aléatoire
    //-----------------------------------

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    //-----------------------------------
    // Direction aléatoire
    //-----------------------------------

    const angle = Math.random() * Math.PI * 2;

    const distance = 700;

    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    star.style.setProperty("--dx", `${dx}px`);
    star.style.setProperty("--dy", `${dy}px`);

    //-----------------------------------
    // Orientation de la traînée
    //-----------------------------------

    star.style.transform = `rotate(${angle}rad)`;

    //-----------------------------------
    // Animation
    //-----------------------------------

    const duration = 1200 + Math.random()*600;

    star.style.animation =
        `shooting ${duration}ms linear forwards`;

    container.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },duration);

}

export  function launchStars(){

    createStar();

    setTimeout(createStar,700);

    setTimeout(createStar,1400);

}

// Première salve
// launchStars();

// Puis toutes les 3 minutes
// setInterval(launchStars,180000);