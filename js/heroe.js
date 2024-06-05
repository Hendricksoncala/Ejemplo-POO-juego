import { criatura } from "./criatura.js";
import { Item } from "./item.js";

export class heroe extends criatura {
    #pechera = true;
    
    constructor(nombre, vida, defensa, dano = 5) {
        super(nombre, vida, defensa, dano);
        this.inventario = []; 
        this.dañoAdicionalTemporal = 0; // Nueva propiedad
    }

    agregarItem(item) {
        this.inventario.push(item);
    }

    usarItem(indiceItem, gameLog) {
        const item = this.inventario[indiceItem];

        if (!item) {
            gameLog.innerHTML += "<p>No tienes ese item.</p>";
            return;
        }

        if (item.tipo === "arma") {
            this.dañoAdicionalTemporal = item.efecto.dano;
            gameLog.innerHTML += `<p>Usaste ${item.nombre} y tu daño aumentó en ${item.efecto.dano}.</p>`;
        } else if (item.tipo === "pocion") {
            this.setVida(this.getVida() + item.efecto.vida);
            gameLog.innerHTML += `<p>Usaste ${item.nombre} y recuperaste ${item.efecto.vida} puntos de vida.</p>`;
        }

        this.inventario.splice(indiceItem, 1);
        gameLog.innerHTML += `<p>Eliminaste ${item.nombre} de tu inventario.</p>`;
    }

    mostrarInventario(gameLog) {
        if (this.inventario.length === 0) {
            gameLog.innerHTML += "<p>Inventario vacío.</p>";
        } else {
            gameLog.innerHTML += "<p>Inventario:</p>";
            this.inventario.forEach((item, index) => {
                gameLog.innerHTML += `<p>${index + 1}. ${item.nombre} (${item.tipo})</p>`;
            });
    
            const usarItemForm = document.createElement("form");
            usarItemForm.id = "usarItemForm";
    
            const itemInput = document.createElement("input");
            itemInput.type = "number";
            itemInput.min = "1";
            itemInput.max = this.inventario.length.toString();
            itemInput.placeholder = "Número del item";
            usarItemForm.appendChild(itemInput);
    
            const usarBtn = document.createElement("button");
            usarBtn.type = "submit";
            usarBtn.textContent = "Usar";
            usarItemForm.appendChild(usarBtn);
    
            gameLog.appendChild(usarItemForm);
    
            usarItemForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const indiceItem = parseInt(itemInput.value, 10) - 1;
                this.usarItem(indiceItem, gameLog);
                usarItemForm.remove();
            });
        }}

    getDano() {
        return this.daño + this.dañoAdicionalTemporal; 
    }

    armadura() {
        if (this.#pechera) {
            this.setDefensa(120); 
        }
    }
}