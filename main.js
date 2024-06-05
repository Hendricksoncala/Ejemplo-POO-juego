import { heroe } from "./js/heroe.js";
import { juego } from "./js/juego.js";


const heroForm = document.getElementById("heroForm");
const gameLog = document.getElementById("gameLog");
const atacarBtn = document.getElementById("atacarBtn");
const investigarBtn = document.getElementById("investigarBtn");
const reiniciarBtn = document.getElementById("reiniciarBtn");
const inventarioBtn = document.getElementById("inventarioBtn");

let nombreheroe;
let mijuego = new juego();

heroForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const heroNameInput = document.getElementById("heroName");
    nombreheroe = heroNameInput.value;

    if (nombreheroe.trim() === "") {
        alert("Por favor, ingresa un nombre para tu héroe.");
        return;
    }

    const miheroe = new heroe(nombreheroe, 100, 10, 20);
    mijuego.heroe = miheroe;

    // Crear y agregar items al héroe
    const espada = new Item("Espada afilada", "arma", { dano: 10 });
    const pocion = new Item("Poción de vida", "pocion", { vida: 25 });
    miheroe.agregarItem(espada);
    miheroe.agregarItem(pocion);

    gameLog.innerHTML = `¡Bienvenido, ${nombreheroe}!`;
    mijuego.iniciarJuego(gameLog);

    heroForm.style.display = "none";
    atacarBtn.disabled = false;
    investigarBtn.disabled = false;
    inventarioBtn.disabled = false;
});

reiniciarBtn.addEventListener("click", () => {
    mijuego.reiniciarJuego(gameLog);
    heroForm.style.display = "block";
    atacarBtn.disabled = true;
    investigarBtn.disabled = true;
    reiniciarBtn.disabled = true;
    inventarioBtn.disabled = true;
});