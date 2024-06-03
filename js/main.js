import { criatura } from "./criatura.js";
import { monstruo } from "./monstruo.js";
import { heroe } from "./heroe.js";

const defaultCharacter = new criatura("Default", 10, 5); // Agrega valores por defecto
const heroeCharacter = new heroe("Manuel", 100, 10, 20); // Agrega valores para guerrero

// Crea los monstruos usando los métodos estáticos
const orcoCharacter = monstruo.crearOrco();
const goblinCharacter = monstruo.crearGoblin();
const koboldCharacter = monstruo.crearKobold();

console.log(defaultCharacter);
console.log(heroeCharacter);
console.log(orcoCharacter);
console.log(goblinCharacter);
console.log(koboldCharacter);