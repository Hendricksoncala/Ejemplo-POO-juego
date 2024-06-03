export class criatura {
    #vida;
    #defensa;
    #dano;

    constructor(nombre, vida, defensa, dano = 5) { // Agrega el parámetro daño
        this.nombre = nombre;
        this.#vida = vida;
        this.#defensa = defensa;
        this.#dano = dano; // Inicializa el daño
    }

    // Getters
    getVida() {
        return this.#vida;
    }

    getDefensa() {
        return this.#defensa;
    }

    getDano() {
        return this.#dano;
    }

    // Setters
    setVida(nuevaVida) {
        this.#vida = nuevaVida;
    }

    setDefensa(nuevaDefensa) {
        this.#defensa = nuevaDefensa;
    }

    setDaño(nuevoDaño) {
        this.#dano = nuevoDaño;
    }


    atacar(objetivo){
        console.log (`${this.nombre} ataca a $ ${objetivo.nombre}`);
        objetivo.recibir
    }  
}







  
