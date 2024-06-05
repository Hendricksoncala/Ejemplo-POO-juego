import { criatura } from "./criatura.js";
import { Item } from "./item.js";

export class heroe extends criatura {
    #pechera = true;
    
    constructor(nombre, vida, defensa, dano = 5) {
        super(nombre, vida, defensa, dano);
        this.inventario = []; // Array para almacenar los items
    }

    agregarItem(item) {
        this.inventario.push(item);
    }

    usarItem(item) {
        if (item.tipo === "arma") {
            this.setDaño(this.getDano() + item.efecto.dano); // Corregido: dano -> daño
        } else if (item.tipo === "pocion") {
            this.setVida(this.getVida() + item.efecto.vida);
        }
        // Lógica para eliminar el item del inventario si es consumible
    }

    mostrarInventario(gameLog) {
        if (this.inventario.length === 0) {
            gameLog.innerHTML += "<p>Inventario vacío.</p>";
        } else {
            gameLog.innerHTML += "<p>Inventario:</p>";
            this.inventario.forEach(item => {
                gameLog.innerHTML += `<p>- ${item.nombre} (${item.tipo})</p>`;
            });
        }
    }

    armadura() {
        if (this.#pechera) {
            this.setDefensa(120); // Usar el setter para modificar la defensa
        }
    }
}