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


    feedButton.addEventListener("click",feedPet);
    cleanButton.addEventListener("click",cleanPet);
    sleepButton.addEventListener("click",sleepPet);
}

//Flags for certain behaviours to occur
let hungry = false;
let needClean = false;
let needSleep = false;

//Incriment Varibles (Per Click)
const foodInc = 15.0;
const sleepInc = 75.0;
const cleanlinessInc = 100.0;

//Decrement Variables (Per Second)
const foodDec = 0.5;
const sleepDec = 0.5;
const cleanlinessDec = 0.25;



//Runs certain functions at setinverals
setInterval(decrementStats, 1000);// 1 update per second
setInterval(ui, 50); // 20 updates per second

//initialising the pet
let pet = {
    name : "default",
    food : 50,
    cleanliness : 50,
    sleep : 50
};

function feedPet(){
    if((pet.food + foodInc) > 100){ 
        pet.food = 100;
        return;
    } 
    pet.food += foodInc; 
}

function cleanPet(){
    if((pet.cleanliness + cleanlinessInc) > 100){ 
        pet.cleanliness = 100;
        return;
    } 
    pet.cleanliness += cleanlinessInc;
}

function sleepPet(){
    if((pet.sleep + sleepInc) > 100){ 
        pet.sleep = 100;
        return;
    } 
    pet.sleep += sleepInc;
}

//This function decrements the pets stats. it also ensures nothing goes below 0;
function decrementStats(){
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

//This function manages the UI and runs at 20 times per second
function ui(){
    if(hungry){
        feedPetTxt.textContent = `Food Stat: ${pet.food} IM HUNGRY PLEASE FEED ME!!!`
    }
    else{
        feedPetTxt.textContent = `Food Stat: ${pet.food}`;
    }

    if(needClean){
        cleanPetTxt.textContent = `Cleanliness Stat: ${pet.cleanliness} CLEAN ME PLEASE!!!`;
    }
    else{
        cleanPetTxt.textContent = `Cleanliness Stat: ${pet.cleanliness}`;
    }

    if(needSleep){
        sleepPetTxt.textContent = `Sleep Stat: ${pet.sleep} PUT ME TO SLEEP!!!`;
    }
    else{
        sleepPetTxt.textContent = `Sleep Stat: ${pet.sleep}`;
    }
    
}

// console.log(`Starting Stats:
// name : ${pet.name}
// food : ${pet.food}
// cleanliness : ${pet.cleanliness}
// sleep : ${pet.sleep}`);


