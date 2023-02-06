window.addEventListener("Load",eventListeners);

export let feedButton;
export let cleanButton;
export let sleepButton; 
export let feedPetTxt; 
export let sleepPetTxt; 
export let cleanPetTxt;

export function eventListeners(){
    feedPetTxt = document.querySelector("#foodText");
    sleepPetTxt = document.querySelector("#sleepText");
    cleanPetTxt = document.querySelector("#cleanText");
    feedButton = document.querySelector("#feedButton");
    cleanButton = document.querySelector("#cleanButton");
    sleepButton = document.querySelector("#sleepButton");
        
    feedButton.addEventListener("click",feedPet);
    cleanButton.addEventListener("click",cleanPet);
    sleepButton.addEventListener("click",sleepPet);
}
//gets all the buttonns and text I want to read/write
//adds event listeners to buttons that call 
//specfic functions when a certain button is pressed

