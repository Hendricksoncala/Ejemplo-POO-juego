export class Item {
    constructor(nombre, tipo, efecto) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.efecto = efecto; // Efecto es directamente el valor numérico (daño o vida)
    }
}