'use strict';
const elePlayer1 = document.querySelector(".player--0");
const elePlayer2 = document.querySelector(".player--1");
const eleDice = document.querySelector(".dice");
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold")
const eleScore1 = document.getElementById("score--0");
const eleScore2 = document.getElementById("score--1");
const eleCurrent1 = document.getElementById("current--0");
const eleCurrent2 = document.getElementById("current--1");
let currentScore = 0;
//Starting Conditions
eleScore1.textContent = 0;
eleScore2.textContent = 0;
eleDice.classList.add('hidden');
elePlayer1.classList.add('player--active');
// Rolling dice functionally
btnRoll.addEventListener('click', function () {
    const diceNumber = Number(Math.round(Math.random() * 5) + 1);
    eleDice.classList.remove('hidden');
    eleDice.src =`dice-${diceNumber}.png`;
    if(diceNumber!==1){
        currentScore+= diceNumber;
        if(elePlayer1.classList.contains('player--active')){
            eleCurrent1.textContent = currentScore;
        }else{
            eleCurrent2.textContent = currentScore;
        }
    }
    else{
        currentScore = 0;
        if(elePlayer1.classList.contains('player--active')){
            eleCurrent1.textContent = currentScore;
            elePlayer1.classList.remove('player--active');
            elePlayer2.classList.add('player--active');
        }
        else{
            eleCurrent2.textContent = currentScore;
            elePlayer2.classList.remove('player--active');
            elePlayer1.classList.add('player--active');
        }
    }
});
btnHold.addEventListener('click', function(){
    if(elePlayer1.classList.contains('player--active')){
        eleScore1.textContent = parseInt(eleScore1.textContent)+currentScore;
        if(parseInt(eleScore1.textContent)>=100){
            elePlayer1.classList.remove('player--active');
            elePlayer1.classList.add('player--winner');
            eleScore1.textContent = "You Win!! 🎉🎉🎉";
            btnHold.disabled = true;
            btnRoll.disabled = true;
        }else{
            elePlayer1.classList.remove('player--active');
            elePlayer2.classList.add('player--active');
            currentScore = 0;
            eleCurrent1.textContent = currentScore;
        }
    }else{
        eleScore2.textContent = parseInt(eleScore2.textContent)+currentScore;
        if(parseInt(eleScore2.textContent)>=100){
            elePlayer2.classList.remove('player--active');
            elePlayer2.classList.add('player--winner');
            eleScore2.textContent = "You Win!! 🎉🎉🎉";
            btnHold.disabled = true;
            btnRoll.disabled = true;
        }else{
            elePlayer2.classList.remove('player--active');
            elePlayer1.classList.add('player--active');
            currentScore = 0;
            eleCurrent2.textContent = currentScore;
        }   
    }
});
//New game
btnNew.addEventListener('click',function(){
    eleScore1.textContent = 0;
    eleScore2.textContent = 0;
    eleDice.classList.add('hidden');
    currentScore = 0;
    eleCurrent1.textContent = 0;
    eleCurrent2.textContent = 0;
    btnHold.disabled = false;
    btnRoll.disabled = false;
    if(elePlayer2.classList.contains("player--active")){
        elePlayer2.classList.remove("player--active");
        elePlayer1.classList.add("player--active");
    }
    if(elePlayer1.classList.contains("player--winner")){
        elePlayer1.classList.remove("player--winner");
        elePlayer1.classList.add("player--active");
    }
    if(elePlayer2.classList.contains("player--winner")){
        elePlayer2.classList.remove("player--winner");
    }
})


