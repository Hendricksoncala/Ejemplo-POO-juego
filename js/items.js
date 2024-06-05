export class Item {
    constructor(nombre, tipo, efecto) {
        this.nombre = nombre;
        this.tipo = tipo; // Puede ser "arma" o "pocion"
        this.efecto = efecto; // Un objeto que describe el efecto del item (ej: { daño: 10, vida: 25 })
    }

    
}

const espada = new Item("Espada afilada", "arma", { dano: 10 });
const pocion = new Item("Poción de vida", "pocion", { vida: 25 });
miheroe.agregarItem(espada);
miheroe.agregarItem(pocion);