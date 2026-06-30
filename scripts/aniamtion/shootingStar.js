// function createStar(){

//     const container = document.getElementById("shooting-stars");

//     if(!container) return;

//     const star = document.createElement("div");

//     star.className = "shooting-star";

//     //------------------------------------
//     // Position de départ
//     //------------------------------------

//     const x = Math.random()*window.innerWidth;
//     const y = Math.random()*window.innerHeight;

//     star.style.left = x+"px";
//     star.style.top = y+"px";

//     //------------------------------------
//     // Direction aléatoire
//     //------------------------------------

//     const angle = Math.random()*Math.PI*2;

//     const distance = 800;

//     const dx = Math.cos(angle)*distance;
//     const dy = Math.sin(angle)*distance;

//     star.style.setProperty("--dx",dx+"px");
//     star.style.setProperty("--dy",dy+"px");

//     //------------------------------------
//     // Oriente la traînée
//     //------------------------------------

//     star.style.rotate = angle+"rad";

//     //------------------------------------

//     const duration = 1200+Math.random()*600;

//     star.style.animationDuration = duration+"ms";

//     container.appendChild(star);

//     setTimeout(()=>{

//         star.remove();

//     },duration);

// }

// export function launchStars(){
//     createStar();
//     setTimeout(createStar,500);
//     setTimeout(createStar,1000);
// }
// // première salve
// // launchStars();

// // // puis toutes les 3 min
// // setInterval(launchStars,180000);
