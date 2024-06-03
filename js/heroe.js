import { criatura } from "./criatura.js";
export class heroe extends criatura{
    #pechera = true;
    constructor(nom){
        super();
        this.setNombre = nom;
        this.setVida = 10;
        this.getDefensa;
    }
    armadura(){
        if(this.#pechera) this.getDefensa = 120;
    }
}