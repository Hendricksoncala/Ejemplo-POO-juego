import { criatura } from "./criatura.js";
import { monstruo } from "./monstruo.js";
import { heroe } from "./heroe.js";
import { juego } from "./juego.js";


const defaultCharacter = new criatura("Default", 10, 5); // Agrega valores por defecto
const heroeCharacter = new heroe("Manuel", 100, 10, 20); // Agrega valores para guerrero



const heroForm = document.getElementById("heroForm"); 

heroForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe 

    const heroNameInput = document.getElementById("heroName");
    const nombreHeroe = heroNameInput.value;

    const heroe = new Heroe(nombreHeroe, 100, 10, 20);
    const juego = new Juego();
    juego.heroe = heroe; 

    // Aquí puedes iniciar tu juego usando el nombre del héroe (nombreHeroe)
    console.log(`¡Bienvenido, ${nombreHeroe}!`);
    juego.iniciarJuego(); // Inicia tu juego (debes implementar este método en juego.js)
});



// Crea los monstruos usando los métodos estáticos con la posibilidad de cambiar sus valores 
const orco = monstruo.crearOrco();
// console.log(orco.getVida()); // Obtiene la vida del orco
// orco.setVida(60); // Cambia la vida del orco
// console.log(orco.getVida()); // Ahora mostrará 60


const goblin = monstruo.crearGoblin();
// console.log(goblin.getVida()); 
// goblin.setVida(60);
// console.log(goblin.getVida());


const kobold = monstruo.crearKobold();
// console.log(kobold.getVida()); 
// kobold.setVida(60); 
// console.log(kobold.getVida()); 




console.log(defaultCharacter);
console.log(heroeCharacter);
console.log(orco);
console.log(goblin);
console.log(kobold);