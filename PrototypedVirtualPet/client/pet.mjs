"use strict";

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
    sleep : 50
};

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