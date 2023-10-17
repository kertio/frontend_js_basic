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


/* Run App single */
(() => {
    loadData();
})();