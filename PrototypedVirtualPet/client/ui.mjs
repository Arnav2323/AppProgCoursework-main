"use strict";

import * as pet from '/pet.mjs';

//Waits for window to load before adding event listeners
window.addEventListener("load", eventListeners);

let feedButton;
let cleanButton;
let sleepButton; 
let feedPetTxt; 
let sleepPetTxt; 
let cleanPetTxt;

//gets all the buttonns and text I want to read/write
//adds event listeners to buttons that call 
//specfic functions when a certain button is pressed
function eventListeners(){
    feedButton = document.querySelector("#feedButton");
    cleanButton = document.querySelector("#cleanButton");
    sleepButton = document.querySelector("#sleepButton");
    feedPetTxt = document.querySelector("#foodText");
    sleepPetTxt = document.querySelector("#sleepText");
    cleanPetTxt = document.querySelector("#cleanText");


    feedButton.addEventListener("click",pet.feedPet);
    cleanButton.addEventListener("click",pet.cleanPet);
    sleepButton.addEventListener("click",pet.sleepPet);
}

export function ui(){
    if(pet.stats.hungry){
        feedPetTxt.textContent = `Food Stat: ${pet.stats.food} IM HUNGRY PLEASE FEED ME!!!`
    }
    else{
        feedPetTxt.textContent = `Food Stat: ${pet.stats.food}`;
    }

    if(pet.stats.needClean){
        cleanPetTxt.textContent = `Cleanliness Stat: ${pet.stats.cleanliness} CLEAN ME PLEASE!!!`;
    }
    else{
        cleanPetTxt.textContent = `Cleanliness Stat: ${pet.stats.cleanliness}`;
    }

    if(pet.stats.needSleep){
        sleepPetTxt.textContent = `Sleep Stat: ${pet.stats.sleep} PUT ME TO SLEEP!!!`;
    }
    else{
        sleepPetTxt.textContent = `Sleep Stat: ${pet.stats.sleep}`;
    }
    
}