"use strict";
import * as ui from '/ui.mjs'

window.addEventListener("load", eventListeners);

let petColor;

function eventListeners(){
    petColor = document.querySelector("#skinColor");
}

//Flags for certain behaviours to occur
//export let hungry = false;
//export let needClean = false;
//export let needSleep = false; //ASK MATT OR RICH WHY THIS IS STILL WORKING EVEN WHEN COMMENTED OUT!!!!!!!!!!!!!!!

//Incriment Varibles (Per Click)
const foodInc = 15.0;
const sleepInc = 75.0;
const cleanlinessInc = 100.0;

//Decrement Variables (Per Second)
export const foodDec = 0.5;
export const sleepDec = 0.5;
export const cleanlinessDec = 0.25;

export let stats = {
    name : "default",
    food : 50,
    cleanliness : 50,
    sleep : 50,
    hungry : false,
    needClean : false,
    needSleep : false
};

export function setColor(){
    //console.log(petColor);
    //console.log("red slider: " + ui.redSlider.value);
    //console.log("green slider: " + ui.greenSlider.value);
    //console.log("blue slider: " + ui.blueSlider.value);
    petColor.style.fill = `rgb(${ui.redSlider.value}, ${ui.greenSlider.value}, ${ui.blueSlider.value})`;
}

export function feedPet(){
    if((stats.food + foodInc) > 100){ 
        stats.food = 100;
        return;
    } 
    stats.food += foodInc; 
}

export function cleanPet(){
    if((stats.cleanliness + cleanlinessInc) > 100){ 
        stats.cleanliness = 100;
        return;
    } 
    stats.cleanliness += cleanlinessInc;
}

export function sleepPet(){
    if((stats.sleep + sleepInc) > 100){ 
        stats.sleep = 100;
        return;
    } 
    stats.sleep += sleepInc;
}