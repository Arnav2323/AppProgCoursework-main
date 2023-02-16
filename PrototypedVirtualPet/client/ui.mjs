'use strict';

import * as pet from './pet.mjs';

// Waits for window to load before adding event listeners
window.addEventListener('load', eventListeners);

let feedButton;
let cleanButton;
let sleepButton;
let feedPetTxt;
let sleepPetTxt;
let cleanPetTxt;
let happinessTxt;
let happyMeter;
let foodMeter;
let sleepMeter;
let cleanMeter;
let petNameTxt;
let setPetNameButton;
let petNameInput;
const hasNameBeenSet = false;

let redSlider;
let greenSlider;
let blueSlider;
let saveColor;
let revertColor;

export {
  redSlider, greenSlider, blueSlider, saveColor, revertColor,
  petNameInput, petNameTxt,
};

// gets all the buttonns and text I want to read/write
// adds event listeners to buttons that call
// specfic functions when a certain button is pressed
function eventListeners() {
  feedButton = document.querySelector('#feedButton');
  cleanButton = document.querySelector('#cleanButton');
  sleepButton = document.querySelector('#sleepButton');
  feedPetTxt = document.querySelector('#foodText');
  sleepPetTxt = document.querySelector('#sleepText');
  cleanPetTxt = document.querySelector('#cleanText');
  redSlider = document.querySelector('#redSlider');
  greenSlider = document.querySelector('#greenSlider');
  blueSlider = document.querySelector('#blueSlider');
  saveColor = document.querySelector('#saveColor');
  revertColor = document.querySelector('#revertColor');
  happinessTxt = document.querySelector('#happyText');
  happyMeter = document.querySelector('#happyMeter');
  foodMeter = document.querySelector('#foodMeter');
  sleepMeter = document.querySelector('#sleepMeter');
  cleanMeter = document.querySelector('#cleanMeter');
  petNameInput = document.querySelector('#petName');
  setPetNameButton = document.querySelector('#nameButton');
  petNameTxt = document.querySelector('#petNameTxt');

  feedButton.addEventListener('click', pet.feedPet);
  cleanButton.addEventListener('click', pet.cleanPet);
  sleepButton.addEventListener('click', pet.sleepPet);
  saveColor.addEventListener('click', pet.saveColor);
  revertColor.addEventListener('click', pet.revertColor);
  redSlider.addEventListener('click', pet.previewColor);
  greenSlider.addEventListener('click', pet.previewColor);
  blueSlider.addEventListener('click', pet.previewColor);
  setPetNameButton.addEventListener('click', pet.setName);
}


export function ui() {
  if (pet.stats.hungry) {
    feedPetTxt.textContent = `Food Stat: ${pet.stats.food} IM HUNGRY PLEASE FEED ME!!!`;
  } else {
    feedPetTxt.textContent = `Food Stat: ${pet.stats.food}`;
  }

  if (pet.stats.needClean) {
    cleanPetTxt.textContent = `Cleanliness Stat: ${pet.stats.cleanliness} CLEAN ME PLEASE!!!`;
  } else {
    cleanPetTxt.textContent = `Cleanliness Stat: ${pet.stats.cleanliness}`;
  }

  if (pet.stats.needSleep) {
    sleepPetTxt.textContent = `Sleep Stat: ${pet.stats.sleep} PUT ME TO SLEEP!!!`;
  } else {
    sleepPetTxt.textContent = `Sleep Stat: ${pet.stats.sleep}`;
  }
  happinessTxt.textContent = `Happiness Stat: ${pet.stats.happiness}`;

  if (hasNameBeenSet === false) {
    petNameTxt.textContent = `Pet Name: ${pet.stats.name}`;
  }


  // Meters Updating Below
  foodMeter.value = pet.stats.food;
  cleanMeter.value = pet.stats.cleanliness;
  sleepMeter.value = pet.stats.sleep;
  happyMeter.value = pet.stats.happiness;
}
