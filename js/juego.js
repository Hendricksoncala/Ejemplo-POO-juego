import { criatura } from "./criatura";
import { monstruo } from "./monstruo";
export class juego{
    constructor(){
        this.historial = [];
        this.mounstro= null;

    }

    loguearAccion(accion){
        this.historial.push(accion);
        console.log(accion);
    }

    investigarMonstruo(){
        if(this.monstruo && this.monstruo.getVida() > 0) {
            const infoMonstruo = `Nombre: ${this.monstruo.nombre}, Vida: ${this.monstruo.getVida}, Defensa: ${this.monstruo.getDefensa}`
            this.loguearAccion(infoMonstruo)
        }
    }
}