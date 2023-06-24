const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
let hitPosition;
let result = 0;
let currentTime = 5 ; 

function randomsquares(){
    squares.forEach(squares =>{
        squares.classList.remove('mole')
    })
    
    let randomPosition = squares[Math.floor(Math.random()*9)];
    randomPosition.classList.add('mole');
    // console.log(randomPosition);
    hitPosition =  randomPosition.id;
}

function moleMovement(){
    let timeId = null;
    timeId =  setInterval(randomsquares, 500);
}

const moleStop =  moleMovement();

squares.forEach(squares=>{
    squares.addEventListener('mousedown', () => {
        if(squares.id === hitPosition){
            result++;
            score.innerHTML = result;
        }
    })
})



function countDown(){
    currentTime--;
    timeLeft.innerHTML =  currentTime;
    if(currentTime===-1){
        clearInterval(myInterval);
        clearInterval(moleStop);
        alert("Game over!!!   Your score : "+ result);
        result = 0;
        currentTime = 5;
        timeLeft.innerHTML =currentTime; 
        score.innerHTML = result;
    }

    
}
let myInterval = setInterval(countDown,1000);






