export class criatura {
    #vida;
    #defensa;
    #dano;

    constructor(nombre, vida, defensa, dano = 5) {
        this.nombre = nombre;
        this.#vida = vida;
        this.#defensa = defensa;
        this.dano = dano; 
    }

    // ... (Getters y Setters sin cambios)
    getDano() {
        return this.#dano;
    }

    getVida(){
        this.#vida = this.#vida - this.#dano;
        return this.#vida;
    }
    getDefensa(){
        return this.#defensa
    }

    setVida(){
        return this.#vida;
    }
    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo.nombre}`);
        objetivo.recibirDaño(this.#dano); // Llama al método recibirDaño del objetivo
    }

    recibirDaño(daño) {
        const dañoRecibido = Math.max(0, daño - this.#defensa); // Calcula el daño real
        this.#vida -= dañoRecibido;
        console.log(`${this.nombre} recibe ${dañoRecibido} puntos de daño. Vida restante: ${this.#vida}`);
    }




}
export function dano(){
    return new this.dano;
}


