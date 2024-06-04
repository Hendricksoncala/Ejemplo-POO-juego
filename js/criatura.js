export class criatura {
    #vida;
    #defensa;
    #dano;

    constructor(nombre, vida, defensa, dano = 5) {
        this.nombre = nombre;
        this.#vida = vida;
        this.#defensa = defensa;
        this.#dano = dano; 
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
        objetivo.recibirDaño(this.#dano);
    }  

    recibirDaño(daño) {
        const dañoRecibido = Math.max(0, daño - this.#defensa);
        this.#vida -= dañoRecibido;
        console.log(`${this.nombre} recibe ${dañoRecibido} puntos de daño. Vida restante: ${this.#vida}`);
    }
}