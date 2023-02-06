import * as pet from './pet.mjs';
import * as control from './controls.mjs';


export function ui(){
    if(pet.hungry){
        control.feedPetTxt.textContent = `Food Stat: ${pet.food} IM HUNGRY PLEASE FEED ME!!!`
    }
    else{
        control.feedPetTxt.textContent = `Food Stat: ${pet.food}`;
    }

    if(pet.needClean){
        control.cleanPetTxt.textContent = `Cleanliness Stat: ${pet.cleanliness} CLEAN ME PLEASE!!!`;
    }
    else{
        control.cleanPetTxt.textContent = `Cleanliness Stat: ${pet.cleanliness}`;
    }

    if(pet.needSleep){
        control.sleepPetTxt.textContent = `Sleep Stat: ${pet.sleep} PUT ME TO SLEEP!!!`;
    }
    else{
        control.sleepPetTxt.textContent = `Sleep Stat: ${pet.sleep}`;
    }
    
}