import { criatura } from "./criatura.js";

export class heroe extends criatura {
    #pechera = true;

    constructor(nombre, vida, defensa, dano = 5) {
        super(nombre, vida, defensa, dano);
    }

    armadura() {
        if (this.#pechera) {
            this.setDefensa(120); 
        }
    }
}