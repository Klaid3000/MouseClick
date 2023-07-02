import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor() {
        super();
        this.items = [];
        this.menuContainer = document.querySelector("#menu");
    }

    open(x, y) {
        if (this.items.length === 0) return;
        
        this.menuContainer.style.left = x + "px";
        this.menuContainer.style.top = y + "px";
        this.menuContainer.style.display = "block";
    }

    close() {
        this.menuContainer.style.display = "none";
    }

    add(module) {
        this.items.push(module);
        const menuItem = document.createElement("li");
        menuItem.className = "menu-item";
        menuItem.innerText = module.text;
        menuItem.addEventListener("click", () => {
            this.close();
            module.trigger();
        });
        this.menuContainer.appendChild(menuItem);
    }
}