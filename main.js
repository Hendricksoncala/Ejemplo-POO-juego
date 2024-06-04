import { heroe } from "./js/heroe.js";
import { juego } from "./js/juego.js";

const heroForm = document.getElementById("heroForm");
const gameLog = document.getElementById("gameLog");
const atacarBtn = document.getElementById("atacarBtn");
const investigarBtn = document.getElementById("investigarBtn");
const reiniciarBtn = document.getElementById("reiniciarBtn");

let nombreheroe;
let miJuego; // Declaramos miJuego a nivel global

heroForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const heroNameInput = document.getElementById("heroName");
    nombreheroe = heroNameInput.value;

    if (nombreheroe.trim() === "") {
        alert("Por favor, ingresa un nombre para tu héroe.");
        return;
    }

    reiniciarJuego(); // Llama a la función para reiniciar el juego
    heroForm.style.display = "none";
    atacarBtn.disabled = false;
    investigarBtn.disabled = false;
});

reiniciarBtn.addEventListener("click", () => {
    reiniciarJuego(); // Llama a la función para reiniciar el juego
    heroForm.style.display = "block";
    atacarBtn.disabled = true;
    investigarBtn.disabled = true;
    reiniciarBtn.disabled = true;
});

function reiniciarJuego() {
    const miheroe = new heroe(nombreheroe, 100, 10, 20);
    miJuego = new juego(); 
    miJuego.heroe = miheroe;
    gameLog.innerHTML = `¡Bienvenido, ${nombreheroe}!`;
    miJuego.iniciarJuego(gameLog);
}