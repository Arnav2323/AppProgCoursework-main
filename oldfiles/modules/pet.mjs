import * as control from './controls.mjs';

export let hungry = false;
export let needClean = false;
export let needSleep = false;

//Incriment Varibles (Per Click)
export const foodInc = 15.0;
export const sleepInc = 75.0;
export const cleanlinessInc = 100.0;

//Decrement Variables (Per Second)
export const foodDec = 0.5;
export const sleepDec = 0.5;
export const cleanlinessDec = 0.25;

let pet = {
    name : "default",
    food : 50,
    cleanliness : 50,
    sleep : 50
};

export function feedPet(){
    if((pet.food + foodInc) > 100){ 
        pet.food = 100;
        return;
    } 
    pet.food += foodInc; 
}

export function cleanPet(){
    if((pet.cleanliness + cleanlinessInc) > 100){ 
        pet.cleanliness = 100;
        return;
    } 
    pet.cleanliness += cleanlinessInc;
}

export function sleepPet(){
    if((pet.sleep + sleepInc) > 100){ 
        pet.sleep = 100;
        return;
    } 
    pet.sleep += sleepInc;
}

//This function decrements the pets stats. it also ensures nothing goes below 0;
export function decrementStats(){
    if(pet.food <= 0){ 
        pet.food = 0; 
        hungry = true;
    }
    else{
        pet.food -= foodDec;
        hungry = false;
    }

    if(pet.cleanliness <= 0){
        pet.cleanliness = 0;
        needClean = true;
    }
    else{
        pet.cleanliness -= cleanlinessDec;
        needClean = false
    }

    if(pet.sleep <= 0){
        pet.sleep = 0;
        needSleep = true;
    }
    else{
        pet.sleep -= sleepDec;
        needSleep = false;
    }
}
