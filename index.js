const squares = document.querySelectorAll(".square")
const timeLeft = document.getElementById("time-left")
let score = document.getElementById("score")

let result = 0
let currentTime = 60
let hitPosition
let timerId = null


function randomSquare() {
    squares.forEach(className=>{
        className.classList.remove("makima")
    })
    let randomPosition = squares[Math.floor(Math.random()* 9)]
    randomPosition.classList.add("makima")
    hitPosition = randomPosition.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
        result++
        score.textContent = result
        hitPosition = null
      }
    })
  })

function movemakima()
{
    timerId = setInterval(randomSquare,800)
}

movemakima()

function countDown()
{
    currentTime --
    timeLeft.textContent = currentTime


    if(currentTime == 0)
    {
        clearInterval(timerId)
        clearInterval(countDowntimerId)
        alert("GAME OVER! Your final score is " + result)
    }
}

let countDowntimerId = setInterval(countDown,1000)
