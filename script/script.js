'use strict';

const btn = document.querySelector('.btn');
const dice = document.querySelector('.dicepic');

btn.addEventListener('click', function() {
    // 1. Generating a random dice roll
    const num = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    dice.src = `images/dice-${num}.png`;
});