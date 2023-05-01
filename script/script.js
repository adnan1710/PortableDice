// 'use strict';
var cube = document.querySelector('.cube');
var rollBtn = document.querySelector('.btn');
var currentClass = '';


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function rollDice() {

    var randNum = getRandomInt(1, 7);
    console.log(randNum)
    var showClass = 'show-' + randNum;
    console.log(showClass)
    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
}
rollDice();
rollBtn.addEventListener("click", rollDice);