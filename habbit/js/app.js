'use strict';

const HABBIT_KEY = 'HABBIT_KEY';
let habbits = [];

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
function renderMenu(activeMenuId) {
    if (!activeMenuId) {
        return;
    }

    

}

function renderPage(activeHabbitId) {
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
    
    renderMenu(activeHabbit.id);
}

/* Run App single */
(() => {
    loadData();
    renderPage(habbits[0].id);
})();