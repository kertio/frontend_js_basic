'use strict';

const HABBIT_KEY = 'HABBIT_KEY';
let habbits = [];

/* Page*/
const page = {
    menu: document.querySelector('.nav')
}


/* Utils */
function loadData() {
    const data = JSON.parse(localStorage.getItem(HABBIT_KEY));
    if (Array.isArray(data)) {
        habbits = data;
    }
}

function saveData(){
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}


/* Render */
function renderMenu(activeHabbit) {
    if (!activeHabbit) {
        return;
    }

    for (const habbit of habbits) {
        const existMenuItem = document.querySelector(`[menu-id="${habbit.id}"]`);
        if (!existMenuItem) {
            //create
            const element = document.createElement('button');
            element.setAttribute('menu-id', habbit.id);
            element.addEventListener('click', () => renderPage(habbit.id));
            element.classList.add('nav__btn')
            element.innerHTML = `<img src="./icons/${habbit.icon}.svg" alt="${habbit.name}">`;
            
            if (activeHabbit.id === habbit.id) {
                element.classList.add('nav__btn_active');
            }

            page.menu.appendChild(element);
            continue;
        }

        if (activeHabbit.id === habbit.id) {
            existMenuItem.classList.add('nav__btn_active');
        } else {
            existMenuItem.classList.remove('nav__btn_active');
        }
    }
}

function renderHeader(activHabbit) {

}

function renderPage(activeHabbitId) {
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
    
    renderMenu(activeHabbit);
    renderHeader(activeHabbit);
}

/* Run App single */
(() => {
    loadData();
    renderPage(habbits[0].id);
})();