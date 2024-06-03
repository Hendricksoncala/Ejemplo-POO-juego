import { juego } from "./js/juego.js";
import { heroe } from "./js/heroe.js";

const heroForm = document.getElementById("heroForm");
const gameLog = document.getElementById("gameLog"); // Para mostrar el log del juego

heroForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const heroNameInput = document.getElementById("heroName");
    const nombreheroe = heroNameInput.value;

    const miheroe = new heroe(nombreheroe, 100, 10, 20);
    const mijuego = new juego();
    mijuego.heroe = miheroe;

    gameLog.innerHTML = `¡Bienvenido, ${nombreheroe}!`; // Mostrar bienvenida en el div
    mijuego.iniciarJuego(gameLog); // Pasar el elemento gameLog al método iniciarjuego
});

// // Crea los monstruos usando los métodos estáticos con la posibilidad de cambiar sus valores 
// const orco = monstruo.crearOrco();
// // console.log(orco.getVida()); // Obtiene la vida del orco
// // orco.setVida(60); // Cambia la vida del orco
// // console.log(orco.getVida()); // Ahora mostrará 60


// const goblin = monstruo.crearGoblin();
// // console.log(goblin.getVida()); 
// // goblin.setVida(60);
// // console.log(goblin.getVida());


// const kobold = monstruo.crearKobold();
// // console.log(kobold.getVida()); 
// // kobold.setVida(60); 
// // console.log(kobold.getVida()); 





// console.log(heroeCharacter);
// console.log(orco);
// console.log(goblin);
// console.log(kobold);