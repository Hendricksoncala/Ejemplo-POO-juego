import { criatura } from "./criatura.js";
import { monstruo } from "./monstruo.js";

export class juego {
    constructor() {
        this.historial = [];
        this.monstruo = null;
        this.heroe = null;
    }

    iniciarJuego(gameLog) { // Recibe gameLog como parámetro
        this.generarMonstruo(gameLog); // Pasa gameLog a generarMonstruo
    
        const atacarBtn = document.getElementById("atacarBtn");
        const investigarBtn = document.getElementById("investigarBtn");
    
        atacarBtn.addEventListener("click", () => {
            this.atacarMonstruo(this.heroe.getDano(), gameLog);
            if (this.monstruo && this.monstruo.getVida() > 0) {
                this.atacarHeroe(this.monstruo.getDano(), gameLog);
            } else {
                this.generarMonstruo(gameLog); // Pasa gameLog a generarMonstruo
            }
        });
    
        investigarBtn.addEventListener("click", () => {
            this.investigarMonstruo(gameLog);
        });
    }


    generarMonstruo(gameLog) { // Recibe gameLog como parámetro
        this.monstruo = this.generarMonstruoAleatorio();
        this.loguearAccion(`¡Un ${this.monstruo.nombre} ha aparecido!`, gameLog); // Pasa gameLog a loguearAccion
    
        // Habilitar botones después de un pequeño retraso
        setTimeout(() => {
            atacarBtn.disabled = false;
            investigarBtn.disabled = false;
        }, 100); // Retraso de 100 milisegundos (ajusta según sea necesario)
    }


    generarMonstruoAleatorio() {
        const tiposMonstruo = [monstruo.crearOrco, monstruo.crearGoblin, monstruo.crearKobold];
        const indiceAleatorio = Math.floor(Math.random() * tiposMonstruo.length);
        return tiposMonstruo[indiceAleatorio]();
    }

    loguearAccion(accion, gameLog) {
        this.historial.push(accion);
        gameLog.innerHTML += `<p>${accion}</p>`;
    }

    investigarMonstruo(gameLog) { // Recibe gameLog como parámetro
        if (this.monstruo && this.monstruo.getVida() > 0) {
            const infoMonstruo = `Nombre: ${this.monstruo.nombre}, Vida: ${this.monstruo.getVida()}, Defensa: ${this.monstruo.getDefensa()}`;
            this.loguearAccion(infoMonstruo, gameLog); // Pasa gameLog a loguearAccion
        } else {
            this.loguearAccion("No hay monstruo activo o está muerto.", gameLog); // Pasa gameLog a loguearAccion
        }
    }

    atacarMonstruo(dano, gameLog) { // Recibe gameLog como parámetro
        if (this.monstruo && this.monstruo.getVida() > 0) {
            this.monstruo.setVida(this.monstruo.getVida() - dano);
            this.loguearAccion(`Atacaste al monstruo por ${dano} puntos de dano.`, gameLog); // Pasa gameLog a loguearAccion
            if (this.monstruo.getVida() <= 0) {
                this.loguearAccion("¡Has derrotado al monstruo!", gameLog); // Pasa gameLog a loguearAccion
                this.monstruo = null;
            }
        } else {
            this.loguearAccion("No hay monstruo activo o está muerto.", gameLog); // Pasa gameLog a loguearAccion
        }
    }

    atacarHeroe(dano, gameLog) { // Recibe gameLog como parámetro
        this.heroe.setVida(this.heroe.getVida() - dano);
        this.loguearAccion(`El monstruo te atacó por ${dano} puntos de dano.`, gameLog); // Pasa gameLog a loguearAccion
        if (this.heroe.getVida() <= 0) {
            this.loguearAccion("¡Has sido derrotado!", gameLog); // Pasa gameLog a loguearAccion
        }
    }
}