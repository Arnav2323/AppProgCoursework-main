import * as pet from './pet.mjs';
import * as ui from './ui.mjs';

window.addEventListener("load", eventListeners);

function eventListeners(){
    setInterval(pet.decrementStats, 1000);// 1 update per second
    setInterval(ui.ui, 50); // 20 updates per second
}