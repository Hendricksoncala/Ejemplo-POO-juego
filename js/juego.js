import { criatura } from "./criatura.js";
import { monstruo } from "./monstruo.js";

export class juego {
    constructor() {
        this.historial = [];
        this.monstruo = null;
        this.heroe = null;
        this.heroVidaSpan = document.getElementById("heroVida");
        this.heroDañoSpan = document.getElementById("heroDaño");
        this.monstruoVidaSpan = document.getElementById("monstruoVida");
    }

    iniciarJuego(gameLog) {
        this.generarMonstruo(gameLog);

        const atacarBtn = document.getElementById("atacarBtn");
        const investigarBtn = document.getElementById("investigarBtn");

        atacarBtn.addEventListener("click", () => {
            this.atacarMonstruo(gameLog);
        });

        investigarBtn.addEventListener("click", () => {
            this.investigarMonstruo(gameLog);
        });

        this.actualizarInterfaz(); 
    }


    actualizarInterfaz() {
        this.heroVidaSpan.textContent = this.heroe.getVida();
        this.heroDañoSpan.textContent = this.heroe.getDano();
        this.monstruoVidaSpan.textContent = this.monstruo ? this.monstruo.getVida() : 0; // Muestra 0 si no hay monstruo
    }


    generarMonstruo(gameLog) {
        this.monstruo = this.generarMonstruoAleatorio();
        this.loguearAccion(`¡Un ${this.monstruo.nombre} ha aparecido!`, gameLog);
        
        // Habilitar botones
        atacarBtn.disabled = false;
        investigarBtn.disabled = false;

        this.actualizarInterfaz(); 
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
        if (this.monstruo) { // Simplificado: verifica si existe monstruo
            const infoMonstruo = `Nombre: ${this.monstruo.nombre}, Vida: ${this.monstruo.getVida()}, Defensa: ${this.monstruo.getDefensa()}`;
            this.loguearAccion(infoMonstruo, gameLog);
        } else {
            this.loguearAccion("No hay monstruo activo.", gameLog);
        }
        
    }


    atacarMonstruo(gameLog) {
        if (this.monstruo) {
            const dañoHeroe = this.heroe.getDano();
            this.monstruo.recibirDaño(dañoHeroe); // Usa el método recibirDaño para actualizar la vida del monstruo
            this.loguearAccion(`Atacaste al monstruo por ${dañoHeroe} puntos de daño. Vida restante del monstruo: ${this.monstruo.getVida()}`, gameLog);

            if (this.monstruo.getVida() <= 0) {
                this.loguearAccion("¡Has derrotado al monstruo!", gameLog);
                this.monstruo = null;
                document.getElementById("atacarBtn").disabled = true;
                document.getElementById("investigarBtn").disabled = true;
            }
            this.actualizarInterfaz(); // Actualiza la interfaz para mostrar la nueva vida del monstruo
        } else {
            this.loguearAccion("No hay monstruo activo.", gameLog);
        }
    }

    atacarHeroe(dañoMonstruo, gameLog) { // Cambiado nombre de variable
        this.heroe.setVida(this.heroe.getVida() - dañoMonstruo);
        this.loguearAccion(`El monstruo te atacó por ${dañoMonstruo} puntos de daño.`, gameLog);
        if (this.heroe.getVida() <= 0) {
            this.loguearAccion("¡Has sido derrotado!", gameLog);
            // Deshabilitar botones si el héroe es derrotado
            document.getElementById("atacarBtn").disabled = true;
            document.getElementById("investigarBtn").disabled = true;
        }
        this.actualizarInterfaz(); 
    }
     
}