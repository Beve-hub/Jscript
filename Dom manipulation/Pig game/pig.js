'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelectorId('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]

let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function() {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

   // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

   // check for 1:  
    if (dice !== 1  ) {
        // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
      current0El.textContent = currentScore; 
    }else {
         //switch to next roll
         document.getElementById(`current--${activePlayer}`).textContent = 0;
         activePlayer = activePlayer === 0 ? 1 : 0;
          currentScore = 0;
    }
})
