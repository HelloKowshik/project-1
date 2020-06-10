let p1Display = document.getElementById('p1Score');
let p2Display = document.getElementById('p2Score');
let displayScore = document.getElementById('winningScore');
let inputScore = document.querySelector('.inputScore');
let p1Btn = document.querySelector('.btn-1');
let p2Btn = document.querySelector('.btn-2');
let resetBtn = document.querySelector('.btn-3');
let result = document.querySelector('.result');
let errMsg = document.querySelector('.err');
let gameOver = false;
let pl1 = 0;
let pl2 = 0;
let winningScore = 5; 
displayScore.innerText = winningScore;

inputScore.addEventListener('change', e => { 
        let val = parseInt(inputScore.value);
    if (!val || val < 0) {
            e.target.value = '';
            errMsg.innerHTML = 'Only Numbers Are Valid!';
            p1Btn.setAttribute('disabled', 'disabled');
            p2Btn.setAttribute('disabled', 'disabled');
            console.log(val);
        }
        else {
            e.target.value = '';
            errMsg.innerHTML = '';
            p1Btn.removeAttribute('disabled');
            p2Btn.removeAttribute('disabled');
            winningScore = val;
            displayScore.innerText = winningScore;
            resetBtnFunc();
            console.log(val,winningScore);
    }    
});
p1Btn.addEventListener('click', function (e) { 
    if (!gameOver) {
        pl1++;
        p1Display.innerHTML = pl1;
        if (pl1 === winningScore) {
            gameOver = true;
            p1Btn.setAttribute('disabled', 'disabled');
            p2Btn.setAttribute('disabled', 'disabled');
            result.innerHTML = 'Player 1 Wins The Game!';
            winningScore = 5;
        }
    }
});

p2Btn.addEventListener('click', function (e) { 
    if (!gameOver) {
        pl2++;
        p2Display.innerHTML = pl2;
        if (pl2 === winningScore) {
            gameOver = true;
            p1Btn.setAttribute('disabled', 'disabled');
            p2Btn.setAttribute('disabled', 'disabled');
            result.innerHTML = 'Player 2 Wins The Game!';
            winningScore = 5;
        }
    }

});

resetBtn.addEventListener('click', function (e) { 
    resetBtnFunc();
    winningScore = 5;
    displayScore.textContent = 5;
});

function resetBtnFunc(){
    pl1 = 0;
    pl2 = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameOver = false;
    result.innerHTML = '';
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    result.innerHTML = '';
}
