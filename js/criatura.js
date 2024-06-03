export class criatura {
    #vida = 20
    #defensa = 70
    #dano = 5
    constructor(){
        this.undefined = 0
    }
    set setNombre(nom){
        this.nombre = nom;
    }
    set setVida(puntos){
        this.#vida += puntos;
    }
    // get getDefensa(){
    //     return this.#defensa;
    // }

    atacar(objetivo){
        console.lig (`${this.nombre} ataca a $ ${objetivo.nombre}`);
        objetivo.recibir
    }    

    
}