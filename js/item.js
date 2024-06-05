export class Item {
    constructor(nombre, tipo, efecto) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.efecto = {
            dano: efecto // Asegúrate de que efecto sea un número
        }; 
    }
}