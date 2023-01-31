// 'use strict';

// const btn = document.querySelector('.btn');
// const dice = document.querySelector('.cube');

// btn.addEventListener('click', function() {
//     // 1. Generating a random dice roll
//     const num = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     dice.src = `images/dice-${num}.png`;
// });

//select the classes we require
var cube = document.querySelector('.cube');
var rollBtn = document.querySelector('.btn');
var currentClass = '';

//this function will generate a random number between 1 and 6 (or whatever value you send it)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//our main roll dice function on click
function rollDice() {
    //genberate a random number between 1 and 6 with out getRandomInt function
    var randNum = getRandomInt(1, 7);
    console.log(randNum)
        //generate a class with the random number between 1 - 6 called showClass
    var showClass = 'show-' + randNum;
    console.log(showClass)
        // if there is a class already selected remove it
    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    // add the new showclass with the generated number
    cube.classList.add(showClass);
    //set the current class to the randomly generated number
    currentClass = showClass;
}
// set initial side
rollDice();
// on click eventlistener for the button element
rollBtn.addEventListener("click", rollDice);