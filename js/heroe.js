import { criatura } from "./criatura.js";

export class heroe extends criatura {
    #pechera = true;

    constructor(nombre, vida, defensa, dano = 5) {
        super(nombre, vida, defensa, dano); // Pasar todos los argumentos al constructor padre
    }

    armadura() {
        if (this.#pechera) {
            this.setDefensa(120); // Usar el setter para modificar la defensa
        }
    }
}