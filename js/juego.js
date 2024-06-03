import { criatura } from "./criatura.js";
import { monstruo } from "./monstruo.js";

export class juego {
    constructor() {
        this.historial = [];
        this.monstruo = null;
        this.heroe = null;
    }

    iniciarJuego(gameLog) {
        this.generarMonstruo();

        const atacarBtn = document.getElementById("atacarBtn");
        const investigarBtn = document.getElementById("investigarBtn");

        atacarBtn.addEventListener("click", () => {
            this.atacarMonstruo(this.heroe.getdano(), gameLog);
            if (this.monstruo && this.monstruo.getVida() > 0) {
                this.atacarHeroe(this.monstruo.getdano(), gameLog);
            } else {
                this.generarMonstruo();
            }
        });

        investigarBtn.addEventListener("click", () => {
            this.investigarMonstruo(gameLog);
        });
    }

    generarMonstruo() {
        this.monstruo = this.generarMonstruoAleatorio();
        this.loguearAccion(`¡Un ${this.monstruo.nombre} ha aparecido!`);
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

    investigarMonstruo(gameLog) {
        if (this.monstruo && this.monstruo.getVida() > 0) {
            const infoMonstruo = `Nombre: ${this.monstruo.nombre}, Vida: ${this.monstruo.getVida()}, Defensa: ${this.monstruo.getDefensa()}`;
            this.loguearAccion(infoMonstruo, gameLog);
        } else {
            this.loguearAccion("No hay monstruo activo o está muerto.", gameLog);
        }
    }

    atacarMonstruo(dano, gameLog) {
        if (this.monstruo && this.monstruo.getVida() > 0) {
            this.monstruo.setVida(this.monstruo.getVida() - dano);
            this.loguearAccion(`Atacaste al monstruo por ${dano} puntos de dano.`, gameLog);
            if (this.monstruo.getVida() <= 0) {
                this.loguearAccion("¡Has derrotado al monstruo!", gameLog);
                this.monstruo = null;
            }
        } else {
            this.loguearAccion("No hay monstruo activo o está muerto.", gameLog);
        }
    }

    atacarHeroe(dano, gameLog) {
        this.heroe.setVida(this.heroe.getVida() - dano);
        this.loguearAccion(`El monstruo te atacó por ${dano} puntos de dano.`, gameLog);
        if (this.heroe.getVida() <= 0) {
            this.loguearAccion("¡Has sido derrotado!", gameLog);
        }
    }
}