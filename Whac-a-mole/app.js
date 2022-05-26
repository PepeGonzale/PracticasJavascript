const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const boton = document.querySelector('button')

let currentTime = 60;
let result = 0;
let hitPosition
let timerId = null
function randomSquare(){
    //ForEach: array.forEach(function => console.log(function))
    squares.forEach(square => {
        square.classList.remove('mole')
        
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    
    hitPosition = randomSquare.id
}
/*Leemos lo que devuelve la variable squares (todos los id), creamos una funcion mousedown que cada vez que pulsemos el id que aparece mole
 igualamos las posiciones y aumentamos el resultado   
*/

squares.forEach(square => {square.addEventListener('mousedown', () =>{
    if(square.id == hitPosition){
        result++;
        score.textContent = result
        hitPosition = null
    }
})

})
function moveMole(){
    timerId = setInterval(randomSquare, 1000)
}

//Obtenemos un div random, con su correspondiente id
moveMole()
function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime
    if(currentTime == 0){
        //Cancelamos el metodo con clearInterval
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert(`GAME OVER! Your final score is ${result}`)
    }

}
let countDownTimerId = setInterval(countDown, 100)
function reiniciar(){
    boton.addEventListener('click', function(){
        location.reload();
    })
}
reiniciar()
