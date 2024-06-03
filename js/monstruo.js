import { criatura } from "./criatura.js"; // Importación correcta con nombre en mayúscula

export class monstruo extends criatura {

    constructor(nombre, vida, defensa){
        super(nombre, vida, defensa);
        
    }

    static crearOrco() {
        return new monstruo("Orco", 50, 0);
    }

    static crearGoblin() {
        return new monstruo("Goblin", 20, 0);
    }

    static crearKobold() {
        return new monstruo("Kobold", 30, 0);
    }
}