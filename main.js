import { heroe } from "./js/heroe.js";
import { juego } from "./js/juego.js";

const heroForm = document.getElementById("heroForm");
const gameLog = document.getElementById("gameLog");

let nombreheroe; // Declarar nombreheroe a nivel global

heroForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const heroNameInput = document.getElementById("heroName");
    nombreheroe = heroNameInput.value;

    // Validar que se haya ingresado un nombre
    if (nombreheroe.trim() === "") {
        alert("Por favor, ingresa un nombre para tu héroe.");
        return; // Detener la ejecución si no hay nombre
    }

    const miheroe = new heroe(nombreheroe, 100, 10, 20);
    const mijuego = new juego();
    mijuego.heroe = miheroe;

    gameLog.innerHTML = `¡Bienvenido, ${nombreheroe}!`; // Mostrar bienvenida aquí
    mijuego.iniciarJuego(gameLog);
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