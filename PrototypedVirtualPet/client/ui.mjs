'use strict';

import * as pet from './pet.mjs';

// Waits for window to load before adding event listeners
window.addEventListener('load', eventListeners);

export const buttons = {
  feedButton: null,
  cleanButton: null,
  sleepButton: null,
  setPetNameButton: null,
  saveColor: null,
  revertColor: null,
  saveGameButton: null,
  loadGameButton: null,
};

export const labels = {
  feedPetTxt: null,
  sleepPetTxt: null,
  cleanPetTxt: null,
  happinessTxt: null,
  petNameTxt: null,
};

export const meters = {
  happyMeter: null,
  foodMeter: null,
  sleepMeter: null,
  cleanMeter: null,
};

export const sliders = {
  redSlider: null,
  greenSlider: null,
  blueSlider: null,
};

export const inputs = {
  petNameInput: null,
};

const canvas = document.getElementById('canvasWindow');
const ctx = canvas.getContext('2d');
// gets all the buttonns and text I want to read/write
// adds event listeners to buttons that call
// specfic functions when a certain button is pressed
function eventListeners() {
  buttons.feedButton = document.querySelector('#feedButton');
  buttons.cleanButton = document.querySelector('#cleanButton');
  buttons.sleepButton = document.querySelector('#sleepButton');
  labels.feedPetTxt = document.querySelector('#foodText');
  labels.sleepPetTxt = document.querySelector('#sleepText');
  labels.cleanPetTxt = document.querySelector('#cleanText');
  sliders.redSlider = document.querySelector('#redSlider');
  sliders.greenSlider = document.querySelector('#greenSlider');
  sliders.blueSlider = document.querySelector('#blueSlider');
  buttons.saveColor = document.querySelector('#saveColor');
  buttons.revertColor = document.querySelector('#revertColor');
  labels.happinessTxt = document.querySelector('#happyText');
  meters.happyMeter = document.querySelector('#happyMeter');
  meters.foodMeter = document.querySelector('#foodMeter');
  meters.sleepMeter = document.querySelector('#sleepMeter');
  meters.cleanMeter = document.querySelector('#cleanMeter');
  inputs.petNameInput = document.querySelector('#petName');
  buttons.setPetNameButton = document.querySelector('#nameButton');
  labels.petNameTxt = document.querySelector('#petNameTxt');
  buttons.saveGameButton = document.querySelector('#saveGameButton');
  buttons.loadGameButton = document.querySelector('#loadGameButton');

  buttons.feedButton.addEventListener('click', pet.feedPet);
  buttons.cleanButton.addEventListener('click', pet.cleanPet);
  buttons.sleepButton.addEventListener('click', pet.sleepPet);
  buttons.saveColor.addEventListener('click', pet.saveColor);
  buttons.revertColor.addEventListener('click', pet.revertColor);
  sliders.redSlider.addEventListener('click', pet.previewColor);
  sliders.greenSlider.addEventListener('click', pet.previewColor);
  sliders.blueSlider.addEventListener('click', pet.previewColor);
  buttons.setPetNameButton.addEventListener('click', pet.setName);
  buttons.saveGameButton.addEventListener('click', pet.saveGame);
  buttons.loadGameButton.addEventListener('click', pet.loadGame);
}


export function ui() {
  labels.feedPetTxt.textContent = `Food Stat: ${pet.stats.food}`;
  labels.cleanPetTxt.textContent = `Cleanliness Stat: ${pet.stats.cleanliness}`;
  labels.sleepPetTxt.textContent = `Sleep Stat: ${pet.stats.sleep}`;
  labels.happinessTxt.textContent = `Happiness Stat: ${pet.stats.happiness}`;
  drawPet();

  // Meters Updating Below
  meters.foodMeter.value = pet.stats.food;
  meters.cleanMeter.value = pet.stats.cleanliness;
  meters.sleepMeter.value = pet.stats.sleep;
  meters.happyMeter.value = pet.stats.happiness;
}

export function setName() {
  labels.petNameTxt.textContent = `Pet Name: ${pet.stats.name}`;
}

function drawPet() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(250, 250, 100, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(220, 220, 20, 0, Math.PI * 2, true);
  ctx.arc(280, 220, 20, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(250, 280, 40, 0, Math.PI, false);
  ctx.fill();
  ctx.closePath();
}
