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
