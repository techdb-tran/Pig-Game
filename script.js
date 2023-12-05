'use strict';
const elePlayer1 = document.querySelector(".player--0");
const elePlayer2 = document.querySelector(".player--1");
const eleDice = document.querySelector(".dice");
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const eleCurrent1 = document.getElementById("current--0");
const eleCurrent2 = document.getElementById("current--1");
const eleScore1 = document.getElementById("score--0");
const eleScore2 = document.getElementById("score--1");

let scores, currentScore,activePlayer,playing;
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    //Starting Conditions
    eleScore1.textContent = 0;
    eleScore2.textContent = 0;
    eleCurrent1.textContent = 0;
    eleCurrent2.textContent = 0;
    eleDice.classList.add('hidden');
    elePlayer1.classList.remove('player--winner');
    elePlayer2.classList.remove('player--winner');
    elePlayer1.classList.add('player--active');
    elePlayer2.classList.remove('player--active');
}
init();
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer= (activePlayer === 0) ? 1 : 0;
    elePlayer1.classList.toggle("player--active");
    elePlayer2.classList.toggle("player--active");
}
// Rolling dice functionally
btnRoll.addEventListener('click', function () {
    if (playing) {
        const diceNumber = Number(Math.round(Math.random() * 5) + 1);
        eleDice.classList.remove('hidden');
        eleDice.src = `dice-${diceNumber}.png`;
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
});
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing =false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});
//New game
btnNew.addEventListener('click',init)


