'use strict';

import * as pet from './pet.mjs';
// This function decrements the pets stats. it also ensures nothing goes below 0;
export function decrementStats() {
  if (pet.stats.isAlive === false) {
    return;
  }

  if (pet.stats.food <= 0) {
    pet.stats.food = 0;
    pet.death();
  } else {
    pet.stats.food -= pet.foodDec;
  }

  if (pet.stats.cleanliness <= 0) {
    pet.stats.cleanliness = 0;
    pet.death();
  } else {
    pet.stats.cleanliness -= pet.cleanlinessDec;
    pet.stats.needClean = false;
  }

  if (pet.stats.sleep <= 0) {
    pet.stats.sleep = 0;
    pet.death();
  } else {
    pet.stats.sleep -= pet.sleepDec;
  }

  if (pet.stats.happiness <= 100) {
    pet.stats.happiness = 0;
  }
  pet.stats.happiness = (pet.stats.sleep + pet.stats.food + pet.stats.sleep) / 3;
}
