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

    atacarMonstruo(){
        if(this.monstruo && this.mounstro.getVida() > 0) {
            this.monstruo.setVida(this.monstruo.getVida() - dano);
            this.loguearAccion(`Atacaste al mounstro! por ${dano} puntos de dano`);

            if(this.mounstro.getVida() <= 0){
                this.loguearAccion("Haz Derrotado al monstruo!!!");
                this.monstruo = null //no deberia haber monstruo porque murio
            }
        }else {
            this.loguearAccion("No hay mostruo activo o esta muerto. ")
        }
    }
}