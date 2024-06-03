import { criatura } from "./criatura.js";

export class monstruo extends criatura {

    constructor(nombre, vida, defensa, dano){
        super(nombre, vida, defensa, dano);
        
    }

    static crearOrco() {
        return new monstruo("Orco", 50, 0, 35);
    }

    static crearGoblin() {
        return new monstruo("Goblin", 20, 0, 15);
    }

    static crearKobold() {
        return new monstruo("Kobold", 30, 0, 60);
    }
}