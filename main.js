
import { heroe } from "./js/heroe.js";
import { juego } from "./js/juego.js";

const heroForm = document.getElementById("heroForm");
const gameLog = document.getElementById("gameLog");
const atacarBtn = document.getElementById("atacarBtn");
const investigarBtn = document.getElementById("investigarBtn");
const reiniciarBtn = document.getElementById("reiniciarBtn");

let nombreheroe;
let mijuego = null; // Declarar mijuego como null al inicio

heroForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const heroNameInput = document.getElementById("heroName");
    nombreheroe = heroNameInput.value;

    if (nombreheroe.trim() === "") {
        alert("Por favor, ingresa un nombre para tu héroe.");
        return;
    }

    const miheroe = new heroe(nombreheroe, 100, 10, 20);
    mijuego = new juego(); // Crear la instancia de Juego
    mijuego.heroe = miheroe;

    gameLog.innerHTML = `¡Bienvenido, ${nombreheroe}!`;
    mijuego.iniciarJuego(gameLog);

    heroForm.style.display = "none";
    atacarBtn.disabled = false;
    investigarBtn.disabled = false;
});

reiniciarBtn.addEventListener("click", () => {
    if (mijuego) { // Verificar si mijuego está definido
        mijuego.reiniciarJuego(gameLog);
        heroForm.style.display = "block";
        atacarBtn.disabled = true;
        investigarBtn.disabled = true;
        reiniciarBtn.disabled = true;
    }
});