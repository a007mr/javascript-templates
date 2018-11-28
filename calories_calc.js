/**
 * KeksoFit v0.1
 * Author: @keksobot
 * License: CatoFree, NoDogs
 */

var foodInGrams = 100;
var sleepInHours = 15;

var foodInGrams = keks.ask('Boss, how much have your eaten cat food?');

console.log('Got it. You have eaten ' + foodInGrams + ' gram.');

var sleepInHours = keks.ask('Boss, how much have you slept?');

console.log('Done. You have slept ' + sleepInHours + ' hours.');

var jumps = foodInGrams * 3 / 10;

var pulls = sleepInHours * 2;

var runs = jumps * 1 + pulls * 0.5;

console.log('Boss, then you need to do ' + jumps + ' jumps, ' + pulls + ' pulls, ' + runs + ' runs.’);