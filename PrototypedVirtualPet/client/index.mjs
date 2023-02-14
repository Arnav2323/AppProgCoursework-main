"use strict";

import * as update from '/update.mjs';
import * as ui from '/ui.mjs'

window.addEventListener("load", eventlisteners);

function eventlisteners(){
    //Runs certain functions at setinverals
    setInterval(update.decrementStats, 1000);// 1 update per second
    setInterval(ui.ui, 50); // 20 updates per second
}


